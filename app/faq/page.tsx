import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";

/* --------------- data types --------------- */

interface FAQ {
  question: string;
  answer: string;
  /** optional inline JSX answer (rendered instead of plain text when present) */
  richAnswer?: React.ReactNode;
}

interface FAQCategory {
  title: string;
  id: string;
  faqs: FAQ[];
}

/* --------------- FAQ content --------------- */

const faqCategories: FAQCategory[] = [
  {
    title: "PAYE & Income Tax",
    id: "paye-income-tax",
    faqs: [
      {
        question: "What is PAYE in Jamaica?",
        answer:
          "PAYE (Pay As You Earn) is Jamaica\u2019s income tax withholding system. Employers deduct income tax from employees\u2019 emoluments each pay period and remit it to Tax Administration Jamaica (TAJ) by the 14th of the following month.",
      },
      {
        question: "What is the PAYE tax-free threshold in Jamaica?",
        answer:
          "The annual PAYE tax-free threshold is J$1,500,096 per year, which is J$125,008 per month. Income up to this amount is not subject to income tax. You can see exactly how this affects your take-home pay using our free payroll calculator.",
      },
      {
        question: "What are the PAYE tax rates in Jamaica?",
        answer:
          "Income above the J$1,500,096 annual threshold up to J$6,000,000 is taxed at 25%. Income above J$6,000,000 is taxed at 30%. These rates apply to employment income, bonuses, commissions, and most allowances.",
      },
      {
        question: "How is PAYE calculated on a monthly salary in Jamaica?",
        answer:
          "Divide the annual threshold (J$1,500,096) by 12 to get the monthly threshold of J$125,008. Subtract that from gross monthly pay, then apply 25% on the first J$375,000 above the threshold and 30% on anything beyond. Our payroll calculator does this instantly.",
      },
      {
        question: "Are bonuses subject to PAYE in Jamaica?",
        answer:
          "Yes. Bonuses, performance incentives, and profit-sharing payments are treated as taxable emoluments. PAYE is withheld in the pay period the bonus is paid, along with NIS, NHT, and Education Tax deductions.",
      },
      {
        question: "When is the PAYE remittance deadline in Jamaica?",
        answer:
          "Employers must remit PAYE to TAJ by the 14th of the month following the pay period. For example, PAYE deducted from January salaries is due by February 14. Late remittance attracts penalties and interest.",
      },
      {
        question: "What is the difference between PAYE and income tax in Jamaica?",
        answer:
          "PAYE is the method of collecting income tax, not a separate tax. It refers specifically to income tax withheld at source by the employer. Self-employed individuals pay the same income tax rates but file and pay directly rather than through PAYE.",
      },
      {
        question: "Can an employee claim a PAYE refund in Jamaica?",
        answer:
          "Yes. If more PAYE was withheld than the employee\u2019s actual tax liability for the year, the employee can claim a refund by filing an income tax return with TAJ. This commonly happens when an employee starts mid-year or has multiple income sources.",
      },
    ],
  },
  {
    title: "NIS (National Insurance Scheme)",
    id: "nis",
    faqs: [
      {
        question: "What is NIS in Jamaica?",
        answer:
          "NIS (National Insurance Scheme) is Jamaica\u2019s social security programme. It provides retirement pensions, employment injury benefits, maternity allowance, funeral grants, and other social insurance benefits to contributing workers.",
      },
      {
        question: "What is the NIS contribution rate in Jamaica?",
        answer:
          "Both the employee and employer contribute 3% each of gross emoluments, for a combined total of 6%. The employee\u2019s 3% is deducted from their pay, while the employer\u2019s 3% is an additional cost on top of the salary.",
      },
      {
        question: "Is there a ceiling on NIS contributions in Jamaica?",
        answer:
          "Yes. NIS contributions are subject to an annual earnings ceiling of J$5,000,000. Once an employee\u2019s year-to-date gross emoluments reach J$5,000,000, no further NIS deductions are made for the remainder of the calendar year.",
      },
      {
        question: "What benefits does NIS provide in Jamaica?",
        answer:
          "NIS provides retirement pension (age 65+), employment injury benefits, invalidity benefits, maternity allowance, funeral grants, and widows/widowers\u2019 benefits. Eligibility depends on the number of contributions made over the employee\u2019s working life.",
      },
      {
        question: "How do I register for NIS as an employer in Jamaica?",
        answer:
          "Employers register for NIS through Tax Administration Jamaica (TAJ) when they register their business as an employer. Each employee must also have a TRN and NIS number. PayrollJamaica software tracks NIS contributions and the ceiling automatically.",
      },
    ],
  },
  {
    title: "NHT (National Housing Trust)",
    id: "nht",
    faqs: [
      {
        question: "What is NHT in Jamaica?",
        answer:
          "The National Housing Trust (NHT) is a statutory contribution that funds affordable housing for Jamaican workers. It provides low-interest mortgage loans, housing grants, and housing solutions to contributing employees.",
      },
      {
        question: "What is the NHT contribution rate in Jamaica?",
        answer:
          "Employees contribute 2% and employers contribute 3% of gross emoluments, for a combined total of 5%. Unlike NIS, NHT has no earnings ceiling \u2014 contributions are calculated on the full gross pay regardless of how high the salary is.",
      },
      {
        question: "How do NHT benefits work in Jamaica?",
        answer:
          "After contributing to NHT, employees can apply for housing benefits including low-interest mortgage loans (often below market rates), housing grants, and NHT refunds. Refund applications can be made every seven years or upon reaching age 65.",
      },
      {
        question: "Can I get an NHT refund in Jamaica?",
        answer:
          "Yes. Contributors can apply for an NHT refund of their contributions (with interest) every seven years, or at age 65. The refund is processed through the NHT directly. You will need records of your contribution history, which payroll software like PayrollJamaica keeps automatically.",
      },
      {
        question: "Is NHT mandatory for all employees in Jamaica?",
        answer:
          "Yes. NHT contributions are mandatory for all employed persons in Jamaica, including domestic workers. Both the employee (2%) and employer (3%) portions must be deducted and remitted to TAJ monthly by the 14th of the following month.",
      },
    ],
  },
  {
    title: "Education Tax & HEART/NSTA",
    id: "education-tax-heart",
    faqs: [
      {
        question: "What is Education Tax in Jamaica?",
        answer:
          "Education Tax is a statutory payroll tax that funds Jamaica\u2019s national education system. Employees contribute 2.25% and employers contribute 3.5% of gross emoluments. There is no earnings ceiling, so it applies to the full gross pay.",
      },
      {
        question: "What is the HEART/NSTA levy in Jamaica?",
        answer:
          "The HEART/NSTA (Human Employment and Resource Training / National Service Training Agency) levy is a 3% payroll tax paid solely by the employer. It funds workforce training and skills development programmes. Employees do not contribute to HEART.",
      },
      {
        question: "How much does an employer pay in total statutory contributions in Jamaica?",
        answer:
          "Employers pay NIS (3%) + NHT (3%) + Education Tax (3.5%) + HEART/NSTA (3%) = 12.5% of gross emoluments in employer contributions. This is on top of the employee\u2019s salary and their employee-side deductions. Use our payroll calculator to see exact employer costs for any salary.",
      },
      {
        question: "Are Education Tax and HEART/NSTA subject to a ceiling?",
        answer:
          "No. Unlike NIS (which has a J$5,000,000 annual ceiling), Education Tax and HEART/NSTA have no earnings ceiling. They are calculated on the full gross emoluments for every pay period throughout the year.",
      },
    ],
  },
  {
    title: "Filing & Compliance",
    id: "filing-compliance",
    faqs: [
      {
        question: "What is the SO1 form in Jamaica?",
        answer:
          "The SO1 (Annual Return of Employees\u2019 Emoluments) is a statutory form filed with TAJ that reports every employee\u2019s total emoluments, PAYE, NIS, NHT, and Education Tax for the calendar year. It is due by March 31 each year. PayrollJamaica generates the SO1 automatically.",
      },
      {
        question: "What is the P24 form in Jamaica?",
        answer:
          "The P24 is an Employee Tax Deduction Certificate that summarises an individual employee\u2019s total earnings and statutory deductions for the tax year. Employers must issue a P24 to each employee by March 31 of the following year. It is used for personal income tax filings.",
      },
      {
        question: "What are the penalties for late payroll filing in Jamaica?",
        answer:
          "TAJ imposes penalties for late filing and late remittance of payroll taxes. The SO1 late filing penalty can be up to J$3,000,000 depending on the number of employees. Monthly remittance penalties include a surcharge of up to 25% plus interest on the outstanding amount.",
      },
      {
        question: "What is the March 31 payroll deadline in Jamaica?",
        answer:
          "March 31 is the annual deadline for filing the SO1 return with TAJ and issuing P24 certificates to employees. Both cover the previous calendar year (January to December). This is one of the most critical compliance dates for Jamaican employers.",
      },
      {
        question: "How often must payroll taxes be remitted in Jamaica?",
        answer:
          "All statutory deductions (PAYE, NIS, NHT, Education Tax, and HEART/NSTA) must be remitted to TAJ monthly by the 14th of the month following the pay period. For example, March deductions are due by April 14.",
      },
      {
        question: "Do I need a TRN to run payroll in Jamaica?",
        answer:
          "Yes. Both the employer (business TRN) and every employee (individual TRN) must have a Taxpayer Registration Number issued by TAJ. The TRN is required on all statutory filings, payslips, and remittance returns. You can apply for a TRN at any TAJ office or online through eTAJ.",
      },
    ],
  },
  {
    title: "PayrollJamaica Software",
    id: "payrolljamaica-software",
    faqs: [
      {
        question: "What does PayrollJamaica software do?",
        answer:
          "PayrollJamaica is cloud-based payroll and HR software built specifically for Jamaican businesses. It automates salary calculations, PAYE, NIS, NHT, Education Tax, and HEART/NSTA deductions, generates payslips, produces SO1 and P24 reports, and ensures full statutory compliance.",
      },
      {
        question: "Is PayrollJamaica suitable for small businesses?",
        answer:
          "Yes. PayrollJamaica is designed for businesses of all sizes, from sole traders with one employee to enterprises with hundreds of staff. Our pricing scales with your team size, and setup takes minutes, not weeks.",
      },
      {
        question: "Does PayrollJamaica generate the SO1 and P24 automatically?",
        answer:
          "Yes. PayrollJamaica automatically generates SO1 annual returns and P24 employee certificates in the format required by TAJ. No manual spreadsheets or data entry needed \u2014 just review and submit.",
      },
      {
        question: "How does PayrollJamaica compare to QuickBooks for Jamaica payroll?",
        answer:
          "Unlike QuickBooks, which is built for the US/international market and requires manual configuration for Jamaica, PayrollJamaica is purpose-built for Jamaican statutory requirements. PAYE thresholds, NIS ceilings, NHT, Education Tax, and HEART are all built in from day one.",
      },
      {
        question: "Can I try PayrollJamaica for free?",
        answer:
          "Yes. You can use our free Jamaica payroll calculator right now to see how your salary breaks down. For full payroll software features, contact us for a demo or check our pricing page.",
      },
    ],
  },
];

