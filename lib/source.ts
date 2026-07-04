export type SourceBucket =
  | "direct"
  | "linkedin"
  | "google"
  | "github"
  | "twitter"
  | "utm"
  | "referral";

export interface TrafficSource {
  bucket: SourceBucket;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

function hostnameFromReferrer(referrer: string): string {
  if (!referrer) return "direct";
  try {
    return new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function bucketFromHostname(hostname: string): SourceBucket {
  if (hostname === "direct") return "direct";
  if (hostname.includes("linkedin.com")) return "linkedin";
  if (hostname.includes("google.")) return "google";
  if (hostname.includes("github.com")) return "github";
  if (hostname.includes("twitter.com") || hostname.includes("x.com"))
    return "twitter";
  return "referral";
}

export function parseTrafficSource(): TrafficSource {
  if (typeof window === "undefined") {
    return { bucket: "direct", referrer: "direct" };
  }

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source") ?? undefined;
  const utmMedium = params.get("utm_medium") ?? undefined;
  const utmCampaign = params.get("utm_campaign") ?? undefined;
  const utmContent = params.get("utm_content") ?? undefined;

  const referrerHost = hostnameFromReferrer(document.referrer);

  if (utmSource) {
    return {
      bucket: "utm",
      referrer: referrerHost,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
    };
  }

  return {
    bucket: bucketFromHostname(referrerHost),
    referrer: referrerHost,
  };
}
