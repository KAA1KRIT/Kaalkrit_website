import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE } from "@/content/site";

export function EngineeringHero() {
  return (
    <section className="engineering-hero" aria-labelledby="hero-heading">
      <div className="engineering-hero__grid" aria-hidden="true" />
      <div className="k-container engineering-hero__content">
        <div className="engineering-hero__identity">
          <Wordmark variant="system" priority />
          <p className="technical-label">Drone & Robotics Innovation Team</p>
        </div>
        <p className="technical-label">01 / Autonomous engineering</p>
        <h1 id="hero-heading">Precision in motion. Intelligence in systems.</h1>
        <p className="engineering-hero__lede">{SITE.description}</p>
        <div className="engineering-hero__actions">
          <Link href="/projects" className="button button--primary">
            Explore the work <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/journey" className="button button--secondary">
            Our direction <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="engineering-hero__specs" aria-label="Team profile">
          <span>Sir MVIT / Bengaluru</span>
          <span>Established {SITE.founded}</span>
          <span>Research → Validation</span>
        </div>
      </div>
    </section>
  );
}
