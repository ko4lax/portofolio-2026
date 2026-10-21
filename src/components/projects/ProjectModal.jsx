"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal({ project, labels, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={project.title}
      className='fixed inset-0 z-[60] bg-black/60 p-4 flex items-center justify-center'
      onClick={onClose}>
      <div
        className='w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background p-6 md:p-10'
        onClick={(event) => event.stopPropagation()}>
        <div className='flex justify-between gap-4 items-start'>
          <div>
            <p className='text-xs uppercase tracking-widest text-secondary'>{project.kicker}</p>
            <h2 className='text-3xl font-bold mt-2'>{project.title}</h2>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='rounded-full border border-border px-3 py-1 text-sm'>
            {labels.close}
          </button>
        </div>
        {project.image && (
          <Image
            src={project.image}
            alt=''
            width={1600}
            height={900}
            className='w-full aspect-video object-cover rounded-2xl mt-6'
          />
        )}
        <p className='text-secondary leading-relaxed mt-6'>{project.details}</p>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <div>
            <span className='block text-xs text-secondary'>{labels.role}</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span className='block text-xs text-secondary'>{labels.year}</span>
            <strong>{project.year}</strong>
          </div>
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span className='block text-xs text-secondary'>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
