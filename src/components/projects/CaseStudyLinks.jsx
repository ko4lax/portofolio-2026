"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { meLiaStages } from "@/data/meLiaCaseStudy.mjs";

export default function CaseStudyLinks({ placement }) {
  const { language } = useLanguage();
  const labels = language === "id"
    ? { back: "Kembali ke proyek", contents: "Isi studi kasus", contact: "Diskusikan proyekmu" }
    : { back: "Back to selected work", contents: "In this case study", contact: "Discuss a project" };

  if (placement === "header") {
    return <a lang={language} href='/#projects' className='link-rule mono'>{labels.back}</a>;
  }

  if (placement === "contents") {
    return (
      <nav lang={language} aria-label={labels.contents} className='border-y border-border py-6'>
        <p className='mono mb-4 text-primary'>{labels.contents}</p>
        <ol className='grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4'>
          {meLiaStages.map((stage, index) => (
            <li key={stage.id}>
              <a href={`#${stage.id}`} className='link-rule flex items-baseline gap-3 text-sm'>
                <span aria-hidden='true' className='mono text-secondary'>{String(index + 1).padStart(2, "0")}</span>
                <span lang='en'>{stage.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return <a lang={language} href='/#contact' className='btn-primary'>{labels.contact}</a>;
}
