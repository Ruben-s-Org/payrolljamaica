import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Jamaica payroll resources, guides, and compliance tools for Jamaican employers and HR professionals. Find authoritative guides on PAYE, NIS, NHT, and Education Tax, use the free payroll calculator, and explore industry-specific payroll resources for hospitality, retail, construction, and healthcare businesses across Jamaica.";

export const metadata: Metadata = {
  title: "Jamaica Payroll Resources — Guides, Calculator & Compliance Tools | Payroll Jamaica",
  description: ensureMinDescription(
    "Free Jamaica payroll resources: guides on PAYE, NIS, NHT, and Education Tax; a free payroll calculator; industry-specific compliance tools for hospitality, retail, construction, and healthcare. Everything Jamaican employers need to stay compliant.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "Jamaica payroll resources",
    "payroll guides Jamaica",
    "payroll compliance resources Jamaica",
    "payroll tools Jamaica",
    "Jamaica HR resources",
    "PAYE guide Jamaica",
    "NIS guide Jamaica",
    "NHT guide Jamaica",
    "Education Tax Jamaica",
    "Jamaica payroll calculator",
    "statutory deductions Jamaica",
    "Jamaica payroll compliance",
    "payroll regulations Jamaica",
    "TAJ payroll guidance",
    "Jamaica employer resources",
  ]),
  alternates: {
    canonical: canonical("/resources"),
    languages: {
      "en-JM": canonical("/resources"),
      en: canonical("/resources"),
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
    title: "Jamaica Payroll Resources — Guides, Calculator & Compliance Tools | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/resources"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Jamaica Payroll Resources — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Resources — Guides & Compliance Tools",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const complianceResources = [
  {
    title: "PAYE (Pay As You Earn)",
    description:
      "PAYE is income tax withheld from employee wages before they receive their pay. Jamaican employers are legally required to deduct PAYE from all employees earning above the income tax threshold of JMD $1,500,096 per year. The rate is 25% on income above the threshold up to JMD $6,000,000, and 30% on the excess. Employers must remit PAYE to Tax Administration Jamaica (TAJ) monthly.",
    link: "/blog/paye-guide-jamaica",
    linkLabel: "Read the PAYE guide",
  },
  {
    title: "NIS (National Insurance Scheme)",
    description:
      "NIS is a mandatory social security contribution that provides employees with benefits including sick leave, maternity, retirement, and invalidity support. Employees contribute 3% of gross earnings and employers match with a further 3%. Contributions are capped at the NIS ceiling (currently JMD $5,000,000 per year). NIS is administered by the Ministry of Labour and Social Security.",
    link: "/blog/nis-contributions-jamaica-guide",
    linkLabel: "Read the NIS guide",
  },
  {
    title: "NHT (National Housing Trust)",
    description:
      "NHT contributions fund affordable housing loans for Jamaican workers. Employees contribute 2% of gross earnings and employers contribute 3%. Unlike NIS, there is no earnings ceiling for NHT — contributions apply to all earnings. Workers who contribute for at least 52 weeks become eligible to apply for NHT housing benefits and loans. Remittance is due monthly.",
    link: "/blog/nht-contributions-jamaica-guide",
    linkLabel: "Read the NHT guide",
  },
  {
    title: "Education Tax",
    description:
      "Education Tax funds public education in Jamaica. Employees pay 2.25% of gross earnings and employers contribute 3.5%. Like NHT, there is no earnings ceiling — it applies to all taxable emoluments. Education Tax is remitted alongside PAYE to Tax Administration Jamaica each month. Failure to remit attracts interest and penalties.",
    link: "/blog/education-tax-jamaica-guide",
    linkLabel: "Read the Education Tax guide",
  },
];

const industryPages = [
  {
    title: "Hospitality & Tourism",
    description: "Service charge distribution, overtime for shift workers, seasonal staff payroll, and tipped worker compliance.",
    href: "/industries/hospitality",
  },
  {
    title: "Retail",
    description: "Commission-based payroll, part-time staff management, weekend and public holiday pay compliance.",
    href: "/industries/retail",
  },
  {
    title: "Construction",
    description: "Contract worker payroll, project-based pay, site allowances, and NIS compliance for construction employers.",
    href: "/industries/construction",
  },
  {
    title: "Healthcare",
    description: "Payroll for nurses, doctors, and support staff across hospitals, clinics, and private practices in Jamaica.",
    href: "/industries/healthcare",
  },
];

const featuredGuides = [
  {
    title: "How to calculate PAYE in Jamaica (2024)",
    description: "Step-by-step guide to calculating PAYE for Jamaican employees, including thresholds, rates, and worked examples.",
    href: "/blog/how-to-calculate-paye-jamaica",
  },
  {
    title: "Jamaica statutory deductions: complete employer guide",
    description: "Everything Jamaican employers need to know about PAYE, NIS, NHT, and Education Tax — rates, ceilings, deadlines, and how to remit.",
    href: "/blog/jamaica-statutory-deductions-employer-guide",
  },
  {
    title: "NIS contributions Jamaica: employer and employee rates",
    description: "Current NIS contribution rates, the earnings ceiling, remittance deadlines, and how to stay compliant.",
    href: "/blog/nis-contributions-jamaica-guide",
  },
  {
    title: "NHT contributions Jamaica: what employers need to know",
    description: "NHT rates, how contributions are calculated, and how employees access NHT housing benefits.",
    href: "/blog/nht-contributions-jamaica-guide",
  },
  {
    title: "Payroll for small businesses in Jamaica",
    description: "A practical guide to setting up compliant payroll for small Jamaican businesses — from first hire to monthly remittance.",
    href: "/blog/payroll-small-business-jamaica",
  },
  {
    title: "Jamaica payroll deadlines: monthly remittance calendar",
    description: "Key payroll deadlines for TAJ, NIS, and NHT remittances throughout the year. Never miss a filing date.",
    href: "/blog/jamaica-payroll-deadlines-remittance-calendar",
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Resources", item: canonical("/resources") },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Jamaica Payroll Resources &amp; Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything Jamaican employers and HR professionals need to understand payroll compliance,
              statutory deductions, and payroll best practices — from free tools to in-depth guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Use the free payroll calculator
              </a>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Talk to a payroll expert
              </a>
            </div>
          </div>
        </section>

        {/* Lead Magnet: Free Compliance Checklist */}
        <section className="w-full px-4 py-16 bg-muted/20 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Free Download
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Jamaica Payroll Compliance Checklist 2026
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                  Everything your business needs to stay compliant with TAJ, NHT, NIS &amp; PAYE this year.
                  Used by Jamaican business owners to avoid penalties and missed deadlines.
                  Enter your email and get it free — instant access.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1.5 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold shrink-0">✓</span>
                    2026 statutory rates reference card (PAYE, NIS, NHT, Education Tax)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold shrink-0">✓</span>
                    Monthly remittance deadline calendar — never miss the 14th again
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold shrink-0">✓</span>
                    March 31 S02 Annual Return filing checklist
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold shrink-0">✓</span>
                    New employee onboarding documents checklist
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold shrink-0">✓</span>
                    7-year record-keeping guide for TAJ audits
                  </li>
                </ul>
                <a
                  href="#"
                  data-open-fillout="true"
                  className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get the free checklist →
                </a>
              </div>
              <div className="md:w-64 bg-background border border-border rounded-2xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-5xl">📋</span>
                </div>
                <p className="text-center font-bold text-foreground text-sm leading-tight">
                  2026 Jamaica Payroll<br />Compliance Checklist
                </p>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Free · Instant download · Updated for 2026 Budget
                </p>
                <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>PAYE threshold 2026</span>
                    <span className="font-semibold text-foreground">JMD $1,500,096</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NIS rate</span>
                    <span className="font-semibold text-foreground">3% + 3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NHT rate</span>
                    <span className="font-semibold text-foreground">2% + 3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remittance deadline</span>
                    <span className="font-semibold text-foreground">14th each month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Downloadable Resources */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Free Downloadable Resources</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Print-ready checklists and reference cards for Jamaican employers. Updated for 2026.
              No sign-up required — just click and print.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "📋",
                  title: "March 31 PAYE Filing Checklist",
                  description:
                    "Step-by-step SO1 submission guide. Reconcile records, prepare the return, submit to TAJ, and prepare for the new tax year.",
                  href: "/resources/march-31-paye-checklist",
                  tag: "Deadline: March 31",
                  tagColor: "text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/30",
                },
                {
                  icon: "📊",
                  title: "2026 Jamaica Employer Tax Rate Card",
                  description:
                    "One-page reference: PAYE rates & thresholds, NIS, NHT, Education Tax rates, total employer cost, and the full remittance calendar.",
                  href: "/resources/jamaica-employer-tax-rates-2026",
                  tag: "2026 Budget Rates",
                  tagColor: "text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/30",
                },
                {
                  icon: "👤",
                  title: "New Employee Onboarding Checklist",
                  description:
                    "Everything to do when you hire someone: NIS registration, NHT setup, PAYE configuration, TD1 forms, and HR records.",
                  href: "/resources/new-employee-onboarding-checklist",
                  tag: "HR & Compliance",
                  tagColor: "text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-950/30",
                },
                {
                  icon: "🗓️",
                  title: "Monthly Payroll Processing Checklist",
                  description:
                    "Run payroll correctly every month. Collect timesheets, calculate deductions, process payments, remit by the 14th, and keep records.",
                  href: "/resources/monthly-payroll-checklist",
                  tag: "Monthly Use",
                  tagColor: "text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-950/30",
                },
                {
                  icon: "📄",
                  title: "Jamaica Payroll Tax Rates 2026 — Cheat Sheet",
                  description:
                    "Every payroll rate on one page: PAYE bands, NIS, NHT, Education Tax, and HEART/NSTA levy. Print or download the free PDF.",
                  href: "/resources/jamaica-payroll-tax-rates-2026-cheat-sheet",
                  tag: "Free PDF",
                  tagColor: "text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/30",
                },
                {
                  icon: "🚨",
                  title: "March 31 Year-End Filing Guide",
                  description:
                    "Complete year-end filing checklist: SO1, P24, NIS reconciliation, NHT returns. Everything employers must file before March 31.",
                  href: "/resources/jamaica-employer-year-end-filing-guide",
                  tag: "Deadline: March 31",
                  tagColor: "text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-950/30",
                },
              ].map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  className="group block bg-background border border-border rounded-xl p-6 hover:shadow-md hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">{resource.icon}</span>
                    <div className="flex-1">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${resource.tagColor}`}>
                        {resource.tag}
                      </span>
                      <h3 className="font-bold text-base mb-2 group-hover:underline leading-snug">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      <span className="inline-block mt-3 text-sm font-semibold text-foreground group-hover:underline">
                        View checklist →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tool: Calculator */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Tool</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Calculate Jamaica payroll deductions instantly — free to use, no sign-up required.
            </p>
            <a
              href="/calculator"
              className="block bg-muted/40 border border-border rounded-xl p-8 hover:bg-muted/70 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:underline">
                    Jamaica Payroll Calculator
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Calculate PAYE, NIS, NHT, and Education Tax for any Jamaican employee in seconds.
                    Enter gross salary and get a full statutory deduction breakdown — including employer
                    contributions. Updated for current rates. Free, instant, no account needed.
                  </p>
                  <span className="inline-block mt-4 text-foreground font-semibold text-sm underline">
                    Open calculator →
                  </span>
                </div>
                <div className="sm:w-40 flex flex-col gap-2 text-xs text-muted-foreground">
                  <div className="bg-background rounded-lg p-3 border border-border">
                    <div className="font-semibold text-foreground mb-1">Calculates</div>
                    <ul className="space-y-0.5">
                      <li>PAYE income tax</li>
                      <li>NIS (employee + employer)</li>
                      <li>NHT (employee + employer)</li>
                      <li>Education Tax</li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Compliance Resources */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Jamaica Payroll Compliance Resources
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Understand every statutory deduction Jamaican employers must withhold and remit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {complianceResources.map((r) => (
                <div key={r.title} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-foreground text-lg mb-3">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.description}</p>
                  <a href={r.link} className="text-sm text-foreground font-semibold underline hover:no-underline">
                    {r.linkLabel} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Payroll Guides for Jamaica</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              In-depth guides written for Jamaican employers, HR managers, and accountants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((g) => (
                <a
                  key={g.title}
                  href={g.href}
                  className="block bg-muted/40 border border-border rounded-xl p-5 hover:bg-muted/70 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:underline leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/blog"
                className="inline-block text-foreground font-semibold underline hover:no-underline text-sm"
              >
                Browse all payroll guides and articles →
              </a>
            </div>
          </div>
        </section>

        {/* Industry Resources */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Industry-Specific Payroll Resources
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Payroll compliance looks different across industries. Find resources tailored to your sector.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industryPages.map((ind) => (
                <a
                  key={ind.title}
                  href={ind.href}
                  className="block bg-background border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors group"
                >
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:underline">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What statutory deductions does every Jamaican employer need to know?
              </h2>
              <p>
                Every employer in Jamaica is legally required to deduct and remit four statutory contributions
                on behalf of employees: PAYE (Pay As You Earn income tax), NIS (National Insurance Scheme),
                NHT (National Housing Trust), and Education Tax. Together, these make up the core of Jamaican
                payroll compliance, and failure to correctly calculate or remit any of them exposes employers
                to penalties, interest charges, and enforcement action from Tax Administration Jamaica (TAJ)
                and the relevant statutory bodies.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">PAYE</strong> is the income tax employers withhold from
                employee wages and remit to TAJ monthly. The current income tax threshold is JMD $1,500,096
                per year. Employees earning above this threshold pay 25% on income up to JMD $6,000,000 and
                30% on the excess. Employers must file monthly PAYE returns and make payment by the 14th of
                the following month.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">NIS</strong> contributions are 3% from the employee and
                3% from the employer, capped at the annual NIS ceiling. NIS provides employees with access to
                sick benefit, maternity benefit, retirement pension, and invalidity benefit. Contributions are
                remitted monthly to the National Insurance Fund.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">NHT</strong> is 2% from the employee and 3% from the
                employer, with no earnings ceiling. Contributions fund the National Housing Trust&apos;s
                mortgage and housing benefit programs. Employees who have made at least 52 weekly contributions
                become eligible to apply for NHT benefits.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Education Tax</strong> is 2.25% from the employee and
                3.5% from the employer, with no ceiling, remitted to TAJ alongside PAYE each month.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Where to find official Jamaica payroll regulations
              </h2>
              <p>
                The primary regulatory bodies governing payroll in Jamaica are:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Tax Administration Jamaica (TAJ)</strong> — responsible
                  for PAYE, Education Tax collection, and employer compliance. TAJ publishes official guidance,
                  employer registration forms, and remittance schedules at taj.gov.jm.
                </li>
                <li>
                  <strong className="text-foreground">National Insurance Scheme (NIS)</strong> — administered
                  by the Ministry of Labour and Social Security. NIS rates, employer obligations, and benefit
                  information are published at mlss.gov.jm.
                </li>
                <li>
                  <strong className="text-foreground">National Housing Trust (NHT)</strong> — NHT contribution
                  rates, employer remittance requirements, and employee benefit eligibility are available at
                  nht.gov.jm.
                </li>
                <li>
                  <strong className="text-foreground">Ministry of Finance and the Public Service</strong> —
                  announces budget changes to income tax thresholds and statutory rates each year. Employers
                  should monitor mof.gov.jm for annual updates.
                </li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica monitors all regulatory announcements and updates the software&apos;s tax tables
                automatically when changes are announced. You don&apos;t need to manually update any rates —
                your next payroll run will automatically use the current figures.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                More resources and tools
              </h2>
              <p>
                Explore Payroll Jamaica&apos;s full set of tools and services for Jamaican employers:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <a href="/features" className="text-foreground underline hover:no-underline">
                    Platform features
                  </a>{" "}
                  — see everything Payroll Jamaica automates, from PAYE calculations to bank payment files.
                </li>
                <li>
                  <a href="/payroll-services" className="text-foreground underline hover:no-underline">
                    Managed payroll services
                  </a>{" "}
                  — outsource your payroll entirely to our team of Jamaica payroll specialists.
                </li>
                <li>
                  <a href="/calculator" className="text-foreground underline hover:no-underline">
                    Free payroll calculator
                  </a>{" "}
                  — instantly calculate PAYE, NIS, NHT, and Education Tax for any employee.
                </li>
                <li>
                  <a href="/compare/spreadsheets" className="text-foreground underline hover:no-underline">
                    Why spreadsheets don&apos;t work for Jamaican payroll
                  </a>{" "}
                  — see why Jamaican businesses switch from Excel to dedicated payroll software.
                </li>
                <li>
                  <a href="/blog" className="text-foreground underline hover:no-underline">
                    Payroll blog and guides
                  </a>{" "}
                  — in-depth articles on all aspects of Jamaica payroll compliance.
                </li>
                <li>
                  <a href="/glossary" className="text-foreground underline hover:no-underline">
                    Payroll glossary
                  </a>{" "}
                  — 25+ Jamaica payroll terms defined (PAYE, NIS, NHT, SO1, P24, and more).
                </li>
                <li>
                  <a href="/minimum-wage-jamaica" className="text-foreground underline hover:no-underline">
                    Jamaica minimum wage 2026
                  </a>{" "}
                  — current minimum wage rates, statutory deductions impact, and employer cost breakdown.
                </li>
                <li>
                  <a href="/compare/quickbooks" className="text-foreground underline hover:no-underline">
                    PayrollJamaica vs QuickBooks
                  </a>{" "}
                  — see why Jamaica businesses choose local payroll software over QuickBooks.
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stop calculating Jamaica payroll manually
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Payroll Jamaica automates every statutory deduction — PAYE, NIS, NHT, and Education Tax —
              so your payroll is always accurate and compliant.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get started free
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Jamaica payroll resources in one place"
        text="Guides, tools, and compliance information for every Jamaican employer. Plus free payroll calculator."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
    </div>
  );
}
