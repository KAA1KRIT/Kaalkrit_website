import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/content/site';
import { hasRoster } from '@/content/team';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!absoluteUrl('/')) return [];
  const lastModified = new Date();
  const entry = (path: string, priority: number) => ({
    url: absoluteUrl(path)!,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  });

  return [
    entry('/', 1),
    entry('/projects', 0.9),
    entry('/journey', 0.8),
    entry('/privacy', 0.4),
    entry('/terms', 0.4),
    entry('/accessibility', 0.4),
    // Listed only once the roster exists — an empty route is not submitted.
    ...(hasRoster ? [entry('/team', 0.8)] : []),
  ];
}
