import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  poweredByHeader: false,
  // Next.js evaluates this list only in development. Keep LAN/mobile HMR
  // testing explicit rather than weakening production origin protections.
  allowedDevOrigins: ['10.67.84.166', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/images/approved/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        // The filename is intentionally stable so a revised official mark can
        // propagate without a stale immutable cache entry.
        source: '/images/approved/logo_favicon.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ];
  },
};

export default nextConfig;
