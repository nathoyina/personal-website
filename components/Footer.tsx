import { TrackableLink } from "./TrackableLink";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} Natalie
        </p>
        <div className="flex items-center gap-6 text-sm text-stone-600">
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
          <span className="text-stone-400">Email — coming soon</span>
        </div>
      </div>
    </footer>
  );
}
