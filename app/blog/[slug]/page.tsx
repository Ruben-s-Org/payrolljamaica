import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import BlogRelatedResources from "@/components/ui/blog-related-resources";
import BlogPostCTA from "@/components/ui/blog-post-cta";
import BlogEmailCapture from "@/components/ui/blog-email-capture";
import BlogScrollTracker from "@/components/clients/blog-scroll-tracker";
import BlogShareButtons from "@/components/ui/blog-share-buttons";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
import { safeJsonLd } from "@/lib/jsonld";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.seo.title || post.title;
  const baseDescriptionFallback =
    "Read Payroll Jamaica’s in-depth article featuring Jamaican payroll guidance, PAYE/NIS/NHT compliance, and practical advice for accurate, efficient payroll operations and HR workflows.";
  const description = ensureMinDescription(post.seo.description, baseDescriptionFallback);
  const url = canonical(`/blog/${post.seo.slug}`);
  const image = post.image;
  const keywords = ensureMinKeywords(post.seo.keywords);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const cta = post.links?.ctaBottom || post.links?.ctaInline;
  const postUrl = canonical(`/blog/${post.seo.slug}`);
  const publishDate = post.timestamp ? new Date(post.timestamp).toISOString() : new Date().toISOString();
  const title = post.seo.title || post.title;
  const description = post.seo.description || post.subtitle || "";

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: postUrl,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: "Payroll Jamaica",
      url: "https://payrolljamaica.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Payroll Jamaica",
      url: "https://payrolljamaica.com",
      logo: { "@type": "ImageObject", url: "https://payrolljamaica.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    ...(post.image ? { image: post.image } : {}),
    keywords: (post.seo.keywords || []).join(", "),
    inLanguage: "en-JM",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://payrolljamaica.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://payrolljamaica.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD: BlogPosting — safeJsonLd escapes </script> to prevent XSS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogPostingSchema) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <BlogScrollTracker slug={slug} />
      <Navbar />
      <main id="main-content" className="w-full px-4 pb-28 flex-1">
        <div className="max-w-5xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="underline hover:text-foreground">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="truncate max-w-[200px] sm:max-w-xs" aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-6 mb-4">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl">{post.subtitle}</p>
          )}
          {post.timestamp && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
              <time dateTime={new Date(post.timestamp).toISOString()}>
                Published{" "}
                {new Date(post.timestamp).toLocaleDateString("en-JM", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">|</span>
              <span>
                Updated{" "}
                {new Date(post.timestamp).toLocaleDateString("en-JM", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
          <BlogShareButtons url={postUrl} title={title} />
          <article
            className="mx-auto max-w-3xl text-base leading-7 md:leading-8 whitespace-normal break-words [&>*]:mt-6 [&>h2]:mt-12 [&>h3]:mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mx-auto max-w-3xl">
            <BlogEmailCapture />
            <BlogPostCTA
              variant={
                (post.seo.keywords || []).some((k: string) =>
                  /calculat|paye|nis|nht|tax|deduction|salary/i.test(k)
                )
                  ? "calculator"
                  : "signup"
              }
            />
            <BlogRelatedResources keywords={post.seo.keywords || []} title={post.title} />
          </div>
        </div>
      </main>
      <FooterSection />
      <FloatingCTA headline={cta?.headline} text={cta?.text} />
    </div>
  );
}
