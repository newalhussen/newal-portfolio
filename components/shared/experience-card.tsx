"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import type { Experience } from "@/types";
import { ANIMATION_EASE } from "@/lib/constants";
import { GlassCard } from "@/components/shared/glass-card";
import { TechBadge } from "@/components/shared/tech-badge";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function ExperienceCard({
  experience,
  index,
  isLast,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: ANIMATION_EASE,
      }}
      className="relative flex gap-5 md:gap-7"
    >
      <div className="relative flex flex-col items-center pt-1">
        <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.08)] ring-4 ring-navy-950">
          <Briefcase className="size-4 text-cyan-400" aria-hidden />
        </div>
        {!isLast && (
          <div
            className="absolute top-10 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-cyan-500/35 via-cyan-500/15 to-transparent"
            aria-hidden
          />
        )}
      </div>

      <GlassCard className="mb-8 flex-1">
        <div className="mb-5 flex flex-col gap-3 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-1.5">
            <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {experience.company}
            </p>
            <h3 className="text-sm font-medium text-cyan-400/90 sm:text-base">
              {experience.role}
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="size-3.5 text-cyan-400/70" aria-hidden />
            <time>{experience.period}</time>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0 text-cyan-400/70" aria-hidden />
          <span>{experience.location}</span>
        </div>

        {experience.description && (
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
            {experience.description}
          </p>
        )}

        <ul className="mb-6 space-y-2.5">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-cyan-400/60"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} size="sm" />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
