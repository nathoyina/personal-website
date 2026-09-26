import type { Project, Placement } from "@/data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { TrackableLink } from "./TrackableLink";

interface ProjectCardProps {
  project: Project;
  placement: Placement;
  spotlight?: boolean;
  imagePriority?: boolean;
}

const ctaClass =
  "inline-flex items-center rounded-full bg-peach px-5 py-2.5 text-sm font-medium text-foreground shadow-soft transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const codeLinkClass =
  "text-sm font-medium text-foreground underline decoration-peach decoration-2 underline-offset-4 hover:decoration-foreground";

export function ProjectCard({
  project,
  placement,
  spotlight = false,
  imagePriority = false,
}: ProjectCardProps) {
  if (spotlight) {
    return (
      <article className="overflow-hidden rounded-card bg-background shadow-soft sm:rounded-panel">
        <div className="p-3 sm:p-4">
          <ProjectThumbnail
            project={project}
            priority={imagePriority}
            className="aspect-[16/9] w-full"
          />
        </div>
        <div className="px-6 pb-8 md:px-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="card-heading text-5xl text-foreground md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{project.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
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
                className={ctaClass}
              >
                {project.ctaText}
              </TrackableLink>
            )}
            <TrackableLink
              href={project.githubUrl}
              event="github_click"
              project={project.slug}
              placement={placement}
              className={codeLinkClass}
            >
              View code →
            </TrackableLink>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-background shadow-soft">
      <div className="p-3">
        <ProjectThumbnail project={project} className="aspect-[16/10] w-full" />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5">
        <h3 className="card-heading text-4xl text-foreground md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
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
              className={ctaClass}
            >
              {project.ctaText}
            </TrackableLink>
          )}
          <TrackableLink
            href={project.githubUrl}
            event="github_click"
            project={project.slug}
            placement={placement}
            className={codeLinkClass}
          >
            code →
          </TrackableLink>
        </div>
      </div>
    </article>
  );
}