/* --------------- flatten all FAQs for JSON-LD --------------- */

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

/* --------------- SEO metadata --------------- */

const baseDescription =
  "Comprehensive Jamaica payroll FAQ covering PAYE, NIS, NHT, Education Tax, HEART/NSTA, SO1 filing, P24 certificates, and payroll compliance. Get clear answers to the most common Jamaica payroll questions.";

export const metadata: Metadata = {
  title:
    "Jamaica Payroll FAQ \u2014 PAYE, NIS, NHT, Education Tax & Compliance | PayrollJamaica",
  description: ensureMinDescription(
    "Jamaica payroll FAQ with answers to common questions about PAYE income tax, NIS contributions, NHT, Education Tax, HEART/NSTA levy, SO1 filing, P24 certificates, payroll deadlines, and statutory compliance. Updated for 2026 tax year with current rates and thresholds.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Jamaica payroll FAQ",
    "PAYE FAQ Jamaica",
    "NIS FAQ Jamaica",
    "NHT FAQ Jamaica",
    "Education Tax Jamaica FAQ",
    "Jamaica payroll questions",
    "PAYE threshold Jamaica",
    "SO1 filing Jamaica",
    "P24 Jamaica",
    "payroll compliance Jamaica",
    "Jamaica payroll tax rates",
    "HEART NSTA levy FAQ",
    "payroll deadlines Jamaica",
    "Jamaica employer payroll guide",
    "statutory deductions Jamaica FAQ",
  ]),
  alternates: { canonical: canonical("/faq") },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jamaica Payroll FAQ \u2014 PAYE, NIS, NHT & Compliance Answers",
    description: baseDescription,
    url: canonical("/faq"),
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll FAQ \u2014 PAYE, NIS, NHT & Compliance Answers",
    description: baseDescription,
  },
};

