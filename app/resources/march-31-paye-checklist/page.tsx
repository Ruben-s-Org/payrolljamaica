import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "March 31 PAYE Filing Checklist 2026 — Free Download | Payroll Jamaica",
  description:
    "Free March 31 PAYE filing checklist for Jamaican employers. Step-by-step guide for SO1 submission to Tax Administration Jamaica (TAJ). Avoid penalties with this 2026 deadline checklist.",
  keywords: [
    "March 31 PAYE checklist Jamaica",
    "SO1 filing Jamaica",
    "PAYE deadline Jamaica 2026",
    "Tax Administration Jamaica checklist",
    "payroll year-end Jamaica",
    "TAJ PAYE submission",
  ],
  alternates: {
    canonical: canonical("/resources/march-31-paye-checklist"),
  },
  robots: { index: true, follow: true },
};

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "March 31 PAYE Filing Checklist — Jamaica 2026",
  description:
    "Step-by-step checklist for Jamaican employers to complete PAYE SO1 annual return by March 31 deadline.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  step: [
    { "@type": "HowToStep", name: "Reconcile payroll records" },
    { "@type": "HowToStep", name: "Calculate total emoluments" },
    { "@type": "HowToStep", name: "Complete SO1 form" },
    { "@type": "HowToStep", name: "Submit to TAJ by March 31" },
  ],
});

export default function March31PAYEChecklist() {
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
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Resources
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Free Checklist · Updated March 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              March 31 PAYE Filing Checklist<br />
              <span className="text-muted-foreground">for Jamaican Employers</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Every step you need to complete your SO1 Annual Return and submit to Tax Administration Jamaica (TAJ)
              before the March 31 deadline. Missing this deadline triggers penalties and interest.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintButton />
              <a
                href="/calculator"
                className="inline-flex items-center gap-2 border border-border font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors print:hidden"
              >
                Open Payroll Calculator →
              </a>
            </div>
          </div>
        </section>

        {/* Deadline Warning */}
        <section className="w-full px-4 py-6 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-800 print:bg-white">
          <div className="max-w-3xl mx-auto flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-amber-900 dark:text-amber-200">Deadline: March 31, 2026</p>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Late filing penalty: 10% of PAYE due + 1.5% monthly interest on outstanding amounts.
                The TAJ does not grant extensions for SO1 Annual Returns.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Phase 1 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Phase 1: Reconcile Payroll Records</h2>
              <p className="text-sm text-muted-foreground mb-4">Complete by March 15</p>
              <div className="space-y-3">
                {[
                  "Collect all 12 monthly payroll registers (April 2025 – March 2026)",
                  "Reconcile total emoluments paid per employee against payslips",
                  "Confirm total PAYE deducted matches monthly P11 deduction summaries",
                  "Reconcile PAYE remittances against TAJ receipts (14th of each month)",
                  "Identify any employees who left during the year — confirm final pay was processed",
                  "Collect NIS deduction records from NIS online portal (nis.gov.jm)",
                  "Collect NHT records from NHT employer portal (nht.gov.jm)",
                  "Reconcile Education Tax deductions (2.25% employee, 3.5% employer)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Phase 2: Prepare SO1 Annual Return</h2>
              <p className="text-sm text-muted-foreground mb-4">Complete by March 22</p>
              <div className="space-y-3">
                {[
                  "Download SO1 form from TAJ website (taj.gov.jm) — use current year version",
                  "Enter employer TRN (Taxpayer Registration Number)",
                  "Enter business name and registered address exactly as per TAJ records",
                  "List every employee: name, TRN, NIS number, total emoluments, PAYE deducted",
                  "Include all benefit-in-kind values (company cars, housing allowances, etc.)",
                  "Calculate total emoluments for all employees (Box 1)",
                  "Calculate total PAYE deducted for all employees (Box 2)",
                  "Calculate total PAYE remitted during the year (Box 3)",
                  "Calculate any PAYE balance due or overpayment (Box 4 = Box 2 – Box 3)",
                  "Attach individual P45 certificates for each employee",
                  "Director's fees: ensure reported separately on SO1",
                  "Sign the declaration section (must be signed by director/proprietor)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Phase 3: Submit to TAJ</h2>
              <p className="text-sm text-muted-foreground mb-4">Before March 31</p>
              <div className="space-y-3">
                {[
                  "Log into TAJ e-Services portal at taj.gov.jm (create account if not registered)",
                  "Navigate to: PAYE → Annual Return → SO1 Submission",
                  "Upload completed SO1 form (PDF or online form entry)",
                  "If balance due: pay via TAJ portal, bank transfer, or Scotia/NCB online banking",
                  "Download and save your TAJ submission confirmation receipt",
                  "File paper copy at nearest TAJ office if you cannot submit online",
                  "Issue P45 certificates to all employees (required by law) by March 31",
                  "File copies of all P45 certificates with your SO1 submission",
                  "Record submission confirmation number in your payroll records",
                  "Set reminder for April 14 — first PAYE remittance of new tax year",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Phase 4 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Phase 4: Prepare for New Tax Year</h2>
              <p className="text-sm text-muted-foreground mb-4">April 1 – April 14</p>
              <div className="space-y-3">
                {[
                  "Reset payroll system to 2026/2027 tax year (April 1 start)",
                  "Update PAYE threshold to JMD $1,500,096 (2026 budget)",
                  "Update NIS ceiling — check NIS portal for current year ceiling",
                  "Obtain new TD1 (Employee Tax Declaration) from any new employees",
                  "Collect updated TD1 from existing employees if circumstances changed",
                  "Set up new salary sacrifice / pension deduction amounts if changed",
                  "Submit April payroll and remit PAYE by April 14",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Key rates */}
            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <h2 className="text-lg font-bold mb-4">2026 Statutory Rates Reference</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">PAYE</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Annual threshold: JMD $1,500,096</li>
                    <li>Rate on first $6M above threshold: 25%</li>
                    <li>Rate above $6M: 30%</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">NIS</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Employee: 3% of insurable wages</li>
                    <li>Employer: 3% of insurable wages</li>
                    <li>Remit to: NIS online portal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">NHT</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Employee: 2% of gross salary</li>
                    <li>Employer: 3% of gross salary</li>
                    <li>Remit to: NHT employer portal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Education Tax</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Employee: 2.25% of gross salary</li>
                    <li>Employer: 3.5% of gross salary</li>
                    <li>Remit to: TAJ (same as PAYE)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-xl p-6 text-center print:hidden">
              <p className="font-bold text-lg mb-2">Want payroll handled for you?</p>
              <p className="text-sm opacity-80 mb-4">
                PayrollJamaica handles SO1 filing, PAYE remittances, and all statutory obligations for you.
                From JMD $15,000/month for up to 5 employees.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                See Pricing →
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
