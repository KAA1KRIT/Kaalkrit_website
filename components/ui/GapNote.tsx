/**
 * A documented content gap, shown in place of the content it blocks.
 *
 * The alternative — inventing an address, a roster or a statistic — is a
 * disqualifying failure, so the gap is stated without surfacing internal
 * source paths to visitors.
 */
export function GapNote({
  id,
  title,
  detail,
}: {
  /** Gap identifier from the specification, e.g. "G2". */
  id: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="border border-[var(--k-line)] border-l-2 border-l-[var(--k-signal)] bg-[var(--k-surface)] p-[var(--k-5)] rounded-[var(--k-radius)] max-w-[60ch]">
      <p className="k-meta text-[var(--k-signal)]">
        [UPDATE LABEL PLACEHOLDER] · {id}
      </p>
      <p className="mt-[var(--k-3)] text-[var(--k-text)] font-medium">
        {title}
      </p>
      <p className="mt-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]">
        {detail}
      </p>
    </div>
  );
}
