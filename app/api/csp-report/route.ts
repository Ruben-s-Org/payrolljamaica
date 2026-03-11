import { NextRequest, NextResponse } from "next/server";

// Rate limiting: track IPs reporting violations (in-memory, resets on restart)
const reportCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // max reports per IP per minute
const WINDOW_MS = 60_000;

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const record = reportCounts.get(ip);
  if (record && now < record.resetAt) {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    record.count++;
  } else {
    reportCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  let body: unknown;
  try {
    const text = await request.text();
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Log CSP violation — in production wire this to your observability stack
  const report = (body as Record<string, unknown>)?.["csp-report"] ?? body;
  console.warn("[CSP-VIOLATION]", JSON.stringify({
    timestamp: new Date().toISOString(),
    ip,
    report,
  }));

  return NextResponse.json({ received: true }, { status: 204 });
}
