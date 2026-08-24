import { Button } from "@/components/ui/Button";
import { DepthText } from "@/components/ui/DepthText";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE } from "@/content/site";

export function EngineeringHero() {
  return (
    <section className="engineering-hero" aria-labelledby="hero-heading">
      <div className="k-container engineering-hero__content">
        <div className="engineering-hero__identity">
          <Wordmark variant="system" priority />
          <p className="technical-label">Drone & Robotics Innovation Team</p>
        </div>
        <p className="technical-label">
          01 / Drone / Robotics / Autonomous systems
        </p>
        <DepthText
          text="KAALKRIT"
          layers={22}
          depth={1.55}
          faceColor="var(--foreground)"
          depthColor="var(--primary)"
          fontSize="clamp(2.8rem, 14vw, 8.4rem)"
          className="engineering-hero__depth-text"
        />
        <h1 id="hero-heading">Engineering systems that move with purpose.</h1>
        <p className="engineering-hero__lede">
          KAALKRIT is Sir MVIT’s Drone &amp; Robotics Innovation Team, bringing
          autonomous aerial systems, robotics, embedded technology, AI, and
          software into practical engineering work.
        </p>
        <div className="engineering-hero__actions">
          <Button href="/projects" variant="primary">
            Explore the work <span aria-hidden="true">↗</span>
          </Button>
          <Button href="/journey" variant="secondary">
            Our direction <span aria-hidden="true">→</span>
          </Button>
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
