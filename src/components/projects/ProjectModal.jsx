"use client";

import Image from "next/image";
import MetaFrame from "@/components/MetaFrame";
import { useEffect, useId, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, labels, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Return focus to the entry that opened the panel.
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 md:p-8'
      onClick={onClose}>
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        className='max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background p-6 md:p-8'
        onClick={(event) => event.stopPropagation()}>
        <div className='flex items-start justify-between gap-6 border-b border-border pb-6'>
          <div>
            <p className='mono accent-text uppercase'>{project.kicker}</p>
            <h2 id={titleId} className='mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl'>
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type='button'
            onClick={onClose}
            className='mono shrink-0 border border-border px-3 py-1.5 text-secondary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-background'>
            {labels.close}
          </button>
        </div>

        {project.image && (
          <MetaFrame label={project.image.split("/").pop()} className='mt-8 pt-6'>
            <div className='frame aspect-video max-h-[24vh] w-full'>
              <Image
                src={project.image}
                alt=''
                width={1600}
                height={900}
                className='h-full w-full object-cover'
              />
            </div>
          </MetaFrame>
        )}

        <p className='measure mt-6 text-secondary leading-6'>{project.details}</p>

        <dl className='mt-8 flex flex-wrap border-t border-border'>
          <div className='min-w-[9rem] flex-1 border-b border-l border-border px-5 py-3.5'>
            <dt className='mono text-secondary'>{labels.role}</dt>
            <dd className='mt-1.5 font-display text-[0.95rem] font-medium tracking-[-0.02em] text-primary'>
              {project.role}
            </dd>
          </div>
          <div className='min-w-[9rem] flex-1 border-b border-l border-border px-5 py-3.5'>
            <dt className='mono text-secondary'>{labels.year}</dt>
            <dd className='mt-1.5 font-display text-[0.95rem] font-medium tabular-nums tracking-[-0.02em] text-primary'>
              {project.year}
            </dd>
          </div>
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className='min-w-[9rem] flex-1 border-b border-l border-border px-5 py-3.5'>
              <dt className='mono text-secondary'>{metric.label}</dt>
              <dd className='mt-1.5 font-display text-[0.95rem] font-medium tabular-nums tracking-[-0.02em] text-primary'>
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Case study. Only the rows a project actually has are rendered, so a
            course project stays short and the thesis carries the full record. */}
        {project.case && (
          <dl className='mt-12 border-t-2 border-primary'>
            {caseRows(project.case, labels).map((row) => (
              <div key={row.label} className='grid gap-x-8 gap-y-2 border-b border-border py-6 md:grid-cols-12'>
                <dt className='mono accent-text uppercase md:col-span-3'>{row.label}</dt>
                <dd className='md:col-span-9'>
                  {row.list ? (
                    <ul className='space-y-3'>
                      {row.list.map((item) => (
                        <li key={item} className='relative pl-6 text-secondary leading-6'>
                          <span
                            aria-hidden='true'
                            className='absolute left-0 top-[0.7em] h-px w-3 bg-primary'
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-secondary leading-6'>{row.text}</p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

function caseRows(study, labels) {
  return [
    { label: labels.context, text: study.context },
    { label: labels.approach, list: study.approach },
    { label: labels.deliverables, list: study.deliverables },
    { label: labels.findings, list: study.findings },
    { label: labels.implications, list: study.implications },
    { label: labels.limits, text: study.limits },
    { label: labels.team, text: study.team },
  ].filter((row) => (row.list ? row.list.length > 0 : Boolean(row.text)));
}
