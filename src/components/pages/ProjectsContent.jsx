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
    <main className='min-h-screen bg-background pt-24 pb-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='reveal mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>{labels.title}</h1>
          <p className='text-xl text-secondary max-w-2xl'>{labels.intro}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
