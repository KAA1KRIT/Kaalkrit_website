export function MaskedHeading({
  children,
  id,
}: {
  children: string;
  id?: string;
}) {
  return (
    <h2 id={id} className="masked-heading" aria-label={children}>
      <span aria-hidden="true">{children}</span>
    </h2>
  );
}
