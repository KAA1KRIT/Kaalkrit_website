import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[TERMS PAGE TITLE PLACEHOLDER]",
  description: "[TERMS META DESCRIPTION PLACEHOLDER]",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="[LEGAL EYEBROW PLACEHOLDER]"
      title="[TERMS PAGE HEADING PLACEHOLDER]"
      intro="[TERMS INTRO PLACEHOLDER]"
    >
      <h2>[TERMS SECTION HEADING PLACEHOLDER 1]</h2>
      <p>[TERMS SECTION BODY PLACEHOLDER 1]</p>
      <h2>[TERMS SECTION HEADING PLACEHOLDER 2]</h2>
      <p>[TERMS SECTION BODY PLACEHOLDER 2]</p>
      <h2>[TERMS SECTION HEADING PLACEHOLDER 3]</h2>
      <p>[TERMS SECTION BODY PLACEHOLDER 3]</p>
    </LegalPageLayout>
  );
}
