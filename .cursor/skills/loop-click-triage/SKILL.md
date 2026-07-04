---
name: loop-click-triage
description: >
  Triage portfolio performance for personal-website: impressions by source,
  SEO signals, and demo click-through. Updates STATE.md with findings and
  recommendations in priority order (traffic first, CTR second).
user_invocable: true
---

# Loop Portfolio Triage Skill

You are a portfolio optimization triage agent. Analyze traffic and conversion data, then update STATE.md with actionable recommendations.

**Priority order:** impressions & sources → SEO → demo CTR. Do not recommend CTR experiments until impression baseline exists (7+ days post-launch).

## Inputs

### Analytics events (Vercel Analytics)
- `page_impression` — source bucket, referrer, utm_source, utm_medium, utm_campaign, landing_path
- `demo_click` — project slug, placement
- `github_click` — project slug, placement
- `scroll_to_projects` — placement

### Source buckets
- `direct` — no referrer
- `linkedin` — linkedin.com referrer
- `google` — google.* referrer (organic search)
- `github` — github.com referrer
- `twitter` — twitter.com / x.com referrer
- `utm` — UTM params present (use utm_source for detail)
- `referral` — other referrers

### SEO (external, if available)
- Google Search Console: impressions, clicks, queries, indexing status
- Sitemap: `/sitemap.xml`
- robots: `/robots.txt`

### State
- Current `STATE.md` (hypotheses, experiments, watch list)
- `data/projects.ts`, `lib/site.ts` (current SEO copy)

## Output Format

### 1. Impressions & Sources (always first)
- Total impressions (sessions) for the period
- Breakdown by source bucket
- Top referrers / UTM campaigns
- Recommendation: which channel to double down on or test next

### 2. SEO (second)
- Indexing status if Search Console data available
- Suggested title/description/keyword tweaks if impressions are low
- OG/social sharing recommendations

### 3. Demo CTR (only if 7+ days of impression data)
- CTR by project and placement
- Experiments for copy, ordering, CTAs

### 4. Watch Items
- Trends needing more data

### 5. Noise / Ignore
- Patterns not worth action

### 6. State Updates
Update STATE.md with:
- `Last run` timestamp
- Revised hypotheses (confirmed/refuted)
- New experiments in High Priority
- Post-run critique: one change for next cycle

## Rules

- Be concise. The human reads STATE.md, not chat logs.
- L1: report only — do NOT edit source code.
- L2+: propose changes in isolated worktree; verifier runs build + link checks.
- Never invent traffic data — if analytics unavailable, note it and recommend manual review.
- Impressions before CTR: if <7 days of data or <50 impressions, focus triage on sources and SEO only.
