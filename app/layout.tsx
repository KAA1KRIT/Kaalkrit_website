import type { Metadata, Viewport } from 'next';
import { Bungee } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ANALYTICS_ENABLED, SITE } from '@/content/site';
import { organizationSchema, serializeJsonLd, websiteSchema } from '@/lib/seo';
import '@/styles/globals.css';

const brandFont = Bungee({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-kaalkrit-brand',
});

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
      <body className={brandFont.variable}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-[var(--k-4)] focus:top-[var(--k-4)] focus:z-[60] focus:inline-flex focus:items-center focus:min-h-[44px] focus:px-[var(--k-5)] focus:bg-[var(--k-signal)] focus:text-white focus:rounded-[var(--k-radius)] focus:no-underline"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {ANALYTICS_ENABLED && process.env.NODE_ENV === 'production' ? <Analytics /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema()) }}
        />
      </body>
    </html>
  );
}
