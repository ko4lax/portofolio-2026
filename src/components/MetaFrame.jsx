/**
 * An image frame drawn as if it were selected on a design canvas: four corner
 * handles and a label. The default label is the asset's own file name, so the
 * frame documents itself instead of carrying invented copy.
 */
export default function MetaFrame({ children, label, accent = "blue", className = "" }) {
  const handles = ["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -right-1", "-bottom-1 -left-1"];

  return (
    <div className={`relative ${className}`} data-accent={accent}>
      {children}
      {handles.map((position) => (
        <span key={position} aria-hidden='true' className={`handle ${position}`} />
      ))}
      {label && <span className='frame-label'>{label}</span>}
    </div>
  );
}
