import Link from 'next/link';
import { LEGAL } from '@/content/legal';
import { mailto, SITE } from '@/content/site';

export function LegalPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <article className="legal-page">
      <div className="public-container legal-page__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-page__intro">{intro}</p>
        <p className="legal-page__updated">Last updated: {LEGAL.lastUpdated}</p>
        <div className="legal-page__content">{children}</div>
        <div className="legal-page__socials"><span>Official contact</span><a href={mailto('KAALKRIT website enquiry')}>{SITE.email}</a></div>
        <div className="legal-page__back"><Link href="/">← Back to KAALKRIT</Link></div>
      </div>
    </article>
  );
}
