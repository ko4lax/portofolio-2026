// src/data/projects.js
// Source of truth for the project cards.
// Every figure below is taken verbatim from the source documents:
//   Hanif_Nugraha_Portfolio.pdf (pp. 5-14), the ITENAS thesis, and the
//   Dutra Parahyangan capstone report. Nothing here is estimated.

export const projects = [
  {
    slug: "tiktok-shop",
    title: "TikTok Shop — Emotional Design Study",
    kicker: "Thesis · ITENAS 2026",
    year: "2026",
    role: "Researcher & first author",
    image: "/projects/tiktok-shop.jpg",
    tags: ["UX Research", "PLS-SEM", "Mixed Methods"],
    summary:
      "Validated a 13-dimension UX-Tips instrument with 193 Indonesian shoppers, then mapped emotion across five touchpoints of the app.",
    metrics: [
      { label: "Survey respondents", value: "193" },
      { label: "Interviews", value: "5" },
      { label: "Hedonic vs pragmatic", value: "5.49 vs 5.41 (p = 0.034)" },
    ],
  },
  {
    slug: "me-lia",
    title: "Me+Lia — Storefront Redesign",
    kicker: "WaitWhatWeb · Jul–Sep 2024",
    year: "2024",
    role: "UI/UX Designer",
    image: "/projects/me-lia.jpg",
    tags: ["User-Centred Design", "E-commerce", "Shopify"],
    summary:
      "Research-led redesign of a Melbourne sustainable loungewear store — personas, journey map, four flows, and a Shopify build tested with UEQ.",
    metrics: [
      { label: "UEQ respondents", value: "30+" },
      { label: "Satisfaction lift", value: "~30%" },
      { label: "Flows mapped", value: "4" },
    ],
  },
  {
    slug: "warehouse",
    title: "Dutra Parahyangan Warehouse",
    kicker: "Capstone · Jun 2025",
    year: "2025",
    role: "Front-end Developer",
    image: "/projects/warehouse.jpg",
    tags: ["Next.js", "Design System", "QA"],
    summary:
      "Warehouse management system for a logistics operator: 27 screens across 12 modules, built end to end in Next.js.",
    metrics: [
      { label: "Screens", value: "27" },
      { label: "Modules", value: "12" },
      { label: "Black-box scenarios", value: "33, all passed" },
    ],
  },
  {
    slug: "waitwhatweb",
    title: "WaitWhatWeb — Ten Client Brands",
    kicker: "Agency · 2024",
    year: "2024",
    role: "UI/UX Designer",
    image: "/projects/waitwhatweb.jpg",
    tags: ["Branding", "E-commerce", "Landing Pages"],
    summary:
      "Ten brands in three months across fashion, beauty and food — landing pages, storefronts and brand systems shipped under agency timelines.",
    metrics: [
      { label: "Brands", value: "10" },
      { label: "Duration", value: "3 months" },
    ],
  },
  {
    slug: "faza-architect",
    title: "Faza Architect — Portfolio UI",
    kicker: "Freelance",
    year: "2024",
    role: "UI/UX Designer",
    image: "/projects/faza-architect.jpg",
    tags: ["UI Design", "Portfolio", "Architecture"],
    summary:
      "Portfolio site for an architecture studio, mirroring their own design language: a filterable project gallery, detail pages and an About page.",
    metrics: [
      { label: "Deliverable", value: "Design system + site UI" },
    ],
  },
  {
    slug: "bellrock",
    title: "Bellrock Artisan Coffee — Storefront",
    kicker: "Freelance",
    year: "2024",
    role: "Designer & Front-end",
    image: "/projects/bellrock.jpg",
    tags: ["Branding", "Shopify", "Landing Page"],
    summary:
      "Took a formerly offline specialty coffee brand online: landing page, storefront and the full brand identity.",
    metrics: [
      { label: "Scope", value: "Brand + landing + storefront" },
    ],
  },
];

// Note: the seventh project currently on the site — CV Siliwangi Nusantara Telecom —
// has no artwork in any supplied document (the deck only describes it in text:
// a 15-page printed company profile turned into a company-profile website, 8 days,
// Apr 2025). Render it as a text-only card or drop it until a screenshot exists.
