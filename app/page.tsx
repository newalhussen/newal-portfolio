import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.06] py-8">
        <div className="section-container flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs sm:text-sm">{profile.title}</p>
        </div>
      </footer>
    </>
  );
}
