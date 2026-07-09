export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://newalhussen.dev";

export const ANIMATION_EASE = [0.25, 0.4, 0.25, 1] as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  contact: "contact",
} as const;
