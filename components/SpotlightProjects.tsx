import { getSpotlightProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SpotlightProjects() {
  const spotlight = getSpotlightProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900">
        Things I&apos;m proud of
      </h2>
      <p className="mb-10 max-w-xl text-zinc-600">
        Side projects I built because I needed them — or someone close to me did.
      </p>
      <div className="flex flex-col gap-10">
        {spotlight.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            placement="featured"
            spotlight
            imagePriority={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
