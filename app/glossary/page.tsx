import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const baseDescription =
  "Complete glossary of Jamaica payroll terms — PAYE, NIS, NHT, Education Tax, HEART/NSTA, SO1, P24, TRN, and more. Understand every statutory deduction and payroll concept used in Jamaica.";

export const metadata: Metadata = {
  title: "Jamaica Payroll Glossary — Key Terms & Definitions | PayrollJamaica",
  description: ensureMinDescription(
    "Jamaica payroll glossary with clear definitions of PAYE, NIS, NHT, Education Tax, HEART/NSTA, SO1, P24, TRN, emoluments, statutory deductions, and every payroll term used in Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Jamaica payroll glossary",
    "what is PAYE Jamaica",
    "NIS meaning Jamaica",
    "what is NHT Jamaica",
    "Education Tax Jamaica",
    "HEART NSTA levy Jamaica",
    "Jamaica payroll terms",
    "statutory deductions Jamaica",
    "SO1 Jamaica",
    "P24 Jamaica",
    "TRN Jamaica",
    "emoluments Jamaica",
    "payroll definitions Jamaica",
  ]),
  alternates: {
    canonical: canonical("/glossary"),
    languages: {
      "en-JM": canonical("/glossary"),
      en: canonical("/glossary"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Jamaica Payroll Glossary — Key Terms & Definitions",
    description: baseDescription,
    url: canonical("/glossary"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Jamaica Payroll Glossary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Glossary | PayrollJamaica",
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
      name: "Glossary",
      item: `${siteConfig.url}/glossary`,
    },
  ],
};

interface GlossaryTerm {
  term: string;
  id: string;
  definition: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Allowance",
    id: "allowance",
    definition:
      "An additional payment made to an employee on top of their basic salary, such as a travel allowance, housing allowance, or meal allowance. In Jamaica, most allowances are considered part of emoluments and are subject to PAYE, NIS, NHT, and Education Tax unless specifically exempt under the Income Tax Act.",
  },
  {
    term: "Basic Pay / Basic Salary",
    id: "basic-pay",
    definition:
      "The fixed regular compensation an employee receives before any additions (overtime, bonuses, allowances) or deductions (PAYE, NIS, NHT). Basic pay forms the foundation of payroll calculations in Jamaica and is typically stated as a monthly or fortnightly amount in the employment contract.",
  },
  {
    term: "Bonus",
    id: "bonus",
    definition:
      "A lump-sum payment made to an employee in addition to regular salary, often tied to performance or company profits. In Jamaica, bonuses are fully taxable emoluments and are subject to PAYE, NIS, NHT, and Education Tax in the pay period they are paid.",
  },
  {
    term: "Deduction",
    id: "deduction",
    definition:
      "Any amount subtracted from an employee\u2019s gross pay. Deductions in Jamaica include statutory deductions (PAYE, NIS, NHT, Education Tax) mandated by law, as well as voluntary deductions such as pension contributions, loan repayments, and union dues.",
  },
  {
    term: "Education Tax",
    id: "education-tax",
    definition:
      "A statutory payroll tax in Jamaica that funds the national education system. The employee contributes 2.25% of gross emoluments and the employer contributes 3.5%. Education Tax is calculated on the full gross pay with no ceiling and is remitted to Tax Administration Jamaica (TAJ) monthly by the 14th of the following month.",
  },
  {
    term: "Emoluments",
    id: "emoluments",
    definition:
      "The total compensation received by an employee, including salary, wages, bonuses, allowances, commissions, and benefits in kind. In Jamaican tax law, emoluments form the base on which PAYE, NIS, NHT, and Education Tax are calculated. The term is used extensively in TAJ forms such as the SO1 and P24.",
  },
  {
    term: "Employer Contribution",
    id: "employer-contribution",
    definition:
      "The portion of statutory deductions paid by the employer rather than deducted from the employee\u2019s pay. In Jamaica, employer contributions include NIS (3%), NHT (3%), Education Tax (3.5%), and HEART/NSTA Levy (3%). These are an additional cost to the employer on top of gross salary.",
  },
  {
    term: "Gratuity",
    id: "gratuity",
    definition:
      "A lump-sum payment made to an employee upon retirement, redundancy, or termination of employment, typically based on years of service. In Jamaica, approved gratuity schemes may receive favourable tax treatment under the Income Tax Act, but unapproved gratuities are taxed as regular emoluments.",
  },
  {
    term: "Gross Pay",
    id: "gross-pay",
    definition:
      "The total amount an employee earns in a pay period before any deductions. Gross pay in Jamaica includes basic salary plus overtime, bonuses, commissions, and taxable allowances. It is the starting figure from which PAYE, NIS, NHT, and Education Tax are calculated.",
  },
  {
    term: "HEART/NSTA Levy",
    id: "heart-nsta",
    definition:
      "A statutory payroll levy of 3% paid solely by the employer to fund the HEART/NSTA Trust (Human Employment and Resource Training / National Service Training Agency). The levy supports workforce training and skills development programmes across Jamaica. It is calculated on total employee emoluments and remitted to TAJ monthly.",
  },
  {
    term: "Net Pay",
    id: "net-pay",
    definition:
      "The amount an employee actually receives after all statutory deductions (PAYE, NIS, NHT, Education Tax) and voluntary deductions have been subtracted from gross pay. Net pay is sometimes called \u201ctake-home pay\u201d and is the figure deposited to the employee\u2019s bank account or paid by cheque.",
  },
  {
    term: "NHT (National Housing Trust)",
    id: "nht",
    definition:
      "A statutory contribution that funds affordable housing for Jamaican workers. Employees contribute 2% and employers contribute 3% of gross emoluments, with no earnings ceiling. NHT contributions entitle employees to apply for housing benefits, including low-interest mortgage loans and housing grants. Contributions are remitted to TAJ monthly.",
  },
  {
    term: "NIS (National Insurance Scheme)",
    id: "nis",
    definition:
      "Jamaica\u2019s social security programme administered by the Ministry of Labour. Both employee and employer contribute 3% each of gross emoluments, subject to an annual earnings ceiling of J$5,000,000. NIS provides benefits including retirement pension, employment injury benefits, maternity allowance, and funeral grants. Contributions are remitted to TAJ monthly.",
  },
  {
    term: "Overtime",
    id: "overtime",
    definition:
      "Hours worked beyond the standard work week, typically compensated at a premium rate. Under Jamaica\u2019s Employment (Flexible Work Arrangements) (Miscellaneous Provisions) Act and the Minimum Wage Act, overtime is generally paid at 1.5 times the regular hourly rate (time-and-a-half). Overtime pay is part of gross emoluments and is subject to all statutory deductions.",
  },
  {
    term: "P24 (Employee Tax Deduction Certificate)",
    id: "p24",
    definition:
      "An official TAJ form that summarises an employee\u2019s total emoluments, PAYE deducted, and other statutory contributions for the tax year (January to December). Employers are required to provide each employee with a P24 by March 31 of the following year. It is used by employees when filing personal income tax returns.",
  },
  {
    term: "Pay Period",
    id: "pay-period",
    definition:
      "The recurring time frame for which an employee\u2019s wages are calculated and paid. Common pay periods in Jamaica include monthly, fortnightly (every two weeks), and weekly. The pay period determines how annual thresholds (such as the PAYE threshold of J$1,500,096/year) are prorated for each payroll run.",
  },
  {
    term: "PAYE (Pay As You Earn)",
    id: "paye",
    definition:
      "Jamaica\u2019s income tax withholding system, where employers deduct income tax from employees\u2019 emoluments at source and remit it to TAJ. The annual tax-free threshold is J$1,500,096 (J$125,008/month). Income above the threshold up to J$6,000,000 is taxed at 25%, and income above J$6,000,000 is taxed at 30%. PAYE must be remitted by the 14th of the month following the pay period.",
  },
  {
    term: "Payslip",
    id: "payslip",
    definition:
      "A document provided to an employee each pay period showing a breakdown of gross pay, all deductions (PAYE, NIS, NHT, Education Tax, and any voluntary deductions), employer contributions, and net pay. While not explicitly mandated by a single statute in Jamaica, providing payslips is best practice and expected under employment law.",
  },
  {
    term: "Remittance",
    id: "remittance",
    definition:
      "In payroll, the act of submitting statutory deductions (PAYE, NIS, NHT, Education Tax, HEART/NSTA) to Tax Administration Jamaica. Employers must remit all payroll taxes by the 14th of the month following the pay period. Late remittance attracts penalties and interest from TAJ.",
  },
  {
    term: "Salary Component",
    id: "salary-component",
    definition:
      "Any individual element that makes up an employee\u2019s total compensation package. Common salary components in Jamaica include basic salary, overtime, allowances (travel, housing, meal), bonuses, commissions, and benefits in kind. Each component may have different tax treatment depending on its nature.",
  },
  {
    term: "SO1 (Annual Return of Employees\u2019 Emoluments)",
    id: "so1",
    definition:
      "A statutory form filed annually with TAJ that reports every employee\u2019s total emoluments, PAYE deducted, NIS, NHT, and Education Tax contributions for the calendar year. The SO1 is due by March 31 each year and must include all employees who were paid during the year, even those who left mid-year. Failure to file on time attracts penalties.",
  },
  {
    term: "Statutory Deduction",
    id: "statutory-deduction",
    definition:
      "A deduction from an employee\u2019s pay that is required by Jamaican law. The statutory deductions are PAYE (income tax), NIS (3%), NHT (2%), and Education Tax (2.25%). Employers are legally obligated to withhold these amounts from employee emoluments and remit them to TAJ, along with the employer\u2019s share of contributions.",
  },
  {
    term: "TAJ (Tax Administration Jamaica)",
    id: "taj",
    definition:
      "The government agency responsible for tax collection and administration in Jamaica. TAJ handles registration of employers and employees (TRN issuance), collection of PAYE, NIS, NHT, Education Tax, and HEART/NSTA, and processing of statutory returns (SO1, P24). Employers interact with TAJ through the online eTAJ portal or in person at TAJ offices.",
  },
  {
    term: "TRN (Taxpayer Registration Number)",
    id: "trn",
    definition:
      "A unique nine-digit identification number assigned to every taxpayer in Jamaica by TAJ. Both individuals and businesses must have a TRN. For payroll, every employee must provide their TRN to the employer so that statutory deductions can be properly reported. The TRN is required on all TAJ filings including the SO1 and P24.",
  },
  {
    term: "Year-to-Date (YTD)",
    id: "ytd",
    definition:
      "The cumulative total of an employee\u2019s earnings and deductions from January 1 to the current pay period within the calendar year. YTD figures are essential in Jamaica for calculating whether an employee has exceeded the PAYE threshold (J$1,500,096/year), reached the NIS ceiling (J$5,000,000/year), and for preparing the SO1 annual return.",
  },
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Glossary</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Jamaica Payroll Glossary
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            A comprehensive guide to payroll terms used in Jamaica. Whether
            you&apos;re an employer running your first payroll or an HR
            professional brushing up on statutory requirements, this glossary
            covers every key term from PAYE to SO1.
          </p>

          {/* Quick-jump alphabet nav */}
          <nav
            aria-label="Jump to letter"
            className="flex flex-wrap gap-2 mb-10 text-sm"
          >
            {Array.from(
              new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))
            ).map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="px-2 py-1 border rounded hover:bg-muted transition font-medium"
              >
                {letter}
              </a>
            ))}
          </nav>

          <div className="space-y-10">
            {(() => {
              const grouped: Record<string, GlossaryTerm[]> = {};
              for (const t of glossaryTerms) {
                const letter = t.term[0].toUpperCase();
                if (!grouped[letter]) grouped[letter] = [];
                grouped[letter].push(t);
              }
              return Object.entries(grouped).map(([letter, terms]) => (
                <section key={letter} id={`letter-${letter}`}>
                  <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-4">
                    {letter}
                  </h2>
                  <dl className="space-y-6">
                    {terms.map((t) => (
                      <div key={t.id} id={t.id} className="scroll-mt-20">
                        <dt className="text-lg font-semibold">{t.term}</dt>
                        <dd className="text-muted-foreground mt-1">
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ));
            })()}
          </div>

          {/* CTA section */}
          <div className="mt-16 rounded-xl border bg-muted/50 p-8 text-center space-y-4">
            <h2 className="text-2xl font-semibold">
              See These Calculations in Action
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Use our free Jamaica payroll calculator to instantly compute PAYE,
              NIS, NHT, and Education Tax for any salary. Or explore our
              full-featured payroll software built for Jamaican businesses.
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
