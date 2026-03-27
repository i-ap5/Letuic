/**
 * Vercel Serverless Function: Dynamic OG Meta Tag Injection for Blog Posts
 *
 * Social media crawlers (WhatsApp, LinkedIn, Twitter, Facebook, Instagram)
 * don't execute JavaScript. Since this is an SPA, we need to intercept
 * blog post requests and return HTML with the correct OG meta tags
 * so the blog's featured image appears as the link preview thumbnail.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// Blog API base URL — uses BLOG_API_URL env var, or VITE_API_URL, or the production domain
const API_BASE = process.env.BLOG_API_URL || process.env.VITE_API_URL || 'https://letuic.com';
const SITE_URL = 'https://letuic.com';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    // No slug, just serve the normal SPA
    return serveFallbackHtml(res);
  }

  try {
    // Fetch the blog post data from the public API
    const apiUrl = `${API_BASE}/api/blog/public?slug=${slug}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return serveFallbackHtml(res);
    }

    const post = await response.json();

    if (!post || !post.title) {
      return serveFallbackHtml(res);
    }

    // Read the built index.html as template
    let html;
    try {
      html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    } catch {
      // Fallback: construct minimal HTML with OG tags + redirect
      html = buildMinimalHtml(post, slug);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(html);
    }

    // Replace the default OG tags with blog-post-specific ones
    const postUrl = `${SITE_URL}/blog/${slug}`;
    const ogImage = (post.featuredImage && post.featuredImage !== '') ? post.featuredImage : `${SITE_URL}/og2.png`;
    const ogTitle = `${post.title} | Letuic Insights`;
    const ogDescription = post.excerpt || 'Read more on the Letuic Blog.';

    // Replace <title>
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(ogTitle)}</title>`
    );

    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(ogDescription)}" />`
    );

    // Replace OG tags
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
      `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
    );

    // Replace Twitter tags
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
      `<meta property="twitter:description" content="${escapeHtml(ogDescription)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:image" content="${escapeHtml(ogImage)}" />`
    );

    // Replace canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(postUrl)}" />`
    );

    // Inject Article structured data before closing </head>
    const articleJsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || '',
      "image": ogImage,
      "author": {
        "@type": "Person",
        "name": post.authorName || "Letuic"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Letuic",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`
        }
      },
      "datePublished": post.createdAt,
      "url": postUrl,
      "mainEntityOfPage": postUrl
    });

    html = html.replace(
      '</head>',
      `<script type="application/ld+json">${articleJsonLd}</script>\n</head>`
    );

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Cache for 1 hour, stale-while-revalidate for 24 hours
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);

  } catch (error) {
    console.error('OG handler error:', error);
    return serveFallbackHtml(res);
  }
}

function serveFallbackHtml(res) {
  try {
    const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html);
  } catch {
    // If even fallback fails, redirect to homepage
    res.writeHead(302, { Location: '/' });
    return res.end();
  }
}

function buildMinimalHtml(post, slug) {
  const postUrl = `${SITE_URL}/blog/${slug}`;
  const ogImage = (post.featuredImage && post.featuredImage !== '') ? post.featuredImage : `${SITE_URL}/og2.png`;
  const ogTitle = `${post.title} | Letuic Insights`;
  const ogDescription = post.excerpt || 'Read more on the Letuic Blog.';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(ogTitle)}</title>
  <meta name="description" content="${escapeHtml(ogDescription)}" />
  <link rel="canonical" href="${escapeHtml(postUrl)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeHtml(postUrl)}" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(ogDescription)}" />
  <meta property="og:image" content="${escapeHtml(ogImage)}" />
  <meta property="og:site_name" content="Letuic" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${escapeHtml(postUrl)}" />
  <meta property="twitter:title" content="${escapeHtml(ogTitle)}" />
  <meta property="twitter:description" content="${escapeHtml(ogDescription)}" />
  <meta property="twitter:image" content="${escapeHtml(ogImage)}" />
  <meta http-equiv="refresh" content="0;url=${escapeHtml(postUrl)}" />
</head>
<body>
  <p>Redirecting to <a href="${escapeHtml(postUrl)}">${escapeHtml(post.title)}</a>...</p>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
