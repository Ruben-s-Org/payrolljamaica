import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
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

  const articleUrl = canonical(`/blog/${post.seo.slug}`);
  const articleTitle = post.seo.title || post.title;
  const articleDescription = post.seo.description || post.subtitle || "";
  const articleImage = post.image ? canonical(post.image) : canonical(siteConfig.ogImage || "/og.jpg");
  const publishedDate = post.timestamp ? new Date(post.timestamp).toISOString() : new Date().toISOString();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full px-4 pb-28 flex-1">
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
      {/* JSON-LD: BlogPosting */}
      <Script id="ld-json-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: articleTitle,
          description: articleDescription,
          image: articleImage,
          url: articleUrl,
          datePublished: publishedDate,
          dateModified: publishedDate,
          inLanguage: "en-JM",
          author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: {
              "@type": "ImageObject",
              url: canonical(siteConfig.ogImage || "/og.jpg"),
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
          },
          keywords: post.seo.keywords?.join(", ") || "payroll Jamaica, PAYE Jamaica, NIS NHT",
        })}
      </Script>
      {/* JSON-LD: BreadcrumbList */}
      <Script id="ld-json-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: canonical("/blog"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: articleTitle,
              item: articleUrl,
            },
          ],
        })}
      </Script>
    </div>
  );
}
