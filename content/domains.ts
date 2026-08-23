import type { Domain, DomainGroup } from "@/lib/types";

export const domainGroups: DomainGroup[] = [
  {
    id: "air",
    label: "Aerial Systems",
    note: "Intelligent aerial systems, drone technologies, and autonomous navigation.",
  },
  {
    id: "machine",
    label: "Robotics & Hardware",
    note: "Robotics, mechanical design, sensor integration, and control systems.",
  },
  {
    id: "silicon",
    label: "Embedded & Software",
    note: "Embedded systems, electronics, artificial intelligence, and software.",
  },
  {
    id: "method",
    label: "Research & Product Engineering",
    note: "Research, product engineering, and complete system development.",
  },
];

export const domains: Domain[] = [
  {
    id: "uas",
    label: "Autonomous Unmanned Aerial Systems (UAS)",
    group: "air",
  },
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

export const lifecycleStages = [
  "Identifying real-world challenges",
  "Research",
  "Design",
  "Prototyping",
  "Manufacturing",
  "Programming",
  "Testing",
  "Deploying complete systems",
  "Transforming ideas into intelligent engineering solutions",
];
