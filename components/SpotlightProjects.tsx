import { getSpotlightProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function SpotlightProjects() {
  const spotlight = getSpotlightProjects();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
      <Reveal>
        <div className="rounded-card bg-lavender px-6 py-8 shadow-soft sm:rounded-panel sm:px-10 sm:py-12 lg:rounded-sheet">
          <h2 className="section-heading text-foreground">
            Things I&apos;m{" "}
            <span className="font-accent text-[1.3em] font-normal leading-none">
              proud
            </span>{" "}
            of
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground">
            Side projects I built because I needed them — or someone close to me did.
          </p>
        </div>
      </Reveal>
      <div className="mt-8 flex flex-col gap-8">
        {spotlight.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard
              project={project}
              placement="featured"
              spotlight
              imagePriority={i === 0}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
