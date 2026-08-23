import type { LegalPageContent } from "@/lib/types";

export const privacyContent: LegalPageContent = {
  title: "Privacy",
  description: "How this informational website handles data.",
  sections: [
    {
      heading: "No public form collection",
      body: "This website does not provide a public account, contact form, checkout, or newsletter sign-up. It is designed to share information about Team KAALKRIT and its work.",
    },
    {
      heading: "Analytics",
      body: "Privacy-conscious Vercel Web Analytics may be enabled for the deployed website. When enabled, it is used to understand aggregate website usage.",
    },
    {
      heading: "External links",
      body: "If the website links to another service in the future, that service’s own privacy information will apply once you leave this site.",
    },
  ],
};

export const termsContent: LegalPageContent = {
  title: "Terms of use",
  description: "Conditions for using this informational website.",
  sections: [
    {
      heading: "Informational use",
      body: "The website is provided to describe Team KAALKRIT, its engineering work, and its direction. Project information may change as the team continues its work.",
    },
    {
      heading: "Content",
      body: "Text, visual identity, and approved media on this site should not be reproduced or represented as official KAALKRIT material without permission.",
    },
    {
      heading: "No technical reliance",
      body: "Project summaries are high-level descriptions, not operating instructions, performance specifications, or technical guarantees.",
    },
  ],
};

export const accessibilityContent: LegalPageContent = {
  title: "Accessibility",
  description: "Our approach to making this website usable.",
  sections: [
    {
      heading: "Designed for access",
      body: "The website uses semantic structure, keyboard-accessible navigation, visible focus states, meaningful image descriptions, and responsive layouts.",
    },
    {
      heading: "Motion",
      body: "Motion is reduced for visitors who enable a reduced-motion preference in their device or browser settings.",
    },
    {
      heading: "Ongoing review",
      body: "Accessibility is part of the website’s ongoing engineering practice. As content and features evolve, the team will continue to review usability and readability.",
    },
  ],
};
