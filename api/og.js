/**
 * Vercel Serverless Function: Full SEO injection for Blog Posts
 *
 * Handles two problems:
 * 1. Social crawlers (WhatsApp, LinkedIn, etc.) don't run JS — needs OG meta in raw HTML.
 * 2. Google indexes content faster when it's in the initial HTML, not rendered by JS.
 *
 * This function fetches the blog post server-side, injects:
 *   - Correct <title>, meta description, canonical, OG/Twitter tags
 *   - Article-specific OG meta (article:published_time, article:author, article:section)
 *   - Article body as pre-rendered HTML inside <div id="root"> (Google reads this immediately)
 *   - JSON-LD BlogPosting + BreadcrumbList structured data
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const API_BASE = process.env.BLOG_API_URL || process.env.VITE_API_URL || 'https://letuic.com';
const SITE_URL = 'https://letuic.com';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return serveFallbackHtml(res);
  }

  try {
    const apiUrl = `${API_BASE}/api/blog/public?slug=${slug}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return serveFallbackHtml(res);
    }

    const post = await response.json();

    if (!post || !post.title) {
      return serveFallbackHtml(res);
    }

    let html;
    try {
      html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    } catch {
      html = buildMinimalHtml(post, slug);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(html);
    }

    const postUrl     = `${SITE_URL}/blog/${slug}`;
    const ogImage     = (post.featuredImage && post.featuredImage !== '') ? post.featuredImage : `${SITE_URL}/og2.png`;
    const ogTitle     = `${post.title} | Letuic Insights`;
    const ogDesc      = post.excerpt || 'Read more on the Letuic Blog.';
    const publishedAt = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
    const authorName  = post.authorName || 'Letuic';
    const category    = post.category   || 'Education';

    // ── <title> ──────────────────────────────────────────────────────────────
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(ogTitle)}</title>`
    );

    // ── meta description ─────────────────────────────────────────────────────
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(ogDesc)}" />`
    );

    // ── robots ───────────────────────────────────────────────────────────────
    // Inject after meta description (or before </head> if not found)
    if (!html.includes('name="robots"')) {
      html = html.replace(
        /<meta\s+name="description"/,
        `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n  <meta name="description"`
      );
    }

    // ── canonical ────────────────────────────────────────────────────────────
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(postUrl)}" />`
    );

    // ── OG core tags ─────────────────────────────────────────────────────────
    html = html.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="article" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${escapeHtml(postUrl)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${escapeHtml(ogDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
    );

    // ── OG article-specific tags ─────────────────────────────────────────────
    // Injected right after og:image
    const articleMeta = [
      `<meta property="article:published_time" content="${publishedAt}" />`,
      `<meta property="article:author" content="${escapeHtml(authorName)}" />`,
      `<meta property="article:section" content="${escapeHtml(category)}" />`,
      `<meta property="og:site_name" content="Letuic" />`,
    ].join('\n  ');

    html = html.replace(
      /(<meta\s+property="og:image"[^>]*\/>)/,
      `$1\n  ${articleMeta}`
    );

    // ── Twitter tags ─────────────────────────────────────────────────────────
    html = html.replace(
      /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:url" content="${escapeHtml(postUrl)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:title" content="${escapeHtml(ogTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:description"[\s\S]*?\/>/,
      `<meta property="twitter:description" content="${escapeHtml(ogDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:image" content="${escapeHtml(ogImage)}" />`
    );

    // ── JSON-LD structured data ───────────────────────────────────────────────
    const wordCount = post.body ? post.body.split(/\s+/).length : 0;

    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': ogDesc,
      'image': ogImage,
      'url': postUrl,
      'mainEntityOfPage': postUrl,
      'datePublished': publishedAt,
      'dateModified': publishedAt,
      'wordCount': wordCount,
      'articleSection': category,
      'inLanguage': 'en',
      'author': {
        '@type': 'Person',
        'name': authorName,
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Letuic',
        'logo': {
          '@type': 'ImageObject',
          'url': `${SITE_URL}/logo.png`,
        },
      },
    };

    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home',    'item': SITE_URL           },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog',    'item': `${SITE_URL}/blog` },
        { '@type': 'ListItem', 'position': 3, 'name': post.title,'item': postUrl            },
      ],
    };

    html = html.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>\n` +
      `  <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>\n` +
      `</head>`
    );

    // ── Pre-render article body for Google ───────────────────────────────────
    // Google can read this immediately without running JS.
    // React replaces it on the client when it mounts — users never see this raw HTML.
    const bodyHtml = markdownToBasicHtml(post.body || '');
    const preRendered = `<article itemscope itemtype="https://schema.org/BlogPosting">` +
      `<h1 itemprop="headline">${escapeHtml(post.title)}</h1>` +
      `<p itemprop="description">${escapeHtml(ogDesc)}</p>` +
      `<meta itemprop="datePublished" content="${publishedAt}" />` +
      `<meta itemprop="author" content="${escapeHtml(authorName)}" />` +
      `<div itemprop="articleBody">${bodyHtml}</div>` +
      `</article>`;

    html = html.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">${preRendered}</div>`
    );

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);

  } catch (error) {
    console.error('OG handler error:', error);
    return serveFallbackHtml(res);
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function serveFallbackHtml(res) {
  try {
    const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html);
  } catch {
    res.writeHead(302, { Location: '/' });
    return res.end();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Converts markdown to basic HTML for server-side pre-rendering.
 * Not a full parser — enough to give Google headings, paragraphs, and lists.
 */
