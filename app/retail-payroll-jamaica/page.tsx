import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Retail payroll software built for Jamaica's shops, supermarkets, and retail businesses. Handle commission and base pay combinations, public holiday double-time, part-time and flexi-staff, Christmas bonus, multi-store payroll, and bank payment files for NCB, JN Bank, and Scotiabank — all automated for Jamaican retail payroll compliance.";

export const metadata: Metadata = {
  title: "Retail Payroll Jamaica — Shops, Supermarkets & Retail Staff Payroll | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's retail businesses. Automate commission pay, public holiday double-time, part-time staff, Christmas bonuses, and multi-store payroll. Generate bank payment files for NCB, JN Bank, and Scotiabank — built for Jamaica's retail sector.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "retail payroll Jamaica",
    "shop payroll Jamaica",
    "supermarket payroll Jamaica",
    "store payroll Jamaica",
    "retail employee payroll Jamaica",
    "commission payroll Jamaica",
    "holiday pay retail Jamaica",
    "part-time staff payroll Jamaica",
    "Christmas bonus payroll Jamaica",
    "multi-store payroll Jamaica",
    "Hi-Lo payroll Jamaica",
    "MegaMart payroll Jamaica",
    "Kingston retail payroll",
    "Montego Bay retail payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/retail-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/retail-payroll-jamaica"),
      en: canonical("/retail-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Retail Payroll Jamaica — Shops, Supermarkets & Retail Staff | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/retail-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Retail Payroll Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Payroll Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function RetailPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica&apos;s retail sector
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll software for Jamaica&apos;s retail businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              From a Half Way Tree boutique to a multi-location supermarket chain — handle commission pay, public holiday double-time, part-time staff, and Christmas bonuses automatically, with bank payment files ready for NCB, JN Bank, and Scotiabank.
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
              { stat: "Auto", label: "Holiday pay calculated" },
              { stat: "Built-in", label: "Commission tracking" },
              { stat: "Both", label: "Part-time and full-time" },
              { stat: "All", label: "Retail formats" },
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
              Retail payroll features built for Jamaica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Commission and base pay calculations",
                  desc: "Combine fixed base salary with variable commission earnings in a single payroll run. Define commission tiers, apply them to sales figures, and calculate PAYE on the combined gross pay — all without manual spreadsheet work. Sales incentive structures common in Jamaican retail are supported out of the box.",
                },
                {
                  title: "Public holiday double-pay compliance",
                  desc: "Jamaica's Holidays (Public General) Act requires retail employees working on public holidays to receive double their regular pay. Payroll Jamaica flags public holidays automatically and applies the correct 2x multiplier to hours worked on those dates, keeping you compliant without manual adjustment.",
                },
                {
                  title: "Part-time and flexi-staff payroll",
                  desc: "Retail businesses in Jamaica rely heavily on part-time and flexible-hours staff. Payroll Jamaica calculates wages for hourly, part-time, and zero-hours employees with the correct pro-rata statutory deductions. Pay schedules can be weekly, bi-weekly, or monthly — whatever your retail operation requires.",
                },
                {
                  title: "Weekly and bi-weekly payroll runs",
                  desc: "Many Jamaica retail businesses pay weekly or every two weeks, particularly for hourly floor staff. Payroll Jamaica supports multiple pay frequencies within a single account, so salaried managers on monthly pay and hourly cashiers on weekly pay are processed correctly in their respective cycles.",
                },
                {
                  title: "Christmas bonus and gratuity handling",
                  desc: "Christmas bonuses are a standard part of Jamaica retail employment. Payroll Jamaica processes bonus payments with the correct PAYE treatment — calculating income tax on the total annual earnings including the bonus — and generates updated payslips showing the bonus amount clearly.",
                },
                {
                  title: "Sales incentive tracking",
                  desc: "Track individual and team sales incentives against targets and automatically include qualifying payments in the relevant pay run. Incentive payments are subject to PAYE and other statutory deductions, which Payroll Jamaica applies correctly to keep your filings accurate.",
                },
                {
                  title: "Multi-store payroll management",
                  desc: "Run payroll for a downtown Kingston store, a Half Way Tree branch, a Montego Bay plaza location, and a Portmore Centre outlet from a single account. Each store operates as a cost centre with its own staff list, while consolidated payroll reporting spans the entire business.",
                },
                {
                  title: "Bank payment files for Jamaican banks",
                  desc: "Generate batch payment files formatted for NCB, JN Bank, Scotiabank, Sagicor Bank, and FirstCaribbean. Upload a single file to pay all store staff in one transaction. No manual EFT entry required — pay day runs as smoothly for 5 employees as for 200.",
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
              Built for how Jamaica&apos;s retail sector actually operates
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Supermarkets and wholesale operators",
                  desc: "Jamaica's supermarket operators — including Hi-Lo Food Stores, Loshusan Supermarket, and MegaMart — manage large hourly workforces with shift rosters, public holiday trading, and high seasonal staff turnover. Payroll Jamaica handles the scale and complexity of supermarket payroll with the statutory compliance Jamaican food retail requires.",
                },
                {
                  title: "Kingston and St. Andrew retail businesses",
                  desc: "The retail corridor from downtown Kingston through Half Way Tree to Constant Spring represents Jamaica's highest concentration of retail employment. Shops, pharmacies, hardware stores, Chinese wholesale operations, and clothing retailers across this corridor have payroll structures ranging from single-owner operations to multi-branch chains — all served by Payroll Jamaica.",
                },
                {
                  title: "Parish retail and Montego Bay commercial centres",
                  desc: "Retail businesses in Montego Bay's Freeport area and Catherine Hall, Ocho Rios's Main Street, and the growing commercial centres in Portmore and Spanish Town need payroll software that works for their Jamaica-specific tax obligations — not a generic tool adapted from a US or UK platform. Payroll Jamaica is built for this from the ground up.",
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
                { label: "Small Business Payroll", href: "/small-business-payroll-jamaica" },
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
                How do I calculate holiday pay for retail workers in Jamaica?
              </h2>
              <p>
                Under Jamaica&apos;s Holidays (Public General) Act, employees who work on a designated public holiday are entitled to double their normal daily or hourly rate. Payroll Jamaica identifies public holidays from the built-in Jamaica public holiday calendar and automatically applies the 2x rate to hours recorded on those dates. You do not need to manually flag public holiday shifts — the system applies the correct rate as long as hours are recorded against the relevant date. The doubled amount is included in gross pay before statutory deductions are calculated.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Does the software handle commission-based retail staff in Jamaica?
              </h2>
              <p>
                Yes. Commission pay is configured as a pay component that combines with base salary. You can define commission as a flat amount, a percentage of sales, or a tiered structure where the rate increases above certain sales thresholds. Each pay period, you enter or import the qualifying sales figures and the system calculates the commission amount, adds it to base pay, and applies PAYE, NIS, NHT, and Education Tax to the combined gross. Payslips show the breakdown between base pay and commission earnings clearly.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Can I run payroll for multiple store locations in Jamaica?
              </h2>
              <p>
                Yes. Payroll Jamaica supports multi-location retail payroll under a single account. Each store is set up as a separate cost centre or department. Staff are assigned to their primary location, and payroll is run for all locations simultaneously or location by location, depending on your preference. Consolidated payroll reports cover the entire business, while location-specific reports show the wage cost for each store. This is useful for retail operators with branches across Kingston, Portmore, Montego Bay, and other parishes.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How do I handle Christmas season temporary staff in Jamaica?
              </h2>
              <p>
                Jamaica&apos;s retail sector typically takes on significant numbers of temporary and casual staff for the November–January Christmas trading period. In Payroll Jamaica, temporary staff are added with a contract end date and their employment type set to temporary or casual. Statutory deductions are applied correctly for their employment type. When the contract ends, the system can generate the final payslip including any accrued vacation pay or gratuity owed under Jamaican law. Rehiring the same temp staff the following Christmas is a simple record reactivation.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-3xl font-semibold">
              Ready to run retail payroll properly in Jamaica?
            </h2>
            <p className="text-muted-foreground">
              Jamaica retail businesses trust Payroll Jamaica for commission pay, holiday double-time, and multi-store payroll — all automated.
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
        headline="Retail payroll software built for Jamaica"
        text="Commission pay, holiday double-time, multi-store support, and bank payment files — all automated."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Payroll Jamaica — Retail",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: canonical("/retail-payroll-jamaica"),
            description:
              "Retail payroll software built for Jamaica. Automates commission pay, public holiday double-time, part-time staff, Christmas bonuses, multi-store payroll, and bank payment files for Jamaican retail businesses.",
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
            applicationSubCategory: "Retail Payroll",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "Retail Payroll Jamaica",
                item: canonical("/retail-payroll-jamaica"),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I calculate holiday pay for retail workers in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under Jamaica's Holidays (Public General) Act, employees working on public holidays receive double their normal rate. Payroll Jamaica applies the 2x rate automatically from the built-in Jamaica public holiday calendar.",
                },
              },
              {
                "@type": "Question",
                name: "Does the software handle commission-based retail staff in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Commission is configured as a pay component combined with base salary. The system calculates commission from sales figures, adds it to base pay, and applies all statutory deductions to the combined gross.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run payroll for multiple store locations in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Each store is a separate cost centre. Payroll runs for all locations simultaneously, with consolidated reports across the business and location-specific wage cost reports per store.",
                },
              },
              {
                "@type": "Question",
                name: "How do I handle Christmas season temporary staff in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Temporary Christmas staff are added with a contract end date and temporary employment type. Statutory deductions are applied correctly. Final payslips including accrued vacation pay are generated automatically when the contract ends.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
