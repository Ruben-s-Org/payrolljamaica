import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Security company payroll Jamaica — Payroll Jamaica is built for Jamaica's security firms and guard companies. Handle shift differentials, night premiums, overtime, multiple client sites, and full statutory compliance (PAYE, NIS, NHT, Education Tax). Trusted by security companies across Kingston, Montego Bay, and the wider Jamaica.";

export const metadata: Metadata = {
  title: "Security Company Payroll Jamaica — Payroll Software for Security Firms | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaican security companies and guard firms. Manage shift workers, overtime, night differentials, multiple client sites, PAYE, NIS, and NHT. Built for Jamaica's security industry.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "security company payroll Jamaica",
    "security guard payroll Jamaica",
    "security firm payroll Jamaica",
    "guard payroll Jamaica",
    "security industry payroll Jamaica",
    "shift worker payroll Jamaica",
    "night shift payroll Jamaica",
    "overtime payroll Jamaica",
    "security NIS NHT Jamaica",
    "security PAYE Jamaica",
    "multi-site payroll Jamaica",
    "security contractor payroll Jamaica",
    "armed guard payroll Jamaica",
    "payroll for security companies Jamaica",
    "security agency payroll software Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-jamaica-security"),
    languages: {
      "en-JM": canonical("/payroll-jamaica-security"),
      en: canonical("/payroll-jamaica-security"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Security Company Payroll Jamaica — Built for Jamaica's Security Industry | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-jamaica-security"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Security Company Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Company Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const securityPainPoints = [
  {
    problem: "Shift schedules and varying pay calculations",
    solution:
      "Security guards work 8-hour, 12-hour, and 24-hour shifts — some with night differentials, some without. Payroll Jamaica handles variable shift pay, calculates overtime above 40 hours, and applies the correct PAYE to every pay run.",
  },
  {
    problem: "Deploying guards to 20+ client sites",
    solution:
      "Your guards are at banks, malls, hotels, and construction sites across Jamaica. Payroll Jamaica tracks site assignments per employee, runs cost-centre reporting per client location, and produces the reports your operations manager actually needs.",
  },
  {
    problem: "High staff turnover and constant onboarding",
    solution:
      "The security industry has Jamaica's highest employee turnover. Payroll Jamaica makes adding and terminating employees fast — with final payment and termination pay calculations built in.",
  },
  {
    problem: "Union dues and benefit deductions",
    solution:
      "Many security workers are unionised. Payroll Jamaica supports union due deductions, health insurance deductions, and other employer-specific deductions in addition to the standard NIS, NHT, and Education Tax.",
  },
];

const securityFeatures = [
  {
    title: "Shift and overtime management",
    desc: "Set base rates per employee, apply night shift differentials, and calculate overtime above 40 hours per week — all in compliance with Jamaica's Labour Relations Act.",
  },
  {
    title: "Multi-site cost centres",
    desc: "Assign guards to client locations and track payroll costs per site. Generate client-level labour cost reports for billing reconciliation and management review.",
  },
  {
    title: "Fast onboarding and termination",
    desc: "Add new guards in minutes. When a guard leaves, Payroll Jamaica calculates their final pay, outstanding vacation accrual, and any statutory redundancy — no manual math.",
  },
  {
    title: "Automated statutory deductions",
    desc: "PAYE, NIS (3%), NHT (2%), and Education Tax (2.25%) calculated for every guard on every pay run. Monthly schedules generated with one click.",
  },
  {
    title: "Union and benefit deductions",
    desc: "Add union dues, health insurance, and other deductions alongside statutory contributions. Every deduction appears on the payslip with full audit trail.",
  },
  {
    title: "TAJ-ready annual returns",
    desc: "SO1 and SO2 annual returns generated automatically. Meet the March 31 deadline without manually totalling a year of payslips.",
  },
];

const securityClientTypes = [
  "Security guard companies",
  "Armed courier services",
  "Event security firms",
  "Banking security operations",
  "Hotel and resort security",
  "Mall and retail security",
  "Construction site security",
  "Government contract security",
  "Airport and port security",
  "School and campus security",
  "Industrial plant security",
  "Private investigation firms",
];

const faqs = [
  {
    q: "How does Payroll Jamaica handle overtime for security guards?",
    a: "Under Jamaica's Minimum Wage Act and common law, overtime is calculated above the standard 40-hour week. Payroll Jamaica allows you to set each employee's base rate and overtime multiplier (typically 1.5x or 2x for public holidays). The system calculates total pay, PAYE on the gross, and generates payslips showing the breakdown of regular and overtime hours.",
  },
  {
    q: "Can I run payroll for guards deployed to 30 different client sites?",
    a: "Yes. Payroll Jamaica supports unlimited cost centres. Each employee can be assigned to one or more client locations, and you can run payroll reports filtered by site — useful for billing reconciliation and client-level labour cost analysis.",
  },
  {
    q: "We hire and terminate guards frequently. Is Payroll Jamaica designed for high turnover?",
    a: "Yes. Adding a new employee takes 2-3 minutes. Terminating an employee triggers a final pay calculation that includes outstanding salary, accrued vacation, and any applicable redundancy under Jamaica's Employment (Termination and Redundancy Payments) Act. Final payslips are generated automatically.",
  },
  {
    q: "Does Payroll Jamaica handle night shift differential pay?",
    a: "Yes. You can configure shift differentials on each employee's record. Payroll Jamaica applies the differential rate to eligible night hours and calculates PAYE on the total gross earnings including the differential.",
  },
  {
    q: "Can we deduct union dues through Payroll Jamaica?",
    a: "Yes. Payroll Jamaica supports custom deductions including union dues, health insurance, pension contributions, and any other employer-defined deductions. These appear on the payslip alongside statutory deductions for full transparency.",
  },
  {
    q: "How many employees can Payroll Jamaica handle for a large security firm?",
    a: "Payroll Jamaica scales from 2 employees to hundreds. Large security firms across Jamaica use it to manage guards across multiple parishes and client contracts without performance issues.",
  },
];

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonical("/payroll-jamaica-security"),
      url: canonical("/payroll-jamaica-security"),
      name: "Security Company Payroll Jamaica — Payroll Software for Security Firms | Payroll Jamaica",
      description: baseDescription,
      isPartOf: { "@id": siteConfig.url },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Security Company Payroll Jamaica", item: canonical("/payroll-jamaica-security") },
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
      url: canonical("/payroll-jamaica-security"),
      offers: { "@type": "Offer", priceCurrency: "JMD", price: "2500", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5" },
    },
  ],
});

