import { SITE, mailto } from "./site";

export const contactContent = {
  status: "ready" as const,
  email: SITE.email,
  partnershipHref: mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]"),
  recruitmentHref: mailto("[RECRUITMENT EMAIL SUBJECT PLACEHOLDER]"),
  note: "[CONTACT NOTE PLACEHOLDER]",
};
