export const projects = [
  {
    "slug": "tiktok-shop",
    "title": "TikTok Shop — Emotional Design Study",
    "kicker": "Thesis · National Institute of Technology Bandung · 2026",
    "year": "2026",
    "role": "UX Researcher & first author",
    "image": "/projects/tiktok-shop.jpg",
    "tags": [
      "UX Research",
      "PLS-SEM",
      "Mixed Methods"
    ],
    "summary": "Validated a 13-dimension UX-Tips instrument with 193 Indonesian shoppers, then mapped emotion across five touchpoints of the app.",
    "details": "Designed a mixed-methods study with 193 active TikTok Shop users and five interviews. PLS-SEM showed outer loadings of 0.731–0.919 and AVE of 0.645–0.835. Hedonic UX was slightly higher than pragmatic UX (5.49 vs 5.41; p = 0.034; r = 0.152). Order status had the highest pleasure and arousal scores, while aesthetics and physical characteristics were the main negative-valence themes.",
    "metrics": [
      {
        "label": "Survey respondents",
        "value": "193"
      },
      {
        "label": "Interviews",
        "value": "5"
      },
      {
        "label": "UX-Tips dimensions",
        "value": "13"
      },
      {
        "label": "Hedonic vs pragmatic",
        "value": "5.49 vs 5.41"
      },
      {
        "label": "Order-status pleasure",
        "value": "8.4 / 9"
      }
    ],
    "case": {
      "context": "TikTok Shop merges short-video entertainment with checkout, and Indonesia is its second-largest market: $13.1B in sales and 515,000 active stores in 2025. Earlier Indonesian studies measured general service quality or comment sentiment, so emotion at specific touchpoints of the app had not been mapped.",
      "approach": [
        "Validated the UX-Tips instrument, 13 dimensions and 29 items on a 7-point scale, in a social-commerce setting.",
        "Surveyed 193 active TikTok Shop users and ran a PLS-SEM measurement model in SmartPLS 4.",
        "Compared pragmatic and hedonic UX with a Wilcoxon signed-rank test, then re-ran the comparison with equal weights as a robustness check.",
        "Interviewed five purposively selected participants, recording pleasure, arousal and dominance with the Self-Assessment Manikin at each touchpoint.",
        "Coded the interviews with the Framework Method into 41 rows and combined both strands in a joint display with pattern matching.",
        "Mapped the five touchpoints onto Norman's three levels of emotional design: homepage at visceral; search, add to cart and transaction at behavioural, with transaction also reflective; order status at reflective."
      ],
      "findings": [
        "All 13 dimensions scored above the midpoint, from utility 5.74 and efficiency 5.71 down to aesthetics 4.92 and physical characteristics 4.90.",
        "Hedonic UX 5.49 against pragmatic UX 5.41 across 184 pairs after 9 ties; r = 0.152, a small effect, p = 0.034.",
        "Emotion peaks at order status: the highest pleasure and arousal of any touchpoint for all five participants.",
        "Video reviews work as trust builders, and loyalty follows four motivations: task completion, platform habit, deal-seeking and habit-scrolling."
      ],
      "implications": [
        "Make order status transparent with granular tracking, a delivery map and a clear timeline.",
        "Design a separate response for each of the four loyalty motivations rather than one generic reward loop."
      ],
      "limits": "Outer loadings 0.731–0.919 and AVE 0.645–0.835, with 18 of 78 HTMT ratios above 0.85. The effect is small and an equal-weight check gives p = 0.064, so the pragmatic-hedonic difference is reported as a tendency rather than a settled result. Single coder, N = 5 interviews, and loyalty was not measured quantitatively, so no path claims are made.",
      "team": "First author. Study design, survey, interviews, analysis and writing, supervised by Sofia Umaroh and Asep Rizal Nurjaman."
    }
  },
  {
    "slug": "kerjaku",
    "title": "KerjaKu Job-Seeking App",
    "kicker": "Self-initiated concept · Mobile app · 2026",
    "year": "2026",
    "role": "Product Designer, solo",
    "image": "/projects/kerjaku.jpg",
    "tags": [
      "UX Research",
      "Mobile UX",
      "Usability Testing"
    ],
    "summary": "A job-application tracker for fresh graduates that answers the one question the existing platforms ignore: where does my application actually stand?",
    "details": "Fresh graduates send dozens of applications across several platforms and then lose track of what happened after the submit button. KerjaKu puts search, status tracking and feedback into one flow: what was sent, where it stands, and what to improve next. I ran 12 qualitative interviews, a 7-day diary study and a competitor audit of four platforms, then designed seven screens and tested the flow with eight participants across three revision rounds.",
    "metrics": [
      {
        "label": "Interviews",
        "value": "12"
      },
      {
        "label": "Usability participants",
        "value": "8"
      },
      {
        "label": "SUS after revisions",
        "value": "82"
      },
      {
        "label": "Average applications",
        "value": "47 / 3 months"
      }
    ],
    "case": {
      "context": "Indonesian fresh graduates apply through JobStreet, Glints, LinkedIn and Kalibrr at the same time, then re-enter every application into a spreadsheet. Roughly 47 applications in three months, and about one in five ever gets a reply. The research question was not how to find more listings but how to make the position of an existing application visible.",
      "approach": [
        "Ran 12 semi-structured interviews of 30 to 40 minutes with fresh graduates holding zero to one year of experience in Jabodetabek.",
        "Added a 7-day diary study with five participants who logged every application, reply and reaction.",
        "Audited JobStreet, Glints, LinkedIn and Kalibrr, focusing on the status flow and the feedback each platform gives.",
        "Clustered the findings into four patterns: unclear status, ghosting read as personal failure, double tracking, and listings that ignore the experience filter.",
        "Locked four design principles, then used them to cut the first prototype down from six tabs and a statistics dashboard to three core surfaces.",
        "Tested the flow with eight fresh graduates across five tasks per session, then revised terminology, list structure and the match score over three rounds."
      ],
      "deliverables": [
        "Application board that merges submissions from any platform into one status line: sent, seen, shortlisted, interview, done.",
        "Match score from 0 to 100 that always shows the criteria met and the criteria still missing.",
        "Weekly report on applications sent, replies received, and the skills rejected listings most often asked for.",
        "Per-listing CV variants with a completeness checklist before sending.",
        "Seven-screen interactive prototype, an icon set and a status mascot."
      ],
      "findings": [
        "Participants could always find listings. They could not answer where a given application stood.",
        "Of an average 47 applications, only about nine had a status the applicant could see.",
        "A rejection without a reason was read as personal failure rather than as usable information.",
        "The first prototype with six tabs made participants slower to find a status, so the navigation went back to three surfaces."
      ],
      "implications": [
        "Show the position of an application before showing another catalogue of listings.",
        "Attach one readable reason to every rejection, even a single skill gap.",
        "Skip streaks and catch-up nudges: anxiety is not a design fuel.",
        "Refresh status from email instead of asking the user to enter it twice."
      ],
      "limits": "Self-initiated concept, not a live product. The 12 interviews and the diary study are qualitative, so the four patterns are patterns rather than generalisable numbers. The usability round covered eight participants in moderated remote sessions: seven of eight completed the apply flow unaided, SUS rose from 68 in the first version to 82 after the third revision, and average time to find an application status was 12 seconds. The Figma case study is written in Indonesian; this summary is translated.",
      "team": "Solo project. Research, flows, interface, design system, prototype and usability testing."
    }
  },
  {
    "slug": "lost-breakage",
    "title": "Lost & Breakage Management System",
    "kicker": "Self-initiated concept · F&B operations · 2026",
    "year": "2026",
    "role": "Product Designer: research, UX, UI, design system",
    "image": "/projects/lost.jpg",
    "tags": [
      "UX Research",
      "Product Design",
      "Design System"
    ],
    "summary": "A mobile report flow and a desktop review queue that turn paper breakage logs into accountable loss data for multi-outlet F&B teams.",
    "details": "Restaurants and cafes lose an estimated 2 to 4 percent of revenue to breakage, spoilage and unrecorded comps, and most of it never gets written down. I designed two surfaces: a report flow staff can finish in under 30 seconds while the guest is still at the table, and a desktop queue where a manager triages, prices and resolves each incident. Six interviews and one Friday dinner service showed the barrier was friction at the moment of reporting, not awareness of the loss.",
    "metrics": [
      {
        "label": "Stakeholder interviews",
        "value": "6"
      },
      {
        "label": "Shift observation",
        "value": "4 hours"
      },
      {
        "label": "Report time, modelled",
        "value": "4 min → 28 s"
      },
      {
        "label": "Loss categories",
        "value": "6"
      }
    ],
    "case": {
      "context": "An 80-seat outlet loses stock four ways: breakage, spoilage, staff error and unrecorded comps. Three of the four are logged, if at all, on a paper shift sheet clipped to the pass and filled at close from memory. Industry benchmarks put the loss at 2 to 4 percent of revenue. None of the six interviewed outlets could name the top three items lost last month, and the delta surfaced three weeks later at monthly stock count.",
      "approach": [
        "Interviewed six stakeholders separately (two outlet managers, two shift supervisors, one server, one kitchen lead) so manager-led answers would not shape the rest.",
        "Shadowed four hours of a Friday dinner service at one 80-seat outlet, watching the pass and the closing count. The clipboard was touched eleven times and nobody opened the back-office POS report.",
        "Audited three existing tools: a generic inventory app, a POS breakage add-on and the spreadsheet still in use at two outlets.",
        "Grouped 47 observations into four clusters by the moment in the shift where the loss happens, then wrote the five insights that changed the brief.",
        "Designed three flows with a happy path and an edge case each: mobile report, desktop review, desktop analytics.",
        "Built a design system of 15 tokens and four components, with empty, loading, error and success designed as first-class screens.",
        "Prototyped the loop report, review, resolve, analytics, including a 120 ms cause-chip interaction tuned to a user who is standing up."
      ],
      "deliverables": [
        "Mobile report flow in three screens (category, detail, confirmation): four taps, and the item name is the only keyboard moment.",
        "Desktop review queue with an incident detail view that keeps the decision panel next to the evidence.",
        "Analytics with cost trend, ranked items, cost by cause and resolution stats, plus CSV export for the accountant.",
        "Category and settings screen where the taxonomy driving every chart is defined.",
        "Design system: 15 colour tokens, a ten-step type scale, spacing and radius rules, four components and five constraints.",
        "Five-screen clickable prototype covering report, review, resolution and the updated week total."
      ],
      "findings": [
        "Every participant could name the three items lost most often. None could put a number on them, so detection was never the problem.",
        "Staff avoided writing their name because they assumed the cost would come out of their pay. The field that made the data useful was the field that killed the entry.",
        "Half the loss had a cause the log never captured: a walk-in that ran warm on Fridays, deliveries that arrived short.",
        "Managers wanted a Monday conversation with one person about one item, not a chart review.",
        "Paper survived because it lived on the pass. Any tool on a back-office PC lost to it by default."
      ],
      "implications": [
        "Remove every field the system can stamp: shift, outlet and reporter come from the session.",
        "Frame accountability as review rather than punishment, otherwise nobody types a name.",
        "Keep the decision beside the evidence so the manager never navigates away to act.",
        "Treat the taxonomy as the product: six categories, each mapping to a different operational fix.",
        "Design empty, loading and error states with the same care as the happy path. A loss tool that looks broken is a tool nobody uses."
      ],
      "limits": "Self-initiated concept, not a shipped product. The improvement figures are modelled pilot targets, not measured outcomes: time to report 4 minutes to 28 seconds, incident capture 61 to 94 percent, resolution 3.2 days to 1.1 days, cost recovered from none to IDR 1.2M per outlet per month. The baseline comes from observation and interviews; the target column is a goal. No POS integration, no inventory reconciliation and no production data.",
      "team": "Solo project. Research, flows, wireframes, interface, design system and prototype, built in Figma with Figma MCP; Maze was planned for the pilot test."
    }
  },
  {
    "slug": "metric-saas",
    "title": "Metric SaaS Dashboard Template",
    "kicker": "Self-initiated concept · SaaS analytics · 2026",
    "year": "2026",
    "role": "Product Designer",
    "image": "/projects/metric.jpg",
    "tags": [
      "Dashboard",
      "Design System",
      "Prototype"
    ],
    "summary": "A SaaS revenue dashboard concept where every total can be explained: comparison period, signed movement, and an account list that never rewrites company numbers.",
    "details": "A dashboard template for SaaS teams to monitor growth, explain revenue changes and follow up on customer activity. Fictional users and sample data, with no interviews, no usability sessions and no impact claims. The concept is built around one review path (compare the month, explain the movement, narrow the accounts), and every screen keeps the reporting period visible so a stale snapshot cannot be read as a current result.",
    "metrics": [
      {
        "label": "Design tokens",
        "value": "28"
      },
      {
        "label": "Text styles",
        "value": "10"
      },
      {
        "label": "Product states",
        "value": "9"
      },
      {
        "label": "Research evidence",
        "value": "None, concept"
      }
    ],
    "case": {
      "context": "A small SaaS team reviews September before its weekly revenue meeting. The working assumption is that totals, customer context and event history live in separate views, so a growth number arrives without the explanation behind it. The scenario uses a fictional business: $120,000 opening MRR, $124,800 closing MRR, 1,248 paying customers and 98 percent logo retention.",
      "approach": [
        "Wrote three illustrative roles with the question each one brings: a founder who needs a defensible summary, revenue operations who needs the movement explained, and customer success who needs an account-level starting point.",
        "Scoped one review path in four steps: set the period, scan the business, explain the movement, narrow the accounts.",
        "Kept the reporting period and the comparison month beside every KPI so an old snapshot cannot pass as a current result.",
        "Separated logo retention from gross revenue retention and made the denominator part of the interface.",
        "Reconciled the monthly change from signed, labelled values: $7.2k new, plus $3.6k expansion, minus $2.4k contraction, minus $3.6k churn, against a $120,000 opening balance.",
        "Built the interface on 28 scoped variables and 10 text styles, with Manrope for hierarchy, Inter for copy and IBM Plex Mono for values and periods.",
        "Specified a finite-state prototype: two preset months, one plan filter and one sort toggle, with every unbuilt control labelled as out of scope."
      ],
      "deliverables": [
        "Desktop overview with four KPIs, a six-month MRR trend, plan mix, customer snapshot and recent activity.",
        "Revenue analytics view with closing MRR, signed movement categories, retention and the account table behind the numbers.",
        "A 390 px mobile overview that reflows the review order instead of shrinking the desktop table.",
        "Component set covering navigation, KPI card, charts, filters, search, status badges, table rows and data feedback states.",
        "Linked desktop and mobile demonstration with a written scope contract."
      ],
      "findings": [
        "A single total is not an explanation: the movement has to be signed, labelled and reconcilable to the opening balance.",
        "Table filters change what the table shows, never the company totals, and that boundary has to be visible on the screen.",
        "98 percent logo retention and 95 percent gross revenue retention answer different questions, so the denominator belongs in the interface.",
        "Muted text at 5.72:1 and teal at 6.07:1 clear contrast on white, but contrast checks alone do not prove end-to-end accessibility."
      ],
      "implications": [
        "Design the review path before the charts: period, business health, movement, accounts.",
        "Put the comparison period next to the KPI rather than in a filter row.",
        "Give an empty state a way back to the data instead of a zeroed axis."
      ],
      "limits": "Concept, not client work. Fictional users and synthetic sample data, with no interviews, usability sessions, telemetry or business-impact measurement, so the intended benefits remain hypotheses. Two preset months and one plan toggle only: free-text search, arbitrary date ranges, hover and loading transitions, keyboard focus behaviour and a full mobile analytics view are specifications rather than working controls.",
      "team": "Solo project. Scenario, roles, flows, wireframes, interface, design system and prototype."
    }
  },
  {
    "slug": "me-lia",
    "title": "Me+Lia — Storefront Redesign",
    "kicker": "WaitWhatWeb · Jul–Sep 2024",
    "year": "2024",
    "role": "UI/UX Designer",
    "image": "/projects/me-lia.jpg",
    "tags": [
      "User-Centred Design",
      "E-commerce",
      "Shopify"
    ],
    "summary": "Research-led redesign of a Melbourne sustainable loungewear store, from personas and journey mapping to responsive prototypes and testing.",
    "details": "Me+Lia is a Melbourne loungewear brand inspired by Bali, built on organic fabrics and small-batch production. The brief was a web store that feels intuitive and satisfying for a global audience and shows the brand's sustainability values. I ran the full user-centred design cycle across four phases and worked with the client at each step, then set up the Shopify theme.",
    "metrics": [
      {
        "label": "UEQ respondents",
        "value": "30+"
      },
      {
        "label": "User flows",
        "value": "4"
      },
      {
        "label": "Responsive breakpoints",
        "value": "3"
      }
    ],
    "case": {
      "context": "A Melbourne loungewear brand inspired by Bali, built on organic fabrics and small-batch production. The store had to feel intuitive and satisfying for a global audience while carrying the brand's sustainability values.",
      "approach": [
        "Understand the context: client interview and brief, problem and user-need identification, mind map, competitor and SWOT analysis.",
        "Specify requirements: two personas, Rula and Marvia, and a user journey map.",
        "Design solutions: four user flows from browsing to checkout, brand guidelines with a serif and sans type pairing, then low-fidelity and high-fidelity Figma prototypes.",
        "Evaluate: User Experience Questionnaire across six scales with more than 30 respondents, and the results set the priorities for the next design round."
      ],
      "deliverables": [
        "Brand guidelines and type system.",
        "Low-fidelity and high-fidelity Figma prototypes for mobile, tablet and desktop.",
        "Four user flows covering product search, filters and checkout.",
        "Shopify theme setup for the boutique and stockists, shop and brand pages."
      ],
      "findings": [
        "UX evaluated with the User Experience Questionnaire on six scales, more than 30 respondents.",
        "The evaluation round produced the priority list that drove the next design iteration."
      ]
    }
  },
  {
    "slug": "warehouse",
    "title": "Dutra Parahyangan Warehouse",
    "kicker": "Capstone · PT Digitalkultur Indonesia · Jun 2025",
    "year": "2025",
    "role": "Front-end Developer",
    "image": "/projects/warehouse.jpg",
    "tags": [
      "Next.js",
      "Design System",
      "QA"
    ],
    "summary": "Web-based warehouse management system for receiving, dispatch, returns, inter-branch requests, and real-time stock monitoring.",
    "details": "A spare-part warehouse ran on notebooks and Excel: stock was counted by hand and warehouse and supplier data drifted apart. We built a web-based warehouse management system for goods receiving, dispatch, inter-branch requests, returns and real-time stock monitoring. I turned the Figma designs into a responsive Next.js interface with PDF document export and role-based access control.",
    "metrics": [
      {
        "label": "Screens",
        "value": "27"
      },
      {
        "label": "Modules",
        "value": "12"
      },
      {
        "label": "Black-box scenarios",
        "value": "33/33 passed"
      },
      {
        "label": "Team members",
        "value": "4"
      }
    ],
    "case": {
      "context": "A spare-part warehouse ran on notebooks and Excel. Stock was counted by hand and warehouse and supplier data drifted apart, so the team needed one system for receiving, dispatch, returns and inter-branch requests.",
      "approach": [
        "Worked from the use case, ERD and activity diagrams produced by the system analyst.",
        "Turned the Figma designs into a responsive Next.js interface.",
        "Implemented PDF document export and role-based access control.",
        "Tracked work with Git and GitHub across a four-person team.",
        "Ran 33 black-box scenarios with valid and invalid input across login, dashboard, stock, delivery notes, work orders, purchase requests, PPSM, stock cards, role-based access and notifications."
      ],
      "deliverables": [
        "27 screens across 12 modules, including stock management, work orders, delivery notes with confirmation status and general delivery notes.",
        "Responsive front end with PDF export and role-based access control."
      ],
      "findings": [
        "All 33 black-box scenarios passed.",
        "Delivered as a capstone project with PT Digitalkultur Indonesia, June 2025."
      ],
      "team": "Team of 4: M. Rangga Prima (system analyst), M. Fajar Maulana Madani (UI/UX), Azriel Henock (back-end), Hanif Nahriya Nugraha (front-end)."
    }
  },
  {
    "slug": "waitwhatweb",
    "title": "WaitWhatWeb — Ten Client Brands",
    "kicker": "Agency · 2024",
    "year": "2024",
    "role": "UI/UX Designer & Front-end Developer",
    "image": "/projects/waitwhatweb.jpg",
    "tags": [
      "Branding",
      "E-commerce",
      "Landing Pages"
    ],
    "summary": "Delivered interface and brand work for ten fashion, beauty, and food brands during a three-month agency placement.",
    "details": "Ten client brands in three months during a UI/UX and front-end placement at WaitWhatWeb (PT Stellar Kreavi Digital), mostly e-commerce in fashion, beauty and food. Work ranged from a full user-centred redesign to homepage refreshes, component rework and rebrands, with front-end pages shipped in WordPress, Laravel, React and Shopify.",
    "metrics": [
      {
        "label": "Client brands",
        "value": "10"
      },
      {
        "label": "Duration",
        "value": "3 months"
      }
    ],
    "case": {
      "context": "A three-month internship at WaitWhatWeb (PT Stellar Kreavi Digital), designing UI/UX for ten client brands mostly in fashion, beauty and food, with the front-end pages for several of them.",
      "approach": [
        "Worked to each brand's own brief and stakeholder rules rather than one house style.",
        "Owned the Me+Lia storefront redesign end to end, from research to Shopify."
      ],
      "deliverables": [
        "Me+Lia: user-centred redesign.",
        "Nokha: fresher homepage and product updates.",
        "Brasov: grand design and prototype for a new beauty e-commerce site.",
        "Tragen: asset management for product updates and event-based homepages.",
        "Supergrain: first landing-page design, healthy-food theme.",
        "MyRubylicious: women's fashion e-commerce redesign, beyond tops.",
        "Trackerindo: redesign of several UI components to stakeholder needs.",
        "Junkard Co: rebrand for custom, traditionally made shoes.",
        "Cartenz Tactical: reworked homepage content under strict stakeholder rules.",
        "Wingman Denim: redesign for premium, traditionally made denim."
      ],
      "findings": [
        "Front-end pages delivered in WordPress, Laravel, React and Shopify."
      ]
    }
  },
  {
    "slug": "faza-architect",
    "title": "Faza Architect — Portfolio UI",
    "kicker": "Digitalkultr · Freelance",
    "year": "2024",
    "role": "UI/UX Designer",
    "image": "/projects/faza-architect.jpg",
    "tags": [
      "UI Design",
      "Portfolio",
      "Architecture"
    ],
    "summary": "Portfolio website UI shaped around an architecture studio's own visual language.",
    "details": "Architecture studio portfolio website for a Digitalkultr client, with the UI designed to mirror the studio's own design language: a filterable and sortable project gallery, project detail pages and an About page.",
    "metrics": [
      {
        "label": "Deliverable",
        "value": "Design system + site UI"
      }
    ],
    "case": {
      "context": "An architecture studio needed a portfolio site whose interface felt like an extension of the studio's own work.",
      "approach": [
        "Studied the studio's existing design language and carried it into the interface.",
        "Scoped the site around the project gallery as the primary surface."
      ],
      "deliverables": [
        "Filterable and sortable project gallery.",
        "Project detail pages.",
        "About page."
      ]
    }
  },
  {
    "slug": "bellrock",
    "title": "Bellrock Artisan Coffee — Storefront",
    "kicker": "Digitalkultr · Freelance",
    "year": "2024",
    "role": "Designer & Front-end Developer",
    "image": "/projects/bellrock.jpg",
    "tags": [
      "Branding",
      "Shopify",
      "Landing Page"
    ],
    "summary": "Brought an offline specialty coffee brand online through identity, landing pages, and storefront design.",
    "details": "Brand identity, landing pages and an online storefront for a formerly offline specialty coffee brand going digital, taken from requirements through high-fidelity design and delivery.",
    "metrics": [
      {
        "label": "Scope",
        "value": "Brand + landing + storefront"
      }
    ],
    "case": {
      "context": "A specialty coffee brand that had only sold offline needed a digital storefront and an identity that worked on screen.",
      "approach": [
        "Built the brand identity alongside the storefront rather than treating them as separate deliverables.",
        "Designed landing pages for the launch, then the store itself."
      ],
      "deliverables": [
        "Brand identity.",
        "Landing pages.",
        "Online storefront."
      ]
    }
  },
  {
    "slug": "siliwangi",
    "title": "CV Siliwangi Nusantara Telecom",
    "kicker": "Freelance · Apr 2025",
    "year": "2025",
    "role": "Web Designer & Developer",
    "image": null,
    "tags": [
      "Web Design",
      "Company Profile",
      "Delivery"
    ],
    "summary": "Company-profile website for a telecom engineering contractor, built from a 15-page printed profile.",
    "details": "A telecom engineering contractor had a 15-page printed company profile and no website. I designed and built the site under a signed agreement, translating the printed profile into web pages, with progress updates during the work and support after launch.",
    "metrics": [
      {
        "label": "Source material",
        "value": "15-page profile"
      },
      {
        "label": "Delivery",
        "value": "8 days"
      }
    ],
    "case": {
      "context": "A telecom engineering contractor with a 15-page printed profile and no web presence.",
      "approach": [
        "Worked under a signed agreement with defined scope.",
        "Translated the printed profile into a structured site rather than a page-for-page copy.",
        "Kept the client updated with progress reports through the build."
      ],
      "deliverables": [
        "Company-profile website.",
        "Post-launch support."
      ]
    }
  },
  {
    "slug": "myrt",
    "title": "MyRT Population Data App",
    "kicker": "Course & exploration project",
    "year": "2023",
    "role": "UI/UX Designer & mobile front-end developer",
    "image": null,
    "tags": [
      "Flutter",
      "Figma",
      "Mobile UX"
    ],
    "summary": "Mobile app concept for neighbourhood-level population data, residents, guests, schedules, and reports.",
    "details": "Designed the user experience and implemented the mobile front end in Flutter for a neighbourhood administration concept covering residents, guests, schedules and reports for the local head.",
    "metrics": [],
    "case": {
      "context": "Population data at the neighbourhood (RT) level is usually kept on paper, which makes reporting slow for the local head.",
      "approach": [
        "Designed the flows for residents, guests, schedules and reports.",
        "Implemented the mobile front end in Flutter."
      ],
      "deliverables": [
        "Mobile app UI.",
        "Flutter front end."
      ]
    }
  },
  {
    "slug": "bni-redesign",
    "title": "BNI Mobile Banking Redesign",
    "kicker": "Course & exploration project",
    "year": "2023",
    "role": "UI/UX Designer · team project",
    "image": null,
    "tags": [
      "Figma",
      "Gestalt",
      "Mobile UX"
    ],
    "summary": "Team analysis of where the BNI mobile banking interface breaks Gestalt principles, with proposals for a more organised design.",
    "details": "A team exercise analysing where the BNI mobile banking app breaks Gestalt principles, followed by proposals for a more organised visual and interaction structure in Figma.",
    "metrics": [],
    "case": {
      "context": "A team critique exercise using Gestalt principles to diagnose an existing mobile banking interface.",
      "approach": [
        "Audited the app as a team and catalogued where grouping, proximity and similarity break down.",
        "Proposed a more organised structure in Figma."
      ],
      "deliverables": [
        "Annotated analysis of the interface problems.",
        "Redesign proposals in Figma."
      ]
    }
  },
  {
    "slug": "vino-vault",
    "title": "Vino Vault",
    "kicker": "Software engineering course",
    "year": "2023",
    "role": "Designer & HTML/CSS implementer",
    "image": null,
    "tags": [
      "PHP",
      "HTML",
      "CSS",
      "CRUD"
    ],
    "summary": "Wine inventory system in pure PHP with CRUD features for a software engineering course.",
    "details": "A small wine inventory system built in pure PHP with create, read, update and delete workflows for a software engineering course. I designed the interface and implemented it in HTML and CSS.",
    "metrics": [],
    "case": {
      "context": "A software engineering course project asking for a working CRUD system without a framework.",
      "approach": [
        "Designed the interface first, then implemented it in HTML and CSS against the PHP back end.",
        "Kept the data model small enough to stay readable."
      ],
      "deliverables": [
        "Inventory UI.",
        "HTML and CSS implementation."
      ]
    }
  },
  {
    "slug": "dramm",
    "title": "DRAMM Whisky Product Site",
    "kicker": "Web development course",
    "year": "2023",
    "role": "Designer",
    "image": null,
    "tags": [
      "Laravel",
      "CRUD",
      "E-commerce"
    ],
    "summary": "Whisky product site with store and product management workflows.",
    "details": "A whisky product site with a store and product management, built as a Laravel CRUD course project, covering the product browsing experience and the admin workflows behind it.",
    "metrics": [],
    "case": {
      "context": "A web development course project: a product site with both a customer-facing store and the management side behind it.",
      "approach": [
        "Designed the storefront and the product management workflows as one system.",
        "Worked within the Laravel CRUD structure of the course."
      ],
      "deliverables": [
        "Product and store experience.",
        "Product management workflows."
      ]
    }
  }
];
