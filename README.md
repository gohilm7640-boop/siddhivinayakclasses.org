# siddhivinayakclasses.org

Website for Shree Siddhivinayak Classes (SSV) and the SSV app. Vite + React + Framer Motion, prerendered to static HTML for every route.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-check, client build, SSR build, prerender
npm run preview    # serve dist/ like a static host
```

`npm run build` writes `dist/`:

- `index.html`, `courses/index.html`, `about/index.html`, … one prerendered page per route, each with its own title, description, canonical URL, Open Graph tags and JSON-LD.
- `404.html` (noindex), `sitemap.xml`, `robots.txt` (search and AI crawlers allowed), `llms.txt`.

## Deploy

Any static host works. Output directory: `dist`. Build command: `npm run build`. Node 18+.

- **Vercel**: import the repo; `vercel.json` sets clean URLs and long caching for `/assets`.
- **Netlify / Cloudflare Pages**: build `npm run build`, publish `dist`. Both serve `404.html` for unknown paths.

## Where things live

| What | Where |
| --- | --- |
| Contact details, subjects, nav | `src/site.ts` (phone, WhatsApp and address render only when filled in) |
| Routes, page titles and descriptions | `src/routes.tsx` |
| Structured data | `src/seo.ts` |
| Policy text | `src/pages/legalDocs.ts` |
| App screenshots | `public/screens/*.webp`, listed in `src/screens.ts` |
| Sound effects (off by default) | `src/sound.ts`, files in `public/sfx/` (CC0, from the launch film kit) |
| Design tokens | top of `src/styles/global.css`, matching the SSV app theme |

App screens are real captures from the SSV app with demo data. The admin dashboard home screen is left out because it shows revenue.
