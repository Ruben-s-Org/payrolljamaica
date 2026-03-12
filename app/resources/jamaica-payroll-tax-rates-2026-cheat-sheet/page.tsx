import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "Jamaica Payroll Tax Rates 2026 — Free Cheat Sheet | Payroll Jamaica",
  description:
    "Free Jamaica payroll tax rates cheat sheet for 2026. All PAYE bands, NIS, NHT, Education Tax, and HEART/NSTA rates on one page. Download the PDF or print — updated for the 2026 budget.",
  keywords: [
    "Jamaica payroll tax rates 2026",
    "Jamaica PAYE rates 2026",
    "NIS rates Jamaica 2026",
    "NHT contribution rates Jamaica",
    "Education Tax Jamaica 2026",
    "HEART NSTA levy Jamaica",
    "Jamaica statutory deductions cheat sheet",
    "payroll rates Jamaica PDF",
    "Jamaica employer tax rates",
    "TAJ payroll rates 2026",
  ],
  alternates: {
    canonical: canonical("/resources/jamaica-payroll-tax-rates-2026-cheat-sheet"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jamaica Payroll Tax Rates 2026 — Free Cheat Sheet",
    description:
      "One-page reference with every Jamaica payroll rate: PAYE bands, NIS, NHT, Education Tax, HEART/NSTA. Free PDF download.",
    url: canonical("/resources/jamaica-payroll-tax-rates-2026-cheat-sheet"),
    type: "article",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Jamaica Payroll Tax Rates 2026 Cheat Sheet — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Tax Rates 2026 — Free Cheat Sheet",
    description:
      "All Jamaica payroll rates on one page: PAYE, NIS, NHT, Education Tax, HEART/NSTA. Free PDF.",
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Payroll Tax Rates 2026 Cheat Sheet",
      item: `${siteConfig.url}/resources/jamaica-payroll-tax-rates-2026-cheat-sheet`,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jamaica Payroll Tax Rates 2026 — Free Cheat Sheet",
  description:
    "Complete one-page reference of all Jamaica payroll tax rates for 2026: PAYE income tax bands, NIS, NHT, Education Tax, and HEART/NSTA levy.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
};

export default function JamaicaPayrollTaxRates2026CheatSheet() {
  const breadcrumbJsonLd = safeJsonLd(breadcrumbSchema);
  const articleJsonLd = safeJsonLd(articleSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="w-full px-4 py-12 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                &larr; Back to Resources
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Free Cheat Sheet &middot; 2026 Tax Year
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Jamaica Payroll Tax Rates 2026<br />
              <span className="text-muted-foreground">Free Cheat Sheet</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Every payroll rate Jamaican employers need on a single page &mdash; PAYE income tax bands,
              NIS, NHT, Education Tax, and HEART/NSTA levy. Print it, pin it to your wall, or download the PDF.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintButton />
              <a
                href="#get-pdf"
                className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity print:hidden"
              >
                Download PDF Version &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Rate Cards */}
        <section className="w-full px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* PAYE */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-foreground text-background px-6 py-4">
                <h2 className="text-lg font-bold">PAYE &mdash; Pay As You Earn (Income Tax)</h2>
                <p className="text-sm opacity-80">Deducted from employee wages. Employer remits to TAJ by the 14th of each month.</p>
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
                      <td className="py-3 text-muted-foreground">Monthly threshold (&divide;12)</td>
                      <td className="py-3 text-right font-semibold">JMD $125,008</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Weekly threshold (&divide;52)</td>
                      <td className="py-3 text-right font-semibold">JMD $28,848</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Band 1: first $6,000,000 above threshold</td>
                      <td className="py-3 text-right font-semibold">25%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Band 2: everything above $6,000,000 above threshold</td>
                      <td className="py-3 text-right font-semibold">30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Who pays</td>
                      <td className="py-3 text-right font-semibold">Employee only</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Earnings ceiling</td>
                      <td className="py-3 text-right font-semibold">None &mdash; applies to all earnings</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Monthly remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Annual return (SO1)</td>
                      <td className="py-3 text-right font-semibold">March 31</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Late penalty</td>
                      <td className="py-3 text-right font-semibold text-red-600 dark:text-red-400">10% surcharge + 1.5%/month interest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* NIS */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">NIS &mdash; National Insurance Scheme</h2>
                <p className="text-sm text-muted-foreground">Social security. Provides sickness, maternity, retirement, and invalidity benefits.</p>
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
                      <td className="py-3 text-right font-semibold">3.0% of insurable wages</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3.0% of insurable wages</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total NIS cost</td>
                      <td className="py-3 text-right font-semibold">6.0%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Insurable wage ceiling (annual)</td>
                      <td className="py-3 text-right font-semibold">JMD $5,000,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Monthly ceiling (&divide;12)</td>
                      <td className="py-3 text-right font-semibold">JMD $416,667</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Coverage</td>
                      <td className="py-3 text-right font-semibold">All employed persons aged 18&ndash;65</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Portal</td>
                      <td className="py-3 text-right font-semibold">nis.gov.jm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* NHT */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">NHT &mdash; National Housing Trust</h2>
                <p className="text-sm text-muted-foreground">Funds affordable housing loans for Jamaican workers.</p>
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
                      <td className="py-3 text-right font-semibold">2.0% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3.0% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total NHT cost</td>
                      <td className="py-3 text-right font-semibold">5.0%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Earnings ceiling</td>
                      <td className="py-3 text-right font-semibold">None &mdash; applies to all earnings</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Eligibility for benefits</td>
                      <td className="py-3 text-right font-semibold">52+ weekly contributions</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Portal</td>
                      <td className="py-3 text-right font-semibold">nht.gov.jm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Education Tax */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">Education Tax</h2>
                <p className="text-sm text-muted-foreground">Funds public education. Remit to TAJ alongside PAYE each month.</p>
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
                      <td className="py-3 text-right font-semibold">3.50% of gross salary</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Total Education Tax cost</td>
                      <td className="py-3 text-right font-semibold">5.75%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Earnings ceiling</td>
                      <td className="py-3 text-right font-semibold">None &mdash; applies to all earnings</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month (with PAYE)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* HEART/NSTA */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-4">
                <h2 className="text-lg font-bold">HEART/NSTA Levy</h2>
                <p className="text-sm text-muted-foreground">National training levy. Employer-only contribution for workforce development.</p>
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
                      <td className="py-3 text-right font-semibold">None</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Employer contribution</td>
                      <td className="py-3 text-right font-semibold">3.0% of gross payroll</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Who must pay</td>
                      <td className="py-3 text-right font-semibold">Employers with monthly payroll above JMD $292,813.50</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Earnings ceiling</td>
                      <td className="py-3 text-right font-semibold">None &mdash; applies to total payroll</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Remittance deadline</td>
                      <td className="py-3 text-right font-semibold">14th of following month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total cost summary */}
            <div className="bg-foreground text-background rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">Total Employer Cost Summary (Per Employee)</h2>
              <p className="text-sm opacity-80 mb-4">
                Mandatory employer-side contributions on top of gross salary:
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-background/20">
                    <th className="text-left py-2 font-semibold opacity-80">Contribution</th>
                    <th className="text-right py-2 font-semibold opacity-80">Employee Pays</th>
                    <th className="text-right py-2 font-semibold opacity-80">Employer Pays</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background/10">
                  <tr>
                    <td className="py-3">PAYE (income tax)</td>
                    <td className="py-3 text-right">25% / 30%</td>
                    <td className="py-3 text-right">&mdash;</td>
                  </tr>
                  <tr>
                    <td className="py-3">NIS</td>
                    <td className="py-3 text-right">3.0%</td>
                    <td className="py-3 text-right">3.0%</td>
                  </tr>
                  <tr>
                    <td className="py-3">NHT</td>
                    <td className="py-3 text-right">2.0%</td>
                    <td className="py-3 text-right">3.0%</td>
                  </tr>
                  <tr>
                    <td className="py-3">Education Tax</td>
                    <td className="py-3 text-right">2.25%</td>
                    <td className="py-3 text-right">3.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3">HEART/NSTA</td>
                    <td className="py-3 text-right">&mdash;</td>
                    <td className="py-3 text-right">3.0%</td>
                  </tr>
                  <tr className="border-t-2 border-background/30">
                    <td className="py-3 font-bold">Total statutory overhead</td>
                    <td className="py-3 text-right font-bold">7.25% + PAYE</td>
                    <td className="py-3 text-right font-bold">12.5%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs opacity-60 mt-4">
                Example: An employee earning JMD $200,000/month costs the employer an additional JMD $25,000/month
                in statutory contributions (NIS + NHT + EdTax + HEART). The employee&apos;s deductions (NIS + NHT + EdTax + PAYE)
                reduce their take-home pay.
              </p>
            </div>

            {/* Quick reference card */}
            <div className="border border-border rounded-xl p-6 bg-muted/20">
              <h2 className="text-lg font-bold mb-4">Quick Reference: Key Numbers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">PAYE threshold (annual)</span>
                    <span className="font-semibold">JMD $1,500,096</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">PAYE threshold (monthly)</span>
                    <span className="font-semibold">JMD $125,008</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">NIS ceiling (annual)</span>
                    <span className="font-semibold">JMD $5,000,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">NIS ceiling (monthly)</span>
                    <span className="font-semibold">JMD $416,667</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">Monthly remittance deadline</span>
                    <span className="font-semibold">14th of following month</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">SO1 annual return deadline</span>
                    <span className="font-semibold">March 31</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">HEART/NSTA threshold</span>
                    <span className="font-semibold">JMD $292,813.50/mo</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">Total employer overhead</span>
                    <span className="font-semibold">12.5% of gross</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email capture for PDF */}
            <div id="get-pdf" className="bg-muted/40 border-2 border-foreground/20 rounded-xl p-8 text-center print:hidden">
              <span className="text-5xl block mb-4">📄</span>
              <h2 className="text-2xl font-bold mb-2">Get the PDF Cheat Sheet</h2>
              <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
                All the rates above, formatted as a beautiful one-page PDF you can print, pin to your wall,
                or share with your accountant. Updated for the 2026 Jamaica budget.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Enter your email and we&apos;ll send it to your inbox instantly &mdash; free, no strings attached.
              </p>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send me the free PDF &rarr;
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. We also send occasional Jamaica payroll compliance updates.
              </p>
            </div>

            {/* SEO content */}
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  Why do Jamaica payroll tax rates matter for employers?
                </h2>
                <p>
                  Every Jamaican employer is legally required to deduct and remit statutory contributions on behalf of their employees.
                  Getting the rates wrong &mdash; even by a fraction &mdash; means you are either shortchanging employees or exposing
                  your business to penalties from Tax Administration Jamaica (TAJ), the National Insurance Scheme, or the National
                  Housing Trust. The rates on this page are current as of the 2026 Jamaica national budget.
                </p>
              </div>
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  How often do Jamaica payroll rates change?
                </h2>
                <p>
                  The Ministry of Finance and the Public Service announces statutory rate changes during the annual budget presentation
                  (typically in February or March). The PAYE income tax threshold, NIS ceiling, and HEART/NSTA threshold are the rates
                  most likely to change. NIS, NHT, and Education Tax percentage rates have remained stable for several years, but employers
                  should monitor mof.gov.jm and taj.gov.jm for any mid-year adjustments.
                </p>
              </div>
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  What happens if I remit late or use the wrong rates?
                </h2>
                <p>
                  TAJ charges a 10% surcharge on late PAYE remittances plus 1.5% monthly interest on any outstanding balance.
                  NIS and NHT also impose penalties for late or incorrect remittances. Using outdated rates can trigger
                  under-remittance, which TAJ may treat the same as a late payment. The safest approach is to automate your
                  payroll calculations with software that updates rates automatically.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-xl p-6 text-center print:hidden">
              <p className="font-bold text-lg mb-2">Never worry about rates again</p>
              <p className="text-sm opacity-80 mb-4">
                PayrollJamaica automatically applies the correct statutory rates every pay run.
                PAYE, NIS, NHT, Education Tax, and HEART/NSTA &mdash; calculated and remitted for you.
              </p>
              <a
                href="/calculator"
                className="inline-block bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mr-3"
              >
                Try Free Calculator &rarr;
              </a>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block border border-background/30 font-semibold px-6 py-3 rounded-lg hover:bg-background/10 transition-colors"
              >
                Get Started Free
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
