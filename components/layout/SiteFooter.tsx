import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { SITE } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

const footerLink = "footer-link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="public-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Wordmark variant="footer" />
            <p>
              Team KAALKRIT is the official drone and robotics innovation team
              of Sir M. Visvesvaraya Institute of Technology (Sir MVIT),
              Bengaluru — building autonomous aerial systems, robotics, and
              intelligent engineering solutions.
            </p>
            <span>Established {SITE.founded}</span>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            <h2>Explore</h2>
            <ul>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-endline">
          <span>© {year} Team KAALKRIT</span>
          <a href="#main" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
