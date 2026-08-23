import { LoaderFour } from "@/components/ui/loader";

export function RouteLoadingExperience({ label }: { label: string }) {
  return (
    <section
      className="route-loading"
      aria-busy="true"
      aria-label={`Loading ${label}`}
    >
      <div className="public-container">
        <LoaderFour label={`Loading ${label}`} />
        <div className="route-loading__eyebrow" />
        <div className="route-loading__title" />
        <div className="route-loading__body" />
        <div className="route-loading__body route-loading__body--short" />
      </div>
    </section>
  );
}
