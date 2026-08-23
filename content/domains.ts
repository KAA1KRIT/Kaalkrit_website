import type { Domain, DomainGroup } from "@/lib/types";

/**
 * The eleven documented capability domains (F4), grouped.
 * The grouping is an editorial reading — it adds no claim to the source.
 */
export const domainGroups: DomainGroup[] = [
  {
    id: "air",
    label: "Air",
    note: "Airframes, flight, and everything that keeps them in it.",
  },
  {
    id: "machine",
    label: "Machine",
    note: "Structures that move, and the control that governs them.",
  },
  {
    id: "silicon",
    label: "Silicon & Software",
    note: "Boards, firmware, perception, and the systems around them.",
  },
  {
    id: "method",
    label: "Method",
    note: "How work becomes a product rather than a prototype.",
  },
];

export const domains: Domain[] = [
  { id: "uas", label: "Autonomous Unmanned Aerial Systems", group: "air" },
  { id: "drone-tech", label: "Intelligent Drone Technologies", group: "air" },
  {
    id: "flight-control",
    label: "Flight Control & Autonomous Navigation",
    group: "air",
  },

  { id: "robotics", label: "Robotics & Automation", group: "machine" },
  {
    id: "mechanical",
    label: "Mechanical Design & Rapid Prototyping",
    group: "machine",
  },
  {
    id: "sensors",
    label: "Sensor Integration & Control Systems",
    group: "machine",
  },

  { id: "embedded", label: "Embedded Systems Development", group: "silicon" },
  { id: "pcb", label: "PCB Design & Electronics", group: "silicon" },
  {
    id: "ai-cv",
    label: "Artificial Intelligence & Computer Vision",
    group: "silicon",
  },
  {
    id: "software",
    label: "Software & Full-Stack Development",
    group: "silicon",
  },

  { id: "research", label: "Research & Product Engineering", group: "method" },
];

export const domainsByGroup = domainGroups.map((group) => ({
  group,
  items: domains.filter((domain) => domain.group === group.id),
}));

const domainLabels = new Map(
  domains.map((domain) => [domain.id, domain.label]),
);

export function domainLabel(id: Domain["id"]): string {
  return domainLabels.get(id) ?? id;
}

/**
 * The nine documented lifecycle stages. This list is the evidence behind
 * the "full lifecycle, not prototypes" claim — it is never asserted alone.
 */
export const lifecycleStages: string[] = [
  "Research",
  "System architecture",
  "Design",
  "Manufacturing",
  "Electronics integration",
  "Software development",
  "Testing",
  "Validation",
  "Continuous improvement",
];
