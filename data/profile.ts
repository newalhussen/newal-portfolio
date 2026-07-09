import type { HeroAction, Highlight, Profile } from "@/types";

export const profile: Profile = {
  name: "Newal Hussen",
  title: "Software Engineer | Full Stack Developer",
  location: "Addis Ababa, Ethiopia",
  email: "newahussen@gmail.com",
  heroDescription:
    "I build scalable web and mobile applications using modern technologies, creating production-ready solutions with clean architecture and excellent user experiences.",
  aboutDescription:
    "I am a Software Engineer focused on building reliable digital products. My experience includes full-stack web development, cross-platform mobile applications, backend systems, REST API integration, database design, and scalable software architecture.",
};

export const heroTechnologies = [
  "Flutter",
  "Laravel",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "MySQL",
  "REST APIs",
] as const;

export const heroActions: HeroAction[] = [
  {
    label: "View Projects",
    href: "#projects",
    variant: "primary",
  },
  {
    label: "Download Resume",
    href: "/cv.pdf",
    variant: "secondary",
    download: true,
  },
  {
    label: "Contact Me",
    href: "#contact",
    variant: "outline",
  },
];

export const aboutHighlights: Highlight[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web applications with modern frameworks and clean architecture.",
    icon: "Layers",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with Flutter for iOS and Android.",
    icon: "Smartphone",
  },
  {
    title: "Backend Systems",
    description:
      "Robust server-side logic, authentication, and business workflows.",
    icon: "Server",
  },
  {
    title: "API Integration",
    description:
      "RESTful APIs designed for reliability, security, and scalability.",
    icon: "Plug",
  },
  {
    title: "Database Design",
    description:
      "Structured data models and optimized queries for production workloads.",
    icon: "Database",
  },
  {
    title: "Software Architecture",
    description:
      "Scalable system design with maintainable, testable codebases.",
    icon: "GitBranch",
  },
];
