"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectsContent() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const labels =
    language === "id"
      ? {
          title: "Proyek Pilihan",
          intro:
            "Riset UX, desain antarmuka, dan frontend dengan detail di balik setiap karya.",
          close: "Tutup",
          role: "Peran",
          year: "Tahun",
          details: "Detail proyek",
          noImage: "Detail proyek",
        }
      : {
          title: "Selected Work",
          intro:
            "UX research, interface design, and frontend builds with the evidence behind each one.",
          close: "Close",
          role: "Role",
          year: "Year",
          details: "Project detail",
          noImage: "Project detail",
        };

  return (
    <main className='min-h-screen bg-background'>
      <div className='mx-auto max-w-shell px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-40'>
        <div className='reveal border-t-2 border-primary pt-8'>
          <h1 className='text-[12vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl'>
            {labels.title}
          </h1>
          <p className='measure mt-8 text-lg text-secondary'>{labels.intro}</p>
        </div>

        <div className='mt-20'>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={labels}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} labels={labels} onClose={closeModal} />}
    </main>
  );
}
