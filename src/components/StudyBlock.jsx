// One labelled row in the research dossier: a mono label in the left column,
// content in the right. Used by the research and case-study layouts.
export default function StudyBlock({ label, children }) {
  return (
    <div className='grid gap-x-12 gap-y-3 border-t border-border pt-6 lg:grid-cols-12'>
      <dt className='mono uppercase text-secondary lg:col-span-3'>{label}</dt>
      <dd className='lg:col-span-9'>{children}</dd>
    </div>
  );
}
