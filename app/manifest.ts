import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KAALKRIT — Engineering autonomy into the real world',
    short_name: 'KAALKRIT',
    description: 'Official drone and robotics innovation team of Sir MVIT, Bengaluru.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f3bc16',
    icons: [
      { src: '/logo_favicon.png', sizes: '160x160', type: 'image/png', purpose: 'any' },
    ],
  };
}
