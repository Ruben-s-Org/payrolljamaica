import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Restaurant payroll Jamaica — Payroll Jamaica is the payroll software built for Jamaican restaurants, cafes, and food service businesses. Manage hourly staff, tip income, PAYE, NIS, NHT, and Education Tax. Handle variable hours and part-time workers with ease.";

export const metadata: Metadata = {
  title: "Restaurant Payroll Jamaica — Payroll Software for Jamaican Restaurants | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software built for Jamaican restaurants. Manage hourly staff, tip income, part-time workers, PAYE, NIS, and NHT — all compliant with Jamaica's tax rules.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "restaurant payroll Jamaica",
    "payroll Jamaica restaurants",
    "food service payroll Jamaica",
    "restaurant payroll software Jamaica",
    "cafe payroll Jamaica",
    "Jamaica restaurant PAYE",
    "hourly staff payroll Jamaica",
    "part-time worker payroll Jamaica",
    "tip income tax Jamaica restaurant",
    "restaurant NIS NHT Jamaica",
    "food and beverage payroll Jamaica",
    "bar payroll Jamaica",
    "Kingston restaurant payroll",
    "Montego Bay restaurant payroll",
    "Jamaica hospitality payroll software",
  ]),
  alternates: {
    canonical: canonical("/payroll-jamaica-restaurants"),
    languages: {
      "en-JM": canonical("/payroll-jamaica-restaurants"),
      en: canonical("/payroll-jamaica-restaurants"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Restaurant Payroll Jamaica — Built for Jamaican Food Service | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-jamaica-restaurants"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Restaurant Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const painPoints = [
  {
    problem: "Variable hours every pay period",
    solution:
      "Restaurant staff rarely work the same hours twice. Payroll Jamaica handles hourly rates, variable schedules, and overtime calculations without spreadsheet formulas.",
  },
  {
    problem: "Tip income and service charges",
    solution:
      "TAJ requires PAYE on tip income distributed to employees. Payroll Jamaica tracks tip declarations, applies the correct tax rate, and includes gratuity in all statutory filings.",
  },
  {
    problem: "Part-time and casual workers",
    solution:
      "Weekend staff, temporary cooks, casual waitstaff — all must receive statutory deductions. Payroll Jamaica processes part-time workers with the same accuracy as full-time employees.",
  },
  {
    problem: "Monthly NIS/NHT submissions",
    solution:
      "Miss a TAJ filing and you face penalties. Payroll Jamaica generates your monthly NIS, NHT, and Education Tax schedules automatically — ready to submit by the 14th of each month.",
  },
];

const features = [
  {
    title: "Hourly staff payroll",
    desc: "Enter hours worked each period and Payroll Jamaica calculates gross pay, all statutory deductions, and net pay — instantly. No more payroll spreadsheets.",
  },
  {
    title: "Tip and gratuity management",
    desc: "Record service charge distributions and tips declared by staff. All gratuity income is correctly added to taxable wages for accurate PAYE calculation.",
  },
  {
    title: "Part-time worker compliance",
    desc: "Part-time workers in Jamaica are still subject to NIS, NHT, and Education Tax. Payroll Jamaica ensures all casual and part-time staff are deducted correctly.",
  },
  {
    title: "Automated monthly filing schedules",
    desc: "Generate your monthly NIS employer schedule, NHT contribution schedule, and Education Tax deduction return by the 14th of every month — one click, no manual totals.",
  },
  {
    title: "TAJ-compliant payslips",
    desc: "Professional payslips with gross pay, all deductions itemised, and net pay. Available as PDF for distribution or employee self-service portal access.",
  },
  {
    title: "Year-end S01/S02 returns",
    desc: "Annual employee and employer returns auto-populated from full-year payroll data. File on time for the March 31 deadline with zero manual data entry.",
  },
];

const faqs = [
  {
    q: "Do restaurant tips and service charges attract PAYE in Jamaica?",
    a: "Yes. Tips and service charges distributed to employees are treated as supplemental wages under Jamaica's Income Tax Act and are subject to PAYE. Payroll Jamaica adds tip income to each employee's taxable gross, applies the correct PAYE rate, and includes it in all monthly TAJ submissions and year-end S01 returns.",
  },
  {
    q: "How does Payroll Jamaica handle staff who work different hours every week?",
    a: "You enter each employee's hours for the pay period. Payroll Jamaica calculates gross pay using their hourly rate, applies all statutory deductions, and generates the payslip. Variable hours are handled automatically — no spreadsheet formulas required.",
  },
  {
    q: "Are part-time and weekend restaurant staff subject to NIS and NHT in Jamaica?",
    a: "Yes. All employed persons in Jamaica — including part-time, casual, and weekend workers — are subject to NIS (3% employee contribution), NHT (2% employee), and Education Tax (2.25% employee) deductions. Payroll Jamaica processes these deductions correctly regardless of hours worked.",
  },
  {
    q: "What is the monthly payroll filing deadline for Jamaican restaurants?",
    a: "The 14th of each month. You must remit PAYE, NIS, NHT, and Education Tax deductions to TAJ by the 14th following the pay period. Payroll Jamaica generates all four monthly schedules with a single export — ready for bank payment or TAJ online portal submission.",
  },
  {
    q: "We have 5 staff. Is Payroll Jamaica worth it for a small restaurant?",
    a: "Yes — especially for small restaurants where the owner is doing payroll manually. Payroll Jamaica pays for itself in the first month by eliminating calculation errors that attract TAJ penalties. There's no minimum staff requirement.",
  },
];

export default function RestaurantPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaican food service businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Restaurant payroll software for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Variable hours, tips, part-time staff, PAYE, NIS, NHT — Payroll Jamaica handles the full complexity of restaurant payroll in Jamaica.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Try payroll calculator
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Free trial · Works for restaurants, cafes, and bars</p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="w-full px-4 py-10 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              For every type of Jamaican food service business
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Full-service restaurants", "Quick service / fast food", "Cafes and coffee shops", "Bars and rum bars", "Catering companies", "Hotel F&B departments", "Food trucks", "Bakeries"].map((type) => (
                <span key={type} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Restaurant payroll in Jamaica is harder than it looks
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Variable schedules, tip declarations, casual workers — Jamaica's food service industry has payroll challenges most generic software wasn't built for.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {painPoints.map((item) => (
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
              Every feature a Jamaican restaurant needs
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From first pay run to March 31 TAJ filing — Payroll Jamaica covers every step for food service businesses.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
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

        {/* Statutory deductions explainer */}
        <section className="w-full px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Jamaica statutory deductions for restaurant staff (2026)
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Every restaurant employee in Jamaica — full-time, part-time, or casual — is subject to these deductions.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Deduction</th>
                    <th className="py-3 px-4 font-semibold text-center">Employee Rate</th>
                    <th className="py-3 px-4 font-semibold text-center">Employer Rate</th>
                    <th className="py-3 px-4 font-semibold text-center">Filing deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PAYE (income tax)", "25–30% above J$1.5M threshold", "—", "14th of month"],
                    ["NIS", "3%", "3%", "14th of month"],
                    ["NHT", "2%", "3%", "14th of month"],
                    ["Education Tax", "2.25%", "3.5%", "14th of month"],
                    ["HEART (10+ employees)", "—", "3%", "14th of month"],
                  ].map(([ded, emp, er, deadline]) => (
                    <tr key={ded as string} className="border-t border-border">
                      <td className="py-3 px-4 font-medium">{ded}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{emp}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{er}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Payroll Jamaica calculates all deductions automatically.{" "}
              <Link href="/calculator" className="underline">Try the free calculator</Link>.
            </p>
          </div>
        </section>

        {/* March 31 urgency */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-8 text-center">
            <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-2">⚠ March 31 deadline</p>
            <h2 className="text-2xl font-bold mb-3">S01/S02 annual returns due in 20 days</h2>
            <p className="text-muted-foreground mb-6">
              Jamaica's tax year ends March 31. Every employer — including restaurants — must file S01 and S02 returns with TAJ. Payroll Jamaica generates both from your payroll data automatically.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Start free — be compliant by March 31
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Restaurant payroll Jamaica — FAQs
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

        {/* Related */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Related payroll resources</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-sm text-center">
              <Link href="/payroll-jamaica-hotels" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Hotel Payroll Jamaica
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica
              </Link>
              <Link href="/pricing" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Pricing Plans
              </Link>
              <Link href="/calculator" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              Run restaurant payroll correctly in Jamaica
            </h2>
            <p className="text-muted-foreground">
              Join Jamaican restaurants running accurate, TAJ-compliant payroll with Payroll Jamaica.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See pricing plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA
        headline="Restaurant payroll software built for Jamaica"
        text="Variable hours, tips, part-time staff — all statutory deductions handled automatically."
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
            url: canonical("/payroll-jamaica-restaurants"),
            description:
              "Restaurant payroll software for Jamaica. Manages hourly staff, tip income, PAYE, NIS, NHT, and Education Tax for Jamaican restaurants, cafes, and food service businesses.",
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
              { "@type": "ListItem", position: 2, name: "Restaurant Payroll Jamaica", item: canonical("/payroll-jamaica-restaurants") },
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
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </div>
  );
}
