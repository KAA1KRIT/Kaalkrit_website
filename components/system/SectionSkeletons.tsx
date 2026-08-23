export function RouteLoadingExperience({ label }: { label: string }) {
  return (
    <section
      className="route-loading"
      aria-busy="true"
      aria-label={`Loading ${label}`}
    >
      <span className="sr-only" role="status">
        Loading {label}
      </span>
      <div className="public-container">
        <div className="route-loading__eyebrow" />
        <div className="route-loading__title" />
        <div className="route-loading__body" />
        <div className="route-loading__body route-loading__body--short" />
      </div>
    </section>
  );
}
