export function LoadingExperience() {
  return (
    <section
      className="loading-experience"
      aria-label="[LOADING ARIA LABEL PLACEHOLDER]"
      aria-busy="true"
      role="status"
    >
      <div className="public-container">
        <p className="eyebrow">[LOADING LABEL PLACEHOLDER]</p>
        <span className="sr-only">Loading page content</span>
        <div className="loading-line loading-line--wide" />
        <div className="loading-line" />
        <div className="loading-line loading-line--short" />
      </div>
    </section>
  );
}
