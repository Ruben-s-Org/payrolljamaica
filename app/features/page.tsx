import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import {
  ScanFaceIcon, SquarePenIcon, MonitorSmartphoneIcon, BlocksIcon,
  FastForwardIcon, EclipseIcon, LanguagesIcon, RocketIcon,
  FileTextIcon, ShieldCheckIcon, BarChart3Icon, UsersIcon,
  ClockIcon, DatabaseIcon, BellIcon, GitBranchIcon,
} from "lucide-react";

const baseDescription = "Payroll Jamaica is purpose-built payroll and HR software for Jamaican businesses. Our platform automates PAYE, NIS, NHT, and Education Tax calculations, generates compliant payslips, handles leave management, and produces statutory remittance reports — all in one system designed for Jamaica's regulatory environment.";

export const metadata: Metadata = {
  title: "Features — Jamaica Payroll & HR Software | Payroll Jamaica",
  description: ensureMinDescription(
    "Discover all the features of Payroll Jamaica — Jamaica's most complete HR and payroll software. Automated PAYE, NIS, NHT, Education Tax, digital payslips, leave management, multi-branch support, bank-ready payments, and full statutory compliance.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll software features Jamaica",
    "HR software features Jamaica",
    "PAYE automation Jamaica",
    "NIS NHT payroll software",
    "payroll system features Jamaica",
    "digital payslips Jamaica",
    "leave management software Jamaica",
    "statutory compliance software Jamaica",
    "payroll automation features",
    "bank payment files Jamaica",
    "multi-branch payroll Jamaica",
    "employee self-service portal Jamaica",
    "HR document storage Jamaica",
    "payroll reports Jamaica",
    "payroll software Jamaica",
  ]),
  alternates: {
    canonical: canonical("/features"),
    languages: { "en-JM": canonical("/features"), en: canonical("/features") },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    title: "Features — Jamaica Payroll & HR Software | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/features"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Jamaica Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const features = [
  {
    icon: <ScanFaceIcon className="size-6 stroke-1" />,
    title: "Automatic statutory deductions",
    description: "PAYE, NIS, NHT, and Education Tax calculated accurately for every employee, every pay cycle. Rates and thresholds updated automatically when the Ministry of Finance announces changes.",
  },
  {
    icon: <SquarePenIcon className="size-6 stroke-1" />,
    title: "Payslips and statutory reports",
    description: "Professional, branded payslips generated for every employee. Export P24, SO1, and remittance reports ready for TAJ and MOF submission.",
  },
  {
    icon: <MonitorSmartphoneIcon className="size-6 stroke-1" />,
    title: "Employee self-service portal",
    description: "Staff access payslips, leave balances, and personal information securely from any device. Reduce HR admin time spent answering pay queries.",
  },
  {
    icon: <BlocksIcon className="size-6 stroke-1" />,
    title: "Leave and benefits management",
    description: "Track vacation, sick leave, maternity/paternity leave, and custom leave types. Configurable accrual policies with automatic balance tracking.",
  },
  {
    icon: <FastForwardIcon className="size-6 stroke-1" />,
    title: "Bank-ready payment files",
    description: "Export payment files compatible with NCB, JN, Scotiabank, Sagicor Bank, and FirstCaribbean. One-click batch payment preparation.",
  },
  {
    icon: <EclipseIcon className="size-6 stroke-1" />,
    title: "Security and compliance",
    description: "TLS encryption in transit, encrypted storage at rest, role-based access controls, and full audit trails. Designed for Jamaica's data requirements.",
  },
  {
    icon: <LanguagesIcon className="size-6 stroke-1" />,
    title: "Multi-branch and multi-department",
    description: "Manage payroll across multiple locations, branches, departments, and cost centres from a single account. Consolidated reports available.",
  },
  {
    icon: <RocketIcon className="size-6 stroke-1" />,
    title: "Fast setup and migration",
    description: "Import employees and salary structures from Excel or CSV. Guided onboarding with our team gets you from spreadsheets to automated payroll quickly.",
  },
  {
    icon: <FileTextIcon className="size-6 stroke-1" />,
    title: "Salary components and allowances",
    description: "Configure overtime, allowances, loans, deductions, and bonuses as salary components. Apply per employee or across salary structures.",
  },
  {
    icon: <ShieldCheckIcon className="size-6 stroke-1" />,
    title: "Audit-ready exports",
    description: "Every payroll run is logged. Export historical records, audit trails, and statutory filings in formats accepted by TAJ for compliance reviews.",
  },
  {
    icon: <BarChart3Icon className="size-6 stroke-1" />,
    title: "Payroll analytics and summaries",
    description: "Monthly payroll cost summaries, statutory contribution breakdowns, and expense trend reports. Clear visibility into your total workforce cost.",
  },
  {
    icon: <UsersIcon className="size-6 stroke-1" />,
    title: "Multi-user access control",
    description: "Set role-based permissions for HR managers, accountants, and executives. Limit what each team member can view or edit.",
  },
  {
    icon: <ClockIcon className="size-6 stroke-1" />,
    title: "Flexible pay frequencies",
    description: "Run monthly, fortnightly, or weekly payroll. Mix pay schedules across employee groups. Supports all common Jamaican pay cycle patterns.",
  },
  {
    icon: <DatabaseIcon className="size-6 stroke-1" />,
    title: "HR document storage",
    description: "Store employment contracts, NIS cards, tax exemption letters, and other HR documents alongside employee records for easy retrieval.",
  },
  {
    icon: <BellIcon className="size-6 stroke-1" />,
    title: "Reminders and notifications",
    description: "Never miss a statutory deadline. Automatic reminders for NIS/NHT/PAYE filing dates, upcoming payroll runs, and contract renewals.",
  },
  {
    icon: <GitBranchIcon className="size-6 stroke-1" />,
    title: "Integrations",
    description: "Connect with accounting software, time-tracking systems, and HR tools. Export data in standard formats for seamless workflow integration.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Everything Jamaican payroll needs. Built in.
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              From automated PAYE calculations to bank-ready payment files — Payroll Jamaica covers every step of your payroll workflow, built specifically for Jamaica&apos;s statutory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </a>
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Try the Calculator
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 border border-border rounded-xl">
                  <div className="text-foreground">{feature.icon}</div>
                  <h2 className="font-semibold text-lg">{feature.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance section */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold">Built for Jamaica&apos;s compliance requirements</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Payroll Jamaica is the only payroll software built exclusively for Jamaican businesses. We track PAYE thresholds, NIS ceilings, NHT rates, and Education Tax rules — so you don&apos;t have to. Every statutory calculation is updated when the Ministry of Finance announces rate changes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 text-left">
              {[
                { label: "PAYE", desc: "Income tax withheld at source" },
                { label: "NIS", desc: "National Insurance Scheme (3%)" },
                { label: "NHT", desc: "National Housing Trust (2% employee)" },
                { label: "Education Tax", desc: "Funds public education (2.25%)" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="font-semibold text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What makes Payroll Jamaica different from generic payroll software?</h2>
              <p>
                Most payroll software is built for the UK, US, or Canada and requires manual configuration of Jamaican tax rules. Payroll Jamaica is built exclusively for Jamaica — PAYE thresholds, NIS ceilings, NHT rates, and Education Tax are all pre-configured and updated automatically. No spreadsheet workarounds required.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Does Payroll Jamaica support all pay frequencies?</h2>
              <p>
                Yes. You can run monthly, fortnightly, or weekly payroll. If you have different employee groups on different schedules, that is fully supported. The statutory calculations automatically prorate based on the pay frequency selected.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How do statutory rate updates work?</h2>
              <p>
                When the Ministry of Finance announces changes to PAYE thresholds, NIS contribution ceilings, or other statutory rates, Payroll Jamaica updates the system. You are notified and your next payroll run uses the new rates automatically. No manual updates or formula changes needed.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA
        headline="See Payroll Jamaica in action"
        text="Automate PAYE, NIS, NHT and Education Tax calculations for your Jamaican business."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Features", item: `${siteConfig.url}/features` },
            ],
          }),
        }}
      />
      {/* JSON-LD: FAQPage for SEO content questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes Payroll Jamaica different from generic payroll software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most payroll software is built for the UK, US, or Canada and requires manual configuration of Jamaican tax rules. Payroll Jamaica is built exclusively for Jamaica — PAYE thresholds, NIS ceilings, NHT rates, and Education Tax are all pre-configured and updated automatically. No spreadsheet workarounds required.",
                },
              },
              {
                "@type": "Question",
                name: "Does Payroll Jamaica support all pay frequencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can run monthly, fortnightly, or weekly payroll. If you have different employee groups on different schedules, that is fully supported. The statutory calculations automatically prorate based on the pay frequency selected.",
                },
              },
              {
                "@type": "Question",
                name: "How do statutory rate updates work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When the Ministry of Finance announces changes to PAYE thresholds, NIS contribution ceilings, or other statutory rates, Payroll Jamaica updates the system. You are notified and your next payroll run uses the new rates automatically. No manual updates or formula changes needed.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: siteConfig.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `${siteConfig.url}/features`,
            description: baseDescription,
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "3500",
              highPrice: "7500",
              priceCurrency: "JMD",
              offerCount: 3,
            },
            featureList: features.map((f) => f.title).join(", "),
          }),
        }}
      />
    </div>
  );
}
