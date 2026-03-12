import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import {
  LinkIcon,
  DatabaseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  FileTextIcon,
  BarChart3Icon,
  BuildingIcon,
  UsersIcon,
  ShieldCheckIcon,
  RefreshCwIcon,
  DownloadIcon,
  UploadIcon,
} from "lucide-react";

const baseDescription =
  "PayrollJamaica integrates with QuickBooks, Xero, Sage, Zoho Books, and major Jamaican banks (NCB, Scotiabank, CIBC FirstCaribbean). Connect your accounting software for seamless payroll-to-journal entries and bank file export for direct salary payments.";

export const metadata: Metadata = {
  title: "Integrations — Payroll Jamaica with QuickBooks, Xero & Jamaican Banks",
  description: ensureMinDescription(
    "Connect PayrollJamaica with QuickBooks, Xero, Sage, and Jamaican banks. Automated journal entries, bank file exports for NCB, Scotiabank, and CIBC FirstCaribbean.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Jamaica QuickBooks integration",
    "payroll Jamaica Xero integration",
    "payroll Jamaica Sage integration",
    "Jamaica payroll accounting integration",
    "payroll software Jamaica integrations",
    "QuickBooks payroll Jamaica",
    "Xero payroll Jamaica",
    "Sage payroll Jamaica",
    "Zoho Books payroll Jamaica",
    "Jamaica payroll bank file NCB",
    "Jamaica payroll bank file Scotiabank",
    "payroll bank file Jamaica",
    "accounting software payroll Jamaica",
    "payroll journal entry Jamaica",
    "HR software integrations Jamaica",
  ]),
  alternates: {
    canonical: canonical("/integrations"),
    languages: { "en-JM": canonical("/integrations"), en: canonical("/integrations") },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    title: "Integrations — PayrollJamaica with QuickBooks, Xero & Banks",
    description: baseDescription,
    url: canonical("/integrations"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "PayrollJamaica Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayrollJamaica Integrations",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const accountingIntegrations = [
  {
    name: "QuickBooks Online",
    description:
      "Sync payroll journal entries directly to QuickBooks Online. Wage expense, PAYE payable, NIS payable, NHT payable, and net pay accounts are mapped automatically.",
    features: [
      "Auto journal entry after each payroll run",
      "Maps to your existing QuickBooks chart of accounts",
      "Supports QuickBooks Online (JM, US, and UK editions)",
      "Payroll liability reconciliation report",
    ],
    badge: "Most Popular",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "Xero",
    description:
      "Export payroll as Xero-formatted journal entries or use direct API sync. Keeps your Xero books and PayrollJamaica payroll in perfect alignment.",
    features: [
      "Xero journal entry export (CSV and API)",
      "Employee records sync",
      "Payroll summary by cost centre",
      "Supports multi-currency (JMD/USD)",
    ],
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Sage 50 & Sage 200",
    description:
      "PayrollJamaica exports Sage-compatible payroll journals. Eliminate double-entry between your payroll and accounting systems.",
    features: [
      "Sage journal import file (CSV format)",
      "Payroll period summaries",
      "Department code mapping",
      "Year-end payroll reports for Sage",
    ],
    badge: "Compatible",
    badgeColor: "bg-gray-100 text-gray-700",
  },
  {
    name: "Zoho Books",
    description:
      "Connect PayrollJamaica to Zoho Books for automatic payroll accounting. Salary expense and statutory liabilities post without manual entry.",
    features: [
      "Zoho Books journal export",
      "Vendor payment matching for TAJ/NIS remittances",
      "Payslip storage in Zoho WorkDrive",
      "API connection available on request",
    ],
    badge: "Compatible",
    badgeColor: "bg-gray-100 text-gray-700",
  },
];

const bankIntegrations = [
  {
    name: "NCB (National Commercial Bank)",
    description: "Export payroll as NCB-formatted ACH/RTGS batch file for direct salary payments.",
    format: "NCB eTrust batch file (CSV)",
  },
  {
    name: "Scotiabank Jamaica",
    description: "Generate Scotiabank-compatible payroll direct deposit files in the correct column format.",
    format: "Scotiabank bulk payment file (CSV)",
  },
  {
    name: "CIBC FirstCaribbean",
    description: "Export bulk salary payments formatted for CIBC FirstCaribbean Jamaica direct debit.",
    format: "CIBC bulk salary file (CSV)",
  },
  {
    name: "JN Bank",
    description: "Payroll batch files formatted for JN Bank direct salary payments.",
    format: "JN Bank payroll file (CSV)",
  },
  {
    name: "Sagicor Bank Jamaica",
    description: "Generate Sagicor Bank-compatible payroll transfer files.",
    format: "Sagicor bulk payment file (CSV)",
  },
  {
    name: "Mayberry Investments",
    description: "Export for Mayberry Investments payroll disbursement processing.",
    format: "Mayberry payment file (CSV)",
  },
];

const govIntegrations = [
  {
    name: "TAJ (Tax Administration Jamaica)",
    description:
      "Export P45, P6, P24 forms and the annual SO1 return in TAJ-required formats. Never manually re-enter payroll data into the e-Tax portal.",
    features: ["SO1 annual return export", "Monthly PAYE remittance summary", "P45 termination certificates", "P6 and P24 forms"],
    icon: FileTextIcon,
  },
  {
    name: "NIS (National Insurance Scheme)",
    description:
      "Generate NIS contribution schedules and remittance reports in the format required by the National Insurance Fund.",
    features: ["NIS contribution schedule export", "Monthly remittance summary", "Employee NIS contribution history", "Annual NIS reconciliation"],
    icon: ShieldCheckIcon,
  },
  {
    name: "NHT (National Housing Trust)",
    description:
      "Export NHT contribution lists and remittance reports for employer filing. Supports NHT online portal upload format.",
    features: ["NHT monthly contribution list", "NHT employer remittance report", "NHT portal CSV upload format", "Employee NHT refund history"],
    icon: BuildingIcon,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "PayrollJamaica Integrations",
  description: baseDescription,
  url: `${siteConfig.url}/integrations`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Integrations", item: `${siteConfig.url}/integrations` },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does PayrollJamaica integrate with QuickBooks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PayrollJamaica integrates with QuickBooks Online to automatically post payroll journal entries after each payroll run. Wage expense, PAYE payable, NIS payable, NHT payable, and net pay accounts are mapped to your existing QuickBooks chart of accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Which Jamaican banks does PayrollJamaica support for bank file export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PayrollJamaica exports bank payment files for NCB, Scotiabank Jamaica, CIBC FirstCaribbean, JN Bank, Sagicor Bank, and Mayberry Investments. Each file is formatted to the bank's bulk payment specification so you can upload directly to internet banking.",
      },
    },
    {
      "@type": "Question",
      name: "Can PayrollJamaica export data for the TAJ SO1 annual return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PayrollJamaica generates the SO1 annual return data in the format required by Tax Administration Jamaica (TAJ). You can export the return directly to the TAJ e-Tax portal format, eliminating manual re-entry.",
      },
    },
    {
      "@type": "Question",
      name: "Does PayrollJamaica integrate with Xero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PayrollJamaica exports Xero-formatted journal entries as CSV or via direct API sync. The integration keeps your Xero books aligned with your PayrollJamaica payroll runs, with no manual double-entry required.",
      },
    },
  ],
};

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <LinkIcon className="w-4 h-4" />
              <span>Connects with the tools Jamaican businesses already use</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PayrollJamaica Integrations
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect PayrollJamaica with your accounting software, Jamaican bank, and government
              portals. One payroll run — everything updates automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="bg-green-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-green-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RefreshCwIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Run Payroll Once</h3>
                <p className="text-gray-600 text-sm">Process payroll in PayrollJamaica — all calculations done.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <UploadIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Sync to Accounting</h3>
                <p className="text-gray-600 text-sm">Journal entries post automatically to QuickBooks, Xero, or Sage.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DownloadIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Export to Bank</h3>
                <p className="text-gray-600 text-sm">Upload bank file to NCB, Scotiabank, or CIBC — salaries paid.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting integrations */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Accounting Software Integrations
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Stop re-entering payroll data in your accounting system. PayrollJamaica exports
              journal entries in the format your accounting software expects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accountingIntegrations.map((integration) => (
                <div
                  key={integration.name}
                  className="border border-gray-200 rounded-2xl p-8 hover:border-green-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{integration.name}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${integration.badgeColor}`}>
                      {integration.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              Using FreshBooks, Wave, or another accounting tool?{" "}
              <Link href="/contact" className="text-green-600 hover:underline">
                Contact us
              </Link>{" "}
              — we can export a compatible CSV format for any system.
            </p>
          </div>
        </section>

        {/* Bank integrations */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Jamaican Bank Direct Deposit Files
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Export payroll as a bank-ready batch file and upload to your internet banking
              to pay all employees simultaneously. Works with every major Jamaican bank.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankIntegrations.map((bank) => (
                <div
                  key={bank.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-200 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{bank.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{bank.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                    <DatabaseIcon className="w-3.5 h-3.5" />
                    <span>{bank.format}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <p className="text-green-800 font-medium mb-1">All Jamaican banks supported</p>
              <p className="text-green-700 text-sm">
                Don&apos;t see your bank? We add new bank formats on request — usually within 2 business days.
                <Link href="/contact" className="underline ml-1">Contact us.</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Government integrations */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Government & Statutory Body Integrations
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Export exactly what TAJ, NIS, and NHT require. Never re-type payroll data into government portals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {govIntegrations.map(({ icon: Icon, ...integration }) => (
                <div key={integration.name} className="border border-gray-200 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Integration FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Does PayrollJamaica integrate with QuickBooks?",
                  a: "Yes. PayrollJamaica integrates with QuickBooks Online to automatically post payroll journal entries. Wage expense, PAYE payable, NIS payable, NHT payable, and net pay accounts are mapped to your existing QuickBooks chart of accounts. No manual re-entry required.",
                },
                {
                  q: "Which banks does PayrollJamaica support for direct deposit files?",
                  a: "We support NCB, Scotiabank Jamaica, CIBC FirstCaribbean, JN Bank, Sagicor Bank, and Mayberry Investments. If your bank is not listed, contact us and we will add the format within 2 business days.",
                },
                {
                  q: "Can I export payroll data for the TAJ SO1 annual return?",
                  a: "Yes. PayrollJamaica generates the SO1 return data in TAJ-required format, ready for upload to the e-Tax portal. This eliminates manual data re-entry for the March 31 deadline.",
                },
                {
                  q: "Do I need technical skills to set up integrations?",
                  a: "No. Most integrations are configuration-based: you map your account codes once, and the system handles exports automatically. For QuickBooks and Xero, setup takes 10–15 minutes using our step-by-step guide.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-700 py-16 px-4 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Connect Your Tools Today</h2>
            <p className="text-green-100 mb-8 text-lg">
              Start your free trial and connect PayrollJamaica to your accounting software and bank in under 15 minutes.
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-green-50 transition-colors"
            >
              Start Free Trial
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <p className="mt-4 text-green-200 text-sm">No credit card required · Setup in under 1 hour</p>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-600 mb-6 font-medium">Related Pages</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/features", label: "All Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/payroll-software-jamaica", label: "Payroll Software" },
                { href: "/payroll-services", label: "Managed Services" },
                { href: "/compare/quickbooks", label: "vs QuickBooks" },
                { href: "/compare/xero", label: "vs Xero" },
                { href: "/compare/excel", label: "vs Excel" },
                { href: "/testimonials", label: "Customer Reviews" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:border-green-300 hover:text-green-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
