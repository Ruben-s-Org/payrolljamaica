import fs from "fs";
import path from "path";
import sanitizeHtml from "sanitize-html";

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

/** Allowed HTML tags for blog post body content */
const ALLOWED_TAGS = [
  "h2", "h3", "h4", "h5", "h6",
  "p", "br", "hr",
  "strong", "em", "b", "i", "u", "s", "mark",
  "a", "ul", "ol", "li",
  "blockquote", "pre", "code",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  "div", "span",
  "sup", "sub",
];

/** Sanitize blog HTML — strips scripts, event handlers, iframes, and dangerous attributes */
function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "rel", "target", "title"],
      th: ["scope", "colspan", "rowspan"],
      td: ["colspan", "rowspan"],
      "*": ["class", "id"],
    },
    allowedSchemes: ["https", "http", "mailto"],
    // Internal links pass PageRank freely; only nofollow external links
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        const isInternal = href.startsWith("/") || href.startsWith("https://payrolljamaica.com");
        return {
          tagName,
          attribs: isInternal
            ? { ...attribs, rel: "noopener" }
            : { ...attribs, rel: "nofollow noopener noreferrer", target: "_blank" },
        };
      },
    },
  });
}

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
  // Guard against path traversal
  const safeslug = path.basename(slug);
  const filePath = path.join(CONTENT_DIR, `${safeslug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  try {
    const json = JSON.parse(raw) as PostDoc;
    // Sanitize HTML before returning — prevents XSS from AI-generated or tampered content
    json.html = sanitizeBlogHtml(json.html ?? "");
    return json;
  } catch (e) {
    console.error(`Failed to parse content JSON for slug ${slug}:`, e);
    return null;
  }
}
