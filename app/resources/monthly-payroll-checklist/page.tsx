import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "Monthly Payroll Processing Checklist Jamaica 2026 — Free Download | Payroll Jamaica",
  description:
    "Free monthly payroll checklist for Jamaican business owners. Step-by-step guide to processing payroll, calculating PAYE, NIS, NHT, Education Tax, and remitting by the 14th deadline.",
  keywords: [
    "monthly payroll checklist Jamaica",
    "payroll processing Jamaica",
    "Jamaica payroll steps",
    "PAYE remittance checklist",
    "14th deadline Jamaica payroll",
    "payroll compliance Jamaica",
  ],
  alternates: {
    canonical: canonical("/resources/monthly-payroll-checklist"),
  },
  robots: { index: true, follow: true },
};

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Monthly Payroll Processing Checklist — Jamaica 2026",
  description:
    "Step-by-step monthly payroll processing guide for Jamaican business owners and HR teams.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  totalTime: "PT2H",
  estimatedCost: { "@type": "MonetaryAmount", currency: "JMD", value: "0" },
});

export default function MonthlyPayrollChecklist() {
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
              Free Checklist · Updated 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Monthly Payroll Processing<br />
              <span className="text-muted-foreground">Checklist for Jamaican Employers</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Run payroll the right way every month. This step-by-step checklist covers everything from
              collecting timesheets to remitting statutory deductions by the 14th deadline.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintButton />
              <a
                href="/calculator"
                className="inline-flex items-center gap-2 border border-border font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors print:hidden"
              >
                Payroll Calculator →
              </a>
            </div>
          </div>
        </section>

        {/* Timeline note */}
        <section className="w-full px-4 py-6 bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-800 print:bg-white">
          <div className="max-w-3xl mx-auto flex items-start gap-3">
            <span className="text-2xl">📅</span>
            <div>
              <p className="font-bold text-blue-900 dark:text-blue-200">Key Monthly Deadline: 14th of Every Month</p>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                PAYE, Education Tax, NIS, and NHT must all be remitted to the respective agencies by the 14th.
                Missing this triggers penalty charges and interest. Work backwards from the 14th when scheduling payroll.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Week 1 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Week 1 — Collect Data (Days 1–7)</h2>
              <p className="text-sm text-muted-foreground mb-4">The earlier you start, the fewer errors</p>
              <div className="space-y-3">
                {[
                  "Collect timesheets or attendance records for all hourly/weekly employees",
                  "Confirm all approved overtime hours (get manager sign-off)",
                  "Collect approved leave requests for the month — verify against leave balances",
                  "Note any new employees who started this month (ensure onboarding complete)",
                  "Note any employees who left this month (calculate final pay including termination pay if required)",
                  "Collect commission statements or bonus authorizations",
                  "Confirm any salary changes effective this month (increments, promotions, adjustments)",
                  "Check for any garnishments or court-ordered deductions",
                  "Note any employees on unpaid leave — exclude from payroll or adjust accordingly",
                  "Confirm any advances or loans to deduct this month",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div>
              <h2 className="text-xl font-bold mb-1">Week 2 — Calculate Payroll (Days 8–12)</h2>
              <p className="text-sm text-muted-foreground mb-4">Must be done before the 14th to allow time to fix errors</p>
              <div className="space-y-3">
                {[
                  "Calculate gross pay for each employee (base + overtime + commission + bonus)",
                  "Calculate PAYE deduction: apply 2026 threshold ($125,008/month), then 25%/30% rate",
                  "Verify PAYE against each employee's TD1 — check any special deductions claimed",
                  "Calculate NIS: 3% of insurable wages (employee portion)",
                  "Calculate NHT: 2% of gross salary (employee portion)",
                  "Calculate Education Tax: 2.25% of gross salary (employee portion)",
                  "Calculate any other deductions: pension, loan repayments, health insurance",
                  "Calculate net pay: gross pay minus all deductions",
                  "Calculate employer contributions: NIS 3%, NHT 3%, Education Tax 3.5%",
                  "Run payroll report and review total wages, total deductions, total net pay",
                  "Cross-check against prior month — flag any unusual variances",
                  "Get owner/director sign-off on payroll totals before processing",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pay day */}
            <div>
              <h2 className="text-xl font-bold mb-1">Pay Day — Process Payments</h2>
              <p className="text-sm text-muted-foreground mb-4">Before the 14th deadline</p>
              <div className="space-y-3">
                {[
                  "Process salary payments via bank transfer (direct to employee accounts)",
                  "Issue payslips to every employee (required by law — can be digital or paper)",
                  "Payslip must show: gross pay, each deduction amount, net pay, employer contributions",
                  "For employees paid in cash: obtain signed receipt for each payment",
                  "Remit PAYE + Education Tax to TAJ via taj.gov.jm by the 14th",
                  "Remit NIS (employee + employer) to NIS via nis.gov.jm by the 14th",
                  "Remit NHT (employee + employer) to NHT via nht.gov.jm by the 14th",
                  "Download and save all remittance confirmation receipts",
                  "Record remittance reference numbers in payroll ledger",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Post-payroll */}
            <div>
              <h2 className="text-xl font-bold mb-1">Post-Payroll — Record-Keeping</h2>
              <p className="text-sm text-muted-foreground mb-4">Required for TAJ audits and year-end filing</p>
              <div className="space-y-3">
                {[
                  "File monthly payroll register in payroll ledger (physical or digital backup)",
                  "Update employee leave balances in HR system",
                  "Record any employee changes (new hires, departures, salary changes) in HR file",
                  "Update running total of each employee's year-to-date earnings and deductions",
                  "Reconcile bank statement: confirm all salary payments cleared",
                  "Confirm TAJ receipts match remittance amounts (check portal account balance)",
                  "Flag any discrepancies to correct in next month's payroll",
                  "Archive payroll records — retain for 7 years minimum",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Common mistakes */}
            <div className="border border-red-200 dark:border-red-800 rounded-xl p-6 bg-red-50 dark:bg-red-950/20">
              <h2 className="text-lg font-bold mb-4 text-red-900 dark:text-red-200">Common Payroll Mistakes to Avoid</h2>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Using last year&apos;s PAYE threshold — the 2026 threshold is $1,500,096 (not the 2025 figure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Forgetting employer-side contributions — NIS, NHT, and Education Tax have employer portions too</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Missing the 14th deadline — penalties apply immediately, no grace period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Not issuing payslips — this is a legal requirement, not optional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Deducting NIS on income above the insurable wage ceiling — check the ceiling annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0">✗</span>
                  <span>Not keeping records for 7 years — TAJ can audit back 7 years</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-xl p-6 text-center print:hidden">
              <p className="font-bold text-lg mb-2">Do all of this in 5 minutes instead of 2 hours</p>
              <p className="text-sm opacity-80 mb-4">
                PayrollJamaica automates every step on this checklist. Calculate, process, and remit
                in one click. Used by 200+ Jamaican businesses.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mr-3"
              >
                Start Free Trial →
              </a>
              <a
                href="/calculator"
                className="inline-block border border-background/30 font-semibold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
              >
                Free Calculator
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
