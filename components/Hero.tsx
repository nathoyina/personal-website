"use client";

import { trackClick } from "@/lib/analytics";

export function Hero() {
  function handleScrollToProjects() {
    trackClick("scroll_to_projects", { placement: "hero" });
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
      <div className="flex items-start gap-5">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xl font-semibold text-teal-800"
          aria-hidden
        >
          N
        </div>
        <div>
          <p className="mb-3 text-sm text-stone-500">
            Product manager · builder
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-snug tracking-tight text-zinc-900 md:text-4xl md:leading-snug">
            Hi, I&apos;m Natalie — I build things I wish existed.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Mostly products with ML and LLMs: language tools, maps, math apps,
            and PM practice. All open source, all live.
          </p>
          <button
            onClick={handleScrollToProjects}
            className="mt-8 inline-flex items-center gap-1 rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800"
          >
            See what I&apos;ve built ↓
          </button>
        </div>
      </div>
    </section>
  );
}
