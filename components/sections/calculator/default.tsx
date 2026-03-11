"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

// ─── 2025 Jamaica Statutory Rates ────────────────────────────────────────────
const INCOME_TAX_THRESHOLD = 1_500_096; // JMD annual
const PAYE_RATE_LOW = 0.25;             // 25% on income above threshold up to 6M
const PAYE_RATE_HIGH = 0.30;            // 30% on income above 6M
const PAYE_UPPER_BOUND = 6_000_000;     // threshold for higher rate
const NIS_EMPLOYEE = 0.03;             // 3%
const NIS_CEILING_ANNUAL = 5_000_000;  // NIS ceiling (annual)
const NHT_EMPLOYEE = 0.02;             // 2%
const EDU_TAX_EMPLOYEE = 0.0225;       // 2.25%
const NIS_EMPLOYER = 0.03;
const NHT_EMPLOYER = 0.03;
const EDU_TAX_EMPLOYER = 0.035;

type Frequency = "monthly" | "annual";

function fmt(n: number) {
  return n.toLocaleString("en-JM", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculatePayroll(grossAnnual: number) {
  // NIS (capped)
  const nisableIncome = Math.min(grossAnnual, NIS_CEILING_ANNUAL);
  const nisEmployee = nisableIncome * NIS_EMPLOYEE;
  const nisEmployer = nisableIncome * NIS_EMPLOYER;

  // PAYE — applied to gross minus NIS employee contribution
  const taxableIncome = Math.max(0, grossAnnual - nisEmployee - INCOME_TAX_THRESHOLD);
  let paye = 0;
  if (taxableIncome > 0) {
    const lowBand = Math.min(taxableIncome, PAYE_UPPER_BOUND - INCOME_TAX_THRESHOLD);
    const highBand = Math.max(0, taxableIncome - (PAYE_UPPER_BOUND - INCOME_TAX_THRESHOLD));
    paye = lowBand * PAYE_RATE_LOW + highBand * PAYE_RATE_HIGH;
  }

  // NHT
  const nhtEmployee = grossAnnual * NHT_EMPLOYEE;
  const nhtEmployer = grossAnnual * NHT_EMPLOYER;

  // Education Tax
  const eduEmployee = grossAnnual * EDU_TAX_EMPLOYEE;
  const eduEmployer = grossAnnual * EDU_TAX_EMPLOYER;

  const totalEmployeeDeductions = paye + nisEmployee + nhtEmployee + eduEmployee;
  const netAnnual = grossAnnual - totalEmployeeDeductions;
  const totalEmployerCost = grossAnnual + nisEmployer + nhtEmployer + eduEmployer;

  return {
    gross: grossAnnual,
    paye,
    nisEmployee,
    nisEmployer,
    nhtEmployee,
    nhtEmployer,
    eduEmployee,
    eduEmployer,
    totalEmployeeDeductions,
    net: netAnnual,
    totalEmployerCost,
  };
}

export default function PayrollCalculator() {
  const [salary, setSalary] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [result, setResult] = useState<ReturnType<typeof calculatePayroll> | null>(null);
  const [error, setError] = useState("");

  const calculate = useCallback(() => {
    const raw = parseFloat(salary.replace(/,/g, ""));
    if (!salary || isNaN(raw) || raw <= 0) {
      setError("Please enter a valid gross salary.");
      setResult(null);
      return;
    }
    setError("");
    const annual = frequency === "monthly" ? raw * 12 : raw;
    setResult(calculatePayroll(annual));
  }, [salary, frequency]);

  const displayValue = (annual: number) =>
    frequency === "monthly" ? annual / 12 : annual;

  const freqLabel = frequency === "monthly" ? "/month" : "/year";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input */}
      <div className="rounded-xl border bg-card p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Enter Gross Salary</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1">
            <label htmlFor="salary" className="block text-sm text-muted-foreground mb-1">
              Gross salary (JMD)
            </label>
            <input
              id="salary"
              type="text"
              inputMode="decimal"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="e.g. 150,000"
              className="w-full rounded-md border bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="frequency" className="block text-sm text-muted-foreground mb-1">
              Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Frequency)}
              className="w-full rounded-md border bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
          </div>
        </div>
        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
        <Button onClick={calculate} className="w-full sm:w-auto" size="lg">
          Calculate
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="rounded-xl border bg-card p-6 space-y-6">
          <h2 className="text-xl font-semibold">Results — {frequency === "monthly" ? "Monthly" : "Annual"}</h2>

          {/* Employee deductions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Employee Deductions
            </h3>
            <table className="w-full text-sm">
              <tbody className="divide-y">
                <tr className="py-2">
                  <td className="py-2 text-muted-foreground">Gross Salary</td>
                  <td className="py-2 text-right font-medium">
                    JMD {fmt(displayValue(result.gross))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">PAYE (Income Tax)</td>
                  <td className="py-2 text-right text-red-400">
                    − JMD {fmt(displayValue(result.paye))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">NIS (3%)</td>
                  <td className="py-2 text-right text-red-400">
                    − JMD {fmt(displayValue(result.nisEmployee))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">NHT (2%)</td>
                  <td className="py-2 text-right text-red-400">
                    − JMD {fmt(displayValue(result.nhtEmployee))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Education Tax (2.25%)</td>
                  <td className="py-2 text-right text-red-400">
                    − JMD {fmt(displayValue(result.eduEmployee))}
                  </td>
                </tr>
                <tr className="font-semibold text-base">
                  <td className="py-3">Take-Home Pay</td>
                  <td className="py-3 text-right text-green-400">
                    JMD {fmt(displayValue(result.net))} {freqLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Employer contributions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Employer Contributions
            </h3>
            <table className="w-full text-sm">
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 text-muted-foreground">NIS Employer (3%)</td>
                  <td className="py-2 text-right">
                    JMD {fmt(displayValue(result.nisEmployer))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">NHT Employer (3%)</td>
                  <td className="py-2 text-right">
                    JMD {fmt(displayValue(result.nhtEmployer))}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Education Tax Employer (3.5%)</td>
                  <td className="py-2 text-right">
                    JMD {fmt(displayValue(result.eduEmployer))}
                  </td>
                </tr>
                <tr className="font-semibold text-base">
                  <td className="py-3">Total Cost to Employer</td>
                  <td className="py-3 text-right text-amber-400">
                    JMD {fmt(displayValue(result.totalEmployerCost))} {freqLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rate reminder */}
          <p className="text-xs text-muted-foreground border-t pt-4">
            Calculated using 2025 Jamaica statutory rates: Income tax threshold JMD 1,500,096/year • PAYE 25%/30% •
            NIS 3% employee + 3% employer (ceiling JMD 5M) • NHT 2% + 3% • Education Tax 2.25% + 3.5%.
            This calculator provides estimates only — consult a payroll professional for compliance advice.
          </p>
        </div>
      )}

      {/* Rate table — always visible for SEO & UX */}
      <div className="rounded-xl border bg-card p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">2025 Jamaica Statutory Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2 font-semibold">Deduction</th>
                <th className="pb-2 font-semibold text-right">Employee</th>
                <th className="pb-2 font-semibold text-right">Employer</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2">PAYE (Income Tax)</td>
                <td className="py-2 text-right">25% / 30%</td>
                <td className="py-2 text-right">—</td>
              </tr>
              <tr>
                <td className="py-2">NIS</td>
                <td className="py-2 text-right">3%</td>
                <td className="py-2 text-right">3%</td>
              </tr>
              <tr>
                <td className="py-2">NHT</td>
                <td className="py-2 text-right">2%</td>
                <td className="py-2 text-right">3%</td>
              </tr>
              <tr>
                <td className="py-2">Education Tax</td>
                <td className="py-2 text-right">2.25%</td>
                <td className="py-2 text-right">3.5%</td>
              </tr>
              <tr>
                <td className="py-2 text-muted-foreground" colSpan={3}>
                  Income tax threshold: JMD $1,500,096/year. NIS ceiling: JMD $5,000,000/year.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
