import type { Milestone } from "@/lib/types";

export const milestones: Milestone[] = [
  {
    id: "origin",
    year: 2024,
    yearLabel: "Established",
    kind: "founding",
    title: "Student engineering with a deep-tech direction.",
    description:
      "KAALKRIT brings research, experimentation, and hands-on learning together around drones, robotics, embedded systems, AI, computer vision, and software. The team aims to contribute to India’s deep-tech ecosystem while developing engineering talent through practical work.",
  },
  {
    id: "direction",
    year: null,
    yearLabel: "Future Direction",
    kind: "forward",
    title: "A direction for intelligent autonomous systems.",
    description:
      "The team’s future direction includes autonomous drones, AI-powered robotics, swarm intelligence, computer-vision-driven autonomy, advanced embedded platforms, robotic manipulators, and integrated autonomous ecosystems. BWH is intended to grow as a collaborative platform for learning, building, and sharing hardware knowledge.",
  },
  {
    id: "commitment",
    year: null,
    yearLabel: "Commitment",
    kind: "forward",
    title: "Curiosity, integrity, and continuous engineering growth.",
    description:
      "KAALKRIT approaches every project through curiosity, innovation, integrity, collaboration, continuous learning, and experimentation. The aim is steady engineering growth and meaningful indigenous technology development.",
  },
];

export const journeyContent = { milestones };