function markdownToBasicHtml(md) {
  if (!md) return '';

  // Sanitize HTML special chars before any transformation
  let out = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Strip fenced code blocks (not useful for text SEO)
  out = out.replace(/```[\s\S]*?```/g, '');
  // Strip inline code
  out = out.replace(/`[^`\n]+`/g, '');
  // Strip images
  out = out.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  // Links → anchor text only
  out = out.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

  // Headings (longest prefix first)
  out = out.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  out = out.replace(/^#####\s+(.+)$/gm,  '<h5>$1</h5>');
  out = out.replace(/^####\s+(.+)$/gm,   '<h4>$1</h4>');
  out = out.replace(/^###\s+(.+)$/gm,    '<h3>$1</h3>');
  out = out.replace(/^##\s+(.+)$/gm,     '<h2>$1</h2>');
  out = out.replace(/^#\s+(.+)$/gm,      '<h1>$1</h1>');

  // Inline formatting
  out = out.replace(/\*\*\*([^*\n]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  out = out.replace(/\*\*([^*\n]+)\*\*/g,     '<strong>$1</strong>');
  out = out.replace(/___([^_\n]+)___/g,        '<strong><em>$1</em></strong>');
  out = out.replace(/__([^_\n]+)__/g,          '<strong>$1</strong>');
  out = out.replace(/\*([^*\n]+)\*/g,          '<em>$1</em>');
  out = out.replace(/_([^_\n]+)_/g,            '<em>$1</em>');

  // Blockquotes
  out = out.replace(/^>\s*(.+)$/gm, '<blockquote>$1</blockquote>');

  // List items
  out = out.replace(/^\s*[-*+]\s+(.+)$/gm, '<li>$1</li>');
  out = out.replace(/^\s*\d+\.\s+(.+)$/gm,  '<li>$1</li>');

  // Horizontal rules → remove
  out = out.replace(/^[-*_]{3,}$/gm, '');

  // Wrap remaining text blocks in <p>
  const blocks = out.split(/\n{2,}/);
  out = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-6]|li|blockquote|ul|ol|hr)/.test(block)) return block;
    block = block.replace(/\n/g, ' ');
    return `<p>${block}</p>`;
  }).filter(Boolean).join('\n');

  return out;
}

function buildMinimalHtml(post, slug) {
  const postUrl  = `${SITE_URL}/blog/${slug}`;
  const ogImage  = (post.featuredImage && post.featuredImage !== '') ? post.featuredImage : `${SITE_URL}/og2.png`;
  const ogTitle  = `${post.title} | Letuic Insights`;
  const ogDesc   = post.excerpt || 'Read more on the Letuic Blog.';
  const bodyHtml = markdownToBasicHtml(post.body || '');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(ogTitle)}</title>
  <meta name="description" content="${escapeHtml(ogDesc)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="${escapeHtml(postUrl)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeHtml(postUrl)}" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(ogDesc)}" />
  <meta property="og:image" content="${escapeHtml(ogImage)}" />
  <meta property="og:site_name" content="Letuic" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${escapeHtml(postUrl)}" />
  <meta property="twitter:title" content="${escapeHtml(ogTitle)}" />
  <meta property="twitter:description" content="${escapeHtml(ogDesc)}" />
  <meta property="twitter:image" content="${escapeHtml(ogImage)}" />
</head>
<body>
  <article itemscope itemtype="https://schema.org/BlogPosting">
    <h1 itemprop="headline">${escapeHtml(post.title)}</h1>
    <p itemprop="description">${escapeHtml(ogDesc)}</p>
    <div itemprop="articleBody">${bodyHtml}</div>
  </article>
</body>
</html>`;
}
