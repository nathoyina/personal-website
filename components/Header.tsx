import { TrackableLink } from "./TrackableLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fafaf9]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight text-zinc-900">
          Natalie
        </a>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <a href="#projects" className="transition-colors hover:text-zinc-900">
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-zinc-900">
            About
          </a>
          <a
            href="https://www.linkedin.com/in/natalie-ho-yi-na"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <TrackableLink
            href="https://github.com/nathoyina"
            event="github_click"
            placement="hero"
            className="transition-colors hover:text-zinc-900"
          >
            GitHub
          </TrackableLink>
        </nav>
      </div>
    </header>
  );
}
