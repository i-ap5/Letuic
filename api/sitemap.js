const API_BASE = process.env.BLOG_API_URL || process.env.VITE_API_URL || 'https://letuic.com';
const SITE_URL = 'https://letuic.com';

const STATIC_PAGES = [
  { path: '/',          priority: '1.0', changefreq: 'weekly'  },
  { path: '/blog',      priority: '0.9', changefreq: 'daily'   },
  { path: '/about',     priority: '0.8', changefreq: 'monthly' },
  { path: '/community', priority: '0.8', changefreq: 'weekly'  },
  { path: '/contact',   priority: '0.7', changefreq: 'monthly' },
  { path: '/careers',   priority: '0.7', changefreq: 'weekly'  },
];

export default async function handler(req, res) {
  let posts = [];
  try {
    const r = await fetch(`${API_BASE}/api/blog/public`);
    if (r.ok) posts = await r.json();
  } catch (e) {
    console.error('sitemap: failed to fetch posts', e);
  }

  const now = new Date().toISOString();

  const staticNodes = STATIC_PAGES.map(p => `
  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('');

  const postNodes = posts.map(post => {
    const lastmod = post.createdAt ? new Date(post.createdAt).toISOString() : now;
    return `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticNodes}${postNodes}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  return res.status(200).send(xml);
}
