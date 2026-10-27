import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/data/projects.js", import.meta.url), "utf8");
const { projects } = await import(`data:text/javascript,${encodeURIComponent(source)}`);

test("every documented project has a unique same-origin page destination", () => {
  assert.equal(projects.length, 16);
  for (const project of projects) assert.equal(project.caseStudyHref, `/work/${project.slug}`);
  assert.equal(new Set(projects.map((p) => p.caseStudyHref)).size, projects.length);
});

test("case section mapping preserves content and omits undocumented stages", async () => {
  const { projectCaseSections } = await import("../src/data/projectCaseSections.mjs");
  const items = ["A documented task"];
  assert.deepEqual(projectCaseSections({ context: "The brief", approach: items, findings: [], limits: "Not tested" }), [
    { id: "context", title: "Context and problem", body: "The brief" },
    { id: "approach", title: "Approach and process", items },
    { id: "limits", title: "Evidence and limits", body: "Not tested" },
  ]);
  assert.deepEqual(projectCaseSections({}), []);
  for (const project of projects) {
    const sections = projectCaseSections(project.case);
    assert.ok(sections.length >= 3, project.slug);
    assert.equal(new Set(sections.map((s) => s.id)).size, sections.length);
    assert.deepEqual(sections.flatMap((s) => s.items || [s.body]), Object.values(project.case).flat());
  }
});
