import { siteUrl } from "@/data/seo";
import { projects } from "@/data/projects";

// Homepage sections stay anchors; documented project destinations are real URLs.
const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  ...projects.filter((project) => project.caseStudyHref).map((project) => ({
    path: project.caseStudyHref,
    changeFrequency: "monthly",
    priority: 0.7,
  })),
];

export default function sitemap() {
  return routes.map(({ path, ...rest }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    ...rest,
  }));
}
