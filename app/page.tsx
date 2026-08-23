import { LandingPage } from "@/components/sections/LandingPage";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Team KAALKRIT",
  fullTitle:
    "Team KAALKRIT — Engineering the Future Through Innovation, Autonomy, and Intelligent Systems.",
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return <LandingPage />;
}
