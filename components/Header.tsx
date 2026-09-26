import { TrackableLink } from "./TrackableLink";

const navLink =
  "rounded-full px-2.5 py-1 text-foreground transition-colors hover:bg-peach";

export function Header() {
  return (
    <header className="sticky top-3 z-30 mx-auto w-full max-w-6xl px-4 sm:top-5 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 rounded-card bg-background px-4 py-3 shadow-soft sm:px-6">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          Natalie
        </a>
        <nav className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm sm:gap-x-2">
          <a href="#projects" className={navLink}>
            Projects
          </a>
          <a href="#about" className={navLink}>
            About
          </a>
          <a
            href="https://www.linkedin.com/in/natalie-ho-yi-na"
            target="_blank"
            rel="noopener noreferrer"
            className={navLink}
          >
            LinkedIn
          </a>
          <TrackableLink
            href="https://github.com/nathoyina"
            event="github_click"
            placement="hero"
            className={navLink}
          >
            GitHub
          </TrackableLink>
        </nav>
      </div>
    </header>
  );
}
