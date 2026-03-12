import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import FAQ from "@/components/sections/faq/default";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import RelatedPages from "@/components/ui/related-pages";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";

const baseDescription =
  "Complete guide to Jamaica statutory deductions 2026: PAYE, NIS, NHT, Education Tax, and HEART/NSTA rates, ceilings, remittance deadlines, and penalties. Includes worked payroll example and employer contribution breakdown.";

export const metadata: Metadata = {
  title: "Statutory Deductions Jamaica 2026 — All Rates",
  description: ensureMinDescription(
    "All Jamaica statutory deductions explained: PAYE, NIS, NHT, Education Tax & HEART rates, ceilings, deadlines, and penalties. Includes worked example for J$150K/month salary.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "statutory deductions Jamaica",
    "Jamaica payroll deductions",
    "PAYE NIS NHT Education Tax Jamaica",
    "Jamaica employer contributions",
    "payroll tax Jamaica 2026",
    "Jamaica statutory contributions",
    "HEART NSTA Jamaica",
    "Jamaica payroll rates",
    "Jamaica tax deductions",
  ]),
  alternates: {
    canonical: canonical("/statutory-deductions-jamaica"),
    languages: {
      "en-JM": canonical("/statutory-deductions-jamaica"),
      en: canonical("/statutory-deductions-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Statutory Deductions Jamaica 2026 — All Rates & Deadlines",
    description: baseDescription,
    url: canonical("/statutory-deductions-jamaica"),
    type: "article",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Jamaica Statutory Deductions 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statutory Deductions Jamaica 2026 — All Rates",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Statutory Deductions Jamaica",
      item: `${siteConfig.url}/statutory-deductions-jamaica`,
    },
  ],
};

const deductions = [
  {
    name: "PAYE (Pay As You Earn)",
    employeeRate: "25% (up to J$6M) / 30% (above J$6M)",
    employerRate: "N/A",
    ceiling: "J$1,500,096/yr threshold",
    link: "/paye-calculator-jamaica",
  },
  {
    name: "NIS (National Insurance Scheme)",
    employeeRate: "3%",
    employerRate: "3%",
    ceiling: "J$5,000,000/yr",
    link: "/nis-calculator-jamaica",
  },
  {
    name: "NHT (National Housing Trust)",
    employeeRate: "2%",
    employerRate: "3%",
    ceiling: "No ceiling",
    link: "/nht-calculator-jamaica",
  },
  {
    name: "Education Tax",
    employeeRate: "2.25%",
    employerRate: "3.5%",
    ceiling: "No ceiling",
    link: "/education-tax-calculator-jamaica",
  },
  {
    name: "HEART/NSTA",
    employeeRate: "N/A",
    employerRate: "3%",
    ceiling: "No ceiling",
    link: null,
  },
];

/* Worked example: J$150,000/month gross salary */
const gross = 150_000;
const annualGross = gross * 12; // 1,800,000
const monthlyThreshold = 1_500_096 / 12; // 125,008
const taxableIncome = gross - monthlyThreshold; // 24,992
const paye = Math.round(taxableIncome * 0.25); // 6,248
const nis = Math.round(gross * 0.03); // 4,500
const nht = Math.round(gross * 0.02); // 3,000
const edTax = Math.round(gross * 0.0225); // 3,375
const totalEmployeeDeductions = paye + nis + nht + edTax; // 17,123
const netPay = gross - totalEmployeeDeductions; // 132,877

const employerNis = Math.round(gross * 0.03); // 4,500
const employerNht = Math.round(gross * 0.03); // 4,500
const employerEdTax = Math.round(gross * 0.035); // 5,250
const heartNsta = Math.round(gross * 0.03); // 4,500
const totalEmployerCost = employerNis + employerNht + employerEdTax + heartNsta; // 18,750

function fmt(n: number) {
  return `J$${n.toLocaleString("en-JM")}`;
}

