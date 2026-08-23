"use client";

import Link from "next/link";

export function GlobalErrorExperience({ reset }: { reset: () => void }) {
  return (
    <main className="system-state" aria-labelledby="global-error-heading">
      <div className="public-container system-state__inner">
        <p className="eyebrow">System state / unavailable</p>
        <h1 id="global-error-heading">
          The system could not complete that render.
        </h1>
        <p>Try the request again, or return to the KAALKRIT home experience.</p>
        <div className="not-found-experience__actions">
          <button
            type="button"
            className="button button--primary"
            onClick={reset}
          >
            Try again
          </button>
          <Link href="/" className="button button--secondary">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
