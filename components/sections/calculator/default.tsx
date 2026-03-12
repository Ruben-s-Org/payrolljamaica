"use client";

import { useState, useRef, useCallback } from "react";
import {
  calculate,
  calculateMonthly,
  formatJMD,
  type PayFrequency,
  type PayrollResult,
} from "@/lib/payroll-calculator";
import { trackEvent } from "@/lib/plausible";
import { trackCalculatorUsage } from "@/lib/analytics";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";

const FREQUENCY_LABELS: Record<PayFrequency, string> = {
  monthly: "Monthly",
  fortnightly: "Fortnightly",
  weekly: "Weekly",
};

const PERIOD_LABELS: Record<PayFrequency, string> = {
  monthly: "month",
  fortnightly: "fortnight",
  weekly: "week",
};

const PERIODS_PER_YEAR: Record<PayFrequency, number> = {
  monthly: 12,
  fortnightly: 26,
  weekly: 52,
};

type Tab = "deductions" | "employer" | "ytd" | "compare";

export default function PayrollCalculator() {
  const [grossInput, setGrossInput] = useState("");
  const [frequency, setFrequency] = useState<PayFrequency>("monthly");
  const [result, setResult] = useState<PayrollResult | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("deductions");
  const [emailInput, setEmailInput] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [emailError, setEmailError] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  function handleCalculate() {
    const gross = parseFloat(grossInput.replace(/,/g, ""));
    if (isNaN(gross) || gross <= 0) {
      setError("Please enter a valid gross salary.");
      setResult(null);
      return;
    }
    if (gross > 50_000_000) {
      setError("Please enter a salary below JMD $50,000,000.");
      setResult(null);
      return;
    }
    setError("");
    setResult(calculate({ grossMonthly: gross, frequency }));
    trackEvent("Calculator Used", { frequency, gross });
    trackCalculatorUsage({ grossSalary: gross, frequency });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleCalculate();
  }

  function handlePrint() {
    window.print();
  }

  const handleEmailSubmit = useCallback(async () => {
    const email = emailInput.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "calculator-lead" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setEmailStatus("sent");
      trackEvent("Email Captured", { source: "calculator" });
    } catch (err: unknown) {
      setEmailStatus("error");
      setEmailError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }, [emailInput]);

  // Compute comparison across all frequencies
  function getComparison() {
    if (!result) return null;
    const freqs: PayFrequency[] = ["monthly", "fortnightly", "weekly"];
    return freqs.map((f) => {
      const r = calculate({ grossMonthly: result.grossMonthly, frequency: f });
      return r;
    });
  }

  // Compute YTD projection
  function getYtdProjection() {
    if (!result) return null;
    const annualGross = result.grossMonthly * 12;
    const monthlyCalc = calculateMonthly(result.grossMonthly);
    return {
      gross: annualGross,
      nis: monthlyCalc.employee.nis * 12,
      nht: monthlyCalc.employee.nht * 12,
      educationTax: monthlyCalc.employee.educationTax * 12,
      paye: monthlyCalc.employee.paye * 12,
      totalDeductions: monthlyCalc.employee.totalDeductions * 12,
      netPay: monthlyCalc.employee.netPay * 12,
      employerNis: monthlyCalc.employer.nisEmployer * 12,
      employerNht: monthlyCalc.employer.nhtEmployer * 12,
      employerEdTax: monthlyCalc.employer.educationTaxEmployer * 12,
      employerHeart: monthlyCalc.employer.heartLevy * 12,
      employerTotal: monthlyCalc.employer.totalEmployerCost * 12,
    };
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "deductions", label: "Deductions" },
    { id: "employer", label: "Employer Cost" },
    { id: "ytd", label: "Annual Projection" },
    { id: "compare", label: "Compare Frequencies" },
  ];

  return (
    <Section className="py-16 sm:py-24">
      <div className="max-w-container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 text-center print:hidden">
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              Jamaica Payroll Calculator
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Calculate PAYE, NIS, NHT, Education Tax and HEART levy instantly — free, no signup required.
              Updated for 2025/2026 rates.
            </p>
          </div>

          {/* Input card */}
          <div className="bg-card border-border rounded-2xl border p-6 shadow-sm sm:p-8 print:hidden">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Gross salary */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium" htmlFor="gross">
                  Gross Monthly Salary (JMD)
                </label>
                <input
                  id="gross"
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 150,000"
                  value={grossInput}
                  onChange={(e) => setGrossInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-lg border px-4 py-3 text-lg focus-visible:outline-none focus-visible:ring-2"
                />
                {error && <p className="text-destructive mt-1 text-sm">{error}</p>}
              </div>

              {/* Pay frequency */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium" id="frequency-label">Pay Frequency</label>
                <div className="flex gap-3" role="group" aria-labelledby="frequency-label">
                  {(["monthly", "fortnightly", "weekly"] as PayFrequency[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        frequency === f
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {FREQUENCY_LABELS[f]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-6 w-full" onClick={handleCalculate}>
              Calculate
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6" ref={printRef}>
              {/* Printable payslip header — only visible when printing */}
              <div className="hidden print:block print:mb-6">
                <div className="text-center border-b-2 border-black pb-4 mb-4">
                  <h1 className="text-2xl font-bold">Payroll Jamaica — Payslip Estimate</h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Generated {new Date().toLocaleDateString("en-JM", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <p className="text-sm text-gray-600">
                    Pay Frequency: {FREQUENCY_LABELS[result.frequency]} | Gross Monthly: {formatJMD(result.grossMonthly)}
                  </p>
                </div>
              </div>

              {/* Summary banner */}
              <div className="bg-primary/10 border-primary/20 rounded-2xl border p-6 text-center print:bg-gray-50 print:border-gray-300 print:rounded-none">
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide print:text-gray-600">
                  Take-Home Pay per {PERIOD_LABELS[result.frequency]}
                </p>
                <p className="text-primary mt-1 text-4xl font-bold print:text-black print:text-3xl">
                  {formatJMD(result.netPerPeriod)}
                </p>
                <p className="text-muted-foreground mt-1 text-sm print:text-gray-600">
                  Gross: {formatJMD(result.grossPerPeriod)} / {PERIOD_LABELS[result.frequency]}
                </p>
                <p className="text-muted-foreground mt-3 text-xs print:hidden">
                  With PayrollJamaica, this calculation takes 2 clicks instead of 20 minutes.
                </p>
              </div>

              {/* Quick action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 print:hidden">
                <a
                  href="#"
                  data-open-fillout="true"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity"
                  onClick={() => trackEvent("Save Results CTA", { type: "email" })}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email These Results
                </a>
                <button
                  type="button"
                  onClick={() => { handlePrint(); trackEvent("Save Results CTA", { type: "pdf" }); }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-background text-foreground px-4 py-3 text-sm font-semibold shadow-sm hover:bg-muted transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Save as PDF
                </button>
              </div>

              {/* Tab navigation — hidden when printing */}
              <div className="flex gap-1 rounded-xl bg-muted/50 p-1 print:hidden" role="tablist" aria-label="Result views">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab: Employee Deductions */}
              {(activeTab === "deductions" || typeof window !== "undefined") && (
                <div className={activeTab === "deductions" ? "" : "hidden print:block"}>
                  <div className="bg-card border-border rounded-2xl border overflow-hidden print:rounded-none">
                    <div className="border-border border-b px-6 py-4">
                      <h2 className="font-semibold">Employee Deductions (Monthly)</h2>
                    </div>
                    <div className="divide-border divide-y">
                      <DeductionRow label="Gross Salary" value={result.grossMonthly} highlight />
                      <DeductionRow label="NIS (3%)" value={result.employee.nis} deduction />
                      <DeductionRow label="NHT (2%)" value={result.employee.nht} deduction />
                      <DeductionRow
                        label="Education Tax (2.25%)"
                        value={result.employee.educationTax}
                        deduction
                      />
                      <DeductionRow
                        label="Income Tax (PAYE)"
                        value={result.employee.paye}
                        deduction
                      />
                      <DeductionRow
                        label="Total Deductions"
                        value={result.employee.totalDeductions}
                        deduction
                        bold
                      />
                      <DeductionRow
                        label="Net Take-Home Pay"
                        value={result.employee.netPay}
                        bold
                        positive
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Employer Cost */}
              {(activeTab === "employer" || typeof window !== "undefined") && (
                <div className={activeTab === "employer" ? "" : "hidden print:block"}>
                  <div className="bg-card border-border rounded-2xl border overflow-hidden print:rounded-none">
                    <div className="border-border border-b px-6 py-4">
                      <h2 className="font-semibold">Employer Contributions (Monthly)</h2>
                      <p className="text-muted-foreground mt-0.5 text-sm">
                        Additional cost to the employer on top of gross salary
                      </p>
                    </div>
                    <div className="divide-border divide-y">
                      <DeductionRow
                        label="Gross Salary"
                        value={result.grossMonthly}
                        highlight
                      />
                      <DeductionRow
                        label="Employer NIS (3%)"
                        value={result.employer.nisEmployer}
                        deduction
                      />
                      <DeductionRow
                        label="Employer NHT (3%)"
                        value={result.employer.nhtEmployer}
                        deduction
                      />
                      <DeductionRow
                        label="Employer Education Tax (3.5%)"
                        value={result.employer.educationTaxEmployer}
                        deduction
                      />
                      <DeductionRow
                        label="HEART/NSTA Levy (3%)"
                        value={result.employer.heartLevy}
                        deduction
                      />
                      <DeductionRow
                        label="Total Cost to Employer"
                        value={result.employer.totalEmployerCost}
                        bold
                        deduction
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Year-to-Date Projection */}
              {(activeTab === "ytd" || typeof window !== "undefined") && (
                <div className={activeTab === "ytd" ? "" : "hidden print:block"}>
                  {(() => {
                    const ytd = getYtdProjection();
                    if (!ytd) return null;
                    return (
                      <div className="bg-card border-border rounded-2xl border overflow-hidden print:rounded-none">
                        <div className="border-border border-b px-6 py-4">
                          <h2 className="font-semibold">Annual Projection (12 months)</h2>
                          <p className="text-muted-foreground mt-0.5 text-sm">
                            Estimated totals for a full calendar year at current salary
                          </p>
                        </div>
                        <div className="divide-border divide-y">
                          <DeductionRow label="Annual Gross Salary" value={ytd.gross} highlight />
                          <DeductionRow label="Annual NIS" value={ytd.nis} deduction />
                          <DeductionRow label="Annual NHT" value={ytd.nht} deduction />
                          <DeductionRow
                            label="Annual Education Tax"
                            value={ytd.educationTax}
                            deduction
                          />
                          <DeductionRow label="Annual PAYE" value={ytd.paye} deduction />
                          <DeductionRow
                            label="Total Annual Deductions"
                            value={ytd.totalDeductions}
                            deduction
                            bold
                          />
                          <DeductionRow
                            label="Annual Net Take-Home"
                            value={ytd.netPay}
                            bold
                            positive
                          />
                        </div>
                        <div className="border-border border-t px-6 py-4">
                          <h3 className="font-semibold text-sm mb-2">Employer Annual Costs</h3>
                        </div>
                        <div className="divide-border divide-y">
                          <DeductionRow
                            label="Annual Employer NIS"
                            value={ytd.employerNis}
                            deduction
                          />
                          <DeductionRow
                            label="Annual Employer NHT"
                            value={ytd.employerNht}
                            deduction
                          />
                          <DeductionRow
                            label="Annual Employer Ed. Tax"
                            value={ytd.employerEdTax}
                            deduction
                          />
                          <DeductionRow
                            label="Annual HEART/NSTA Levy"
                            value={ytd.employerHeart}
                            deduction
                          />
                          <DeductionRow
                            label="Total Annual Employer Cost"
                            value={ytd.employerTotal}
                            bold
                            deduction
                          />
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Tab: Frequency Comparison */}
              {(activeTab === "compare" || typeof window !== "undefined") && (
                <div className={activeTab === "compare" ? "" : "hidden print:block"}>
                  {(() => {
                    const comparison = getComparison();
                    if (!comparison) return null;
                    return (
                      <div className="bg-card border-border rounded-2xl border overflow-hidden print:rounded-none">
                        <div className="border-border border-b px-6 py-4">
                          <h2 className="font-semibold">Pay Frequency Comparison</h2>
                          <p className="text-muted-foreground mt-0.5 text-sm">
                            Same gross monthly salary across all pay frequencies
                          </p>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-border border-b bg-muted/30">
                                <th className="px-4 py-3 text-left font-medium"></th>
                                {comparison.map((c) => (
                                  <th
                                    key={c.frequency}
                                    className={`px-4 py-3 text-right font-medium ${
                                      c.frequency === result.frequency
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    {FREQUENCY_LABELS[c.frequency]}
                                    <span className="block text-xs font-normal">
                                      ({PERIODS_PER_YEAR[c.frequency]}x/yr)
                                    </span>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-border divide-y">
                              <CompareRow
                                label="Gross per Period"
                                values={comparison.map((c) => c.grossPerPeriod)}
                                activeIdx={comparison.findIndex(
                                  (c) => c.frequency === result.frequency
                                )}
                              />
                              <CompareRow
                                label="Deductions per Period"
                                values={comparison.map(
                                  (c) => c.employee.totalDeductions / (PERIODS_PER_YEAR[c.frequency] / 12)
                                )}
                                activeIdx={comparison.findIndex(
                                  (c) => c.frequency === result.frequency
                                )}
                                deduction
                              />
                              <CompareRow
                                label="Net per Period"
                                values={comparison.map((c) => c.netPerPeriod)}
                                activeIdx={comparison.findIndex(
                                  (c) => c.frequency === result.frequency
                                )}
                                bold
                                positive
                              />
                              <CompareRow
                                label="Annual Net Pay"
                                values={comparison.map((c) => c.employee.netPay * 12)}
                                activeIdx={comparison.findIndex(
                                  (c) => c.frequency === result.frequency
                                )}
                                bold
                              />
                              <CompareRow
                                label="Annual Employer Cost"
                                values={comparison.map(
                                  (c) => c.employer.totalEmployerCost * 12
                                )}
                                activeIdx={comparison.findIndex(
                                  (c) => c.frequency === result.frequency
                                )}
                                deduction
                              />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Tax breakdown note */}
              <p className="text-muted-foreground text-center text-xs print:text-gray-500">
                Based on current Jamaica tax rates (updated for 2025–2028 phased thresholds).
                NIS ceiling: JMD {(5_000_000).toLocaleString()}/yr.
                This is an estimate — consult a payroll professional for exact figures.
              </p>

              {/* Print footer */}
              <div className="hidden print:block text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-300">
                <p>Generated at payrolljamaica.com/calculator — Free Jamaica Payroll Calculator</p>
                <p>This is an estimate only. Consult a qualified payroll professional for official calculations.</p>
              </div>

              {/* Email capture CTA */}
              <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center dark:from-blue-950/30 dark:to-indigo-950/30 print:hidden">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>

                {emailStatus === "sent" ? (
                  <>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">You&apos;re on the list!</h3>
                    <p className="text-muted-foreground mt-2 text-base max-w-md mx-auto">
                      Check your inbox for your free 2026 Jamaica Payroll Compliance Checklist.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button size="lg" asChild>
                        <a href="#" data-open-fillout="true">
                          Create Free Account
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" onClick={handlePrint} className="gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download PDF
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold">Email Me These Results</h3>
                    <p className="text-muted-foreground mt-2 text-base max-w-md mx-auto">
                      Get your PAYE breakdown by email — plus a free 2026 Jamaica Payroll Compliance Checklist.
                    </p>
                    <div className="mt-6 mx-auto max-w-sm">
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="you@company.com"
                          aria-label="Email address"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleEmailSubmit();
                          }}
                          className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex-1 rounded-lg border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2"
                          disabled={emailStatus === "sending"}
                        />
                        <Button
                          size="lg"
                          onClick={handleEmailSubmit}
                          disabled={emailStatus === "sending"}
                        >
                          {emailStatus === "sending" ? "Sending..." : "Send"}
                        </Button>
                      </div>
                      {emailError && (
                        <p className="text-destructive mt-2 text-sm text-left">{emailError}</p>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-3 text-xs">
                      Free. No spam. Unsubscribe anytime.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <Button size="lg" variant="outline" onClick={handlePrint} className="gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download PDF
                      </Button>
                    </div>
                  </>
                )}
              </div>

              {/* Why automate? section */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 print:hidden">
                <h3 className="text-lg font-semibold text-foreground">Why automate your payroll?</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Save 4+ hours/month</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Automatic PAYE, NIS, NHT and Education Tax calculations every pay run.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Zero compliance risk</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Always up to date with TAJ rates. No more manual errors or late filings.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Ready-made payslips</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Generate compliant payslips and statutory remittance reports in one click.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    data-open-fillout="true"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    onClick={() => trackEvent("Why Automate CTA")}
                  >
                    Get started with PayrollJamaica
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

function DeductionRow({
  label,
  value,
  deduction,
  bold,
  highlight,
  positive,
}: {
  label: string;
  value: number;
  deduction?: boolean;
  bold?: boolean;
  highlight?: boolean;
  positive?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-3 ${
        highlight ? "bg-muted/50 print:bg-gray-50" : ""
      }`}
    >
      <span
        className={`text-sm ${bold ? "font-semibold" : "text-muted-foreground"} print:text-black`}
      >
        {label}
      </span>
      <span
        className={`text-sm tabular-nums ${bold ? "font-semibold" : ""} ${
          deduction
            ? "text-destructive print:text-red-700"
            : positive
              ? "text-green-600 dark:text-green-400 print:text-green-700"
              : ""
        }`}
      >
        {deduction ? "−" : ""}
        {formatJMD(value)}
      </span>
    </div>
  );
}

function CompareRow({
  label,
  values,
  activeIdx,
  bold,
  deduction,
  positive,
}: {
  label: string;
  values: number[];
  activeIdx: number;
  bold?: boolean;
  deduction?: boolean;
  positive?: boolean;
}) {
  return (
    <tr>
      <td
        className={`px-4 py-3 text-sm ${bold ? "font-semibold" : "text-muted-foreground"}`}
      >
        {label}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className={`px-4 py-3 text-right text-sm tabular-nums ${
            bold ? "font-semibold" : ""
          } ${
            deduction
              ? "text-destructive"
              : positive
                ? "text-green-600 dark:text-green-400"
                : ""
          } ${i === activeIdx ? "bg-primary/5" : ""}`}
        >
          {deduction ? "−" : ""}
          {formatJMD(Math.round(v * 100) / 100)}
        </td>
      ))}
    </tr>
  );
}
