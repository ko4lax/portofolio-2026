# Extend approved project pages and publish

User request: implement pages/routes for other suitable projects, then deploy. This extends the already approved Me+Lia presentation, not a new visual design. User explicitly requests completion and deployment in this task; the old per-item confirmation gates applied to the earlier Me+Lia-only plan.

## Scope and choice

All sixteen existing project records have context plus documented approach and deliverables/findings. Keep Me+Lia's bespoke eight-stage route and give the other fifteen records concise project pages using only their existing case fields. Do not promote every record into an eight-stage UX case study. Research remains research; concepts remain concepts; course work remains course work; warehouse credits remain frontend versus teammate UX/UI. Preserve all facts, limits, cover bytes and ordering.

Use /work/[slug] with static params for fifteen known slugs, dynamicParams=false and notFound for unknown slugs. The existing /work/me-lia route remains a static sibling and is excluded from dynamic params. Use the approved visual structure: role/year, cover, summary/details, metrics, real contents anchors and only nonempty case sections. Extend CaseStudyLinks with an explicit sections prop; its header/footer controls stay bilingual and the case body stays English. No new dependency or global restyle.

Add only caseStudyHref to the fifteen project records. All current cards become real links. Keep fallback modal code for a future record without a destination; do not delete unrelated components. Derive sitemap URLs from the actual published destinations. Unique per-page canonical/OG/Twitter metadata uses existing title/summary/cover. Preserve old redirects and security headers.

## Execution and tests

1. RED: write tests for nonempty section mapping, source-copy preservation and all project destinations. HTTP route sweep must observe existing 404s before route creation. Update old assertions that required other cards to remain buttons because the new user request supersedes that contract.
2. GREEN: implement fixed case-section mapping, shared server project-page body and statically generated dynamic route; supply explicit Me+Lia contents; add all destinations and sitemap entries. Run complete build/lint/assets/tests and sweep every route, metadata, exact source case text, anchors, unknown 404 and sitemap. Compare all parsed project fields except href with baseline and all cover hashes.
3. Browser: inspect every route at desktop/mobile with cover decoding, no overflow and valid anchors; test representative research/concept/client/course pages at 1024, bilingual controls, no-JS routes and grid 9/all/9. Record each result to JSON and assert the exact sixteen-route count. Independent read-only final diff review, address important findings with RED->GREEN, then commit.
4. Publication: user has requested the standard known Vercel production deploy (Tier 3, bounded to this portfolio). Worst case is broken public routes/links, not data destruction; rollback to the previous verified deployment or a clean archive of old master. Save old production identity first. Push the reviewed feature branch as a backup (pre-authorised non-main push), verify remote exact SHA, and deploy a clean tracked git-archive export with project linkage metadata only. No untracked .hermes, QA, notebooks, environment files or credentials in upload. Do not push master or mutate original untracked docs. Verify every live project URL and sitemap, home card links and representative optimised images before claiming live.

## Repository and permission notes

Continue in existing isolated feat/me-lia-case-study worktree. Original master remains untouched until explicit integration permission. Deployment from this verified feature branch is supported by the established portfolio workflow; report that branch state plainly. Deployment and git-backup-safety named skills are unavailable in this runtime; use the loaded portfolio deploy-and-verify reference and strict no-force, explicit staging and exact remote readback.
