import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "uas-nidar-2026",
    title: "Autonomous Unmanned Aerial System — NIDAR 2026",
    shortTitle: "Autonomous UAS",
    programme: "nidar-2026",
    programmeLabel: "NIDAR 2026",
    status: "completed",
    year: 2026,
    summary:
      "A fully integrated UAS developed for NIDAR 2026, bringing airframe design, embedded electronics, flight-control integration, mission planning, payload management, and autonomous flight into one system.",
    problem:
      "An end-to-end aerial engineering challenge spanning the aircraft, electronics, mission layer, payload, and flight behaviour.",
    significance:
      "Established a technical foundation for KAALKRIT’s future work in autonomous aerial systems.",
    capabilities: ["uas", "flight-control", "embedded", "mechanical", "pcb"],
    media: {
      src: "/images/projects/nidar-2026-field-testing.webp",
      alt: "KAALKRIT members field-testing an autonomous UAS in an open field.",
      width: 479,
      height: 378,
    },
  },
  {
    slug: "airmos",
    title: "AirMOUSE — NIDAR 2027",
    shortTitle: "AirMOUSE",
    programme: "nidar-2027",
    programmeLabel: "NIDAR 2027",
    status: "in-development",
    year: 2027,
    summary:
      "An aerial-systems project in development for NIDAR 2027, building on the UAS programme through advanced sensing, autonomy, and mission-oriented design.",
    problem:
      "Explore scalable drone systems through advanced sensing, autonomous capabilities, and mission-oriented design.",
    significance:
      "Extends the team’s research in intelligent aerial systems beyond the NIDAR 2026 UAS.",
    capabilities: ["uas", "drone-tech", "flight-control", "sensors", "ai-cv"],
  },
  {
    slug: "build-with-hardware",
    title: "Build With Hardware (BWH)",
    shortTitle: "BWH",
    status: "in-development",
    summary:
      "KAALKRIT’s flagship engineering platform in development, bringing structured learning, practical projects, documentation, collaborative workspaces, and AI-powered engineering assistance together.",
    problem:
      "Make hardware innovation more accessible through a connected environment for learning, building, documenting, and collaborating.",
    significance:
      "Intended for students, developers, researchers, startups, and makers working with hardware.",
    capabilities: ["software", "ai-cv", "research", "embedded"],
  },
  {
    slug: "robotic-arm",
    title: "Intelligent Robotic Arm",
    shortTitle: "Robotic Arm",
    status: "in-development",
    summary:
      "A robotic arm in development that combines mechanical integration, embedded electronics, servo control, and control algorithms for precision motion and automation.",
    problem:
      "Develop a system that coordinates mechanical structure, electronics, servo control, and control algorithms.",
    significance:
      "Supports future exploration of industrial automation, smart manufacturing, precision handling, research, and autonomous robotic operations.",
    capabilities: ["robotics", "mechanical", "embedded", "sensors"],
  },
  {
    slug: "robot-vacuum",
    title: "Autonomous Robot Vacuum Cleaner",
    shortTitle: "Robot Vacuum",
    status: "completed",
    summary:
      "An autonomous robot vacuum cleaner developed around navigation, obstacle detection, motion control, sensor integration, embedded systems, and automation.",
    problem:
      "Apply autonomous mobility and embedded control to floor-cleaning with minimal human intervention.",
    significance:
      "Demonstrates a practical everyday application of autonomous mobility, embedded systems, and robotics.",
    capabilities: ["robotics", "sensors", "embedded", "ai-cv"],
  },
];

const bySlug = new Map(projects.map((project) => [project.slug, project]));
export const publicProjects = projects;

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}

export const getPublicProject = getProject;

export const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-development": "In development",
};
