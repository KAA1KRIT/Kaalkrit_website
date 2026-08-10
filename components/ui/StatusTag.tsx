import type { ProjectStatus } from '@/lib/types';
import { statusLabel } from '@/content/projects';

/**
 * Status is never carried by colour alone — the dot is paired with the
 * label, and the label is the accessible content.
 */
export function StatusTag({ status }: { status: ProjectStatus }) {
  const live = status === 'in-development';

  return (
    <span className="k-meta inline-flex items-center gap-[var(--k-2)]">
      <span
        aria-hidden="true"
        className="inline-block size-[6px] rounded-[var(--k-radius-pill)]"
        style={{ background: live ? 'var(--k-live)' : 'var(--k-text-faint)' }}
      />
      {statusLabel[status]}
    </span>
  );
}
