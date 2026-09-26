import { TrackableLink } from "./TrackableLink";

const footerLink =
  "text-foreground underline decoration-peach decoration-2 underline-offset-4 hover:decoration-foreground";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 rounded-card bg-background px-6 py-8 shadow-soft sm:flex-row sm:items-center">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Natalie</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://www.linkedin.com/in/natalie-ho-yi-na"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            LinkedIn
          </a>
          <TrackableLink
            href="https://github.com/nathoyina"
            event="github_click"
            placement="hero"
            className={footerLink}
          >
            GitHub
          </TrackableLink>
          <span className="text-muted">Email — coming soon</span>
        </div>
      </div>
    </footer>
  );
}
