"use client";

import { useState } from "react";
import { calculate, formatJMD, type PayFrequency, type PayrollResult } from "@/lib/payroll-calculator";
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

export default function PayrollCalculator() {
  const [grossInput, setGrossInput] = useState("");
  const [frequency, setFrequency] = useState<PayFrequency>("monthly");
  const [result, setResult] = useState<PayrollResult | null>(null);
  const [error, setError] = useState("");

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
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleCalculate();
  }

  return (
    <Section className="py-16 sm:py-24">
      <div className="max-w-container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              Jamaica Payroll Calculator
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Calculate PAYE, NIS, NHT and Education Tax instantly — free, no signup required.
              Updated for 2025 rates.
            </p>
          </div>

          {/* Input card */}
          <div className="bg-card border-border rounded-2xl border p-6 shadow-sm sm:p-8">
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
                <label className="mb-2 block text-sm font-medium">Pay Frequency</label>
                <div className="flex gap-3">
                  {(["monthly", "fortnightly", "weekly"] as PayFrequency[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
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

            <Button
              size="lg"
              className="mt-6 w-full"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6">
              {/* Summary banner */}
              <div className="bg-primary/10 border-primary/20 rounded-2xl border p-6 text-center">
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                  Take-Home Pay per {PERIOD_LABELS[result.frequency]}
                </p>
                <p className="text-primary mt-1 text-4xl font-bold">
                  {formatJMD(result.netPerPeriod)}
                </p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Gross: {formatJMD(result.grossPerPeriod)} / {PERIOD_LABELS[result.frequency]}
                </p>
              </div>

              {/* Employee deductions table */}
              <div className="bg-card border-border rounded-2xl border overflow-hidden">
                <div className="border-border border-b px-6 py-4">
                  <h2 className="font-semibold">Employee Deductions (Monthly)</h2>
                </div>
                <div className="divide-border divide-y">
                  <DeductionRow label="Gross Salary" value={result.grossMonthly} highlight />
                  <DeductionRow label="NIS (3%)" value={result.employee.nis} deduction />
                  <DeductionRow label="NHT (2%)" value={result.employee.nht} deduction />
                  <DeductionRow label="Education Tax (2.25%)" value={result.employee.educationTax} deduction />
                  <DeductionRow label="Income Tax (PAYE)" value={result.employee.paye} deduction />
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

              {/* Employer cost table */}
              <div className="bg-card border-border rounded-2xl border overflow-hidden">
                <div className="border-border border-b px-6 py-4">
                  <h2 className="font-semibold">Employer Contributions (Monthly)</h2>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    Additional cost to the employer on top of gross salary
                  </p>
                </div>
                <div className="divide-border divide-y">
                  <DeductionRow label="NIS (3%)" value={result.employer.nisEmployer} deduction />
                  <DeductionRow label="NHT (3%)" value={result.employer.nhtEmployer} deduction />
                  <DeductionRow label="Education Tax (3.5%)" value={result.employer.educationTaxEmployer} deduction />
                  <DeductionRow
                    label="Total Cost to Employer"
                    value={result.employer.totalEmployerCost}
                    bold
                    deduction
                  />
                </div>
              </div>

              {/* Tax breakdown note */}
              <p className="text-muted-foreground text-center text-xs">
                Based on 2025 Jamaica tax rates. PAYE threshold: JMD {(1_500_096).toLocaleString()}/yr.
                NIS ceiling: JMD {(5_000_000).toLocaleString()}/yr. This is an estimate — consult a payroll professional for exact figures.
              </p>

              {/* CTA */}
              <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center dark:from-blue-950/30 dark:to-indigo-950/30">
                <h3 className="text-lg font-semibold">Stop calculating manually</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  PayrollJamaica automates all of this — PAYE, NIS, NHT, payslips and statutory reports — in minutes.
                </p>
                <Button
                  size="lg"
                  className="mt-4"
                  asChild
                >
                  <a href="#" data-open-fillout="true">
                    Get Started Free — No Credit Card
                  </a>
                </Button>
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
        highlight ? "bg-muted/50" : ""
      }`}
    >
      <span className={`text-sm ${bold ? "font-semibold" : "text-muted-foreground"}`}>
        {label}
      </span>
      <span
        className={`text-sm tabular-nums ${
          bold ? "font-semibold" : ""
        } ${
          deduction ? "text-destructive" : positive ? "text-green-600 dark:text-green-400" : ""
        }`}
      >
        {deduction ? "−" : ""}{formatJMD(value)}
      </span>
    </div>
  );
}
