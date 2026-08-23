import { LoaderFour } from "@/components/ui/loader";

export function LoadingExperience() {
  return (
    <section
      className="loading-experience"
      aria-label="Loading Team KAALKRIT"
      aria-busy="true"
    >
      <div className="public-container">
        <p className="eyebrow">Team KAALKRIT / system status</p>
        <LoaderFour label="Loading page content" />
      </div>
    </section>
  );
}
