import { MailtrapClient } from "mailtrap";
import { NextResponse } from "next/server";
// import DOMPurify from "isomorphic-dompurify"; // Removed DOMPurify import
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis and Rate Limiter
let redis;
let ratelimit;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
    analytics: true, // Enables analytics on Upstash
  });
} else {
  console.warn(
    "Upstash Redis environment variables not set. Rate limiting is disabled."
  );
}

const TOKEN = process.env.MAILTRAP_API_TOKEN;
const SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL;
// New Environment Variables for Marketing List
const ACCOUNT_ID = process.env.MAILTRAP_ACCOUNT_ID;
const LIST_ID = process.env.MAILTRAP_LIST_ID;

const client = new MailtrapClient({ token: TOKEN });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  // Rate limiting logic
  if (ratelimit) {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
  }

  try {
    // Precondition Check: Ensure the service is configured to handle signups.
    if (!ACCOUNT_ID || !LIST_ID) {
      console.error(
        "CRITICAL: Mailing list is not configured. Missing ACCOUNT_ID or LIST_ID in .env. Cannot process signup."
      );
      return NextResponse.json(
        {
          success: false,
          message: "This feature is not configured correctly on the server.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, name } = body;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Sanitize the name if it exists, otherwise use the default
    const sanitizedName = name ? name.replace(/<[^>]*>?/gm, '') : "Gamer";

    // 1. Send the "Welcome" email using the Template
    // This handles the immediate email delivery (Transactional Stream)
    await client.send({
      from: {
        email: SENDER_EMAIL,
        name: "Ctrl Studio",
      },
      to: [{ email: email }],
      template_uuid: "ee195194-295f-4f51-91bf-b4903aca0a9e",
      template_variables: {
        name: sanitizedName,
        company_name: "Ctrl Studio",
      },
    });

    // 2. Add to Mailtrap Contact List (Marketing Stream)
    const addContactResponse = await fetch(
      `https://mailtrap.io/api/accounts/${ACCOUNT_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Token": TOKEN,
        },
        body: JSON.stringify({
          contact: {
            email: email,
            fields: {
              first_name: sanitizedName,
            },
            list_ids: [parseInt(LIST_ID)], // List ID must be an integer array
          },
        }),
      }
    );

    // Log error if adding contact fails
    if (!addContactResponse.ok) {
      const errorBody = await addContactResponse.json();

      // Check for the specific "already taken" error from Mailtrap
      if (
        errorBody.errors &&
        errorBody.errors.email &&
        errorBody.errors.email[0].includes("has already been taken")
      ) {
        // Return a success response to the client to show that they are already in the list.
        return NextResponse.json({
          success: true,
          message: "You are already on the list!",
        });
      } else {
        // This is a different, unexpected error. Log it and return a 500.
        console.error("Failed to add contact to list:", errorBody);
        return NextResponse.json(
          {
            success: false,
            message: "An unexpected error occurred.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email sent and contact added!",
    });
  } catch (error) {
    console.error("Mailtrap Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
