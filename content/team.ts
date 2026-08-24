import type { MediaAsset, TeamMember, TeamMemberWithIdCard } from "@/lib/types";

export const teamMembers = [
  {
    name: "Rajeev Tiwari",
    role: "Technical Lead",
    area: "Development & Engineering",
  },
  { name: "Ankur Pathak", role: "Business, Marketing & Outreach Lead" },
  { name: "Shantanu Pawade", role: "Design Support" },
  { name: "Manas Yadu", role: "Technical Team" },
  { name: "Raunit Singh", role: "Technical Team" },
  { name: "Shubham Kumar", role: "Sponsorship & Social Media" },
  { name: "Aditi Kiran", role: "Content Planning & Management" },
  { name: "Hardhik Bhatia", role: "Video Production & Editing" },
  { name: "Suraj Verma", role: "Design & Creatives" },
  { name: "Kaavya Sharma", role: "Design & Creatives" },
] as const satisfies readonly TeamMember[];

type TeamMemberName = (typeof teamMembers)[number]["name"];

/**
 * Explicit asset mapping prevents a roster re-order from ever assigning the
 * wrong physical ID card to a person. Source cards live in image_content;
 * these WebP derivatives are the approved public presentation assets.
 */
const idCardAssets: Record<TeamMemberName, MediaAsset> = {
  "Rajeev Tiwari": {
    src: "/images/team/id-cards/Rajeev_tiwari.webp",
    alt: "KAALKRIT ID card for Rajeev Tiwari, Technical Lead.",
    width: 1024,
    height: 1536,
  },
  "Ankur Pathak": {
    src: "/images/team/id-cards/Ankur_pathak.webp",
    alt: "KAALKRIT ID card for Ankur Pathak, Business, Marketing & Outreach Lead.",
    width: 1024,
    height: 1536,
  },
  "Shantanu Pawade": {
    src: "/images/team/id-cards/Shantanu_pawde.webp",
    alt: "KAALKRIT ID card for Shantanu Pawade, Design Support.",
    width: 941,
    height: 1672,
  },
  "Manas Yadu": {
    src: "/images/team/id-cards/Manus_yadu.webp",
    alt: "KAALKRIT ID card for Manas Yadu, Technical Team.",
    width: 1024,
    height: 1536,
  },
  "Raunit Singh": {
    src: "/images/team/id-cards/Raunit_singh.webp",
    alt: "KAALKRIT ID card for Raunit Singh, Technical Team.",
    width: 941,
    height: 1672,
  },
  "Shubham Kumar": {
    src: "/images/team/id-cards/Shubham_kumar.webp",
    alt: "KAALKRIT ID card for Shubham Kumar, Sponsorship & Social Media.",
    width: 941,
    height: 1672,
  },
  "Aditi Kiran": {
    src: "/images/team/id-cards/Aditi_kiran.webp",
    alt: "KAALKRIT ID card for Aditi Kiran, Content Planning & Management.",
    width: 1024,
    height: 1536,
  },
  "Hardhik Bhatia": {
    src: "/images/team/id-cards/Hardhik_Bhatia.webp",
    alt: "KAALKRIT ID card for Hardhik Bhatia, Video Production & Editing.",
    width: 1024,
    height: 1536,
  },
  "Suraj Verma": {
    src: "/images/team/id-cards/Suraj_kumar_verma.webp",
    alt: "KAALKRIT ID card for Suraj Verma, Design & Creatives.",
    width: 1024,
    height: 1536,
  },
  "Kaavya Sharma": {
    src: "/images/team/id-cards/Kaavya_sharma.webp",
    alt: "KAALKRIT ID card for Kaavya Sharma, Design & Creatives.",
    width: 1024,
    height: 1536,
  },
};

export const teamIdCards: TeamMemberWithIdCard[] = teamMembers.map(
  (member) => ({
    ...member,
    idCard: idCardAssets[member.name],
  }),
);
