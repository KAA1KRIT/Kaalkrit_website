import type { ReactNode } from 'react';

export function GallerySkeleton({ label = 'Loading media' }: { label?: string }) {
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
  title = 'Media documentation',
  description = 'Visual documentation will be shared when it is ready for publication.',
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="gallery-state gallery-state--empty">
      <p className="k-meta">Media archive</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export function GalleryErrorState({
  description = 'This media section could not be loaded. Please try again later.',
}: {
  description?: string;
}) {
  return (
    <div className="gallery-state gallery-state--error" role="alert">
      <p className="k-meta">Media unavailable</p>
      <p>{description}</p>
    </div>
  );
}

export function GalleryFallback({ children }: { children: ReactNode }) {
  return <div className="gallery-state gallery-state--fallback">{children}</div>;
}
