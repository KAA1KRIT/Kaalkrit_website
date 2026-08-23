const variantClass = {
  header: "wordmark--header",
  footer: "wordmark--footer",
  system: "wordmark--system",
} as const;

export function Wordmark({
  className = "",
  priority: _priority = false,
  variant = "header",
}: {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof variantClass;
}) {
  void _priority;
  return (
    <span className={`wordmark ${variantClass[variant]} ${className}`.trim()}>
      <span className="wordmark__text">KAALKRIT</span>
    </span>
  );
}
