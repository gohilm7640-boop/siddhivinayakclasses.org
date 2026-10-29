// Renders every route to static HTML after `vite build`, so each page ships its own
// title, description and content (fast first paint, crawlable without JavaScript).
// Writes dist/<route>/index.html, dist/404.html, dist/sitemap.xml and dist/robots.txt.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, routes, notFound, schemaFor, site } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const template = await readFile(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function page(route, url) {
	const canonical = site.url + (url === '/' ? '/' : url);
	const head = [
		`<title>${esc(route.title)}</title>`,
		`<meta name="description" content="${esc(route.description)}" />`,
		route === notFound ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`,
		route === notFound ? '' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
		`<meta property="og:title" content="${esc(route.title)}" />`,
		`<meta property="og:description" content="${esc(route.description)}" />`,
		`<meta property="og:url" content="${canonical}" />`,
		`<meta name="twitter:title" content="${esc(route.title)}" />`,
		`<meta name="twitter:description" content="${esc(route.description)}" />`,
		route === notFound ? '' : `<script type="application/ld+json">${JSON.stringify(schemaFor(url, route.title.split(' | ')[0])).replace(/</g, '\\u003c')}</script>`,
	]
		.filter(Boolean)
		.join('\n\t\t');
	return template.replace(/<!--head-->[\s\S]*?<!--\/head-->/, head).replace('<!--app-->', render(url));
}

for (const route of routes) {
	const file = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html');
	await mkdir(dirname(file), { recursive: true });
	await writeFile(file, page(route, route.path));
}
await writeFile(join(dist, '404.html'), page(notFound, '/404'));

const today = new Date().toISOString().slice(0, 10);
const urls = routes.map((r) => `\t<url><loc>${site.url}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n');
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
// Search and AI answer engines are welcome: the site is public information about the class.
const bots = ['*', 'Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'];
await writeFile(join(dist, 'robots.txt'), `${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${site.url}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${routes.length} pages + 404`);
