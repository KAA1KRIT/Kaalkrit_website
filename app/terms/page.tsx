import { LegalPageLayout } from '@/components/layout/LegalPageLayout';
import { LEGAL } from '@/content/legal';
import { mailto, SITE } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Terms of Use', description: 'Terms for using the KAALKRIT public informational website.', path: '/terms' });

export default function TermsPage() {
  return <LegalPageLayout eyebrow="Legal / 02" title="Terms of Use" intro="These terms apply to use of the KAALKRIT public website as an informational and educational resource.">
    <h2>Acceptance</h2><p>By using this website, you agree to use it lawfully and respectfully. If you do not agree, please do not use the site.</p>
    <h2>Informational and educational nature</h2><p>The website presents information about KAALKRIT, its engineering domains, documented projects, and stated direction. It is not an offer of products, services, employment, funding, or a guarantee of future performance.</p>
    <h2>Accuracy and availability</h2><p>KAALKRIT aims to keep the information accurate and current, but does not guarantee that every page will always be complete, available, or free from error. Project statuses and descriptions should be read as stated on the relevant page.</p>
    <h2>Intellectual property and prohibited use</h2><p>Please respect KAALKRIT’s name, marks, writing, diagrams, and any third-party rights. Do not scrape, misrepresent, disrupt, reverse engineer, or use the site to distribute harmful material. Nothing on the site transfers intellectual-property rights.</p>
    <h2>External links and changes</h2><p>External links are provided for convenience and lead to services controlled by others. KAALKRIT is not responsible for their content or availability. The site and these terms may change as the public website develops.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent to <a href={mailto('Terms of Use question')}>{SITE.email}</a> or raised through the <a href={LEGAL.instagramUrl} target="_blank" rel="noopener noreferrer">verified KAALKRIT Instagram account</a>.</p>
    <p className="legal-note">No governing-law or jurisdiction clause is included because KAALKRIT has not supplied one for this public site.</p>
  </LegalPageLayout>;
}
