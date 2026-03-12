import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll processing in Jamaica — Payroll Jamaica automates your entire payroll processing cycle. From salary calculation to PAYE deductions, NIS, NHT, Education Tax, statutory reports, and payslip delivery. Run compliant Jamaica payroll in under 10 minutes.";

export const metadata: Metadata = {
  title: "Payroll Processing Jamaica — Automated Payroll for Jamaican Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "The fastest payroll processing in Jamaica. Automate salary calculations, PAYE, NIS, NHT, and Education Tax deductions. Generate statutory reports and payslips in minutes.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll processing Jamaica",
    "payroll processing service Jamaica",
    "payroll processing company Jamaica",
    "process payroll Jamaica",
    "payroll calculation Jamaica",
    "Jamaica payroll processing",
    "automated payroll processing Jamaica",
    "outsourced payroll processing Jamaica",
    "monthly payroll processing Jamaica",
    "weekly payroll processing Jamaica",
    "PAYE calculation Jamaica",
    "statutory deductions Jamaica",
    "payroll run Jamaica",
    "payroll management Jamaica",
    "online payroll processing Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-processing-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-processing-jamaica"),
      en: canonical("/payroll-processing-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Processing Jamaica — Run Compliant Payroll in Minutes | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-processing-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Processing Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Processing Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const processSteps = [
  {
    step: "1",
    title: "Enter or import employee hours",
    desc: "Input hours worked, overtime, bonuses, and allowances. Or import a spreadsheet from your timesheet system. Takes under 2 minutes for most payrolls.",
  },
  {
    step: "2",
    title: "Payroll Jamaica calculates everything",
    desc: "PAYE at the correct 2025/2026 rates. NIS at 3%. NHT at 2%. Education Tax at 2.25% employee + 3.5% employer. Every statutory deduction — correct, every time.",
  },
  {
    step: "3",
    title: "Review and approve",
    desc: "Check a summary of net pay, total deductions, and employer contributions before committing. One-click approval or edit individual lines.",
  },
  {
    step: "4",
    title: "Payslips sent automatically",
    desc: "Employees receive their payslips by email on payday. No printing, no distribution. All payslips stored securely — employees can view history anytime.",
  },
  {
    step: "5",
    title: "Statutory reports generated",
    desc: "Monthly PAYE schedule (TD4), NIS Schedule 7, NHT, and Education Tax reports generated automatically. Ready for TAJ Online filing — no manual data entry.",
  },
  {
    step: "6",
    title: "Bank file ready",
    desc: "Download a bank transfer file for your Jamaican bank. Bulk salary payments in one upload — NCB, Scotiabank, CIBC FirstCaribbean, Sagicor, and more.",
  },
];

const processingTypes = [
  {
    title: "Monthly payroll processing",
    desc: "Jamaica's most common pay cycle. Payroll Jamaica handles salaried staff paid monthly with automatic PAYE and statutory calculations.",
    tag: "Most common",
  },
  {
    title: "Fortnightly payroll processing",
    desc: "Every two weeks. Common for hourly workers, retail, and hospitality staff. Correct PAYE annualisation for bi-weekly pay cycles.",
    tag: "Retail & hospitality",
  },
  {
    title: "Weekly payroll processing",
    desc: "Weekly pay for daily-rated workers, construction labour, and piece workers. Handle variable hours and overtime with Jamaica's overtime rules.",
    tag: "Construction & labour",
  },
  {
    title: "Off-cycle payroll processing",
    desc: "Process bonuses, commissions, termination pay, or ad-hoc payments outside your normal cycle. Correct PAYE for lump-sum payments.",
    tag: "Bonuses & final pay",
  },
];

const complianceItems = [
  "PAYE at 25% on income above the annual threshold (J$1,500,096 in 2025/2026)",
  "NIS at 3% employee, 3% employer — up to the applicable ceiling",
  "NHT at 2% employee, 3% employer — applies to all employees",
  "Education Tax at 2.25% employee, 3.5% employer",
  "Monthly TAJ reporting: P45 year-to-date, TD4 deduction schedule",
  "Annual TD4 certificates for all employees by March 31",
  "NIS Schedule 7 filed monthly to NIS directly",
  "Accurate calculation of NHT one-time payments and refunds",
];

