import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run client build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Load SSR bundle
const ssrBundlePath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');
if (!fs.existsSync(ssrBundlePath)) {
  console.error('Error: dist-ssr/entry-server.js not found. Run SSR build first.');
  process.exit(1);
}

const { render, getRouteMeta } = await import(pathToFileURL(ssrBundlePath).href);

// Extract all routes from public/sitemap.xml
const sitemapPath = path.resolve(rootDir, 'public', 'sitemap.xml');
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapXml.matchAll(/<loc>https:\/\/urban-edge-designs\.com([^<]*)<\/loc>/g)];
const routes = locMatches.map(m => m[1] || '/');

console.log(`Starting SSG prerendering for ${routes.length} routes...`);

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

let generatedCount = 0;

for (const route of routes) {
  const url = route === '' ? '/' : route;
  
  try {
    const { html: appHtml } = render(url);
    const meta = getRouteMeta(url);

    let pageHtml = template;

    // 1. Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(meta.title)}</title>`
    );

    // 2. Meta description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    );

    // 3. Canonical tag
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeHtml(meta.canonicalUrl)}" />`
    );

    // 4. OpenGraph tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${escapeHtml(meta.canonicalUrl)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:image"[^>]*>/i,
      `<meta property="og:image" content="${escapeHtml(meta.ogImage)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:type"[^>]*>/i,
      `<meta property="og:type" content="${escapeHtml(meta.ogType || 'website')}" />`
    );

    // 5. Twitter tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"[^>]*>/i,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"[^>]*>/i,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:image"[^>]*>/i,
      `<meta name="twitter:image" content="${escapeHtml(meta.ogImage)}" />`
    );

    // 6. JSON-LD Schemas if present
    if (meta.schema && meta.schema.length > 0) {
      const schemaTags = meta.schema
        .map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join('\n    ');
      pageHtml = pageHtml.replace('</head>', `    ${schemaTags}\n  </head>`);
    }

    // 7. Inject fully rendered React application HTML into root div
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Write file
    if (url === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf8');
    } else {
      const cleanRel = url.replace(/^\//, '');
      const filePathHtml = path.resolve(distDir, `${cleanRel}.html`);
      const dirPath = path.resolve(distDir, cleanRel);
      const indexPath = path.resolve(dirPath, 'index.html');

      fs.mkdirSync(path.dirname(filePathHtml), { recursive: true });
      fs.writeFileSync(filePathHtml, pageHtml, 'utf8');

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(indexPath, pageHtml, 'utf8');
    }

    generatedCount++;
  } catch (err) {
    console.error(`Failed to prerender route ${url}:`, err);
  }
}

console.log(`Prerender complete: ${generatedCount} / ${routes.length} static HTML pages generated.`);
