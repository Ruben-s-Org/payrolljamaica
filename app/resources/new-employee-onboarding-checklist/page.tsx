import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "New Employee Onboarding Compliance Checklist Jamaica 2026 | Payroll Jamaica",
  description:
    "Free Jamaica employer checklist for onboarding new employees: NIS registration, NHT registration, TRN requirements, statutory deduction setup, and employment contract requirements. Stay compliant from day one.",
  keywords: [
    "new employee onboarding Jamaica",
    "NIS registration employer Jamaica",
    "NHT registration new employee",
    "TRN employee Jamaica",
    "Jamaica employment compliance checklist",
    "new hire checklist Jamaica",
  ],
  alternates: {
    canonical: canonical("/resources/new-employee-onboarding-checklist"),
  },
  robots: { index: true, follow: true },
};

const jsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "New Employee Onboarding Compliance Checklist — Jamaica 2026",
  description:
    "Complete employer checklist for onboarding new employees in Jamaica, covering NIS, NHT, TRN, PAYE, and legal requirements.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
});

export default function NewEmployeeOnboardingChecklist() {
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
              New Employee Onboarding<br />
              <span className="text-muted-foreground">Compliance Checklist — Jamaica</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Everything you must do as a Jamaican employer when hiring a new employee.
              From NIS registration to PAYE setup — get it right from day one to avoid penalties.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity print:hidden"
              >
                <span>🖨️</span> Print / Save as PDF
              </button>
              <a
                href="/resources/march-31-paye-checklist"
                className="inline-flex items-center gap-2 border border-border font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors print:hidden"
              >
                PAYE Filing Checklist →
              </a>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Before First Day */}
            <div>
              <h2 className="text-xl font-bold mb-1">Before the First Day</h2>
              <p className="text-sm text-muted-foreground mb-4">Legal and documentation requirements</p>
              <div className="space-y-3">
                {[
                  "Issue a written employment contract or letter of appointment (required by law)",
                  "Include: job title, salary, start date, probation period, working hours, leave entitlement",
                  "Obtain employee's TRN (Taxpayer Registration Number) — required to deduct PAYE",
                  "Obtain employee's NIS number — required to remit NIS contributions",
                  "Obtain employee's NHT number — required to remit NHT contributions",
                  "Collect employee's TD1 form (Tax Declaration form for PAYE calculation)",
                  "Collect a valid government-issued ID (passport, driver's licence, national ID)",
                  "Collect proof of address (utility bill, bank statement — for HR records)",
                  "Collect bank account details for salary payment (branch, account number)",
                  "Confirm right to work in Jamaica (citizenship, work permit, or permanent residency)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* NIS Registration */}
            <div>
              <h2 className="text-xl font-bold mb-1">NIS — National Insurance Scheme</h2>
              <p className="text-sm text-muted-foreground mb-4">Register employee within 7 days of employment start</p>
              <div className="space-y-3">
                {[
                  "If employee has no NIS number: complete NIS Form 1 at any NIS office or nis.gov.jm",
                  "Submit Form 1 with: employee name, DOB, address, employment start date",
                  "Employee will receive an NIS number — record it in your payroll system",
                  "Begin deducting 3% NIS from employee's first pay",
                  "Begin contributing 3% NIS as employer from employee's first pay",
                  "Set up remittance to NIS via nis.gov.jm employer portal (deadline: 14th monthly)",
                  "Maintain NIS contribution records in employee file for 7 years",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* NHT Registration */}
            <div>
              <h2 className="text-xl font-bold mb-1">NHT — National Housing Trust</h2>
              <p className="text-sm text-muted-foreground mb-4">Register employee before first payroll run</p>
              <div className="space-y-3">
                {[
                  "Log into NHT employer portal at nht.gov.jm",
                  "Add employee to your NHT employer account using their NHT number and TRN",
                  "If employee has no NHT number: assist them to register at nht.gov.jm or any NHT office",
                  "Begin deducting 2% NHT from employee's gross salary",
                  "Begin contributing 3% NHT as employer from employee's gross salary",
                  "Set up monthly NHT remittance via nht.gov.jm (deadline: 14th monthly)",
                  "NHT contributions make employees eligible for housing loans — inform new hires",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* PAYE Setup */}
            <div>
              <h2 className="text-xl font-bold mb-1">PAYE — Income Tax Setup</h2>
              <p className="text-sm text-muted-foreground mb-4">Set up correctly to avoid under/over-deduction</p>
              <div className="space-y-3">
                {[
                  "Collect employee's TD1 form — determines correct PAYE deduction amount",
                  "Review TD1 for: number of dependants, pension contributions, other deductions claimed",
                  "Calculate monthly PAYE based on annual salary minus $1,500,096 threshold (÷12 = $125,008)",
                  "Apply 25% rate on income above threshold up to first $6M; 30% above $6M",
                  "Add employee to your TAJ employer PAYE account",
                  "Set up PAYE remittance at taj.gov.jm (deadline: 14th of following month)",
                  "Prepare to issue P45 certificate at year-end (or when employee leaves)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Education Tax */}
            <div>
              <h2 className="text-xl font-bold mb-1">Education Tax</h2>
              <p className="text-sm text-muted-foreground mb-4">Deduct and remit via TAJ alongside PAYE</p>
              <div className="space-y-3">
                {[
                  "Deduct 2.25% Education Tax from employee's gross salary each month",
                  "Contribute 3.5% Education Tax as employer on employee's gross salary",
                  "Remit Education Tax to TAJ by 14th of each month (combined with PAYE remittance)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* HR Records */}
            <div>
              <h2 className="text-xl font-bold mb-1">HR Records & Compliance</h2>
              <p className="text-sm text-muted-foreground mb-4">Required record-keeping under Jamaica labour law</p>
              <div className="space-y-3">
                {[
                  "Create employee file containing: contract, ID, TRN, NIS, NHT, TD1, bank details",
                  "Record employee start date, salary, and position in payroll system",
                  "Set up annual leave accrual (minimum 2 weeks/year under Employment (Termination & Redundancy) Act)",
                  "Note probation period end date (typically 3–6 months)",
                  "Brief employee on payslip format — they should understand all deductions",
                  "Provide employee handbook or workplace policies if applicable",
                  "Retain all HR records for minimum 7 years (TAJ audit requirement)",
                  "Register employer with Ministry of Labour if not already registered (10+ employees)",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quick ref */}
            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <h2 className="text-lg font-bold mb-4">Quick Reference: Registration Portals</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">NIS registration & remittance</span>
                  <span className="font-semibold">nis.gov.jm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">NHT employer portal</span>
                  <span className="font-semibold">nht.gov.jm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">PAYE & Education Tax (TAJ)</span>
                  <span className="font-semibold">taj.gov.jm</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">TRN application</span>
                  <span className="font-semibold">taj.gov.jm</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-xl p-6 text-center print:hidden">
              <p className="font-bold text-lg mb-2">Automate all of this</p>
              <p className="text-sm opacity-80 mb-4">
                PayrollJamaica handles NIS, NHT, PAYE, and Education Tax calculations automatically.
                Add a new employee in 2 minutes and your first payslip is ready.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started →
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
