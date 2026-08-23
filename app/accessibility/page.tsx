import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[ACCESSIBILITY PAGE TITLE PLACEHOLDER]",
  description: "[ACCESSIBILITY META DESCRIPTION PLACEHOLDER]",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPageLayout
      eyebrow="[LEGAL EYEBROW PLACEHOLDER]"
      title="[ACCESSIBILITY PAGE HEADING PLACEHOLDER]"
      intro="[ACCESSIBILITY INTRO PLACEHOLDER]"
    >
      <h2>[ACCESSIBILITY SECTION HEADING PLACEHOLDER 1]</h2>
      <p>[ACCESSIBILITY SECTION BODY PLACEHOLDER 1]</p>
      <h2>[ACCESSIBILITY SECTION HEADING PLACEHOLDER 2]</h2>
      <p>[ACCESSIBILITY SECTION BODY PLACEHOLDER 2]</p>
    </LegalPageLayout>
  );
}
