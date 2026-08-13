import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SITE } from '@/content/site';
import { organizationSchema } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = {
  ...(SITE.url ? { metadataBase: new URL(SITE.url) } : {}),
  title: {
    default: 'KAALKRIT — Drone & Robotics Innovation Team, Sir MVIT',
    template: '%s — KAALKRIT',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: '#f3bc16',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-[var(--k-4)] focus:top-[var(--k-4)] focus:z-[60] focus:inline-flex focus:items-center focus:min-h-[44px] focus:px-[var(--k-5)] focus:bg-[var(--k-signal)] focus:text-white focus:rounded-[var(--k-radius)] focus:no-underline"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.VERCEL === '1' ? <Analytics /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </body>
    </html>
  );
}
