import type { Project } from "@/types";

export const projects: Project[] = [
  

  {
    title: "Driving Licence Management System",
    description:
      "A digital platform connecting applicants, driving schools, and government workflows.",
    technologies: ["Flutter", "C#", ".NET", "SQL Server"],
    features: [
      "Applicant management",
      "Driving school management",
      "Training scheduling",
      "Application tracking",
    ],
    images: [
      "/projects/driving-license/dlms2.jpg",
      "/projects/driving-license/dlms1.jpg",
      "/projects/driving-license/dlms3.jpg",
    ],
  },

  {
    title: "Hospital Management System",
    category: "Healthcare Enterprise System",
    description:
      "A complete healthcare management platform designed to digitize hospital workflows and improve patient service delivery.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Flutter",
      "REST API",
      "Tailwind CSS",
    ],
    features: [
      "Patient management",
      "Doctor management",
      "Appointment scheduling",
      "Medical records",
      "Admin dashboard",
      "Role-based permissions",
      "Authentication",
    ],
    images: [
      "/projects/hospital/h1.jpg",
      "/projects/hospital/h2.jpg",
      "/projects/hospital/h3.jpg",
    ],
  },

    {
    title: "AI Driving Test Evaluation System",
    category: "Artificial Intelligence / Computer Vision",
    description:
      "An AI-powered driving evaluation system combining Unity simulation and computer vision to automatically analyze driving performance.",
    technologies: ["Python", "YOLO", "OpenCV", "Unity"],
    features: [
      "Vehicle detection",
      "Traffic violation detection",
      "Lane monitoring",
      "Traffic sign recognition",
      "Automatic scoring",
    ],
    images: [
      "/projects/driving-ai/dl1.jpg",
      "/projects/driving-ai/dl2.jpg",
      "/projects/driving-ai/dl3.jpg",
    ],
  },

  {
    title: "Property Marketplace Platform",
    description:
      "A full-stack marketplace for buying, selling, and renting properties and vehicles.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Property listings",
      "Search",
      "Filtering",
      "Image galleries",
      "Admin moderation",
    ],
    images: [
      "/projects/property/p4.jpg",
      "/projects/property/p3.jpg",
      "/projects/property/p5.jpg",
    ],
  },
  {
    title: "Hospital Appointment Mobile App",
description:
  "A Flutter-based mobile application that enables patients to book appointments, manage medical schedules, and connect with healthcare providers through a simple and intuitive interface.",
technologies: ["Flutter", "Firebase", "Firestore"],
features: [
  "User authentication",
  "Appointment booking",
  "Doctor directory",
  "Appointment history",
],
images: [
  "/projects/hospital_app/da2.jpg",
  "/projects/hospital_app/da3.jpg",
  "/projects/hospital_app/da1.jpg",
],
  },
];
