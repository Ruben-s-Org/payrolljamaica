import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Healthcare payroll software built specifically for Jamaica's hospitals, clinics, and medical facilities. Handle nurse shift premiums, doctor sessional pay, NHF health surcharge, on-call allowances, and TAJ statutory filings — all automated for Jamaica's healthcare sector. Trusted by medical facilities from Kingston to Montego Bay.";

export const metadata: Metadata = {
  title: "Healthcare Payroll Jamaica — Hospitals, Clinics & Medical Staff Payroll | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software built for Jamaica's healthcare sector. Automate nurse shift differentials, doctor locum pay, NHF contributions, on-call allowances, and TAJ filings for hospitals, clinics, and medical facilities across Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "healthcare payroll Jamaica",
    "hospital payroll Jamaica",
    "medical staff payroll Jamaica",
    "nurse payroll Jamaica",
    "clinic payroll Jamaica",
    "doctor payroll Jamaica",
    "NHF payroll Jamaica",
    "shift differential payroll Jamaica",
    "on-call payroll Jamaica",
    "healthcare PAYE Jamaica",
    "medical facility payroll software Jamaica",
    "nursing home payroll Jamaica",
    "UWI Hospital payroll",
    "Cornwall Regional payroll software",
  ]),
  alternates: {
    canonical: canonical("/healthcare-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/healthcare-payroll-jamaica"),
      en: canonical("/healthcare-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Healthcare Payroll Jamaica — Hospitals, Clinics & Medical Staff | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/healthcare-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Healthcare Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function HealthcarePayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica's healthcare sector
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll software built for Jamaica&apos;s healthcare sector
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              From nurse shift premiums at Cornwall Regional to doctor sessional pay at private clinics — handle every healthcare payroll complexity automatically, with full NHF compliance and TAJ reporting built in.
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
              { stat: "100%", label: "Jamaica-compliant" },
              { stat: "Built-in", label: "Shift differentials" },
              { stat: "Ready", label: "NHF integration" },
              { stat: "All 14", label: "Parishes covered" },
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
              Healthcare payroll features built for Jamaica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Nurse shift premiums and overtime",
                  desc: "Automatically apply night-shift differentials, weekend premiums, and overtime rates for nursing staff. Supports the rotating shift patterns common at UWI Hospital, Bustamante Children's Hospital, and Spanish Town Hospital without manual calculations.",
                },
                {
                  title: "Doctor locum and sessional pay",
                  desc: "Calculate sessional and locum payments for doctors working variable hours across multiple facilities. Handle per-session fees, daily rates, and consulting arrangements alongside PAYE obligations — all in a single payroll run.",
                },
                {
                  title: "NHF health surcharge handling",
                  desc: "National Health Fund contributions are calculated automatically for all eligible healthcare employees. NHF surcharge rates are pre-loaded and applied to the correct payroll lines, with remittance reports ready for monthly submission.",
                },
                {
                  title: "On-call and standby allowances",
                  desc: "Track and pay on-call standby allowances separately from base salary. Define allowance rates by role or department, and ensure PAYE is correctly applied to all taxable allowance amounts per TAJ rules.",
                },
                {
                  title: "Multi-facility payroll management",
                  desc: "Run payroll across multiple locations — a Kingston headquarters, regional clinics, or satellite facilities in parishes like St. Ann or Westmoreland — from a single account. Each facility can have its own pay structure and cost centre.",
                },
                {
                  title: "Temporary versus permanent staff",
                  desc: "Manage the payroll distinction between permanent nursing staff, contract doctors, agency-supplied temps, and HEART training programme participants. Each employment type applies the correct statutory deduction schedule.",
                },
                {
                  title: "Healthcare-specific leave tracking",
                  desc: "Track compassionate leave, extended sick leave, and occupational health leave alongside standard vacation balances. Payroll automatically adjusts for unpaid leave and statutory sick pay entitlements under Jamaica's labour laws.",
                },
                {
                  title: "TAJ statutory filings for healthcare employers",
                  desc: "Generate SO1, P24, and monthly remittance schedules in TAJ-accepted formats. Healthcare facilities with complex pay structures — mixing salaries, sessional fees, and allowances — get accurate filings without manual spreadsheet reconciliation.",
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
              Built for how Jamaica's healthcare sector actually operates
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Public hospitals with complex shift structures",
                  desc: "Jamaica's public hospitals — including the University Hospital of the West Indies, Cornwall Regional Hospital in Montego Bay, Bustamante Children's Hospital, and Spanish Town Hospital — run 24-hour shift operations with premium pay for unsociable hours. Payroll Jamaica handles the full complexity of these schedules without manual input from payroll staff.",
                },
                {
                  title: "Private clinics and specialist practices",
                  desc: "Private medical facilities from Kingston's New Kingston district to parish-level health centres operate with a mix of salaried staff, part-time consultants, and contract nurses. The software handles each pay arrangement under the correct Jamaica statutory framework.",
                },
                {
                  title: "NHF and HEART programme participants",
                  desc: "Healthcare employers taking on HEART/NSTA Trust trainees or managing NHF-funded positions need separate tracking for grant-funded staff. Payroll Jamaica supports cost centre separation so NHF-funded and facility-funded staff payroll stays clean for reporting and audit.",
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Payroll Calculator", href: "/calculator" },
                { label: "Payroll Software", href: "/payroll-software-jamaica" },
                { label: "All Features", href: "/features" },
                { label: "Industries", href: "/industries" },
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
                How do you handle shift differentials for nurses in Jamaica?
              </h2>
              <p>
                Payroll Jamaica lets you define shift differential rates by role, department, or shift type. Night shifts, weekend shifts, and public holiday shifts can each carry a different premium multiplier applied automatically to a nurse&apos;s base hourly or salaried rate. The system calculates the full gross pay including differentials before applying PAYE, NIS, NHT, and Education Tax in line with TAJ requirements. Hospitals like UWI Hospital and Cornwall Regional with rotating shift rosters can import shift data directly or enter it manually per pay period.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Does the software handle NHF contributions for healthcare workers?
              </h2>
              <p>
                Yes. National Health Fund contributions and the NHF health surcharge are built into the payroll calculation engine. For healthcare employers, NHF is applied at the current statutory rate to eligible employee earnings. The system generates the NHF remittance schedule alongside PAYE, NIS, and NHT reports so you submit all statutory obligations from a single payroll run. Rates are updated in the system when the Ministry of Health or Ministry of Finance announces changes.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Can I run payroll for multiple clinic locations in Jamaica?
              </h2>
              <p>
                Yes. Payroll Jamaica supports multi-location payroll under a single account. You can set up separate cost centres or departments for a Kingston head facility, a Portmore satellite clinic, a St. James facility, or any other parish location. Each location can have its own pay schedules, allowance structures, and reporting, while you run the full payroll and view consolidated reports from one dashboard.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How do I calculate overtime for on-call medical staff in Jamaica?
              </h2>
              <p>
                Under Jamaica&apos;s Employment (Termination and Redundancy Payments) Act and labour regulations, overtime is calculated at 1.5 times the regular rate for hours beyond the standard working week. For on-call staff, Payroll Jamaica allows you to configure standby allowance rates separately from active overtime. The system tracks total hours worked, applies the correct overtime multiplier, and includes all components in the statutory deduction calculation before generating the payslip.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Ready to simplify healthcare payroll in Jamaica?
            </h2>
            <p className="text-muted-foreground">
              Join Jamaica&apos;s healthcare facilities running accurate, compliant payroll without manual calculations.
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
        headline="Healthcare payroll software built for Jamaica"
        text="Nurse shift differentials, NHF contributions, and TAJ filings — all automated."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica — Healthcare",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: canonical("/healthcare-payroll-jamaica"),
            description:
              "Healthcare payroll software built for Jamaica. Automates nurse shift premiums, doctor sessional pay, NHF contributions, and TAJ filings for hospitals, clinics, and medical facilities.",
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
            applicationSubCategory: "Healthcare Payroll",
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
                name: "Healthcare Payroll Jamaica",
                item: canonical("/healthcare-payroll-jamaica"),
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
                name: "How do you handle shift differentials for nurses in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Payroll Jamaica lets you define shift differential rates by role, department, or shift type. Night shifts, weekend shifts, and public holiday shifts each carry a different premium multiplier applied automatically before PAYE, NIS, NHT, and Education Tax are calculated per TAJ requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Does the software handle NHF contributions for healthcare workers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. NHF contributions and the health surcharge are built into the payroll calculation engine. The system generates NHF remittance schedules alongside PAYE, NIS, and NHT reports from a single payroll run.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run payroll for multiple clinic locations in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Payroll Jamaica supports multi-location payroll under a single account with separate cost centres for each facility, consolidated reporting, and location-specific pay structures.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate overtime for on-call medical staff in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Overtime is calculated at 1.5 times the regular rate for hours beyond the standard working week under Jamaica's labour regulations. Payroll Jamaica configures standby allowances separately from active overtime and includes all components in the statutory deduction calculation.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
