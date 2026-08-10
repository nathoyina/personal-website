# Loop State — personal-website

Last run: 2026-07-11 12:45 UTC (L1 · **synthetic** demo traffic)
Data: `data/synthetic-traffic.json` · period 2026-06-27 → 2026-07-11 (14d)

## High Priority (experiments to run)

- [ ] **Double down on LinkedIn** — 74 linkedin + 41 UTM-launch = 62% of impressions. Schedule a 2nd post featuring `search-halal-food` (top demo CTR) with UTM `utm_campaign=halal-spotlight`
- [ ] **SEO: target long-tail that already impresses** — GSC synthetic shows `halal food finder singapore` and `ai product manager portfolio` with impressions but near-zero clicks → propose title/description tweak for human review (do not auto-edit)
- [ ] **CTR: boost hero demo for `learn-chinese`** — spotlight peer `search-halal-food` leads demos (9 vs 6); test swapping hero CTA project or sharpening chinese personalNote (PR review required)
- [ ] **Promote `kdrama-learn` in spotlight?** — grid-only but 4 demo clicks (beats `pmos`); candidate to rotate into spotlight order 3 for one cycle

## Watch List

- Overall demo CTR **15.6%** (29/186) — healthy for cold portfolio traffic; don't over-optimize layout yet
- Scroll-to-projects rate **52%** — hero is doing its job; CTR work is below the fold
- `teaching-lesson-plan` — 4 GitHub clicks, 0 demos (no live URL); keep as GitHub-primary, don't invent a demo CTA
- Organic Google **18** impressions (9.7%) — growing slowly; branded query `natalie ho yi na` drives most GSC clicks
- Direct **38** — likely profile-link bookmarks; hard to attribute further

## Hypotheses

### Impressions & sources (primary)
1. LinkedIn will be the top traffic source early on — **confirmed (synthetic)** — linkedin+utm dominate
2. UTM-tagged shares make source attribution reliable vs raw referrer — **confirmed (synthetic)** — launch campaign cleanly attributed (41)
3. JSON-LD Person schema helps branded search — **plausible (synthetic)** — branded queries lead GSC clicks; causation unproven

### SEO
4. Title + description with project names improve long-tail discovery — **partial (synthetic)** — project-ish queries impress but under-click; copy experiment warranted
5. OG image improves LinkedIn/Twitter link click-through — **inconclusive** — LinkedIn volume high; no A/B on OG

### Demo CTR (secondary)
6. Screenshot thumbnails increase demo CTR vs text-only — **untested** (all cards already have images)
7. Spotlight placement drives clicks to spotlight trio — **confirmed (synthetic)** — featured placement = 15/29 demo clicks; `search-halal-food` leads
8. Personal "I built this because" copy outperforms Problem/Solution — **untested** (no A/B)

## Recent Noise (ignored this run)

- Twitter (4) + referral (2) — too small to act on
- Synthetic GSC CTR 11.3% looks optimistic for early branded search — treat as demo shape, not a KPI target

## Post-run critique

Synthetic mode unlocked the full priority stack (impressions → SEO → CTR) in one pass. Next demo cycle: mutate `synthetic-traffic.json` (e.g. cut LinkedIn 50%, spike Google) and re-run triage to show how STATE recommendations flip.

---
Updated by loop-click-triage skill · **synthetic demo**. See `LOOP.md` for cadence and gates.
