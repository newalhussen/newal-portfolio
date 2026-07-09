"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillCard } from "@/components/shared/skill-card";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          description="A comprehensive toolkit for building scalable, maintainable software solutions."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={index === skillCategories.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
