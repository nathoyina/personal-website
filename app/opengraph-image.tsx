import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fafaf9",
          color: "#18181b",
        }}
      >
        <p
          style={{
            display: "flex",
            fontSize: 28,
            color: "#0f766e",
            margin: "0 0 24px 0",
          }}
        >
          Product manager · builder
        </p>
        <p
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.2,
            maxWidth: 900,
            margin: 0,
          }}
        >
          {siteConfig.name} — building AI-powered products
        </p>
        <p
          style={{
            display: "flex",
            fontSize: 24,
            color: "#52525b",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Language tools, maps, maths apps & PM practice — all live, all open
          source.
        </p>
      </div>
    ),
    { ...size }
  );
}
