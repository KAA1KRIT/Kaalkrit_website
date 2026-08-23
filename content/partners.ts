import type { CollaborationMode } from "@/lib/types";

/** Collaboration routes are intentionally factual and do not imply tiers or benefits. */
export const collaborationModes: CollaborationMode[] = [
  {
    id: "engineering",
    title: "Engineering collaboration",
    description:
      "Explore a focused engineering conversation around autonomous systems, robotics, embedded systems or software.",
    subject: "KAALKRIT — engineering collaboration",
  },
  {
    id: "hardware",
    title: "Hardware and electronics",
    description:
      "Discuss engineering needs around airframes, electronics, sensors, control systems and rapid prototyping.",
    subject: "KAALKRIT — hardware and electronics",
  },
  {
    id: "mentorship",
    title: "Engineering mentorship",
    description:
      "Share engineering perspective around flight control, embedded systems, manufacturing or related disciplines.",
    subject: "KAALKRIT — engineering mentorship",
  },
  {
    id: "research",
    title: "Research collaboration",
    description:
      "Explore shared research questions in autonomy, computer vision, embedded systems or robotics.",
    subject: "KAALKRIT — research collaboration",
  },
];

/** Intended application areas, not documented deployments. */
export const targetSectors = [
  "Agriculture",
  "Healthcare",
  "Infrastructure inspection",
  "Environmental monitoring",
  "Disaster response",
  "Logistics",
  "Manufacturing",
  "Smart cities",
];

/** Forward research directions, not a published roadmap. */
export const futureDirections = [
  "Swarm intelligence",
  "Computer-vision-driven autonomy",
  "Advanced embedded platforms",
  "Intelligent robotic manipulators",
  "Integrated autonomous ecosystems",
];

export const partnersContent = {
  status: "ready" as const,
  collaborationModes,
  futureDirections,
  targetSectors,
};
