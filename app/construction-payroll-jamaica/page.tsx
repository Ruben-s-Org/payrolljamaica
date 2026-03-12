import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Construction payroll Jamaica — Payroll Jamaica handles the complexity of Jamaica's construction industry payroll. Daily-rated workers, contract labour, NIS construction rates, overtime pay, subcontractors, and project-based staffing. PAYE and statutory compliance built in.";

export const metadata: Metadata = {
  title: "Construction Payroll Jamaica — Payroll Software for Construction Companies | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software built for Jamaica's construction industry. Handle daily-rated workers, contract labour, overtime, NIS, NHT, and PAYE. Stop doing construction payroll by hand.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "construction payroll Jamaica",
    "payroll construction workers Jamaica",
    "payroll software construction Jamaica",
    "Jamaica construction PAYE",
    "daily rated workers payroll Jamaica",
    "construction labour payroll Jamaica",
    "building contractor payroll Jamaica",
    "construction company payroll Jamaica",
    "NIS construction Jamaica",
    "construction workers NHT Jamaica",
    "subcontractor payroll Jamaica",
    "project payroll Jamaica",
    "civil engineering payroll Jamaica",
    "construction overtime Jamaica",
    "labour-only payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/construction-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/construction-payroll-jamaica"),
      en: canonical("/construction-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Construction Payroll Jamaica — Built for Jamaica's Building Industry | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/construction-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Construction Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const constructionPainPoints = [
  {
    problem: "Daily-rated workers with variable hours",
    solution:
      "Construction crews work different hours every week. Payroll Jamaica handles daily rates × days worked, with automatic overtime calculation using Jamaica's 1.5× rule for hours over 40/week.",
  },
  {
    problem: "Casual labour on and off site",
    solution:
      "Workers come and go by project phase. Payroll Jamaica lets you add workers for one week and pause them the next — final pay and statutory deductions calculated correctly every time.",
  },
  {
    problem: "NIS for construction workers",
    solution:
      "Construction workers' NIS contributions matter for injury claims and retirement. Payroll Jamaica calculates and reports NIS on every worker — protecting you and your crew from unregistered liability.",
  },
  {
    problem: "Project-based payroll tracking",
    solution:
      "Allocate labour costs by project for accurate job costing. Know exactly how much Kingston project A or Montego Bay project B cost in wages — without a second spreadsheet.",
  },
];

const constructionFeatures = [
  {
    title: "Daily-rated payroll",
    desc: "Enter days worked × daily rate and Payroll Jamaica handles the rest. PAYE annualisation for daily workers, NIS, NHT, and Education Tax — all correct for daily pay.",
  },
  {
    title: "Weekly and fortnightly pay cycles",
    desc: "Construction workers often expect weekly or fortnightly pay. Payroll Jamaica supports both cycles with correct PAYE treatment for shorter pay periods.",
  },
  {
    title: "Overtime calculation",
    desc: "Jamaica's Labour Relations and Industrial Disputes Act requires 1.5× for hours over 40/week and 2× for Sundays/public holidays. Payroll Jamaica applies the correct rate automatically.",
  },
  {
    title: "Subcontractor vs employee distinction",
    desc: "Labour-only subcontractors are treated differently from employees under Jamaican tax law. Payroll Jamaica helps you classify correctly and keep documentation for TAJ inspections.",
  },
  {
    title: "Project cost codes",
    desc: "Tag each worker's wages to a project code. Export labour cost reports by project for quantity surveyor reviews, client billing, or bank drawdown requests.",
  },
  {
    title: "Instant payslips on site",
    desc: "Email payslips to workers' phones on payday. Construction workers increasingly expect digital payslips — no more chasing down paper on a job site.",
  },
];

const constructionCompliance = [
  {
    title: "PAYE for daily-rated construction workers",
    desc: "Daily-rated workers need annualised PAYE calculations. Payroll Jamaica handles this correctly — no under-deduction that causes workers a tax bill at year end.",
  },
  {
    title: "NIS injury protection",
    desc: "Construction is Jamaica's most injury-prone industry. Every worker on your NIS schedule has accident coverage. Payroll Jamaica keeps your NIS contributions current and correctly reported.",
  },
  {
    title: "NHT contributions for construction workers",
    desc: "Even daily-rated and casual construction workers earn NHT contributions. Payroll Jamaica tracks and reports NHT on all employment income — keeping your workers' housing fund intact.",
  },
  {
    title: "TD4 year-end for project workers",
    desc: "Workers on multiple sites across the year still need a TD4. Payroll Jamaica generates year-end certificates for all workers — regardless of how many projects they worked on.",
  },
];

