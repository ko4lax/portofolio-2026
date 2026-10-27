import assert from "node:assert/strict";
import test from "node:test";

// Missing/reordered anchors would break the page's process navigation.
test("exact process order, valid anchors and evidence notes", async () => {
  const { meLiaStages } = await import("../src/data/meLiaCaseStudy.mjs");
  assert.deepEqual(meLiaStages.map((stage) => stage.id), [
    "problem-definition", "research", "user-flow", "wireframe",
    "prototype", "final-ui", "testing", "iteration",
  ]);
  for (const stage of meLiaStages) {
    assert.ok(stage.title.trim() && stage.body.trim() && stage.evidenceNote.trim());
    assert.doesNotMatch(stage.body + stage.evidenceNote, /[A-Z]:[\\/]|\u2014/);
  }
});

// Recasting UEQ or priority-setting as a proven result would misrepresent the work.
test("evaluation and iteration preserve documented limits", async () => {
  const { meLiaStages } = await import("../src/data/meLiaCaseStudy.mjs");
  const testing = meLiaStages.find((stage) => stage.id === "testing");
  const iteration = meLiaStages.find((stage) => stage.id === "iteration");
  assert.match(testing.body, /User Experience Questionnaire/);
  assert.match(testing.body, /six scales/);
  assert.match(testing.body, /more than 30 respondents/);
  assert.match(testing.evidenceNote, /not.*task-based/i);
  assert.match(iteration.evidenceNote, /not.*document.*follow-up/i);
});
