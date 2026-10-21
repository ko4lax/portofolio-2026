"use client";

import Image from "next/image";
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
      // Return focus to the card that opened the dialog.
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-[60] bg-black/60 p-4 flex items-center justify-center'
      onClick={onClose}>
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        className='w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background p-6 md:p-10'
        onClick={(event) => event.stopPropagation()}>
        <div className='flex justify-between gap-4 items-start'>
          <div>
            <p className='text-xs uppercase tracking-widest text-secondary'>{project.kicker}</p>
            <h2 id={titleId} className='text-3xl font-bold mt-2'>
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type='button'
            onClick={onClose}
            className='rounded-full border border-border px-3 py-1 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'>
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
