/**
 * A documented content gap, shown in place of the content it blocks.
 *
 * The alternative — inventing an address, a roster or a statistic — is a
 * disqualifying failure, so the gap is stated instead. Each note names the
 * gap ID from the specification and the file that closes it.
 */
export function GapNote({
  id,
  title,
  detail,
  action,
}: {
  /** Gap identifier from the specification, e.g. "G2". */
  id: string;
  title: string;
  detail: string;
  /** Where the gap is closed, e.g. "content/site.ts". */
  action?: string;
}) {
  return (
    <div className="border border-[var(--k-line)] border-l-2 border-l-[var(--k-signal)] bg-[var(--k-surface)] p-[var(--k-5)] rounded-[var(--k-radius)] max-w-[60ch]">
      <p className="k-meta text-[var(--k-signal)]">Content gap · {id}</p>
      <p className="mt-[var(--k-3)] text-[var(--k-text)] font-medium">{title}</p>
      <p className="mt-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]">{detail}</p>
      {action ? (
        <p className="k-meta mt-[var(--k-4)]">
          Resolved in <span className="text-[var(--k-text-muted)] normal-case tracking-normal">{action}</span>
        </p>
      ) : null}
    </div>
  );
}
