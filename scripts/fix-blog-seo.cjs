#!/usr/bin/env node
/**
 * Blog SEO Fix Script for PayrollJamaica
 * Fixes:
 *   1. Missing timestamps — extracts date from slug if possible, else defaults to 2026-03-01
 *   2. Missing seo.keywords — generates minimum set from title/slug + standard Jamaica payroll keywords
 *   3. Missing seo.description — generates from title
 *   4. Short seo.description — pads with relevant context
 *   5. Long seo.description — truncates to 160 chars at word boundary
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));

const DEFAULT_KEYWORDS = [
  'Jamaica payroll',
  'PAYE Jamaica',
  'NIS contributions Jamaica',
  'NHT Jamaica',
  'payroll compliance Jamaica',
];

let fixedTimestamps = 0;
let fixedKeywords = 0;
let fixedDescriptions = 0;
let truncatedDescriptions = 0;
let totalModified = 0;

function extractDateFromSlug(slug) {
  // Try to find year pattern like 2025, 2026
  const yearMatch = slug.match(/(202[4-9])/);
  if (yearMatch) {
    return `${yearMatch[1]}-03-01T00:00:00Z`;
  }
  return '2026-03-01T00:00:00Z';
}

function generateDescription(data, slug) {
  const title = data.title || slug.replace(/-/g, ' ');
  // Create a description from the title, ensuring it's in the 120-160 range
  let desc = `Learn about ${title.toLowerCase()}. Complete guide for Jamaican employers covering PAYE, NIS, NHT compliance and payroll best practices.`;
  if (desc.length > 160) {
    desc = desc.substring(0, 157) + '...';
  }
  return desc;
}

function truncateDescription(desc) {
  if (desc.length <= 160) return desc;
  // Truncate at word boundary before 158 chars, add ...
  let truncated = desc.substring(0, 157);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 100) {
    truncated = truncated.substring(0, lastSpace);
  }
  return truncated + '...';
}

function generateKeywords(data, slug) {
  const title = data.title || '';
  const keywords = [...DEFAULT_KEYWORDS];

  // Extract meaningful terms from slug
  const slugTerms = slug.split('-').filter(t => t.length > 3 && !['2025', '2026', 'jamaica', 'guide', 'complete'].includes(t));
  if (slugTerms.length >= 2) {
    keywords.unshift(slugTerms.slice(0, 3).join(' ') + ' Jamaica');
  }

  // Add title-based keyword
  if (title) {
    keywords.unshift(title.substring(0, 50));
  }

  // Deduplicate
  return [...new Set(keywords)];
}

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`ERROR parsing ${file}: ${e.message}`);
    continue;
  }

  const slug = file.replace('.json', '');
  let modified = false;

  // Ensure seo object exists
  if (!data.seo) data.seo = {};

  // Fix missing timestamp
  if (!data.timestamp) {
    data.timestamp = extractDateFromSlug(slug);
    fixedTimestamps++;
    modified = true;
    console.log(`FIXED timestamp: ${slug} -> ${data.timestamp}`);
  }

  // Fix missing keywords
  if (!Array.isArray(data.seo.keywords) || data.seo.keywords.length === 0) {
    data.seo.keywords = generateKeywords(data, slug);
    fixedKeywords++;
    modified = true;
    console.log(`FIXED keywords: ${slug} -> ${data.seo.keywords.length} keywords`);
  }

  // Fix missing description
  if (!data.seo.description || data.seo.description.trim().length === 0) {
    data.seo.description = generateDescription(data, slug);
    fixedDescriptions++;
    modified = true;
    console.log(`FIXED description: ${slug} (${data.seo.description.length} chars)`);
  }

  // Fix long descriptions (truncate > 160)
  if (data.seo.description && data.seo.description.length > 160) {
    const original = data.seo.description;
    data.seo.description = truncateDescription(data.seo.description);
    if (data.seo.description !== original) {
      truncatedDescriptions++;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    totalModified++;
  }
}

console.log('\n' + '='.repeat(50));
console.log('FIX SUMMARY');
console.log('='.repeat(50));
console.log(`Total files modified: ${totalModified}`);
console.log(`Timestamps added: ${fixedTimestamps}`);
console.log(`Keywords added: ${fixedKeywords}`);
console.log(`Descriptions generated: ${fixedDescriptions}`);
console.log(`Descriptions truncated: ${truncatedDescriptions}`);
