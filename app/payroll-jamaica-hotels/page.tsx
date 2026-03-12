import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Hotel payroll Jamaica — Payroll Jamaica is the payroll software built for Jamaica's hotel and hospitality industry. Manage seasonal staff, tip income, PAYE, NIS, NHT, and Education Tax for your property. Trusted by Jamaican hotels from Kingston to Negril.";

export const metadata: Metadata = {
  title: "Hotel Payroll Jamaica — Payroll Software for Jamaica's Hotel Industry | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software built for Jamaican hotels. Manage seasonal workers, tip declarations, PAYE, NIS, NHT, and Education Tax — all in one place. Jamaica's tourism sector demands accuracy.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "hotel payroll Jamaica",
    "payroll Jamaica hotels",
    "hospitality payroll Jamaica",
    "hotel payroll software Jamaica",
    "Jamaica hotel PAYE",
    "tourism payroll Jamaica",
    "hotel staff payroll Jamaica",
    "seasonal workers payroll Jamaica",
    "resort payroll software Jamaica",
    "all-inclusive hotel payroll Jamaica",
    "tip income PAYE Jamaica",
    "hotel NIS NHT Jamaica",
    "Montego Bay hotel payroll",
    "Negril hotel payroll software",
    "Ocho Rios resort payroll",
  ]),
  alternates: {
    canonical: canonical("/payroll-jamaica-hotels"),
    languages: {
      "en-JM": canonical("/payroll-jamaica-hotels"),
      en: canonical("/payroll-jamaica-hotels"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Hotel Payroll Jamaica — Built for Jamaica's Tourism Industry | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-jamaica-hotels"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Hotel Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const hotelPainPoints = [
  {
    problem: "Seasonal staff headaches",
    solution:
      "Tourism peaks in winter and summer. Payroll Jamaica handles contract workers, seasonal hires, and year-round staff on one platform — no switching between systems.",
  },
  {
    problem: "Tip income + service charges",
    solution:
      "Tips and service charges are taxable. Payroll Jamaica correctly applies PAYE to tip income and gratuity distributions, keeping your hotel compliant with TAJ rules.",
  },
  {
    problem: "Multiple job grades and shifts",
    solution:
      "Front desk, housekeeping, kitchen, security — all earning different rates. Handle every pay grade and shift differential without a spreadsheet.",
  },
  {
    problem: "Manual NIS/NHT filings",
    solution:
      "Automated statutory reports. Generate your monthly NIS, NHT, and Education Tax schedules with one click — no manual calculation across 50+ staff.",
  },
];

const hotelFeatures = [
  {
    title: "Seasonal worker management",
    desc: "Onboard, track, and offboard seasonal staff without losing payroll history. Reinstate returning workers with all deduction history intact.",
  },
  {
    title: "Tip and gratuity tracking",
    desc: "Declare service charge distributions as taxable income. Payroll Jamaica applies the correct PAYE rate to all tip income — no guessing, no TAJ penalties.",
  },
  {
    title: "Multi-department payroll",
    desc: "Run separate department cost centres for Rooms, F&B, Spa, and Maintenance. Full visibility on labour costs by department for GM reporting.",
  },
  {
    title: "Automated statutory deductions",
    desc: "PAYE, NIS (3%), NHT (2%), and Education Tax (2.25%) calculated automatically for every employee on every pay run. Zero manual entry.",
  },
  {
    title: "TAJ-compliant payslips",
    desc: "Generate professional payslips with all statutory deductions itemised. Download as PDF or send to employee portal. TAJ-ready for any audit.",
  },
  {
    title: "SO1/SO2 annual returns",
    desc: "Year-end S01 and S02 forms generated automatically from payroll data. Meet the March 31 filing deadline without a week of manual work.",
  },
];

const jamaicaHotelAreas = [
  "Montego Bay (Rose Hall, Sandals, Half Moon)",
  "Negril (Beaches, Couples, Rick's Café)",
  "Ocho Rios (Sandals Ochi, Couples Tower Isle)",
  "Kingston (Courtleigh Manor, Jamaica Pegasus)",
  "Port Antonio (Geejam, Goblin Hill)",
  "Runaway Bay (SuperClubs, Club Caribbean)",
];

const faqs = [
  {
    q: "How does Payroll Jamaica handle service charge and tip income?",
    a: "Service charges distributed to employees are treated as supplemental wages and subject to PAYE under Jamaica's Income Tax Act. Payroll Jamaica flags tip income separately, applies the correct PAYE rate, and includes it in all TAJ submissions. This keeps your hotel fully compliant without any manual calculation.",
  },
  {
    q: "Can we manage seasonal workers alongside permanent staff?",
    a: "Yes. Payroll Jamaica handles fixed-term contracts, seasonal employees, and permanent staff on the same payroll. Seasonal workers can be deactivated at season-end and reactivated the following year with full deduction history preserved.",
  },
  {
    q: "Does the software handle the March 31 S01/S02 filing deadline for hotels?",
    a: "Yes. S01 (employee annual return) and S02 (employer annual return) are generated automatically from your full-year payroll data. All figures reconcile to your monthly NIS/NHT/Education Tax submissions. Most hotel payroll teams complete their annual return in under 30 minutes.",
  },
  {
    q: "We have staff in multiple departments at different pay grades. Can Payroll Jamaica manage this?",
    a: "Yes. You can set up unlimited departments and pay grades. Each employee is assigned a department and rate — all deductions are calculated individually. Cost centre reporting shows total labour costs per department for your management accounts.",
  },
  {
    q: "Is there a minimum number of employees to use Payroll Jamaica?",
    a: "No minimum. Whether you run a 10-room guesthouse or a 500-room all-inclusive resort, Payroll Jamaica scales to your property.",
  },
];

export default function HotelPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's hospitality industry
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Hotel payroll software built for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Seasonal workers, service charges, PAYE, NIS, NHT — Payroll Jamaica handles the complexity of hotel payroll so your HR team doesn't have to.
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
            <p className="text-sm text-muted-foreground">Free trial · No credit card · Works for all Jamaican hotels</p>
          </div>
        </section>

        {/* Coverage areas */}
        <section className="w-full px-4 py-10 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Trusted by hotels across Jamaica
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {jamaicaHotelAreas.map((area) => (
                <span key={area} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Hotel payroll in Jamaica is uniquely complicated
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Tourism is the backbone of Jamaica's economy — but hotel HR teams carry a disproportionate payroll burden. Here's what Payroll Jamaica solves.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {hotelPainPoints.map((item) => (
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
              Everything a Jamaican hotel needs for payroll
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From first hire to year-end S01 filing — Payroll Jamaica handles every step.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelFeatures.map((f) => (
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

        {/* March 31 urgency banner */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-8 text-center">
            <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-2">⚠ March 31 deadline</p>
            <h2 className="text-2xl font-bold mb-3">S01/S02 annual returns due in 20 days</h2>
            <p className="text-muted-foreground mb-6">
              Every Jamaican hotel must file S01 (employee) and S02 (employer) annual returns with TAJ by March 31. Payroll Jamaica generates both automatically from your payroll data.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — file on time
              </Link>
              <Link
                href="/march-31-payroll-deadline-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Read: March 31 deadline guide
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="w-full px-4 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Why Jamaican hotels choose Payroll Jamaica over spreadsheets
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
                    ["PAYE calculation for tip income", "✓ Automatic", "✗ Manual lookup"],
                    ["Seasonal staff management", "✓ Built-in", "✗ New file each season"],
                    ["S01/S02 annual returns", "✓ Auto-generated", "✗ Hours of manual work"],
                    ["NIS/NHT monthly schedules", "✓ One click", "✗ Manual calculation"],
                    ["Department cost centres", "✓ Unlimited", "✗ Not available"],
                    ["TAJ audit trail", "✓ Full history", "✗ Version control risk"],
                    ["Employee payslip portal", "✓ Self-service", "✗ HR sends manually"],
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
              Hotel payroll Jamaica — frequently asked questions
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
            <div className="grid sm:grid-cols-4 gap-4 text-sm text-center">
              <Link href="/payroll-jamaica-restaurants" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Restaurant Payroll Jamaica
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica
              </Link>
              <Link href="/pricing" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Pricing Plans
              </Link>
              <Link href="/payroll-montego-bay-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Montego Bay
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              Start running hotel payroll correctly in Jamaica
            </h2>
            <p className="text-muted-foreground">
              Join Jamaican hotels that run accurate, TAJ-compliant payroll with Payroll Jamaica.
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
        headline="Hotel payroll software built for Jamaica"
        text="Manage seasonal staff, tip income, PAYE, NIS, and NHT — all in one place."
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
            url: canonical("/payroll-jamaica-hotels"),
            description:
              "Hotel payroll software for Jamaica. Manages seasonal staff, tip income, PAYE, NIS, NHT, and Education Tax for Jamaican hotels and resorts.",
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
              { "@type": "ListItem", position: 2, name: "Hotel Payroll Jamaica", item: canonical("/payroll-jamaica-hotels") },
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
