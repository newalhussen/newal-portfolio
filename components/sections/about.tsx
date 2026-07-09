"use client";

import {
  Database,
  GitBranch,
  Layers,
  Plug,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { aboutHighlights, profile } from "@/data/profile";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Smartphone,
  Server,
  Plug,
  Database,
  GitBranch,
};

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Building reliable digital products"
          description={profile.aboutDescription}
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {aboutHighlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <GlassCard hover className="h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 ring-1 ring-cyan-500/20">
                    {Icon && <Icon className="size-5 text-cyan-400" />}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
