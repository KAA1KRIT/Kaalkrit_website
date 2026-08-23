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
        src="/images/approved/kaalkrit-emblem.png"
        alt="KAALKRIT"
        width={220}
        height={220}
        priority={priority}
        // The approved mark may be updated outside Next's generated image
        // cache, so serve it directly.
        unoptimized
        className="wordmark__image"
      />
    </span>
  );
}
