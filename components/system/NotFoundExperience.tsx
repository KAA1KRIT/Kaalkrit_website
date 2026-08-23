import Link from "next/link";
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
        <h1 id="not-found-heading">This route is not available.</h1>
        <p>Return to the KAALKRIT homepage or explore the team’s projects.</p>
        <div className="not-found-experience__actions">
          <Link href="/" className="button button--primary">
            Return home <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/projects" className="button button--secondary">
            Explore projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
