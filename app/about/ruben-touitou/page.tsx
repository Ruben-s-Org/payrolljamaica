import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const baseDescription =
  "Ruben Touitou is the founder of PayrollJamaica, Jamaica's purpose-built payroll software. Expert in Jamaican statutory compliance including PAYE, NIS, NHT, and Education Tax for Jamaican businesses of all sizes.";

export const metadata: Metadata = {
  title: "Ruben Touitou — Payroll Expert Jamaica | Founder of PayrollJamaica",
  description: ensureMinDescription(
    "Ruben Touitou is a payroll expert and founder of PayrollJamaica. Expert in PAYE, NIS, NHT, Education Tax, and Jamaican statutory compliance for employers across Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll expert Jamaica",
    "Ruben Touitou",
    "PayrollJamaica founder",
    "Jamaica payroll specialist",
    "PAYE expert Jamaica",
    "Jamaica statutory compliance expert",
    "NIS NHT Education Tax expert Jamaica",
    "Jamaica HR software founder",
    "payroll consultant Jamaica",
    "Caribbean payroll expert",
  ]),
  alternates: { canonical: canonical("/about/ruben-touitou") },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ruben Touitou — Payroll Expert Jamaica | Founder of PayrollJamaica",
    description: baseDescription,
    url: canonical("/about/ruben-touitou"),
    type: "profile",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ruben Touitou",
      item: `${siteConfig.url}/about/ruben-touitou`,
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruben Touitou",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "PayrollJamaica",
    url: siteConfig.url,
  },
  url: `${siteConfig.url}/about/ruben-touitou`,
  sameAs: [
    "https://www.linkedin.com/company/payrolljamaica",
  ],
  email: "hello@payrolljamaica.com",
  description: baseDescription,
  knowsAbout: [
    "Payroll processing Jamaica",
    "PAYE income tax Jamaica",
    "NIS contributions Jamaica",
    "NHT contributions Jamaica",
    "Education Tax Jamaica",
    "HEART/NSTA levy Jamaica",
    "Statutory compliance Jamaica",
    "Tax Administration Jamaica",
    "Caribbean business technology",
    "Jamaica labour law",
    "HR software development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Payroll Software Founder",
    occupationLocation: {
      "@type": "Country",
      name: "Jamaica",
    },
    skills: "PAYE, NIS, NHT, Education Tax, Jamaica statutory compliance, payroll software",
  },
};

const publishedArticles = [
  {
    title: "2025 Jamaica Payroll Tax Updates: Complete Guide to New Rates & Thresholds",
    href: "/blog/2025-jamaica-payroll-tax-updates-complete-guide-new-rates-thresholds",
    description:
      "A comprehensive breakdown of the 2025/26 PAYE threshold, NIS ceiling changes, and what every Jamaican employer needs to update.",
  },
  {
    title: "10 Common Payroll Mistakes Jamaica Employers Make",
    href: "/blog/10-common-payroll-mistakes-jamaica-employers-2026",
    description:
      "From PAYE miscalculations to missed NIS submissions — the most frequent payroll errors seen across Jamaican businesses and how to fix them.",
  },
  {
    title: "Best Payroll Software Jamaica 2026: Complete Buyer's Guide",
    href: "/blog/best-payroll-software-jamaica-2026-complete-buyers-guide",
    description:
      "An honest guide to evaluating payroll software for Jamaica, covering statutory compliance, local bank integration, and pricing.",
  },
  {
    title: "5 Signs Your Jamaica Payroll Process Needs an Upgrade",
    href: "/blog/5-signs-jamaica-payroll-process-needs-upgrade",
    description:
      "Practical signals that your payroll workflow — whether spreadsheet or legacy software — is creating compliance risk.",
  },
  {
    title: "Jamaica Payroll Audit Defense: Building a TAJ Documentation System",
    href: "/blog/2025-jamaica-payroll-audit-defense-building-taj-documentation-system",
    description:
      "How to organise your payroll records to survive a TAJ audit, including which documents to keep and for how long.",
  },
];

const expertiseAreas = [
  {
    title: "PAYE Compliance",
    desc: "Deep knowledge of Jamaica's PAYE threshold (J$1,500,096), income tax bands, and TAJ reporting requirements including SO1 and P24.",
  },
  {
    title: "Statutory Deductions",
    desc: "NIS (3%/3%), NHT (2%/3%), Education Tax (2.25%/3.5%), and HEART/NSTA (3%) — rates, ceilings, remittance schedules, and filing deadlines.",
  },
  {
    title: "Jamaica HR Technology",
    desc: "Building software systems that translate complex Jamaican statutory rules into automated, error-free payroll processing for SMEs and enterprises.",
  },
  {
    title: "Caribbean Business",
    desc: "Understanding the unique challenges of running a business in Jamaica — from multi-bank payroll files to parish-level operations across all 14 parishes.",
  },
];

