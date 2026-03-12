import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Complete Jamaica payroll glossary: PAYE, NIS, NHT, Education Tax, HEART, SO1, P45, P46, P6, TD4, TAJ, Statutory Income, Gross Emoluments, Insurable Wage, Emoluments, Pension, Remittance — every term defined with current 2026/27 rates.";

export const metadata: Metadata = {
  title: "Jamaica Payroll Glossary — PAYE, NIS, NHT & More",
  description: ensureMinDescription(
    "Jamaica payroll glossary: PAYE, NIS, NHT, SO1, P45, P46, P6, TD4, TAJ, Statutory Income and more — every term defined with 2026/27 rates and links to.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Jamaica payroll glossary",
    "PAYE Jamaica definition",
    "NIS Jamaica meaning",
    "NHT Jamaica definition",
    "SO1 form Jamaica",
    "P45 Jamaica",
    "P46 Jamaica",
    "P6 form Jamaica",
    "TD4 Jamaica payroll",
    "TAJ Jamaica tax",
    "statutory income Jamaica",
    "Education Tax Jamaica",
    "HEART tax Jamaica",
    "Jamaica payroll terms",
    "payroll acronyms Jamaica",
    "gross emoluments Jamaica",
    "insurable wage Jamaica",
    "remittance Jamaica payroll",
  ]),
  alternates: {
    canonical: canonical("/jamaica-payroll-glossary"),
    languages: {
      "en-JM": canonical("/jamaica-payroll-glossary"),
      en: canonical("/jamaica-payroll-glossary"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Jamaica Payroll Glossary — PAYE, NIS, NHT & More",
    description: baseDescription,
    url: canonical("/jamaica-payroll-glossary"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Jamaica Payroll Glossary — PAYE, NIS, NHT and more defined" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Glossary — PAYE, NIS, NHT, SO1, P45 & More",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const glossaryTerms = [
  {
    term: "PAYE (Pay As You Earn)",
    anchor: "paye",
    definition:
      "PAYE is the system by which income tax is deducted from an employee's wages by their employer at the time of each payment, rather than the employee paying it directly to the Tax Administration Jamaica (TAJ) at year-end. In Jamaica, PAYE is the primary mechanism for collecting personal income tax.",
    detail:
      "For the 2026/27 tax year, PAYE applies at 25% on annual income above J$1,902,360 (J$158,530/month). Income above J$6,000,000 annually attracts a 30% rate on the excess. Income below the threshold is zero-rated. Employers are legally required to deduct PAYE from every applicable employee and remit to TAJ by the 14th of the following month.",
    links: [{ href: "/calculator", label: "Calculate PAYE" }, { href: "/payroll-software-jamaica", label: "Automate PAYE deductions" }],
  },
  {
    term: "NIS (National Insurance Scheme)",
    anchor: "nis",
    definition:
      "The National Insurance Scheme is Jamaica's compulsory social security programme, administered by the Ministry of Labour and Social Security. NIS provides contributory benefits including sickness benefit, retirement pension, employment injury benefit, and maternity benefit.",
    detail:
      "Current rates (2026/27): 3% employee contribution + 3% employer contribution, both calculated on insurable wages. The annual ceiling is J$5,000,000 — once an employee's cumulative insurable wages for the tax year reach J$5M, NIS contributions stop until April 1 resets the count. Contributions are remitted monthly alongside PAYE.",
    links: [{ href: "/payroll-software-jamaica", label: "Automate NIS calculations" }],
  },
  {
    term: "NHT (National Housing Trust)",
    anchor: "nht",
    definition:
      "The National Housing Trust is a statutory body that provides affordable mortgage financing to Jamaican contributors. Both employees and employers contribute to NHT on every pay period, with no income ceiling.",
    detail:
      "Current rates (2026/27): 2% employee contribution + 3% employer contribution, both calculated on gross emoluments. Unlike NIS, NHT has no annual ceiling — contributions apply to all income regardless of amount. NHT is calculated on gross pay (before NIS deduction), not on statutory income. Contributions are remitted monthly to NHT.",
    links: [{ href: "/calculator", label: "See NHT in the PAYE calculator" }],
  },
  {
    term: "Education Tax",
    anchor: "education-tax",
    definition:
      "Education Tax is a statutory levy in Jamaica that funds public education. It is paid by both employees and employers on every pay period, with no income ceiling.",
    detail:
      "Current rates (2026/27): 2.25% employee contribution + 3.5% employer contribution. Critically, Education Tax is calculated on statutory income — not on gross pay. Statutory income = gross emoluments minus the employee's NIS contribution. Employers must calculate NIS first, subtract it from gross, and then apply Education Tax rates to the resulting figure.",
    links: [{ href: "/payroll-software-jamaica", label: "Calculate Education Tax correctly" }],
  },
  {
    term: "HEART / NSTA (Human Employment and Resource Training Trust / National Service Training Agency)",
    anchor: "heart",
    definition:
      "HEART/NSTA Trust is Jamaica's national skills training and human resource development agency. The HEART levy is paid by employers only — employees make no contribution — and funds vocational training programmes across Jamaica.",
    detail:
      "Current rate (2026/27): 3% employer levy on gross emoluments. There is no employee-side deduction and HEART does not appear on employee pay slips as a deduction. However, it is a real cost to the employer: a business paying J$500,000/month in total gross wages owes J$15,000/month to HEART in addition to its NIS and NHT employer contributions.",
    links: [{ href: "/payroll-software-jamaica", label: "Track all employer levies" }],
  },
  {
    term: "SO1 / S01 (Employer Monthly Return)",
    anchor: "so1",
    definition:
      "The SO1 (also written S01) is the monthly employer return filed with the Tax Administration Jamaica (TAJ). It declares total emoluments paid and all statutory deductions (PAYE, NIS, NHT, Education Tax) for each employee for the month.",
    detail:
      "The SO1 is due on the 14th of the following month — so the April payroll SO1 is due by May 14. An annual SO1 (Annual Return) summarising the full tax year is due by March 31 (or April 14 for the year-end version). Filing late attracts a J$10,000 penalty per return plus interest on any outstanding tax. Employers submit via TAJ Online.",
    links: [{ href: "/payroll-software-jamaica", label: "Auto-generate SO1 returns" }],
  },
  {
    term: "P45 (Certificate of PAYE Deducted — Leaver)",
    anchor: "p45",
    definition:
      "A P45 is the certificate issued to an employee when they leave employment in Jamaica. It records their total gross pay and total PAYE deducted during their time with the employer in the current tax year.",
    detail:
      "Employers are required to issue a P45 within 14 days of an employee's final payment. The P45 is important for the departing employee: their new employer uses it to set the correct PAYE deduction from the start of the new employment, avoiding over- or under-deduction. The P45 must show employer registration number, employee NIS number, gross pay for the year to date, PAYE deducted, and the final employment date.",
    links: [{ href: "/payroll-software-jamaica", label: "Generate P45 forms automatically" }],
  },
  {
    term: "P46 (New Employee Declaration)",
    anchor: "p46",
    definition:
      "A P46 is completed by a new employee when they join an employer and do not have a P45 from a previous employer. It captures the information the employer needs to set the correct PAYE deduction from the first pay period.",
    detail:
      "The P46 records the employee's TRN (Tax Registration Number), NIS number, NHT number, and a declaration about whether this is their only employment or a second job. Without a P46 or P45, an employer cannot determine the correct PAYE rate and must apply the emergency rate — typically resulting in higher initial deductions. Collecting P46 forms from every new employee at onboarding is a compliance requirement.",
    links: [],
  },
  {
    term: "P6 (Employer Annual Return)",
    anchor: "p6",
    definition:
      "The P6 is the Employer Annual Return filed with TAJ at the end of each tax year. It is a comprehensive declaration of every employee's annual earnings and all statutory deductions for the full April–March tax year.",
    detail:
      "The P6 is due by April 14 following the close of the tax year. It must include every employee who worked during the year — including those who left mid-year — along with their annual gross pay, PAYE, NIS, NHT, and Education Tax. TAJ uses the P6 to cross-check against individual income tax returns. Errors on the P6 can trigger audit enquiries and require formal amendments.",
    links: [{ href: "/payroll-software-jamaica", label: "Generate your P6 automatically" }],
  },
  {
    term: "TD4 (Employee Annual Earnings Statement)",
    anchor: "td4",
    definition:
      "A TD4 is the annual earnings statement issued to each employee showing their total gross pay and all statutory deductions for the full tax year (April 1 to March 31). It is the Jamaican equivalent of a year-end pay summary.",
    detail:
      "TD4 certificates must be issued to all employees and former employees by March 31. Employees use their TD4 to file their personal income tax returns. The TD4 summary — an aggregated version listing all employees — is filed with TAJ alongside the SO1 Annual Return. Failure to issue TD4 certificates prevents employees from completing their own tax filings.",
    links: [{ href: "/payroll-software-jamaica", label: "Auto-generate TD4 certificates" }],
  },
  {
    term: "TAJ (Tax Administration Jamaica)",
    anchor: "taj",
    definition:
      "Tax Administration Jamaica is the government agency responsible for the administration and collection of taxes in Jamaica, including income tax, PAYE, GCT (General Consumption Tax), and other statutory levies. TAJ is the primary authority for employer tax compliance.",
    detail:
      "Employers interact with TAJ primarily through TAJ Online — the web portal where SO1 monthly returns, the P6 Annual Return, and TD4 summaries are submitted. TAJ issues penalties and interest notices for late filings. The TAJ website provides current tax tables, forms, and filing guides. Employers must be registered with TAJ before hiring staff.",
    links: [{ href: "/payroll-software-jamaica", label: "File with TAJ through PayrollJamaica" }],
  },
  {
    term: "Statutory Income",
    anchor: "statutory-income",
    definition:
      "Statutory income is the income figure used as the base for calculating Education Tax in Jamaica. It is not the same as gross pay — it is gross emoluments minus the employee's NIS contribution for the period.",
    detail:
      "Calculation: Statutory Income = Gross Emoluments − Employee NIS. For an employee earning J$200,000 gross: NIS = 3% × J$200,000 = J$6,000. Statutory Income = J$200,000 − J$6,000 = J$194,000. Education Tax (employee) = 2.25% × J$194,000 = J$4,365. This distinction matters for accuracy — applying Education Tax to gross pay rather than statutory income will result in a slight over-deduction.",
    links: [{ href: "/calculator", label: "See statutory income calculation" }],
  },
  {
    term: "Gross Emoluments",
    anchor: "gross-emoluments",
    definition:
      "Gross emoluments refers to the total value of all earnings paid to an employee before any deductions. In Jamaica, this includes basic salary, overtime, bonuses, commissions, allowances, and benefits in kind that are subject to tax.",
    detail:
      "Gross emoluments is the starting figure for all statutory calculations. NHT (employee and employer) and HEART (employer) are calculated on gross emoluments. NIS is also calculated on gross emoluments up to the annual insurable wage ceiling. Statutory income — and therefore Education Tax — is derived from gross emoluments. Payroll compliance requires recording gross emoluments accurately for every employee on every pay run.",
    links: [],
  },
  {
    term: "Insurable Wage",
    anchor: "insurable-wage",
    definition:
      "Insurable wage is the portion of an employee's earnings subject to NIS contributions. In Jamaica, NIS applies to insurable wages up to an annual ceiling of J$5,000,000.",
    detail:
      "For most employees earning below J$5M annually, all their wages are insurable wages and NIS is calculated on their full gross pay. For high-earning employees, once cumulative insurable wages in the tax year reach J$5,000,000, NIS contributions stop for that employee until April 1. Employers must track each employee's cumulative insurable wages against this ceiling throughout the year.",
    links: [{ href: "/payroll-software-jamaica", label: "Automate NIS ceiling tracking" }],
  },
  {
    term: "Emoluments",
    anchor: "emoluments",
    definition:
      "Emoluments is the broad legal term used in Jamaican tax law to describe all payments and benefits an employer provides to an employee in connection with their employment. It includes salary, wages, fees, bonuses, commissions, gratuities, and non-cash benefits.",
    detail:
      "Non-cash benefits (benefits in kind) such as a company car, housing, or employer-paid health insurance are emoluments and may be subject to PAYE. The taxable value of benefits in kind must be included in gross emoluments for PAYE calculation. What counts as a taxable emolument versus an exempt benefit (like a statutory pension contribution) is defined under the Income Tax Act.",
    links: [],
  },
  {
    term: "Pension (Approved Superannuation Fund)",
    anchor: "pension",
    definition:
      "Contributions to a TAJ-approved superannuation (pension) fund are deductible from gross emoluments before PAYE is calculated. This reduces the employee's taxable income and therefore their monthly PAYE liability.",
    detail:
      "For a pension contribution to reduce PAYE, the fund must be approved by TAJ. The deduction is applied after NIS but before calculating PAYE — so the PAYE base is: gross emoluments minus approved pension contribution minus PAYE threshold. Employer pension contributions are also deductible as a business expense. Not all workplace pension schemes qualify — confirm TAJ approval status before applying the deduction.",
    links: [],
  },
  {
    term: "Remittance",
    anchor: "remittance",
    definition:
      "In Jamaica payroll, remittance refers to the act of paying the statutory deductions collected from employees — PAYE, NIS, NHT, and Education Tax — to the relevant authorities (TAJ, NIS, NHT). Remittances are due monthly.",
    detail:
      "Monthly remittance deadlines: PAYE, Education Tax, and NIS remittances are due to TAJ by the 14th of the following month. NHT remittances are due to the NHT by the 14th. Late remittances attract interest and penalties — PAYE interest accrues daily on outstanding amounts. Employers must retain proof of all remittances for at least 7 years for audit purposes.",
    links: [{ href: "/payroll-software-jamaica", label: "Track all remittance deadlines" }],
  },
];

export default function JamaicaPayrollGlossaryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/60 text-sm text-muted-foreground font-medium mb-2">
              2026/27 tax year rates included
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Jamaica Payroll<br />Glossary
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Every PAYE, NIS, NHT, and statutory filing term you will encounter running payroll in Jamaica — defined clearly, with current 2026/27 rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Open PAYE calculator
              </Link>
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See PayrollJamaica software
              </Link>
            </div>
          </div>
        </section>

        {/* Quick-nav index */}
        <section className="w-full px-4 py-10 bg-muted/40 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">Jump to a term</p>
            <div className="flex flex-wrap justify-center gap-2">
              {glossaryTerms.map((t) => (
                <a
                  key={t.anchor}
                  href={`#${t.anchor}`}
                  className="px-3 py-1.5 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted transition-colors"
                >
                  {t.term.split(" (")[0].split("/")[0].trim()}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary entries */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {glossaryTerms.map((item) => (
              <div key={item.anchor} id={item.anchor} className="scroll-mt-24 rounded-xl border border-border bg-background p-8">
                <h2 className="text-2xl font-semibold mb-3">{item.term}</h2>
                <p className="text-base text-foreground mb-4">{item.definition}</p>
                <p className="text-sm text-muted-foreground mb-5">{item.detail}</p>
                {item.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Summary rates table */}
        <section className="w-full px-4 py-16 bg-muted/40 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              2026/27 Jamaica payroll rates at a glance
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              All statutory rates for the April 2026 – March 2027 tax year. Use the calculator for exact pay-period amounts.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Contribution</th>
                    <th className="px-6 py-3 text-right font-semibold">Employee rate</th>
                    <th className="px-6 py-3 text-right font-semibold">Employer rate</th>
                    <th className="px-6 py-3 text-left font-semibold">Ceiling / base</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: "PAYE", employee: "25% / 30%", employer: "—", note: "On income above J$1,902,360/yr" },
                    { name: "NIS", employee: "3%", employer: "3%", note: "Ceiling: J$5,000,000/yr insurable wages" },
                    { name: "NHT", employee: "2%", employer: "3%", note: "On gross emoluments, no ceiling" },
                    { name: "Education Tax", employee: "2.25%", employer: "3.5%", note: "On statutory income (gross minus NIS)" },
                    { name: "HEART/NSTA", employee: "—", employer: "3%", note: "Employer only, on gross emoluments" },
                  ].map((row) => (
                    <tr key={row.name} className="bg-background hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.name}</td>
                      <td className="px-6 py-4 text-right">{row.employee}</td>
                      <td className="px-6 py-4 text-right">{row.employer}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              PAYE: 25% applies from J$1,902,360 to J$6,000,000 annual income; 30% applies above J$6,000,000.
            </p>
          </div>
        </section>

        {/* Related resources */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Related Jamaica payroll resources
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Deeper guides on the topics covered in this glossary.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "PAYE Calculator 2026/27",
                  desc: "Enter any gross salary and instantly see PAYE, NIS, NHT, and Education Tax deductions under 2026/27 rates.",
                  href: "/calculator",
                  cta: "Open calculator",
                },
                {
                  title: "Jamaica Payroll Year-End Guide",
                  desc: "Complete checklist for closing the March 31 tax year: SO1, TD4, NHT, and P6 filings explained.",
                  href: "/payroll-year-end-jamaica",
                  cta: "Read year-end guide",
                },
                {
                  title: "PayrollJamaica Software",
                  desc: "Run payroll with every PAYE, NIS, NHT, Education Tax, and HEART calculation automated and compliant.",
                  href: "/payroll-software-jamaica",
                  cta: "See the software",
                },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="rounded-xl border border-border bg-background p-6 space-y-3 hover:bg-muted/30 transition-colors block"
                >
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                  <span className="text-sm font-medium text-primary">{r.cta} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-20 bg-muted/40">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Stop looking up the rules. Let the software handle it.
            </h2>
            <p className="text-muted-foreground">
              PayrollJamaica calculates PAYE, NIS, NHT, Education Tax, and HEART correctly on every payroll run — 2026/27 rates included. SO1 returns generated automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started with PayrollJamaica
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Try the PAYE calculator
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FAQPage",
                  mainEntity: glossaryTerms.map((item) => ({
                    "@type": "Question",
                    name: `What is ${item.term.split(" (")[0]}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `${item.definition} ${item.detail}`,
                    },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Jamaica Payroll Resources", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Jamaica Payroll Glossary", item: `${siteConfig.url}/jamaica-payroll-glossary` },
                  ],
                },
                {
                  "@type": "WebPage",
                  name: "Jamaica Payroll Glossary",
                  description: baseDescription,
                  url: canonical("/jamaica-payroll-glossary"),
                  inLanguage: "en-JM",
                  about: glossaryTerms.map((item) => ({
                    "@type": "DefinedTerm",
                    name: item.term.split(" (")[0],
                    description: item.definition,
                    inDefinedTermSet: {
                      "@type": "DefinedTermSet",
                      name: "Jamaica Payroll Glossary",
                      url: canonical("/jamaica-payroll-glossary"),
                    },
                  })),
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
