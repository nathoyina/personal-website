# LOOP.md — Portfolio Optimization Loop

This portfolio uses [loop engineering](https://github.com/cobusgreyling/loop-engineering) to improve performance in priority order:

1. **Impressions & traffic sources** — who lands, from where
2. **SEO visibility** — search and social discovery
3. **Demo CTR** — clicks once people arrive

## Active Loops

| Pattern | Cadence | Status | Skill |
|---------|---------|--------|-------|
| Portfolio Triage | 1w | L1 report-only | `.cursor/skills/loop-click-triage/SKILL.md` |

## Goals (priority order)

### 1. Impressions & sources (primary)
- Track `page_impression` events with source bucket, referrer, UTM params
- Understand which channels drive visits: LinkedIn, Google, GitHub, direct, UTM campaigns
- Optimize sharing strategy based on source data

### 2. SEO
- Rank for name + PM portfolio + project-specific terms
- Monitor via Google Search Console after deploy
- Iterate title, description, structured data, OG image based on impressions

### 3. Demo CTR (secondary)
- Track `demo_click`, `github_click` by project and placement
- Optimize copy and layout once traffic baseline exists

## Human Gates

- No auto-edits until L2 checklist complete
- SEO changes (title, description, structured data) require human review
- All copy/layout changes require human PR review

## Budget

- Max runs/week: 1
- Max tokens/run: 50k (see `loop-budget.md`)
- Append each run to `loop-run-log.md`
- Kill switch: set `loop-pause-all` in STATE.md

## Success Metrics

| Priority | Metric |
|----------|--------|
| 1 | Page impressions (unique sessions) |
| 1 | Impressions by source (linkedin, google, github, direct, utm) |
| 2 | Organic search impressions (Google Search Console) |
| 2 | Social link CTR (LinkedIn post → site) |
| 3 | Demo CTR (% of visitors clicking any demo CTA) |
| 3 | Per-project CTR |

## Instrumentation

| Event | When | Properties |
|-------|------|------------|
| `page_impression` | First visit per session | source, referrer, utm_*, landing_path |
| `demo_click` | Demo CTA click | project, placement |
| `github_click` | GitHub link click | project, placement |
| `scroll_to_projects` | Hero CTA click | placement |

## Links

- Pattern inspiration: [daily-triage](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/daily-triage.md)
- Checklist: [loop-design-checklist](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/loop-design-checklist.md)
