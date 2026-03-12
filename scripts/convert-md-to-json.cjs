#!/usr/bin/env node
/**
 * Convert markdown blog posts (content/blog/*.md) to JSON files (content/*.json)
 * so they are served by lib/content.ts which reads .json from content/.
 */

const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "content", "blog");
const CONTENT_DIR = path.join(__dirname, "..", "content");

// --- YAML frontmatter parser (simple regex-based) ---
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const yamlBlock = match[1];
  const body = match[2];
  const meta = {};

  // Parse simple key: "value" and key: value lines, plus arrays
  let currentKey = null;
  for (const line of yamlBlock.split("\n")) {
    const kvMatch = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    const arrayItemMatch = line.match(/^\s+-\s*"?(.*?)"?\s*$/);

    if (kvMatch && !arrayItemMatch) {
      const key = kvMatch[1];
      let val = kvMatch[2];
      // Strip surrounding quotes
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Check if this is the start of an array
      if (val.startsWith("[")) {
        // Inline array: tags: ["a", "b"]
        try {
          meta[key] = JSON.parse(val.endsWith("]") ? val : val + "]");
        } catch {
          meta[key] = val;
        }
        currentKey = null;
      } else if (val === "") {
        // Could be start of block array
        meta[key] = [];
        currentKey = key;
      } else {
        meta[key] = val;
        currentKey = null;
      }
    } else if (arrayItemMatch && currentKey) {
      if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
      meta[currentKey].push(arrayItemMatch[1]);
    }
  }

  return { meta, body };
}

// --- Markdown to HTML converter ---
function mdToHtml(md) {
  let html = "";
  const lines = md.split("\n");
  let inList = false;
  let inOl = false;
  let paragraphLines = [];

  function flushParagraph() {
    if (paragraphLines.length > 0) {
      const text = paragraphLines.join(" ").trim();
      if (text) {
        html += "<p>" + inlineFormat(text) + "</p>";
      }
      paragraphLines = [];
    }
  }

  function closeLists() {
    if (inList) { html += "</ul>"; inList = false; }
    if (inOl) { html += "</ol>"; inOl = false; }
  }

  function inlineFormat(text) {
    // Links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // Bold: **text** or __text__
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__(.+?)__/g, "<strong>$1</strong>");
    // Italic: *text* or _text_ (but not inside URLs/words)
    text = text.replace(/(?<!\w)\*([^*]+?)\*(?!\w)/g, "<em>$1</em>");
    text = text.replace(/(?<!\w)_([^_]+?)_(?!\w)/g, "<em>$1</em>");
    // Inline code
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip the H1 title (it duplicates the JSON title field)
    if (trimmed.match(/^#\s+/) && !trimmed.match(/^##/)) {
      flushParagraph();
      closeLists();
      continue;
    }

    // Horizontal rule
    if (trimmed.match(/^---+$/)) {
      flushParagraph();
      closeLists();
      html += "<hr>";
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{2,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      closeLists();
      const level = headingMatch[1].length;
      html += `<h${level}>${inlineFormat(headingMatch[2])}</h${level}>`;
      continue;
    }

    // Unordered list item
    if (trimmed.match(/^[-*]\s+/)) {
      flushParagraph();
      if (inOl) { html += "</ol>"; inOl = false; }
      if (!inList) { html += "<ul>"; inList = true; }
      html += "<li>" + inlineFormat(trimmed.replace(/^[-*]\s+/, "")) + "</li>";
      continue;
    }

    // Ordered list item
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      flushParagraph();
      if (inList) { html += "</ul>"; inList = false; }
      if (!inOl) { html += "<ol>"; inOl = true; }
      html += "<li>" + inlineFormat(olMatch[1]) + "</li>";
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      closeLists();
      html += "<blockquote><p>" + inlineFormat(trimmed.replace(/^>\s*/, "")) + "</p></blockquote>";
      continue;
    }

    // Empty line — flush paragraph
    if (trimmed === "") {
      flushParagraph();
      closeLists();
      continue;
    }

    // Regular text — accumulate for paragraph
    paragraphLines.push(trimmed);
  }

  flushParagraph();
  closeLists();

  return html;
}

// --- Derive slug from filename ---
function slugFromFilename(filename) {
  return filename.replace(/\.md$/, "");
}

// --- Main ---
function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error("Blog directory not found:", BLOG_DIR);
    process.exit(1);
  }

  const mdFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  console.log(`Found ${mdFiles.length} markdown files in ${BLOG_DIR}`);

  let created = 0;
  let skipped = 0;

  for (const file of mdFiles) {
    const slug = slugFromFilename(file);
    const jsonPath = path.join(CONTENT_DIR, `${slug}.json`);

    // Skip if JSON already exists
    if (fs.existsSync(jsonPath)) {
      skipped++;
      continue;
    }

    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { meta, body } = parseFrontmatter(raw);

    const title = meta.title || slug.replace(/-/g, " ");
    const description = meta.description || "";
    const tags = Array.isArray(meta.tags) ? meta.tags : [];
    const date = meta.date || new Date().toISOString().split("T")[0];
    const timestamp = date.includes("T") ? date : `${date}T00:00:00Z`;

    const htmlBody = mdToHtml(body);

    const post = {
      seo: {
        slug,
        title,
        description,
        keywords: tags,
      },
      image: "/og.jpg",
      title,
      subtitle: description,
      links: {
        ctaInline: {
          headline: "Simplify Your Jamaica Payroll",
          text: "PayrollJamaica automates PAYE, NIS, NHT, and Education Tax calculations — fully compliant, always up to date.",
        },
        ctaBottom: {
          headline: "Try PayrollJamaica Free",
          text: "Join hundreds of Jamaican employers who trust PayrollJamaica for accurate, compliant payroll processing.",
        },
      },
      html: htmlBody,
      timestamp,
    };

    fs.writeFileSync(jsonPath, JSON.stringify(post, null, 2), "utf8");
    created++;
    console.log(`  Created: ${slug}.json`);
  }

  console.log(`\nDone. Created: ${created}, Skipped (already exists): ${skipped}`);
}

main();
