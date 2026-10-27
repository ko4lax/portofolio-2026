import Image from "next/image";
import CaseStudyLinks from "@/components/projects/CaseStudyLinks";
import { projects } from "@/data/projects";
import { meLiaStages } from "@/data/meLiaCaseStudy.mjs";
import { siteUrl } from "@/data/seo";

const project = projects.find((entry) => entry.slug === "me-lia");
const title = "Me+Lia UX Case Study";
const description = "A user-centred storefront redesign, from the client brief and four shopping flows to responsive prototypes, Shopify setup and UEQ evaluation.";
const url = `${siteUrl}/work/me-lia`;
const image = { url: project.image, width: 1600, height: 900, alt: project.title };

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function MeLiaCaseStudyPage() {
  return (
    <main className='mx-auto max-w-shell px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36'>
      <CaseStudyLinks placement='header' />
      <article lang='en' aria-labelledby='case-study-title'>
        <header className='mt-10 border-t-2 border-primary pt-8'>
          <p className='mono text-secondary'>{project.kicker}</p>
          <div className='mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-12'>
            <div className='lg:col-span-6'>
              <h1 id='case-study-title' className='text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl'>
                {project.title}
              </h1>
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
                <Image
                  src={project.image}
                  alt='Me+Lia storefront redesign cover with examples of the shopping interface'
                  width={1600}
                  height={900}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  priority
                  className='h-full w-full object-contain'
                />
              </div>
              <figcaption className='mono mt-3 text-secondary'>Storefront design overview, not a live-store snapshot.</figcaption>
            </figure>
          </div>
          <dl className='my-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3'>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className='mono text-secondary'>{metric.label}</dt>
                <dd className='mt-2 font-display text-3xl font-medium tracking-[-0.03em]'>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <div className='mb-10 grid gap-4 lg:grid-cols-12 lg:gap-12'>
            <p className='mono text-primary lg:col-span-4'>The brief</p>
            <p className='measure leading-7 lg:col-span-8'>{project.case.context}</p>
          </div>
        </header>

        <CaseStudyLinks placement='contents' />

        <div className='mt-4'>
          {meLiaStages.map((stage, index) => (
            <section key={stage.id} id={stage.id} aria-labelledby={`${stage.id}-title`} className='grid gap-5 border-b border-border py-10 md:py-14 lg:grid-cols-12 lg:gap-12'>
              <div className='lg:col-span-4'>
                <p aria-hidden='true' className='mono mb-4 text-secondary'>{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`${stage.id}-title`} className='text-3xl font-medium leading-tight tracking-[-0.03em]'>{stage.title}</h2>
              </div>
              <div className='lg:col-span-8'>
                <p className='measure text-base leading-8 md:text-lg'>{stage.body}</p>
                <p className='measure mt-5 border-l-2 border-border pl-4 text-sm leading-6'>{stage.evidenceNote}</p>
              </div>
            </section>
          ))}
        </div>

        <aside aria-labelledby='evidence-scope-title' className='mt-12 grid gap-5 border border-border bg-surface p-6 md:p-8 lg:grid-cols-12 lg:gap-12'>
          <h2 id='evidence-scope-title' className='text-2xl font-medium leading-tight lg:col-span-4'>Evidence and limits</h2>
          <div className='space-y-4 lg:col-span-8'>
            <p className='measure text-sm leading-7'>This case study draws on the Me+Lia spread in Portfolio 2026, pages 08 and 09. It documents the client brief, design deliverables, Shopify theme setup and an evaluation that informed the next round.</p>
            <p className='measure text-sm leading-7'>Original flow diagrams, detailed wireframes, the prototype link and raw UEQ results are not attached here. No conversion uplift, task-completion improvement or post-iteration result is claimed.</p>
          </div>
        </aside>
        <footer className='mt-12 flex flex-wrap items-center justify-between gap-6 border-t-2 border-primary pt-8'>
          <CaseStudyLinks placement='header' />
          <CaseStudyLinks placement='footer' />
        </footer>
      </article>
    </main>
  );
}
