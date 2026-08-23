import { SITE, mailto } from "./site";

export const contactContent = {
  status: "ready" as const,
  email: SITE.email,
  partnershipHref: mailto("Partnership with Team KAALKRIT"),
  recruitmentHref: mailto("Joining Team KAALKRIT"),
  note: "For partnership, research, engineering collaboration, or joining enquiries, contact Team KAALKRIT by email.",
};
