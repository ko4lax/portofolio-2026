import Image from "next/image";

export default function ProjectCard({ project, labels, onOpen }) {
  return (
    <article className='group relative flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all'>
      <div className='aspect-video overflow-hidden bg-neutral-100 flex items-center justify-center'>
        {project.image ? (
          <Image
            src={project.image}
            alt=''
            width={1600}
            height={900}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all'
          />
        ) : (
          <span className='text-sm uppercase tracking-widest text-secondary'>{labels.noImage}</span>
        )}
      </div>
      <div className='p-6 flex flex-col flex-grow'>
        <p className='text-xs uppercase tracking-widest text-secondary mb-2'>{project.kicker}</p>
        <h2 className='text-xl font-bold mb-3 group-hover:underline underline-offset-4 decoration-2'>
          {project.title}
        </h2>
        <p className='text-secondary text-sm leading-relaxed mb-4 flex-grow'>{project.summary}</p>
        <dl className='flex flex-wrap gap-x-6 gap-y-2'>
          {project.metrics.map((metric) => (
            <div key={metric.label} className='text-xs'>
              <dt className='text-secondary'>{metric.label}</dt>
              <dd className='font-semibold'>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <div className='flex flex-wrap gap-2 mt-5'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='px-3 py-1 bg-surface text-secondary border border-border rounded-full text-xs font-medium'>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        type='button'
        onClick={() => onOpen(project)}
        aria-label={`${labels.details}: ${project.title}`}
        className='absolute inset-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      />
    </article>
  );
}