const faqs = [
  {
    q: "How does payroll work for daily-rated construction workers in Jamaica?",
    a: "Daily-rated workers are paid days × daily rate. For PAYE purposes, you annualise their daily rate (daily rate × 260 working days) to determine their income tax band. Payroll Jamaica does this automatically — you enter the days worked and the system calculates the correct PAYE deduction.",
  },
  {
    q: "Are construction subcontractors subject to PAYE in Jamaica?",
    a: "It depends on the arrangement. Labour-only subcontractors who are individuals may be deemed employees by TAJ. Incorporated subcontractors (companies) are generally exempt from PAYE. Payroll Jamaica helps you track employee vs contractor status — but consult your accountant on classification for TAJ purposes.",
  },
  {
    q: "What overtime rules apply to construction workers in Jamaica?",
    a: "Under Jamaican law, workers are entitled to 1.5× their regular rate for hours worked over 40 per week. Sunday work typically commands 2× the regular rate. Public holiday work is also 2×. Payroll Jamaica applies these multipliers automatically when you enter hours worked.",
  },
  {
    q: "Do casual and short-term construction workers need NIS and NHT?",
    a: "Yes. Any worker earning wages in Jamaica is subject to NIS and NHT contributions, regardless of how casual or short-term the engagement is. Payroll Jamaica tracks contributions for all workers on every payroll run.",
  },
  {
    q: "How do I handle payroll when construction workers move between project sites?",
    a: "Payroll Jamaica lets you assign workers to project cost codes per payroll run. A worker can be on Project A in Kingston one month and Project B in Portmore the next — their payslips and statutory deductions are processed correctly regardless of location.",
  },
  {
    q: "Can Payroll Jamaica generate reports for quantity surveyors or bank drawdowns?",
    a: "Yes. You can export labour cost reports by project code and date range. These reports show gross wages paid per project — useful for QS cost tracking, bank drawdown applications, and developer reporting.",
  },
];

export default function ConstructionPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's construction industry
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Construction payroll<br />Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Daily-rated workers, casual labour, overtime, project cost tracking — Payroll Jamaica handles construction's payroll complexity so you can focus on building.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start construction payroll free
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate worker deductions
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Construction payroll in Jamaica is complicated — Payroll Jamaica isn't
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {constructionPainPoints.map((item) => (
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
              Features built for Jamaica's construction industry
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              From small contractors to large civil engineering firms — Payroll Jamaica handles the full range of construction employment types.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Stay compliant with Jamaica's construction payroll rules
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              TAJ audits construction companies. NIS monitors construction site registrations. Keep your records clean.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {constructionCompliance.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-background p-6 space-y-2">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-semibold">Construction companies across Jamaica</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Kingston high-rise contractors to rural housing developers — we serve every size of Jamaica's construction sector.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { name: "General contractors", desc: "Building contracts, civil works, infrastructure" },
                { name: "Subcontractors", desc: "Electrical, plumbing, tiling, painting trades" },
                { name: "Property developers", desc: "Residential, commercial, mixed-use developments" },
                { name: "Civil engineering firms", desc: "Roads, bridges, drainage, public works" },
                { name: "Housing developers", desc: "NHT-financed schemes, private housing estates" },
                { name: "Labour-only firms", desc: "Site labour supply, casual construction workers" },
              ].map((seg) => (
                <div key={seg.name} className="rounded-lg border border-border p-5">
                  <p className="font-semibold mb-1">{seg.name}</p>
                  <p className="text-sm text-muted-foreground">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Construction payroll Jamaica FAQ
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
              <Link href="/payroll-outsourcing-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Outsourcing
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Build better — with payroll sorted
            </h2>
            <p className="text-muted-foreground">
              Jamaica's construction industry is booming. Don't let payroll errors slow your projects or expose your company to TAJ penalties. Get compliant from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See pricing plans
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
                  "@id": `${siteConfig.url}/construction-payroll-jamaica#service`,
                  name: "Construction Payroll Jamaica",
                  provider: { "@type": "Organization", name: "Payroll Jamaica", url: siteConfig.url },
                  description: baseDescription,
                  areaServed: { "@type": "Country", name: "Jamaica" },
                  serviceType: "Construction Payroll Processing",
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
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica Industries", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Construction Payroll Jamaica", item: `${siteConfig.url}/construction-payroll-jamaica` },
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
