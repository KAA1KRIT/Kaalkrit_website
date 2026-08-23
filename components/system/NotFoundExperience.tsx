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
        <h1 id="not-found-heading">[NOT FOUND HEADLINE PLACEHOLDER]</h1>
        <p>
          [NOT FOUND BODY COPY PLACEHOLDER]{" "}
          <a href={mailto("[WEBSITE ISSUE EMAIL SUBJECT PLACEHOLDER]")}>
            [NOT FOUND CONTACT LINK PLACEHOLDER]
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
            href={mailto("[WEBSITE EMAIL SUBJECT PLACEHOLDER]")}
            className="button button--secondary"
          >
            [NOT FOUND CTA PLACEHOLDER] <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
