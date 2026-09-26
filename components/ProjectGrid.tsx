import { getGridProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectGrid() {
  const projects = getGridProjects();

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="rounded-card bg-sage px-4 py-8 shadow-soft sm:rounded-panel sm:px-8 sm:py-12 lg:rounded-sheet lg:px-10">
        <Reveal>
          <h2 className="section-heading mb-8 text-foreground">More side projects</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.slug} className="h-full">
              <ProjectCard project={project} placement="grid" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
