import { WarmLandingPage } from '@/components/sections/WarmLandingPage';
import { SITE } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Home',
  fullTitle: 'KAALKRIT — Engineering what moves next',
  description: SITE.description,
  path: '/',
});

export default function HomePage() {
  return <WarmLandingPage />;
}
