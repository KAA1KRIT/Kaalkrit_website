import type { Domain, DomainGroup } from "@/lib/types";

export const domainGroups: DomainGroup[] = [
  {
    id: "air",
    label: "[DOMAIN GROUP PLACEHOLDER 1]",
    note: "[DOMAIN GROUP NOTE PLACEHOLDER 1]",
  },
  {
    id: "machine",
    label: "[DOMAIN GROUP PLACEHOLDER 2]",
    note: "[DOMAIN GROUP NOTE PLACEHOLDER 2]",
  },
  {
    id: "silicon",
    label: "[DOMAIN GROUP PLACEHOLDER 3]",
    note: "[DOMAIN GROUP NOTE PLACEHOLDER 3]",
  },
  {
    id: "method",
    label: "[DOMAIN GROUP PLACEHOLDER 4]",
    note: "[DOMAIN GROUP NOTE PLACEHOLDER 4]",
  },
];

export const domains: Domain[] = [
  { id: "uas", label: "[CAPABILITY PLACEHOLDER 1]", group: "air" },
  { id: "drone-tech", label: "[CAPABILITY PLACEHOLDER 2]", group: "air" },
  { id: "flight-control", label: "[CAPABILITY PLACEHOLDER 3]", group: "air" },
  { id: "robotics", label: "[CAPABILITY PLACEHOLDER 4]", group: "machine" },
  { id: "mechanical", label: "[CAPABILITY PLACEHOLDER 5]", group: "machine" },
  { id: "sensors", label: "[CAPABILITY PLACEHOLDER 6]", group: "machine" },
  { id: "embedded", label: "[CAPABILITY PLACEHOLDER 7]", group: "silicon" },
  { id: "pcb", label: "[CAPABILITY PLACEHOLDER 8]", group: "silicon" },
  { id: "ai-cv", label: "[CAPABILITY PLACEHOLDER 9]", group: "silicon" },
  { id: "software", label: "[CAPABILITY PLACEHOLDER 10]", group: "silicon" },
  { id: "research", label: "[CAPABILITY PLACEHOLDER 11]", group: "method" },
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

export const lifecycleStages = Array.from(
  { length: 9 },
  (_, index) => `[LIFECYCLE STAGE PLACEHOLDER ${index + 1}]`,
);
