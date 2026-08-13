import { ANALYTICS_ENABLED, SITE } from '@/content/site';

export const LEGAL = {
  lastUpdated: '13 August 2026',
  privacyContact: SITE.email,
  instagramUrl: SITE.instagram,
  cookiePolicy: {
    usesNonEssentialCookies: false,
    analyticsEnabled: ANALYTICS_ENABLED,
  },
} as const;
