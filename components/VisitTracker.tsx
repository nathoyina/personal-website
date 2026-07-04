"use client";

import { useEffect } from "react";
import { trackImpression } from "@/lib/analytics";
import { parseTrafficSource } from "@/lib/source";

export function VisitTracker() {
  useEffect(() => {
    trackImpression(parseTrafficSource());
  }, []);

  return null;
}
