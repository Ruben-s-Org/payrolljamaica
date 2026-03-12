/**
 * Dynamic sitemap — auto-generated at build time.
 * Covers all blog posts from /content/ + all static landing pages.
 * Takes precedence over /public/sitemap.xml in Next.js App Router.
 */
import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";

const SITE_URL = "https://payrolljamaica.com";
const TODAY = new Date().toISOString();

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  // === Core pages ===
  { url: `${SITE_URL}/`, lastModified: TODAY, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/calculator`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/blog`, lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/pricing`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/features`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/about`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/contact`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/glossary`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/partners`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/faq`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/industries`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/jamaica-payroll-glossary`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.75 },

  // === Main commercial landing pages ===
  { url: `${SITE_URL}/payroll-software-jamaica`, lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/hr-software-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/march-31-payroll-deadline-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/payroll-company-jamaica`, lastModified: TODAY, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/payroll-services`, lastModified: TODAY, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/payroll-outsourcing-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/payroll-processing-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/small-business-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/employee-management-software-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.75 },
  { url: `${SITE_URL}/payroll-year-end-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/new-business-payroll-checklist-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/paye-registration-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },

  // === Calculator landing pages (high search volume) ===
  { url: `${SITE_URL}/paye-calculator-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/nis-calculator-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/nht-calculator-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/education-tax-calculator-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/minimum-wage-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.85 },

  // === Comparison pages ===
  { url: `${SITE_URL}/compare/payroll-software-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/spreadsheets`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/quickbooks`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/sage`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/adp`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/gusto`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/compare/excel`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },

  // === Industry verticals (landing pages) ===
  { url: `${SITE_URL}/construction-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/education-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/finance-insurance-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/government-ngo-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/healthcare-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/manufacturing-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/retail-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/transportation-payroll-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-jamaica-hotels`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-jamaica-restaurants`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-jamaica-security`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-jamaica-churches`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },

  // === Industry sub-pages ===
  { url: `${SITE_URL}/industries/construction`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/industries/healthcare`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/industries/hospitality`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/industries/retail`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },

  // === Geographic / parish / city pages ===
  { url: `${SITE_URL}/payroll-kingston-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-montego-bay-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-portmore-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-mandeville-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-ocho-rios-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-spanish-town-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-may-pen-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-falmouth-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-negril-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-savanna-la-mar-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-port-antonio-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/payroll-morant-bay-jamaica`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.6 },

  // === Free downloadable resources ===
  { url: `${SITE_URL}/resources/jamaica-employer-tax-rates-2026`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources/march-31-paye-checklist`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources/monthly-payroll-checklist`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources/new-employee-onboarding-checklist`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources/jamaica-payroll-tax-rates-2026-cheat-sheet`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/resources/jamaica-employer-year-end-filing-guide`, lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },

  // === Legal ===
  { url: `${SITE_URL}/privacy`, lastModified: TODAY, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/terms`, lastModified: TODAY, changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const blogUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...STATIC_ROUTES, ...blogUrls];
}
