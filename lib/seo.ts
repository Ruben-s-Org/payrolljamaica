import { siteConfig } from "@/config/site";

export function ensureMinDescription(desc: string | undefined, fallback: string): string {
  const base = (desc?.trim() || "").replace(/\s+/g, " ");
  if (base.split(" ").length >= 150) return base;
  // Pad with fallback copy until roughly >=150 words
  const needed = 150 - base.split(" ").length;
  const fillerWords = (fallback || "").replace(/\s+/g, " ").split(" ");
  const pad = [] as string[];
  for (let i = 0; i < needed; i++) {
    pad.push(fillerWords[i % fillerWords.length] || "Payroll");
  }
  return (base + " " + pad.join(" ")).trim();
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
