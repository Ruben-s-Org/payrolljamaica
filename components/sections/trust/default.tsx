import { Section } from "../../ui/section";

const trustSignals = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "Built for Jamaica's Tax Rules",
    description:
      "Purpose-built to meet Tax Administration Jamaica (TAJ) standards for PAYE, NIS, NHT, Education Tax, and HEART/NSTA filings — not a generic international tool.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
    ),
    title: "Updated for 2025/2026 Tax Year",
    description:
      "Current PAYE threshold (J$1,500,096), NIS ceiling, NHT rates, and Education Tax rates — always reflecting the latest GOJ budget changes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
    ),
    title: "Compatible with NCB, JN, Scotiabank",
    description:
      "Generate bank-ready ACH and payment files for NCB, JN Bank, Scotiabank, Sagicor Bank, and FirstCaribbean — direct salary uploads, no reformatting.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    ),
    title: "TAJ-Ready Reports",
    description:
      "SO1, P24, NIS returns, and NHT remittance files formatted exactly as TAJ expects — print, sign, and submit without manual rework.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Used by Kingston & Montego Bay Businesses",
    description:
      "Companies across Kingston, Montego Bay, Mandeville, Ocho Rios, and island-wide rely on PayrollJamaica every pay cycle — from 5-person shops to 500-employee operations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: "Accurate Statutory Calculations",
    description:
      "PAYE, NIS, NHT, Education Tax, and HEART levy calculated automatically every pay run — zero manual spreadsheets, zero compliance risk.",
  },
];

export default function TrustSignals() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Jamaican businesses choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Built for Jamaica. Trusted locally.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            PayrollJamaica is the only payroll software designed from the ground
            up for Jamaica&apos;s regulatory environment — not a foreign tool
            with a Jamaican flag slapped on.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="flex flex-col items-center text-center rounded-2xl border bg-card p-8 transition hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {signal.icon}
              </div>
              <h3 className="text-base font-semibold">{signal.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-14 border-t pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              256-bit SSL Encrypted
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              TAJ Compliant
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              Free 14-Day Trial
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              Local JA Support
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
