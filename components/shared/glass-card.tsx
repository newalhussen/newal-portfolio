import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl",
        "shadow-[0_4px_24px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        hover &&
          "transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.045] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}
