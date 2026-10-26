import Image from "next/image";

/**
 * One tile in the work grid: cover on top, then the record in the site's mono
 * and display voice. The whole tile is the button, with the content above it
 * so the text stays selectable.
 */
export default function ProjectCard({ project, labels, onOpen }) {
  return (
    <article className='group relative flex flex-col border border-border bg-background transition-colors duration-200 hover:bg-surface'>
      <div className='aspect-video w-full overflow-hidden border-b border-border'>
        {project.image ? (
          <Image
            src={project.image}
            alt=''
            width={1600}
            height={900}
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='img-quiet h-full w-full object-cover'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#eceae4_0px,#eceae4_1px,transparent_1px,transparent_9px)]'>
            <span className='mono uppercase text-secondary'>{labels.noImage}</span>
          </div>
        )}
      </div>

      <div className='flex flex-1 flex-col p-5 md:p-6'>
        <p className='mono uppercase text-secondary'>{project.kicker}</p>
        <h2 className='mt-3 text-xl font-medium tracking-[-0.03em] md:text-2xl'>
          <span className='link-rule'>{project.title}</span>
        </h2>
        <p className='mt-3 line-clamp-3 text-sm leading-6 text-secondary'>{project.summary}</p>

        <dl className='mt-auto flex flex-wrap gap-x-8 gap-y-3 pt-6'>
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <dt className='mono text-secondary'>{metric.label}</dt>
              <dd className='mt-1 font-display text-base font-medium tabular-nums tracking-[-0.02em] text-primary'>
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className='mt-5 flex flex-wrap gap-1.5'>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className='tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        type='button'
        onClick={() => onOpen(project)}
        aria-label={`${labels.details}: ${project.title}`}
        className='absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary'
      />
    </article>
  );
}
