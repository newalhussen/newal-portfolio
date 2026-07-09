"use client";

import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/types";
import { ANIMATION_EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/shared/glass-card";
import { ProjectImageGallery } from "@/components/shared/project-image-gallery";
import { TechBadge } from "@/components/shared/tech-badge";
import { buttonVariants } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: ANIMATION_EASE,
      }}
    >
      <GlassCard className="overflow-hidden p-0">
        <div className="flex flex-col gap-6 p-5 sm:p-6 lg:p-8">
          <header className="space-y-2">
            {project.category && (
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-400/80">
                {project.category}
              </p>
            )}
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.title}
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              {project.description}
            </p>
          </header>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_min(100%,340px)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="order-2 space-y-5 lg:order-1">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Features
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
                    >
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-cyan-400/70"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} size="sm" />
                  ))}
                </div>
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-wrap gap-3 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "h-9 border-white/15 bg-transparent px-4 hover:border-cyan-500/30 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                      )}
                    >
                      <Code className="size-4" aria-hidden />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "h-9 bg-cyan-500 px-4 text-navy-950 hover:bg-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                      )}
                    >
                      <ExternalLink className="size-4" aria-hidden />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="order-1 lg:order-2 lg:justify-self-end lg:w-full">
              <ProjectImageGallery
                images={project.images}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
