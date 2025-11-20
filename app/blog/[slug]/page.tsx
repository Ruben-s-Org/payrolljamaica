import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full px-4 pb-28 flex-1">
        <div className="max-w-5xl mx-auto py-14">
          <Link href="/blog" className="text-sm text-muted-foreground underline">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-6 mb-4">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{post.subtitle}</p>
          )}
          <article
            className="mx-auto max-w-3xl text-base leading-7 md:leading-8 whitespace-normal break-words [&>*]:mt-6 [&>h2]:mt-12 [&>h3]:mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </main>
      <FooterSection />
      <FloatingCTA headline={cta?.headline} text={cta?.text} />
    </div>
  );
}
