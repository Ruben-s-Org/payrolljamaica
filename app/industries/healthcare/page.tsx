import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll Jamaica is built for Jamaica's healthcare sector — hospitals, clinics, pharmacies, medical practices, and nursing homes. Automate shift differential pay for nurses and hospital staff, overtime management for 24/7 operations, on-call pay and allowances, PAYE for healthcare professionals, and multi-department payroll management. Trusted by healthcare employers across Kingston, Spanish Town, Montego Bay, and across the island.";

export const metadata: Metadata = {
  title: "Healthcare Payroll Software Jamaica | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's hospitals, clinics, and medical practices. Automate shift differentials, overtime, on-call pay, PAYE for healthcare professionals, NIS, NHT, and multi-department payroll management. Built for Jamaican healthcare employers.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "healthcare payroll Jamaica",
    "hospital payroll software Jamaica",
    "clinic payroll Jamaica",
    "medical staff payroll Jamaica",
    "nurse payroll Jamaica",
    "shift differential pay Jamaica",
    "on-call pay Jamaica",
    "healthcare overtime Jamaica",
    "hospital PAYE NIS NHT Jamaica",
    "payroll for nurses Jamaica",
    "healthcare staff payroll compliance Jamaica",
    "medical practice payroll Jamaica",
    "pharmacy payroll Jamaica",
    "healthcare HR software Jamaica",
    "multi-department payroll Jamaica healthcare",
  ]),
  alternates: {
    canonical: canonical("/industries/healthcare"),
    languages: {
      "en-JM": canonical("/industries/healthcare"),
      en: canonical("/industries/healthcare"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Healthcare Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/industries/healthcare"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Healthcare Payroll Software Jamaica — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Payroll Software Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const features = [
  {
    title: "Shift Differential Pay",
    description:
      "Automatically apply night shift, weekend, and holiday differential rates for nurses and hospital staff. Configure differentials by role, department, or shift type.",
  },
  {
    title: "Overtime for 24/7 Operations",
    description:
      "Hospitals never close. Payroll Jamaica tracks overtime across rotating shift schedules and applies correct overtime rates under Jamaican labour law for every pay period.",
  },
  {
    title: "On-Call Pay & Allowances",
    description:
      "Configure on-call allowances for doctors, nurses, and technical staff. Track on-call hours separately from regular and overtime hours with correct tax treatment.",
  },
  {
    title: "PAYE for Healthcare Professionals",
    description:
      "Healthcare professionals often earn allowances, shift premiums, and variable pay alongside base salary. Payroll Jamaica ensures accurate PAYE is calculated on all components.",
  },
  {
    title: "Multi-Department Payroll",
    description:
      "Run separate payroll for nursing, pharmacy, administration, housekeeping, and specialist units. Consolidated reports give your finance team the full picture.",
  },
  {
    title: "NIS & NHT Compliance",
    description:
      "NIS and NHT calculated on total remuneration including allowances and shift pay. Employer and employee contributions tracked and remittance schedules auto-generated.",
  },
  {
    title: "Leave & Absence Management",
    description:
      "Manage vacation, sick leave, study leave, and maternity leave for healthcare staff. Track leave balances and calculate leave pay accurately across shift-based schedules.",
  },
  {
    title: "Payslips & Employee Records",
    description:
      "Generate detailed payslips showing base pay, shift differentials, overtime, on-call pay, and all deductions. Maintain complete employment records for every staff member.",
  },
];

const challenges = [
  {
    title: "Complex shift structures",
    description:
      "Healthcare staff work 8-hour, 10-hour, and 12-hour shifts, including nights, weekends, and public holidays. Tracking hours, premiums, and overtime across rotating rosters is labour-intensive without proper software.",
  },
  {
    title: "Multiple pay components",
    description:
      "A nurse's pay envelope might include base salary, shift differentials, on-call allowance, uniform allowance, meal allowance, and overtime — all in one pay period. Each component has different tax treatment.",
  },
  {
    title: "Statutory compliance for professionals",
    description:
      "Healthcare employers must correctly calculate PAYE for doctors and specialists who may earn above the higher 30% PAYE threshold. Errors create audit risk and employee disputes.",
  },
  {
    title: "Department cost reporting",
    description:
      "Hospitals and clinics need labour cost visibility by department for budgeting and management purposes. Manual payroll makes this reporting time-consuming and error-prone.",
  },
];

export default function HealthcarePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: canonical("/industries") },
      { "@type": "ListItem", position: 3, name: "Healthcare", item: canonical("/industries/healthcare") },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Payroll Software Jamaica",
    description:
      "Payroll software for Jamaican hospitals, clinics, and medical practices. Automates shift differentials, overtime, on-call pay, PAYE for healthcare professionals, and multi-department payroll with full statutory compliance.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Jamaica",
    },
    serviceType: "Payroll Software",
    url: canonical("/industries/healthcare"),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Industry Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Payroll software for Jamaica&apos;s healthcare sector
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Shift differentials, on-call pay, 24/7 overtime, and multi-department management —
              Payroll Jamaica is built for the payroll complexity of hospitals, clinics, and
              medical practices in Jamaica. Full PAYE, NIS, and NHT compliance, automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <a
                href="/calculator"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Calculate payroll deductions
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Built for the complexity of healthcare payroll
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Healthcare payroll involves shift-based schedules, multiple allowances, round-the-clock
              overtime, and strict compliance requirements. Payroll Jamaica handles all of it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-muted/40 rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why healthcare payroll in Jamaica is uniquely complex
            </h2>
            <p className="text-muted-foreground mb-10">
              Healthcare employers face payroll challenges that go well beyond what a standard
              payroll tool can handle. Here is what makes healthcare payroll different.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((c) => (
                <div key={c.title} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Payroll for nurses in Jamaica
              </h2>
              <p>
                Nurses in Jamaica are typically employed on structured salary scales, but their
                actual pay each period can vary significantly based on shifts worked, overtime,
                on-call obligations, and allowances. Calculating correct gross pay for a nurse
                requires tracking:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Base salary or hourly rate for standard shifts</li>
                <li>Night shift differential (typically a percentage premium on top of base rate)</li>
                <li>Weekend and public holiday pay at the applicable overtime rate</li>
                <li>On-call allowance for hours on call but not working</li>
                <li>Call-back pay when called in from on-call status</li>
                <li>Any meal, uniform, or transportation allowances</li>
              </ul>
              <p className="mt-3">
                Once gross pay is determined, PAYE, NIS, NHT, and Education Tax must be calculated
                on the total remuneration — including all allowances and shift premiums unless
                those allowances are specifically exempt under Jamaican tax law.
              </p>
              <p className="mt-3">
                Payroll Jamaica is configured to handle all of these components. Define your shift
                premium rates, on-call allowances, and other pay elements once — and the system
                applies them correctly every pay cycle. Use our <a href="/calculator" className="text-foreground underline hover:no-underline">payroll calculator</a> to
                estimate deductions for any healthcare salary.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Healthcare staff overtime rules in Jamaica
              </h2>
              <p>
                Jamaica&apos;s labour legislation entitles most employees — including healthcare workers —
                to overtime pay when they work beyond their agreed hours or beyond the standard
                40-hour working week. For healthcare, this is especially significant because
                hospitals and clinics operate 24 hours a day, 365 days a year.
              </p>
              <p className="mt-3">
                Key overtime rules for healthcare employers in Jamaica:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>
                  <strong className="text-foreground">Regular overtime:</strong> 1.5 times the normal hourly rate for hours worked beyond the standard working week
                </li>
                <li>
                  <strong className="text-foreground">Public holiday overtime:</strong> Double time (2x) for work performed on any of Jamaica&apos;s 13 public holidays
                </li>
                <li>
                  <strong className="text-foreground">On-call vs working:</strong> Time spent on call but not actively working may be subject to different pay rules depending on your employment contracts
                </li>
                <li>
                  <strong className="text-foreground">Senior medical staff:</strong> Doctors and senior administrators classified as &ldquo;managerial&rdquo; may not be entitled to overtime under certain conditions
                </li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica tracks regular hours, overtime hours, and on-call hours separately
                for each employee. The system applies the correct multipliers based on your
                configured pay rules and generates accurate payslips every time.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Hospital payroll software in Jamaica — what to look for
              </h2>
              <p>
                When choosing payroll software for a hospital or large clinic in Jamaica, the key
                requirements go beyond basic PAYE and NIS calculation. Your payroll system needs to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Handle shift-based pay with differentials for nights, weekends, and holidays</li>
                <li>Support multiple allowance types with correct statutory tax treatment</li>
                <li>Process payroll for dozens or hundreds of staff across multiple departments</li>
                <li>Generate department-level labour cost reports for management accounting</li>
                <li>Produce statutory remittance reports for TAJ, NIS, and NHT every month</li>
                <li>Maintain auditable payroll records for compliance and HR purposes</li>
                <li>Scale as headcount grows — especially important for private hospitals expanding their services</li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica is designed to meet all of these requirements for Jamaican healthcare
                employers. Whether you manage a 10-person GP clinic or a 200-staff private hospital,
                our platform scales with you.
              </p>
              <p className="mt-3">
                Learn more about our <a href="/features" className="text-foreground underline hover:no-underline">full platform features</a> or
                explore our <a href="/payroll-services" className="text-foreground underline hover:no-underline">managed payroll services</a> for
                healthcare organisations that prefer to outsource payroll processing entirely.
              </p>
              <a
                href="/calculator"
                className="inline-block mt-4 text-foreground font-semibold underline hover:no-underline"
              >
                Get started with Payroll Jamaica →
              </a>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Healthcare payroll as complex as your operations require
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Shift differentials, on-call pay, 24/7 overtime, multi-department reporting — Payroll
              Jamaica handles it all with full statutory compliance built in.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a free demo
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Healthcare payroll made simple"
        text="Shift differentials, overtime, on-call pay, and full PAYE, NIS, NHT compliance. Built for Jamaica's healthcare sector."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
    </div>
  );
}
