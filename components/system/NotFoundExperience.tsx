import Link from "next/link";
import { mailto } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function NotFoundExperience() {
  return (
    <section
      className="not-found-experience"
      aria-labelledby="not-found-heading"
    >
      <div className="public-container not-found-experience__inner">
        <Wordmark variant="system" />
        <div className="flight-path-mark" aria-hidden="true">
          <span />
          <i />
        </div>
        <p className="eyebrow">Error 404 / Route unavailable</p>
        <h1 id="not-found-heading">This page took a different flight path.</h1>
        <p>
          There is no public page at this address. Return to KAALKRIT, explore
          the documented projects, or{" "}
          <a href={mailto("KAALKRIT website issue")}>
            tell us about a broken link
          </a>
          .
        </p>
        <div className="not-found-experience__actions">
          <Link href="/" className="button button--primary">
            Return home <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/projects" className="button button--secondary">
            Explore projects <span aria-hidden="true">↗</span>
          </Link>
          <a
            href={mailto("KAALKRIT website enquiry")}
            className="button button--secondary"
          >
            Contact KAALKRIT <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
