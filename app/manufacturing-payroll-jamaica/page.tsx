import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Manufacturing payroll software built specifically for Jamaica's factories, Free Zones, and production facilities. Handle shift workers, overtime, piece-rate pay, union agreements, and all statutory deductions — PAYE, NIS, NHT, Education Tax — automated for Jamaica's manufacturing sector. Trusted by factories from Kingston to Spanish Town.";

export const metadata: Metadata = {
  title: "Manufacturing Payroll Jamaica — Factory & Production Payroll Software | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software built for Jamaica's manufacturers. Automate shift differentials, overtime, piece-rate pay, union deductions, and all statutory filings for factories, Free Zones, and production businesses across Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "manufacturing payroll Jamaica",
    "factory payroll Jamaica",
    "production payroll Jamaica",
    "Free Zone payroll Jamaica",
    "shift worker payroll Jamaica",
    "overtime payroll Jamaica",
    "piece rate payroll Jamaica",
    "union payroll Jamaica",
    "industrial payroll Jamaica",
    "payroll for manufacturers Jamaica",
    "manufacturing PAYE Jamaica",
    "factory NIS NHT Jamaica",
    "Spanish Town Free Zone payroll",
    "Kingston Free Zone payroll",
    "payroll software manufacturing Jamaica",
  ]),
  alternates: {
    canonical: canonical("/manufacturing-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/manufacturing-payroll-jamaica"),
      en: canonical("/manufacturing-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Manufacturing Payroll Jamaica — Factory & Production Payroll Software | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/manufacturing-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Manufacturing Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Payroll Jamaica | Factory Payroll Software | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const painPoints = [
  {
    problem: "Shift differentials calculated wrong every month",
    solution:
      "Jamaica factories run two or three shifts — regular, evening, and night. Payroll Jamaica calculates each shift's pay correctly, applies overtime at 1.5x after 40 hours per week, and ensures every worker gets their correct gross pay before deductions.",
  },
  {
    problem: "Piece-rate workers are a compliance nightmare",
    solution:
      "Garment factories, assembly plants, and food processors often pay by output. Payroll Jamaica handles piece-rate pay, ensures PAYE is applied correctly to variable weekly earnings, and keeps NIS contributions accurate regardless of how pay is structured.",
  },
  {
    problem: "Union deductions must be precise and on time",
    solution:
      "Unionised manufacturing workforces require exact union dues deductions every pay period. Payroll Jamaica supports custom recurring deductions — enter the union rate once and it applies automatically every payroll run.",
  },
  {
    problem: "High headcount means more compliance risk",
    solution:
      "A 300-person factory is one spreadsheet error away from a TAJ audit. Payroll Jamaica runs every calculation against current Jamaica tax tables, generates audit-ready reports, and creates digital records of every payroll run.",
  },
];

const features = [
  {
    title: "Shift & overtime payroll",
    desc: "Configure regular, evening, and night shift pay rates. Payroll Jamaica calculates overtime at 1.5x after 40 hours and public holiday double-pay automatically — per Jamaica Labour Relations Code requirements.",
  },
  {
    title: "Piece-rate and variable pay support",
    desc: "Pay workers by units produced, tasks completed, or variable output. Payroll Jamaica applies correct PAYE, NIS, NHT, and Education Tax to variable earnings — fully compliant with Jamaica tax law.",
  },
  {
    title: "Union and voluntary deductions",
    desc: "Configure recurring deductions for union dues, credit union loans, staff savings schemes, and NHF contributions. Each deduction applies automatically every pay run — no manual tracking.",
  },
  {
    title: "Full Jamaica statutory compliance",
    desc: "PAYE, NIS, NHT, and Education Tax at 2025/2026 rates — automated. Every TAJ budget change is applied instantly. Your factory never pays the wrong rates.",
  },
  {
    title: "Large workforce payroll in minutes",
    desc: "Process payroll for 50, 200, or 500 workers in a single automated run. Generate bank files for NCB, Scotiabank, CIBC FirstCaribbean, and Sagicor Bank — bulk transfer your entire workforce on payday.",
  },
  {
    title: "Compliant statutory reports",
    desc: "Generate monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click. Ready for TAJ, NIS, and NHT submission. Audit trail maintained for every payroll run.",
  },
];

const sectors = [
  { name: "Food & Beverage Manufacturing", desc: "Breweries, soft drink manufacturers, snack producers, and food processing plants — including Red Stripe, GraceKennedy, and Salada operations" },
  { name: "Garment & Apparel", desc: "Clothing factories, textile manufacturers, and Free Zone apparel exporters across Kingston and Spanish Town industrial zones" },
  { name: "Building Materials", desc: "Cement plants, pre-cast concrete facilities, roofing manufacturers, and hardware supply businesses including Carib Cement" },
  { name: "Chemical & Pharmaceutical", desc: "Chemical manufacturers, pharmaceutical producers, cleaning product companies, and cosmetics manufacturers" },
  { name: "Logistics & Distribution", desc: "Warehousing operations, freight handlers, distribution centres, and third-party logistics providers across Jamaica" },
  { name: "Free Zone Operations", desc: "Export-oriented manufacturers operating in the Kingston Free Zone, Spanish Town Free Zone, and other Special Economic Zones" },
];

const faqs = [
  {
    q: "How does Payroll Jamaica handle different shift pay rates?",
    a: "You configure the base rate for each employee and any shift differentials (e.g. +15% for night shift). Payroll Jamaica applies the correct rate based on the shift type you enter, calculates PAYE on total earnings, and generates an itemised payslip showing base pay, shift premium, and all deductions.",
  },
  {
    q: "Can Payroll Jamaica handle piece-rate pay for garment factory workers?",
    a: "Yes. You enter the units produced and piece rate per unit each pay period. Payroll Jamaica calculates gross earnings, then applies PAYE, NIS, NHT, and Education Tax at the correct Jamaica rates. Variable earnings are handled correctly for statutory compliance.",
  },
  {
    q: "We have union workers — can Payroll Jamaica deduct union dues automatically?",
    a: "Yes. Set up recurring deductions for union dues at a fixed amount or percentage of earnings. The deduction applies automatically every payroll run and appears on each employee's payslip. You can adjust or override any period if needed.",
  },
  {
    q: "Our factory runs 200 workers — can Payroll Jamaica handle that volume?",
    a: "Absolutely. Payroll Jamaica processes payrolls of any size in one automated run. Large workforces are handled identically to small ones — you just have more employees in the system. Bank files and statutory reports scale automatically.",
  },
  {
    q: "How does Payroll Jamaica help if TAJ audits our factory payroll?",
    a: "Every payroll run is recorded digitally with full calculation details. Payroll Jamaica generates audit-ready reports: monthly payroll registers, PAYE summaries, NIS schedules, and NHT contribution histories. You can export records for any period in seconds.",
  },
  {
    q: "Does Payroll Jamaica work for factories in the Spanish Town and Kingston Free Zones?",
    a: "Yes. Payroll Jamaica works for all Jamaica-based businesses regardless of Free Zone status. Free Zone businesses still operate under Jamaica labour law and statutory contribution requirements — Payroll Jamaica handles all of it automatically.",
  },
];

export default function ManufacturingPayrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica&apos;s factories and Free Zones
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll software for<br />Jamaica manufacturers
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Shift workers, piece-rate pay, union deductions, and 200+ employees — Payroll Jamaica handles it all. PAYE, NIS, NHT, and Education Tax automated for Jamaica&apos;s manufacturing sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — factories welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate shift worker payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Manufacturing payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((item) => (
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
              Everything Jamaica manufacturers need in payroll
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From 10-person workshops to 500-worker Free Zone factories — Payroll Jamaica handles every manufacturing payroll scenario.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing sectors */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Serving Jamaica&apos;s manufacturing sectors
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From Carib Cement in Rockfort to garment factories in Spanish Town — Payroll Jamaica serves every production industry in Jamaica.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectors.map((s) => (
                <div key={s.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance callout */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-muted/40 p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-4">Jamaica labour law compliance for manufacturers</h2>
              <p className="text-muted-foreground mb-6">
                Jamaica&apos;s Labour Relations and Industrial Disputes Act, Minimum Wage Order, and Holidays with Pay Act all apply to your factory. Payroll Jamaica is built around these requirements:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  "Overtime at 1.5x regular rate after 40 hours/week",
                  "Public holiday double-pay automatically applied",
                  "Minimum wage compliance for all pay types",
                  "Correct PAYE on variable and piece-rate earnings",
                  "NIS contributions calculated on all eligible pay",
                  "NHT contributions tracked per employee",
                  "Education Tax applied at 2.25% employee, 3.5% employer",
                  "Monthly statutory reports ready for TAJ, NIS, NHT",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted by Jamaica manufacturers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From small workshops in industrial estates to large Free Zone factories — Jamaica manufacturers trust Payroll Jamaica for accurate, compliant payroll every cycle.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica labour law compliance built-in" },
                { stat: "1 day", label: "Average setup time for manufacturing businesses" },
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
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Manufacturing payroll FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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
              Start your manufacturing payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Jamaica manufacturers already saving hours every payroll cycle. Set up in one day — your first automated run pays your entire shift workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/construction-payroll-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Construction payroll Jamaica
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
                  "@id": `${siteConfig.url}/manufacturing-payroll-jamaica#software`,
                  name: "Payroll Jamaica — Manufacturing Payroll Software",
                  description: baseDescription,
                  url: `${siteConfig.url}/manufacturing-payroll-jamaica`,
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
                  featureList: [
                    "Shift differential payroll",
                    "Piece-rate pay processing",
                    "Union deductions",
                    "PAYE NIS NHT Education Tax automation",
                    "Bulk bank payment files",
                    "TAJ e-filing reports",
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Manufacturing Payroll Jamaica", item: `${siteConfig.url}/manufacturing-payroll-jamaica` },
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
