import { InformationPage } from "@/components/system/InformationPage";
import { termsContent } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: termsContent.title,
  description: termsContent.description,
  path: "/terms",
});
export default function TermsPage() {
  return <InformationPage content={termsContent} />;
}
