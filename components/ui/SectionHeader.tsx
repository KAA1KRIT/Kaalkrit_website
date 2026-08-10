import type { ReactNode } from 'react';

/**
 * Shared editorial section opener. The same rule and two-column hierarchy
 * keeps the long homepage readable without turning every section into a card.
 */
export function SectionHeader({
  eyebrow,
  heading,
  lede,
  headingLevel: Heading = 'h2',
  id,
  className = '',
  children,
}: {
  eyebrow: string;
  heading: string;
  lede?: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header className={`section-header ${className}`}>
      <div className="section-rule" aria-hidden="true" />
      <div className="section-header__grid">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <Heading id={id}>{heading}</Heading>
          {lede ? <p className="lede">{lede}</p> : null}
          {children}
        </div>
      </div>
    </header>
  );
}
