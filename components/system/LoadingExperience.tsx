export function LoadingExperience() {
  return (
    <section
      className="loading-experience"
      aria-label="Loading KAALKRIT"
      aria-busy="true"
      role="status"
    >
      <div className="public-container">
        <p className="eyebrow">KAALKRIT / loading</p>
        <span className="sr-only">Loading page content</span>
        <div className="loading-line loading-line--wide" />
        <div className="loading-line" />
        <div className="loading-line loading-line--short" />
      </div>
    </section>
  );
}
