import { MailtrapClient } from "mailtrap";
import { NextResponse } from "next/server";

const TOKEN = process.env.MAILTRAP_API_TOKEN;
const SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL;
// New Environment Variables for Marketing List
const ACCOUNT_ID = process.env.MAILTRAP_ACCOUNT_ID;
const LIST_ID = process.env.MAILTRAP_LIST_ID;

const client = new MailtrapClient({ token: TOKEN });

// In-memory store for rate limiting
const rateLimitStore = {};
const RATE_LIMIT_DURATION = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";

  const now = Date.now();
  const windowStart = now - RATE_LIMIT_DURATION;

  const userRequests = (rateLimitStore[ip] || []).filter(
    (timestamp) => timestamp > windowStart
  );

  if (userRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

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
        name: name || "Gamer",
        company_name: "Ctrl Studio",
      },
    });

    // 2. Add to Mailtrap Contact List (Marketing Stream)
    // This saves the user to your "Contacts" tab so you can email them later.
    if (ACCOUNT_ID && LIST_ID) {
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
                first_name: name || "Gamer",
              },
              list_ids: [parseInt(LIST_ID)], // List ID must be an integer array
            },
          }),
        }
      );

      // Log error if adding contact fails
      if (!addContactResponse.ok) {
        console.error("Failed to add contact to list");
        return NextResponse.json(
          {
            success: false,
            message: "An unexpected error occurred.",
          },
          { status: 500 }
        );
      }

      // Update rate limit store
      rateLimitStore[ip] = [...userRequests, now];

      return NextResponse.json({
        success: true,
        message: "Email sent and contact added!",
      });
    } else {
      console.warn(
        "Skipping Contact List add: Missing ACCOUNT_ID or LIST_ID in .env"
      );
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Mailtrap Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