export default function SecurityPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's security industry
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Security company payroll built for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Shift workers, multi-site deployments, overtime, union deductions — Payroll Jamaica handles the complexity of running a security firm in Jamaica.
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
            <p className="text-sm text-muted-foreground">Free trial · No credit card · Works for all Jamaican security companies</p>
          </div>
        </section>

        {/* Client types */}
        <section className="w-full px-4 py-10 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Trusted by security operations across Jamaica
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {securityClientTypes.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Security company payroll in Jamaica is uniquely challenging
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Shift schedules, multiple sites, high turnover — Jamaica's security industry has payroll complexity that generic software can't handle. Payroll Jamaica can.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {securityPainPoints.map((item) => (
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
              Everything a Jamaican security firm needs for payroll
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From daily-rate guards to salaried supervisors — Payroll Jamaica handles your entire security workforce.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((f) => (
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
              If your security firm has employees, you must file SO1 and SO2 annual returns with TAJ by March 31.
              Payroll Jamaica generates both automatically — no manual data entry.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Start free — file on time
            </a>
          </div>
        </section>

        {/* Comparison */}
        <section className="w-full px-4 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Why Jamaican security firms choose Payroll Jamaica
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
                    ["Shift differential pay calculations", "✓ Automatic", "✗ Manual formula"],
                    ["Overtime above 40 hours", "✓ Auto-calculated", "✗ Easy to miss"],
                    ["Multi-site cost centres", "✓ Unlimited sites", "✗ Separate files"],
                    ["Termination pay calculation", "✓ Built-in", "✗ Manual lookup"],
                    ["Union due deductions", "✓ Custom deductions", "✗ Manual entry"],
                    ["SO1/SO2 annual returns", "✓ Auto-generated", "✗ Hours of work"],
                    ["TAJ audit trail", "✓ Full history", "✗ Version risk"],
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
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Security company payroll Jamaica — frequently asked questions
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
              <Link href="/industries/construction" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Construction Payroll Jamaica →
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica →
              </Link>
              <Link href="/payroll-company-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Company Jamaica →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              Ready to modernise your security firm's payroll?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join Jamaica's security companies running compliant, accurate payroll on Payroll Jamaica.
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
                Calculate guard pay
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
