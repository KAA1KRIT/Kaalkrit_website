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
      "For NIDAR 2026, Team KAALKRIT designed and developed a fully integrated Unmanned Aerial System, combining airframe design, embedded electronics, flight-control integration, mission planning, payload management, and autonomous flight.",
    problem:
      "A fully integrated Unmanned Aerial System requiring airframe design, embedded electronics, flight controller integration, mission planning, payload management, and autonomous flight.",
    significance: "A technical foundation for the team’s future aerial work.",
    capabilities: ["uas", "flight-control", "embedded", "mechanical", "pcb"],
    media: {
      src: "/images/approved/nidar-field-testing.jpg",
      alt: "Team KAALKRIT members field-testing the autonomous UAS in an open field.",
      width: 479,
      height: 378,
    },
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
      "AirMOS is Team KAALKRIT’s NIDAR 2027 aerial-systems project, building on the UAS programme through advanced sensing, autonomous capabilities, and mission-oriented design.",
    problem:
      "Develop scalable drone solutions through advanced sensing technologies, autonomous capabilities, and mission-oriented design.",
    significance:
      "It extends the team’s research in intelligent aerial systems beyond the NIDAR 2026 UAS.",
    capabilities: ["uas", "drone-tech", "flight-control", "sensors", "ai-cv"],
  },
  {
    slug: "build-with-hardware",
    title: "Build With Hardware (BWH)",
    shortTitle: "BWH",
    status: "in-development",
    summary:
      "Build With Hardware (BWH) is an engineering platform in development that brings structured learning, practical projects, technical documentation, collaborative workspaces, and AI-powered engineering assistance together.",
    problem:
      "Make hardware innovation more accessible through structured learning, practical hardware projects, technical documentation, collaborative workspaces, and AI-powered engineering assistance.",
    significance:
      "It is intended to make hardware innovation more accessible to students, developers, researchers, startups, and makers.",
    capabilities: ["software", "ai-cv", "research", "embedded"],
  },
  {
    slug: "robotic-arm",
    title: "Intelligent Robotic Arm",
    shortTitle: "Robotic Arm",
    status: "in-development",
    summary:
      "An intelligent robotic arm in development that combines mechanical engineering, electronics, servo-based control, and control algorithms for precision motion and automation.",
    problem:
      "Integrate mechanical engineering, electronics, servo-based control, and advanced control algorithms for precision motion control and intelligent automation.",
    significance:
      "The work supports the team’s exploration of industrial automation, precision handling, research, and autonomous robotic operations.",
    capabilities: ["robotics", "mechanical", "embedded", "sensors"],
  },
  {
    slug: "robot-vacuum",
    title: "Autonomous Robot Vacuum Cleaner",
    shortTitle: "Robot Vacuum",
    status: "completed",
    summary:
      "An autonomous robot vacuum cleaner that combines navigation, obstacle detection, motion control, sensors, and embedded electronics for floor-cleaning with minimal human intervention.",
    problem:
      "Perform efficient floor-cleaning operations with minimal human intervention through intelligent navigation, obstacle detection, motion control, and automation.",
    significance:
      "It demonstrates a practical everyday application of autonomous mobility and embedded robotics.",
    capabilities: ["robotics", "sensors", "embedded", "ai-cv"],
  },
];

const bySlug = new Map(projects.map((project) => [project.slug, project]));
export const publicProjects = projects;
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
