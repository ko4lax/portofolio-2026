import Image from "next/image";
import CaseStudyLinks from "@/components/projects/CaseStudyLinks";
import { projectCaseSections } from "@/data/projectCaseSections.mjs";

export default function ProjectCasePage({ project }) {
  const sections = projectCaseSections(project.case);

  return (
    <main className='mx-auto max-w-shell px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36'>
      <CaseStudyLinks placement='header' />
      <article lang='en' aria-labelledby='project-title'>
        <header className='mt-10 border-t-2 border-primary pt-8'>
          <p className='mono text-secondary'>{project.kicker}</p>
          <div className='mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-12'>
            <div className='lg:col-span-6'>
              <h1 id='project-title' className='text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>{project.title}</h1>
              <p className='measure mt-6 text-lg leading-8'>{project.summary}</p>
              <dl className='mt-8 grid grid-cols-2 gap-6 border-t border-border pt-5'>
                <div>
                  <dt className='mono text-secondary'>My role</dt>
                  <dd className='mt-2 text-sm'>{project.role}</dd>
                </div>
                <div>
                  <dt className='mono text-secondary'>Year</dt>
                  <dd className='mt-2 text-sm'>{project.year}</dd>
                </div>
              </dl>
            </div>
            <figure className='lg:col-span-6'>
              <div className='frame aspect-video'>
                <Image src={project.image} alt={`${project.title}, project overview`} width={1600} height={900} sizes='(max-width: 1024px) 100vw, 50vw' priority className='h-full w-full object-contain' />
              </div>
            </figure>
          </div>
          <dl className='my-10 grid gap-6 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-4'>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className='mono text-secondary'>{metric.label}</dt>
                <dd className='mt-2 font-display text-2xl font-medium tracking-[-0.03em]'>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className='measure mb-10 text-base leading-8 md:text-lg'>{project.details}</p>
        </header>

        <CaseStudyLinks placement='contents' sections={sections} />

        <div className='mt-4'>
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className='grid gap-5 border-b border-border py-10 md:py-14 lg:grid-cols-12 lg:gap-12'>
              <div className='lg:col-span-4'>
                <p aria-hidden='true' className='mono mb-4 text-secondary'>{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`${section.id}-title`} className='text-3xl font-medium leading-tight tracking-[-0.03em]'>{section.title}</h2>
              </div>
              <div className='lg:col-span-8'>
                {section.items ? (
                  <ul className='measure space-y-4'>
                    {section.items.map((item) => (
                      <li key={item} className='border-l-2 border-border pl-4 text-base leading-8'>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='measure text-base leading-8 md:text-lg'>{section.body}</p>
                )}
              </div>
            </section>
          ))}
        </div>

        {project.gallery?.length ? (
          <section id='artefacts' aria-labelledby='artefacts-title' className='border-b border-border py-10 md:py-14'>
            <div className='flex flex-wrap items-baseline justify-between gap-3'>
              <h2 id='artefacts-title' className='text-3xl font-medium leading-tight tracking-[-0.03em]'>Selected artefacts</h2>
              <p className='mono text-secondary'>Figma export</p>
            </div>
            <p className='measure mt-3 text-sm leading-7 text-secondary'>Each figure is exported from the original design file, not redrawn for this page.</p>
            <div className='mt-8 grid gap-8 md:grid-cols-2 md:gap-10'>
              {project.gallery.map((item) => (
                <figure key={item.src} className='flex flex-col'>
                  <div className='frame'>
                    <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes='(max-width: 768px) 100vw, 50vw' className='h-auto w-full object-contain' />
                  </div>
                  <figcaption className='mt-3 flex gap-3 text-sm leading-6 text-secondary'>
                    <span aria-hidden='true' className='mono shrink-0'>↳</span>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <footer className='mt-12 flex flex-wrap items-center justify-between gap-6 border-t-2 border-primary pt-8'>
          <CaseStudyLinks placement='header' />
          <CaseStudyLinks placement='footer' />
        </footer>
      </article>
    </main>
  );
}
