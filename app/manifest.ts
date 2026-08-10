import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KAALKRIT — Engineering autonomy into the real world',
    short_name: 'KAALKRIT',
    description: 'Official drone and robotics innovation team of Sir MVIT, Bengaluru.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff6d2',
    theme_color: '#fff6d2',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
