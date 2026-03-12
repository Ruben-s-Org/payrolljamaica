import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";

const baseDescription =
  "Complete guide to the SO1 return in Jamaica — the annual employer return of income tax (PAYE) deducted from emoluments. Learn who must file, when it is due (March 31), penalties for late filing, step-by-step filing instructions, and how Payroll Jamaica automates SO1 generation for TAJ compliance.";

export const metadata: Metadata = {
  title: "SO1 Return Jamaica — Annual PAYE Filing Guide 2026",
  description: ensureMinDescription(
    "SO1 return Jamaica explained. Who must file, March 31 deadline, penalties, step-by-step filing guide, and how to automate SO1 generation for TAJ.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "SO1 return Jamaica",
    "SO1 form Jamaica",
    "SO1 annual return Jamaica",
    "Jamaica SO1 filing",
    "annual return of income tax Jamaica",
    "SO1 employer return Jamaica",
    "statutory declaration SO1 Jamaica",
    "PAYE annual return Jamaica",
    "TAJ SO1 form",
    "SO1 filing deadline Jamaica",
    "March 31 SO1 Jamaica",
    "SO1 penalties Jamaica",
    "employer year end filing Jamaica",
    "Jamaica PAYE year end return",
    "automate SO1 Jamaica",
  ]),
  alternates: {
    canonical: canonical("/so1-return-jamaica"),
    languages: {
      "en-JM": canonical("/so1-return-jamaica"),
      en: canonical("/so1-return-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SO1 Return Jamaica — Annual PAYE Filing Guide 2026",
    description: baseDescription,
    url: canonical("/so1-return-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "SO1 Return Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SO1 Return Jamaica — Annual PAYE Filing Guide",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function So1ReturnJamicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-24">
        <div className="max-w-3xl mx-auto py-14">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">SO1 Return Jamaica</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Updated for 2026 tax year — deadline March 31, 2026
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            SO1 Return Jamaica — Annual Employer PAYE Return
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Everything employers need to know about the SO1 form: what it is, who must file,
            the March 31 deadline, penalties for late filing, and how to generate it automatically
            with Payroll Jamaica.
          </p>

          {/* What is the SO1 */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">What is the SO1 form in Jamaica?</h2>
            <p>
              The <strong className="text-foreground">SO1</strong> (also written S01) is the{" "}
              <strong className="text-foreground">Statutory Declaration &mdash; Annual Return of Income Tax
              Deducted from Emoluments</strong>. It is the form every Jamaican employer must file with{" "}
              <strong className="text-foreground">Tax Administration Jamaica (TAJ)</strong> at the end of each
              fiscal year.
            </p>
            <p>
              The SO1 summarises <em>all</em> PAYE (Pay As You Earn) income tax that the employer deducted from
              employees&apos; salaries throughout the tax year (April 1 &ndash; March 31) and remitted to TAJ.
              It serves as the annual reconciliation between the monthly P45 remittances you filed during the
              year and the total PAYE liability for each employee.
            </p>
            <p>
              Each line on the SO1 lists an individual employee&apos;s TRN, name, gross emoluments, tax-free
              threshold applied, taxable income, and total PAYE deducted for the year. Alongside the SO1,
              employers must also issue a{" "}
              <strong className="text-foreground">P24 (Certificate of Emoluments)</strong> to each employee,
              which is the employee&apos;s personal copy of their annual earnings and deductions.
            </p>
          </section>

          {/* Who must file */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">Who must file the SO1 return?</h2>
            <p>
              <strong className="text-foreground">Every employer registered with TAJ</strong> for PAYE must
              file the SO1 &mdash; regardless of the number of employees. This includes:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Limited liability companies (Ltd)</li>
              <li>Sole traders with at least one employee</li>
              <li>Partnerships with paid staff</li>
              <li>Non-profit organisations, NGOs, and churches</li>
              <li>Government agencies and statutory bodies</li>
              <li>Schools, hospitals, and other institutional employers</li>
            </ul>
            <p>
              If you registered as a PAYE employer during the tax year &mdash; even if you only employed staff
              for part of the year &mdash; you must still file an SO1 covering the period of employment. There
              is no exemption based on the size of your payroll or the amount of PAYE deducted.
            </p>
          </section>

          {/* When is it due */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">When is the SO1 due?</h2>
            <p>
              The SO1 must be filed with TAJ by{" "}
              <strong className="text-foreground">March 31 each year</strong>. Jamaica&apos;s tax year runs
              from April 1 to March 31, so the SO1 for the 2025/2026 tax year is due on{" "}
              <strong className="text-foreground">March 31, 2026</strong>.
            </p>
            <p>
              This is the same deadline as many other employer year-end obligations, including filing the
              annual NIS and NHT returns. See our{" "}
              <Link href="/march-31-payroll-deadline-jamaica" className="text-foreground underline hover:no-underline">
                March 31 payroll deadline guide
              </Link>{" "}
              for the full list of year-end obligations.
            </p>
            <div className="p-4 rounded-lg border border-border bg-muted/10">
              <p className="font-semibold text-foreground mb-1">Key date</p>
              <p>
                March 31, 2026 &mdash; SO1 filing deadline for the April 2025 &ndash; March 2026 tax year.
                If March 31 falls on a weekend or public holiday, TAJ typically expects filing by the last
                business day before the deadline.
              </p>
            </div>
          </section>

          {/* PAYE rates covered */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">PAYE rates reported on the SO1</h2>
            <p>
              The SO1 covers all PAYE deductions for the tax year. The current PAYE structure
              (2025/2026 tax year) is:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Annual income band</th>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">PAYE rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border">Up to J$1,500,096</td>
                    <td className="p-3 border-b border-border">0% (tax-free threshold)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">J$1,500,097 &ndash; J$6,000,000</td>
                    <td className="p-3 border-b border-border">25%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Above J$6,000,000</td>
                    <td className="p-3">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Each employee&apos;s total PAYE for the year should reconcile with these rates applied to their
              gross emoluments minus the annual threshold. Use our{" "}
              <Link href="/calculator" className="text-foreground underline hover:no-underline">
                payroll calculator
              </Link>{" "}
              to verify deductions before filing.
            </p>
          </section>

          {/* Penalties */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">Penalties for late SO1 filing</h2>
            <p>
              Filing the SO1 after March 31 carries serious financial penalties:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-foreground">Late filing surcharge:</strong> TAJ imposes a penalty of up
                to <strong className="text-foreground">J$50,000 per month</strong> (or part thereof) for each
                month the return is outstanding.
              </li>
              <li>
                <strong className="text-foreground">Interest on underpaid PAYE:</strong> If the SO1 reveals that
                PAYE was under-remitted during the year, interest accrues on the shortfall from the original due
                date of each monthly payment.
              </li>
              <li>
                <strong className="text-foreground">Prosecution risk:</strong> Persistent non-filers may face
                prosecution by TAJ. The Income Tax Act empowers TAJ to bring criminal charges for failure to
                file statutory declarations.
              </li>
            </ul>
            <p>
              Beyond financial penalties, late filing delays your employees&apos; ability to file their own
              annual tax returns and claim refunds &mdash; damaging employee trust and morale.
            </p>
          </section>

          {/* Step-by-step filing guide */}
          <section className="mb-10 space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">How to file the SO1 &mdash; step by step</h2>

            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Reconcile all monthly PAYE remittances",
                  content: (
                    <p>
                      Before completing the SO1, reconcile every monthly P45 remittance you filed during the
                      year with your payroll records. Ensure that the total PAYE deducted from each employee
                      matches the sum of monthly deductions. Flag any discrepancies (missed months, over- or
                      under-deductions) for correction.
                    </p>
                  ),
                },
                {
                  step: "Step 2",
                  title: "Compile employee-level data",
                  content: (
                    <>
                      <p>For each employee who received emoluments during the tax year, gather:</p>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Employee TRN (Taxpayer Registration Number)</li>
                        <li>Full legal name</li>
                        <li>Total gross emoluments for the year</li>
                        <li>Tax-free threshold applied (standard: J$1,500,096)</li>
                        <li>Taxable income (gross minus threshold and approved deductions)</li>
                        <li>Total PAYE deducted</li>
                        <li>Employment start and end dates (if applicable)</li>
                      </ul>
                    </>
                  ),
                },
                {
                  step: "Step 3",
                  title: "Complete the SO1 form",
                  content: (
                    <p>
                      Fill in the SO1 form with your employer TRN, employer registration number, and the
                      employee-level data compiled in Step 2. The form includes a summary section showing the
                      total PAYE deducted across all employees and the total amount remitted to TAJ during the
                      year. These two figures must match &mdash; any difference must be explained or settled
                      before filing.
                    </p>
                  ),
                },
                {
                  step: "Step 4",
                  title: "Generate P24 certificates for each employee",
                  content: (
                    <p>
                      The <strong className="text-foreground">P24 (Certificate of Emoluments)</strong> is the
                      employee&apos;s personal record of their annual earnings and PAYE deductions. Employers
                      must issue a P24 to every employee by March 31. Employees need this document to file
                      their own individual income tax returns.
                    </p>
                  ),
                },
                {
                  step: "Step 5",
                  title: "Submit to TAJ by March 31",
                  content: (
                    <>
                      <p>
                        Submit the completed SO1 form to TAJ. You can file:
                      </p>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li><strong className="text-foreground">Online:</strong> Through the TAJ e-Services portal (eservices.taj.gov.jm)</li>
                        <li><strong className="text-foreground">In person:</strong> At any TAJ Taxpayer Services office</li>
                        <li><strong className="text-foreground">Via post:</strong> Mailed to TAJ (must be received by March 31)</li>
                      </ul>
                      <p className="mt-2">
                        Keep a signed copy for your records. TAJ recommends retaining payroll records and SO1
                        copies for at least seven years.
                      </p>
                    </>
                  ),
                },
              ].map(({ step, title, content }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 pt-0.5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {step}
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-foreground font-semibold text-base">{title}</h3>
                    <div className="text-muted-foreground">{content}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Automate with Payroll Jamaica */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">How Payroll Jamaica automates SO1 generation</h2>
            <p>
              Manually compiling the SO1 from spreadsheets and paper records is time-consuming and error-prone
              &mdash; especially for employers with dozens or hundreds of employees. Payroll Jamaica eliminates
              this burden entirely:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-foreground">Automatic PAYE calculation every pay period</strong> &mdash;
                PAYE is calculated correctly at 25% (up to J$6M) and 30% (above J$6M), with the J$1,500,096
                threshold applied automatically. No manual lookups.
              </li>
              <li>
                <strong className="text-foreground">Monthly P45 data always ready</strong> &mdash; every
                monthly remittance is tracked and stored, so year-end reconciliation is instant.
              </li>
              <li>
                <strong className="text-foreground">One-click SO1 generation</strong> &mdash; at year-end,
                generate your complete SO1 return with a single click. All employee data, PAYE totals, and
                reconciliation figures are pre-populated.
              </li>
              <li>
                <strong className="text-foreground">P24 certificates auto-generated</strong> &mdash; every
                employee&apos;s Certificate of Emoluments is generated simultaneously, ready to distribute.
              </li>
              <li>
                <strong className="text-foreground">Year-over-year audit trail</strong> &mdash; all historical
                SO1 filings and supporting payroll data are stored securely in the cloud for TAJ audits.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mb-10 p-8 rounded-xl border border-border bg-muted/10 text-center space-y-4">
            <h2 className="text-foreground text-xl font-semibold">File your SO1 with confidence</h2>
            <p className="text-sm text-muted-foreground">
              Stop scrambling at year-end. Payroll Jamaica tracks every PAYE deduction throughout the year
              and generates your SO1 return and P24 certificates automatically &mdash; accurate, compliant,
              and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
              >
                Try the payroll calculator
              </Link>
            </div>
          </section>

          {/* Related resources */}
          <section className="text-sm text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold mb-4">Related guides</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><Link href="/march-31-payroll-deadline-jamaica" className="text-foreground underline hover:no-underline">March 31 Payroll Deadline Jamaica</Link></li>
              <li><Link href="/paye-registration-jamaica" className="text-foreground underline hover:no-underline">How to Register for PAYE in Jamaica</Link></li>
              <li><Link href="/resources/jamaica-employer-year-end-filing-guide" className="text-foreground underline hover:no-underline">Jamaica Employer Year-End Filing Guide</Link></li>
              <li><Link href="/calculator" className="text-foreground underline hover:no-underline">Jamaica Payroll Calculator 2026</Link></li>
              <li><Link href="/payroll-year-end-jamaica" className="text-foreground underline hover:no-underline">Jamaica Payroll Year-End Guide</Link></li>
              <li><Link href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">Payroll Software Jamaica</Link></li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="SO1 deadline approaching?"
        text="Payroll Jamaica generates your SO1 return and P24 certificates automatically. Never miss the March 31 deadline."
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "SO1 Return Jamaica", item: canonical("/so1-return-jamaica") },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the SO1 form in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SO1 (Statutory Declaration — Annual Return of Income Tax Deducted from Emoluments) is the form every Jamaican employer must file with Tax Administration Jamaica (TAJ) at the end of each tax year. It summarises all PAYE income tax deducted from employees' salaries during the April 1 – March 31 fiscal year.",
                },
              },
              {
                "@type": "Question",
                name: "When is the SO1 return due in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SO1 must be filed with TAJ by March 31 each year. Jamaica's tax year runs April 1 to March 31, so the SO1 for the 2025/2026 tax year is due on March 31, 2026.",
                },
              },
              {
                "@type": "Question",
                name: "Who must file the SO1 return?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every employer registered with Tax Administration Jamaica (TAJ) for PAYE must file the SO1, regardless of the number of employees. This includes limited companies, sole traders with employees, partnerships, NGOs, churches, schools, and government agencies.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I file the SO1 late?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late SO1 filing incurs a penalty of up to J$50,000 per month (or part thereof) the return is outstanding. Interest also accrues on any under-remitted PAYE. Persistent non-filers may face prosecution by TAJ under the Income Tax Act.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between the SO1 and the P24?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SO1 is the employer's annual return filed with TAJ listing all employees' PAYE deductions. The P24 (Certificate of Emoluments) is the individual employee's copy of their annual earnings and deductions, issued by the employer. Both must be completed by March 31.",
                },
              },
              {
                "@type": "Question",
                name: "What PAYE rates are reported on the SO1?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SO1 reports PAYE deducted at Jamaica's current rates: 0% on annual income up to J$1,500,096 (tax-free threshold), 25% on income between J$1,500,097 and J$6,000,000, and 30% on income above J$6,000,000.",
                },
              },
              {
                "@type": "Question",
                name: "Can I file the SO1 online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the SO1 can be filed online through the TAJ e-Services portal at eservices.taj.gov.jm. It can also be submitted in person at any TAJ Taxpayer Services office or by post.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
