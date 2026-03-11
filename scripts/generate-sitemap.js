#!/usr/bin/env node
/*
  Minimal sitemap generator
  - Includes home page '/'
  - Includes blog listing '/blog'
  - Includes blog article pages from flat JSON files in /content (seo.slug)
  - Writes to /public/sitemap.xml
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// __dirname shim for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const contentDir = path.join(projectRoot, 'content');

const SITE_URL = process.env.SITE_URL || 'https://payrolljamaica.com';
const today = new Date();
const lastmod = today.toISOString().slice(0, 10); // YYYY-MM-DD

/** Read file safely */
function readTextSafe(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return '';
  }
}

// No whitepapers in this sitemap version

/** Basic HTML utility: strip <script>/<style>, tags, and collapse whitespace */
function extractVisibleText(html) {
  if (!html) return '';
  let txt = String(html);
  // Remove script and style blocks
  txt = txt.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  txt = txt.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  // Remove noscript contents (keep fallback text content)
  txt = txt.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  // Replace <br> and block-level tags with line breaks to preserve some structure
  txt = txt.replace(/<\/(p|div|section|article|header|footer|li|ul|ol|h[1-6]|main|nav)>/gi, '\n$&');
  // Strip all tags
  txt = txt.replace(/<[^>]+>/g, ' ');
  // Decode basic HTML entities
  const entityMap = { '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" };
  txt = txt.replace(/(&nbsp;|&amp;|&lt;|&gt;|&quot;|&#39;)/g, (m) => entityMap[m] || ' ');
  // Collapse whitespace and trim
  txt = txt.replace(/[\t\r ]+/g, ' ');
  txt = txt.replace(/\s*\n\s*/g, '\n');
  return txt.trim();
}

/** Extract meta keywords from an HTML string */
function extractMetaKeywords(html) {
  if (!html) return '';
  const m = html.match(/<meta[^>]*name=["']keywords["'][^>]*>/i);
  if (!m) return '';
  const tag = m[0];
  const c = tag.match(/content=["']([^"']+)["']/i);
  return c ? c[1].trim() : '';
}

// Not fetching snapshots in the minimal sitemap

/** Build ai.txt content (emerging convention) */
function buildAiTxt(urls, homeText, keywords) {
  const lines = [];
  lines.push(`# ai.txt — guidance for AI crawlers`);
  lines.push(`# Auto-generated on ${lastmod}`);
  lines.push('');
  lines.push(`Site: ${SITE_URL}`);
  lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
  lines.push('Contact: contact@payrolljamaica.com');
  lines.push('Publisher: payrolljamaica.com');
  lines.push('');
  lines.push('# Access policy');
  lines.push('Allow: /');
  lines.push('Disallow: /components');
  lines.push('Disallow: /thankyou');
  lines.push('Crawl-Delay: 1');
  lines.push('');
  lines.push('# Usage policy');
  lines.push('Training: Allowed with attribution and link back to https://payrolljamaica.com');
  lines.push('Attribution: Please attribute to "PayrollJamaica (https://payrolljamaica.com)" when our content is used or referenced.');
  lines.push('Redistribution: Allowed with attribution; do not misrepresent original context.');
  lines.push('');
  lines.push('# Hints');
  lines.push(`Pages: ${urls.length}`);
  lines.push('Preferred-Content: /blog');
  lines.push('Update-Frequency: daily');
  lines.push('');
  if (keywords) {
    lines.push('# Keywords');
    lines.push(keywords);
    lines.push('');
  }
  if (homeText) {
    lines.push('# Home Page Text');
    lines.push(homeText);
    lines.push('');
  }
  return lines.join('\n') + '\n' + AI_LLM_FOOTER + '\n';
}

/** Build llms.txt content (experimental guidance for LLMs) */
function buildLlmsTxt(urls, homeText, keywords) {
  const lines = [];
  lines.push(`# llms.txt — guidance for LLM dataset builders`);
  lines.push(`# Auto-generated on ${lastmod}`);
  lines.push('');
  lines.push(`Domain: ${SITE_URL}`);
  lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
  lines.push('Contact: contact@payrolljamaica.com');
  lines.push('');
  lines.push('# License & usage');
  lines.push('Use: You may use and index public pages for non-malicious purposes.');
  lines.push('Training: Permitted with attribution and a link to https://payrolljamaica.com.');
  lines.push('Attribution-Required: yes');
  lines.push('Commercial-Use: disallowed');
  lines.push('Rate-Limit: respectful');
  lines.push('');
  lines.push('# Coverage summary');
  lines.push(`Total-URLs: ${urls.length}`);
  const blogUrls = urls.filter((u) => /^\/blog\b/.test(u));
  const offeringsUrls = urls.filter((u) => /^\/offerings\b/.test(u));
  const whiteUrls = urls.filter((u) => /^\/whitepaper\b/.test(u));
  lines.push(`Blog-URLs: ${blogUrls.length}`);
  lines.push(`Whitepaper-URLs: ${whiteUrls.length}`);
  lines.push(`Offerings-URLs: ${offeringsUrls.length}`);
  lines.push('Priority-Sections: /blog, /whitepaper, /offerings');
  lines.push('');
  lines.push('# Notes');
  lines.push('Please respect page-level meta robots and do not index content behind authentication.');
  lines.push('For canonicalization and freshness, consult the sitemap and HTTP caching headers.');
  lines.push('');
  if (keywords) {
    lines.push('# Keywords');
    lines.push(keywords);
    lines.push('');
  }
  if (homeText) {
    lines.push('# Home Page Text');
    lines.push(homeText);
    lines.push('');
  }
  return lines.join('\n') + '\n' + AI_LLM_FOOTER + '\n';
}

/** Read JSON safely */
function readJsonSafe(p) {
  try {
    const txt = fs.readFileSync(p, 'utf8');
    return JSON.parse(txt);
  } catch (e) {
    return null;
  }
}

/** List directory entries safely */
function listDirSafe(p) {
  try {
    return fs.readdirSync(p, { withFileTypes: true });
  } catch (e) {
    return [];
  }
}

/** Convert filename to slug (strip extension) */
function toSlug(filename) {
  return filename.replace(/\.[^/.]+$/, '');
}

/** Gather blog routes from flat /content JSON files (mapped to /blog/:slug) */
function getBlogRoutes() {
  const routes = new Set();
  const entries = listDirSafe(contentDir);
  if (entries.some((e) => e.isFile() && e.name.endsWith('.json'))) routes.add('/blog');
  for (const ent of entries) {
    if (!ent.isFile()) continue;
    if (!ent.name.endsWith('.json')) continue;
    const filePath = path.join(contentDir, ent.name);
    const json = readJsonSafe(filePath);
    const slug = json?.seo?.slug || json?.slug || toSlug(ent.name);
    if (slug) routes.add(`/blog/${slug}`);
  }
  return Array.from(routes);
}

/** Gather offerings routes from content */
function getOfferingsRoutes() {
  const routes = new Set();
  const offeringsDir = path.join(appRoot, 'content', 'offerings');
  const indEntries = listDirSafe(offeringsDir);
  if (indEntries.length) routes.add('/offerings');

  for (const ind of indEntries) {
    if (ind.isDirectory()) {
      const industry = ind.name;
      routes.add(`/offerings/${industry}`);
      const useCaseDir = path.join(offeringsDir, industry);
      const useCaseEntries = listDirSafe(useCaseDir);
      for (const uc of useCaseEntries) {
        if (uc.isFile() && uc.name.endsWith('.json') && uc.name !== 'index.json') {
          const filePath = path.join(useCaseDir, uc.name);
          const json = readJsonSafe(filePath);
          const useCase = json?.seo?.slug || json?.slug || toSlug(uc.name);
          if (useCase) routes.add(`/offerings/${industry}/${useCase}`);
        }
      }
    }
  }
  return Array.from(routes);
}

function buildXml(urls) {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const open = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const close = '</urlset>\n';
  const items = urls.map((u) => {
    const isHome = u === '/';
    const changefreq = isHome ? 'weekly' : 'monthly';
    const priority = isHome ? '1.0' : '0.7';
    return (
      '  <url>\n' +
      `    <loc>${SITE_URL}${u}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      '  </url>\n'
    );
  }).join('');
  return header + open + items + close;
}

async function main() {
  const verbose = process.argv.includes('--verbose');
  const urls = new Set();
  // Always include home page
  urls.add('/');
  // Include key app pages
  urls.add('/calculator');
  // Include legal pages
  urls.add('/privacy');
  urls.add('/terms');

  // Only blog routes from /content
  for (const p of getBlogRoutes()) urls.add(p);

  const urlList = Array.from(urls)
    .filter(Boolean)
    .map((p) => (p.startsWith('/') ? p : `/${p}`))
    .sort((a, b) => a.localeCompare(b));

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const xml = buildXml(urlList);
  fs.writeFileSync(sitemapPath, xml, 'utf8');

  // Minimal version: only sitemap.xml
}

// Run only when executed directly, not when imported
try {
  if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    // Support async main
    Promise.resolve(main()).catch((err) => {
      process.exit(1);
    });
  }
} catch (err) {
  process.exit(1);
}
