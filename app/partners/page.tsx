import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GapNote } from "@/components/ui/GapNote";
import { collaborationModes } from "@/content/partners";
import { mailto } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[PARTNERS PAGE TITLE PLACEHOLDER]",
  description: "[PARTNERS META DESCRIPTION PLACEHOLDER]",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="[PARTNERS EYEBROW PLACEHOLDER]"
        heading="[PARTNERS HEADLINE PLACEHOLDER]"
        lede="[PARTNERS LEDE PLACEHOLDER]"
        meta={[
          "[PARTNERS META PLACEHOLDER 1]",
          "[PARTNERS META PLACEHOLDER 2]",
        ]}
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
            [PARTNERS SECTION HEADING PLACEHOLDER]
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
                  [PARTNERS CTA PLACEHOLDER] <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="mt-[var(--k-7)]">
            <GapNote
              id="P1"
              title="[PARTNERS NOTE TITLE PLACEHOLDER]"
              detail="[PARTNERS NOTE BODY PLACEHOLDER]"
            />
          </div>
          <div className="mt-[var(--k-7)]">
            <Button
              href={mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]")}
              variant="primary"
            >
              [PARTNERS CTA PLACEHOLDER]
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
