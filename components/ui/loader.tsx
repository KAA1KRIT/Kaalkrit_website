type LoaderFourProps = {
  label?: string;
  className?: string;
};

export function LoaderFour({
  label = "Loading",
  className = "",
}: LoaderFourProps) {
  return (
    <span className={`loader-four ${className}`.trim()} role="status">
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="loader-four__frame">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span aria-hidden="true" className="loader-four__label">
        {label}
      </span>
    </span>
  );
}
