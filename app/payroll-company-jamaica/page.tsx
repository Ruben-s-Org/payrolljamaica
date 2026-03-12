import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Payroll Jamaica is Jamaica's leading payroll company — providing payroll software and managed payroll services to Jamaican businesses of every size. From Kingston to Montego Bay, we help employers automate PAYE, NIS, NHT, and Education Tax compliance. Choose a payroll company that actually understands Jamaica's statutory requirements.";

export const metadata: Metadata = {
  title: "Payroll Company Jamaica — Local Payroll Services & Software | Payroll Jamaica",
  description: ensureMinDescription(
    "Jamaica's #1 payroll company. Payroll Jamaica provides payroll software and managed payroll services with full PAYE, NIS, NHT, and Education Tax compliance built in. Serving Jamaican businesses from Kingston to Montego Bay.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll company Jamaica",
    "payroll companies Jamaica",
    "payroll company in Jamaica",
    "best payroll company Jamaica",
    "Jamaica payroll company",
    "payroll services company Jamaica",
    "payroll provider Jamaica",
    "payroll processing company Jamaica",
    "payroll outsourcing Jamaica",
    "managed payroll Jamaica",
    "payroll bureau Jamaica",
    "PAYE company Jamaica",
    "payroll administration Jamaica",
    "payroll management company Jamaica",
    "small business payroll company Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-company-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-company-jamaica"),
      en: canonical("/payroll-company-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Company Jamaica — Local Payroll Services | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-company-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Company Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Company Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function PayrollCompanyJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Jamaica&apos;s local payroll company — not a foreign platform
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              The payroll company built for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Payroll Jamaica is a payroll company that understands Jamaica&apos;s statutory obligations — PAYE, NIS, NHT, Education Tax, TAJ filings — and gives you a platform to run compliant payroll in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Talk to us
              </a>
              <Link
                href="/payroll-services"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                View our services
              </Link>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">
              What a Jamaica payroll company should provide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Statutory compliance — guaranteed",
                  desc: "PAYE, NIS, NHT, and Education Tax calculations that match TAJ requirements. Rates updated automatically when the Ministry of Finance announces changes. No manual rate entry, no compliance risk.",
                },
                {
                  title: "Payroll software you run yourself",
                  desc: "Self-service payroll platform. Run payroll in 5 minutes. Generate payslips, remittance reports, and bank files without waiting on an external team.",
                },
                {
                  title: "Managed payroll option",
                  desc: "Prefer to outsource completely? Our managed payroll service handles everything — calculation, payslips, remittances, and TAJ filings — on your behalf every pay cycle.",
                },
                {
                  title: "Employee self-service",
                  desc: "Employees access their own payslips and leave balances through a self-service portal. Reduce HR admin requests and give your team visibility into their pay.",
                },
                {
                  title: "Statutory filing support",
                  desc: "SO1, P24, and monthly remittance schedules generated in TAJ-accepted formats. Deadline reminders built in so you never miss a filing date.",
                },
                {
                  title: "Local knowledge, local support",
                  desc: "Our team understands Jamaica payroll regulations — the NIS Act, NHT Act, Income Tax Act, and Ministry of Labour rules. You get answers that actually apply to Jamaica.",
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

        {/* Who we serve */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Jamaican businesses we serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  type: "Small businesses (1–10 employees)",
                  desc: "Get the same statutory compliance as large companies without a full HR team. Affordable payroll starting from J$2,500/month.",
                },
                {
                  type: "Growing businesses (11–50 employees)",
                  desc: "Scale payroll without scaling your HR department. Multi-employee workflows, role-based access, and department reporting included.",
                },
                {
                  type: "Hotels & hospitality",
                  desc: "Manage seasonal staff, tip allocations, and gratuity pooling alongside standard PAYE and NIS requirements for Jamaica's largest industry.",
                },
                {
                  type: "Professional services",
                  desc: "Accountants, lawyers, architects, and consultants — streamline employee payroll so you focus on client work, not compliance admin.",
                },
                {
                  type: "Construction companies",
                  desc: "Handle project-based payroll, overtime calculations, and multi-site employee management with NIS construction industry considerations.",
                },
                {
                  type: "Retail & distribution",
                  desc: "Multi-location payroll with commission tracking and performance incentives alongside standard statutory deduction processing.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-border rounded-xl space-y-2">
                  <h3 className="font-semibold">{item.type}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
                What does a payroll company in Jamaica actually do?
              </h2>
              <p>
                A payroll company in Jamaica processes employee wages and ensures all statutory deductions are calculated correctly and remitted on time. This includes Pay As You Earn income tax (PAYE), National Insurance Scheme (NIS), National Housing Trust (NHT) contributions, and Education Tax. The payroll company generates payslips for employees, remittance schedules for TAJ, and handles the bank payment process. Some payroll companies offer full outsourcing where they manage the entire process; others (like Payroll Jamaica) provide software that gives your team the tools to run payroll internally with automation handling the compliance.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How do I choose the right payroll company in Jamaica?
              </h2>
              <p>
                When choosing a payroll company in Jamaica, look for: (1) Built specifically for Jamaica — not a generic platform adapted from another market. (2) Automatic rate updates — when the Ministry of Finance changes PAYE thresholds or NIS rates, the system updates without manual intervention. (3) TAJ-compliant reports — SO1, P24, and remittance schedules in the correct format. (4) Local support — a team that understands Jamaica payroll law, not a generic overseas helpdesk. (5) Transparent pricing in JMD with no hidden conversion fees.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Is Payroll Jamaica a local Jamaican company?
              </h2>
              <p>
                Yes. Payroll Jamaica is built for the Jamaican market and focused entirely on Jamaica&apos;s payroll and HR compliance environment. Our platform is designed around TAJ requirements, NIS regulations, NHT contribution rules, and the Jamaica Income Tax Act — not adapted from a UK or US payroll system. We serve businesses across Jamaica including Kingston, New Kingston, Portmore, Spanish Town, Montego Bay, Ocho Rios, and Mandeville.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is the difference between a payroll company and payroll software?
              </h2>
              <p>
                A payroll company can offer payroll software (a platform your team uses to run payroll), managed payroll (fully outsourced payroll processing), or both. Payroll Jamaica provides a self-service software platform that automates compliance — you run payroll yourself in minutes, without needing to outsource to an external operator. For businesses that prefer complete outsourcing, we also offer managed payroll services where our team processes your payroll each cycle.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Work with Jamaica&apos;s payroll company
            </h2>
            <p className="text-muted-foreground">
              Get compliant payroll software or managed payroll services built specifically for Jamaica.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get started
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="Jamaica's payroll company"
        text="PAYE, NIS, NHT, and Education Tax — handled. Start your free trial or talk to our team."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            description:
              "Payroll company in Jamaica providing payroll software and managed payroll services. Automates PAYE, NIS, NHT, and Education Tax for Jamaican businesses.",
            areaServed: [
              { "@type": "City", name: "Kingston" },
              { "@type": "City", name: "Montego Bay" },
              { "@type": "City", name: "Portmore" },
              { "@type": "City", name: "Spanish Town" },
              { "@type": "City", name: "Ocho Rios" },
              { "@type": "Country", name: "Jamaica" },
            ],
            serviceType: ["Payroll Software", "Managed Payroll Services", "HR Software"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "Payroll Company Jamaica",
                item: canonical("/payroll-company-jamaica"),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does a payroll company in Jamaica actually do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A payroll company in Jamaica processes employee wages and ensures all statutory deductions (PAYE, NIS, NHT, Education Tax) are calculated correctly and remitted on time. They generate payslips, remittance schedules for TAJ, and handle bank payment files.",
                },
              },
              {
                "@type": "Question",
                name: "Is Payroll Jamaica a local Jamaican company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Payroll Jamaica is built for the Jamaican market, designed around TAJ requirements, NIS regulations, NHT contribution rules, and the Jamaica Income Tax Act. We serve businesses across Kingston, Montego Bay, Portmore, Spanish Town, and throughout Jamaica.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
