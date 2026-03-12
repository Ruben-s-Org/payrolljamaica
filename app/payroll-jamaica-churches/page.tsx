import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Church payroll Jamaica — Payroll Jamaica is the payroll software built for Jamaica's churches, ministries, and religious organisations. Handle pastor stipends, housing allowances, part-time church workers, and full statutory compliance (PAYE, NIS, NHT, Education Tax) with confidence. Trusted by Jamaican churches from Kingston to rural parishes.";

export const metadata: Metadata = {
  title: "Church Payroll Jamaica — Payroll Software for Churches & Ministries | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaican churches and religious organisations. Manage pastor stipends, housing allowances, part-time staff, PAYE, NIS, and NHT compliance. Built for churches of all sizes across Jamaica.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "church payroll Jamaica",
    "religious organisation payroll Jamaica",
    "pastor payroll Jamaica",
    "church employee Jamaica",
    "non-profit payroll Jamaica",
    "ministry payroll Jamaica",
    "church NIS NHT Jamaica",
    "church PAYE Jamaica",
    "church staff payroll Jamaica",
    "religious body payroll Jamaica",
    "church administrator payroll Jamaica",
    "housing allowance Jamaica tax",
    "church compliance Jamaica",
    "small organisation payroll Jamaica",
    "payroll for churches Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-jamaica-churches"),
    languages: {
      "en-JM": canonical("/payroll-jamaica-churches"),
      en: canonical("/payroll-jamaica-churches"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Church Payroll Jamaica — Built for Jamaica's Churches & Religious Organisations | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-jamaica-churches"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Church Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const churchPainPoints = [
  {
    problem: "\"Does our church actually need to pay NIS and NHT?\"",
    solution:
      "Yes — any worker paid a wage or salary is an employee under Jamaican law, even if they serve a religious body. Payroll Jamaica makes it simple: enter the salary, we calculate and report all statutory deductions automatically.",
  },
  {
    problem: "Housing allowances and special pastor packages",
    solution:
      "Many pastors receive a housing allowance as part of their compensation. Payroll Jamaica handles housing allowances correctly — some portions are taxable, some are not — keeping your church fully compliant with TAJ rules.",
  },
  {
    problem: "Part-time and volunteer vs employee confusion",
    solution:
      "Not every person serving the church is an employee. Payroll Jamaica helps you classify workers correctly — employees, contractors, and volunteers — so you only pay statutory contributions where required by law.",
  },
  {
    problem: "Multiple locations and branches",
    solution:
      "Many Jamaican church networks have multiple campuses or outreach centres. Payroll Jamaica manages staff across all locations on one payroll with unified TAJ reporting.",
  },
];

const churchFeatures = [
  {
    title: "Pastor and minister payroll",
    desc: "Handle complex compensation packages: base stipend, housing allowance, vehicle allowance, and special ministry payments — with correct PAYE treatment for each component.",
  },
  {
    title: "Part-time worker compliance",
    desc: "Churches often employ part-time organists, cleaners, administrative assistants, and groundskeepers. Payroll Jamaica handles all statutory deductions for part-time staff automatically.",
  },
  {
    title: "Multi-branch management",
    desc: "Run payroll for your main church and all satellite branches from one account. Staff can be assigned to specific locations with separate reporting for each branch.",
  },
  {
    title: "Automated statutory deductions",
    desc: "PAYE, NIS (3%), NHT (2%), and Education Tax (2.25%) calculated and remitted on time. Avoid TAJ penalties with automated monthly schedules.",
  },
  {
    title: "TAJ-compliant annual returns",
    desc: "SO1 and SO2 annual returns generated automatically from your payroll data. Meet the March 31 filing deadline without manual spreadsheet work.",
  },
  {
    title: "Simple, affordable pricing",
    desc: "Most churches have small teams. Payroll Jamaica's pricing starts low and scales with your headcount — no expensive enterprise contracts for a 3-person office team.",
  },
];

const denominationsServed = [
  "Baptist churches",
  "Pentecostal churches",
  "Seventh-day Adventist",
  "Anglican / Episcopal",
  "Catholic parishes",
  "Church of God",
  "Methodist churches",
  "New Testament Church",
  "Independent ministries",
  "Jehovah's Witnesses",
  "Rastafarian organisations",
  "Non-denominational churches",
];

const faqs = [
  {
    q: "Does a church in Jamaica have to pay NIS and NHT for its employees?",
    a: "Yes. Under the National Insurance Act and the National Housing Trust Act, any employer — including religious bodies — must deduct and remit NIS (3% employee, 3% employer) and NHT (2% employee, 3% employer) for all employees earning above the threshold. Religious status does not exempt an organisation from these obligations.",
  },
  {
    q: "Is a pastor's housing allowance taxable under Jamaican law?",
    a: "Under Jamaica's Income Tax Act, housing benefits paid in cash are generally treated as taxable income subject to PAYE. Some structured housing allowances may qualify for partial exemption depending on how the arrangement is documented. Payroll Jamaica flags housing allowance components separately so your church accountant or tax advisor can confirm the correct treatment for your specific arrangement.",
  },
  {
    q: "What about part-time workers like organists and cleaners?",
    a: "Part-time employees who meet the definition of 'employee' under Jamaica's Labour Relations and Industrial Disputes Act are subject to the same statutory deductions as full-time staff — pro-rated on their actual earnings. Payroll Jamaica handles part-time staff automatically. If a worker is a genuine independent contractor (not an employee), different rules apply and no statutory deductions are required.",
  },
  {
    q: "Our church has staff at 3 different locations. Can one account manage all of them?",
    a: "Yes. Payroll Jamaica supports unlimited locations under one account. Each employee can be assigned to a specific branch, and you can run combined or branch-level reports for your treasurer and annual return filings.",
  },
  {
    q: "Do we need an accountant to use Payroll Jamaica?",
    a: "No. Payroll Jamaica is designed to be used by church administrators without accounting backgrounds. The system calculates all deductions, generates payslips, and produces TAJ-ready reports. Many churches manage their own payroll in under 30 minutes per pay period.",
  },
  {
    q: "What is the cost for a small church with only 2-3 employees?",
    a: "Payroll Jamaica offers affordable pricing designed for small organisations. Contact us for a quote — there are no minimum employee requirements and no setup fees.",
  },
];

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonical("/payroll-jamaica-churches"),
      url: canonical("/payroll-jamaica-churches"),
      name: "Church Payroll Jamaica — Payroll Software for Churches & Ministries | Payroll Jamaica",
      description: baseDescription,
      isPartOf: { "@id": siteConfig.url },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Church Payroll Jamaica", item: canonical("/payroll-jamaica-churches") },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: baseDescription,
      url: canonical("/payroll-jamaica-churches"),
      offers: { "@type": "Offer", priceCurrency: "JMD", price: "2500", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5" },
    },
  ],
});

