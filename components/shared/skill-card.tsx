import type { SkillCategory } from "@/types";
import { GlassCard } from "@/components/shared/glass-card";
import { TechBadge } from "@/components/shared/tech-badge";

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <GlassCard hover className="h-full">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <TechBadge key={skill} label={skill} size="sm" />
        ))}
      </div>
    </GlassCard>
  );
}
