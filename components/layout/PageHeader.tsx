import { MetaLine } from "@/components/ui/MetaLine";
import { Rule } from "@/components/ui/Rule";

/** The single h1 for an interior route. */
export function PageHeader({
  eyebrow,
  heading,
  lede,
  meta,
}: {
  eyebrow: string;
  heading: string;
  lede: string;
  meta?: string[];
}) {
  return (
    <header className="pt-[calc(68px+var(--k-9))] pb-[var(--k-8)]">
      <div className="k-container">
        <p className="k-meta">{eyebrow}</p>
        <h1 className="page-header__heading k-display mt-[var(--k-5)] text-[length:var(--k-t-hero)] leading-[1.02] max-w-[16ch] text-[var(--k-text)]">
          {heading}
        </h1>
        <p className="k-lede mt-[var(--k-6)]">{lede}</p>
        {meta ? <MetaLine className="mt-[var(--k-7)]" items={meta} /> : null}
        <Rule className="mt-[var(--k-7)]" />
      </div>
    </header>
  );
}
