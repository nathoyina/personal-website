import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectThumbnailProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectThumbnail({
  project,
  priority = false,
  className = "",
}: ProjectThumbnailProps) {
  return (
    <div className={`relative overflow-hidden rounded-card bg-lavender ${className}`}>
      <Image
        src={project.imageUrl}
        alt={`Screenshot of ${project.title}`}
        width={1200}
        height={750}
        priority={priority}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
