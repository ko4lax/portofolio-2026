"use client";

import Image from "next/image";
import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className='min-h-screen bg-background pt-24 pb-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'>
          <MotionH1 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
            Selected Work
          </MotionH1>
          <MotionP className='text-xl text-secondary max-w-2xl'>
            UX research, interface design and front-end builds — with the numbers
            behind each one.
          </MotionP>
        </MotionDiv>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <MotionDiv
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className='group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-200'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src={project.image}
                  alt=''
                  width={1600}
                  height={900}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <p className='text-xs uppercase tracking-widest text-secondary mb-2'>
                  {project.kicker}
                </p>
                <h3 className='text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200'>
                  {project.title}
                </h3>
                <MotionP className='text-secondary text-sm leading-relaxed mb-4 flex-grow'>
                  {project.summary}
                </MotionP>
                <dl className='flex flex-wrap gap-x-6 gap-y-1 mb-6'>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className='text-xs'>
                      <dt className='text-secondary'>{metric.label}</dt>
                      <dd className='font-semibold text-primary'>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-surface text-secondary border border-border rounded-full text-xs font-medium'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </main>
  );
}
