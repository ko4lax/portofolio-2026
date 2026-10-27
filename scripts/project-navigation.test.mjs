import assert from "node:assert/strict";
import test from "node:test";

const base = new URL(process.env.PORTFOLIO_TEST_URL || "http://127.0.0.1:3111");
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname), "Use a local review server");

// Hash-only links on the case page strand readers away from home sections.
test("case-page global navigation targets homepage sections", async () => {
  const response = await fetch(new URL("/work/me-lia", base));
  assert.equal(response.status, 200);
  const nav = (await response.text()).match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav);
  for (const id of ["home", "about", "projects", "contact"]) {
    assert.ok(nav.includes(`href="/#${id}"`), `Global navigation returns to #${id} on the homepage`);
  }
  assert.match(nav, /<a(?=[^>]*href="\/#projects")(?=[^>]*aria-current="location")[^>]*>/);
});

// A real link enables keyboard navigation and opening the case in a new tab.
test("Me+Lia is a case-study link and other initial cards retain modal buttons", async () => {
  const response = await fetch(new URL("/", base));
  assert.equal(response.status, 200);
  const html = await response.text();
  const section = html.match(/<section\b[^>]*id="projects"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section);
  const cards = [...section.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
  assert.equal(cards.length, 9);
  const meLia = cards.find((card) => card.includes("Me+Lia"));
  assert.ok(meLia);
  assert.match(meLia, /<a(?=[^>]*href="\/work\/me-lia")(?=[^>]*aria-label="[^"]*Me\+Lia)[^>]*>/);
  assert.doesNotMatch(meLia, /<button\b/);
  for (const card of cards.filter((entry) => entry !== meLia)) {
    assert.match(card, /<button[^>]*aria-label="Project detail:/);
  }
  const nav = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
  for (const id of ["home", "about", "projects", "contact"]) {
    assert.ok(nav.includes(`href="#${id}"`), `Homepage keeps its native #${id} navigation`);
  }
});
