import { PageHeader } from "@/components/layout/PageHeader";
import type { LegalPageContent } from "@/lib/types";

export function InformationPage({ content }: { content: LegalPageContent }) {
  return (
    <>
      <PageHeader
        eyebrow="Site information"
        heading={content.title}
        lede={content.description}
      />
      <section className="system-section" aria-label={content.title}>
        <div className="k-container information-page">
          {content.sections.map((section, index) => (
            <article key={section.heading}>
              <p className="technical-label">0{index + 1}</p>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
