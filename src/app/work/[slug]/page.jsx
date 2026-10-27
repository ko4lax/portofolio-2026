import { notFound } from "next/navigation";
import ProjectCasePage from "@/components/projects/ProjectCasePage";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudyHref && project.slug !== "me-lia").map(({ slug }) => ({ slug }));
}

function findProject(slug) {
  const project = projects.find((entry) => entry.slug === slug && entry.caseStudyHref);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }) {
  const project = findProject((await params).slug);
  const url = `${siteUrl}${project.caseStudyHref}`;
  const image = { url: project.image, width: 1600, height: 900, alt: project.title };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title: project.title, description: project.summary, url, type: "article", images: [image] },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [image] },
  };
}

export default async function ProjectPage({ params }) {
  return <ProjectCasePage project={findProject((await params).slug)} />;
}
