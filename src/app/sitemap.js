import { siteUrl } from "@/data/seo";

// Single-page site: the sections are anchors on "/", not separate URLs.
const routes = [{ path: "", changeFrequency: "monthly", priority: 1 }];

export default function sitemap() {
  return routes.map(({ path, ...rest }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    ...rest,
  }));
}
