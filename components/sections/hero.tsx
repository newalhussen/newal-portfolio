"use client";

import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import {
  heroActions,
  heroTechnologies,
  profile,
} from "@/data/profile";
import { ANIMATION_EASE } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/shared/tech-badge";
import { Button } from "@/components/ui/button";

const actionIcons = {
  "View Projects": ArrowDown,
  "Download Resume": Download,
  "Contact Me": Mail,
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative flex min-h-[calc(100dvh-4rem)] items-center pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="section-container w-full py-16 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ANIMATION_EASE }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-cyan-400/80" aria-hidden />
            <span>{profile.location}</span>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-sm">
            {profile.name}
          </p>

          <h1
            id="hero-heading"
            className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight"
          >
            <span className="gradient-text block">
              Software Engineer
            </span>
            <span className="mt-1 block text-[0.72em] font-semibold text-foreground/90 sm:mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            {heroActions.map((action) => {
              const Icon = actionIcons[action.label as keyof typeof actionIcons];
              return (
                <Button
                  key={action.label}
                  size="lg"
                  variant={
                    action.variant === "primary"
                      ? "default"
                      : action.variant === "outline"
                        ? "outline"
                        : "secondary"
                  }
                  className={cn(
                    "h-11 w-full px-6 text-sm sm:w-auto",
                    action.variant === "primary" &&
                      "bg-cyan-500 text-navy-950 hover:bg-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                    action.variant === "secondary" &&
                      "border border-white/10 bg-white/5 text-foreground hover:bg-white/10",
                    action.variant === "outline" &&
                      "border-white/15 bg-transparent text-foreground hover:bg-white/5"
                  )}
                  onClick={() => {
                    if (action.download) {
                      window.open(action.href, "_blank");
                      return;
                    }
                    scrollToSection(action.href);
                  }}
                >
                  {Icon && <Icon className="size-4" aria-hidden />}
                  {action.label}
                </Button>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-14">
            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {heroTechnologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.04, duration: 0.35 }}
                >
                  <TechBadge label={tech} size="sm" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
