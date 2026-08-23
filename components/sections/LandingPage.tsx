import Link from "next/link";
import { ScrollExpandHero } from "@/components/hero/ScrollExpandHero";
import { BorderGlow } from "@/components/motion/BorderGlow";
import { MaskedHeading } from "@/components/motion/MaskedHeading";
import { mailto } from "@/content/site";
import { publicProjects, statusLabel } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { domainsByGroup, lifecycleStages } from "@/content/domains";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function LandingPage() {
  return (
    <>
      <ScrollExpandHero />
      <section
        className="editorial-section mission-section"
        aria-labelledby="mission-heading"
      >
        <div className="public-container editorial-two-column">
          <p className="eyebrow">[SECTION LABEL PLACEHOLDER 1]</p>
          <div>
            <h2 id="mission-heading">[MISSION HEADLINE PLACEHOLDER]</h2>
            <p className="editorial-lede">[MISSION BODY COPY PLACEHOLDER]</p>
          </div>
        </div>
      </section>
      <section
        className="editorial-section why-section"
        aria-labelledby="why-heading"
      >
        <div className="public-container">
          <p className="eyebrow">[SECTION LABEL PLACEHOLDER 2]</p>
          <MaskedHeading id="why-heading">
            [VALUE PROPOSITION HEADLINE PLACEHOLDER]
          </MaskedHeading>
          <div className="reasons-grid">
            {[1, 2, 3].map((index) => (
              <article key={index}>
                <span>{String(index).padStart(2, "0")}</span>
                <h3>{`[REASON TITLE PLACEHOLDER ${index}]`}</h3>
                <p>{`[REASON BODY COPY PLACEHOLDER ${index}]`}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="editorial-section lifecycle-section"
        aria-labelledby="lifecycle-heading"
      >
        <div className="public-container">
          <div className="editorial-section__heading">
            <p className="eyebrow">[SECTION LABEL PLACEHOLDER 3]</p>
            <h2 id="lifecycle-heading">[LIFECYCLE HEADLINE PLACEHOLDER]</h2>
          </div>
          <ol className="editorial-lifecycle">
            {lifecycleStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {stage}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        id="capabilities"
        className="editorial-section capability-section"
        aria-labelledby="capabilities-heading"
      >
        <div className="public-container">
          <div className="editorial-two-column">
            <p className="eyebrow">[SECTION LABEL PLACEHOLDER 4]</p>
            <div>
              <h2 id="capabilities-heading">
                [CAPABILITY HEADLINE PLACEHOLDER]
              </h2>
              <p className="editorial-lede">
                [CAPABILITY BODY COPY PLACEHOLDER]
              </p>
            </div>
          </div>
          <div className="capability-index-warm">
            {domainsByGroup.map(({ group, items }, index) => (
              <section key={group.id}>
                <p>
                  {String(index + 1).padStart(2, "0")} / {group.label}
                </p>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="editorial-section projects-section"
        aria-labelledby="projects-heading"
      >
        <div className="public-container">
          <div className="editorial-two-column projects-heading">
            <p className="eyebrow">[SECTION LABEL PLACEHOLDER 5]</p>
            <div>
              <h2 id="projects-heading">[PROJECTS HEADLINE PLACEHOLDER]</h2>
              <p className="editorial-lede">[PROJECTS BODY COPY PLACEHOLDER]</p>
            </div>
          </div>
          <div className="project-editorial-list">
            {publicProjects.map((project, index) => (
              <article
                key={project.slug}
                className={`project-editorial ${index % 2 === 1 ? "project-editorial--reverse" : ""}`}
              >
                <div
                  className="project-editorial__image project-editorial__image--empty"
                  aria-label={`[PROJECT IMAGE PLACEHOLDER ${index + 1}]`}
                >
                  <span>{`[IMAGE ${index + 1}]`}</span>
                </div>
                <div className="project-editorial__copy">
                  <p className="project-status">
                    {statusLabel[project.status]}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <TrackedLink
                    href={`/projects/${project.slug}`}
                    className="text-link"
                    event="project_detail_click"
                    properties={{
                      project: project.slug,
                      placement: "homepage",
                    }}
                  >
                    [PROJECT LINK LABEL PLACEHOLDER]{" "}
                    <span aria-hidden="true">→</span>
                  </TrackedLink>
                </div>
              </article>
            ))}
          </div>
          <Link href="/projects" className="text-link">
            [PROJECT INDEX LINK LABEL PLACEHOLDER]{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section
        className="editorial-section culture-section"
        aria-labelledby="culture-heading"
      >
        <div className="public-container culture-grid">
          <div
            className="culture-grid__media"
            aria-label="[CULTURE IMAGE PLACEHOLDER]"
          >
            <div className="culture-grid__image culture-grid__image--empty">
              <span>[CULTURE IMAGE PLACEHOLDER]</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">[SECTION LABEL PLACEHOLDER 6]</p>
            <h2 id="culture-heading">[CULTURE HEADLINE PLACEHOLDER]</h2>
            <p>[CULTURE BODY COPY PLACEHOLDER]</p>
            <TrackedLink
              href={mailto("[RECRUITMENT EMAIL SUBJECT PLACEHOLDER]")}
              className="button button--secondary"
              event="recruitment_cta_click"
              properties={{ placement: "culture" }}
            >
              [RECRUITMENT CTA PLACEHOLDER] <span aria-hidden="true">↗</span>
            </TrackedLink>
          </div>
        </div>
      </section>
      <section
        className="editorial-section achievement-section"
        aria-labelledby="achievement-heading"
      >
        <div className="public-container editorial-two-column">
          <p className="eyebrow">[SECTION LABEL PLACEHOLDER 7]</p>
          <div>
            <h2 id="achievement-heading">
              [ACHIEVEMENTS HEADLINE PLACEHOLDER]
            </h2>
            <div className="achievement-lines">
              {achievements.map((achievement) => (
                <p key={achievement.id}>
                  <strong>{achievement.title}</strong>
                  <span>{achievement.detail}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="editorial-section future-section"
        aria-labelledby="future-heading"
      >
        <div className="public-container">
          <p className="eyebrow">[SECTION LABEL PLACEHOLDER 8]</p>
          <h2 id="future-heading">[FUTURE HEADLINE PLACEHOLDER]</h2>
          <p className="editorial-lede">[FUTURE BODY COPY PLACEHOLDER]</p>
          <ul className="future-list">
            {Array.from({ length: 8 }, (_, index) => (
              <li
                key={index}
              >{`[FUTURE LIST ITEM PLACEHOLDER ${index + 1}]`}</li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="partnership"
        className="editorial-section partnership-section"
        aria-labelledby="partnership-heading"
      >
        <div className="public-container">
          <BorderGlow>
            <div className="partnership-card">
              <p className="eyebrow">[SECTION LABEL PLACEHOLDER 9]</p>
              <h2 id="partnership-heading">
                [PARTNERSHIP HEADLINE PLACEHOLDER]
              </h2>
              <p>[PARTNERSHIP BODY COPY PLACEHOLDER]</p>
              <TrackedLink
                href={mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]")}
                className="button button--primary"
                event="partner_cta_click"
                properties={{ placement: "partnership" }}
              >
                [PARTNERSHIP CTA PLACEHOLDER] <span aria-hidden="true">↗</span>
              </TrackedLink>
            </div>
          </BorderGlow>
        </div>
      </section>
      <section
        id="join"
        className="join-section"
        aria-labelledby="join-heading"
      >
        <div className="public-container join-section__content">
          <p className="eyebrow">[SECTION LABEL PLACEHOLDER 10]</p>
          <h2 id="join-heading">[RECRUITMENT HEADLINE PLACEHOLDER]</h2>
          <p>[RECRUITMENT BODY COPY PLACEHOLDER]</p>
          <TrackedLink
            href={mailto("[RECRUITMENT EMAIL SUBJECT PLACEHOLDER]")}
            className="button button--secondary"
            event="recruitment_cta_click"
            properties={{ placement: "join" }}
          >
            [RECRUITMENT CTA PLACEHOLDER] <span aria-hidden="true">↗</span>
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
