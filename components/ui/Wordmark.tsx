import Image from "next/image";

const variantClass = {
  header: "wordmark--header",
  footer: "wordmark--footer",
  system: "wordmark--system",
} as const;

export function Wordmark({
  className = "",
  priority = false,
  variant = "header",
}: {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof variantClass;
}) {
  return (
    <span className={`wordmark ${variantClass[variant]} ${className}`.trim()}>
      <Image
        src="/brand/kaalkrit-logo.png"
        alt={variant === "header" ? "" : "KAALKRIT logo"}
        width={1536}
        height={1024}
        priority={priority}
        sizes={variant === "header" ? "168px" : "260px"}
      />
    </span>
  );
}
