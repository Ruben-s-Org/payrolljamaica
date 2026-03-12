import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "Jamaica Employer Tax Rate Card 2026 — Free Reference | Payroll Jamaica",
  description:
    "Complete 2026 Jamaica employer tax rate card. PAYE, NIS, NHT, Education Tax rates, thresholds, and remittance deadlines. Free one-page reference for Jamaican employers and HR teams.",
  keywords: [
    "Jamaica employer tax rates 2026",
    "PAYE rates Jamaica 2026",
    "NIS rates Jamaica",
    "NHT rates Jamaica",
    "Education Tax Jamaica",
    "Jamaica statutory deductions 2026",
    "TAJ payroll rates",
  ],
  alternates: {
    canonical: canonical("/resources/jamaica-employer-tax-rates-2026"),
  },
  robots: { index: true, follow: true },
};

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jamaica Employer Tax Rate Card 2026",
  description:
    "Complete reference for 2026 Jamaica employer statutory deduction rates: PAYE, NIS, NHT, Education Tax.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  dateModified: "2026-03-01",
});

export default function JamaicaTaxRates2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="w-full px-4 py-12 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Resources
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Free Reference Card · 2026 Tax Year
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Jamaica Employer Tax Rate Card<br />
              <span className="text-muted-foreground">2026 Budget Year</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              All rates, thresholds, and remittance deadlines for Jamaican employers in one place.
              Updated for the 2026 national budget. Print and keep at your desk.
            </p>
            <PrintButton />
          </div>
        </section>

        {/* Rate Cards */}
        <section className="w-full px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* PAYE */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-foreground text-background px-6 py-4">
                <h2 className="text-lg font-bold">PAYE — Pay As You Earn</h2>
                <p className="text-sm opacity-80">Income tax deducted from employees. Remit to TAJ by 14th of each month.</p>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Item</th>
                      <th className="text-right py-2 font-semibold">Rate / Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 text-muted-foreground">Annual income tax threshold</td>
                      <td className="py-3 text-right font-semibold">JMD $1,500,096</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Monthly threshold (÷12)</td>
                      <td className="py-3 text-right font-semibold">JMD $125,008</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">PAYE rate (first $6M above threshold)</td>
                      <td className="py-3 text-right font-semibold">25%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">PAYE rate (above $6M above threshold)</td>
                      <td className="py-3 text-right font-semibold">30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Who pays</td>
                      <td className="py-3 text-right font-semibold">Employee only</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Annual return (SO1)</td>
                      <td className="py-3 text-right font-semibold">March 31</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Late payment penalty</td>
                      <td className="py-3 text-right font-semibold text-red-600 dark:text-red-400">10% + 1.5%/month interest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* NIS */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">NIS — National Insurance Scheme</h2>
                <p className="text-sm text-muted-foreground">Social security contributions. Remit to NIS by 14th of each month.</p>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Item</th>
                      <th className="text-right py-2 font-semibold">Rate / Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 text-muted-foreground">Employee contribution</td>
                      <td className="py-3 text-right font-semibold">3% of insurable wages</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3% of insurable wages</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total NIS cost</td>
                      <td className="py-3 text-right font-semibold">6% of insurable wages</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Insurable wage ceiling</td>
                      <td className="py-3 text-right font-semibold">Check NIS portal annually</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Coverage</td>
                      <td className="py-3 text-right font-semibold">All employees 18–65</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance portal</td>
                      <td className="py-3 text-right font-semibold">nis.gov.jm</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* NHT */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">NHT — National Housing Trust</h2>
                <p className="text-sm text-muted-foreground">Housing contributions. Remit to NHT by 14th of each month.</p>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Item</th>
                      <th className="text-right py-2 font-semibold">Rate / Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 text-muted-foreground">Employee contribution</td>
                      <td className="py-3 text-right font-semibold">2% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total NHT cost</td>
                      <td className="py-3 text-right font-semibold">5% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Applies to</td>
                      <td className="py-3 text-right font-semibold">All employees</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance portal</td>
                      <td className="py-3 text-right font-semibold">nht.gov.jm</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Education Tax */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">Education Tax</h2>
                <p className="text-sm text-muted-foreground">Remit to TAJ (same remittance as PAYE) by 14th of each month.</p>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Item</th>
                      <th className="text-right py-2 font-semibold">Rate / Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 text-muted-foreground">Employee contribution</td>
                      <td className="py-3 text-right font-semibold">2.25% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3.5% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total Education Tax cost</td>
                      <td className="py-3 text-right font-semibold">5.75% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total employer cost summary */}
            <div className="bg-foreground text-background rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">Total Employer Cost Summary</h2>
              <p className="text-sm opacity-80 mb-4">Employer-side contributions on top of gross salary:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-background/20">
                    <th className="text-left py-2 font-semibold opacity-80">Contribution</th>
                    <th className="text-right py-2 font-semibold opacity-80">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background/10">
                  <tr>
                    <td className="py-3">NIS (employer)</td>
                    <td className="py-3 text-right">3.0%</td>
                  </tr>
                  <tr>
                    <td className="py-3">NHT (employer)</td>
                    <td className="py-3 text-right">3.0%</td>
                  </tr>
                  <tr>
                    <td className="py-3">Education Tax (employer)</td>
                    <td className="py-3 text-right">3.5%</td>
                  </tr>
                  <tr className="border-t-2 border-background/30">
                    <td className="py-3 font-bold">Total employer overhead</td>
                    <td className="py-3 text-right font-bold">9.5% of gross salary</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs opacity-60 mt-4">
                Example: An employee earning JMD $150,000/month costs the employer JMD $14,250/month in statutory contributions
                (plus PAYE which is employee-side only).
              </p>
            </div>

            {/* Remittance calendar */}
            <div className="border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">2026 Remittance Deadline Calendar</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { month: "April 2026", date: "April 14" },
                  { month: "May 2026", date: "May 14" },
                  { month: "June 2026", date: "June 14" },
                  { month: "July 2026", date: "July 14" },
                  { month: "August 2026", date: "Aug 14" },
                  { month: "September 2026", date: "Sep 14" },
                  { month: "October 2026", date: "Oct 14" },
                  { month: "November 2026", date: "Nov 14" },
                  { month: "December 2026", date: "Dec 14" },
                  { month: "January 2027", date: "Jan 14" },
                  { month: "February 2027", date: "Feb 14" },
                  { month: "March 2027", date: "Mar 14" },
                ].map(({ month, date }) => (
                  <div key={month} className="bg-muted/40 rounded-lg p-3 text-sm">
                    <p className="text-muted-foreground text-xs">{month}</p>
                    <p className="font-semibold">{date}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                If the 14th falls on a weekend or public holiday, the deadline moves to the next business day.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-muted/30 rounded-xl p-6 text-center border border-border print:hidden">
              <p className="font-bold text-lg mb-2">Skip the manual calculations</p>
              <p className="text-sm text-muted-foreground mb-4">
                PayrollJamaica calculates all statutory deductions automatically and files your remittances on time.
              </p>
              <a
                href="/calculator"
                className="inline-block bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mr-3"
              >
                Try Free Calculator →
              </a>
              <a
                href="/pricing"
                className="inline-block border border-border font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                See Pricing
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
