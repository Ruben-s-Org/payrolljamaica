import Link from "next/link";
import type { Metadata } from "next";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import BlogFilter from "@/components/ui/blog-filter";
import { getAllPosts } from "@/lib/content";
import { safeJsonLd } from "@/lib/jsonld";

const blogBaseDescription = "Explore Payroll Jamaica's official blog for in-depth guides, product updates, statutory compliance tips, and best practices tailored to Jamaican businesses. Learn how to automate payroll calculations, stay compliant with PAYE, NIS, and NHT, streamline employee management, and reduce manual errors with clear workflows and local-first capabilities. We publish practical walkthroughs, implementation advice, and case studies to help owners, HR teams, and accountants save time, improve accuracy, and focus on growth. Whether you're setting up payroll for the first time or scaling your processes, our articles provide actionable insights, templates, and checklists designed for Jamaica's regulatory environment and real-world operations.";

export const metadata: Metadata = {
  title: "Payroll Jamaica Blog — Compliance Guides, PAYE, NIS & HR Tips",
  description: ensureMinDescription(
    "Latest updates and articles from Payroll Jamaica about payroll, HR, compliance, and product improvements for Jamaican businesses.",
    blogBaseDescription
  ),
  keywords: ensureMinKeywords([
    "Payroll Jamaica blog",
    "payroll best practices Jamaica",
    "Jamaica HR guides",
    "PAYE compliance Jamaica",
    "NIS NHT guidance",
    "Jamaica statutory deductions",
    "payslips Jamaica",
    "small business payroll tips",
    "Jamaica payroll automation",
    "HR compliance Jamaica",
    "employee management Jamaica",
    "leave tracking Jamaica",
  ]),
  alternates: { canonical: canonical("/blog") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "Payroll Jamaica Blog — Compliance Guides, PAYE, NIS & HR Tips",
    description: blogBaseDescription,
    url: canonical("/blog"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Jamaica Blog — Compliance Guides, PAYE, NIS & HR Tips",
    description: blogBaseDescription,
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "PayrollJamaica Blog",
  "description": "Expert guides on Jamaican payroll, PAYE, NIS, NHT, and HR compliance for business owners.",
  "url": "https://payrolljamaica.com/blog",
  "inLanguage": "en-JM",
  "publisher": {
    "@type": "Organization",
    "name": "PayrollJamaica",
    "url": "https://payrolljamaica.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://payrolljamaica.com/logo.png"
    }
  }
};

const FEATURED_SLUGS = [
  "free-jamaica-payroll-calculator-calculate-paye-nis-nht-instantly",
  "jamaica-payroll-tax-rates-2026-complete-guide-paye-nis-nht-education-tax",
  "jamaica-tax-year-end-march-31-2026-payroll-checklist-employer-guide",
  "how-to-do-payroll-first-time-jamaica-2026-complete-setup-guide",
];

const FEATURED_LABELS: Record<string, string> = {
  "free-jamaica-payroll-calculator-calculate-paye-nis-nht-instantly": "Most Popular",
  "jamaica-payroll-tax-rates-2026-complete-guide-paye-nis-nht-education-tax": "Essential Reference",
  "jamaica-tax-year-end-march-31-2026-payroll-checklist-employer-guide": "Time-Sensitive",
  "how-to-do-payroll-first-time-jamaica-2026-complete-setup-guide": "Getting Started",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const featuredPosts = FEATURED_SLUGS
    .map((slug) => posts.find((p) => p.seo.slug === slug))
    .filter(Boolean);

  const postData = posts.map((p) => ({
    slug: p.seo.slug,
    title: p.title,
    subtitle: p.subtitle,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full px-4 pb-28 flex-1">
        <div className="max-w-container mx-auto py-12">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground mb-2 max-w-2xl">
            Your go-to resource for Jamaican payroll, HR compliance, and
            statutory deductions. Browse {posts.length}+ guides, checklists,
            and tutorials.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            {posts.length} articles and counting
          </p>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Featured Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredPosts.map((post) => {
                  if (!post) return null;
                  const label = FEATURED_LABELS[post.seo.slug];
                  return (
                    <Link
                      key={post.seo.slug}
                      href={`/blog/${post.seo.slug}`}
                      className="no-underline group relative border-2 border-primary/20 rounded-lg p-5 hover:border-primary/50 hover:shadow-md transition bg-primary/[0.03]"
                    >
                      {label && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-3">
                          {label}
                        </span>
                      )}
                      <h3 className="text-base font-semibold mb-1.5 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      {post.subtitle && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {post.subtitle}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Divider */}
          <hr className="mb-8 border-border" />

          {/* All Posts with Filter */}
          <h2 className="text-xl font-semibold mb-4">All Articles</h2>
          <BlogFilter posts={postData} />
        </div>
      </main>
      <FooterSection />
      <FloatingCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogJsonLd) }}
      />
    </div>
  );
}
