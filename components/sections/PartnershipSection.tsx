import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { collaborationModes } from "@/content/partners";
import { mailto } from "@/content/site";

/** Shared partnership invitation used by the project index. */
export function PartnershipSection() {
  return (
    <section
      id="partnership"
      className="public-section partnership"
      aria-labelledby="partnership-heading"
    >
      <div className="public-container">
        <SectionHeader
          eyebrow="[PARTNERSHIP EYEBROW PLACEHOLDER]"
          id="partnership-heading"
          heading="[PARTNERSHIP HEADING PLACEHOLDER]"
          lede="[PARTNERSHIP LEDE PLACEHOLDER]"
        />
        <div className="partnership__body">
          <ul className="collaboration-list">
            {collaborationModes.slice(0, 4).map((mode, index) => (
              <li key={mode.id}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{mode.title}</h3>
                  <p>{mode.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="partnership__route">
            <p className="eyebrow">[PARTNERSHIP ROUTE LABEL PLACEHOLDER]</p>
            <p>[PARTNERSHIP ROUTE BODY COPY PLACEHOLDER]</p>
            <Button
              href={mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]")}
              variant="primary"
              trailing={<span aria-hidden="true">↗</span>}
            >
              [PARTNERSHIP CTA PLACEHOLDER]
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
