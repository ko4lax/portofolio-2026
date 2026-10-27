# Me+Lia Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an evidence-qualified eight-stage Me+Lia case study at `/work/me-lia`, retaining the approved project grid and covers.

**Architecture:** One static App Router page reads the existing Me+Lia project record and a narrowly scoped process-data module. A small translated link component uses the existing language context; the case body stays server-rendered English. One optional card destination and pathname-aware global navigation connect the page without changing other modals.

**Tech Stack:** Existing Next.js 15, React 19, JavaScript, Tailwind 3, next/image, next/link; native Node assertions/tests, no new dependencies.

**Spec:** `docs/superpowers/specs/2026-10-27-me-lia-case-study-design.md` (approved with `confirmed`).

## Global Constraints

- Exact route `/work/me-lia`; only the Me+Lia record gains `caseStudyHref: '/work/me-lia'`.
- Keep the approved cover `/projects/me-lia-cover.jpg`, all existing project copy, metrics and order, three-column grid and initial nine-card limit.
- Preserve other fifteen modals and existing `/about`, `/projects`, `/contact` redirects.
- English case body in both modes; new interface controls have English and Indonesian labels.
- No invented artefacts, prototype URL, scores, conversion uplift, end-user interview programme or completed post-iteration result.
- No new dependency, CMS, generic case-study framework, global restyle, embed, CSP relaxation or public source-PDF download.
- No private paths or personal details from the source PDF in rendered output. No new em dashes in prose.
- Windows/Git Bash; use `node.exe` rather than the problematic `node` wrapper for direct script execution. Foreground commands at most 120 seconds; long builds and review servers use managed background sessions.
- Read before editing; preserve unrelated untracked `.github/`, `.hermes/`, `notebooks/` and any subsequent user changes.
- Execute one item at a time. Report phase/item and verification, then wait for explicit `confirmed` before the next item. Plan approval does not authorise pushing master or deployment.

## Review Focus

1. Direct deep-link load without JavaScript must expose all eight stages, real contents anchors and metadata (Item 1 HTTP smoke).
2. Missing Figma/wireframe/retest evidence must not produce fake links, artefacts or outcome claims (Item 1 copy checks).
3. Route transitions must not leave global nav hashes pointing into the case page or retain stale observers on return home (Item 2 browser lifecycle test).
4. Replacing one card button with a link must retain keyboard access while other modals preserve focus/Escape and grid expansion (Item 2 interaction test).
5. Stored Indonesian language, narrow mobile width and fixed navbar must not produce blank labels, overflow or concealed section headings (Item 3 responsive/language test).

---

## File map

Create:
- `src/data/meLiaCaseStudy.mjs`: named export `meLiaStages`, array of eight `{id, title, body, evidenceNote}` records. Body and note are plain strings drawn from the reviewed draft; no metadata copied from the project record.
- `src/app/work/me-lia/page.jsx`: static server page, route metadata, project lookup, lead image, brief/metrics, contents and stage sections. Keep below 200 lines where practical.
- `src/components/projects/CaseStudyLinks.jsx`: small client-only translated navigation controls, export default `CaseStudyLinks({ placement })`, where placement is `header`, `contents` or `footer`; consumes useLanguage and meLiaStages. Header returns the home-project return link; contents returns labelled native stage links; footer returns the home-contact link. No browser-only content fetch.
- `scripts/me-lia.test.mjs`: native Node tests for stage data and fixed copy boundaries.
- `scripts/check-me-lia.mjs`: assert-based HTTP smoke check, first argument is base URL. Fetch actual rendered route, metadata, sitemap, images and old redirects, and check them without fetching external sites.

Modify:
- `src/data/projects.js`: Me+Lia destination only, in Item 2.
- `src/components/projects/ProjectCard.jsx`: link or button overlay, in Item 2.
- `src/components/Navbar.jsx`: pathname-aware navigation and observers, in Item 2.
- `src/app/sitemap.js`: add the new URL, in Item 1.

Inspection-only unless a specific failing check proves otherwise: ProjectsContent, ProjectModal, root layout, globals.css, SEO constants, package.json, check-assets.mjs. Existing `check:assets` detects the existing `/projects/` image path; no checker modification is needed. Browser smoke probes and before/after snapshots belong under `.hermes/artifacts/ux-process-enrichment/`, not product source.

