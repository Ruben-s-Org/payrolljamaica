import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Payroll for Jamaica's transportation and logistics industry — Payroll Jamaica automates PAYE, NIS, NHT, and Education Tax for transport companies, trucking firms, route taxi operators, shipping companies, and logistics providers. Handle driver pay, trip-based commissions, and fleet management payroll across Jamaica.";

export const metadata: Metadata = {
  title: "Transportation & Logistics Payroll Jamaica — Payroll for Drivers & Transport Companies | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's transport and logistics sector. Trucking companies, route taxis, shipping firms, and courier services trust Payroll Jamaica for compliant PAYE, NIS, NHT, and trip-based pay automation.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "transportation payroll Jamaica",
    "logistics payroll Jamaica",
    "trucking payroll Jamaica",
    "driver payroll Jamaica",
    "transport company payroll Jamaica",
    "route taxi payroll Jamaica",
    "shipping company payroll Jamaica",
    "courier payroll Jamaica",
    "PAYE transport sector Jamaica",
    "NIS NHT drivers Jamaica",
    "payroll for transport companies Jamaica",
    "fleet payroll Jamaica",
    "logistics company payroll Jamaica",
    "bus driver payroll Jamaica",
    "freight company payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/transportation-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/transportation-payroll-jamaica"),
      en: canonical("/transportation-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Transportation & Logistics Payroll Jamaica — Drivers, Trucking & Freight | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/transportation-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Transportation Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportation & Logistics Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const transportPainPoints = [
  {
    problem: "Trip-based and commission driver pay",
    solution:
      "Jamaica's bus operators, private hire drivers, and freight companies often pay per trip, per km, or by commission. Payroll Jamaica handles variable pay structures and applies correct PAYE on all earnings types.",
  },
  {
    problem: "Large driver workforces with shift rotations",
    solution:
      "Transport companies manage dozens or hundreds of drivers on rotating shifts. Payroll Jamaica handles shift-differential pay, overtime calculations, and bulk payroll runs — processing your entire driver fleet in minutes.",
  },
  {
    problem: "NIS and NHT for drivers classified as employees vs contractors",
    solution:
      "The employment status of drivers in Jamaica is a compliance minefield. Payroll Jamaica correctly classifies employees and applies NIS/NHT/PAYE accordingly, helping you avoid TAJ penalties for misclassification.",
  },
  {
    problem: "Allowances and reimbursements for transport workers",
    solution:
      "Fuel allowances, meal allowances, and overnight stay reimbursements are common in Jamaica's transport sector. Payroll Jamaica separates taxable allowances from non-taxable reimbursements — correct PAYE treatment every time.",
  },
];

const transportFeatures = [
  {
    title: "Variable & trip-based pay",
    desc: "Handle per-trip rates, per-km pay, and commission structures for Jamaica's transport operators. Correct PAYE applied on every earnings type — flat, variable, and supplemental.",
  },
  {
    title: "Overtime & shift differential",
    desc: "Jamaica's Labour Relations Code requires 1.5x overtime after 40 hours/week. Payroll Jamaica automatically calculates overtime and shift differentials for drivers on irregular schedules.",
  },
  {
    title: "Allowance tax treatment",
    desc: "Correctly separate taxable allowances (e.g., meal allowances above the non-taxable threshold) from genuine reimbursements. Avoid PAYE errors on fuel, mileage, and accommodation payments.",
  },
  {
    title: "Bulk payroll for large fleets",
    desc: "Process payroll for 50, 100, or 500 transport workers simultaneously. Import hours and trip counts, review totals, and approve — bulk runs in minutes.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate TD4, NIS Schedule 7, NHT employer returns, and Education Tax reports monthly — ready for TAJ, NIS, and NHT submission.",
  },
  {
    title: "Bank file export",
    desc: "Pay your entire driver and logistics team in one bank transfer. Generate files compatible with NCB, Scotiabank, and all Jamaican commercial banks.",
  },
];

