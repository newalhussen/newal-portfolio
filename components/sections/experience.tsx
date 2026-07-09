import { experiences } from "@/data/experience";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ExperienceCard } from "@/components/shared/experience-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional journey"
          description="A track record of delivering production-ready software across web, mobile, and backend systems."
        />

        <div className="mx-auto max-w-3xl" role="list">
          {experiences.map((experience, index) => (
            <div key={`${experience.company}-${experience.period}`} role="listitem">
              <ExperienceCard
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
