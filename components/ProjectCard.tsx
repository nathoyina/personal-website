import type { Project, Placement } from "@/data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { TrackableLink } from "./TrackableLink";

interface ProjectCardProps {
  project: Project;
  placement: Placement;
  spotlight?: boolean;
  imagePriority?: boolean;
}

export function ProjectCard({
  project,
  placement,
  spotlight = false,
  imagePriority = false,
}: ProjectCardProps) {
  if (spotlight) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg">
        <ProjectThumbnail
          project={project}
          priority={imagePriority}
          className="aspect-[16/9] w-full border-b border-stone-100"
        />
        <div className="p-6 md:p-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-stone-500">{project.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            {project.personalNote}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.demoUrl && (
              <TrackableLink
                href={project.demoUrl}
                event="demo_click"
                project={project.slug}
                placement={placement}
                isDemo
                className="inline-flex items-center rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800"
              >
                {project.ctaText}
              </TrackableLink>
            )}
            <TrackableLink
              href={project.githubUrl}
              event="github_click"
              project={project.slug}
              placement={placement}
              className="text-sm font-medium text-stone-500 transition-colors hover:text-zinc-900"
            >
              View code →
            </TrackableLink>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-md">
      <ProjectThumbnail
        project={project}
        className="aspect-[16/10] w-full border-b border-stone-100"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {project.personalNote}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <TrackableLink
              href={project.demoUrl}
              event="demo_click"
              project={project.slug}
              placement={placement}
              isDemo
              className="inline-flex items-center rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800"
            >
              {project.ctaText}
            </TrackableLink>
          )}
          <TrackableLink
            href={project.githubUrl}
            event="github_click"
            project={project.slug}
            placement={placement}
            className="text-sm font-medium text-stone-500 transition-colors hover:text-zinc-900"
          >
            code →
          </TrackableLink>
        </div>
      </div>
    </article>
  );
}
