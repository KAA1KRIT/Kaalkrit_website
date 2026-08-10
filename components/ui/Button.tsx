import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-[var(--k-2)] min-h-[44px] rounded-[var(--k-radius)] ' +
  'font-medium text-[var(--k-t-small)] leading-none transition-colors duration-[var(--k-dur-fast)] ' +
  'ease-[var(--k-ease)] no-underline';

const variants: Record<Variant, string> = {
  primary: 'px-[var(--k-5)] bg-[var(--k-signal)] text-white hover:brightness-110',
  secondary:
    'px-[var(--k-5)] border border-[var(--k-line-strong)] text-[var(--k-text)] hover:border-[var(--k-signal)]',
  ghost:
    'text-[var(--k-text)] hover:text-[var(--k-signal)] underline decoration-transparent ' +
    'hover:decoration-current underline-offset-4',
};

export function Button({
  href,
  children,
  variant = 'secondary',
  className = '',
  trailing,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Rendered after the label — the ghost variant's arrow. */
  trailing?: ReactNode;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'children' | 'className'>) {
  const isExternal = href.startsWith('mailto:') || href.startsWith('http');
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    const isMailto = href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={classes}
        {...(isMailto ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
        {trailing}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {trailing}
    </Link>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="translate-y-px text-[0.9em]">
      →
    </span>
  );
}
