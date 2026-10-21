"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { publications } from "@/data/site";

// Citation ledger: one ruled row per publication, type in the left column.
export default function PublicationsList() {
  const { text } = useLanguage();

  return (
    <div className='mt-20'>
      <h3 className='mono uppercase text-secondary'>{text.home.publicationsTitle}</h3>
      <ul className='mt-6 border-t border-border'>
        {publications.map((publication) => (
          <li
            key={publication.title}
            className='grid gap-x-8 gap-y-3 border-b border-border py-6 md:grid-cols-12'>
            <p className='mono uppercase text-secondary md:col-span-3'>
              {text.home.pubTypes[publication.kind]}
            </p>
            <div className='md:col-span-9'>
              <p className='font-display text-lg leading-snug tracking-[-0.02em] text-primary'>
                {publication.title}
              </p>
              <p className='mono mt-3 text-secondary'>
                {publication.authors}. {publication.venue}. {publication.status}.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
