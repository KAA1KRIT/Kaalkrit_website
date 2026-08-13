import Image from 'next/image';

export function Wordmark({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={`wordmark ${className}`}>
      <Image
        src="/images/approved/logo_favicon.png"
        alt="KAALKRIT Drone and Aviation Club"
        width={675}
        height={616}
        priority={priority}
        className="wordmark__image"
      />
    </span>
  );
}
