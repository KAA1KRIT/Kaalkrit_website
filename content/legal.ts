import { ANALYTICS_ENABLED, SITE } from "@/content/site";

export const LEGAL = {
  lastUpdated: "[LEGAL LAST UPDATED PLACEHOLDER]",
  privacyContact: SITE.email,
  instagramUrl: SITE.instagram,
  cookiePolicy: {
    usesNonEssentialCookies: false,
    analyticsEnabled: ANALYTICS_ENABLED,
  },
} as const;
