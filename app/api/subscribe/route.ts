import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  const now = Date.now();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // Rate limit
  const record = rateLimitMap.get(ip);
  if (record && now < record.resetAt) {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }
    record.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  let body: { email?: string; tag?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (apiKey && formId) {
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: apiKey,
            email,
            tags: body.tag ? [body.tag] : [],
          }),
        },
      );

      if (!res.ok) {
        console.error(
          "[subscribe] ConvertKit error:",
          res.status,
          await res.text(),
        );
      }
    } catch (err) {
      console.error("[subscribe] ConvertKit request failed:", err);
    }
  } else {
    // ConvertKit not configured — log for manual follow-up
    console.log(
      "[subscribe] Email captured (ConvertKit not configured):",
      email,
      body.tag ?? "",
    );
  }

  return NextResponse.json({ success: true });
}
