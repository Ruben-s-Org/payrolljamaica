import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Looking for payroll software in Jamaica? Payroll Jamaica is the leading payroll software built specifically for Jamaican businesses. Automate PAYE, NIS, NHT, and Education Tax calculations, generate compliant payslips, and manage your entire payroll in minutes — not hours. Trusted by Jamaican businesses from Kingston to Montego Bay.";

export const metadata: Metadata = {
  title: "Payroll Software Jamaica — #1 HR & Payroll Software",
  description: ensureMinDescription(
    "The #1 payroll software for Jamaica. Automate PAYE, NIS, NHT & Education Tax. Generate compliant payslips and statutory reports — built for Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll software Jamaica",
    "best payroll software Jamaica",
    "payroll software for Jamaican businesses",
    "Jamaica payroll software",
    "PAYE software Jamaica",
    "NIS NHT payroll software Jamaica",
    "online payroll software Jamaica",
    "cloud payroll software Jamaica",
    "small business payroll software Jamaica",
    "HR software Jamaica",
    "payroll system Jamaica",
    "payroll application Jamaica",
    "statutory deductions software Jamaica",
    "payslip software Jamaica",
    "automated payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-software-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-software-jamaica"),
      en: canonical("/payroll-software-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Software Jamaica — Automate PAYE, NIS, NHT",
    description: baseDescription,
    url: canonical("/payroll-software-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Software Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function PayrollSoftwareJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica — not adapted from a generic template
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll software that actually works for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The only payroll software built from scratch for Jamaica&apos;s PAYE, NIS, NHT, and Education Tax rules. Run accurate payroll in minutes — not hours — with zero manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
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
              { stat: "100%", label: "Jamaica-specific tax rules" },
              { stat: "2026", label: "Tax year rates included" },
              { stat: "5 min", label: "Average payroll run time" },
              { stat: "0", label: "Manual PAYE calculations needed" },
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
              Everything Jamaica payroll software should do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Automatic PAYE calculation",
                  desc: "Income tax computed using TAJ rates and thresholds for every employee. The 2026 tax year rates are pre-loaded — no manual entry required.",
                },
                {
                  title: "NIS, NHT & Education Tax",
                  desc: "All three statutory contributions calculated and split between employer and employee portions. Rates updated when the Ministry of Finance changes them.",
                },
                {
                  title: "Compliant payslips",
                  desc: "Professional payslips showing gross pay, all deductions, and net pay — formatted to meet Jamaican employer requirements. Employees access them through a self-service portal.",
                },
                {
                  title: "Statutory filing reports",
                  desc: "SO1, P24, and remittance schedules generated in TAJ-accepted formats. No spreadsheet wrangling before your monthly filings.",
                },
                {
                  title: "Bank payment files",
                  desc: "Export payroll payment files for NCB, JN Bank, Scotiabank, Sagicor Bank, and FirstCaribbean. Pay all employees in one batch upload.",
                },
                {
                  title: "Leave & HR management",
                  desc: "Track vacation, sick leave, and statutory leave against company policy. Payroll integrates leave balances automatically into each pay run.",
                },
                {
                  title: "Multi-employee support",
                  desc: "From 1 employee to 500+. Add employees, manage roles, set pay frequencies, and run payroll for your whole team in a single workflow.",
                },
                {
                  title: "Audit trail & history",
                  desc: "Every payroll run is logged with timestamps. Export historical records in formats accepted by TAJ for audits and compliance reviews.",
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

        {/* Comparison */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Why Payroll Jamaica beats generic payroll software
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Generic software makes you do the Jamaica work",
                  desc: "Sage, QuickBooks, and other generic payroll tools require you to manually configure Jamaican tax brackets, NIS rates, NHT contribution schedules, and Education Tax rates. When rates change, you update them. When you make an error, your employees get incorrect payslips.",
                },
                {
                  title: "Payroll Jamaica handles Jamaica compliance automatically",
                  desc: "Every Jamaica-specific rule is built into the platform. PAYE brackets, NIS contribution ceilings, NHT rates, Education Tax thresholds — all pre-configured and automatically updated when the Ministry of Finance announces changes.",
                },
                {
                  title: "Local support that understands Jamaica payroll",
                  desc: "When you call Sage or QuickBooks about a Jamaica payroll question, you get a general support agent reading from a script. With Payroll Jamaica, you get support that understands TAJ, the NIS Act, and NHT regulations.",
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
              Payroll software for every Jamaica business type
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Hotels & tourism",
                "Retail & wholesale",
                "Construction",
                "Healthcare",
                "Professional services",
                "Manufacturing",
                "Restaurants & food service",
                "Education & training",
                "Non-profits & NGOs",
              ].map((industry, i) => (
                <div
                  key={i}
                  className="p-4 border border-border rounded-lg text-sm font-medium text-center"
                >
                  {industry}
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
                What is payroll software and do I need it in Jamaica?
              </h2>
              <p>
                Payroll software automates the calculation of employee wages and statutory deductions. In Jamaica, every employer must deduct PAYE (income tax), NIS (National Insurance Scheme contributions), NHT (National Housing Trust contributions), and Education Tax from employee wages and remit these to Tax Administration Jamaica (TAJ) on a monthly schedule. Payroll software eliminates manual calculation errors and ensures your filings are accurate and on time.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How does Payroll Jamaica calculate PAYE in 2026?
              </h2>
              <p>
                Payroll Jamaica uses the official TAJ PAYE tables and the current income tax threshold (J$1,500,096 for 2026) to calculate PAYE for each employee. Income above the threshold is taxed at 25%, with income above J$6,000,000 taxed at 30%. The software handles statutory deductions (NIS, NHT) before calculating taxable income, matching the correct TAJ methodology. Rates are updated in the system when the Ministry of Finance announces changes.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Is Payroll Jamaica software cloud-based?
              </h2>
              <p>
                Yes. Payroll Jamaica is fully cloud-based — access it from any device, anywhere in Jamaica or internationally. Your data is securely stored and backed up. No software installation required. Employees access their payslips through a self-service portal without needing to contact HR.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How much does payroll software cost in Jamaica?
              </h2>
              <p>
                Payroll Jamaica is priced for Jamaican business realities — from small businesses with a handful of staff to larger enterprises. Pricing is based on employee count, not features, so you get full access to all Jamaica payroll functionality at every tier. View current pricing on our{" "}
                <Link href="/#pricing" className="text-foreground underline underline-offset-2">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Ready to run Jamaica payroll properly?
            </h2>
            <p className="text-muted-foreground">
              Join Jamaican businesses running accurate, compliant payroll with Payroll Jamaica.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get started free
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="The payroll software built for Jamaica"
        text="Automate PAYE, NIS, NHT, and Education Tax. Start your free trial today."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: canonical("/payroll-software-jamaica"),
            description:
              "Payroll software built for Jamaica. Automates PAYE, NIS, NHT, and Education Tax calculations for Jamaican businesses.",
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
                name: "Payroll Software Jamaica",
                item: canonical("/payroll-software-jamaica"),
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
                name: "What is payroll software and do I need it in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll software automates the calculation of employee wages and statutory deductions. In Jamaica, every employer must deduct PAYE, NIS, NHT, and Education Tax. Payroll software eliminates manual calculation errors and ensures accurate, on-time TAJ filings.",
                },
              },
              {
                "@type": "Question",
                name: "How does Payroll Jamaica calculate PAYE in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll Jamaica uses the official TAJ PAYE tables and current tax thresholds. Income above J$1,500,096 is taxed at 25%, with income above J$6,000,000 taxed at 30%. Rates are automatically updated when the Ministry of Finance announces changes.",
                },
              },
              {
                "@type": "Question",
                name: "Is Payroll Jamaica cloud-based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Payroll Jamaica is fully cloud-based — access it from any device. No software installation required. Employees access payslips through a self-service portal.",
                },
              },
              {
                "@type": "Question",
                name: "How much does payroll software cost in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll Jamaica is priced for Jamaican business realities — from small businesses with a handful of staff to larger enterprises. Pricing is based on employee count, not features, so you get full access to all Jamaica payroll functionality at every tier.",
                },
              },
              {
                "@type": "Question",
                name: "What statutory deductions does Payroll Jamaica handle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll Jamaica automatically calculates and manages all Jamaican statutory deductions: PAYE (income tax using the J$1,500,096 annual threshold), NIS (National Insurance Scheme), NHT (National Housing Trust), and Education Tax. Employer and employee portions are split correctly, and rates are updated when the Ministry of Finance announces changes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the PAYE threshold in Jamaica for 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The PAYE income tax threshold in Jamaica for 2026 is J$1,500,096 per year (J$125,008 per month). Employees earning below this amount pay zero PAYE. Payroll Jamaica applies this threshold automatically when calculating payroll.",
                },
              },
              {
                "@type": "Question",
                name: "When is the SO1 return deadline in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SO1 (Annual PAYE Employer Return) deadline in Jamaica is March 31 every year. Payroll Jamaica generates SO1-ready data exports so employers can file on time with Tax Administration Jamaica (TAJ).",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
