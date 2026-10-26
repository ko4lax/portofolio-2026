"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectsContent() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const closeModal = useCallback(() => setSelected(null), []);

  // Three rows of three by default; the rest are one click away.
  const visible = showAll ? projects : projects.slice(0, 9);

  const labels =
    language === "id"
      ? {
          title: "Proyek Pilihan",
          intro:
            "Riset UX, desain antarmuka, dan frontend dengan detail di balik setiap karya.",
          showAll: `Tampilkan semua ${projects.length} proyek`,
          showLess: "Tampilkan lebih sedikit",
          close: "Tutup",
          role: "Peran",
          year: "Tahun",
          details: "Detail proyek",
          noImage: "Detail proyek",
          context: "Konteks",
          approach: "Pendekatan",
          deliverables: "Hasil kerja",
          findings: "Apa kata data",
          implications: "Implikasi untuk desain",
          limits: "Ketelitian dan batasan",
          team: "Tim dan peran",
        }
      : {
          title: "Selected Work",
          intro:
            "UX research, interface design, and frontend builds with the evidence behind each one.",
          showAll: `Show all ${projects.length} projects`,
          showLess: "Show fewer",
          close: "Close",
          role: "Role",
          year: "Year",
          details: "Project detail",
          noImage: "Project detail",
          context: "Context",
          approach: "Approach",
          deliverables: "Deliverables",
          findings: "What the data said",
          implications: "What it means for design",
          limits: "Rigour and limits",
          team: "Team and role",
        };

  return (
    <section id='projects' className='border-t border-border bg-background'>
      <div className='mx-auto max-w-shell px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-24'>
        <div className='reveal border-t-2 border-primary pt-8'>
          <h2 className='text-[12vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl'>
            {labels.title}
          </h2>
          <p className='measure mt-8 text-lg text-secondary'>{labels.intro}</p>
        </div>

        <div className='mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={labels}
              onOpen={setSelected}
            />
          ))}
        </div>

        {projects.length > 9 && (
          <div className='mt-12 flex'>
            <button
              type='button'
              onClick={() => setShowAll((open) => !open)}
              className='btn-secondary'>
              {showAll ? labels.showLess : labels.showAll}
            </button>
          </div>
        )}
      </div>
      {selected && <ProjectModal project={selected} labels={labels} onClose={closeModal} />}
    </section>
  );
}
