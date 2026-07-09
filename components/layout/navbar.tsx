"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    scrollToSection(href);
  };

  const navLinkClass =
    "rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/[0.06] bg-navy-950/85 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="section-container flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="rounded-lg text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          aria-label={`${profile.name} — go to home`}
        >
          {profile.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={navLinkClass}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => handleNavClick("#contact")}
          className="hidden rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 ring-1 ring-cyan-500/20 transition-all hover:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 md:inline-flex"
        >
          Get in Touch
        </button>

        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 md:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
        >
          {isMobileOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-white/[0.06] bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={cn(navLinkClass, "w-full text-left py-2.5")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full rounded-lg bg-cyan-500/10 px-3 py-2.5 text-sm font-medium text-cyan-400 ring-1 ring-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
