"use client";

import { motion, type Variants } from "framer-motion";

import { ANIMATION_EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(id && "section-anchor", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: ANIMATION_EASE }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
