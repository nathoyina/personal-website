# Natalie — Personal Website

Product manager portfolio showcasing AI/ML-powered projects. Built with Next.js, optimized for demo clicks via loop engineering.

Live site: [nat-pm-portfolio.vercel.app](https://nat-pm-portfolio.vercel.app)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com). Analytics events require a Vercel deployment to collect data.

```bash
npm run build
```

## Projects

10 open-source projects with live demos — see [data/projects.ts](data/projects.ts) for the full list.

### Refresh project screenshots

```bash
npm run capture-screenshots
```

Captures PNGs from live demo URLs into `public/projects/`. Projects without demos use SVG fallbacks.

## Click optimization loop

This site uses [loop engineering](https://github.com/cobusgreyling/loop-engineering) to iteratively improve the portfolio in priority order:

1. **Impressions & sources** — who lands, from where (LinkedIn, Google, GitHub, direct, UTM)
2. **SEO** — search and social discovery
3. **Demo CTR** — clicks once traffic exists

### Traffic tracking

On first visit per session, a `page_impression` event fires with:
- **source** — `linkedin`, `google`, `github`, `direct`, `utm`, `twitter`, or `referral`
- **referrer** — hostname or `direct`
- **utm_*** — if present in the URL

Share with UTM params to attribute traffic:
```
https://yoursite.vercel.app?utm_source=linkedin&utm_medium=post&utm_campaign=launch
```

### SEO

- `/sitemap.xml` and `/robots.txt` auto-generated
- JSON-LD Person + WebSite structured data
- Dynamic Open Graph image at `/opengraph-image`
- Set `NEXT_PUBLIC_SITE_URL` in Vercel env after deploy (see `.env.example`)

After deploy, add the site to [Google Search Console](https://search.google.com/search-console) and submit the sitemap.

### Instrumentation

| Event | When |
|-------|------|
| `page_impression` | First page load per session |
| `demo_click` | Demo CTA click |
| `github_click` | GitHub link click |
| `scroll_to_projects` | Hero scroll CTA |

### Weekly triage prompt (L1)

```
Run the loop-click-triage skill on personal-website.
Prefer data/synthetic-traffic.json when _meta.mode is synthetic (demo).
Otherwise read Vercel Analytics for page_impression (by source), then demo_click and github_click.
Focus on impressions and sources first; only analyze CTR if 7+ days of traffic exist.
Compare against STATE.md hypotheses. Update STATE.md: High Priority, Watch List, Post-Run Critique.
Do not edit source code — report only.
```

### Demo with synthetic traffic

[`data/synthetic-traffic.json`](data/synthetic-traffic.json) is a labeled 14-day fake traffic snapshot so you can demo the full loop (sources → SEO → CTR) without real visitors. Run the triage prompt above; STATE.md will update with synthetic findings.

See [LOOP.md](LOOP.md) for full loop configuration.