export default function RubenTouitouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/about" className="underline hover:text-foreground">
                  About
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Ruben Touitou</li>
            </ol>
          </nav>

          {/* Author Profile Header */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-10">
            {/* Headshot placeholder with initials */}
            <div
              className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center"
              aria-label="Ruben Touitou profile photo placeholder"
            >
              <span className="text-3xl sm:text-4xl font-bold text-primary select-none">
                RT
              </span>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold sm:text-4xl mb-1">
                Ruben Touitou
              </h1>
              <p className="text-base font-medium text-primary mb-2">
                Founder &amp; CEO, PayrollJamaica
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Payroll Expert — Jamaica Statutory Compliance (PAYE, NIS, NHT,
                Education Tax)
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/payrolljamaica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary underline hover:no-underline"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:hello@payrolljamaica.com"
                  className="inline-flex items-center gap-1.5 text-sm text-primary underline hover:no-underline"
                >
                  hello@payrolljamaica.com
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            {/* About Ruben */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">About Ruben</h2>
            <p className="text-muted-foreground">
              Ruben Touitou is the founder and CEO of PayrollJamaica, the only
              payroll software built specifically for Jamaican businesses. With a
              background in technology and Caribbean business, Ruben identified a
              critical gap in the Jamaican market: small and medium-sized
              businesses were either struggling with expensive international
              software not designed for Jamaica&apos;s statutory requirements, or
              relying on error-prone spreadsheets that created real compliance
              risk.
            </p>
            <p className="text-muted-foreground">
              Ruben built PayrollJamaica to solve that problem — creating a
              platform that automates PAYE calculations using Jamaica&apos;s
              J$1,500,096 annual threshold, NIS, NHT, Education Tax, and
              HEART/NSTA deductions, and generates TAJ-ready reports including
              SO1 and P24 forms. Every feature was designed with one question in
              mind: does this actually work for a Jamaican employer on payday?
            </p>
            <p className="text-muted-foreground">
              His expertise spans Jamaica&apos;s statutory compliance framework,
              Tax Administration Jamaica (TAJ) reporting requirements, and the
              practical challenges facing Jamaican businesses across all 14
              parishes. He writes regularly on Jamaican payroll compliance,
              statutory rate updates, and payroll best practices for local
              employers.
            </p>

            {/* Areas of Expertise */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Areas of Expertise
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 not-prose">
              {expertiseAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Credentials / Trust Signals */}
            <div className="rounded-2xl border bg-muted/50 p-6 sm:p-8 mt-8 not-prose">
              <h3 className="text-base font-semibold mb-4">
                Professional Background
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">&#8594;</span>
                  <span>
                    Founder &amp; CEO of PayrollJamaica — Jamaica&apos;s
                    purpose-built payroll software
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">&#8594;</span>
                  <span>
                    Expert in Jamaica statutory compliance: PAYE, NIS, NHT,
                    Education Tax, HEART/NSTA
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">&#8594;</span>
                  <span>
                    Background in technology and Caribbean business operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">&#8594;</span>
                  <span>
                    Deep knowledge of Tax Administration Jamaica (TAJ) reporting
                    requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">&#8594;</span>
                  <span>
                    Tracks every Jamaican payroll rate change, threshold update,
                    and compliance requirement from the Ministry of Finance
                  </span>
                </li>
              </ul>
            </div>

            {/* Published Articles */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Published Articles
            </h2>
            <p className="text-muted-foreground">
              Ruben writes in-depth guides on Jamaican payroll compliance,
              statutory requirements, and payroll software best practices for
              Jamaican employers.
            </p>
            <div className="space-y-4 not-prose">
              {publishedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block rounded-xl border bg-card p-5 hover:bg-muted/50 transition-colors group"
                >
                  <h3 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="not-prose">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-primary underline hover:no-underline mt-2"
              >
                View all articles &rarr;
              </Link>
            </div>

            {/* Contact */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Get in Touch
            </h2>
            <div className="rounded-2xl border bg-card p-6 not-prose">
              <p className="text-sm text-muted-foreground mb-4">
                Have a question about Jamaican payroll compliance, statutory
                requirements, or PayrollJamaica? Reach out directly.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold mb-1.5">Email</h3>
                  <a
                    href="mailto:hello@payrolljamaica.com"
                    className="text-sm text-primary underline hover:no-underline"
                  >
                    hello@payrolljamaica.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1.5">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/payrolljamaica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline hover:no-underline"
                  >
                    linkedin.com/company/payrolljamaica
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 text-center not-prose mt-10">
              <h2 className="text-xl font-semibold mb-3">
                Try PayrollJamaica Free
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm">
                See the payroll software Ruben built for Jamaica — automatic
                PAYE, NIS, NHT, Education Tax, and TAJ-ready reports. No
                spreadsheets. No manual calculations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/calculator"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
                >
                  About PayrollJamaica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
