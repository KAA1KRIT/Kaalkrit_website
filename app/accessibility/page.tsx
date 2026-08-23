import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LEGAL } from "@/content/legal";
import { mailto, SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Accessibility measures built into the KAALKRIT public website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal / 03"
      title="Accessibility Statement"
      intro="KAALKRIT is designed to remain understandable and usable across keyboards, touch devices, smaller screens, and reduced-motion settings."
    >
      <h2>Measures implemented</h2>
      <ul>
        <li>
          Semantic landmarks, headings, lists, labels, and a skip-to-content
          link.
        </li>
        <li>
          Keyboard-operable navigation, controls, links, and visible focus
          indicators.
        </li>
        <li>
          Colour and type choices designed for readable contrast across theme
          surfaces.
        </li>
        <li>
          Responsive layouts tested against narrow mobile, tablet, and wide
          desktop compositions.
        </li>
        <li>
          Reduced-motion support that presents the hero in a stable state and
          removes scroll-linked transformation and decorative wave motion.
        </li>
        <li>
          Textual content remains available independently of decorative visual
          treatments.
        </li>
      </ul>
      <h2>Reporting an issue</h2>
      <p>
        If a page or interaction is difficult to use, email{" "}
        <a href={mailto("Accessibility issue")}>{SITE.email}</a> with the route
        and what happened, or use the{" "}
        <a href={LEGAL.instagramUrl} target="_blank" rel="noopener noreferrer">
          verified KAALKRIT Instagram account
        </a>
        .
      </p>
      <p className="legal-note">
        This statement is a practical description of the current implementation
        and should receive final human review before broad public launch.
      </p>
    </LegalPageLayout>
  );
}
