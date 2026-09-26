import type { Metadata } from "next";
import { Outfit, Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MotionRoot } from "@/components/MotionRoot";
import { VisitTracker } from "@/components/VisitTracker";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reenie",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName, url: siteConfig.linkedin }],
  creator: siteConfig.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_SG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${reenieBeanie.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <BackgroundBlobs />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <VisitTracker />
          <MotionRoot />
          {children}
        </div>
        <GrainOverlay />
        <Analytics />
      </body>
    </html>
  );
}
