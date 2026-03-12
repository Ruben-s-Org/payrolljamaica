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

// Anonymize IP: mask last octet for IPv4, last group for IPv6
// Compliance: Jamaica Data Protection Act — IP is personal data
function anonymizeIp(ip: string): string {
  if (ip === "unknown") return ip;
  // IPv4
  const v4 = ip.match(/^(\d{1,3}\.\d{1,3}\.\d{1,3})\.\d{1,3}$/);
  if (v4) return `${v4[1]}.xxx`;
  // IPv6
  const v6parts = ip.split(":");
  if (v6parts.length > 1) {
    return [...v6parts.slice(0, -1), "xxxx"].join(":");
  }
  return "redacted";
}

// Extract and validate known CSP report fields only (prevent log injection)
function sanitizeCspReport(raw: unknown): Record<string, string | null> {
  if (typeof raw !== "object" || raw === null) return { error: "invalid-report" };
  const r = raw as Record<string, unknown>;
  const safe = (v: unknown) => (typeof v === "string" ? v.slice(0, 512).replace(/[\r\n]/g, " ") : null);
  return {
    "blocked-uri": safe(r["blocked-uri"]),
    "document-uri": safe(r["document-uri"]),
    "violated-directive": safe(r["violated-directive"]),
    "effective-directive": safe(r["effective-directive"]),
    "original-policy": safe(r["original-policy"]),
    "status-code": safe(r["status-code"]),
    "referrer": safe(r["referrer"]),
  };
}

export async function POST(request: NextRequest) {
  const now = Date.now();

  // Periodic cleanup of expired rate-limit entries
  if (now - lastPurge > PURGE_INTERVAL_MS) purgeExpired(now);

  // Rate limiting — note: x-forwarded-for can be spoofed; this is best-effort
  // to reduce log noise, not a security boundary.
  const rawIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const record = reportCounts.get(rawIp);
  if (record && now < record.resetAt) {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    record.count++;
  } else {
    reportCounts.set(rawIp, { count: 1, resetAt: now + WINDOW_MS });
  }

  let body: unknown;
  try {
    const text = await request.text();
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Extract and sanitize CSP report fields — validate structure, no arbitrary logging
  const rawReport = (body as Record<string, unknown>)?.["csp-report"] ?? body;
  const report = sanitizeCspReport(rawReport);

  // Log with anonymized IP (Jamaica Data Protection Act compliance)
  console.warn("[CSP-VIOLATION]", JSON.stringify({
    timestamp: new Date().toISOString(),
    ip: anonymizeIp(rawIp),
    report,
  }));

  return NextResponse.json({ received: true }, { status: 200 });
}
