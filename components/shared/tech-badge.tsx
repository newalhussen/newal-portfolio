import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
  size?: "sm" | "md";
}

export function TechBadge({ label, className, size = "md" }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 font-medium text-cyan-300/90",
        "transition-colors duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/15",
        size === "sm" && "px-2.5 py-1 text-xs",
        size === "md" && "px-3.5 py-1.5 text-sm",
        className
      )}
    >
      {label}
    </span>
  );
}
