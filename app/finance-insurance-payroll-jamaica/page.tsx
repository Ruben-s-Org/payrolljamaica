import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Payroll for Jamaica's finance and insurance sector — Payroll Jamaica automates PAYE, NIS, NHT, and Education Tax for banks, credit unions, insurance companies, and financial services firms. Built for the compliance demands of Jamaica's regulated financial industry. Trusted by Kingston's New Kingston financial district and Jamaica's credit union network.";

export const metadata: Metadata = {
  title: "Finance & Insurance Payroll Jamaica — Payroll Software for Banks & Credit Unions | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's finance and insurance industry. Banks, credit unions, insurance brokers, and financial services firms trust Payroll Jamaica for compliant PAYE, NIS, NHT, and Education Tax automation.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "finance payroll Jamaica",
    "insurance payroll Jamaica",
    "bank payroll Jamaica",
    "credit union payroll Jamaica",
    "financial services payroll Jamaica",
    "payroll for banks Jamaica",
    "payroll NCB employees Jamaica",
    "Scotiabank payroll Jamaica",
    "insurance company payroll Jamaica",
    "PAYE finance sector Jamaica",
    "NHT NIS financial services Jamaica",
    "payroll software financial sector Jamaica",
    "Jamaica financial industry payroll",
    "investment firm payroll Jamaica",
    "payroll broker Jamaica",
  ]),
  alternates: {
    canonical: canonical("/finance-insurance-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/finance-insurance-payroll-jamaica"),
      en: canonical("/finance-insurance-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Finance & Insurance Payroll Jamaica — Banks, Credit Unions & Insurers | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/finance-insurance-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Finance Insurance Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Insurance Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const financePainPoints = [
  {
    problem: "Commission and bonus payroll complexity",
    solution:
      "Jamaica's financial sector relies heavily on commission-based pay for sales agents, brokers, and advisors. Payroll Jamaica handles variable commission structures, performance bonuses, and applies correct PAYE on each pay type.",
  },
  {
    problem: "Statutory deductions for high-earning finance staff",
    solution:
      "Senior bank and insurance employees with salaries above the NHT ceiling require special handling. Payroll Jamaica applies the correct NHT cap, PAYE bands, and statutory ceilings automatically — no manual overrides needed.",
  },
  {
    problem: "Audit trail requirements for regulated entities",
    solution:
      "Banks, credit unions, and insurers face BOJ and FSC compliance requirements. Payroll Jamaica maintains a full audit trail of every payroll run — who approved it, what changed, and every statutory submission record.",
  },
  {
    problem: "Multiple branches across Jamaica",
    solution:
      "Jamaica's financial institutions operate from Kingston to Montego Bay. Payroll Jamaica consolidates payroll across all branches in one account — with cost-centre reporting by branch, region, or department.",
  },
];

const financeFeatures = [
  {
    title: "Commission & bonus payroll",
    desc: "Handle variable pay structures common in Jamaica's financial sector — monthly commission, quarterly bonuses, profit-sharing, and incentive pay. Correct PAYE applied on every payment type.",
  },
  {
    title: "NHT ceiling management",
    desc: "Automatically apply the correct NHT contribution ceiling for high-earning finance professionals. Payroll Jamaica caps contributions correctly and carries excess forward — no over-deductions.",
  },
  {
    title: "Audit-ready payroll records",
    desc: "Full payroll history with approver records, amendment logs, and statutory submission confirmations. Meets the documentation standards expected by BOJ, FSC, and external auditors.",
  },
  {
    title: "Multi-branch consolidation",
    desc: "Run payroll for Kingston, Montego Bay, and all island branches from one account. Consolidated statutory reports for TAJ, NIS, and NHT — or broken out by branch.",
  },
  {
    title: "TD4 and statutory reports",
    desc: "Generate employee TD4s, monthly PAYE summaries, NIS Schedule 7, NHT employer returns, and Education Tax reports with one click.",
  },
  {
    title: "Bank file export",
    desc: "Generate salary transfer files in NCB, Scotiabank, CIBC FirstCaribbean, and Sagicor Bank formats. Straight-through processing — no manual entry per employee.",
  },
];

const financeSubsectors = [
  { name: "Commercial Banks", desc: "NCB, Scotiabank, CIBC FirstCaribbean, Sagicor Bank, and Jamaica National Bank payroll" },
  { name: "Credit Unions", desc: "Teachers' Credit Union, Jamaica Teachers' Association Credit Union, and Jamaica's 30+ credit unions" },
  { name: "Insurance Companies", desc: "Sagicor Life, Guardian Life, Advantage General, and Jamaica's insurance broker network" },
  { name: "Investment Firms", desc: "NCB Capital Markets, Barita Investments, Proven Investments, and Jamaica's brokerage houses" },
  { name: "Cambios & Remittances", desc: "Foreign exchange bureaus, Western Union agents, and remittance service providers" },
  { name: "Microfinance & Lending", desc: "JN Money, JMMB, and Jamaica's growing micro-lending and MSME finance sector" },
];

const financeFaqs = [
  {
    q: "How does Payroll Jamaica handle commission-based pay for financial advisors?",
    a: "Payroll Jamaica supports variable pay components. You can set up commission as a recurring or one-time earning category. The system applies the correct PAYE tax treatment — commissions are generally taxable as employment income under Jamaica's Income Tax Act.",
  },
  {
    q: "Can Payroll Jamaica generate audit-trail records for BOJ or FSC compliance?",
    a: "Yes. Payroll Jamaica maintains a complete log of every payroll run — who initiated it, what changes were made, approval timestamps, and statutory filing records. Export payroll records for audit purposes at any time.",
  },
  {
    q: "How do you handle the NHT cap for high-earning bank employees?",
    a: "Jamaica's NHT contribution is capped at a statutory ceiling. Payroll Jamaica automatically applies this ceiling — employees earning above the threshold have NHT capped correctly, and the employer contribution is also capped at the corresponding level.",
  },
  {
    q: "Can I run payroll for multiple bank branches across Jamaica?",
    a: "Yes. Payroll Jamaica supports multi-location and multi-branch payroll under one account. Assign employees to branches, run consolidated or branch-level payroll, and generate reports by branch, cost centre, or island-wide.",
  },
  {
    q: "Does Payroll Jamaica integrate with payroll for contract and temp staff at financial institutions?",
    a: "Yes. Payroll Jamaica handles permanent, contract, part-time, and temporary employees in the same payroll. Each employment type receives the correct PAYE, NIS, NHT, and Education Tax treatment under Jamaican law.",
  },
];

export default function FinanceInsurancePayrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's financial sector
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Jamaica's<br />finance & insurance sector
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Banks, credit unions, insurance companies, and investment firms trust Payroll Jamaica. Automate PAYE, NIS, NHT, and Education Tax with commission structures, audit trails, and multi-branch support built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — financial sector welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate finance payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Finance sector payroll challenges — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {financePainPoints.map((item) => (
                <div key={item.problem} className="rounded-xl border border-border bg-background p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✗</span>
                    <p className="font-semibold text-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Payroll built for financial institutions
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From community credit unions to multi-branch banks — Payroll Jamaica handles the complexity of Jamaica's financial sector payroll.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financeFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-sectors */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Serving Jamaica's entire financial sector
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From New Kingston's financial district to community credit unions across Jamaica — we serve every segment of the financial services industry.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {financeSubsectors.map((sub) => (
                <div key={sub.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{sub.name}</p>
                  <p className="text-sm text-muted-foreground">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted by Jamaica's financial institutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From New Kingston's banking towers to parish credit unions — Payroll Jamaica keeps financial sector payroll compliant with Jamaica's tax laws.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "Audit-ready", label: "Full payroll history and records" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Finance sector payroll FAQ
            </h2>
            <div className="space-y-6">
              {financeFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Payroll your financial institution can trust
            </h2>
            <p className="text-muted-foreground">
              Jamaica's banks, credit unions, and insurers deserve payroll software that matches their compliance standards. Get started in one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/payroll-company-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all Jamaica services
              </Link>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: "Payroll Jamaica — Finance & Insurance Payroll",
                  description: baseDescription,
                  url: `${siteConfig.url}/finance-insurance-payroll-jamaica`,
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: financeFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Industries", item: `${siteConfig.url}/industries` },
                    { "@type": "ListItem", position: 3, name: "Finance & Insurance Payroll Jamaica", item: `${siteConfig.url}/finance-insurance-payroll-jamaica` },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
