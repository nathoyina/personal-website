import { getGridProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const projects = getGridProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900">
        More side projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            placement="grid"
          />
        ))}
      </div>
    </section>
  );
}
