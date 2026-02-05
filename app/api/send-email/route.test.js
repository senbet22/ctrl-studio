import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  beforeAll,
  afterAll,
} from "vitest";

// ----------------------------------------------------------------------
// 1. Mock External Dependencies (Hoisted)
// ----------------------------------------------------------------------

const { mockLimit, mockSend } = vi.hoisted(() => {
  return {
    mockLimit: vi.fn(),
    mockSend: vi.fn(),
  };
});

// Mock Upstash Ratelimit
vi.mock("@upstash/ratelimit", () => {
  return {
    Ratelimit: class {
      constructor() {
        this.limit = mockLimit;
      }
      static slidingWindow() {
        return vi.fn();
      }
    },
  };
});

// Mock Upstash Redis
vi.mock("@upstash/redis", () => {
  return {
    Redis: class {
      constructor() {}
    },
  };
});

// Mock Mailtrap Client
vi.mock("mailtrap", () => {
  return {
    MailtrapClient: class {
      constructor() {
        this.send = mockSend;
      }
    },
  };
});

// Mock global fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

// ----------------------------------------------------------------------
// 2. Test Suite
// ----------------------------------------------------------------------
describe("POST /api/send-email", () => {
  let POST;

  beforeAll(async () => {
    // Use vi.stubEnv for "modern" env var mocking
    vi.stubEnv("UPSTASH_REDIS_REST_URL", "https://fake-url.upstash.io");
    vi.stubEnv("UPSTASH_REDIS_REST_TOKEN", "fake-token");
    vi.stubEnv("MAILTRAP_API_TOKEN", "fake-mailtrap-token");
    vi.stubEnv("MAILTRAP_SENDER_EMAIL", "sender@example.com");
    vi.stubEnv("MAILTRAP_ACCOUNT_ID", "12345");
    vi.stubEnv("MAILTRAP_LIST_ID", "67890");

    // Dynamically import the module so it picks up the env vars set above.
    // We avoid assigning to a variable named 'module' to prevent conflicts.
    const routeModule = await import("./route");
    POST = routeModule.POST;
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  beforeEach(() => {
    vi.clearAllMocks();

    // Default "Happy Path" Mocks
    mockLimit.mockResolvedValue({
      success: true,
      limit: 10,
      remaining: 9,
      reset: 0,
    });

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    mockSend.mockResolvedValue({ success: true });
  });

  const createRequest = (body) => {
    return new Request("http://localhost:3000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "127.0.0.1",
      },
      body: JSON.stringify(body),
    });
  };

  // --- Scenario 1: The "Happy Path" ---
  it("should successfully send email and add contact when data is valid", async () => {
    const req = createRequest({ email: "test@example.com", name: "John Doe" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.success).toBe(true);

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: [{ email: "test@example.com" }],
        template_variables: expect.objectContaining({ name: "John Doe" }),
      })
    );

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  // --- Scenario 2: The "Fail Open" Protection ---
  it("should still send email if Upstash Rate Limiting fails (Fail Open)", async () => {
    mockLimit.mockRejectedValue(new Error("Redis connection failed"));

    const req = createRequest({
      email: "failopen@example.com",
      name: "Survivor",
    });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.success).toBe(true);

    expect(mockSend).toHaveBeenCalled();
  });

  // --- Scenario 3: The "Already Subscribed" Case ---
  it("should return success if user is already on the mailing list", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: async () => ({
        errors: {
          email: ["The email has already been taken."],
        },
      }),
    });

    const req = createRequest({ email: "existing@example.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.message).toBe("You are already on the list!");
  });

  // --- Scenario 4: Input Validation ---
  it("should return 400 for invalid email", async () => {
    const req = createRequest({ email: "not-an-email", name: "Hacker" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Invalid email");

    expect(mockSend).not.toHaveBeenCalled();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  // --- Scenario 5: Rate Limiting ---
  it("should return 429 if rate limit is exceeded", async () => {
    mockLimit.mockResolvedValue({ success: false });

    const req = createRequest({ email: "spammer@example.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(429);
    expect(json.error).toBe("Too many requests");

    expect(mockSend).not.toHaveBeenCalled();
  });
});
