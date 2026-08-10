/**
 * Wordmark-only identity. Documented gap G6 — no logo, mark or brand asset
 * exists, and none is invented. Archivo at width 112, weight 700, with a
 * single amber tick under the K.
 */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="font-[family-name:var(--font-display)] font-bold tracking-[0.02em] leading-none"
        style={{ fontStretch: '112%', fontVariationSettings: "'wdth' 112" }}
      >
        KAALKRIT
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 -bottom-[5px] block h-[2px] w-[0.62em] bg-[var(--k-signal)]"
      />
    </span>
  );
}
