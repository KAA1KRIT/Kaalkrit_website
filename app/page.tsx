import { LandingPage } from "@/components/sections/LandingPage";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[HOME PAGE TITLE PLACEHOLDER]",
  fullTitle: "[HOME PAGE SEO TITLE PLACEHOLDER]",
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return <LandingPage />;
}
