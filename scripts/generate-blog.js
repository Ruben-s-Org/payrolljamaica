#!/usr/bin/env node

/**
 * Auto-generate a real estate marketing blog article for RealStage Pro.
 *
 * Flow:
 * 1) Accept an optional --topic. If not provided, ask the model to propose a good travel topic.
 * 2) Run lightweight web research for keywords.
 * 3) Ask the model to generate JSON article content.
 * 4) Write to content/<slug>.json (flat, no industries).
 *
 * Usage:
 *   node scripts/generate-blog.js [--topic "<title>"] [--dry-run] [--times <n>]
 *
 * Environment:
 *   OPENROUTER_API_KEY  (required)
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { randomInt } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
// Repo uses flat JSON posts in /content and assets under /assets
const blogsDir = path.join(projectRoot, 'content');
// Flat blog structure only
const blogImagesDir = path.join(projectRoot, 'assets', 'img', 'blog');

const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || 'anthropic/claude-4.5-sonnet';
const CONDENSE_MODEL = process.env.OPENROUTER_CONDENSE_MODEL || 'anthropic/claude-4.5-sonnet';
function normalizePolicy(val) {
  const v = String(val || '').toLowerCase();
  if (process.env.STRICT_PRIVACY) return 'zero';
  if (v === 'opt_in') return 'opt-in';
  if (v === 'zero') return 'zero';
  return v || 'opt-in';
}
const DATA_POLICY = normalizePolicy(process.env.OPENROUTER_DATA_POLICY);

// Zero-retention model candidates. You can override via OPENROUTER_ZERO_MODELS (comma-separated)
const ZERO_MODEL_CANDIDATES = (process.env.OPENROUTER_ZERO_MODELS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const DEFAULT_ZERO_MODELS = [
  'anthropic/claude-3.5-sonnet:zero',
  'anthropic/claude-3-haiku:zero',
];
function getModelCandidates(baseModel) {
  const strict = DATA_POLICY === 'zero';
  if (strict) {
    const list = ZERO_MODEL_CANDIDATES.length ? ZERO_MODEL_CANDIDATES : DEFAULT_ZERO_MODELS;
    return list;
  }
  // non-strict: prefer provided model then a sane fallback
  return [baseModel, 'anthropic/claude-3.5-sonnet'];
}

// Brand/search phrases to promote; select a few to guarantee inclusion and anchor linking (real estate focus)
const BRAND_LINK_KEYWORDS = [
  'ai virtual staging', 'virtual staging for real estate', 'real estate virtual staging', 'ai staging app', 'ai home staging', 'virtual staging software', 'mls ready photos', 'listing marketing', 'real estate branding', 'agent marketing', 'property photos', 'before and after staging', 'real estate content', 'ai interior design for listings', 'staging app for agents'
];

// High-intent seeds to bias topics and on-page SEO toward people searching for tools
// and interior design AI queries. These will be merged into keywords and occasionally linked.
const INTENT_SEED_KEYWORDS = [
  'virtual staging software',
  'virtual staging app',
  'ai virtual staging',
  'best virtual staging tools',
  'virtual staging pricing',
  'virtual staging for real estate',
  'interior design AI',
  'ai room design',
  'room planner AI',
  'ai interior design'
];

// Strict JSON schema for generated article (flat; no industry/useCase)
const ARTICLE_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    seo: {
      type: 'object',
      additionalProperties: false,
      properties: {
        slug: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        keywords: { type: 'array', items: { type: 'string' }, minItems: 10, maxItems: 30 }


      },
      required: ['slug','title','description','keywords']
    },
    image: { type: 'string' },
    title: { type: 'string' },
    subtitle: { type: 'string' },
    links: {
      type: 'object',
      additionalProperties: true,
      properties: {
        ctaInline: {
          type: 'object',
          additionalProperties: true,
          properties: { headline: { type: 'string' }, text: { type: 'string' } },
          required: ['headline','text']
        },
        ctaBottom: {
          type: 'object',
          additionalProperties: true,
          properties: { headline: { type: 'string' }, text: { type: 'string' } },
          required: ['headline','text']
        }
      },
      required: ['ctaInline','ctaBottom']
    },
    html: { type: 'string' }
  },
  required: ['seo','image','title','subtitle','links','html']
};

// Lightweight .env reader (no deps). Reads from repo root (projectRoot)
function loadEnvKeyFromDotenv(key) {
  try {
    const candidates = ['.env.local', '.env'];
    for (const fname of candidates) {
      const p = path.join(projectRoot, fname);
      if (!fs.existsSync(p)) continue;
      const txt = fs.readFileSync(p, 'utf8');
      const re = new RegExp('^\\s*' + key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\s*=\\s*(.+)$', 'm');
      const m = txt.match(re);
      if (!m) continue;
      let v = m[1].trim();
      const hashAt = v.indexOf(' #');
      if (hashAt !== -1) v = v.slice(0, hashAt).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!process.env[key] && v) {
        process.env[key] = v;
      }
      return; // stop after first hit
    }
  } catch {}
}

async function callOpenRouterTEXT(model, prompt, { max_tokens, temperature } = {}) {
  const sys = 'Return ONLY plain text. No JSON. No markdown. No code fences.';
  const content = await callOpenRouter(model, [
    { role: 'system', content: sys },
    { role: 'user', content: prompt },
  ], { max_tokens, temperature });
  return String(content).replace(/^```[a-zA-Z]*\n?|```$/g, '').trim();
}

// Ensure OPENROUTER_API_KEY is populated from .env if missing
if (!process.env.OPENROUTER_API_KEY) {
  loadEnvKeyFromDotenv('OPENROUTER_API_KEY');
}

function readJsonSafe(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}
function listDirSafe(p) {
  try {
    return fs.readdirSync(p, { withFileTypes: true });
  } catch {
    return [];
  }
}
function pickRandom(arr) {
  if (!arr || !arr.length) return null;
  // Use cryptographically-strong integer for unbiased selection
  return arr[randomInt(arr.length)];
}
function toSlug(filename) {
  return filename.replace(/\.[^/.]+$/, '');
}

// Pick N unique random items from an array
function pickRandomUnique(arr, n) {
  const copy = Array.from(new Set(arr));
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.max(0, Math.min(n, copy.length)));
}

// -------- Blog Image Helpers --------
function listBlogImageFilenames() {
  const entries = listDirSafe(blogImagesDir);
  return entries
    .filter((e) => e.isFile() && /\.(png|jpe?g|webp|avif|svg)$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));
}

async function pickBlogImageFilenameLLM(topic, keywords = []) {
  const files = listBlogImageFilenames();
  if (!files.length) return '';
  const schema = {
    type: 'object',
    additionalProperties: false,
    properties: { filename: { type: 'string' } },
    required: ['filename']
  };
  const prompt = `You are choosing a hero image for a real estate marketing blog post.
Topic: ${topic}
Top keywords: ${Array.isArray(keywords) ? keywords.slice(0, 12).join(', ') : ''}

Pick the single best image filename from this list (exact match, case-sensitive):\n${files.join('\n')}

Guidelines:
- Prefer interior/exterior real estate imagery that fits the topic.
- If unsure, pick a neutral, modern interior image that looks good as a wide hero.
Return strictly JSON: { "filename": "<one of the provided files>" }`;
  try {
    const resp = await callOpenRouterJSON(DEFAULT_MODEL, prompt, { max_tokens: 50, schema, temperature: 0.1 });
    const fn = String(resp?.filename || '').trim();
    if (files.includes(fn)) return fn;
  } catch {}
  // Fallback: deterministic pick by hashing topic
  const idx = Math.abs([...String(topic)].reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0)) % files.length;
  return files[idx] || '';
}

function toAppAssetRefBlog(filename) {
  if (!filename) return '';
  return `/assets/img/blog/${filename}`;
}

// -------- Keyword Link Injection --------
function enrichLinksInHtml(html, keywords, { maxLinks = 8 } = {}) {
  try {
    let out = String(html || '');
    if (!out || !Array.isArray(keywords) || !keywords.length) return out;
    let inserted = 0;
    const used = new Set();
    // Prioritize longer keywords first to avoid partial overlaps
    const sorted = [...keywords].sort((a, b) => b.length - a.length);
    for (const kw of sorted) {
      if (inserted >= maxLinks) break;
      const k = String(kw || '').trim();
      if (!k || used.has(k)) continue;
      // Skip if already present as a link
      const existsAsLink = new RegExp(`<a[^>]*>[^<]*${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*<\\/a>`, 'i').test(out);
      if (existsAsLink) { used.add(k); continue; }
      // Replace first occurrence outside tags with anchor
      const pattern = new RegExp(`(>[^<]*)\b(${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\b`, 'i');
      const replaced = out.replace(pattern, (m, p1, p2) => `${p1}<a href=\"https://realstage.pro/auth/signin\" rel=\"nofollow noopener\">${p2}</a>`);
      if (replaced !== out) {
        out = replaced;
        used.add(k);
        inserted += 1;
      }
    }
    return out;
  } catch { return html; }
}
function usageAndExit(msg) {
  process.exit(msg ? 1 : 0);
}

function parseArgs(argv) {
  const args = { topic: null, theme: null, dryRun: false, verbose: false, maxTokens: 7000, minWords: 1000, maxWords: 1500, times: 100 };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    // If user passed a bare numeric positional arg (e.g., `bun blog 5`), treat as --times
    if (/^\d+$/.test(a)) { args.times = Math.max(1, Number(a)); continue; }
    if (a === '--topic' && argv[i + 1]) { args.topic = argv[++i]; continue; }
    if (a === '--theme' && argv[i + 1]) { args.theme = argv[++i]; continue; }
    if (a === '--dry-run') { args.dryRun = true; continue; }
    if (a === '--verbose') { args.verbose = true; continue; }
    if ((a === '--times' || a === '-n') && argv[i + 1]) { args.times = Math.max(1, Number(argv[++i]) || 1); continue; }
    if (a === '--min-words' && argv[i + 1]) { args.minWords = Math.max(0, Number(argv[++i])||0); continue; }
    if (a === '--max-words' && argv[i + 1]) { args.maxWords = Math.max(0, Number(argv[++i])||0); continue; }
    if (a === '--max-tokens' && argv[i + 1]) { args.maxTokens = Number(argv[++i])||7000; continue; }
    if (a === '-h' || a === '--help') usageAndExit();
  }
  return args;
}

function getExistingBlogTitles() {
  const entries = listDirSafe(blogsDir);
  const titles = [];
  for (const e of entries) {
    if (!e.isFile() || !e.name.endsWith('.json') || e.name === 'index.json') continue;
    const p = path.join(blogsDir, e.name);
    const obj = readJsonSafe(p);
    if (!obj) continue;
    const t = (obj.seo && obj.seo.title) || obj.title || '';
    if (t && typeof t === 'string') titles.push(t.trim());
  }
  return titles;
}

const THEMES = ['virtual-staging','branding','listing-marketing','photography','seller-guides'];
async function proposeTravelTopic(existingTitles = [], seed = '', theme = null) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error('OPENROUTER_API_KEY is not set');

  const sys = `You are a real estate marketing content strategist for RealStage Pro (realstage.pro). Propose one helpful, specific blog topic suitable for 1200–1500 words. Avoid overlap with existing titles. Target real estate agents and teams.

Priority: Focus on high-intent search queries around virtual staging tools and interior design AI. Great angles include: tool comparisons, pricing guides, setup/how-to, workflows, before/after case studies, and ROI. Examples of head terms to align with: "virtual staging software", "virtual staging app", "best virtual staging tools", "interior design AI", "ai room design". Topics should still fall into one of: virtual staging, listing marketing, or seller guides, but lean toward tool and buyer-intent content.

Subtly favor angles that showcase how AI virtual staging helps agents win listings and ship MLS-ready visuals faster. No clickbait.`;
  const user = {
    role: 'user',
    content: [
      {
        type: 'text',
        text: `Existing blog titles (avoid overlap and near-duplicates):\n${JSON.stringify(existingTitles, null, 2)}\n\nOptional seed: ${seed || '(none)'}\nPreferred theme: ${theme && THEMES.includes(theme) ? theme : '(any of virtual-staging, branding, listing-marketing, photography, seller-guides)'}\n\nInstructions:\n- Propose ONE topic clearly distinct from any title above.\n- Keep it inside the preferred theme if provided.\n- Prefer concrete, practice-oriented angles over generic fluff.\n- Subtly highlight how AI virtual staging like RealStage Pro helps (no hard sell).\n\nReturn a compact JSON object ONLY, with this EXACT shape (no backticks):\n{\n  "topic": "<8-14 word compelling, specific title>",\n  "angle": "<1-2 sentence angle clarifying differentiation>",\n  "targetKeywords": ["<primary keyword>", "<secondary 1>", "<secondary 2>"]\n}`
      }
    ]
  };

  const body = {
    model: DEFAULT_MODEL,
    messages: [
      { role: 'system', content: sys },
      user
    ],
    response_format: { type: 'json_object' },
    max_tokens: 750,
  };

  async function fetchTopic(withPolicy, currentModel) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://realstage.pro',
      'X-Title': 'RealStage Blog Generator'
    };
    if (withPolicy) headers['X-Data-Policy'] = DATA_POLICY;
    const res = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...body, model: currentModel || body.model })
    });
    const text = await res.text().catch(() => '');
    return { ok: res.ok, status: res.status, text };
  }
  // Try model candidates based on policy
  let tAttempt;
  for (const m of getModelCandidates(DEFAULT_MODEL)) {
    tAttempt = await fetchTopic(true, m);
    if (!tAttempt.ok && tAttempt.text.includes('No endpoints found matching your data policy')) {
      if (globalThis.__verbose) console.warn('[blog] Topic fetch retrying without X-Data-Policy header');
      tAttempt = await fetchTopic(false, m);
    }
    if (tAttempt.ok) break;
  }
  if (!tAttempt?.ok) throw new Error(`OpenRouter error ${tAttempt?.status}: ${tAttempt?.text}`);
  const text = tAttempt.text;
  const data = JSON.parse(text);
  // OpenRouter may return message.content as a string or as array parts with {type:'text', text:'...'}
  let contentRaw = data?.choices?.[0]?.message?.content;
  let content = '';
  if (typeof contentRaw === 'string') content = contentRaw;
  else if (Array.isArray(contentRaw)) {
    content = contentRaw.map(p => (typeof p?.text === 'string' ? p.text : '')).join('\n');
  } else if (contentRaw && typeof contentRaw === 'object' && typeof contentRaw.text === 'string') {
    content = contentRaw.text;
  } else {
    content = '';
  }

  // Strip markdown code fences if present
  content = content.replace(/^```(?:json)?\n([\s\S]*?)\n```\s*$/m, '$1');

  // Try direct JSON parse first
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    // Fallback: extract the first JSON object substring
    const m = content.match(/\{[\s\S]*\}/);
    if (m) {
      try {
        parsed = JSON.parse(m[0]);
      } catch {}
    }
  }
  if (!parsed || !parsed.topic) {
    throw new Error('Failed to parse adjacent topic JSON from model');
  }
  if (!parsed?.topic) throw new Error('Model did not return topic');
  return parsed;
}

// ---------- OpenRouter helpers ----------
async function callOpenRouter(model, messages, { max_tokens, response_format, temperature } = {}) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error('OPENROUTER_API_KEY is not set');
  const body = { model, messages };
  if (max_tokens) body.max_tokens = max_tokens;
  if (response_format) body.response_format = response_format;
  if (typeof temperature === 'number') body.temperature = temperature;
  async function doFetch(currentModel, withPolicy = true) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
      'HTTP-Referer': 'https://realstage.pro',
      'X-Title': 'RealStage Blog Generator'
    };
    if (withPolicy) headers['X-Data-Policy'] = DATA_POLICY;
    const res = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...body, model: currentModel })
    });
    const raw = await res.text().catch(()=> '');
    return { ok: res.ok, status: res.status, raw };
  }

  // Try candidates; respect policy. For zero policy, iterate ZERO_MODEL_CANDIDATES
  let attempt;
  for (const m of getModelCandidates(model)) {
    attempt = await doFetch(m, true);
    if (!attempt.ok && (attempt.raw || '').includes('No endpoints found matching your data policy')) {
      if (globalThis.__verbose) console.warn('[blog] Retry model without X-Data-Policy header');
      const second = await doFetch(m, false);
      if (second.ok) { attempt = second; break; }
    }
    if (attempt.ok) break;
  }
  if (!attempt?.ok) throw new Error(`OpenRouter error ${attempt?.status}: ${attempt?.raw?.slice(0,400)}`);
  const raw = attempt.raw;
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    // Try to extract first JSON object from raw
    const m = raw.match(/\{[\s\S]*\}/);
    if (m) {
      try { data = JSON.parse(m[0]); } catch {}
    }
    if (!data) throw new Error('OpenRouter non-JSON response');
  }
  // Normalize message content to a plain string. OpenRouter may return:
  // - a string
  // - an array of parts: [{ type: 'text', text: '...' }, ...]
  // - an object with a text field
  let content = data?.choices?.[0]?.message?.content;
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    const joined = content.map(p => (typeof p?.text === 'string' ? p.text : '')).join('\n');
    if (joined && joined.trim()) return joined;
  }
  if (content && typeof content === 'object' && typeof content.text === 'string') {
    return content.text;
  }
  // Fallback: stringify whatever is there
  return JSON.stringify(content || '');
}

async function callOpenRouterJSON(model, prompt, { max_tokens, schema, temperature } = {}) {
  const sys = 'You must output strictly valid JSON only. No prose. No markdown. No code fences.';
  const respFmt = schema ? { type: 'json_schema', json_schema: { name: 'Json', schema } } : { type: 'json_object' };
  const content = await callOpenRouter(model, [
    { role: 'system', content: sys },
    { role: 'user', content: prompt },
  ], { max_tokens, response_format: respFmt, temperature });
  const text = String(content).replace(/^```json\s*|```$/g,'').trim();
  // Attempt 1: direct parse
  try { return JSON.parse(text); } catch {}
  // Attempt 2: extract first JSON object substring
  const m = text.match(/\{[\s\S]*\}/);
  if (m) {
    try { return JSON.parse(m[0]); } catch {}
  }
  // Attempt 3: regenerate with stricter instruction and lower temperature
  const regen = await callOpenRouter(model, [
    { role: 'system', content: sys },
    { role: 'user', content: 'Return ONLY valid JSON for the prior request. No markdown. No commentary.' },
    { role: 'assistant', content: '' },
    { role: 'user', content: prompt },
  ], { max_tokens: Math.min(5000, (typeof max_tokens==='number'&&max_tokens>0)?max_tokens:7000), response_format: respFmt, temperature: 0.05 });
  const rtext = String(regen).replace(/^```json\s*|```$/g,'').trim();
  try { return JSON.parse(rtext); } catch {}
  const m2 = rtext.match(/\{[\s\S]*\}/);
  if (m2) {
    try { return JSON.parse(m2[0]); } catch {}
  }
  // Attempt 4: final try without schema (json_object)
  const regen2 = await callOpenRouter(model, [
    { role: 'system', content: sys },
    { role: 'user', content: prompt },
  ], { max_tokens: Math.min(4000, (typeof max_tokens==='number'&&max_tokens>0)?max_tokens:7000), response_format: { type: 'json_object' }, temperature: 0.05 });
  const rtext2 = String(regen2).replace(/^```json\s*|```$/g,'').trim();
  try { return JSON.parse(rtext2); } catch {}
  const m3 = rtext2.match(/\{[\s\S]*\}/);
  if (m3) {
    try { return JSON.parse(m3[0]); } catch {}
  }
  if (globalThis.__verbose) console.error('[blog] Failed to parse JSON from model after multiple attempts');
  throw new Error('Failed to parse JSON from model');
}

function nowIsoLocal() {
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// ---------- Python research (SERP + headings) ----------
function runPythonResearch(topic, keyword) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-research-'));
  const pyPath = path.join(tmpDir, 'research.py');
  const pyCode = `
import sys, json, re, time
from urllib.parse import quote, urlparse, urlsplit, parse_qs, unquote
try:
    import requests
    from bs4 import BeautifulSoup
except Exception:
    import subprocess, sys
    subprocess.run([sys.executable, '-m', 'pip', 'install', '--user', '-q', 'requests', 'beautifulsoup4'], check=True, stdout=sys.stderr, stderr=sys.stderr)
    import requests
    from bs4 import BeautifulSoup

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
}

def decode_ddg_redirect(href: str) -> str:
    # DuckDuckGo redirect links like /l/?uddg=<url-encoded>
    try:
        parts = urlsplit(href)
        if 'duckduckgo.com' in (parts.netloc or '') and parts.path.startswith('/l/'):
            q = parse_qs(parts.query)
            if 'uddg' in q and q['uddg']:
                return unquote(q['uddg'][0])
    except Exception:
        pass
    return href

def is_http_url(u: str) -> bool:
    return isinstance(u, str) and (u.startswith('http://') or u.startswith('https://'))

def is_pdf_url(u: str) -> bool:
    try:
        return u.lower().split('?')[0].endswith('.pdf')
    except Exception:
        return False

def ddg_search(q, n=10):
    url = 'https://duckduckgo.com/html/?q=' + quote(q)
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, 'html.parser')
    links = []
    for a in soup.select('a.result__a'):
        href = a.get('href')
        if not href:
            continue
        if href.startswith('//'):
            href = 'https:' + href
        if 'duckduckgo.com/l/?' in href:
            href = decode_ddg_redirect(href)
        if not is_http_url(href):
            continue
        text = (a.get_text(' ', strip=True) or '')[:200]
        links.append((text, href))
        if len(links) >= n:
            break
    return links

def fetch(url):
    if is_pdf_url(url):
        return None, {'content_type': 'application/pdf'}
    try:
        r = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
        ctype = r.headers.get('Content-Type','')
        if 'application/pdf' in ctype.lower():
            return None, {'content_type': 'application/pdf'}
        r.raise_for_status()
        return r.text, {'content_type': ctype}
    except Exception:
        return '', {}

def info(page_title_hint, html, url):
    if html is None:
        # PDF or unsupported; keep minimal record with hint
        return {'title': page_title_hint or '', 'url': url, 'meta_description': '', 'meta_keywords': '', 'h1': [], 'h2': [], 'h3': [], 'notes': ''}
    soup = BeautifulSoup(html, 'html.parser')
    # Prefer og:title/twitter:title if present
    title = ''
    ogt = soup.find('meta', attrs={'property':'og:title'})
    twt = soup.find('meta', attrs={'name':'twitter:title'})
    if ogt and ogt.get('content'): title = ogt.get('content').strip()
    if not title and twt and twt.get('content'): title = twt.get('content').strip()
    if not title and soup.title: title = soup.title.get_text(' ', strip=True)
    if not title: title = page_title_hint or ''
    title = title[:200]

    # Meta descriptions (prefer og:description/twitter:description)
    desc = ''
    ogd = soup.find('meta', attrs={'property':'og:description'})
    twd = soup.find('meta', attrs={'name':'twitter:description'})
    md = soup.find('meta', attrs={'name':'description'})
    if ogd and ogd.get('content'): desc = ogd.get('content').strip()
    if not desc and twd and twd.get('content'): desc = twd.get('content').strip()
    if not desc and md and md.get('content'): desc = md.get('content').strip()

    mk = soup.find('meta', attrs={'name':'keywords'})
    keys = mk.get('content').strip() if mk and mk.get('content') else ''
    h1=[h.get_text(' ', strip=True) for h in soup.find_all('h1')]
    h2=[h.get_text(' ', strip=True) for h in soup.find_all('h2')]
    h3=[h.get_text(' ', strip=True) for h in soup.find_all('h3')]
    ps=[p.get_text(' ', strip=True) for p in soup.find_all('p')]
    return {'title':title,'url':url,'meta_description':desc,'meta_keywords':keys,'h1':h1,'h2':h2,'h3':h3,'notes':' '.join(ps[:20])[:1200]}

def main():
    topic = sys.argv[1]
    keyword = sys.argv[2]
    serp = ddg_search(keyword, n=10)
    pages=[]; all_h1=[]; all_h2=[]; all_h3=[]; samples=[]
    for (t,u) in serp:
        html, meta = fetch(u)
        inf = info(t, html, u)
        pages.append(inf)
        all_h1 += inf.get('h1',[]); all_h2 += inf.get('h2',[]); all_h3 += inf.get('h3',[])
        samples += [inf.get('title',''), inf.get('meta_description',''), inf.get('meta_keywords',''), ' '.join(inf.get('h1',[])[:5]), ' '.join(inf.get('h2',[])[:10]), ' '.join(inf.get('h3',[])[:10]), inf.get('notes','')]
        time.sleep(0.2)
    # naive keyword/LSI extraction (placeholder): use frequent tokens from titles + meta
    def toks(x):
        x = re.sub(r"[^a-z0-9\s-]"," ", x.lower())
        return [t for t in x.split() if len(t)>2]
    freq={}
    for s in samples:
        for t in toks(s): freq[t]=freq.get(t,0)+1
    top = [w for w,_ in sorted(freq.items(), key=lambda kv:(-kv[1], kv[0]))][:30]
    result={ 'topic':topic, 'keyword':keyword, 'top_pages':pages[:10], 'outline':all_h2[:10], 'lsi_terms':top[:15], 'top_keywords':top[:15] }
    print(json.dumps(result, ensure_ascii=False))
if __name__=='__main__': main()
`.trim();
  fs.writeFileSync(pyPath, pyCode, 'utf8');
  const py = spawnSync(process.env.PYTHON || 'python3', [pyPath, topic, keyword], { encoding:'utf8', env: process.env, timeout: 300000 });
  if (py.error) throw py.error;
  if (py.status !== 0) throw new Error('Python research failed: ' + (py.stderr || py.stdout));
  const stdout = (py.stdout || '').trim();
  try { return JSON.parse(stdout); } catch {}
  const m = stdout.match(/\{[\s\S]*\}/); if (m) { try { return JSON.parse(m[0]); } catch {} }
  throw new Error('Python research returned non-JSON');
}

// ---------- Content generation ----------
function titleCaseFromSlug(slug) { return String(slug||'').split('-').map(s=>s? s[0].toUpperCase()+s.slice(1):s).join(' '); }
function wordCountFromHtml(html) { const text = String(html||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim(); return text? text.split(/\s+/).length: 0; }
function ensureCtaLinks(obj) {
  obj.links = obj.links || {};
  obj.links.ctaInline = obj.links.ctaInline || {};
  obj.links.ctaBottom = obj.links.ctaBottom || {};
  obj.links.ctaInline.headline = obj.links.ctaInline.headline || `Find more tips`;
  obj.links.ctaInline.text = obj.links.ctaInline.text || `Back to blog`;
  obj.links.ctaBottom.headline = obj.links.ctaBottom.headline || `Keep exploring`;
  obj.links.ctaBottom.text = obj.links.ctaBottom.text || 'See more posts';
  // Do NOT append any 'Next Step' footer; remove any residual footer if present
  if (typeof obj.html === 'string') {
    obj.html = obj.html.replace(/\n?\n?<p><strong>Next Step:<\/strong> <a href=\"https?:\/\/[^\"]+\"[^>]*>[^<]*<\/a><\/p>\s*$/i, '');
    obj.html = obj.html.replace(/\n?\n?<p><strong>Next Step:<\/strong> <a href=\"\/[^"]+\"[^>]*>[^<]*<\/a><\/p>\s*$/i, '');
  }
}

function uniqueSlugPath(baseSlug) {
  const blogsRoot = blogsDir; // projectRoot/content
  fs.mkdirSync(blogsRoot, { recursive: true });
  let slug = baseSlug && String(baseSlug).trim() ? baseSlug.trim() : 'untitled';
  let attempt = 1;
  let dest = path.join(blogsRoot, `${slug}.json`);
  while (fs.existsSync(dest)) {
    attempt += 1;
    slug = `${baseSlug}-${attempt}`;
    dest = path.join(blogsRoot, `${slug}.json`);
  }
  return { slug, dest };
}

function buildKeywordCondensePrompt(topic, rawKeywordsCsv) {
  return `You are an SEO strategist. Given the topic "${topic}", you are provided a comma-separated list of up to 50 candidate keywords aggregated from top Google results.

Your task: Return EXACTLY 18 non-branded, generic, high-intent keywords (comma-separated, one line). No quotes, no markdown, no commentary. Avoid company, product, and proper names. Prioritize queries aligned to virtual staging tools and interior design AI (e.g., "virtual staging software", "virtual staging app", "interior design AI", "ai room design"). Prefer a balanced mix of head and long-tail queries.

Candidates:
${rawKeywordsCsv}`;
}

function buildInitialJsonPrompt(researchContext, topic, minWords, maxWords, mustUsePhrases = []) {

  // Build the target JSON schema the model must follow
  const originalForPrompt = {
    seo: {
      slug: 'temp-slug',
      title: topic,
      description: `Sell listings faster with AI‑powered virtual staging`,
      keywords: Array.isArray(researchContext?.top_keywords)
        ? researchContext.top_keywords.slice(0, 15)
        : []
    },
    image: '',
    title: topic,
    subtitle: '',
    links: {
      ctaInline: { headline: '', text: '' },
      ctaBottom: { headline: '', text: '' }
    },
    html: '<p></p>'
  };

  return `{
  "// --- OVERRIDING DIRECTIVE ---": "// Your absolute top priority is to generate text that reads exactly like something written by a seasoned, insightful human expert addressing a professional audience.\n// That means dropping the over-polished, formulaic cadence common in AI writing. Real executives don't write like algorithms.\n// Prioritize voice, judgment, and realism over perfect grammar or structure. If it's a choice between natural and flawless, go natural—every time.",

  "// --- PERSONA & CORE DIRECTIVE ---": "// You are not a generic content generator. You are a seasoned interior designer who has helped thousands of real estate agencies sell listings faster with AI-powered virtual staging.\n// Persona: Friendly, practical, insightful. \n// Your goal: deliver meaningful, practical advice. Avoid starting sentences with 'Every'.",

  "You must output ONLY valid JSON that matches the schema of the Original JSON down below.": "",

  "// --- CONTEXTUAL INPUTS (Unchanged) ---": "Condensed research context (from top-10 sites’ SEO tags and headings):\n${JSON.stringify(researchContext, null, 2)}",

  "// --- CORE TASK & TOPIC ---": "Task:\n- Write a new, original real estate marketing article for agents and teams.\n- Focus on a specific, overlooked or misunderstood angle.\nThe exact angle is \"${topic}\" — go deep and provide real perspective for practitioners.\n- Skip the obvious; start where the useful details begin.",

  "// --- CONTENT & STYLE GUIDELINES (HUMAN VOICE + REAL ESTATE FOCUSED) ---": "- **Voice & Tone:** Friendly, concise, and helpful. Avoid fluff and hype.\\n    - Use natural rhythm: mix short tips with slightly longer explanations.\\n    - Use contractions naturally (it’s, can’t, won’t).\\n    - Use rhetorical questions sparingly and purposefully—to make the reader pause, not to dramatize.\\n    - Include small, specific asides in parentheses for realism (e.g., “yes, that empty room needs a focal point”).\\n\\n- **Structure & Flow:**\\n    - Open with a sharp, practical insight or real agent tension. Example: “Empty rooms rarely convert—style and light drive clicks.”\\n    - Use <h2> headings when shifting sections.\\n    - End with a forward-looking tip or next step. No generic conclusions.\\n\\n- **Examples & Anecdotes:**\\n    - Ground tips in real, concrete examples (listing prep, before/after, brand consistency). Brief, believable, specific.\\n\\n- **SEO & Formatting:**\\n    - Use clean semantic HTML in the 'body' section—no markdown.\\n    - Integrate 8–12 <a href=\\\"https://realstage.pro\\\">internal anchors</a> using the provided top keywords as the anchor text (natural placement, vary phrasing and avoid over-optimization).\\n    - Keep titles/descriptions clear and non-clickbait.\\n\\n- **Keywords:** Use and reflect these real estate–focused search terms where it makes sense: ${JSON.stringify(researchContext?.top_keywords || [])}. Avoid generic fluff.\\n- **Must-use phrases (exact, at least once each):** ${JSON.stringify(mustUsePhrases)}. When each of these phrases FIRST appears in the article body, wrap it as <a href=\\\"https://realstage.pro\\\" rel=\\\"nofollow noopener\\\">PHRASE</a>.\\n\\n- **Links / Next-Step CTA:**\\n    - The 'links' section should flow naturally from the article’s closing sentiment—no salesy phrasing.\\n\\n- **Length:** Aim for ${minWords} to ${maxWords} words within the HTML body. Do not use em dashes — prefer commas.",
  "// --- CONTENT & STYLE GUIDELINES (HUMAN VOICE + REAL ESTATE FOCUSED) ---": "- **Voice & Tone:** Friendly, concise, and helpful. Avoid fluff and hype.\\n    - Use natural rhythm: mix short tips with slightly longer explanations.\\n    - Use contractions naturally (it’s, can’t, won’t).\\n    - Use rhetorical questions sparingly and purposefully—to make the reader pause, not to dramatize.\\n    - Include small, specific asides in parentheses for realism (e.g., “yes, that empty room needs a focal point”).\\n\\n- **Structure & Flow:**\\n    - Open with a sharp, practical insight or real agent tension. Example: “Empty rooms rarely convert—style and light drive clicks.”\\n    - Use <h2> headings when shifting sections.\\n    - End with a forward-looking tip or next step. No generic conclusions.\\n\\n- **Examples & Anecdotes:**\\n    - Ground tips in real, concrete examples (listing prep, before/after, brand consistency). Brief, believable, specific.\\n\\n- **SEO & Formatting:**\\n    - Use clean semantic HTML in the 'body' section—no markdown.\\n    - Integrate 8–12 <a href=\\\"https://realstage.pro\\\">internal anchors</a> using the provided top keywords as the anchor text (natural placement, vary phrasing and avoid over-optimization).\\n    - Keep titles/descriptions clear and non-clickbait.\\n    - Align headings and phrasing to capture tool-intent queries like “virtual staging software”, “virtual staging app”, and design-intent queries like “interior design AI”, “ai room design”.\\n\\n- **Keywords:** Use and reflect these real estate–focused search terms where it makes sense: ${JSON.stringify(researchContext?.top_keywords || [])}. Avoid generic fluff.\\n- **Must-use phrases (exact, at least once each):** ${JSON.stringify(mustUsePhrases)}. When each of these phrases FIRST appears in the article body, wrap it as <a href=\\\"https://realstage.pro\\\" rel=\\\"nofollow noopener\\\">PHRASE</a>.\\n\\n- **Links / Next-Step CTA:**\\n    - The 'links' section should flow naturally from the article’s closing sentiment—no salesy phrasing.\\n\\n- **Length:** Aim for ${minWords} to ${maxWords} words within the HTML body. Do not use em dashes — prefer commas.",

  "// --- SEO & TECHNICAL REQUIREMENTS ---": "- Follow the Original JSON schema exactly—no renamed or missing keys.\\n- Maintain 'image' field, even if empty.\\n- Fill 'seo.slug' with a kebab-case version of the article title.\\n- Prioritize realism and editorial quality above SEO mechanics.",

  "// --- FINAL CHECKS ---": "- Output ONLY valid JSON, matching the schema below.\n- No notes, disclaimers, or commentary outside the JSON.\n- The final text should stand up beside something you'd read on McKinsey.com, Bain Insights, or the Salesforce executive blog—insightful, grounded, and distinctly human.",

  "Original JSON (follow this schema EXACTLY)": "${JSON.stringify(originalForPrompt, null, 2)}"
}`;
}

async function generateOnce(args) {
  let wrote = false;
  if (globalThis.__verbose) console.log('[blog] Start iteration at', nowIsoLocal());
  // Determine topic for this iteration
  let topic = String(args.topic || '').trim();
  const existingTitles = getExistingBlogTitles();
  if (!topic) {
    const topicObj = await proposeTravelTopic(existingTitles, '', args.theme);
    topic = String(topicObj.topic || '').trim();
  }
  if (globalThis.__verbose) console.log('[blog] Topic selected:', topic);

  if (args.dryRun) {
    if (globalThis.__verbose) console.log('[blog] Dry-run mode, skipping write.');
    return;
  }

  // -------- Research (silent except for a single status line) --------
  const keyword = topic;
  let rawResearch = {};
  try {
    rawResearch = runPythonResearch(topic, keyword);
  } catch (e) {
    rawResearch = {};
    if (globalThis.__verbose) console.error('[blog] Research step failed:', e?.message || e);
  }
  const pages = Array.isArray(rawResearch.top_pages) ? rawResearch.top_pages : [];
  const metaKw = [];
  for (const p of pages.slice(0, 4)) {
    if (p && typeof p.meta_keywords === 'string' && p.meta_keywords.trim()) {
      const parts = p.meta_keywords.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
      metaKw.push(...parts);
    }
  }
  const keywords50 = Array.from(new Set(metaKw)).slice(0, 50);
  const csv50 = keywords50.join(', ');

  // Ask Claude to refine to EXACTLY 18 plain-text keywords
  const condensePrompt = buildKeywordCondensePrompt(topic, csv50);
  let condensedKeywordsCsv = '';
  try {
    condensedKeywordsCsv = await callOpenRouterTEXT(CONDENSE_MODEL, condensePrompt, { max_tokens: 400, temperature: 0.2 });
  } catch (e) {
    condensedKeywordsCsv = keywords50.slice(0, 18).join(', ');
    if (globalThis.__verbose) console.error('[blog] Keyword condense step failed (fallback used):', e?.message || e);
  }
  const condensedKeywordsArr = condensedKeywordsCsv.split(',').map(s => s.trim()).filter(Boolean).slice(0, 30);
  if (globalThis.__verbose) console.log('[blog] Keyword candidates:', condensedKeywordsArr.length);

  // -------- Generation --------
  const brandSeeds = ['real stage pro', 'realstage pro', 'ai real estate staging', 'ai virtual staging'];
  const brandIntentPool = Array.from(new Set([...BRAND_LINK_KEYWORDS, ...INTENT_SEED_KEYWORDS]));
  const forcedLinkPhrases = pickRandomUnique(brandIntentPool, 5);
  // Ensure we bias the keyword set toward tool and design-AI intent by merging in the seed list
  const mergedKeywords = Array.from(new Set([
    ...(condensedKeywordsArr || []),
    ...INTENT_SEED_KEYWORDS,
    ...brandSeeds,
    ...forcedLinkPhrases
  ])).slice(0, 60);
  const researchContext = { top_keywords: mergedKeywords };
  const initialPrompt = buildInitialJsonPrompt(researchContext, topic, args.minWords, args.maxWords, forcedLinkPhrases);
  let generated = await callOpenRouterJSON(DEFAULT_MODEL, initialPrompt, { max_tokens: args.maxTokens, schema: ARTICLE_JSON_SCHEMA, temperature: 0.2 });
  // Ensure must-use phrases are included in-body; if missing, regenerate once with stricter instruction
  try {
    const html = String(generated?.html || '');
    const missing = (forcedLinkPhrases || []).filter((kw) => {
      const esc = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return !new RegExp(`\\b${esc}\\b`, 'i').test(html);
    });
    if (missing.length) {
      const strictPrompt = initialPrompt + `\n\n// STRICT: Include each of these phrases exactly (at least once) in the article body: ${JSON.stringify(missing)}. When each phrase FIRST appears, wrap it as <a href=\\"https://realstage.pro\\" rel=\\"nofollow noopener\\">PHRASE</a>. Do not add any extra footer sentences.`;
      const regen = await callOpenRouterJSON(DEFAULT_MODEL, strictPrompt, { max_tokens: args.maxTokens, schema: ARTICLE_JSON_SCHEMA, temperature: 0.1 });
      if (regen && regen.html) generated = regen;
      if (globalThis.__verbose) console.log('[blog] Regenerated to include missing phrases:', missing.length);
    }
  } catch (e) {
    if (globalThis.__verbose) console.warn('[blog] Phrase enforcement step failed:', e?.message || e);
  }
  // If content is shorter than minWords, request a single expansion pass to reach target length
  try {
    const currentWc = wordCountFromHtml(generated?.html || '');
    if (currentWc < Number(args.minWords || 0)) {
      if (globalThis.__verbose) console.log('[blog] Expanding article from ~', currentWc, 'to >=', args.minWords);
      const expandSchema = ARTICLE_JSON_SCHEMA;
      const expandPrompt = `You are editing an existing blog article JSON. Keep the exact JSON schema and keys. Expand ONLY the html body to reach between ${args.minWords} and ${args.maxWords} words while retaining the same voice and topic. Do not alter 'seo.title' or 'seo.slug'. Keep links natural.\n\nExisting JSON:\n${JSON.stringify({ ...generated, html: String(generated?.html || '') }.valueOf(), null, 2)}`;
      const expanded = await callOpenRouterJSON(DEFAULT_MODEL, expandPrompt, { max_tokens: args.maxTokens, schema: expandSchema, temperature: 0.2 });
      if (expanded && typeof expanded.html === 'string') {
        generated.html = expanded.html;
      }
    }
  } catch (e) {
    console.warn('[blog] Expansion pass failed:', e?.message || e);
  }
  generated.timestamp = nowIsoLocal();
  ensureCtaLinks(generated);
  if (typeof generated.html === 'string') generated.html = generated.html.replace(/\u2014|—/g, ', ');
  try { generated.html = enrichLinksInHtml(generated.html, mergedKeywords, { maxLinks: 12 }); } catch {}
  try {
    let out = String(generated.html || '');
    const linkIfPresent = (kw) => {
      const esc = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const linkedRe = new RegExp(`<a[^>]*>\\s*${esc}\\s*<\\/a>`, 'i');
      const plainRe = new RegExp(`\\b${esc}\\b`, 'i');
      if (linkedRe.test(out)) return;
      if (plainRe.test(out)) out = out.replace(plainRe, `<a href=\\"https://realstage.pro\\" rel=\\"nofollow noopener\\">${kw}</a>`);
    };
    for (const kw of forcedLinkPhrases) linkIfPresent(kw);
    generated.html = out;
  } catch (e) {
    if (globalThis.__verbose) console.warn('[blog] Post-linking pass failed:', e?.message || e);
  }
  try {
    if (!generated.image) {
      const files = listBlogImageFilenames();
      if (files.length) {
        const pick = files[randomInt(files.length)];
        if (pick) generated.image = toAppAssetRefBlog(pick);
      }
    }
  } catch (e) {
    if (globalThis.__verbose) console.warn('[blog] Image selection failed:', e?.message || e);
  }
  const baseSlug = generated?.seo?.slug || topic.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').slice(0,80);
  const { slug, dest } = uniqueSlugPath(baseSlug);
  if (slug !== baseSlug && generated.seo) generated.seo.slug = slug;
  if (globalThis.__verbose) {
    const wc = wordCountFromHtml(generated?.html || '');
    console.log('[blog] Final slug:', slug, '| words ~', wc);
  }
  fs.writeFileSync(dest, JSON.stringify(generated, null, 2) + '\n', 'utf8');
  wrote = true;
  if (globalThis.__verbose) console.log('[blog] Wrote file:', dest);

  try {
    const gen = spawnSync(process.execPath, [path.join(projectRoot, 'scripts', 'generate-sitemap.js')], { stdio: 'pipe', env: process.env });
    if (gen.error) throw gen.error;
    if (typeof gen.status === 'number' && gen.status !== 0) {
      throw new Error(`generate-sitemap exited with code ${gen.status}`);
    }
  } catch (e) {
    if (globalThis.__verbose) console.warn('[blog] Sitemap generation failed:', e?.message || e);
  }
  return wrote;
}

async function main() {
  const args = parseArgs(process.argv);
  const runs = Math.max(1, Number(args.times || 1));
  // Expose verbose flag globally for lightweight logging inside helpers
  globalThis.__verbose = !!args.verbose;
  if (globalThis.__verbose) {
    console.log('[blog] Runs:', runs);
    if (process.env.OPENROUTER_MODEL) console.log('[blog] Model:', process.env.OPENROUTER_MODEL);
    if (process.env.OPENROUTER_CONDENSE_MODEL) console.log('[blog] Condense model:', process.env.OPENROUTER_CONDENSE_MODEL);
  }
  let ok = 0, fail = 0;
  for (let i = 0; i < runs; i++) {
    try {
      const success = await generateOnce(args);
      if (success) ok++; else fail++;
    } catch (e) {
      fail++;
      if (globalThis.__verbose) console.error('[blog] Iteration failed:', e?.message || e);
    }
  }
  // Always print a short summary so the user has feedback without --verbose
  console.log(`Blog generation summary: ${ok} succeeded, ${fail} failed (out of ${runs}).`);
}

try {
  if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    await main();
  }
} catch (err) {
  process.exit(1);
}
