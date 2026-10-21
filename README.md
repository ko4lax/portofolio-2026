# portofolio-2026

Personal portfolio for Hanif Nugraha, UI/UX designer and front-end developer.
Live at <https://www.nifnux.tech>.

## Stack

- Next.js 15 (App Router, JavaScript)
- React 19
- Tailwind CSS 3
- react-icons

## Structure

- `src/app/` route files. They are server components: they export the per-route
  metadata and render the page content.
- `src/components/pages/` the page bodies. These are client components because
  they read the language context.
- `src/components/` navbar, social links, project card and project modal.
- `src/data/projects.js` the project list: slug, title, summary, details, metrics,
  tags and cover image.
- `src/data/site.js` contact details, social links, certifications, publications
  and the EN/ID copy.
- `src/data/seo.js` the canonical origin and the per-route metadata helper.
- `src/app/globals.css` design tokens, base styles and the CSS entrance motion.
- `public/` images and `resume.pdf`. Every cover is a 1600x900 JPEG under 200 KB.

## Commands

    npm install
    npm run dev           # http://localhost:3000
    npm run build         # production build, 9 static routes
    npm run start         # serve the production build
    npm run lint          # eslint .
    npm run check:assets  # fails if a page references a file that is not in public/

## Content rules

- Covers: 1600x900, JPEG or WebP, under 200 KB. The path goes in `image` in
  `src/data/projects.js`; leave it `null` for a card without artwork.
- Copy lives in `src/data/site.js` (EN and ID) and `src/data/projects.js`, not in
  the components.
- No em dashes in user-facing copy.
- Keep components under 200 lines, and keep data out of the markup.

## Deployment

Vercel builds `master` and serves <https://www.nifnux.tech> (the apex domain
redirects to `www`). `metadataBase` in `src/data/seo.js` has to match that origin,
otherwise canonical URLs and link previews point somewhere else.
