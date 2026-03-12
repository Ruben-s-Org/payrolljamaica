#!/usr/bin/env node
/**
 * Blog SEO Audit Script for PayrollJamaica
 * Checks all JSON blog posts in content/ for SEO issues:
 *   - Missing or short seo.description (ideal: 120-160 chars)
 *   - Missing or insufficient seo.keywords (minimum 3)
 *   - Missing timestamp field
 *   - Missing internal links to /calculator or /payroll-software-jamaica
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));

const issues = {
  missingDescription: [],
  shortDescription: [],   // < 120 chars
  longDescription: [],    // > 160 chars
  missingKeywords: [],     // no keywords array or empty
  fewKeywords: [],         // < 3 keywords
  missingTimestamp: [],
  missingCalculatorLink: [],
  missingPayrollSoftwareLink: [],
};

let totalPosts = 0;

for (const file of files) {
  totalPosts++;
  const filePath = path.join(CONTENT_DIR, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`ERROR parsing ${file}: ${e.message}`);
    continue;
  }

  const slug = file.replace('.json', '');

  // Check seo.description
  const desc = (data.seo && data.seo.description) || '';
  if (!desc || desc.trim().length === 0) {
    issues.missingDescription.push(slug);
  } else if (desc.length < 120) {
    issues.shortDescription.push({ slug, length: desc.length, desc: desc.substring(0, 80) });
  } else if (desc.length > 160) {
    issues.longDescription.push({ slug, length: desc.length });
  }

  // Check seo.keywords
  const keywords = (data.seo && data.seo.keywords) || [];
  if (!Array.isArray(keywords) || keywords.length === 0) {
    issues.missingKeywords.push(slug);
  } else if (keywords.length < 3) {
    issues.fewKeywords.push({ slug, count: keywords.length });
  }

  // Check timestamp
  if (!data.timestamp) {
    issues.missingTimestamp.push(slug);
  }

  // Check internal links in html
  const html = data.html || '';
  if (!html.includes('/calculator')) {
    issues.missingCalculatorLink.push(slug);
  }
  if (!html.includes('/payroll-software')) {
    issues.missingPayrollSoftwareLink.push(slug);
  }
}

// Output report
console.log('='.repeat(70));
console.log('PAYROLL JAMAICA BLOG SEO AUDIT REPORT');
console.log(`Total posts scanned: ${totalPosts}`);
console.log('='.repeat(70));
console.log();

function reportSection(title, items, showDetails = false) {
  console.log(`--- ${title}: ${items.length} posts ---`);
  if (items.length > 0 && items.length <= 20) {
    for (const item of items) {
      if (typeof item === 'string') {
        console.log(`  - ${item}`);
      } else {
        console.log(`  - ${item.slug} (${item.length ? `${item.length} chars` : `${item.count} keywords`})`);
      }
    }
  } else if (items.length > 20) {
    for (const item of items.slice(0, 10)) {
      if (typeof item === 'string') {
        console.log(`  - ${item}`);
      } else {
        console.log(`  - ${item.slug} (${item.length ? `${item.length} chars` : `${item.count} keywords`})`);
      }
    }
    console.log(`  ... and ${items.length - 10} more`);
  }
  console.log();
}

reportSection('Missing seo.description (empty/absent)', issues.missingDescription);
reportSection('Short seo.description (< 120 chars)', issues.shortDescription, true);
reportSection('Long seo.description (> 160 chars)', issues.longDescription, true);
reportSection('Missing seo.keywords (empty/absent)', issues.missingKeywords);
reportSection('Few seo.keywords (< 3)', issues.fewKeywords, true);
reportSection('Missing timestamp', issues.missingTimestamp);
reportSection('Missing /calculator internal link', issues.missingCalculatorLink);
reportSection('Missing /payroll-software internal link', issues.missingPayrollSoftwareLink);

// Summary
const postsWithAnyIssue = new Set([
  ...issues.missingDescription,
  ...issues.shortDescription.map(i => i.slug),
  ...issues.longDescription.map(i => i.slug),
  ...issues.missingKeywords,
  ...issues.fewKeywords.map(i => i.slug),
  ...issues.missingTimestamp,
  ...issues.missingCalculatorLink,
  ...issues.missingPayrollSoftwareLink,
]);

console.log('='.repeat(70));
console.log(`SUMMARY: ${postsWithAnyIssue.size} of ${totalPosts} posts have at least one SEO issue`);
console.log(`  ${issues.missingDescription.length} missing description`);
console.log(`  ${issues.shortDescription.length} short description (< 120)`);
console.log(`  ${issues.longDescription.length} long description (> 160)`);
console.log(`  ${issues.missingKeywords.length} missing keywords`);
console.log(`  ${issues.fewKeywords.length} fewer than 3 keywords`);
console.log(`  ${issues.missingTimestamp.length} missing timestamp`);
console.log(`  ${issues.missingCalculatorLink.length} missing /calculator link`);
console.log(`  ${issues.missingPayrollSoftwareLink.length} missing /payroll-software link`);
console.log('='.repeat(70));

// Exit with error code if issues found
if (postsWithAnyIssue.size > 0) {
  process.exit(1);
}
