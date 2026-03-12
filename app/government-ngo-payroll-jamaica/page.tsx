import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll software built for Jamaica's government agencies, crown agencies, local authorities, and NGOs. Handle salary scales, grade steps, government pension tracking, grant-funded staff separation, MOFPS reporting formats, and TAJ statutory filings — all automated for Jamaica's public sector and non-profit organisations.";

export const metadata: Metadata = {
  title: "Government & NGO Payroll Jamaica — Public Sector & Non-Profit Payroll | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's public sector and NGOs. Automate salary scales, government pension contributions, grant-funded staff tracking, NHF for government employees, and MOFPS-compatible reporting — built for Jamaican civil service and non-profit payroll requirements.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "government payroll Jamaica",
    "NGO payroll Jamaica",
    "non-profit payroll Jamaica",
    "public sector payroll Jamaica",
    "civil service payroll Jamaica",
    "crown agency payroll Jamaica",
    "MOFPS payroll Jamaica",
    "local government payroll Jamaica",
    "KSAC payroll Jamaica",
    "grant-funded payroll Jamaica",
    "ministry payroll Jamaica",
    "statutory body payroll Jamaica",
    "HEART Trust payroll Jamaica",
    "donor-funded staff payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/government-ngo-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/government-ngo-payroll-jamaica"),
      en: canonical("/government-ngo-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Government & NGO Payroll Jamaica — Public Sector & Non-Profit Payroll | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/government-ngo-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Government NGO Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Government & NGO Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function GovernmentNgoPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica&apos;s public sector and civil society
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Jamaica&apos;s government agencies and NGOs
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Handle government salary scales, grade increments, pension contributions, grant-funded staff separation, and MOFPS-compatible reporting — all automated, all compliant with Jamaica&apos;s public sector payroll requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial
              </a>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Try the payroll calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Social proof numbers */}
        <section className="w-full px-4 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: "MOFPS", label: "Compliant reporting" },
              { stat: "Built-in", label: "Grant tracking" },
              { stat: "Ready", label: "Crown agency use" },
              { stat: "Approved", label: "Ministry format" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-border space-y-1">
                <div className="text-2xl font-bold">{item.stat}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">
              Public sector payroll features built for Jamaica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Grade and scale salary steps",
                  desc: "Configure the salary grade structures used across Jamaica's civil service and statutory bodies. Define pay scales with step increments, apply automatic grade progression, and maintain the full salary history required for government audit purposes.",
                },
                {
                  title: "Government pension tracking",
                  desc: "Calculate and track pension contributions for government employees under the Jamaica Public Service pension scheme. Separate pension-eligible earnings from non-pensionable allowances, and produce the pension fund remittance reports required by the relevant authority.",
                },
                {
                  title: "NHF contributions for government employees",
                  desc: "National Health Fund contributions are automatically calculated for all eligible public sector employees. The system applies the correct NHF surcharge rates and generates remittance schedules alongside PAYE, NIS, and NHT reports in a single payroll run.",
                },
                {
                  title: "Grant-funded staff separation",
                  desc: "Separate payroll costs for donor-funded and grant-funded positions from core establishment staff. Track funding source by employee, produce cost centre reports per grant, and ensure donor reporting requirements are met without manual spreadsheet work.",
                },
                {
                  title: "Contract versus permanent positions",
                  desc: "Manage the payroll distinction between established posts, contract positions, and temporary appointments. Each employment type applies the correct deduction schedule and generates the right statutory filings for TAJ.",
                },
                {
                  title: "Audit trail for public funds",
                  desc: "Every payroll run is logged with full timestamps, approvals, and change history. Export audit-ready reports in formats accepted by the Auditor General's Department and internal audit teams for transparency and accountability.",
                },
                {
                  title: "Statutory holiday compliance",
                  desc: "Public holidays in Jamaica are automatically flagged in the payroll calendar. Employees working on statutory holidays receive the correct premium pay as required under Jamaica's Holidays (Public General) Act, calculated without manual intervention.",
                },
                {
                  title: "MOFPS reporting format",
                  desc: "Generate payroll reports formatted for Ministry of Finance and Public Service (MOFPS) requirements. Salary cost summaries, establishment returns, and remittance schedules are produced in the formats expected by government financial systems.",
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

        {/* Jamaica context section */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Built for how Jamaica&apos;s public sector and civil society operates
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Local government bodies and municipal councils",
                  desc: "The Kingston and St. Andrew Corporation (KSAC), Portmore Municipal Corporation, and Jamaica's other parish councils operate complex payroll structures covering establishment staff, contract workers, and project-funded positions. Payroll Jamaica handles each category under the correct statutory framework with the audit trail local government finance officers require.",
                },
                {
                  title: "Crown agencies and statutory bodies",
                  desc: "Jamaica's statutory bodies — including HEART/NSTA Trust, the National Environment and Planning Agency, and the Urban Development Corporation — need payroll software that handles public sector salary scales, performance-related pay, and government pension schemes. Payroll Jamaica is configured for statutory body payroll from day one.",
                },
                {
                  title: "NGOs with donor-funded programmes",
                  desc: "Jamaican NGOs managing donor-funded social programmes from organisations like USAID, the Inter-American Development Bank, or local charitable foundations need to separate grant-funded staff payroll from core costs. Payroll Jamaica tracks funding sources by employee and produces the cost allocation reports donors require for programme reporting.",
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

        {/* Internal links */}
        <section className="w-full px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold text-center">Explore more of Payroll Jamaica</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Payroll Calculator", href: "/calculator" },
                { label: "Payroll Software Jamaica", href: "/payroll-software-jamaica" },
                { label: "All Features", href: "/features" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="p-4 border border-border rounded-lg text-sm font-medium text-center hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Can the software handle salary scales for government employees in Jamaica?
              </h2>
              <p>
                Yes. Payroll Jamaica supports the grade and scale structures used throughout Jamaica&apos;s civil service and statutory bodies. You can configure multiple salary scales, define step increments within each grade, and apply automatic progression rules. The system maintains a full history of each employee&apos;s grade and step, which is essential for government pension calculations and audit purposes. Changes to government salary scales announced by MOFPS can be updated across all affected employees in a single action.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How does Payroll Jamaica handle grant-funded positions?
              </h2>
              <p>
                Grant-funded and donor-funded positions are tracked separately using cost centre functionality. Each employee can be assigned to a specific funding source — whether a government subvention, a bilateral donor grant, or a project code — and payroll costs are allocated accordingly. You can produce cost reports by funding source at the end of each pay period, which simplifies the financial reporting required by donors and programme managers. When a grant ends, transitioning an employee from grant-funded to establishment is a single record update.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Does Payroll Jamaica produce MOFPS-compatible reports?
              </h2>
              <p>
                Yes. The reporting module includes formats designed to align with Ministry of Finance and Public Service requirements for salary cost submissions and establishment returns. PAYE remittance schedules, NIS and NHT reports, and pension contribution summaries are all produced in the formats required for government financial systems. If your organisation is subject to central government payroll audit, the audit trail functionality provides the timestamped, change-logged history that government auditors expect.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How do we handle contract versus permanent staff in the system?
              </h2>
              <p>
                Each employee record includes an employment type field — permanent establishment, fixed-term contract, casual, or temporary appointment. The system applies the correct statutory deduction schedules for each type. Permanent staff on government pension schemes have pension contributions calculated separately from contract staff who are not pension-eligible. When a contract employee is made permanent, the record update triggers the correct payroll and pension treatment from the next pay run.
              </p>
            </section>
          </div>
        </div>

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
              <Link href="/payroll-kingston-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Kingston
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Ready to modernise Jamaica public sector payroll?
            </h2>
            <p className="text-muted-foreground">
              Government agencies, crown bodies, and NGOs across Jamaica trust Payroll Jamaica for accurate, auditable payroll.
            </p>
            <a
              href="/calculator"
              data-open-fillout="true"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get started free
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="Government and NGO payroll built for Jamaica"
        text="Salary scales, grant tracking, MOFPS reports, and full TAJ compliance — automated."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica — Government & NGO",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: canonical("/government-ngo-payroll-jamaica"),
            description:
              "Payroll software for Jamaica's government agencies, crown bodies, local authorities, and NGOs. Automates salary scales, pension tracking, grant-funded staff separation, and MOFPS-compatible reporting.",
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
            applicationSubCategory: "Government Payroll",
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
                name: "Government & NGO Payroll Jamaica",
                item: canonical("/government-ngo-payroll-jamaica"),
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
                name: "Can the software handle salary scales for government employees in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Payroll Jamaica supports grade and scale structures used throughout Jamaica's civil service and statutory bodies, with step increments, automatic progression, and full grade history for pension calculations and audit.",
                },
              },
              {
                "@type": "Question",
                name: "How does Payroll Jamaica handle grant-funded positions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Grant-funded positions are tracked using cost centre functionality. Each employee is assigned to a funding source and payroll costs are allocated accordingly, with per-grant cost reports for donor financial reporting.",
                },
              },
              {
                "@type": "Question",
                name: "Does Payroll Jamaica produce MOFPS-compatible reports?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The reporting module includes MOFPS-aligned formats for salary cost submissions, establishment returns, and remittance schedules, plus a full audit trail for government financial system requirements.",
                },
              },
              {
                "@type": "Question",
                name: "How do we handle contract versus permanent staff in the system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each employee record includes an employment type field — permanent, fixed-term contract, casual, or temporary. The system applies the correct statutory deduction and pension treatment for each type automatically.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