export default function ChurchPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's churches and religious organisations
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Church payroll software built for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Pastor stipends, housing allowances, part-time staff, PAYE, NIS, NHT — Payroll Jamaica handles church payroll so your administrator doesn't have to guess.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
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
                Try payroll calculator
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Free trial · No credit card · Works for all Jamaican churches</p>
          </div>
        </section>

        {/* Denominations served */}
        <section className="w-full px-4 py-10 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Trusted by Jamaica's churches across all denominations
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {denominationsServed.map((d) => (
                <span key={d} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Church payroll in Jamaica is more complex than you think
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Jamaica has thousands of churches — and most of them have employees. Here's what Payroll Jamaica solves for religious organisations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {churchPainPoints.map((item) => (
                <div key={item.problem} className="p-6 rounded-xl border border-border bg-card">
                  <p className="font-semibold mb-2 text-destructive">Problem: {item.problem}</p>
                  <p className="text-muted-foreground text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Everything a Jamaican church needs for payroll
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From the pastor to the part-time groundskeeper — Payroll Jamaica handles every worker in your church.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {churchFeatures.map((f) => (
                <div key={f.title} className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                    <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* March 31 urgency */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-8 text-center">
            <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-2">⚠ March 31 deadline</p>
            <h2 className="text-2xl font-bold mb-3">SO1/SO2 annual returns due in 20 days</h2>
            <p className="text-muted-foreground mb-6">
              Every Jamaican employer — including churches — must file SO1 (employee) and SO2 (employer) annual returns with TAJ by March 31.
              Payroll Jamaica generates both from your payroll data in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free — file on time
              </a>
              <Link
                href="/blog/so1-annual-return-deadline-jamaica-employers-guide-2026"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Read: SO1 filing guide
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="w-full px-4 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Why Jamaican churches choose Payroll Jamaica over spreadsheets
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="py-3 px-4 font-semibold text-green-600">Payroll Jamaica</th>
                    <th className="py-3 px-4 font-semibold text-muted-foreground">Spreadsheets / Manual</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Housing allowance tax treatment", "✓ Handled correctly", "✗ Easy to get wrong"],
                    ["Part-time staff deductions", "✓ Automatic", "✗ Manual calculation"],
                    ["SO1/SO2 annual returns", "✓ Auto-generated", "✗ Hours of work"],
                    ["NIS/NHT monthly schedules", "✓ One click", "✗ Manual calculation"],
                    ["Multi-branch payroll", "✓ Unlimited locations", "✗ Separate files"],
                    ["TAJ audit trail", "✓ Full history", "✗ Version control risk"],
                    ["Employee payslips", "✓ Professional PDFs", "✗ Typed manually"],
                  ].map(([feature, us, them]) => (
                    <tr key={feature} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{feature}</td>
                      <td className="py-3 px-4 text-center text-green-600 font-medium">{us}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Link href="/compare/payroll-software-jamaica" className="text-sm underline text-muted-foreground">
                See full software comparison →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Church payroll Jamaica — frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Explore more payroll resources</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-center">
              <Link href="/small-business-payroll-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Small Business Payroll Jamaica →
              </Link>
              <Link href="/payroll-outsourcing-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Outsourcing Jamaica →
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica →
              </Link>
            </div>
          </div>
        </section>

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

        {/* Final CTA */}
        <section className="w-full px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              Ready to simplify your church's payroll?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join Jamaica's churches running compliant, stress-free payroll on Payroll Jamaica.
              Free trial, no credit card, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start your free trial
              </a>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Calculate your deductions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
