export function AccordionGallerySkeleton() {
  return (
    <div className="section-skeleton section-skeleton--gallery" aria-busy="true" aria-label="Loading activity gallery">
      <span className="sr-only" role="status">Loading verified team activity</span>
      <div className="section-skeleton__tabs">
        <span />
        <span />
        <span />
      </div>
      <div className="section-skeleton__panel">
        <span className="section-skeleton__media" />
        <span className="section-skeleton__copy section-skeleton__copy--wide" />
      </div>
    </div>
  );
}

export function DepthCarouselSkeleton() {
  return (
    <div className="section-skeleton section-skeleton--team" aria-busy="true" aria-label="Loading team section">
      <span className="sr-only" role="status">Loading team information</span>
      <span className="section-skeleton__media" />
      <span className="section-skeleton__copy" />
    </div>
  );
}

export function RouteLoadingExperience({ label }: { label: string }) {
  return (
    <section className="route-loading" aria-busy="true" aria-label={`Loading ${label}`}>
      <span className="sr-only" role="status">Loading {label}</span>
      <div className="public-container">
        <div className="route-loading__eyebrow" />
        <div className="route-loading__title" />
        <div className="route-loading__body" />
        <div className="route-loading__body route-loading__body--short" />
      </div>
    </section>
  );
}
