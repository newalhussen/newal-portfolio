import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Production applications and engineering projects built with modern technologies."
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