### Task 1: Phase 2, Item 1: Build the directly accessible, evidence-qualified case page

**Interfaces:** Consumes existing project object with slug `me-lia`, project metrics, role, kicker, title and approved image; `siteUrl` from SEO module. Produces server route `/work/me-lia`, `meLiaStages` and `CaseStudyLinks({placement})` as defined above. Do not yet change card behaviour.

- [ ] Preflight: load execution/TDD skills, recheck Git state and spec, and establish an isolated feature workspace using the worktree skill if required. Snapshot parsed projects and approved-cover SHA-256 values before edits. Read the complete source draft and PDF Me+Lia spread before writing public copy.
- [ ] Write `scripts/me-lia.test.mjs` with the following stage-contract assertions. Use `node:test` and `node:assert/strict`; importing a missing data module must fail before implementing it.

```js
import assert from 'node:assert/strict';
import test from 'node:test';
import { meLiaStages } from '../src/data/meLiaCaseStudy.mjs';
test('exact process order, valid anchors and evidence notes', () => {
  assert.deepEqual(meLiaStages.map(s => s.id), [
    'problem-definition', 'research', 'user-flow', 'wireframe',
    'prototype', 'final-ui', 'testing', 'iteration'
  ]);
  for (const stage of meLiaStages) {
    assert.ok(stage.title.trim() && stage.body.trim() && stage.evidenceNote.trim());
    assert.doesNotMatch(stage.body + stage.evidenceNote, /[A-Z]:[\\/]|\u2014/);
  }
});
test('evaluation and iteration preserve documented limits', () => {
  const testing = meLiaStages.find(s => s.id === 'testing');
  const iteration = meLiaStages.find(s => s.id === 'iteration');
  assert.match(testing.body, /User Experience Questionnaire/);
  assert.match(testing.body, /six scales/);
  assert.match(testing.body, /more than 30 respondents/);
  assert.match(testing.evidenceNote, /not.*task-based/i);
  assert.match(iteration.evidenceNote, /not.*document.*follow-up/i);
});
```

- [ ] Run `node.exe --test scripts/me-lia.test.mjs`; require a meaningful missing-module failure before implementing the data.
- [ ] Implement eight data records using the source-qualified draft. Preserve the distinction between documented methods and unverified artefacts; testing and iteration must satisfy the wording constraints above without new claims.
- [ ] Write `scripts/check-me-lia.mjs` using native fetch/assert, taking `process.argv[2]` as base URL (default `http://localhost:3111`). Assert: case route HTTP 200, one h1, eight unique process IDs, all contents hrefs resolve, actual stage bodies occur in server HTML, canonical exactly `https://www.nifnux.tech/work/me-lia`, OG/Twitter image contains the approved cover filename, sitemap includes homepage plus case route, old redirects preserve exact locations and cover response decodes as an image response. No private paths or fictitious Figma link in the case article.
- [ ] Exercise the HTTP check against a baseline server before adding the route; require failure on the absent route (404). Start/stop servers through managed background sessions and record the session IDs.
- [ ] Implement the page, small translated controls and sitemap entry. Use native contents anchors and existing scroll padding, one h1 and eight h2 sections. Use `lang='en'` on the English article so the language switch does not mislabel its body. Show one public evidence/limits block, not internal filesystem source paths. No placeholder gallery or prototype CTA.
- [ ] Set route-specific title, description, canonical, Open Graph and Twitter fields from one title/description constant and the existing cover. Add only `/work/me-lia` to sitemap with monthly change frequency and priority 0.7; keep homepage unchanged.
- [ ] Run `node.exe --test scripts/me-lia.test.mjs`, `npm run lint`, `npm run check:assets`, `git diff --check`, full `npm run build`; require exit 0, case route in build table and prerender manifest. Start the new build locally and run `node.exe scripts/check-me-lia.mjs http://localhost:3111` to a clean exit.
- [ ] Compare project-data and cover snapshots: both identical because Item 1 does not yet change the project destination. Read rendered case copy against PDF pp. 08-09 and reviewed draft. Report the working local route and evidence limitations, review scoped diff, and make a small local commit only after verification. Stop for `confirmed` before Item 2.

### Task 2: Phase 2, Item 2: Connect the card and make global navigation work across routes

**Interfaces:** Consumes the working `/work/me-lia` route from Item 1. Produces optional project.caseStudyHref routing in ProjectCard; all other card props and `onOpen(project)` remain unchanged. Navbar uses `usePathname()` from next/navigation; only homepage links retain bare hashes.

