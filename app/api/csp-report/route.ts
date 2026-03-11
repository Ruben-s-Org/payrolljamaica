import { NextRequest, NextResponse } from "next/server";

// Rate limiting: track IPs reporting violations (in-memory, resets on restart)
const reportCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // max reports per IP per minute
const WINDOW_MS = 60_000;
// Purge expired entries every 5 minutes to prevent unbounded memory growth
const PURGE_INTERVAL_MS = 5 * 60_000;
let lastPurge = Date.now();

function purgeExpired(now: number) {
  for (const [ip, record] of reportCounts) {
    if (now >= record.resetAt) reportCounts.delete(ip);
  }
  lastPurge = now;
}

export async function POST(request: NextRequest) {
  const now = Date.now();

  // Periodic cleanup of expired rate-limit entries
  if (now - lastPurge > PURGE_INTERVAL_MS) purgeExpired(now);

  // Rate limiting — note: x-forwarded-for can be spoofed; this is best-effort
  // to reduce log noise, not a security boundary.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
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
