import { track } from "@vercel/analytics";
import type { Placement } from "@/data/projects";
import type { TrafficSource } from "@/lib/source";

export type ClickEvent = "demo_click" | "github_click" | "scroll_to_projects";

const IMPRESSION_KEY = "portfolio_impression_tracked";

export function trackClick(
  event: ClickEvent,
  data: { project?: string; placement: Placement }
): void {
  track(event, data);
}

export function trackImpression(source: TrafficSource): void {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(IMPRESSION_KEY)) return;

  track("page_impression", {
    source: source.bucket,
    referrer: source.referrer,
    utm_source: source.utmSource ?? "",
    utm_medium: source.utmMedium ?? "",
    utm_campaign: source.utmCampaign ?? "",
    landing_path: window.location.pathname,
  });

  sessionStorage.setItem(IMPRESSION_KEY, "1");
}

export function buildDemoUrl(baseUrl: string, slug: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", "portfolio");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_campaign", slug);
  return url.toString();
}
