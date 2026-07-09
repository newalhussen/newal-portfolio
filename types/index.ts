export interface NavItem {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  heroDescription: string;
  aboutDescription: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
  download?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
