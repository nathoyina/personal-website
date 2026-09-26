"use client";

import { useEffect } from "react";

export function MotionRoot() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      for (const node of nodes) node.classList.add("is-visible");
      return;
    }

    const pending: HTMLElement[] = [];
    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) node.classList.add("is-visible");
      else pending.push(node);
    }

    document.documentElement.classList.add("js-ready");

    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    for (const node of pending) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
