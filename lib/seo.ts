import { siteConfig } from "@/config/site";

export function ensureMinDescription(desc: string | undefined, fallback: string): string {
  const base = (desc?.trim() || fallback?.trim() || "").replace(/\s+/g, " ");
  // Google truncates meta descriptions at ~160 characters — keep it concise
  if (base.length <= 160) return base;
  // Truncate at last complete sentence or word boundary within 160 chars
  const truncated = base.slice(0, 160);
  const lastSpace = truncated.lastIndexOf(" ");
  return lastSpace > 100 ? truncated.slice(0, lastSpace) : truncated;
}

export function ensureMinKeywords(keywords: string[] | undefined, extras: string[] = []): string[] {
  const base = Array.from(new Set([...(keywords || []), ...extras]))
    .map((k) => k.trim())
    .filter(Boolean);
  const defaults = [
    "Payroll Jamaica",
    "Jamaica payroll software",
    "HR software Jamaica",
    "PAYE",
    "NIS",
    "NHT",
    "statutory compliance Jamaica",
    "Jamaica payroll taxes",
    "payslips Jamaica",
    "PAYE filings",
    "NIS deductions",
    "NHT contributions",
    "payroll automation",
    "leave management",
    "employee management",
    "small business payroll Jamaica",
    "tax compliance Jamaica",
  ];
  const out = [...base];
  let i = 0;
  while (out.length < 15) {
    out.push(defaults[i % defaults.length]);
    i++;
  }
  return Array.from(new Set(out)).slice(0, Math.max(15, out.length));
}

export function canonical(pathname: string) {
  const base = siteConfig.url?.replace(/\/$/, "") || "";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${p}`;
}