export default function StatutoryDeductionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-4xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Statutory Deductions Jamaica</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Statutory Deductions Jamaica 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Every Jamaican employer must withhold and remit five statutory
            deductions: PAYE, NIS, NHT, Education Tax, and HEART/NSTA. This
            guide covers every rate, ceiling, deadline, and penalty you need to
            know — plus a worked payroll example.
          </p>

          {/* All Rates Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              All Statutory Deduction Rates at a Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold">Deduction</th>
                    <th className="text-right p-3 font-semibold">Employee Rate</th>
                    <th className="text-right p-3 font-semibold">Employer Rate</th>
                    <th className="text-right p-3 font-semibold">Ceiling / Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  {deductions.map((d) => (
                    <tr key={d.name} className="border-b">
                      <td className="p-3 font-medium">
                        {d.link ? (
                          <Link href={d.link} className="text-primary underline">
                            {d.name}
                          </Link>
                        ) : (
                          d.name
                        )}
                      </td>
                      <td className="p-3 text-right">{d.employeeRate}</td>
                      <td className="p-3 text-right">{d.employerRate}</td>
                      <td className="p-3 text-right">{d.ceiling}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t bg-muted/30 font-semibold">
                    <td className="p-3">Total (excl. PAYE)</td>
                    <td className="p-3 text-right">7.25%</td>
                    <td className="p-3 text-right">12.5%</td>
                    <td className="p-3 text-right"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Rates effective for the 2025/2026 tax year (April 2025 onward).
              PAYE is calculated after deducting the annual tax-free threshold of
              J$1,500,096.
            </p>
          </section>

          {/* Deduction-by-Deduction Breakdown */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Each Deduction Explained
            </h2>

            <div className="space-y-8">
              {/* PAYE */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/paye-calculator-jamaica" className="text-primary underline">
                    1. PAYE (Pay As You Earn)
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Jamaica&apos;s income tax, withheld at source by the employer.
                  Only earnings above the annual threshold of{" "}
                  <strong>J$1,500,096</strong> (J$125,008/month) are taxable.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  <li>
                    <strong>25%</strong> on annual taxable income up to J$6,000,000
                  </li>
                  <li>
                    <strong>30%</strong> on annual taxable income above J$6,000,000
                  </li>
                  <li>Paid by employee only; employer withholds and remits</li>
                  <li>
                    NIS contributions are deducted before calculating PAYE
                    (reduces taxable income)
                  </li>
                </ul>
              </div>

              {/* NIS */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/nis-calculator-jamaica" className="text-primary underline">
                    2. NIS (National Insurance Scheme)
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Social security contributions that fund pensions, injury
                  benefits, and maternity leave. Both employee and employer
                  contribute equally.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  <li>
                    <strong>3% employee</strong> + <strong>3% employer</strong>
                  </li>
                  <li>
                    Annual insurable earnings ceiling:{" "}
                    <strong>J$5,000,000</strong> (J$416,667/month)
                  </li>
                  <li>
                    Contributions stop once the employee&apos;s earnings reach the
                    ceiling in that year
                  </li>
                </ul>
              </div>

              {/* NHT */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/nht-calculator-jamaica" className="text-primary underline">
                    3. NHT (National Housing Trust)
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Funds affordable housing in Jamaica. Contributions are
                  refundable after 7 years if you have not benefited from an NHT
                  loan or grant.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  <li>
                    <strong>2% employee</strong> + <strong>3% employer</strong>
                  </li>
                  <li>
                    <strong>No earnings ceiling</strong> — calculated on total
                    gross pay
                  </li>
                  <li>Self-employed persons also contribute at 2%</li>
                </ul>
              </div>

              {/* Education Tax */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/education-tax-calculator-jamaica" className="text-primary underline">
                    4. Education Tax
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Funds Jamaica&apos;s public education system. Applies to all
                  employed and self-employed persons.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  <li>
                    <strong>2.25% employee</strong> +{" "}
                    <strong>3.5% employer</strong>
                  </li>
                  <li>
                    <strong>No earnings ceiling</strong> — calculated on total
                    gross pay
                  </li>
                </ul>
              </div>

              {/* HEART/NSTA */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  5. HEART/NSTA Trust
                </h3>
                <p className="text-muted-foreground mb-3">
                  Funds workforce training and development programmes across
                  Jamaica. This is an employer-only contribution.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  <li>
                    <strong>3% employer only</strong> — no employee deduction
                  </li>
                  <li>
                    <strong>No earnings ceiling</strong> — calculated on total
                    gross payroll
                  </li>
                  <li>
                    Applies to employers with a monthly payroll above a minimum
                    threshold set by HEART
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Worked Example: J$150,000/Month Salary
            </h2>
            <p className="text-muted-foreground mb-4">
              Here is the full payroll breakdown for an employee earning
              J$150,000 per month (J$1,800,000 per year), showing every
              statutory deduction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Employee side */}
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Employee Deductions</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Monthly Pay</span>
                    <span className="font-medium">{fmt(gross)}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-muted-foreground">
                    <span>PAYE (25% on taxable)</span>
                    <span>-{fmt(paye)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>NIS (3%)</span>
                    <span>-{fmt(nis)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>NHT (2%)</span>
                    <span>-{fmt(nht)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Education Tax (2.25%)</span>
                    <span>-{fmt(edTax)}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-muted-foreground">
                    <span>Total Deductions</span>
                    <span>-{fmt(totalEmployeeDeductions)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Net Take-Home Pay</span>
                    <span className="text-primary">{fmt(netPay)}</span>
                  </div>
                </div>
              </div>

              {/* Employer side */}
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Employer Contributions</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Monthly Pay</span>
                    <span className="font-medium">{fmt(gross)}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-muted-foreground">
                    <span>NIS (3%)</span>
                    <span>+{fmt(employerNis)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>NHT (3%)</span>
                    <span>+{fmt(employerNht)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Education Tax (3.5%)</span>
                    <span>+{fmt(employerEdTax)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>HEART/NSTA (3%)</span>
                    <span>+{fmt(heartNsta)}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-muted-foreground">
                    <span>Total Employer Contributions</span>
                    <span>+{fmt(totalEmployerCost)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total Cost to Employer</span>
                    <span className="text-primary">{fmt(gross + totalEmployerCost)}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Use our{" "}
              <Link href="/calculator" className="text-primary underline">
                free payroll calculator
              </Link>{" "}
              to run exact calculations for any salary amount, including
              overtime, allowances, and benefits in kind.
            </p>
          </section>

          {/* Remittance Deadlines */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              When Must Deductions Be Remitted?
            </h2>
            <p className="text-muted-foreground mb-4">
              All statutory deductions must be remitted to Tax Administration
              Jamaica (TAJ) by the <strong>14th of the month following</strong>{" "}
              the pay period. For example, deductions from January payroll must
              be remitted by February 14th.
            </p>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Key Remittance Dates</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                <li>
                  <strong>Monthly returns:</strong> SO1 (PAYE), SO2 (Education
                  Tax, NHT, NIS, HEART/NSTA) — due by the 14th of the following
                  month
                </li>
                <li>
                  <strong>Year-end returns:</strong> S02 Annual Return and
                  individual P24 forms — due by{" "}
                  <strong>March 31st</strong> (for the tax year ending the
                  previous March)
                </li>
                <li>
                  <strong>NIS declarations:</strong> Must accompany the monthly
                  SO2 return
                </li>
                <li>
                  If the 14th falls on a weekend or public holiday, remit by the
                  last business day before
                </li>
              </ul>
            </div>
          </section>

          {/* Penalties */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Penalties for Late Payment
            </h2>
            <p className="text-muted-foreground mb-4">
              Tax Administration Jamaica enforces strict penalties on late or
              missing statutory remittances:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold">Violation</th>
                    <th className="text-left p-3 font-semibold">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Late filing of monthly return (SO1/SO2)</td>
                    <td className="p-3">
                      J$5,000 per day for each day the return is late
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Late payment of statutory deductions</td>
                    <td className="p-3">
                      Interest charged at the prescribed rate (currently
                      ~16.68% per annum) on outstanding amounts
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Failure to deduct PAYE from employees</td>
                    <td className="p-3">
                      The employer becomes personally liable for the unpaid tax
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Non-filing of year-end return</td>
                    <td className="p-3">
                      Penalties plus potential prosecution by TAJ
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Failure to register as an employer</td>
                    <td className="p-3">
                      Fines and back-payment of all missed contributions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Avoid penalties entirely by automating your payroll.{" "}
              <Link href="/pricing" className="text-primary underline">
                See PayrollJamaica plans
              </Link>
              .
            </p>
          </section>

          {/* Automation CTA */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              How PayrollJamaica Automates Statutory Deductions
            </h2>
            <p className="text-muted-foreground mb-4">
              Manually calculating five different deductions — each with its own
              rate, ceiling, and rules — is time-consuming and error-prone.
              PayrollJamaica handles it all automatically:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Automatic Calculation</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the gross salary and PayrollJamaica instantly computes
                  PAYE, NIS, NHT, Education Tax, and HEART/NSTA — applying
                  current rates, thresholds, and ceilings automatically.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">NIS Ceiling Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  The system tracks each employee&apos;s cumulative NIS
                  contributions and stops deducting once the J$5M annual ceiling
                  is reached — no manual tracking needed.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Deadline Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  Get automated reminders before the 14th of each month so you
                  never miss a remittance deadline and avoid costly penalties.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Compliant Payslips</h3>
                <p className="text-sm text-muted-foreground">
                  Every payslip shows the full breakdown of statutory deductions,
                  giving employees transparency and keeping your business
                  compliant.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center dark:from-emerald-950/30 dark:to-teal-950/30">
            <h2 className="text-xl font-semibold mb-3">
              Stop calculating deductions manually
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              PayrollJamaica automatically calculates and tracks all five
              statutory deductions for every employee — so you stay compliant and
              save hours each pay period.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Free Payroll Calculator
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </section>

          <FAQ
            title="Statutory Deductions FAQ"
            items={[
              {
                question: "What are the statutory deductions in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    Jamaica has five statutory deductions: PAYE (income tax at
                    25-30%), NIS (3% employee + 3% employer), NHT (2% employee +
                    3% employer), Education Tax (2.25% employee + 3.5%
                    employer), and HEART/NSTA (3% employer only). Every employer
                    must withhold employee portions and remit all contributions
                    to Tax Administration Jamaica by the 14th of the following
                    month.
                  </p>
                ),
              },
              {
                question: "When are statutory deductions due in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    All statutory deductions must be remitted to Tax
                    Administration Jamaica (TAJ) by the 14th of the month
                    following the pay period. For example, January payroll
                    deductions are due by February 14th. Year-end returns (S02
                    and P24 forms) are due by March 31st.
                  </p>
                ),
              },
              {
                question: "What is the NIS ceiling in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    The NIS annual insurable earnings ceiling is J$5,000,000
                    (approximately J$416,667 per month). Once an employee&apos;s
                    cumulative earnings reach this ceiling in a tax year, no
                    further NIS deductions are made. This ceiling applies to both
                    the employee and employer NIS contributions.
                  </p>
                ),
              },
              {
                question: "What happens if I pay statutory deductions late?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    Late payment attracts daily penalties of J$5,000 for late
                    filing plus interest on outstanding amounts at the prescribed
                    rate (~16.68% per annum). If an employer fails to deduct
                    PAYE, they become personally liable for the unpaid tax. TAJ
                    can also pursue prosecution for persistent non-compliance.
                  </p>
                ),
              },
              {
                question:
                  "Does HEART/NSTA apply to all employers in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    HEART/NSTA is a 3% employer-only contribution calculated on
                    total gross payroll. It applies to employers whose monthly
                    payroll exceeds a minimum threshold. The contribution funds
                    national workforce training and skills development
                    programmes. There is no employee deduction for HEART/NSTA.
                  </p>
                ),
              },
              {
                question: "How much do statutory deductions reduce take-home pay?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    For an employee earning J$150,000/month, total employee
                    deductions (PAYE + NIS + NHT + Education Tax) are
                    approximately J$17,123 — leaving a net take-home pay of
                    about J$132,877. The exact PAYE amount depends on taxable
                    income after the J$1,500,096 annual threshold. Use our free
                    calculator for exact figures.
                  </p>
                ),
              },
            ]}
            className="mt-12"
          />

          <RelatedPages exclude="/statutory-deductions-jamaica" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the statutory deductions in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jamaica has five statutory deductions: PAYE (income tax at 25-30%), NIS (3% employee + 3% employer), NHT (2% employee + 3% employer), Education Tax (2.25% employee + 3.5% employer), and HEART/NSTA (3% employer only). Every employer must withhold employee portions and remit all contributions to Tax Administration Jamaica by the 14th of the following month.",
                },
              },
              {
                "@type": "Question",
                name: "When are statutory deductions due in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All statutory deductions must be remitted to Tax Administration Jamaica (TAJ) by the 14th of the month following the pay period. Year-end returns (S02 and P24 forms) are due by March 31st.",
                },
              },
              {
                "@type": "Question",
                name: "What is the NIS ceiling in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The NIS annual insurable earnings ceiling is J$5,000,000 (approximately J$416,667 per month). Once an employee's cumulative earnings reach this ceiling in a tax year, no further NIS deductions are made for either employee or employer.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I pay statutory deductions late?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late payment attracts daily penalties of J$5,000 for late filing plus interest on outstanding amounts at the prescribed rate (~16.68% per annum). If an employer fails to deduct PAYE, they become personally liable for the unpaid tax.",
                },
              },
              {
                "@type": "Question",
                name: "Does HEART/NSTA apply to all employers in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HEART/NSTA is a 3% employer-only contribution calculated on total gross payroll. It applies to employers whose monthly payroll exceeds a minimum threshold set by HEART. There is no employee deduction for HEART/NSTA.",
                },
              },
              {
                "@type": "Question",
                name: "How much do statutory deductions reduce take-home pay?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For an employee earning J$150,000/month, total employee deductions (PAYE + NIS + NHT + Education Tax) are approximately J$17,123, leaving net take-home pay of about J$132,877. The exact amount depends on taxable income after the J$1,500,096 annual threshold.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
