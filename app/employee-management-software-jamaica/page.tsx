import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Looking for employee management software in Jamaica? Payroll Jamaica combines HR and payroll in one platform built for Jamaican businesses. Manage employee records, track attendance, handle PAYE, NIS, NHT, and Education Tax — all from one dashboard. Trusted by businesses from Kingston to Montego Bay.";

export const metadata: Metadata = {
  title: "Employee Management Software Jamaica — HR & Payroll for Jamaican Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "The #1 employee management software for Jamaica. Automate HR records, payroll, PAYE, NIS, NHT, and Education Tax from one platform. Built specifically for Jamaican businesses.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "employee management software Jamaica",
    "HR software Jamaica",
    "HR management software Jamaica",
    "employee tracking software Jamaica",
    "HR system Jamaica",
    "human resource software Jamaica",
    "workforce management Jamaica",
    "employee records software Jamaica",
    "payroll HR software Jamaica",
    "small business HR software Jamaica",
    "Jamaica HR system",
    "HR payroll software Jamaica",
    "employee management Jamaica",
    "cloud HR software Jamaica",
    "HR compliance Jamaica",
  ]),
  alternates: {
    canonical: canonical("/employee-management-software-jamaica"),
    languages: {
      "en-JM": canonical("/employee-management-software-jamaica"),
      en: canonical("/employee-management-software-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Employee Management Software Jamaica — Payroll Jamaica",
    description: baseDescription,
    url: canonical("/employee-management-software-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Employee Management Software Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Management Software Jamaica — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Payroll Jamaica",
      description:
        "Employee management and payroll software built for Jamaican businesses. Manages HR records, statutory deductions (PAYE, NIS, NHT, Education Tax), payslips, and compliance reporting.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        priceCurrency: "JMD",
        price: "3500",
        priceValidUntil: "2026-12-31",
      },
      areaServed: { "@type": "Country", name: "Jamaica" },
      url: canonical("/employee-management-software-jamaica"),
    },
    {
      "@type": "Organization",
      name: "Payroll Jamaica",
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      areaServed: { "@type": "Country", name: "Jamaica" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "JM",
        availableLanguage: "English",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best employee management software for Jamaican businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payroll Jamaica is the leading employee management software built specifically for Jamaica. It combines HR records management, payroll automation, and statutory compliance (PAYE, NIS, NHT, Education Tax) in one platform. Unlike international tools, it's pre-configured for Jamaican tax laws and updates automatically when TAJ changes rates.",
          },
        },
        {
          "@type": "Question",
          name: "Does Payroll Jamaica handle both HR and payroll together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Payroll Jamaica manages employee records, onboarding, leave tracking, and payslip generation alongside full payroll processing. Your HR data and payroll data are connected, so salary changes, promotions, and new hires flow directly into payroll without duplicate data entry.",
          },
        },
        {
          "@type": "Question",
          name: "How does employee management software help with Jamaica's statutory compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payroll Jamaica automatically calculates PAYE, NIS, NHT, and Education Tax for every employee based on their records. When an employee's status changes (promotion, termination, leave), the system adjusts deductions accordingly and generates the correct TAJ-format reports for filing.",
          },
        },
        {
          "@type": "Question",
          name: "Can small businesses in Jamaica afford employee management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Payroll Jamaica plans start from J$3,500/month for small teams — less than the cost of correcting one TAJ compliance error. There's also a free trial so you can test the full system before committing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Payroll Jamaica work for businesses outside Kingston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payroll Jamaica is a cloud-based platform used by businesses across all 14 parishes in Jamaica — Kingston, St. Andrew, St. Catherine, Clarendon, Manchester, St. Elizabeth, Westmoreland, St. James (Montego Bay), Hanover, Trelawny, St. Ann, St. Mary, Portland, and St. Thomas. Access it from anywhere in Jamaica with an internet connection.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "👤",
    title: "Employee Records & Profiles",
    description:
      "Centralise every employee's information — personal details, tax registration numbers, NIS number, job title, salary history, leave balances, and documents — in one secure profile. No more searching through folders or spreadsheets.",
  },
  {
    icon: "💰",
    title: "Integrated Payroll Processing",
    description:
      "HR data feeds directly into payroll. When you update a salary, add a new hire, or process a termination, payroll adjusts automatically. PAYE, NIS, NHT, and Education Tax are calculated correctly every cycle without manual intervention.",
  },
  {
    icon: "📋",
    title: "Leave & Absence Management",
    description:
      "Track vacation, sick leave, maternity/paternity leave, and unpaid leave against Jamaica's statutory minimums. Employees submit requests online, managers approve in one click, and payroll adjusts automatically for approved absences.",
  },
  {
    icon: "📄",
    title: "Digital Payslips & Employee Self-Service",
    description:
      "Employees log in to download payslips, view their NIS and NHT contribution history, and check leave balances — without emailing HR. Reduces admin requests by 70% and gives employees the transparency they expect.",
  },
  {
    icon: "🏛️",
    title: "TAJ-Ready Compliance Reporting",
    description:
      "Generate P6 monthly summaries, annual returns, and all TAJ-format reports automatically. When audit season comes, your records are already organised. Stop spending weekends compiling data for tax filings.",
  },
  {
    icon: "🏦",
    title: "Bank Payment Integration",
    description:
      "Direct deposit to NCB, JN Bank, Scotiabank Jamaica, and Sagicor — generated in the correct bank file format. Process payments in one click. No reformatting, no manual uploads to banking portals.",
  },
];

