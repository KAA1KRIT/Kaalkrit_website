import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "uas-nidar-2026",
    title: "Autonomous Unmanned Aerial System (UAS) – NIDAR 2026",
    shortTitle: "Autonomous UAS",
    programme: "nidar-2026",
    programmeLabel: "NIDAR 2026",
    status: "completed",
    year: 2026,
    summary:
      "For NIDAR 2026, Team KAALKRIT successfully designed and developed a fully integrated Unmanned Aerial System (UAS), demonstrating expertise in airframe design, embedded electronics, flight controller integration, mission planning, payload management, and autonomous flight. This project laid a strong technical foundation for our future advancements in autonomous aerial technologies.",
    problem:
      "A fully integrated Unmanned Aerial System requiring airframe design, embedded electronics, flight controller integration, mission planning, payload management, and autonomous flight.",
    significance:
      "This project laid a strong technical foundation for future advancements in autonomous aerial technologies.",
    capabilities: ["uas", "flight-control", "embedded", "mechanical", "pcb"],
    media: {
      src: "/images/approved/nidar-field-testing.jpg",
      alt: "Team KAALKRIT members field-testing the autonomous UAS in an open field.",
      width: 479,
      height: 378,
    },
    contentStatus: "ready",
  },
  {
    slug: "airmos",
    title: "AirMOS – NIDAR 2027",
    shortTitle: "AirMOS",
    programme: "nidar-2027",
    programmeLabel: "NIDAR 2027",
    status: "in-development",
    year: 2027,
    summary:
      "Building upon our experience from UAS development, Team KAALKRIT is currently developing AirMOS for NIDAR 2027. AirMOS represents the next evolution of our research in intelligent aerial systems by integrating advanced sensing technologies, autonomous capabilities, and mission-oriented design to develop scalable drone solutions capable of addressing real-world challenges.",
    problem:
      "Develop scalable drone solutions through advanced sensing technologies, autonomous capabilities, and mission-oriented design.",
    significance:
      "AirMOS represents the next evolution of our research in intelligent aerial systems.",
    capabilities: ["uas", "drone-tech", "flight-control", "sensors", "ai-cv"],
    contentStatus: "ready",
  },
  {
    slug: "build-with-hardware",
    title: "Build With Hardware (BWH)",
    shortTitle: "BWH",
    status: "in-development",
    summary:
      "Team KAALKRIT's flagship engineering platform designed to make hardware innovation more accessible. The platform combines structured learning, practical hardware projects, technical documentation, collaborative workspaces, and AI-powered engineering assistance into a unified ecosystem, enabling students, developers, researchers, startups, and makers to learn, build, collaborate, and transform ideas into real-world hardware solutions.",
    problem:
      "Make hardware innovation more accessible through structured learning, practical hardware projects, technical documentation, collaborative workspaces, and AI-powered engineering assistance.",
    significance:
      "The unified ecosystem enables students, developers, researchers, startups, and makers to transform ideas into real-world hardware solutions.",
    capabilities: ["software", "ai-cv", "research", "embedded"],
    contentStatus: "ready",
  },
  {
    slug: "robotic-arm",
    title: "Intelligent Robotic Arm",
    shortTitle: "Robotic Arm",
    status: "in-development",
    summary:
      "Demonstrates Team KAALKRIT's expertise in robotics, embedded systems, precision motion control, and intelligent automation. By integrating mechanical engineering, electronics, servo-based control, and advanced control algorithms, the system is being developed for future applications in industrial automation, smart manufacturing, precision handling, research, and autonomous robotic operations.",
    problem:
      "Integrate mechanical engineering, electronics, servo-based control, and advanced control algorithms for precision motion control and intelligent automation.",
    significance:
      "The system is being developed for industrial automation, smart manufacturing, precision handling, research, and autonomous robotic operations.",
    capabilities: ["robotics", "mechanical", "embedded", "sensors"],
    contentStatus: "ready",
  },
  {
    slug: "robot-vacuum",
    title: "Autonomous Robot Vacuum Cleaner",
    shortTitle: "Robot Vacuum",
    status: "completed",
    summary:
      "Showcases capabilities in intelligent robotics, embedded systems, sensor integration, and autonomous navigation. Designed to perform efficient floor-cleaning operations with minimal human intervention, the system combines intelligent navigation, obstacle detection, motion control, and automation to demonstrate practical applications of robotics in everyday life. This project reflects our commitment to building smart, user-centric robotic solutions while strengthening our expertise in autonomous mobility, embedded electronics, and real-world product development.",
    problem:
      "Perform efficient floor-cleaning operations with minimal human intervention through intelligent navigation, obstacle detection, motion control, and automation.",
    significance:
      "This project demonstrates practical applications of robotics in everyday life while strengthening expertise in autonomous mobility, embedded electronics, and real-world product development.",
    capabilities: ["robotics", "sensors", "embedded", "ai-cv"],
    contentStatus: "ready",
  },
];

const bySlug = new Map(projects.map((project) => [project.slug, project]));
export const publicProjects = projects.filter(
  (project) => project.contentStatus === "ready",
);
const publicBySlug = new Map(
  publicProjects.map((project) => [project.slug, project]),
);

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}
export function getPublicProject(slug: string): Project | undefined {
  return publicBySlug.get(slug);
}

export const programmeProjects = publicProjects.filter(
  (project) => project.programme !== undefined,
);
export const roboticsProjects = publicProjects.filter((project) =>
  ["robotic-arm", "robot-vacuum"].includes(project.slug),
);
export const platformProject = publicProjects.find(
  (project) => project.slug === "build-with-hardware",
);

export const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-development": "In development",
};
