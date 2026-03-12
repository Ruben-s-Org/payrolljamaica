import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll outsourcing in Jamaica — let Payroll Jamaica manage your entire payroll process. We handle PAYE calculations, NIS, NHT, and Education Tax deductions, payslip generation, and TAJ statutory remittances. Your team focuses on the business; we handle the compliance.";

export const metadata: Metadata = {
  title: "Payroll Outsourcing Jamaica — Managed Payroll Services | Payroll Jamaica",
  description: ensureMinDescription(
    "Outsource your Jamaica payroll to the experts. Payroll Jamaica handles PAYE, NIS, NHT, Education Tax, payslips, and TAJ filings for your business every pay cycle. Accurate, compliant, stress-free payroll outsourcing in Jamaica.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "payroll outsourcing Jamaica",
    "outsource payroll Jamaica",
    "managed payroll Jamaica",
    "payroll managed service Jamaica",
    "payroll bureau Jamaica",
    "outsourced payroll service Jamaica",
    "payroll processing Jamaica",
    "payroll administration Jamaica",
    "payroll outsourcing company Jamaica",
    "PAYE outsourcing Jamaica",
    "payroll services Jamaica",
    "small business payroll outsourcing Jamaica",
    "payroll company Jamaica",
    "HR outsourcing Jamaica",
    "statutory compliance Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-outsourcing-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-outsourcing-jamaica"),
      en: canonical("/payroll-outsourcing-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Outsourcing Jamaica — Managed Payroll Services | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-outsourcing-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Outsourcing Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Outsourcing Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function PayrollOutsourcingJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Fully managed payroll — we run it, you approve it
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll outsourcing for Jamaican businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Stop spending 5–10 hours a month on payroll admin. Payroll Jamaica takes over your
              entire payroll process — calculations, payslips, TAJ remittances, and compliance — every pay cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Outsource my payroll
              </a>
              <Link
                href="/payroll-services"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                See all services
              </Link>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">
              Everything included in managed payroll
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "PAYE, NIS, NHT & Education Tax",
                  desc: "We calculate every statutory deduction to the cent — using current Ministry of Finance rates automatically updated throughout the year. No manual lookups, no rate errors.",
                },
                {
                  title: "Payslip generation every cycle",
                  desc: "Professional, TAJ-compliant payslips generated automatically for each employee every pay cycle. Distributed to employees digitally or provided as a printable file.",
                },
                {
                  title: "TAJ remittance schedules",
                  desc: "We produce monthly remittance reports in the exact format TAJ requires. You review, approve, and submit — or we submit on your behalf.",
                },
                {
                  title: "SO1 and P24 annual filings",
                  desc: "Year-end statutory returns (SO1, P24) compiled and ready for submission before Tax Administration Jamaica deadlines. Never miss an annual filing again.",
                },
                {
                  title: "Bank payment files",
                  desc: "Bank-ready payment files for every payroll cycle. Compatible with NCB, Scotiabank, JN Bank, JMMB, and other Jamaican financial institutions.",
                },
                {
                  title: "Dedicated Jamaica payroll support",
                  desc: "Questions about NIS contribution changes, NHT remittance rules, or TAJ compliance? Our team knows Jamaica payroll law and gives you answers that actually apply.",
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

        {/* Why outsource */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-10">
            <h2 className="text-3xl font-semibold text-center">
              Why Jamaican businesses outsource payroll
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "No in-house payroll expertise needed",
                  a: "Jamaica's payroll compliance is complex — PAYE thresholds change, NIS ceilings adjust, and TAJ filing requirements evolve. Outsourcing means you never need to track regulation changes yourself.",
                },
                {
                  q: "Eliminate payroll errors and penalties",
                  a: "A single PAYE miscalculation can trigger TAJ penalties and employee disputes. Managed payroll removes human error from the equation — our system calculates correctly every time.",
                },
                {
                  q: "Focus on your core business",
                  a: "Payroll processing takes business owners and accountants 5–10 hours per month. Outsource it and redirect that time to revenue-generating activities.",
                },
                {
                  q: "Scalable as your team grows",
                  a: "Whether you hire 2 staff or 50, managed payroll scales with you. No retraining, no new software licences — the cost adjusts to your headcount.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-xl space-y-2">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl font-semibold text-center">How payroll outsourcing works</h2>
            <ol className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Onboarding (1–2 days)",
                  desc: "Share your employee list, pay structure, and statutory history. We configure your payroll profile and verify all employee deduction settings.",
                },
                {
                  step: "2",
                  title: "You submit attendance/changes",
                  desc: "Each pay cycle, submit hours worked, new hires, terminations, or special payments through our portal or by email. That's all we need from you.",
                },
                {
                  step: "3",
                  title: "We calculate and prepare",
                  desc: "Our system processes every employee's PAYE, NIS, NHT, and Education Tax. We prepare payslips, remittance schedules, and bank payment files.",
                },
                {
                  step: "4",
                  title: "You approve and pay",
                  desc: "Review the payroll summary, approve it, and release the bank payments. Our reports go straight to your bank and TAJ filing system.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ / SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is payroll outsourcing in Jamaica?
              </h2>
              <p>
                Payroll outsourcing in Jamaica means hiring a third-party payroll company to manage your entire payroll process on your behalf. This includes calculating PAYE income tax, NIS (National Insurance Scheme), NHT (National Housing Trust), and Education Tax deductions for each employee, generating payslips, preparing TAJ remittance schedules, and producing bank payment files every pay cycle. The alternative to outsourcing is running payroll in-house using payroll software — Payroll Jamaica offers both options depending on your business preference.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How much does payroll outsourcing cost in Jamaica?
              </h2>
              <p>
                Payroll outsourcing pricing in Jamaica typically depends on headcount and pay frequency. At Payroll Jamaica, managed payroll starts from <strong className="text-foreground">JMD $5,000/month</strong> for small businesses with up to 5 employees, with pricing scaling per additional employee. This covers all statutory calculations, payslip generation, remittance reports, and annual filings. Contact us for a quote based on your employee count and pay frequency (monthly, fortnightly, or weekly).
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Is it better to outsource payroll or use payroll software in Jamaica?
              </h2>
              <p>
                Both options are valid depending on your situation. <strong className="text-foreground">Payroll software</strong> is ideal if you have an accountant, HR manager, or business owner who has the time to run payroll each cycle and wants full control. It is more cost-effective for businesses with steady headcount. <strong className="text-foreground">Managed payroll outsourcing</strong> is better if you want to eliminate payroll admin entirely, have no internal HR capacity, or have complex payroll needs (project-based staff, seasonal workers, multiple pay grades). Payroll Jamaica offers both — you can start with software and add managed services later.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Does payroll outsourcing include TAJ filing in Jamaica?
              </h2>
              <p>
                Yes. Payroll Jamaica&apos;s managed payroll service includes producing all TAJ-required documents: monthly remittance schedules, SO1 annual returns, and P24 employer returns. We generate these in TAJ&apos;s required formats and provide them on deadline. For businesses that prefer full-service filing, we can submit on your behalf with a power of attorney arrangement.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Which industries in Jamaica benefit most from payroll outsourcing?
              </h2>
              <p>
                Payroll outsourcing is particularly valuable for Jamaica&apos;s hospitality industry (hotels, restaurants with seasonal and tip-based staff), construction companies (project-based workers, variable hours), professional services firms (accountants, lawyers, consultants who want to focus on billable work), retail and distribution businesses with multiple locations, and small businesses that cannot justify a full-time HR manager but need fully compliant payroll.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Ready to outsource your Jamaica payroll?
            </h2>
            <p className="text-muted-foreground">
              Tell us about your business. We&apos;ll set up managed payroll within 48 hours.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get a quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="Outsource your Jamaica payroll"
        text="We handle PAYE, NIS, NHT, Education Tax, payslips, and TAJ filings every pay cycle. You approve and pay."
      />
      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Payroll Outsourcing Jamaica",
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            description:
              "Managed payroll outsourcing service for Jamaican businesses. Handles PAYE, NIS, NHT, Education Tax, payslips, and TAJ statutory filings every pay cycle.",
            areaServed: { "@type": "Country", name: "Jamaica" },
            serviceType: "Managed Payroll Outsourcing",
            url: canonical("/payroll-outsourcing-jamaica"),
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is payroll outsourcing in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll outsourcing in Jamaica means hiring a third-party company to manage your entire payroll process, including PAYE, NIS, NHT, Education Tax calculations, payslip generation, TAJ remittance schedules, and bank payment files every pay cycle.",
                },
              },
              {
                "@type": "Question",
                name: "How much does payroll outsourcing cost in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Managed payroll outsourcing at Payroll Jamaica starts from JMD $5,000/month for up to 5 employees. Pricing scales per additional employee and covers all statutory calculations, payslips, remittance reports, and annual filings.",
                },
              },
              {
                "@type": "Question",
                name: "Does payroll outsourcing include TAJ filing in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Payroll Jamaica produces all TAJ-required documents including monthly remittance schedules, SO1 annual returns, and P24 employer returns in TAJ's required formats.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD: BreadcrumbList */}
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
                name: "Payroll Outsourcing Jamaica",
                item: canonical("/payroll-outsourcing-jamaica"),
              },
            ],
          }),
        }}
      />
    </div>
  );
}
