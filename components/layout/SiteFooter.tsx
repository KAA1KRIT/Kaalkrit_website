import Link from 'next/link';
import { footerNav, sectionNav } from '@/content/navigation';
import { mailto, SITE, SOCIAL_LINKS } from '@/content/site';
import { Wordmark } from '@/components/ui/Wordmark';
import { TrackedLink } from '@/components/analytics/TrackedLink';

const footerLink = 'footer-link';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="public-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Wordmark variant="footer" />
            <p>Official Drone and Robotics Innovation Team of Sir MVIT, Bengaluru.</p>
            <span>Established {SITE.founded}</span>
            <TrackedLink href={mailto('KAALKRIT website enquiry')} className="footer-email" event="email_click" properties={{ placement: 'footer' }}>{SITE.email}</TrackedLink>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            <h2>Navigate</h2>
            <ul>{footerNav.map((item) => <li key={item.href}><Link href={item.href} className={footerLink}>{item.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Footer actions" className="footer-nav">
            <h2>Connect</h2>
            <ul>{sectionNav.map((item) => <li key={item.href}><Link href={item.href} className={footerLink}>{item.label}</Link></li>)}</ul>
            <h2 className="footer-nav__subhead">Follow</h2>
            <ul>{SOCIAL_LINKS.map((link) => <li key={link.href}><TrackedLink href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className={footerLink} event="social_outbound_click" properties={{ platform: link.label, placement: 'footer' }}>{link.label}</TrackedLink></li>)}</ul>
          </nav>
          <nav aria-label="Legal navigation" className="footer-nav">
            <h2>Legal</h2>
            <ul>
              <li><Link href="/privacy" className={footerLink}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={footerLink}>Terms of Use</Link></li>
              <li><Link href="/accessibility" className={footerLink}>Accessibility Statement</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-endline">
          <span>© {year} Team KAALKRIT · Official Drone and Robotics Innovation Team of Sir MVIT, Bengaluru</span>
          <a href="#main" className="back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
