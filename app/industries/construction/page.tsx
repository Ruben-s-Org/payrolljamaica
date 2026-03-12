import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll Jamaica is built for Jamaican construction companies managing project-based workers, daily wage labourers, and contract staff across multiple sites. Automate PAYE, NIS, NHT, and Education Tax for construction workers. Handle site-level payroll, subcontractor compliance, daily wage calculations, and statutory remittance. Trusted by construction companies, civil engineering firms, and contractors operating across Jamaica.";

export const metadata: Metadata = {
  title: "Construction Payroll Software Jamaica | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaican construction companies. Manage daily wage workers, project-based payroll, multiple construction sites, and full PAYE, NIS, NHT compliance. Built for contractors and construction employers in Jamaica.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "construction payroll Jamaica",
    "construction company payroll software Jamaica",
    "project-based payroll Jamaica",
    "daily wage payroll Jamaica",
    "construction worker payroll Jamaica",
    "construction NIS NHT Jamaica",
    "site payroll Jamaica",
    "contract worker payroll Jamaica",
    "construction PAYE Jamaica",
    "construction employer compliance Jamaica",
    "construction HR software Jamaica",
    "payroll for contractors Jamaica",
    "multi-site payroll Jamaica",
    "construction labour payroll Jamaica",
    "statutory compliance construction Jamaica",
  ]),
  alternates: {
    canonical: canonical("/industries/construction"),
    languages: {
      "en-JM": canonical("/industries/construction"),
      en: canonical("/industries/construction"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Construction Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/industries/construction"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Construction Payroll Software Jamaica — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Payroll Software Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const features = [
  {
    title: "Project-Based Payroll",
    description:
      "Assign workers to specific projects and track labour costs per project. Generate cost-of-works reports for each construction project alongside your regular payroll.",
  },
  {
    title: "Daily Wage Calculations",
    description:
      "Process daily wage workers accurately. Calculate weekly or fortnightly pay based on days worked, with correct pro-rating of statutory deductions.",
  },
  {
    title: "Multi-Site Management",
    description:
      "Run payroll for workers spread across multiple construction sites simultaneously. View site-level labour costs and consolidated company-wide reports from one account.",
  },
  {
    title: "NIS for Construction Workers",
    description:
      "NIS contributions are mandatory for all workers, including daily wage and short-term contract staff. Payroll Jamaica calculates and tracks NIS accurately for every worker type.",
  },
  {
    title: "PAYE Compliance",
    description:
      "Apply correct PAYE withholding for construction workers across different earnings levels. Remittance summaries ready for Tax Administration Jamaica every pay period.",
  },
  {
    title: "Contract Worker Records",
    description:
      "Maintain clear employment records for contract and casual staff. Track start dates, contract terms, earnings history, and statutory contribution records for every worker.",
  },
  {
    title: "Overtime & Allowances",
    description:
      "Construction workers often earn site allowances, meal allowances, and overtime. Payroll Jamaica handles all allowance types with correct tax treatment applied.",
  },
  {
    title: "Statutory Remittance Reports",
    description:
      "Generate ready-to-submit NIS, NHT, PAYE, and Education Tax remittance schedules every month. Never miss a filing deadline again.",
  },
];

const challenges = [
  {
    title: "Mixed workforce types",
    description:
      "Construction companies typically have a mix of permanent salaried staff (supervisors, engineers, admin) and daily wage site workers. Managing both in the same payroll cycle requires flexibility.",
  },
  {
    title: "Project cost allocation",
    description:
      "Knowing your labour cost per project is essential for profitability. Without proper payroll tracking, construction firms lose visibility into which projects are cost-effective.",
  },
  {
    title: "Worker classification risk",
    description:
      "The line between employee and independent contractor in construction can be blurry. Misclassifying employees as contractors exposes your business to NIS arrears, penalties, and back-PAYE liability.",
  },
  {
    title: "Irregular pay cycles",
    description:
      "Construction workers are sometimes paid weekly, sometimes after project milestones, and sometimes daily. Payroll Jamaica supports flexible pay frequencies to match your operations.",
  },
];

export default function ConstructionPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: canonical("/industries") },
      { "@type": "ListItem", position: 3, name: "Construction", item: canonical("/industries/construction") },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Payroll Software Jamaica",
    description:
      "Payroll software for Jamaican construction companies. Handles daily wage workers, project-based payroll, multi-site management, and full statutory compliance including PAYE, NIS, NHT, and Education Tax.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Jamaica",
    },
    serviceType: "Payroll Software",
    url: canonical("/industries/construction"),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Industry Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Construction payroll software for Jamaica
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Daily wage workers, project-based teams, multiple sites — Payroll Jamaica handles
              construction payroll in all its complexity. Stay compliant with PAYE, NIS, NHT, and
              Jamaican labour law without the manual effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <a
                href="/calculator"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Calculate payroll deductions
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Payroll built for construction operations in Jamaica
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From daily wage site workers to salaried project managers, Payroll Jamaica handles
              every worker type with full statutory compliance baked in.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-muted/40 rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why construction payroll in Jamaica is complex
            </h2>
            <p className="text-muted-foreground mb-10">
              Construction firms deal with payroll challenges that most generic software can&apos;t
              handle well. Here&apos;s what makes construction payroll different — and how we solve it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((c) => (
                <div key={c.title} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How to do payroll for construction workers in Jamaica
              </h2>
              <p>
                Payroll for construction workers in Jamaica must comply with the same statutory
                framework that applies to all Jamaican employees — PAYE income tax, NIS, NHT, and
                Education Tax — regardless of whether the worker is full-time, part-time, or
                working on a daily wage basis.
              </p>
              <p className="mt-3">
                For daily wage workers, payroll is typically calculated by multiplying the agreed
                daily rate by the number of days worked in the pay period. Once you have the gross
                pay figure, statutory deductions apply:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li><strong className="text-foreground">NIS:</strong> 3% of gross earnings (employee) — subject to annual ceiling of JMD $5,000,000</li>
                <li><strong className="text-foreground">NHT:</strong> 2% of gross earnings (employee) — no ceiling</li>
                <li><strong className="text-foreground">Education Tax:</strong> 2.25% of gross earnings (employee) — no ceiling</li>
                <li><strong className="text-foreground">PAYE:</strong> Applied to earnings above the income tax threshold (JMD $1,500,096/year) at 25% or 30%</li>
              </ul>
              <p className="mt-3">
                Employers must also pay their own matching contributions: NIS 3%, NHT 3%, and
                Education Tax 3.5%. These must be remitted to TAJ, NHT, and NIS by the statutory
                deadlines to avoid penalties and interest.
              </p>
              <p className="mt-3">
                Payroll Jamaica calculates all of this automatically. Enter the days worked and
                daily rate, and the system handles every deduction and produces ready-to-file
                remittance summaries. Use our <a href="/calculator" className="text-foreground underline hover:no-underline">payroll calculator</a> to
                check deduction amounts for any earnings level.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Contract vs employee construction workers in Jamaica — payroll implications
              </h2>
              <p>
                One of the most common compliance risks in Jamaican construction payroll is
                misclassification of workers. Many construction firms engage site workers as
                &ldquo;independent contractors&rdquo; to avoid paying employer NIS, NHT, and Education Tax
                contributions. However, under Jamaican law, the true nature of the working
                relationship determines worker status — not the label on the contract.
              </p>
              <p className="mt-3">
                If a worker is economically dependent on your company, works under your direction
                and control, uses your equipment, and works exclusively for you, they are likely
                an employee regardless of what the contract says. Tax Administration Jamaica (TAJ)
                and the National Insurance Scheme can conduct audits and reclassify workers,
                resulting in:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Back payment of all employer statutory contributions unpaid</li>
                <li>Penalties of up to 50% of underpaid amounts</li>
                <li>Interest on outstanding balances</li>
                <li>Potential criminal liability for persistent non-compliance</li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica helps construction companies maintain clear, compliant records for
                all worker types. For workers who genuinely are independent contractors (supply their
                own tools, work for multiple clients, bear their own business risk), the system
                allows you to record payments without generating statutory deductions. For employees,
                all deductions are calculated automatically.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Statutory compliance for construction employers in Jamaica
              </h2>
              <p>
                Construction companies in Jamaica must register with Tax Administration Jamaica
                (TAJ), the National Insurance Scheme (NIS), and the National Housing Trust (NHT)
                as employers. Once registered, you have monthly obligations:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Deduct and remit PAYE by the 14th of the following month</li>
                <li>Remit NIS and NHT contributions by the end of the month following the pay period</li>
                <li>File Education Tax quarterly with TAJ</li>
                <li>Submit annual P45 (employer return) and P24 (employee earnings certificates)</li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica generates all remittance reports in the correct format for each
                statutory body. You&apos;ll always know exactly what is owed, to whom, and when.
                Explore our <a href="/features" className="text-foreground underline hover:no-underline">full features</a> or
                learn about our <a href="/payroll-services" className="text-foreground underline hover:no-underline">managed payroll service</a> where
                our team handles compliance on your behalf.
              </p>
              <a
                href="/calculator"
                className="inline-block mt-4 text-foreground font-semibold underline hover:no-underline"
              >
                Get started with Payroll Jamaica →
              </a>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Construction payroll that keeps up with your sites
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Daily wages, project tracking, multi-site management, and full statutory compliance.
              Payroll Jamaica is built for how construction businesses actually operate.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a free demo
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Construction payroll made simple"
        text="Daily wages, project teams, multiple sites — all handled with full PAYE, NIS, and NHT compliance. Built for Jamaica."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
    </div>
  );
}
