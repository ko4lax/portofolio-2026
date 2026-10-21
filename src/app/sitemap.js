import { siteUrl } from "@/data/seo";

const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, ...rest }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    ...rest,
  }));
}
