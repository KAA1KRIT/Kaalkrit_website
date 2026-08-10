import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/content/site';
import { hasRoster } from '@/content/team';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      ...(hasRoster ? {} : { disallow: '/team' }),
    },
    ...(absoluteUrl('/sitemap.xml') ? { sitemap: absoluteUrl('/sitemap.xml') } : {}),
  };
}
