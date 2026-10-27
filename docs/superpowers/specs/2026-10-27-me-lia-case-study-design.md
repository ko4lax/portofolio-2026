# Me+Lia dedicated case-study page

Status: approved by the user with `confirmed`; implementation plan next. Remote publication remains unapproved.

## Intent

Make the portfolio demonstrate the reasoning behind UI/UX work, not only finished cover art. The user selected approach A: a dedicated case-study page, starting with Me+Lia. Readers should understand the brief, the designer's contribution, the eight process stages and which results the evidence actually supports.

This is one scoped feature in the existing Next.js portfolio, not a site-wide redesign or a rewrite of all sixteen projects. The initial implementation stays local for review; pushing master and production deployment require separate explicit approval.

## Approaches considered

- A, selected by the user: dedicated case-study page. Shareable URL, room for process evidence, independent metadata and accessible document navigation. Requires a route, a card link, cross-route navigation and sitemap changes.
- B, not selected: enrich the current modal. Smaller change but retains a long scrolling dialog without its own URL.

## Goals

- Publish a local-review-ready page at `/work/me-lia`.
- Cover problem definition, research, user flow, wireframe, prototype, final UI, testing and iteration.
- Tie the narrative to the existing portfolio PDF and source project record; show limits clearly where the original artefact or exact result is missing.
- Keep the approved Me+Lia cover, compact three-column grid, initial nine-card limit and project order.
- Preserve the other fifteen project modals, existing homepage sections and published redirects.

## Non-goals and anti-goals

No new dependencies, CMS, schema engine, animation library, redesign, cover generation or framework upgrade. No blanket eight-stage completion claim for every project. Do not invent original wireframes, research quotes, user observations, prototype links, commercial results or a completed post-iteration study. Do not include private filesystem paths or personal information from the source document on the website.

## Content and evidence contract

Editorial input: `.hermes/artifacts/ux-process-enrichment/me-lia-process-draft.md`.
Primary source: the Me+Lia spread on printed pages 08/16 and 09/16 of `D:/Hanif_Nugraha_Portfolio.pdf`. Supporting record: `src/data/projects.js`, slug `me-lia`.

The original project Figma URL is not in the supplied portfolio index. Absence of that URL does not block an honest text-based case study, but a prototype launch button and detailed source-artifact galleries must be absent until verified sources are supplied. Do not render fake thumbnails or placeholder sections that pretend to be evidence.

The page includes all eight topics, without styling each as equally verified:

1. Problem definition: client brief, international storefront, sustainability values, product search/filter/checkout scope.
2. Research and requirements: client interview, mind map, competitor/SWOT work, two personas and a journey map. Do not recast client interviewing as a documented end-user interview study.
3. User flow: four documented browsing-to-checkout flows. Do not invent their exact names or recreate them as original project diagrams.
4. Wireframe: documented low-fidelity stage. State that original detailed wireframes/version history are not attached.
5. Prototype: high-fidelity Figma work for mobile, tablet and desktop. Do not claim individual interactions have been independently verified.
6. Final UI and delivery: brand guidelines, serif/sans pairing, storefront pages and Shopify theme setup. Reuse the approved cover as the lead image. The older existing storefront image may appear once as a labelled overview only if its readability is confirmed; it is not a substitute for stage artefacts.
7. Testing and evaluation: UEQ on six scales with more than 30 respondents. No exact sample size, scores, benchmark, task-success rate or sales uplift unless sourced. UEQ is not synonymous with task-based usability testing.
8. Iteration: evaluation informed next-round priorities. Clearly separate that documented priority-setting from unspecified revisions, shipping status and an unavailable retest.

Maintain existing English case-body convention in both language modes. Translate new interface labels and navigation controls into Indonesian. The case body may use English stage headings; the language switch must not leave new interface labels blank.

## Page and navigation behaviour

