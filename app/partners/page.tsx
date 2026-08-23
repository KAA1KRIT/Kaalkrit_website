import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GapNote } from "@/components/ui/GapNote";
import { collaborationModes } from "@/content/partners";
import { mailto } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partners",
  description:
    "Ways to begin an engineering, hardware, mentorship, or research conversation with KAALKRIT.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        heading="Make room for meaningful engineering collaboration."
        lede="KAALKRIT welcomes conversations with industry, startups, academia, research organisations, and engineering communities. No partnership claims are published without confirmation."
        meta={["Collaboration conversations", "No public partner roster"]}
      />
      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="partner-modes-heading"
      >
        <div className="k-container">
          <h2
            id="partner-modes-heading"
            className="k-display text-[length:var(--k-t-h2)]"
          >
            Start with the work.
          </h2>
          <div className="mt-[var(--k-7)] grid gap-px border-y border-[var(--k-line)] bg-[var(--k-line)] md:grid-cols-2">
            {collaborationModes.map((mode) => (
              <article
                key={mode.id}
                className="bg-[var(--k-void)] p-[var(--k-6)]"
              >
                <p className="k-meta">{mode.id}</p>
                <h3 className="k-display mt-[var(--k-4)] text-[length:var(--k-t-h3)]">
                  {mode.title}
                </h3>
                <p className="k-body mt-[var(--k-4)]">{mode.description}</p>
                <a
                  className="text-link mt-[var(--k-5)]"
                  href={mailto(mode.subject)}
                >
                  Start a conversation <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="mt-[var(--k-7)]">
            <GapNote
              id="P1"
              title="Partnership information is kept factual."
              detail="KAALKRIT shares partner materials only when they are confirmed for public use."
            />
          </div>
          <div className="mt-[var(--k-7)]">
            <Button
              href={mailto("Partnership with Team KAALKRIT")}
              variant="primary"
            >
              Partner with KAALKRIT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
