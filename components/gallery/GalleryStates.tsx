import type { ReactNode } from "react";

export function GallerySkeleton({
  label = "[GALLERY LOADING LABEL PLACEHOLDER]",
}: {
  label?: string;
}) {
  return (
    <div className="gallery-state gallery-state--skeleton" aria-busy="true">
      <span className="sr-only">{label}</span>
      <div className="gallery-skeleton__media" />
      <div className="gallery-skeleton__copy">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function GalleryEmptyState({
  title = "[GALLERY TITLE PLACEHOLDER]",
  description = "[GALLERY DESCRIPTION PLACEHOLDER]",
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="gallery-state gallery-state--empty">
      <p className="k-meta">[GALLERY LABEL PLACEHOLDER]</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export function GalleryErrorState({
  description = "[GALLERY ERROR DESCRIPTION PLACEHOLDER]",
}: {
  description?: string;
}) {
  return (
    <div className="gallery-state gallery-state--error" role="alert">
      <p className="k-meta">[GALLERY ERROR LABEL PLACEHOLDER]</p>
      <p>{description}</p>
    </div>
  );
}

export function GalleryFallback({ children }: { children: ReactNode }) {
  return (
    <div className="gallery-state gallery-state--fallback">{children}</div>
  );
}
