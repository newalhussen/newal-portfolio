import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-10 max-w-2xl sm:mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
