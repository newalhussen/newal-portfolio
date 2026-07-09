import { Mail, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="section-padding pb-24 sm:pb-28">
      <div className="section-container">
        <SectionHeading
  label="Contact"
  title="Let's connect"
  description="Interested in building impactful software together? Feel free to reach out about software engineering opportunities, collaborations, or exciting projects."
/>

        <GlassCard className="max-w-lg">
          <address className="flex flex-col gap-4 not-italic">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-lg text-muted-foreground transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
            >
              <Mail className="size-5 shrink-0 text-cyan-400/80" aria-hidden />
              <span className="break-all text-foreground group-hover:text-cyan-400">
                {profile.email}
              </span>
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground sm:text-base">
              <MapPin className="size-5 shrink-0 text-cyan-400/80" aria-hidden />
              <span>{profile.location}</span>
            </div>
          </address>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