const steps = [
  {
    step: "01",
    title: "Import Employee Data",
    description:
      "Upload your existing staff list via spreadsheet or connect your current system. We handle the data migration — no manual re-entry required.",
  },
  {
    step: "02",
    title: "Configure Pay Structures",
    description:
      "Set up salary bands, allowances, overtime rules, and custom deductions. The system maps every pay component to the correct statutory calculation.",
  },
  {
    step: "03",
    title: "Run a Test Payroll Cycle",
    description:
      "Process your first cycle in draft mode. Review every payslip, compare against your current calculations, and verify compliance before going live.",
  },
  {
    step: "04",
    title: "Go Live with Confidence",
    description:
      "Activate bank payments and run your first live cycle. From here, payroll runs in minutes — not hours — and your compliance is automatic.",
  },
];

export default function EmployeeManagementSoftwareJamaica() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-gray-950 to-black pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-green-900/40 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-green-700/50">
              🇯🇲 Built for Jamaican Businesses
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Employee Management Software{" "}
              <span className="text-green-400">for Jamaica</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              The only HR and payroll platform built specifically for Jamaican statutory compliance.
              Manage your team, run payroll, and stay compliant with PAYE, NIS, NHT, and Education
              Tax — all from one dashboard.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Start Free Trial
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-green-500 hover:text-green-400"
              >
                Try Free Calculator →
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required · Setup in under a day · Used by businesses across Jamaica
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Managing Employees in Jamaica Shouldn't Be This Hard
            </h2>
            <p className="text-lg text-gray-400">
              Jamaican business owners face a unique challenge: you need to manage your team
              <em> and</em> navigate a complex statutory framework — PAYE, NIS, NHT, Education Tax
              — that international HR tools simply don't understand. Most software forces you to
              configure Jamaica's rules manually, update rates yourself, and hope you've got it
              right when TAJ comes calling.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                pain: "International HR tools miss Jamaica-specific compliance rules",
                icon: "❌",
              },
              {
                pain: "Manual spreadsheets break when employees change, get promoted, or leave",
                icon: "❌",
              },
              {
                pain: "Separate HR and payroll systems mean double data entry and sync errors",
                icon: "❌",
              },
            ].map((item) => (
              <div key={item.pain} className="rounded-xl bg-gray-900 p-6 ring-1 ring-red-900/40">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <p className="text-gray-300">{item.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Everything Your Jamaica Business Needs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              One platform. HR records, payroll automation, and statutory compliance — built
              specifically for how Jamaican businesses operate.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800 transition-all hover:ring-green-800"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Set Up in Under a Day
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Most Jamaican businesses are running live payroll within 24 hours of signing up.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/40 ring-1 ring-green-700/50">
                  <span className="text-sm font-bold text-green-400">{step.step}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Deep-Dive */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Jamaica Compliance, Handled Automatically
              </h2>
              <p className="mb-6 text-lg text-gray-400">
                Every Jamaican employer must correctly deduct and remit four statutory contributions
                every pay cycle. Get any one wrong, and TAJ will find it. Payroll Jamaica
                automates all four — and updates automatically when rates change.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "PAYE (Pay As You Earn)",
                    detail: "Correct threshold application, marginal rates, and year-to-date tracking",
                  },
                  {
                    name: "NIS (National Insurance Scheme)",
                    detail: "Correct ceiling caps, cumulative tracking, and compliance certificates",
                  },
                  {
                    name: "NHT (National Housing Trust)",
                    detail: "Separate employer and employee rates, monthly vouchers, refund eligibility",
                  },
                  {
                    name: "Education Tax",
                    detail: "Applies from dollar one — no threshold. Correct split in TAJ remittances",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex gap-4 rounded-xl bg-gray-900 p-4">
                    <div className="mt-0.5 flex-shrink-0 text-green-400">✓</div>
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800">
              <h3 className="mb-6 text-xl font-bold text-white">Trusted Across Jamaica</h3>
              <div className="space-y-6">
                {[
                  {
                    parish: "Kingston & St. Andrew",
                    type: "Financial services, retail, and professional firms",
                  },
                  {
                    parish: "St. James (Montego Bay)",
                    type: "Tourism, hospitality, and resort operations",
                  },
                  {
                    parish: "St. Catherine (Portmore)",
                    type: "Manufacturing, logistics, and distribution",
                  },
                  {
                    parish: "Manchester (Mandeville)",
                    type: "Mining, agriculture, and SME businesses",
                  },
                  {
                    parish: "All 14 Parishes",
                    type: "Cloud-based — works anywhere in Jamaica",
                  },
                ].map((item) => (
                  <div key={item.parish} className="flex items-start gap-3">
                    <span className="mt-0.5 text-green-400">📍</span>
                    <div>
                      <div className="font-medium text-white">{item.parish}</div>
                      <div className="text-sm text-gray-400">{item.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Employee Management for Every Jamaica Industry
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                industry: "Tourism & Hospitality",
                detail: "Service charge distribution, shift premiums, seasonal staff management",
              },
              {
                industry: "Retail & Distribution",
                detail: "Commission tracking, multi-location payroll, part-time staff",
              },
              {
                industry: "Construction & Engineering",
                detail: "Project-based payroll, contractor management, weekly pay cycles",
              },
              {
                industry: "Healthcare",
                detail: "Shift differentials, on-call premiums, NHF benefit administration",
              },
              {
                industry: "Professional Services",
                detail: "Director remuneration, performance bonuses, expense management",
              },
              {
                industry: "Education & Non-Profit",
                detail: "Term-based pay, grant-funded staff, HEART/NTA program compliance",
              },
            ].map((item) => (
              <div
                key={item.industry}
                className="rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800"
              >
                <h3 className="mb-1 font-semibold text-white">{item.industry}</h3>
                <p className="text-sm text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Plans Starting from J$3,500/month
          </h2>
          <p className="mb-8 text-xl text-gray-400">
            Less than the cost of one compliance error. Free trial included — no credit card
            required.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white transition-all hover:border-green-500 hover:text-green-400"
            >
              View All Features
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Already using a different system?{" "}
            <Link href="/payroll-software-jamaica" className="text-green-400 hover:underline">
              See why businesses switch to Payroll Jamaica →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any) => (
              <div key={faq.name} className="rounded-xl bg-gray-900 p-6 ring-1 ring-gray-800">
                <h3 className="mb-3 font-semibold text-white">{faq.name}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            More Resources for Jamaican Businesses
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/payroll-software-jamaica"
              className="rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800 transition-all hover:ring-green-700"
            >
              <h3 className="mb-1 font-semibold text-white">Payroll Software Jamaica</h3>
              <p className="text-sm text-gray-400">
                The complete guide to payroll software built for Jamaica
              </p>
            </Link>
            <Link
              href="/hr-software-jamaica"
              className="rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800 transition-all hover:ring-green-700"
            >
              <h3 className="mb-1 font-semibold text-white">HR Software Jamaica</h3>
              <p className="text-sm text-gray-400">
                HR tools designed for Jamaican compliance requirements
              </p>
            </Link>
            <Link
              href="/payroll-company-jamaica"
              className="rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800 transition-all hover:ring-green-700"
            >
              <h3 className="mb-1 font-semibold text-white">Payroll Company Jamaica</h3>
              <p className="text-sm text-gray-400">
                Why choose a dedicated Jamaica payroll provider
              </p>
            </Link>
            <Link
              href="/calculator"
              className="rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800 transition-all hover:ring-green-700"
            >
              <h3 className="mb-1 font-semibold text-white">Free PAYE Calculator</h3>
              <p className="text-sm text-gray-400">
                Calculate PAYE, NIS, NHT, and Education Tax instantly
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA
        headline="Manage Your Jamaica Workforce From One Dashboard"
        text="HR records, payroll, and compliance — built for Jamaican businesses."
      />
    </>
  );
}
