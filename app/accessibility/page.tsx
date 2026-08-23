import { InformationPage } from "@/components/system/InformationPage";
import { accessibilityContent } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: accessibilityContent.title,
  description: accessibilityContent.description,
  path: "/accessibility",
});
export default function AccessibilityPage() {
  return <InformationPage content={accessibilityContent} />;
}
