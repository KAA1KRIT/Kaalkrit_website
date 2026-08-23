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
          eyebrow="Partnership / 11"
          id="partnership-heading"
          heading="Help move a system from intent to validation."
          lede="KAALKRIT is open to conversations around engineering collaboration, hardware, research and mentorship. No sponsor claims or contact details are implied here."
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
            <p className="eyebrow">Approved route</p>
            <p>
              Send a partnership question to the team through the official
              contact route.
            </p>
            <Button
              href={mailto("Partnership with Team KAALKRIT")}
              variant="primary"
              trailing={<span aria-hidden="true">↗</span>}
            >
              Email the team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
