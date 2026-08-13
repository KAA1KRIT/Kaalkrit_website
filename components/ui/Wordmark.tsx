import Image from 'next/image';

const variantClass = {
  header: 'wordmark--header',
  footer: 'wordmark--footer',
  system: 'wordmark--system',
} as const;

export function Wordmark({
  className = '',
  priority = false,
  variant = 'header',
}: {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof variantClass;
}) {
  return (
    <span className={`wordmark ${variantClass[variant]} ${className}`.trim()}>
      <Image
        src="/logo_favicon.jpg"
        alt="KAALKRIT"
        width={3020}
        height={1392}
        priority={priority}
        // The official mark is intentionally stable-named and may be replaced
        // during brand updates. Serve it directly so Next's image optimizer
        // cannot retain a stale derivative for the old artwork.
        unoptimized
        className="wordmark__image"
      />
    </span>
  );
}