/* --------------- JSON-LD schemas --------------- */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: `${siteConfig.url}/faq`,
    },
  ],
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* --------------- page component --------------- */

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqPageSchema) }}
      />
      <Navbar />
      <main className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">FAQ</li>
            </ol>
          </nav>

          {/* Heading */}
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Jamaica Payroll FAQ
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            Clear answers to the most frequently asked questions about payroll in
            Jamaica. Whether you&apos;re calculating{" "}
            <Link href="/calculator" className="underline hover:text-foreground">
              PAYE for the first time
            </Link>{" "}
            or preparing your{" "}
            <Link
              href="/march-31-payroll-deadline-jamaica"
              className="underline hover:text-foreground"
            >
              March 31 SO1 filing
            </Link>
            , you&apos;ll find the answer here.
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            All figures reflect the current 2026 tax year. Rates are set by TAJ
            and Jamaica&apos;s Ministry of Finance. For personalised
            calculations, try our{" "}
            <Link href="/calculator" className="underline hover:text-foreground">
              free payroll calculator
            </Link>
            .
          </p>

          {/* Category quick-jump nav */}
          <nav
            aria-label="Jump to category"
            className="flex flex-wrap gap-2 mb-12 text-sm"
          >
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 border rounded-lg hover:bg-muted transition font-medium"
              >
                {cat.title}
              </a>
            ))}
          </nav>

          {/* FAQ sections */}
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-20">
                <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-6">
                  {cat.title}
                </h2>
                <div className="space-y-6">
                  {cat.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group border rounded-lg"
                      open={i === 0}
                    >
                      <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold hover:bg-muted/50 transition rounded-lg">
                        <span>{faq.question}</span>
                        <span className="ml-3 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Summary table */}
          <div className="mt-16 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">
              Jamaica Payroll Tax Rates at a Glance
            </h2>
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-3 font-semibold">Deduction</th>
                  <th className="px-4 py-3 font-semibold">Employee</th>
                  <th className="px-4 py-3 font-semibold">Employer</th>
                  <th className="px-4 py-3 font-semibold">Ceiling</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-medium">PAYE (Income Tax)</td>
                  <td className="px-4 py-3">25% / 30%</td>
                  <td className="px-4 py-3">&mdash;</td>
                  <td className="px-4 py-3">
                    Threshold: J$1,500,096/yr
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">NIS</td>
                  <td className="px-4 py-3">3%</td>
                  <td className="px-4 py-3">3%</td>
                  <td className="px-4 py-3">J$5,000,000/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">NHT</td>
                  <td className="px-4 py-3">2%</td>
                  <td className="px-4 py-3">3%</td>
                  <td className="px-4 py-3">No ceiling</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Education Tax</td>
                  <td className="px-4 py-3">2.25%</td>
                  <td className="px-4 py-3">3.5%</td>
                  <td className="px-4 py-3">No ceiling</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">HEART/NSTA</td>
                  <td className="px-4 py-3">&mdash;</td>
                  <td className="px-4 py-3">3%</td>
                  <td className="px-4 py-3">No ceiling</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Internal links section */}
          <div className="mt-12 rounded-xl border bg-muted/30 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Related Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/calculator"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  Free Jamaica Payroll Calculator
                </Link>{" "}
                &mdash; Instantly calculate PAYE, NIS, NHT, and Education Tax
              </li>
              <li>
                <Link
                  href="/payroll-software-jamaica"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  PayrollJamaica Software
                </Link>{" "}
                &mdash; Automate your entire payroll workflow
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  Jamaica Payroll Glossary
                </Link>{" "}
                &mdash; Definitions for every payroll term
              </li>
              <li>
                <Link
                  href="/march-31-payroll-deadline-jamaica"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  March 31 Payroll Deadline Guide
                </Link>{" "}
                &mdash; Everything you need for SO1 and P24 filing
              </li>
              <li>
                <Link
                  href="/new-business-payroll-checklist-jamaica"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  New Business Payroll Checklist
                </Link>{" "}
                &mdash; First-time employer setup guide
              </li>
              <li>
                <Link
                  href="/minimum-wage-jamaica"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  Jamaica Minimum Wage 2026
                </Link>{" "}
                &mdash; Current rates and statutory impact
              </li>
              <li>
                <Link
                  href="/blog"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  Payroll Blog
                </Link>{" "}
                &mdash; 390+ articles on Jamaica payroll, tax, and HR
              </li>
            </ul>
          </div>

          {/* CTA section */}
          <div className="mt-12 rounded-xl border bg-muted/50 p-8 text-center space-y-4">
            <h2 className="text-2xl font-semibold">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Try our free payroll calculator to see exact deductions for any
              salary, or explore PayrollJamaica software to automate your
              entire payroll and compliance workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
              >
                Try the Free Calculator
              </Link>
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium hover:bg-muted transition"
              >
                Explore Payroll Software
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