const faqs = [
  {
    q: "What does payroll processing in Jamaica involve?",
    a: "Jamaican payroll processing involves calculating gross pay, deducting statutory contributions (PAYE income tax, NIS, NHT, Education Tax), calculating employer contributions, generating payslips, and submitting monthly reports to TAJ, NIS, and NHT. Payroll Jamaica automates all of these steps.",
  },
  {
    q: "How long does payroll processing take with Payroll Jamaica?",
    a: "Most businesses complete their payroll run in under 10 minutes. You enter or import hours/salaries, review the calculated deductions, approve, and download reports. The system handles all calculations automatically.",
  },
  {
    q: "Can I process payroll for both salaried and hourly staff?",
    a: "Yes. Payroll Jamaica handles salaried (fixed monthly pay), hourly (variable hours × rate), daily-rated, and piece-rate workers in the same payroll. Each employment type gets the correct PAYE treatment.",
  },
  {
    q: "What happens if I process payroll late in Jamaica?",
    a: "Late PAYE remittances attract a 10% penalty plus interest from TAJ. Late NIS filings have their own penalty schedule. Payroll Jamaica sends reminders before statutory deadlines to keep your business compliant.",
  },
  {
    q: "Can Payroll Jamaica handle payroll for multiple locations across Jamaica?",
    a: "Yes. One account covers all your locations — Kingston offices, Montego Bay branches, rural operations. All employees process in one payroll run regardless of where they work.",
  },
  {
    q: "Do you support outsourced payroll processing in Jamaica?",
    a: "Payroll Jamaica is designed for self-service processing — you run payroll yourself, saving the fees of a payroll bureau. Many accountants and bookkeepers also use Payroll Jamaica to process payroll for their clients.",
  },
];

export default function PayrollProcessingJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's statutory requirements
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll processing for<br />Jamaican businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Stop doing payroll by spreadsheet. Payroll Jamaica automates every step of Jamaica payroll processing — from salary calculation to PAYE filing — in under 10 minutes per run.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start processing payroll free
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Try the payroll calculator
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              How payroll processing works in Jamaica
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Six steps from hours to payslips — all automated, all compliant with Jamaica's tax law.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="rounded-xl border border-border bg-background p-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                    {s.step}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pay cycle types */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Every Jamaica pay cycle supported
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Monthly, fortnightly, weekly, or off-cycle — process any pay schedule Jamaica businesses use.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {processingTypes.map((pt) => (
                <div key={pt.title} className="rounded-xl border border-border p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{pt.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{pt.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Full Jamaica statutory compliance
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every payroll run is processed against Jamaica's current tax rates and statutory requirements. No manual rate updates — ever.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {complianceItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-background border border-border p-4">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-semibold">Payroll processing that Jamaican businesses trust</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: "< 10 min", label: "Average payroll run time" },
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "March 31", label: "TD4 deadline — always hit with auto-reminders" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Jamaica payroll processing FAQ
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

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Process your Jamaica payroll the right way
            </h2>
            <p className="text-muted-foreground">
              Join Jamaican businesses that have replaced spreadsheets with Payroll Jamaica. Set up today and run your first payroll in under an hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all payroll features
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": `${siteConfig.url}/payroll-processing-jamaica#service`,
                  name: "Payroll Processing Jamaica",
                  provider: { "@type": "Organization", name: "Payroll Jamaica", url: siteConfig.url },
                  description: baseDescription,
                  areaServed: { "@type": "Country", name: "Jamaica" },
                  serviceType: "Payroll Processing",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "JMD",
                    availability: "https://schema.org/InStock",
                  },
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
                  "@type": "HowTo",
                  name: "How to process payroll in Jamaica",
                  description: "Step-by-step payroll processing for Jamaican businesses using Payroll Jamaica",
                  step: processSteps.map((s) => ({
                    "@type": "HowToStep",
                    position: parseInt(s.step),
                    name: s.title,
                    text: s.desc,
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Payroll Software Jamaica", item: `${siteConfig.url}/payroll-software-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Payroll Processing Jamaica", item: `${siteConfig.url}/payroll-processing-jamaica` },
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
