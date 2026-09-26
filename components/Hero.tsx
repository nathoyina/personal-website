"use client";

import { trackClick } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Hero() {
  function handleScrollToProjects() {
    trackClick("scroll_to_projects", { placement: "hero" });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("projects")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 md:pb-16 md:pt-20">
      <Reveal>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sage font-accent text-4xl text-foreground shadow-soft"
            aria-hidden
          >
            N
          </div>
          <div>
            <p className="mb-4 text-sm text-muted">
              Product manager ·{" "}
              <span className="font-accent text-[1.85rem] leading-none text-foreground">
                builder
              </span>
            </p>
            <h1 className="display-heading max-w-4xl text-foreground">
              Hi, I&apos;m Natalie — I build things I{" "}
              <span className="inline-block whitespace-nowrap">
                <span className="relative inline-block font-accent text-[1.2em] font-normal leading-none">
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.06em] bottom-[0.12em] -z-10 h-[0.38em] rounded-full bg-peach"
                  />
                  wish existed
                </span>
                .
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
              Mostly products with ML and LLMs: language tools, maps, math apps,
              and PM practice. All open source, all live.
            </p>
            <button
              onClick={handleScrollToProjects}
              className="mt-8 inline-flex items-center gap-1 rounded-full bg-peach px-6 py-3 text-base font-medium text-foreground shadow-soft transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              See what I&apos;ve built ↓
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
