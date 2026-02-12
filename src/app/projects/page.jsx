"use client";

import { MotionDiv, MotionH2, MotionP } from "@/components/motion";
import SafeImage from "@/components/SafeImage";

const projects = [
  {
    title: "FAZA ARCHITECT",
    description:
      "A project portfolio aimed at architecture that focuses on conveying a message for every work it has ever made. Focused on creating an UI that harmonized with the home design of the client's portfolio.",
    image: "/projects/faza-architect.jpg",
    tags: ["UI Design", "Portfolio", "Architecture"],
  },
  {
    title: "MyRT",
    description:
      "An innovative solution designed to facilitate population data management at the RT level. Mobile-based application that makes it easy for village heads to manage information about the population in their area.",
    image: "/projects/myrt.jpg",
    tags: ["Mobile App", "Data Management", "Community"],
  },
  {
    title: "Bellrock Artisan Coffee",
    description:
      "A digital transformation project for a specialty coffee brand, creating a robust online presence through website development. Responsible for crafting compelling landing pages, storefronts, and shaping the overall branding identity.",
    image: "/projects/bellrock.jpg",
    tags: ["Web Development", "E-commerce", "Branding"],
  },
  {
    title: "BNI Mobile Banking Re-Design",
    description:
      "A UI/UX redesign project for BNI Mobile Banking, analyzing shortcomings and implementing new designs that better meet Gestalt standards and principles.",
    image: "/projects/bni.jpg",
    tags: ["UI/UX Design", "Mobile Banking", "Fintech"],
  },
  {
    title: "Vino Vault",
    description:
      "A software engineering course project focused on pure PHP, HTML, CSS and CRUD operations. Responsible for the design and implementation of HTML and CSS.",
    image: "/projects/vino-vault.jpg",
    tags: ["PHP", "HTML", "CSS", "CRUD"],
  },
  {
    title: "DRAMM",
    description:
      "A web development information system course project focused on Laravel CRUD operations. Responsible for the design aspects of the project.",
    image: "/projects/dramm.jpg",
    tags: ["Laravel", "Web Development", "Information System"],
  },
];

export default function Projects() {
  return (
    <div className='min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-5xl font-bold text-primary mb-12'>
          Projects
        </MotionH2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className='group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-200'>
              <div className='aspect-video overflow-hidden'>
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200'>
                  {project.title}
                </h3>
                <MotionP className='text-secondary text-sm leading-relaxed mb-6 flex-grow'>
                  {project.description}
                </MotionP>
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
    </div>
  );
}
