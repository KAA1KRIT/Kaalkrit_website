/**
 * One line of factual metadata in the utility face, separated by ticks.
 * Used under the hero and above every project feature.
 */
export function MetaLine({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`k-meta flex flex-wrap items-center gap-x-[var(--k-3)] gap-y-[var(--k-1)] ${className}`}
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-x-[var(--k-3)]">
          {index > 0 ? (
            <span aria-hidden="true" className="text-[var(--k-line-strong)]">
              /
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  );
}
