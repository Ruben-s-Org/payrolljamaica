import Link from "next/link";
import type { Metadata } from "next";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { getAllPosts } from "@/lib/content";

const blogBaseDescription = "Explore Payroll Jamaica’s official blog for in-depth guides, product updates, statutory compliance tips, and best practices tailored to Jamaican businesses. Learn how to automate payroll calculations, stay compliant with PAYE, NIS, and NHT, streamline employee management, and reduce manual errors with clear workflows and local-first capabilities. We publish practical walkthroughs, implementation advice, and case studies to help owners, HR teams, and accountants save time, improve accuracy, and focus on growth. Whether you’re setting up payroll for the first time or scaling your processes, our articles provide actionable insights, templates, and checklists designed for Jamaica’s regulatory environment and real-world operations.";

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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full px-4 pb-28 flex-1">
        <div className="max-w-container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground mb-8">
            Latest updates and articles from Payroll Jamaica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.seo.slug}
                className="no-underline border rounded-lg p-5 hover:shadow transition"
                href={`/blog/${post.seo.slug}`}
              >
                <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                {post.subtitle && (
                  <p className="text-sm text-muted-foreground">{post.subtitle}</p>
                )}
              </Link>
            ))}
            {posts.length === 0 && (
              <div className="text-muted-foreground">No posts yet.</div>
            )}
          </div>
        </div>
      </main>
      <FooterSection />
      <FloatingCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </div>
  );
}