- Build a static App Router page `src/app/work/me-lia/page.jsx`, with server-rendered readable case content and route-specific metadata. A small client wrapper may supply the existing language context to interface controls; do not move all case content into a client-only fetch.
- Reuse existing typography, colour tokens, shell widths and hairline borders. One h1, then ordered h2 process sections; use native anchors as a compact contents list. No new global visual system.
- Lead with approved cover, title, brief, role, agency/date and existing project metrics. Use one source for project identity and metrics rather than copying them into multiple files.
- Each stage explains the documented work and its contribution to the process; evidence gaps remain explicit, not counted as achievements.
- Provide a visible `/#projects` return link and contact link `/#contact`. Contents links target real section IDs with fixed-nav clearance. Native links work without JavaScript.
- Add an optional `caseStudyHref: '/work/me-lia'` only to the Me+Lia project record. ProjectCard renders an actual link for this entry in place of its overlay button, retaining its accessible name and focus ring. Other entries continue to use their existing onOpen modal button. No nested interactive controls.
- The global Navbar currently lives in RootLayout and uses bare `#home`, `#about`, `#projects`, `#contact`. Make hrefs route-aware: on home keep the current hashes; off home use `/#...`. Use pathname-aware observer dependencies and teardown so returning home restores active-section tracking. The Projects item represents the case-study route; the logo returns to `/#home`. Keep mobile collapse/Escape/inert behaviour intact.

## Metadata, URLs and security

- Unique page title and description, canonical `${siteUrl}/work/me-lia`, Open Graph URL/image/title/description and Twitter preview fields. Use the approved local cover; retain the configured `www.nifnux.tech` origin.
- Add only the actual new case-study URL to `src/app/sitemap.js` alongside the homepage. Do not fabricate URLs for projects that still have only modals.
- Preserve `/about`, `/projects` and `/contact` redirects in `next.config.mjs`.
- No external embed, external script or CSP relaxation. No public PDF download is necessary for this initial version.

## Expected change reach

Read before editing and keep changes scoped to:
- New route shell and a small case-study content component if needed for readability.
- New narrowly scoped case-study data file for the eight stages, with internal source notes excluded from rendered UI. Do not build a generic renderer/schema for future projects.
- `src/data/projects.js`: add Me+Lia destination only, preserving existing facts, images, order and other records.
- `src/components/projects/ProjectCard.jsx`: optional real-link variant.
- `src/components/Navbar.jsx`: cross-route hrefs and lifecycle handling.
- `src/app/sitemap.js`: one new URL.
- Local regression/smoke verification following existing scripts and tools; no new testing dependency.

`ProjectsContent.jsx`, `ProjectModal.jsx`, root layout, CSS and global SEO constants are inspection dependencies, not expected edit targets unless verification proves a narrowly scoped need. Keep new components below 200 lines where practical. Preserve unrelated untracked `.github/`, `.hermes/` and `notebooks/` content.

## Verification and acceptance

1. Full production build exits 0, lists `/work/me-lia` and writes the prerender manifest; lint, asset checker and diff whitespace checks pass.
2. Direct route request returns 200 and contains the heading and all eight stage sections in server HTML. Section IDs are unique and every contents anchor resolves.
3. Me+Lia card is a keyboard-accessible link to the route; other project cards retain modal operation, Escape and focus restoration. Grid expands/collapses as before and preserves order and covers.
4. On desktop and mobile, logo/global nav/return/contact links reach the homepage sections. Navigating home restores observer behaviour; closed mobile links remain inert.
5. At 1440, 1024 and 390 px, no horizontal overflow, readable content and cover loading. Verify both interface languages and keyboard focus visibility.
6. Canonical, OG/Twitter fields and sitemap reference the exact new route; old redirects still work.
7. Compare project records against the pre-edit snapshot: only the intended Me+Lia destination may differ. Approved cover bytes and all existing project metrics/copy/order remain unchanged.
8. Audit new case copy against PDF pp. 08-09 and the source draft. No unsupported measured improvement, invented participant count, prototype URL, user quote or completed iteration claim.

## Remaining approvals and builder discretion

The user selected the dedicated-page approach and approved this specification with `confirmed`. The next gate is review of the implementation plan and selection of execution method. No additional question about route naming or code organisation is required; `/work/me-lia`, reuse of the existing visual system and a static first version are recorded builder choices.

The builder may choose small component boundaries and exact responsive spacing within the existing design tokens. Do not treat missing full-resolution stage artefacts as permission to fabricate them. Local review comes before remote publication.

## Review note

The read-only builder check returned `nothing important left` with no blocking questions. This checks planning completeness, not implementation correctness or approval of the historical project claims. The user subsequently approved the specification with `confirmed`. Implementation plan: `docs/superpowers/plans/2026-10-27-me-lia-case-study.md`. No application code has changed at this stage.
