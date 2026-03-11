import { Section } from "../../ui/section";

const trustSignals = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "Compliant with TAJ Requirements",
    description:
      "Built to meet Tax Administration Jamaica standards for PAYE, NIS, NHT, and Education Tax filings.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Trusted by Jamaican Businesses",
    description:
      "Companies across Kingston, Montego Bay, and island-wide rely on PayrollJamaica every pay cycle.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: "Accurate Statutory Calculations",
    description:
      "PAYE, NIS, NHT, Education Tax, and HEART levy — always up to date with the latest rates and thresholds.",
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
        </div>
        <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="flex flex-col items-center text-center rounded-2xl border bg-card p-8"
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
      </div>
    </Section>
  );
}
