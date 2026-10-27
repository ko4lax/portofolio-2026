import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";

const source = await readFile(new URL("../src/data/projects.js", import.meta.url), "utf8");
const { projects } = await import(`data:text/javascript,${encodeURIComponent(source)}`);
const base = new URL(process.argv[2] || "http://127.0.0.1:3111");
assert.ok(["127.0.0.1", "localhost", "[::1]", "www.nifnux.tech"].includes(base.hostname));
const plain = (html) => html.replace(/<[^>]*>/g, " ").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const results = [];
for (const project of projects) {
  const route = `/work/${project.slug}`;
  const response = await fetch(new URL(route, base), { headers: { "Cache-Control": "no-cache" }, signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${route} returns 200`);
  const html = await response.text();
  const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0];
  assert.ok(article, `${route}: server-rendered article`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, route);
  const text = plain(article);
  assert.ok(text.includes(project.title), route);
  assert.ok(text.includes(project.summary), route);
  assert.match(article, /lang="en"/);
  const ids = [...article.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, route);
  for (const anchor of article.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor[1]), `${route}: #${anchor[1]}`);
  if (project.slug !== "me-lia") {
    assert.ok(text.includes(project.details), `${route}: complete details`);
    for (const item of Object.values(project.case).flat()) assert.ok(text.includes(item), `${route}: preserved case content`);
  }
  if (project.gallery?.length) {
    const gallerySection = article.match(/<section[^>]*id="artefacts"[\s\S]*?<\/section>/)?.[0];
    assert.ok(gallerySection, `${route}: artefact section`);
    const figures = [...gallerySection.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map((m) => m[0]);
    assert.equal(figures.length, project.gallery.length, `${route}: artefact count`);
    for (const [index, figure] of figures.entries()) {
      const { alt, caption, src } = project.gallery[index];
      assert.ok(figure.includes(src) || figure.includes(encodeURIComponent(src)), `${route}: ${src}`);
      assert.ok(figure.includes(`alt="${alt.replace(/"/g, "&quot;")}"`), `${route}: alt text`);
      assert.ok(figure.includes(caption), `${route}: caption`);
    }
    assert.equal(article.match(/<h2[^>]*>Selected artefacts<\/h2>/g)?.length, 1, `${route}: gallery heading`);
  } else {
    assert.doesNotMatch(article, /Selected artefacts/, `${route}: no invented gallery`);
  }
  assert.ok(html.includes(`rel="canonical" href="https://www.nifnux.tech${route}"`), route);
  assert.ok(html.includes(`property="og:url" content="https://www.nifnux.tech${route}"`), route);
  for (const field of ["og:image", "twitter:image"]) {
    const tag = html.match(new RegExp(`<meta (?:property|name)="${field}" content="([^"]+)"`));
    assert.ok(tag?.[1].endsWith(project.image), `${route}: ${field}`);
  }
  assert.match(article, /href="\/#projects"/);
  assert.match(article, /href="\/#contact"/);
  results.push({ route, status: response.status, sourceContentPreserved: true });
}
const sitemap = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemap.status, 200);
const locations = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(locations.sort(), ["https://www.nifnux.tech", ...projects.map((p) => `https://www.nifnux.tech/work/${p.slug}`)].sort());
const missing = await fetch(new URL("/work/unknown-project", base));
assert.equal(missing.status, 404);
assert.equal(results.length, projects.length);
if (process.argv[3]) await writeFile(process.argv[3], JSON.stringify({ base: base.origin, results, sitemapUrls: locations.length, unknownRoute: missing.status }, null, 2));
console.log(`Project sweep passed: ${results.length}/${projects.length} routes, preserved source copy, unique canonicals, ${locations.length} sitemap URLs, unknown route 404.`);
