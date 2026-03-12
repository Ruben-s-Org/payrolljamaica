import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll software designed for Jamaica's small businesses. Payroll Jamaica handles PAYE, NIS, NHT, and Education Tax automatically — so you can run compliant payroll in minutes, not hours, with no accounting degree required. Starting from J$2,500/month.";

export const metadata: Metadata = {
  title: "Small Business Payroll Jamaica — Affordable Payroll Software | Payroll Jamaica",
  description: ensureMinDescription(
    "The easiest payroll software for Jamaican small businesses. Automate PAYE, NIS, NHT, and Education Tax. Generate compliant payslips and TAJ remittances in minutes. Affordable plans starting from J$2,500/month — no accounting expertise needed.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "small business payroll Jamaica",
    "payroll Jamaica small business",
    "payroll software small business Jamaica",
    "payroll for small businesses Jamaica",
    "affordable payroll Jamaica",
    "cheap payroll software Jamaica",
    "payroll Jamaica sole trader",
    "payroll Jamaica 1-10 employees",
    "simple payroll Jamaica",
    "easy payroll Jamaica",
    "PAYE small business Jamaica",
    "small employer payroll Jamaica",
    "startup payroll Jamaica",
    "payroll software Jamaica price",
    "payroll Jamaica first employee",
  ]),
  alternates: {
    canonical: canonical("/small-business-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/small-business-payroll-jamaica"),
      en: canonical("/small-business-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Small Business Payroll Jamaica — Affordable Payroll Software | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/small-business-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Small Business Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function SmallBusinessPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's small businesses — 1 to 50 employees
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for small businesses in Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              You run a business, not a payroll department. Payroll Jamaica automates PAYE, NIS, NHT,
              and Education Tax so you can pay your staff in minutes — fully compliant, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial
              </a>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Try the free calculator
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              From J$2,500/month · No setup fees · Cancel anytime
            </p>
          </div>
        </section>

        {/* Pain points → solutions */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">
              What small business owners deal with every payday
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  problem: "\"I don't know the current PAYE threshold\"",
                  solution: "Payroll Jamaica auto-updates when the Ministry of Finance announces rate changes. You always calculate at the current threshold — no manual research needed.",
                },
                {
                  problem: "\"I spend hours on Excel every pay cycle\"",
                  solution: "Add employees once, run payroll in 5 minutes every cycle. The system handles all deductions, generates payslips, and produces TAJ remittance files automatically.",
                },
                {
                  problem: "\"I'm not sure if my NIS calculations are right\"",
                  solution: "Every NIS, NHT, and Education Tax deduction is calculated using the exact statutory rates. No manual lookups, no guessing, no TAJ penalties for miscalculations.",
                },
                {
                  problem: "\"Payslips take me too long to produce\"",
                  solution: "Compliant payslips generated automatically for every employee after each pay run. Send them by email or download as PDFs — done in seconds.",
                },
                {
                  problem: "\"I hired my first employee and don't know where to start\"",
                  solution: "Our onboarding wizard walks you through setting up your first employee's statutory deductions step by step. You don't need to know Jamaica payroll law to get started.",
                },
                {
                  problem: "\"Big payroll software is too expensive for my small team\"",
                  solution: "Plans start from J$2,500/month for up to 3 employees. You only pay for the employees you have. No enterprise minimum, no annual contract lock-in.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-xl space-y-3">
                  <p className="font-semibold text-sm italic text-muted-foreground">{item.problem}</p>
                  <p className="text-sm leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-10">
            <h2 className="text-3xl font-semibold text-center">
              Everything a Jamaican small business needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "PAYE, NIS, NHT & Education Tax — automated",
                "Payslips for every employee every cycle",
                "TAJ-compliant remittance schedules",
                "SO1 and P24 annual return prep",
                "Bank payment files (NCB, Scotiabank, JN Bank)",
                "Employee self-service payslip portal",
                "Leave tracking (vacation, sick, public holidays)",
                "Multi-frequency payroll (monthly, fortnightly, weekly)",
                "New hire setup wizard",
                "Termination and severance calculations",
                "Local Jamaica support team",
                "Automatic rate updates (no manual entry)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl font-semibold text-center">Simple, affordable pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  plan: "Starter",
                  price: "J$2,500",
                  employees: "Up to 3 employees",
                  features: ["Full PAYE/NIS/NHT/Ed Tax", "Payslip generation", "Monthly remittances", "Email support"],
                },
                {
                  plan: "Small Business",
                  price: "J$5,500",
                  employees: "Up to 10 employees",
                  features: ["Everything in Starter", "SO1 & P24 prep", "Bank payment files", "Priority support"],
                  highlight: true,
                },
                {
                  plan: "Growing",
                  price: "J$9,500",
                  employees: "Up to 25 employees",
                  features: ["Everything in Small Business", "Multi-department payroll", "Leave management", "Dedicated account manager"],
                },
              ].map((tier) => (
                <div
                  key={tier.plan}
                  className={`p-6 border rounded-xl space-y-4 ${
                    tier.highlight ? "border-foreground bg-foreground/5" : "border-border"
                  }`}
                >
                  {tier.highlight && (
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide">Most popular</div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{tier.plan}</h3>
                    <p className="text-2xl font-bold mt-1">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-1">{tier.employees}</p>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/calculator"
                    data-open-fillout="true"
                    className="block text-center rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Get started
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              More than 25 employees?{" "}
              <a href="#" data-open-fillout="true" className="underline">
                Contact us for enterprise pricing
              </a>
            </p>
          </div>
        </section>

        {/* FAQ / SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Do small businesses in Jamaica need payroll software?
              </h2>
              <p>
                Any Jamaican employer with at least one employee is legally required to calculate and remit PAYE, NIS, NHT, and Education Tax every month. While you can do this manually using spreadsheets, payroll software eliminates calculation errors, automatically applies the correct statutory rates, and produces the TAJ-required remittance documents. For small businesses processing payroll manually, the risk of under-remittance penalties and the time cost typically outweigh the software subscription cost within the first few months.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How do I set up payroll for my first employee in Jamaica?
              </h2>
              <p>
                To set up payroll for your first employee in Jamaica, you need to: (1) Register as an employer with Tax Administration Jamaica (TAJ) and obtain an employer TRN. (2) Register with the National Insurance Scheme (NIS) as an employer. (3) Register with the National Housing Trust (NHT) as an employer. (4) Set up a payroll system to calculate PAYE, NIS (3%), NHT (2% employee / 3% employer), and Education Tax (2.25% employee / 3.5% employer) based on the employee&apos;s gross salary. (5) Remit deductions to TAJ by the 14th of the following month. Payroll Jamaica&apos;s new hire wizard walks you through every step, with the calculations handled automatically.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is the cheapest payroll software for small businesses in Jamaica?
              </h2>
              <p>
                Payroll Jamaica offers the most affordable payroll software built specifically for Jamaica. Plans start from <strong className="text-foreground">J$2,500/month</strong> for businesses with up to 3 employees — covering all statutory deductions, payslip generation, and TAJ remittance reports. There are no setup fees, no annual contract requirements, and pricing scales only when your headcount grows. Generic international payroll platforms typically charge in USD and are not designed for Jamaica&apos;s specific PAYE, NIS, NHT, and TAJ compliance requirements.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Can I do payroll for 1 or 2 employees in Jamaica?
              </h2>
              <p>
                Yes. Payroll Jamaica is designed for businesses of all sizes — including sole traders and micro-businesses with 1–2 employees. Our Starter plan covers up to 3 employees at J$2,500/month. Even with a single employee, using payroll software ensures you never miscalculate PAYE thresholds (which change periodically) or miss NIS/NHT remittance deadlines that apply regardless of business size.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Run payroll in 5 minutes — from J$2,500/month
            </h2>
            <p className="text-muted-foreground">
              Jamaica&apos;s most affordable payroll software. No accountant required.
            </p>
            <a
              href="/calculator"
              data-open-fillout="true"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Start free trial
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="Small business payroll — made for Jamaica"
        text="Automate PAYE, NIS, NHT, and Education Tax. From J$2,500/month. Start free today."
      />
      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica — Small Business Payroll",
            url: canonical("/small-business-payroll-jamaica"),
            description:
              "Payroll software for Jamaican small businesses. Automates PAYE, NIS, NHT, and Education Tax with compliant payslips and TAJ remittance reports.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "2500",
              priceCurrency: "JMD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "2500",
                priceCurrency: "JMD",
                unitText: "month",
              },
            },
            inLanguage: "en-JM",
            publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do small businesses in Jamaica need payroll software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any Jamaican employer with at least one employee must calculate and remit PAYE, NIS, NHT, and Education Tax monthly. Payroll software automates this, eliminates errors, and produces TAJ-required remittance documents.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cheapest payroll software for small businesses in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll Jamaica starts from J$2,500/month for up to 3 employees, covering all statutory deductions, payslip generation, and TAJ remittance reports. No setup fees and no annual contract required.",
                },
              },
              {
                "@type": "Question",
                name: "How do I set up payroll for my first employee in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Register as an employer with TAJ (obtain employer TRN), NIS, and NHT. Set up payroll software to calculate PAYE, NIS (3%), NHT (2%/3%), and Education Tax (2.25%/3.5%). Remit deductions to TAJ by the 14th of each month. Payroll Jamaica's setup wizard guides you through every step.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "Small Business Payroll Jamaica",
                item: canonical("/small-business-payroll-jamaica"),
              },
            ],
          }),
        }}
      />
    </div>
  );
}
