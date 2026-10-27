import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { meLiaStages } from "../src/data/meLiaCaseStudy.mjs";

const base = new URL(process.argv[2] || "http://localhost:3111");
assert.ok(["127.0.0.1", "localhost", "[::1]", "www.nifnux.tech"].includes(base.hostname), "Use a local review server");
const response = await fetch(new URL("/work/me-lia", base));
assert.equal(response.status, 200, "Me+Lia route must return 200");
const html = await response.text();
const article = html.match(/<article\b[^>]*>[\s\S]*?<\/article>/)?.[0];
assert.ok(article, "Case study must render an article in server HTML");
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Page has one h1");
assert.match(article, /lang="en"/);
const ids = [...article.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Article IDs are unique");
const stageIds = ["problem-definition", "research", "user-flow", "wireframe", "prototype", "final-ui", "testing", "iteration"];
const sections = [...article.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(sections, stageIds, "All eight process sections render in order");
for (const id of stageIds) assert.ok(article.includes(`href="#${id}"`), `Contents links to ${id}`);
for (const match of article.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(match[1]), `Anchor #${match[1]} resolves`);
}
const plain = article.replace(/<[^>]*>/g, " ").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/\s+/g, " ");
for (const stage of meLiaStages) {
  assert.ok(plain.includes(stage.body), `SSR contains body: ${stage.id}`);
  assert.ok(plain.includes(stage.evidenceNote), `SSR contains evidence note: ${stage.id}`);
}
assert.doesNotMatch(article, /[A-Z]:[\\/]|figma\.com|<iframe\b/);
assert.match(article, /href="\/#projects"/);
assert.match(article, /href="\/#contact"/);
assert.match(html, /<link rel="canonical" href="https:\/\/www\.nifnux\.tech\/work\/me-lia"/);
for (const field of ["og:title", "og:description", "og:url", "og:image", "twitter:title", "twitter:description", "twitter:image"]) {
  const tag = html.match(new RegExp(`<meta (?:property|name)="${field}" content="([^"]+)"`));
  assert.ok(tag?.[1], `Metadata ${field} is populated`);
  if (field.endsWith(":image")) assert.ok(tag[1].endsWith("/projects/me-lia-cover.jpg"));
  if (field === "og:url") assert.equal(tag[1], "https://www.nifnux.tech/work/me-lia");
}
const sitemap = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemap.status, 200);
assert.deepEqual([...((await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g))].map((match) => match[1]).sort(), ["https://www.nifnux.tech", ...(await import(`data:text/javascript,${encodeURIComponent(await readFile(new URL("../src/data/projects.js", import.meta.url), "utf8"))}`)).projects.map((p) => `https://www.nifnux.tech/work/${p.slug}`)].sort());
for (const section of ["about", "projects", "contact"]) {
  const redirect = await fetch(new URL(`/${section}`, base), { redirect: "manual" });
  assert.equal(redirect.status, 308);
  assert.equal(new URL(redirect.headers.get("location"), base).pathname + new URL(redirect.headers.get("location"), base).hash, `/#${section}`);
}
const cover = await fetch(new URL("/projects/me-lia-cover.jpg", base));
assert.equal(cover.status, 200);
assert.match(cover.headers.get("content-type"), /^image\/jpeg/);
const bytes = Buffer.from(await cover.arrayBuffer());
assert.equal(bytes.readUInt16BE(0), 0xffd8);
assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9);
console.log("Me+Lia HTTP smoke passed: 8 SSR stages, native anchors, canonical/OG/Twitter, sitemap, redirects and JPEG response.");
