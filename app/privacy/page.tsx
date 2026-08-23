import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[PRIVACY PAGE TITLE PLACEHOLDER]",
  description: "[PRIVACY META DESCRIPTION PLACEHOLDER]",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="[LEGAL EYEBROW PLACEHOLDER]"
      title="[PRIVACY PAGE HEADING PLACEHOLDER]"
      intro="[PRIVACY INTRO PLACEHOLDER]"
    >
      <h2>[PRIVACY SECTION HEADING PLACEHOLDER 1]</h2>
      <p>[PRIVACY SECTION BODY PLACEHOLDER 1]</p>
      <h2>[PRIVACY SECTION HEADING PLACEHOLDER 2]</h2>
      <p>[PRIVACY SECTION BODY PLACEHOLDER 2]</p>
      <h2>[PRIVACY SECTION HEADING PLACEHOLDER 3]</h2>
      <p>[PRIVACY SECTION BODY PLACEHOLDER 3]</p>
    </LegalPageLayout>
  );
}
