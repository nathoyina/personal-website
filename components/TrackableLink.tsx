"use client";

import type { ReactNode } from "react";
import type { Placement } from "@/data/projects";
import { buildDemoUrl, trackClick, type ClickEvent } from "@/lib/analytics";

interface TrackableLinkProps {
  href: string;
  event: ClickEvent;
  project?: string;
  placement: Placement;
  className?: string;
  children: ReactNode;
  isDemo?: boolean;
}

export function TrackableLink({
  href,
  event,
  project,
  placement,
  className,
  children,
  isDemo = false,
}: TrackableLinkProps) {
  const finalHref = isDemo && project ? buildDemoUrl(href, project) : href;

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackClick(event, { project, placement })}
    >
      {children}
    </a>
  );
}
