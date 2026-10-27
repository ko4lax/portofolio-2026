import { siteUrl } from "@/data/seo";

// Homepage sections remain anchors; only the dedicated case study has a new URL.
const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/work/me-lia", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap() {
  return routes.map(({ path, ...rest }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    ...rest,
  }));
}
