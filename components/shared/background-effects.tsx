export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[120px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute -right-1/4 top-1/3 h-[480px] w-[480px] rounded-full bg-blue-600/[0.05] blur-[140px] sm:h-[600px] sm:w-[600px]" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-indigo-500/[0.04] blur-[100px] sm:h-[400px] sm:w-[400px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.07)_0%,_transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.012] sm:opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