const transportSubsectors = [
  { name: "Trucking & Freight", desc: "Inter-parish trucking companies, container haulage, and freight forwarding businesses across Jamaica" },
  { name: "Route Taxis & Minibuses", desc: "JUTC-licensed operators, route taxis, and private minibus services across Kingston and Jamaica's parishes" },
  { name: "Courier & Delivery", desc: "Knutsford Express, Caribbean Producers, and Jamaica's growing last-mile delivery sector" },
  { name: "Shipping & Port Services", desc: "Kingston Container Terminal contractors, port stevedores, and shipping agency staff" },
  { name: "Tourism Transport", desc: "Airport transfers, tour buses, and resort ground transportation services island-wide" },
  { name: "Corporate & Staff Transport", desc: "Staff bus operators, corporate shuttle services, and employee transportation contractors" },
];

const transportFaqs = [
  {
    q: "How does Payroll Jamaica handle per-trip pay for bus and taxi operators?",
    a: "Payroll Jamaica supports custom earning categories. You can set up per-trip pay as a variable earning, enter trip counts each pay period, and the system calculates gross pay and applies the correct PAYE, NIS, NHT, and Education Tax.",
  },
  {
    q: "How do you calculate overtime for drivers who work more than 40 hours per week?",
    a: "Jamaica's Labour Relations Code requires overtime pay at 1.5x the regular rate after 40 hours per week. Payroll Jamaica automatically calculates overtime hours based on the regular hours threshold and pays the correct rate.",
  },
  {
    q: "What's the correct NIS and NHT treatment for contracted vs employed drivers?",
    a: "Employed drivers (on a contract of service) are subject to NIS, NHT, PAYE, and Education Tax. Independent contractors (contract for service) are not subject to NIS or NHT from the employer. Payroll Jamaica handles both employment types correctly — critical to avoid TAJ penalties.",
  },
  {
    q: "Can I run payroll for transport operations in multiple parishes?",
    a: "Yes. Payroll Jamaica is nationwide. Run payroll for Kingston depots, Montego Bay bases, and rural fleet locations from one account — with location-level cost reporting.",
  },
  {
    q: "How do I handle fuel and meal allowances in payroll?",
    a: "Payroll Jamaica lets you configure allowances as taxable or non-taxable. Meal allowances up to the Jamaica Revenue Authority's approved threshold are non-taxable. Fuel allowances used for personal purposes are taxable. Our support team can help you configure the correct treatment.",
  },
];

export default function TransportationPayrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's transport sector
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Jamaica's<br />transportation industry
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Trucking companies, bus operators, shipping firms, and logistics providers trust Payroll Jamaica. Handle trip-based pay, overtime, allowances, and PAYE for Jamaica's transport workforce — all automated.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — transport companies welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate driver payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Transport payroll challenges — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {transportPainPoints.map((item) => (
                <div key={item.problem} className="rounded-xl border border-border bg-background p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✗</span>
                    <p className="font-semibold text-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Payroll built for transport operations
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From 5-truck haulage companies to 200-driver bus networks — Payroll Jamaica handles transport payroll at every scale.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-sectors */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Serving Jamaica's full transport sector
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From Kingston Container Terminal to rural parish route taxis — we cover every segment of Jamaica's transportation economy.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transportSubsectors.map((sub) => (
                <div key={sub.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{sub.name}</p>
                  <p className="text-sm text-muted-foreground">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted by Jamaica's transport companies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Kingston's transport hubs to parish freight depots — Payroll Jamaica keeps Jamaica's transport workforce paid correctly and on time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for transport SMEs" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Transport payroll FAQ
            </h2>
            <div className="space-y-6">
              {transportFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Explore more of Payroll Jamaica</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-sm text-center">
              <Link href="/calculator" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Calculator
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica
              </Link>
              <Link href="/pricing" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Pricing Plans
              </Link>
              <Link href="/payroll-kingston-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Kingston
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Start your transport payroll today
            </h2>
            <p className="text-muted-foreground">
              Jamaica's transport companies deserve payroll software that handles their unique needs. Get your drivers paid correctly — every fortnight.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/payroll-company-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all Jamaica services
              </Link>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: "Payroll Jamaica — Transportation & Logistics Payroll",
                  description: baseDescription,
                  url: `${siteConfig.url}/transportation-payroll-jamaica`,
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: transportFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Industries", item: `${siteConfig.url}/industries` },
                    { "@type": "ListItem", position: 3, name: "Transportation Payroll Jamaica", item: `${siteConfig.url}/transportation-payroll-jamaica` },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
