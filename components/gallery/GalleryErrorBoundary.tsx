'use client';

import { Component, type ReactNode } from 'react';

type GalleryErrorBoundaryProps = {
  children: ReactNode;
  label: string;
};

type GalleryErrorBoundaryState = {
  hasError: boolean;
};

/** Keeps a non-critical media enhancement from taking down its page. */
export class GalleryErrorBoundary extends Component<GalleryErrorBoundaryProps, GalleryErrorBoundaryState> {
  state: GalleryErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): GalleryErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="gallery-state gallery-state--error" role="alert">
          <p className="k-meta">Media unavailable</p>
          <p>{this.props.label} could not be displayed right now.</p>
          <button type="button" className="button button--secondary" onClick={() => this.setState({ hasError: false })}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}
