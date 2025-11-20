import fs from "fs";
import path from "path";

export interface PostSEO {
  slug: string;
  title: string;
  description?: string;
  keywords?: string[];
}

export interface PostLinksCTA {
  headline: string;
  text: string;
}

export interface PostLinks {
  ctaInline?: PostLinksCTA;
  ctaBottom?: PostLinksCTA;
}

export interface PostDoc {
  seo: PostSEO;
  image?: string;
  title: string;
  subtitle?: string;
  links?: PostLinks;
  html: string;
  timestamp?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function getAllPosts(): PostDoc[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is PostDoc => Boolean(p));
}

export function getPostBySlug(slug: string): PostDoc | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  try {
    const json = JSON.parse(raw) as PostDoc;
    return json;
  } catch (e) {
    console.error(`Failed to parse content JSON for slug ${slug}:`, e);
    return null;
  }
}
