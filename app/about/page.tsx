import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const baseDescription =
  "PayrollJamaica is Jamaica's purpose-built payroll and HR software. We automate PAYE, NIS, NHT, Education Tax, payslips, and statutory compliance for Jamaican businesses of every size.";

export const metadata: Metadata = {
  title: "About PayrollJamaica — Jamaica's Payroll & HR Software",
  description: ensureMinDescription(
    "About PayrollJamaica — Jamaica's leading payroll and HR software company. Built by Jamaicans, for Jamaican businesses. Automate PAYE, NIS, NHT, payslips.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "about PayrollJamaica",
    "Jamaica payroll company",
    "payroll software Jamaica",
    "who is PayrollJamaica",
    "Jamaica HR software company",
    "payroll provider Jamaica",
    "Jamaica payroll compliance",
    "TAJ payroll software",
  ]),
  alternates: { canonical: canonical("/about") },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About PayrollJamaica — Jamaica's Payroll & HR Software",
    description: baseDescription,
    url: canonical("/about"),
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteConfig.url}/about`,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og.jpg`,
  foundingDate: "2024",
  description: baseDescription,
  areaServed: { "@type": "Country", name: "Jamaica" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "JM",
    addressLocality: "Kingston",
    addressRegion: "Kingston Parish",
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.facebook,
    siteConfig.links.instagram,
  ].filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@payrolljamaica.com",
    contactType: "customer support",
    areaServed: "JM",
    availableLanguage: ["en"],
  },
  knowsAbout: [
    "Payroll processing Jamaica",
    "PAYE income tax Jamaica",
    "NIS contributions Jamaica",
    "NHT contributions Jamaica",
    "Education Tax Jamaica",
    "HEART/NSTA levy Jamaica",
    "Statutory compliance Jamaica",
    "Tax Administration Jamaica reporting",
    "Jamaica bank payment files",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PayrollJamaica",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: baseDescription,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JMD",
    description: "Free 14-day trial",
  },
  featureList: [
    "PAYE automatic calculation",
    "NIS contribution processing",
    "NHT contribution processing",
    "Education Tax calculation",
    "HEART/NSTA levy processing",
    "TAJ-ready statutory reports (SO1, P24)",
    "Bank payment file generation (NCB, JN, Scotiabank)",
    "Employee self-service payslips",
    "Leave and benefits management",
    "Multi-location support",
  ],
};

