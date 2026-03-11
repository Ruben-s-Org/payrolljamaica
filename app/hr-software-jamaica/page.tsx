import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Payroll Jamaica provides HR software built for Jamaica — combining payroll automation, leave management, employee records, and statutory compliance in one platform. Manage your team, process payroll, and stay compliant with PAYE, NIS, NHT, and Education Tax requirements — all from one Jamaica-first HR system.";

export const metadata: Metadata = {
  title: "HR Software Jamaica — Human Resources Software for Jamaican Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "Jamaica HR software that combines payroll automation, leave management, employee records, and PAYE/NIS/NHT compliance. Built for Jamaican businesses — not adapted from a foreign HR system.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "HR software Jamaica",
    "human resources software Jamaica",
    "HR system Jamaica",
    "HRIS Jamaica",
    "HR management software Jamaica",
    "HR platform Jamaica",
    "payroll HR software Jamaica",
    "employee management software Jamaica",
    "leave management software Jamaica",
    "HR payroll Jamaica",
    "small business HR software Jamaica",
    "cloud HR software Jamaica",
    "HR and payroll Jamaica",
    "workforce management Jamaica",
    "HR technology Jamaica",
  ]),
  alternates: {
    canonical: canonical("/hr-software-jamaica"),
    languages: {
      "en-JM": canonical("/hr-software-jamaica"),
      en: canonical("/hr-software-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "HR Software Jamaica — Payroll & HR for Jamaican Businesses | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/hr-software-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "HR Software Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function HRSoftwareJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Jamaica-first HR — not a foreign system configured for Jamaica
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              HR software designed for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Manage your team, run payroll, track leave, and stay compliant with Jamaica&apos;s statutory requirements — all from one platform built around Jamaican HR and employment law.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* Core HR modules */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">
              HR software modules built for Jamaica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Payroll automation",
                  desc: "Automated PAYE, NIS, NHT, and Education Tax calculations using current TAJ rates. Run payroll in under 5 minutes with zero manual calculations. Bank files for NCB, JN, Scotiabank, Sagicor, and FirstCaribbean.",
                },
                {
                  title: "Employee records",
                  desc: "Centralized employee profiles with personal details, employment history, compensation records, and document storage. Role-based access controls who can see what.",
                },
                {
                  title: "Leave management",
                  desc: "Track vacation, sick leave, compassionate leave, and other leave types against Jamaica's Employment (Termination and Redundancy Payments) Act requirements. Enforce company leave policies automatically.",
                },
                {
                  title: "Payslips & self-service",
                  desc: "Professional payslips generated every pay cycle. Employees access their own payslips, leave balances, and employment documents through a self-service portal — no HR admin required.",
                },
                {
                  title: "Statutory reporting",
                  desc: "SO1, P24, NIS schedules, NHT remittance reports, and Education Tax filings — all generated in TAJ and Ministry-accepted formats. Deadline reminders so you never miss a filing.",
                },
                {
                  title: "Onboarding & offboarding",
                  desc: "Structured onboarding workflows to capture new employee information, set up statutory registrations, and configure payroll deductions from day one.",
                },
                {
                  title: "Multi-department management",
                  desc: "Organize employees by department, cost centre, or work location. Payroll reporting broken down by department for management accounts and labour cost analysis.",
                },
                {
                  title: "Audit trail",
                  desc: "Every HR action and payroll change is logged with timestamp and user. Complete audit history for TAJ compliance reviews and internal governance.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-xl space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jamaica compliance section */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              HR compliance built around Jamaica&apos;s employment laws
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Employment (Termination and Redundancy Payments) Act",
                  desc: "Redundancy payment calculations using the official formula. Leave entitlements tracked against statutory minimums. The system flags when employment actions may trigger statutory obligations.",
                },
                {
                  title: "Minimum Wage Orders",
                  desc: "Payroll Jamaica can flag when employee wage rates fall below the current National Minimum Wage (J$13,000/week as at 2026). Automatic rate-check on every payroll run.",
                },
                {
                  title: "Maternity Leave compliance",
                  desc: "Track maternity leave entitlements under Jamaican law (8 weeks minimum). Payroll handles the correct statutory pay calculations for maternity periods.",
                },
                {
                  title: "TAJ & NIS registration support",
                  desc: "Guidance on new employee statutory registrations with Tax Administration Jamaica and the National Insurance Scheme. Deadline reminders for quarterly and annual statutory filings.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              HR software for every Jamaican industry
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  industry: "Tourism & hospitality",
                  desc: "Handle seasonal hiring, variable hours, gratuity, and NIS requirements for Jamaica's largest employer sector.",
                  link: "/industries/hospitality",
                },
                {
                  industry: "Retail & wholesale",
                  desc: "Multi-location HR, shift management, commission tracking, and payroll for retail teams across Jamaica.",
                  link: "/industries/retail",
                },
                {
                  industry: "Construction",
                  desc: "Project-based workforce management, trade-specific NIS classifications, and overtime calculations for construction companies.",
                  link: "/industries/construction",
                },
                {
                  industry: "Healthcare",
                  desc: "Clinical staff records, shift scheduling integration, and PAYE compliance for private healthcare providers.",
                  link: "/industries/healthcare",
                },
                {
                  industry: "Professional services",
                  desc: "Clean, efficient HR and payroll for accounting, legal, architecture, and consulting firms across Jamaica.",
                  link: null,
                },
                {
                  industry: "Education & NGOs",
                  desc: "Staff records, leave management, and payroll compliance for schools, charities, and non-profit organisations.",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-border rounded-xl space-y-2">
                  <h3 className="font-semibold">{item.industry}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-xs text-foreground underline underline-offset-2"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is HR software and why does it matter for Jamaican businesses?
              </h2>
              <p>
                HR software (Human Resources software) manages employee information, payroll, leave, compliance, and reporting in a centralized platform. For Jamaican businesses, HR software must handle the specific requirements of Jamaica&apos;s employment environment — PAYE tax calculations, NIS and NHT contribution management, statutory leave entitlements under Jamaican law, and TAJ filing formats. Generic HR software from the UK or USA requires significant manual configuration to work correctly for Jamaica; Payroll Jamaica is built from the ground up for Jamaican requirements.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is the difference between HR software and payroll software in Jamaica?
              </h2>
              <p>
                Payroll software focuses specifically on calculating wages, deductions, and generating payslips and statutory remittance reports. HR software is broader — it includes payroll plus employee records management, onboarding, leave tracking, performance management, and other workforce tools. Payroll Jamaica combines HR and payroll into one platform, so you manage your entire people function without needing separate systems that must be integrated.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Does HR software in Jamaica need to comply with specific local laws?
              </h2>
              <p>
                Yes. HR software used in Jamaica must comply with the Income Tax Act (PAYE), the National Insurance Scheme Act, the National Housing Trust Act, the Education Tax Act, the Employment (Termination and Redundancy Payments) Act, and Minimum Wage Orders issued by the Ministry of Labour. Payroll Jamaica is built around these requirements — rate changes and new legislative requirements are incorporated automatically so your HR team does not need to track regulatory updates manually.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Is Payroll Jamaica HR software cloud-based?
              </h2>
              <p>
                Yes. Payroll Jamaica is a cloud-based HR and payroll platform — access it from your office, home, or anywhere in Jamaica. No software installation required. Multi-user access with role-based permissions allows your HR team, payroll team, and management to access the information they need. All data is securely stored and backed up automatically.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              HR software that works for Jamaica
            </h2>
            <p className="text-muted-foreground">
              Payroll, leave, compliance, and employee management — in one Jamaica-first platform.
            </p>
            <a
              href="#"
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
        headline="Jamaica HR software — built local"
        text="Payroll, leave, and compliance in one platform designed for Jamaican businesses."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica HR Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: canonical("/hr-software-jamaica"),
            description:
              "HR and payroll software built for Jamaica. Combines employee management, leave tracking, payroll automation, and PAYE/NIS/NHT compliance in one platform.",
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "JMD",
              availability: "https://schema.org/InStock",
            },
            areaServed: { "@type": "Country", name: "Jamaica" },
            featureList: [
              "Payroll automation",
              "PAYE calculation",
              "NIS NHT Education Tax",
              "Leave management",
              "Employee records",
              "Payslip generation",
              "Statutory filing reports",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "HR Software Jamaica",
                item: canonical("/hr-software-jamaica"),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is HR software and why does it matter for Jamaican businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HR software manages employee information, payroll, leave, compliance, and reporting. For Jamaican businesses, it must handle PAYE, NIS, NHT contributions, statutory leave under Jamaican law, and TAJ filing formats. Payroll Jamaica is built from the ground up for Jamaica's specific requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Does HR software in Jamaica need to comply with local laws?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. HR software in Jamaica must comply with the Income Tax Act (PAYE), NIS Act, NHT Act, Education Tax Act, Employment (Termination and Redundancy Payments) Act, and Minimum Wage Orders. Payroll Jamaica incorporates all these requirements automatically.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
