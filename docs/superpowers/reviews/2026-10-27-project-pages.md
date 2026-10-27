# Project routes: final local QA and independent review

## Scope

Fifteen additional project pages extend the approved Me+Lia pattern. Total: sixteen project URLs. Static dynamic params exclude the bespoke Me+Lia route. Every current project card links to its page. Existing modal fallback remains untouched. Fixed nonempty case fields are presented as documented, not as invented eight-stage UX work. No dependency, cover, ordering, numeric, role, or source-copy changes; only fifteen caseStudyHref additions in project data.

## Execution evidence

- RED observed before implementation: new route-destination test fails, section-mapping module test fails, and /work/tiktok-shop returns 404.
- Complete production build exit 0, including final tracing and route table. Manifest independently asserts sixteen /work routes. Existing stale Browserslist database warning remains; no update attempted.
- Six native tests pass. npm run lint, npm run check:assets (20 referenced files) and git diff --check exit 0.
- HTTP sweep verifies sixteen 200 routes, one H1 and English article per route, complete original generic-page details/case copy, unique/resolvable anchor IDs, per-page canonical/OG/Twitter, seventeen sitemap URLs and unknown route 404.
- Separate Me+Lia smoke verifies its original eight SSR stages, anchors, metadata, old redirects and actual JPEG response.
- Parsed source preservation: sixteen project records equal baseline after allowing only page destinations; all twenty-two JPEG hashes unchanged.
- Browser: all sixteen routes at 1440 and 390, thirty-two successful records, decoded covers, no overflow, correct active Projects and native return links. Research/concept/client/course examples at 1024: tiktok-shop, kerjaku, metric-saas, siliwangi, dramm. Actual language toggle and stored reload verified, English article maintained, translated return/contents/contact controls present.
- The five representative routes plus Me+Lia work without JavaScript for SSR contents and native return. Expanded homepage links match all sixteen routes in source order. Keyboard Enter opens the last revealed DRAMM page; client history.back works. Grid expands 9 to 16 and collapses to 9. Browser records no runtime exceptions.
- Actual KerjaKu 1024 screenshot inspected: readable hierarchy, no overlap or clipping in visible content.

Local detailed JSON and probes are retained in .superpowers/sdd/2026-10-27-project-pages-and-deploy/, excluded from the production export.

## Independent final review

Review deleg_12d74e42, read-only, completed with APPROVE. Critical: none. Important: none. Minor: none requiring changes. Reviewer independently compared current versus committed project records excluding href, inspected all new route/body/mapping source and associated tests, and reviewed recorded browser/HTTP evidence. Reviewer did not rerun application code; runtime checks above were executed by the parent.

Approved dimensions: spec compliance, source-copy integrity, bounded reuse/no new dependencies, semantic article/links/heading/metric structures, static route/unknown 404 handling, per-project metadata, derived sitemap and recorded regression coverage. No fix pass required.

## Boundaries

This extends existing project records; it does not re-audit every historical research method or artifact. Original Event role/year provenance remains unresolved in the previous dataset. Concept/course/research limits and warehouse ownership are retained, not certified anew. Screen-reader output, browser engines other than Chromium, forced-colour/zoom behaviour, dependency security and unused modal runtime were not tested in this extension. The old Me+Lia report separately records its original modal tests before the new all-page requirement.

## Figma artefact galleries (same release)

KerjaKu, Lost & Breakage and Metric now carry a "Selected artefacts" section on their project pages: eleven images exported from the original Figma files with alt text and captions. KerjaKu gets research synthesis, user flow, final screens and the usability test board; Lost & Breakage gets the research affinity map, personas, report flow and final UI; Metric gets the overview, analytics detail and design system foundations.

Export path: Figma MCP `download_assets` on named frames, PNG at 1.5x, resized to 1440 px wide, JPEG quality 82, 935 KB total. Files live under public/projects/<slug>/. No image was redrawn, regenerated or invented, and projects without an accessible file carry no gallery.

Verified: unit test asserts gallery ownership, file existence and non-empty alt/caption; HTTP sweep asserts figure count, alt text, caption and single gallery heading per page, and asserts no gallery on the other thirteen routes; asset checker now resolves 31 references. Build, lint, browser sweep across all sixteen routes at 1440/390 pass with every image decoded, no overflow, and the 1024/bilingual/no-JS checks unaffected. Artefact images are lazy-loaded, so the browser probe scrolls each page before asserting decode. Section screenshot at 1440 inspected: two even columns, readable captions, nothing clipped.

Not judged: whether each board reflects the final historical state of the project, screen-reader output for long alt text, and alternate-engine rendering. Captions describe what the exported frame shows.

## Publication contract

Current user explicitly requested deployment. Back up reviewed feature branch without pushing master. Deploy a clean tracked Git export with only existing nonsecret Vercel linkage metadata added, not the worktree's untracked QA/notes/notebooks or any credential/environment files. Previous Ready production deployment is https://portofolio-2026-gssi79m3o-dreamvalians-projects.vercel.app; verified through Vercel inspect before deploy. Production is not claimed live by this local report; require all-live-route HTTP sweep and browser checks before the final completion statement. Exact deployed commit, new deployment URL and post-deploy verification belong in the publication handoff.
