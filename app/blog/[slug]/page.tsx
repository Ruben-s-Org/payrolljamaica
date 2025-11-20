import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata(
  { params }: BlogPostPageProps
): Metadata {
  const post = getPostBySlug(params.slug);
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const cta = post.links?.ctaBottom || post.links?.ctaInline;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full px-4 pb-28 flex-1">
        <div className="max-w-container mx-auto py-12">
          <Link href="/blog" className="text-sm text-muted-foreground underline">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
          {post.subtitle && (
            <p className="text-muted-foreground mb-6">{post.subtitle}</p>
          )}
          <article
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </main>
      <FooterSection />
      <FloatingCTA headline={cta?.headline} text={cta?.text} />
    </div>
  );
}