const keyFeatures = [
  {
    title: "Automated Statutory Calculations",
    desc: "PAYE with the correct J$1,500,096 annual threshold, NIS (3%/3%), NHT (2%/3%), Education Tax (2.25%/3.5%), and HEART/NSTA (3%) — calculated every pay run without manual spreadsheets.",
  },
  {
    title: "TAJ-Ready Reports",
    desc: "SO1, P24, NIS returns, and NHT remittance files formatted exactly as Tax Administration Jamaica expects. Print, sign, and submit.",
  },
  {
    title: "Bank Payment Files",
    desc: "Generate ACH and salary upload files compatible with NCB, JN Bank, Scotiabank, Sagicor Bank, and FirstCaribbean — no reformatting needed.",
  },
  {
    title: "Professional Payslips",
    desc: "Generate payslips in one click. Employees access theirs via self-service — reducing admin work and HR queries.",
  },
  {
    title: "Leave & Benefits Management",
    desc: "Track vacation, sick leave, and benefits with configurable policies that match Jamaica's labour laws.",
  },
  {
    title: "Multi-Location Support",
    desc: "Manage branches, departments, and cost centres across Kingston, Montego Bay, and island-wide from a single dashboard.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">About</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-6">
            About PayrollJamaica
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              PayrollJamaica is modern payroll and HR software built
              specifically for Jamaican businesses. We handle the complexities
              of local tax law — PAYE, NIS, NHT, Education Tax, HEART/NSTA — so
              you can focus on running your business.
            </p>

            {/* Why We Built PayrollJamaica */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Why We Built PayrollJamaica
            </h2>
            <p className="text-muted-foreground">
              For years, Jamaican businesses had two payroll options: expensive
              international software that didn&apos;t understand PAYE
              thresholds, NIS ceilings, or NHT rates — or error-prone Excel
              spreadsheets passed around the office on USB drives. Neither
              option worked.
            </p>
            <p className="text-muted-foreground">
              We built PayrollJamaica because Jamaica deserves payroll software
              that speaks its language. Software that knows the difference
              between a monthly and fortnightly pay period under TAJ rules.
              Software that generates SO1 forms, not W-2s. Software that
              creates bank files for NCB and JN — not Chase and Wells Fargo.
            </p>
            <p className="text-muted-foreground">
              Every feature, every calculation, every report was designed
              with one question in mind:{" "}
              <strong>
                does this work for a Jamaican business owner on payday?
              </strong>
            </p>

            {/* Our Mission */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Every Jamaican employer — from a five-person shop in May Pen to a
              500-employee operation in New Kingston — deserves payroll software
              that understands local rules, generates compliant reports, and
              just works. We built PayrollJamaica to make that a reality.
            </p>

            {/* Jamaica Market Expertise */}
            <div className="rounded-2xl border bg-muted/50 p-6 sm:p-8 mt-8">
              <h3 className="text-lg font-semibold mb-4">
                Jamaica Payroll Expertise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    2025/26
                  </div>
                  <div className="text-muted-foreground mt-1">
                    Tax Year Updated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-muted-foreground mt-1">
                    Statutory Deductions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground mt-1">
                    Banks Supported
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">14</div>
                  <div className="text-muted-foreground mt-1">
                    Parishes Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-muted-foreground mt-1">
                    TAJ Report Types
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground mt-1">
                    Jamaica Focused
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do - Key Features */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">What We Do</h2>
            <div className="grid gap-4 sm:grid-cols-2 not-prose">
              {keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Built for Jamaica */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Built for Jamaica — Not Adapted From Somewhere Else
            </h2>
            <p className="text-muted-foreground">
              Unlike generic international payroll tools that bolt on Jamaica as
              an afterthought, PayrollJamaica is designed from the ground up for
              Jamaica&apos;s regulatory environment. We stay current with every
              tax rate change, threshold update, and compliance requirement from
              the Ministry of Finance and TAJ so you don&apos;t have to.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                PAYE threshold updated the day the GOJ budget passes — not
                months later
              </li>
              <li>
                NIS ceiling changes reflected immediately in calculations
              </li>
              <li>
                Reports formatted for TAJ — not adapted from IRS templates
              </li>
              <li>
                JMD currency throughout — no USD conversion confusion
              </li>
              <li>
                Local Jamaican support team — not an overseas call centre
              </li>
            </ul>

            {/* Industries We Serve */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">
              We serve businesses across every sector in Jamaica, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {[
                {
                  name: "Hotels & Hospitality",
                  href: "/payroll-jamaica-hotels",
                },
                {
                  name: "Construction",
                  href: "/construction-payroll-jamaica",
                },
                { name: "Retail", href: "/retail-payroll-jamaica" },
                { name: "Healthcare", href: "/healthcare-payroll-jamaica" },
                {
                  name: "Manufacturing",
                  href: "/manufacturing-payroll-jamaica",
                },
                { name: "Education", href: "/education-payroll-jamaica" },
                {
                  name: "Government & NGO",
                  href: "/government-ngo-payroll-jamaica",
                },
                { name: "Restaurants", href: "/payroll-jamaica-restaurants" },
                { name: "Churches", href: "/payroll-jamaica-churches" },
              ].map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="text-sm border rounded-lg px-3 py-2 hover:bg-muted transition text-center"
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            {/* Contact / Get in Touch */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Get in Touch
            </h2>
            <div className="rounded-2xl border bg-card p-6 not-prose">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold mb-2">General Inquiries</h3>
                  <a
                    href="mailto:info@payrolljamaica.com"
                    className="text-sm text-primary underline"
                  >
                    info@payrolljamaica.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Sales</h3>
                  <a
                    href="mailto:sales@payrolljamaica.com"
                    className="text-sm text-primary underline"
                  >
                    sales@payrolljamaica.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">WhatsApp</h3>
                  <a
                    href={siteConfig.links.whatsapp}
                    className="text-sm text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Social</h3>
                  <div className="flex gap-3">
                    <a href={siteConfig.links.linkedin} className="text-sm text-primary underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={siteConfig.links.instagram} className="text-sm text-primary underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href={siteConfig.links.facebook} className="text-sm text-primary underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">Get Started</h2>
            <p className="text-muted-foreground">
              Try our{" "}
              <Link href="/calculator" className="text-primary underline">
                free payroll calculator
              </Link>{" "}
              to see PAYE, NIS, NHT, and Education Tax calculations instantly.
              When you&apos;re ready to automate your entire payroll process,{" "}
              <Link href="/pricing" className="text-primary underline">
                view our plans
              </Link>{" "}
              or{" "}
              <a
                href="#"
                data-open-fillout="true"
                className="text-primary underline"
              >
                request a demo
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
