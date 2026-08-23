import type { Metadata, Viewport } from "next";
import { Crimson_Text, Mukta_Vaani, Palanquin_Dark } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ANALYTICS_ENABLED, SITE } from "@/content/site";
import { organizationSchema, serializeJsonLd, websiteSchema } from "@/lib/seo";
import "@/styles/globals.css";

const editorialFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-editorial",
});

const interfaceFont = Palanquin_Dark({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-interface",
});

const bodyFont = Mukta_Vaani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-body-kaalkrit",
});

export const metadata: Metadata = {
  ...(SITE.url ? { metadataBase: new URL(SITE.url) } : {}),
  title: {
    default: "Team KAALKRIT — Drone & Robotics Innovation Team",
    template: "%s — Team KAALKRIT",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${editorialFont.variable} ${interfaceFont.variable} ${bodyFont.variable}`}
      >
        <SmoothScrollProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-[var(--k-4)] focus:top-[var(--k-4)] focus:z-[60] focus:inline-flex focus:items-center focus:min-h-[44px] focus:px-[var(--k-5)] focus:bg-[var(--k-signal)] focus:text-white focus:rounded-[var(--k-radius)] focus:no-underline"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
        {ANALYTICS_ENABLED && process.env.NODE_ENV === "production" ? (
          <Analytics />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema()) }}
        />
      </body>
    </html>
  );
}
