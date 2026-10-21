import Image from "next/image";

/**
 * One entry in the work index. Source order matches the original card
 * (media, context, then the written record); on wide screens the media moves
 * to the right column through grid placement, not an order override.
 */
export default function ProjectCard({ project, labels, onOpen }) {
  return (
    <article className='group relative grid grid-cols-1 gap-y-6 border-b border-border py-8 transition-colors duration-200 hover:bg-[#f2f2ef] md:grid-cols-12 md:gap-x-12 md:py-12'>
      <div className='md:col-span-3 md:col-start-10 md:row-start-1'>
        {project.image ? (
          <div className='frame aspect-video w-full'>
            <Image
              src={project.image}
              alt=''
              width={1600}
              height={900}
              sizes='(max-width: 768px) 100vw, 30vw'
              className='img-quiet h-full w-full object-cover'
            />
          </div>
        ) : (
          <div className='frame flex aspect-video w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#eceae4_0px,#eceae4_1px,transparent_1px,transparent_9px)]'>
            <span className='mono uppercase text-secondary'>{labels.noImage}</span>
          </div>
        )}
      </div>

      <div className='md:col-span-3 md:col-start-1 md:row-start-1'>
        <p className='mono uppercase text-secondary'>{project.kicker}</p>
      </div>

      <div className='md:col-span-6 md:col-start-4 md:row-start-1'>
        <h2 className='text-2xl font-medium tracking-[-0.03em] md:text-3xl'>
          <span className='link-rule'>{project.title}</span>
        </h2>
        <p className='measure mt-5 text-secondary'>{project.summary}</p>

        <dl className='mt-8 flex flex-wrap gap-x-10 gap-y-4'>
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className='mono text-secondary'>{metric.label}</dt>
              <dd className='mt-1.5 font-display text-xl font-medium tabular-nums tracking-[-0.02em] text-primary'>
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className='mt-8 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
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
