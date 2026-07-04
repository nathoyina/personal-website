import { siteConfig } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    givenName: "Natalie",
    jobTitle: "Product Manager",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [
      "Product Management",
      "Machine Learning",
      "Large Language Models",
      "Education Technology",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
  };
}
