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
        src="/logo_favicon.png"
        alt="KAALKRIT"
        width={160}
        height={160}
        priority={priority}
        className="wordmark__image"
      />
    </span>
  );
}
