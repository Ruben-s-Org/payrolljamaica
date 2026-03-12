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
  heartLevy: number;
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

// ── 2025-2028 constants ──────────────────────────────────────────────────────

const NIS_EMPLOYEE_RATE = 0.03;
const NIS_EMPLOYER_RATE = 0.03;
/** Annual NIS insurable earnings ceiling (JMD) */
const NIS_ANNUAL_CEILING = 5_000_000;
const NIS_MONTHLY_CEILING = NIS_ANNUAL_CEILING / 12;

const NHT_EMPLOYEE_RATE = 0.02;
const NHT_EMPLOYER_RATE = 0.03;

const ED_TAX_EMPLOYEE_RATE = 0.0225;
const ED_TAX_EMPLOYER_RATE = 0.035;

/** HEART/NSTA Trust — employer-only levy */
const HEART_EMPLOYER_RATE = 0.03;

/**
 * PAYE annual income tax threshold (statutory income).
 * Current threshold: JMD 1,500,096/year (JMD 125,008/month)
 */
const PAYE_THRESHOLDS: { from: Date; annual: number }[] = [
  { from: new Date(2025, 0, 1), annual: 1_500_096 }, // Jan 2025
];
const PAYE_DEFAULT_THRESHOLD = 1_500_096;

function getPayeAnnualThreshold(payDate?: Date): number {
  const d = payDate ?? new Date();
  for (const t of PAYE_THRESHOLDS) {
    if (d >= t.from) return t.annual;
  }
  return PAYE_DEFAULT_THRESHOLD;
}

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

export function calculateMonthly(
  grossMonthly: number,
  payDate?: Date
): {
  employee: DeductionBreakdown;
  employer: EmployerCosts;
} {
  // NIS — capped at monthly ceiling
  const nisBase = Math.min(grossMonthly, NIS_MONTHLY_CEILING);
  const nis = nisBase * NIS_EMPLOYEE_RATE;
  const nisEmployer = nisBase * NIS_EMPLOYER_RATE;

  // Statutory income = gross minus employee NIS
  const statutoryIncome = grossMonthly - nis;

  // NHT — no cap, applied to gross emoluments
  const nht = grossMonthly * NHT_EMPLOYEE_RATE;
  const nhtEmployer = grossMonthly * NHT_EMPLOYER_RATE;

  // Education Tax — applied to statutory income (gross - NIS), no cap
  const educationTax = statutoryIncome * ED_TAX_EMPLOYEE_RATE;
  const educationTaxEmployer = statutoryIncome * ED_TAX_EMPLOYER_RATE;

  // HEART/NSTA Trust — employer only, no cap
  const heartLevy = grossMonthly * HEART_EMPLOYER_RATE;

  // PAYE — computed on taxable income after NIS deduction and threshold
  const payeMonthlyThreshold = getPayeAnnualThreshold(payDate) / 12;
  let paye = 0;
  if (statutoryIncome > payeMonthlyThreshold) {
    const taxableIncome = statutoryIncome - payeMonthlyThreshold;
    const band1Taxable = Math.min(
      taxableIncome,
      PAYE_BAND_1_MONTHLY_CEILING - payeMonthlyThreshold
    );
    const band2Taxable = Math.max(
      0,
      taxableIncome - (PAYE_BAND_1_MONTHLY_CEILING - payeMonthlyThreshold)
    );
    paye = band1Taxable * PAYE_RATE_BAND_1 + band2Taxable * PAYE_RATE_BAND_2;
  }

  const totalDeductions = nis + nht + educationTax + paye;
  const netPay = grossMonthly - totalDeductions;

  const totalEmployerCost =
    grossMonthly + nisEmployer + nhtEmployer + educationTaxEmployer + heartLevy;

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
      heartLevy: round(heartLevy),
      totalEmployerCost: round(totalEmployerCost),
    },
  };
}

export function calculate(input: PayrollInput & { payDate?: Date }): PayrollResult {
  const { grossMonthly, frequency, payDate } = input;
  const { employee, employer } = calculateMonthly(grossMonthly, payDate);

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
