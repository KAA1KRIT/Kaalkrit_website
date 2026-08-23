import { InformationPage } from "@/components/system/InformationPage";
import { privacyContent } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: privacyContent.title,
  description: privacyContent.description,
  path: "/privacy",
});
export default function PrivacyPage() {
  return <InformationPage content={privacyContent} />;
}
