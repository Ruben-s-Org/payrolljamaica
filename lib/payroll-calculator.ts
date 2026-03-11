/**
 * Jamaica Payroll Calculator — 2025 Tax Rules
 * All amounts in JMD. All calculations are monthly input → monthly output.
 */

export type PayFrequency = "monthly" | "fortnightly" | "weekly";

export interface PayrollInput {
  grossMonthly: number;
  frequency: PayFrequency;
}

export interface DeductionBreakdown {
  nis: number;
  nht: number;
  educationTax: number;
  paye: number;
  totalDeductions: number;
  netPay: number;
}

export interface EmployerCosts {
  nisEmployer: number;
  nhtEmployer: number;
  educationTaxEmployer: number;
  totalEmployerCost: number;
}

export interface PayrollResult {
  grossMonthly: number;
  employee: DeductionBreakdown;
  employer: EmployerCosts;
  frequency: PayFrequency;
  /** Gross per pay period (for display) */
  grossPerPeriod: number;
  /** Net per pay period (for display) */
  netPerPeriod: number;
}

// ── 2025 constants ───────────────────────────────────────────────────────────

const NIS_EMPLOYEE_RATE = 0.03;
const NIS_EMPLOYER_RATE = 0.03;
/** Annual NIS insurable earnings ceiling (JMD) */
const NIS_ANNUAL_CEILING = 5_000_000;
const NIS_MONTHLY_CEILING = NIS_ANNUAL_CEILING / 12;

const NHT_EMPLOYEE_RATE = 0.02;
const NHT_EMPLOYER_RATE = 0.03;

const ED_TAX_EMPLOYEE_RATE = 0.0225;
const ED_TAX_EMPLOYER_RATE = 0.035;

/** Annual income tax threshold (statutory income) */
const PAYE_ANNUAL_THRESHOLD = 1_500_096;
const PAYE_MONTHLY_THRESHOLD = PAYE_ANNUAL_THRESHOLD / 12;

/** First PAYE band ceiling (annual) */
const PAYE_BAND_1_ANNUAL_CEILING = 6_000_000;
const PAYE_BAND_1_MONTHLY_CEILING = PAYE_BAND_1_ANNUAL_CEILING / 12;

const PAYE_RATE_BAND_1 = 0.25;
const PAYE_RATE_BAND_2 = 0.30;

// ── Helpers ──────────────────────────────────────────────────────────────────

function periodsPerMonth(frequency: PayFrequency): number {
  switch (frequency) {
    case "weekly":
      return 52 / 12; // ≈ 4.333
    case "fortnightly":
      return 26 / 12; // ≈ 2.167
    case "monthly":
    default:
      return 1;
  }
}

// ── Core monthly calculation ──────────────────────────────────────────────────

export function calculateMonthly(grossMonthly: number): {
  employee: DeductionBreakdown;
  employer: EmployerCosts;
} {
  // NIS — capped at monthly ceiling
  const nisBase = Math.min(grossMonthly, NIS_MONTHLY_CEILING);
  const nis = nisBase * NIS_EMPLOYEE_RATE;
  const nisEmployer = nisBase * NIS_EMPLOYER_RATE;

  // NHT — no cap
  const nht = grossMonthly * NHT_EMPLOYEE_RATE;
  const nhtEmployer = grossMonthly * NHT_EMPLOYER_RATE;

  // Education Tax — no cap
  const educationTax = grossMonthly * ED_TAX_EMPLOYEE_RATE;
  const educationTaxEmployer = grossMonthly * ED_TAX_EMPLOYER_RATE;

  // PAYE — computed on taxable income after NIS deduction
  const statutoryIncome = grossMonthly - nis;
  let paye = 0;
  if (statutoryIncome > PAYE_MONTHLY_THRESHOLD) {
    const taxableIncome = statutoryIncome - PAYE_MONTHLY_THRESHOLD;
    const band1Taxable = Math.min(
      taxableIncome,
      PAYE_BAND_1_MONTHLY_CEILING - PAYE_MONTHLY_THRESHOLD
    );
    const band2Taxable = Math.max(
      0,
      taxableIncome - (PAYE_BAND_1_MONTHLY_CEILING - PAYE_MONTHLY_THRESHOLD)
    );
    paye = band1Taxable * PAYE_RATE_BAND_1 + band2Taxable * PAYE_RATE_BAND_2;
  }

  const totalDeductions = nis + nht + educationTax + paye;
  const netPay = grossMonthly - totalDeductions;

  const totalEmployerCost =
    grossMonthly + nisEmployer + nhtEmployer + educationTaxEmployer;

  return {
    employee: {
      nis: round(nis),
      nht: round(nht),
      educationTax: round(educationTax),
      paye: round(paye),
      totalDeductions: round(totalDeductions),
      netPay: round(netPay),
    },
    employer: {
      nisEmployer: round(nisEmployer),
      nhtEmployer: round(nhtEmployer),
      educationTaxEmployer: round(educationTaxEmployer),
      totalEmployerCost: round(totalEmployerCost),
    },
  };
}

export function calculate(input: PayrollInput): PayrollResult {
  const { grossMonthly, frequency } = input;
  const { employee, employer } = calculateMonthly(grossMonthly);

  const periods = periodsPerMonth(frequency);
  const grossPerPeriod = round(grossMonthly / periods);
  const netPerPeriod = round(employee.netPay / periods);

  return {
    grossMonthly,
    employee,
    employer,
    frequency,
    grossPerPeriod,
    netPerPeriod,
  };
}

// ── Formatting ────────────────────────────────────────────────────────────────

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export function formatJMD(amount: number): string {
  return new Intl.NumberFormat("en-JM", {
    style: "currency",
    currency: "JMD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
