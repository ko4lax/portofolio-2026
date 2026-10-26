// Header rail: a short scannable ledger that fills the right column of a
// section header. Label and value pairs, same ruled language as the case rows.
export default function FactRail({ rows }) {
  if (!rows?.length) return null;

  return (
    <dl className='border-t-2 border-primary'>
      {rows.map(([label, value]) => (
        <div
          key={label}
          className='grid gap-x-4 gap-y-1 border-b border-border py-3 sm:grid-cols-[7rem_1fr]'>
          <dt className='mono uppercase text-secondary'>{label}</dt>
          <dd className='text-[0.95rem] leading-6 text-primary'>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
