import type { Milestone } from "@/lib/types";

/**
 * Year-granular only. The verified source supports no months, so none are
 * invented. Ordering within a year follows the documented narrative.
 */
export const milestones: Milestone[] = [
  {
    id: "founded",
    year: 2024,
    yearLabel: "2024",
    kind: "founding",
    title: "KAALKRIT is established",
    description:
      "Founded at Sir M. Visvesvaraya Institute of Technology, Bengaluru, as the institute’s official drone and robotics innovation team — multidisciplinary from the start, drawing students across engineering domains.",
  },
  {
    id: "uas-built",
    year: 2026,
    yearLabel: "NIDAR 2026",
    kind: "project",
    projectSlug: "uas-nidar-2026",
    title: "A complete unmanned aerial system",
    description:
      "Airframe design, embedded electronics, flight-controller integration, mission planning, payload management and autonomous flight brought together in an integrated UAS.",
  },
  {
    id: "national-competition",
    year: 2026,
    yearLabel: "NIDAR 2026",
    kind: "competition",
    title: "Sir MVIT at national level",
    description:
      "Represented the institute at national-level drone innovation competitions with a self-built autonomous aerial platform.",
  },
  {
    id: "business-evaluation",
    year: 2026,
    yearLabel: "NIDAR 2026",
    kind: "achievement",
    title: "11th place, Business Evaluation",
    description:
      "Placed 11th in Business Evaluation at a national-level competition.",
  },
  {
    id: "robotics-track",
    year: 2026,
    yearLabel: "Robotics track",
    kind: "project",
    projectSlug: "robot-vacuum",
    title: "Autonomy moves to the ground",
    description:
      "An autonomous robot vacuum cleaner developed, and an intelligent robotic arm taken into development — navigation, obstacle detection and precision motion control off the airframe.",
  },
  {
    id: "bwh",
    year: 2026,
    yearLabel: "Platform",
    kind: "project",
    projectSlug: "build-with-hardware",
    title: "Build With Hardware",
    description:
      "The team’s flagship platform, in development: structured learning, practical hardware projects, documentation, collaborative workspaces and AI-powered engineering assistance.",
  },
  {
    id: "airmos",
    year: 2027,
    yearLabel: "NIDAR 2027",
    kind: "project",
    projectSlug: "airmos",
    title: "AirMOS in development",
    description:
      "The second cycle of the aerial programme — advanced sensing, autonomous capability and mission-oriented design, building directly on the 2026 platform.",
  },
  {
    id: "forward",
    year: null,
    yearLabel: "Forward",
    kind: "forward",
    title: "Where the programme is headed",
    description:
      "Swarm intelligence, computer-vision-driven autonomy, advanced embedded platforms, intelligent robotic manipulators and integrated autonomous ecosystems. Stated as direction, not as schedule.",
  },
];

export const journeyContent = {
  status: "ready" as const,
  milestones,
};