- [ ] Obtain the explicit Item 1 `confirmed`; recheck tracked/untracked state before editing.
- [ ] Capture a failing browser check on the Item 1 build: Me+Lia is still a button and the case-page logo incorrectly targets a local `#home`. Record those expected failures before changing behaviour.
- [ ] Add `caseStudyHref: '/work/me-lia'` only to the Me+Lia record. In ProjectCard render a next/link anchor overlay for records with that destination, retaining the existing accessible name/focus styling; otherwise render the original button. Do not nest a button in a link or modify card content/layout.
- [ ] Update Navbar: pathname decides `#...` versus `/#...`; use explicit section IDs for active matching rather than slicing the href. Case route highlights Projects; home uses observer state. Re-run/clean up section observer and hash-arrival effects on pathname changes, reset stale active state on return, and initialise scrolled state on route changes. Keep mobile Escape, toggle focus and inert handling.
- [ ] Rebuild/run the Item 1 checks. In browser, tab to the Me+Lia link, activate it, verify exact pathname, header/footer/contents controls, then navigate to each home section and return to case. Verify Projects active on case and observer-based active nav after returning home. Test desktop and mobile logo/nav hrefs.
- [ ] On home, check exactly nine initial cards, show all `projects.length`, collapse to nine. Open one initially visible non-Me+Lia modal and one revealed card, test Tab cycling, Escape and focus restoration. Validate Me+Lia right-click/open-new-tab link semantics without introducing nested controls.
- [ ] Parsed project snapshot must differ only in Me+Lia.caseStudyHref; all cover hashes and existing copy/metrics/order must match. Lint/build/assets/diff checks pass. Review diff, create a scoped local commit after checks, report results, and stop for `confirmed` before Item 3.

### Task 3: Phase 3, Item 3: Responsive, language and regression review

**Interfaces:** Consumes the integrated local build; produces recorded verification evidence and a user-reviewable local page, not a deployment.

- [ ] Obtain explicit Item 2 `confirmed` and recheck the current diff. Run fresh native data tests, HTTP smoke, lint, asset checker and full production build; report real outputs and route table. Do not treat `Compiled successfully` alone as completion.
- [ ] At widths 1440, 1024 and 390, assert `document.documentElement.scrollWidth === innerWidth`, image naturalWidth > 0, all contents IDs unique/resolvable, stage targets clear fixed navbar after anchor activation, and visible keyboard focus. Capture screenshots for inspection, including a process section and the case footer.
- [ ] Switch via the real language control, then reload with stored `portfolio-language=id`; check translated return/contents/contact labels, unchanged English article with explicit lang, and no blank controls. Return to English. Repeat mobile menu Escape/inert checks after a cross-route round trip.
- [ ] Disable JavaScript in an isolated test context and request the case route directly; verify article/stages/native contents/return links remain usable. Re-enable JS or destroy the isolated context afterwards.
- [ ] Check canonical, OG, Twitter, sitemap, redirects and approved cover through the actual Next image optimiser. Review browser console/runtime errors and network failures related to the feature. Compare project/covers snapshots and manually re-audit new claims against sources.
- [ ] Obtain an independent final review of the scoped branch/diff, address actual important findings and rerun affected checks. Shut down only test processes started by this task. Record retrospective, checks and remaining artefact gaps in local project notes; do not expose local notes in the public page.
- [ ] Present local result and verification. Ask separately for remote publication approval. No push to master or Vercel production deployment under this plan approval alone.

## Plan self-review

Spec coverage: Item 1 owns all eight topics, source boundaries, server rendering, translated controls, metadata, sitemap and no-JS access. Item 2 owns card routing, global nav lifecycle, grid/modal preservation and data-diff allowlist. Item 3 owns viewport/language/keyboard regression, fresh complete build and independent review. Security/redirect/asset/source integrity checks are explicit in Items 1 and 3. The five Review Focus conditions each have a concrete check in their owning item. Interfaces and stage IDs match throughout.

Execution method approved by the user with `confirmed native`. Task status and rulings live in this plan's `.superpowers/sdd/2026-10-27-me-lia-case-study/progress.md` ledger. Execute the sequential confirmation gates above; do not interpret native execution as permission to batch ahead or publish remotely.
