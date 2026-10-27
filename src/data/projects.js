export const projects = [
  {
    "slug": "tiktok-shop",
    "caseStudyHref": "/work/tiktok-shop",
    "title": "TikTok Shop — Emotional Design Study",
    "kicker": "Thesis · National Institute of Technology Bandung · 2026",
    "year": "2026",
    "role": "UX Researcher & first author",
    "image": "/projects/tiktok-shop-cover.jpg",
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
    "caseStudyHref": "/work/kerjaku",
    "title": "KerjaKu Job-Seeking App",
    "kicker": "Self-initiated concept · Mobile app · 2026",
    "year": "2026",
    "role": "Product Designer, solo",
    "image": "/projects/kerjaku.jpg",
    "gallery": [
      {"src": "/projects/kerjaku/research.jpg", "alt": "KerjaKu research board: methods and the four patterns that set the scope.", "caption": "Research synthesis: methods and the four recurring patterns.", "width": 1440, "height": 1210},
      {"src": "/projects/kerjaku/user-flow.jpg", "alt": "KerjaKu user flow diagram across the application tracking screens.", "caption": "User flow before any interface detail.", "width": 1440, "height": 584},
      {"src": "/projects/kerjaku/final-screens.jpg", "alt": "KerjaKu final mobile screens shown together.", "caption": "Final screens, the ones that went into testing.", "width": 1440, "height": 1142},
      {"src": "/projects/kerjaku/usability-test.jpg", "alt": "KerjaKu usability test board reporting eight participants, a SUS score of 82 after three revisions and the interface changes made.", "caption": "Usability testing: eight participants, five tasks and the three revisions that followed.", "width": 1440, "height": 852}
    ],
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
    "caseStudyHref": "/work/lost-breakage",
    "title": "Lost & Breakage Management System",
    "kicker": "Roma Osteria and Bar · Operations and product design · 2026",
    "year": "2026",
    "role": "Lost & Breakage PIC: operations, research, UX and UI",
    "image": "/projects/lost.jpg",
    "gallery": [
      {"src": "/projects/lost-breakage/research-affinity.jpg", "alt": "Affinity map clustering staff notes from the pass, at close, at the retype and after the report.", "caption": "Research synthesis: notes grouped by the four stages where an incident stops being a record.", "width": 1440, "height": 575},
      {"src": "/projects/lost-breakage/personas.jpg", "alt": "Persona board for the lost and breakage PIC and service staff, with goals, frustrations and current workflow.", "caption": "Two personas in one loop: the PIC who owns the number, and the staff who own the moment.", "width": 1440, "height": 1529},
      {"src": "/projects/lost-breakage/user-flow.jpg", "alt": "Four-step mobile reporting flow: entry, category, detail, confirm.", "caption": "Report flow: four taps from any screen, with the item-not-in-catalogue edge case.", "width": 1440, "height": 436},
      {"src": "/projects/lost-breakage/final-ui.jpg", "alt": "Three mobile screens of the breakage report flow: category choice, detail entry and confirmation.", "caption": "Final UI: the three screens the report runs through.", "width": 1440, "height": 1080}
    ],
    "tags": [
      "Operations",
      "Product Design",
      "Design System"
    ],
    "summary": "I ran lost and breakage at Roma Osteria and Bar, then designed the system that deletes the retype: one record written at the pass, read by the manager review and the weekly cost view.",
    "details": "The job was two manual steps. Staff wrote incidents on a paper sheet at the pass when they remembered, and I retyped that sheet into Excel days later. Eleven rows were written in the week I audited, and six survived the retype. The loss was never unknown, it was recorded twice and reliable zero times. The design removes the second step: staff log in under thirty seconds where the break happens, and the manager review and the weekly cost view read from that same record.",
    "metrics": [
      {
        "label": "Pass sheet rows",
        "value": "11"
      },
      {
        "label": "Survived the retype",
        "value": "6"
      },
      {
        "label": "Manual steps",
        "value": "2 → 1"
      },
      {
        "label": "Entry point",
        "value": "Close → pass"
      }
    ],
    "case": {
      "context": "Roma Osteria and Bar runs a full service floor and a bar. An item leaves inventory four ways: breakage, spoilage, staff error and comps that never got charged. One paper sheet covered all four, hanging at the pass and filled in when someone remembered. At close I keyed that sheet into a workbook, and the workbook produced the monthly number. Staff forgot to write, and I sometimes never keyed in what had been written, so the workbook was always smaller than the week and nothing on the page showed which entries had gone.",
      "approach": [
        "Operated the log as the lost and breakage PIC: chased missing entries, retyped the paper sheet and published the monthly number.",
        "Ran staff conversations informally over months with servers, bar and kitchen staff, no scheduling and no survey, which is why people said plainly that they forget.",
        "Ran a double-entry audit: consecutive paper sheets compared against the workbook they became, counting how many rows a week started with and how many survived the retyping.",
        "Grouped 20 notes by the four stages where an incident stops being a record (at the pass, at close, at the retype, after the report) rather than by department.",
        "Designed three flows with a happy path and an edge case each: mobile report, desktop review, desktop analytics.",
        "Built a design system of 15 tokens and four components, with empty, loading, error and success treated as first-class screens.",
        "Prototyped the loop report, review, resolve, analytics, with the cause chip tuned to someone standing up mid-service."
      ],
      "deliverables": [
        "One record per incident, so the manager review and the weekly rollup read what staff entered and nothing is retyped.",
        "Mobile report flow in three screens (category, detail, confirmation): four taps, and the item name is the only keyboard moment.",
        "Desktop review queue with an incident detail view that keeps the decision panel next to the evidence.",
        "Analytics with cost trend, ranked items, cost by cause and resolution stats, plus CSV export for the accountant.",
        "Category and settings screen where the taxonomy driving every chart is defined.",
        "Design system: 15 colour tokens, a ten-step type scale, spacing and radius rules, four components and five constraints.",
        "Five-screen clickable prototype covering report, review, resolution and the updated week total."
      ],
      "findings": [
        "The record broke at the pass, not in the report. Everyone knew what broke and roughly how much, and nobody stopped service to write it down.",
        "Forgetting was rational. Nothing during service prompts a report, and at close the sheet competes with cleaning, cash-up and going home.",
        "The retype was where rows actually disappeared: eleven written in the week, six in the workbook, with nothing on the page flagging the gap.",
        "A row without a reporter, a shift and a cause is a number. It can be reported, it cannot be acted on as training, a supplier claim or maintenance.",
        "Everyone could name the top three items, glasses, plates and milk, in seconds. Nobody could give volume, shift or cause."
      ],
      "implications": [
        "Remove every field the system can stamp: shift, outlet and reporter come from the session.",
        "Frame accountability as review rather than punishment, otherwise nobody types a name.",
        "Keep the decision beside the evidence so the manager never navigates away to act.",
        "Treat the taxonomy as the product: six categories, each mapping to a different operational fix.",
        "Design empty, loading and error states with the same care as the happy path. A loss tool that looks broken is a tool nobody uses."
      ],
      "limits": "The system is designed, not shipped. The figures on the left are first-hand: I did this job, and the eleven-to-six row drop comes from the paper sheets and the workbook they became. Everything else is a goal a pilot has to prove, not a measured result: entry in under 30 seconds at the pass, capture of 90 percent or more against a weekly audit of twenty incidents, resolution under one day with a named reviewer, and IDR 1.2M a month identified and acted on. No POS integration, no inventory reconciliation and no production data.",
      "team": "Solo, in both roles. I owned the process at Roma Osteria and Bar and designed its replacement; the case study was built in Figma with Figma MCP. Colleague quotes are unattributed by role and cleaned for readability."
    }
  },
  {
    "slug": "metric-saas",
    "caseStudyHref": "/work/metric-saas",
    "title": "Metric SaaS Dashboard Template",
    "kicker": "Self-initiated concept · SaaS analytics · 2026",
    "year": "2026",
    "role": "Product Designer",
    "image": "/projects/metric.jpg",
    "gallery": [
      {"src": "/projects/metric-saas/overview.jpg", "alt": "Metric dashboard overview with four KPI cards, an MRR trend chart and a customer table, labelled as sample data.", "caption": "Overview: revenue, customers and retention in one weekly review. Concept data, no live integration.", "width": 1440, "height": 1080},
      {"src": "/projects/metric-saas/analytics.jpg", "alt": "Revenue analytics screen breaking the September MRR change into new, expansion, contraction and churn.", "caption": "Analytics detail: the September MRR movement explained by its parts.", "width": 1440, "height": 1140},
      {"src": "/projects/metric-saas/design-system.jpg", "alt": "Metric design system board with colour tokens, typography specimens and layout guidance.", "caption": "Design system foundations: colour tokens, type roles and layout rhythm.", "width": 1440, "height": 680}
    ],
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
    "slug": "event-management",
    "caseStudyHref": "/work/event-management",
    "title": "Event Management System for DPMPTSP West Java",
    "kicker": "DPMPTSP West Java Province · Web design · 2023",
    "year": "2023",
    "role": "UI/UX Designer",
    "image": "/projects/event-management.jpg",
    "tags": [
      "Web Design",
      "Prototype",
      "Forms"
    ],
    "summary": "Public site design for the provincial investment agency's events: agenda by session type, event listing, registration and one-on-one meeting requests.",
    "details": "The prototype covers the public side of an event management system: a homepage that leads with the day's agenda and the upcoming events, an event listing and detail page, the registration form, and login and register screens. The form collects what an investment agency actually filters delegates on, country, investment sector, company, position and purpose of visit, along with the participation type. Four directions were explored in the file, the fourth retired, with a component reference page holding the navbar, sticky navbar, footer and cards.",
    "metrics": [
      {
        "label": "Screens",
        "value": "6"
      },
      {
        "label": "Design iterations",
        "value": "4"
      },
      {
        "label": "Registration fields",
        "value": "10"
      },
      {
        "label": "Session types",
        "value": "8"
      }
    ],
    "case": {
      "context": "DPMPTSP West Java Province runs multi-day investment events with an agenda split across halls, one-on-one meetings, project presentations and an exhibition floor. The public site has to answer three questions for a delegate: what is on, how do I register, and who do I meet. The prototype designs that public surface.",
      "approach": [
        "Designed the public site as one reading path: homepage, event listing, event detail, registration, about, login.",
        "Built the agenda around session type rather than room, with eight categories (opening, industry, networking, one-on-one, ceremony, presentations, lunch, meetings), each carrying a time window and a hall.",
        "Designed the registration form around the fields the agency filters on: name, email, phone, address, position, company, country, investment sector, purpose of visit and participation type.",
        "Added a detailed schedule view with search and category filters across projects and organisations, so a delegate can find the counterpart, not only the slot.",
        "Explored four directions in one file and retired the fourth, keeping it visible for reference.",
        "Kept a component reference page with navbar, sticky navbar, footer, card, image and container blocks."
      ],
      "deliverables": [
        "Homepage with schedule overview, upcoming events, a four-step how it works, the registration form and the detailed schedule.",
        "Event listing and event detail screens.",
        "About, login and register screens.",
        "Component reference: navbar, sticky navbar, footer, cards, image and container blocks.",
        "Four design iterations in one file, with the discontinued direction left in place."
      ],
      "implications": [
        "Filter the agenda by what a delegate is doing, not by which room they are in.",
        "Ask for country and investment sector at registration, because that is what the agency matches meetings on.",
        "Keep the schedule searchable by project and organisation so the list answers who to meet, not just when."
      ],
      "limits": "Design prototype only. The file holds screens, a component reference and four iterations; there is no case-study narrative, no research record and no measured outcome. Event names, dates, session times and attendee figures in the mock are sample content, not live data."
    }
  },
  {
    "slug": "me-lia",
    "caseStudyHref": "/work/me-lia",
    "title": "Me+Lia — Storefront Redesign",
    "kicker": "WaitWhatWeb · Jul–Sep 2024",
    "year": "2024",
    "role": "UI/UX Designer",
    "image": "/projects/me-lia-cover.jpg",
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
    "caseStudyHref": "/work/warehouse",
    "title": "Dutra Parahyangan Warehouse",
    "kicker": "Capstone · PT Digitalkultur Indonesia · Jun 2025",
    "year": "2025",
    "role": "Front-end Developer",
    "image": "/projects/warehouse-cover.jpg",
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
    "caseStudyHref": "/work/waitwhatweb",
    "title": "WaitWhatWeb — Ten Client Brands",
    "kicker": "Agency · 2024",
    "year": "2024",
    "role": "UI/UX Designer & Front-end Developer",
    "image": "/projects/waitwhatweb-cover.jpg",
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
    "caseStudyHref": "/work/faza-architect",
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
    "details": "Design for FAZAFAIZAN ARCHITEKTÜR: a full-bleed hero of A-frame housing under the line Passionate, visionary, modern, architecture, then a Work index that filters by Home, Interior and Restaurant and sorts by position, alphabetical or random. Each card pairs a title with its category and building type, so Roastery WB reads as Commercial, Roastery Coffee rather than as another private house. Work, About and Contact sit in a three-item nav so the gallery stays the main surface.",
    "metrics": [
      {
        "label": "Screens",
        "value": "4"
      },
      {
        "label": "Gallery filters",
        "value": "3"
      },
      {
        "label": "Sort options",
        "value": "4"
      }
    ],
    "case": {
      "context": "An architecture studio needed a portfolio site whose interface felt like an extension of the studio's own work, with the gallery as the main surface rather than a marketing page.",
      "approach": [
        "Studied the studio's existing design language and carried it into the interface, including the uppercase wordmark and white type set over building photography.",
        "Built the hero as one full-bleed render with the studio's four-word statement, so the first screen is work rather than a paragraph about the studio.",
        "Scoped the Work page around filters that match how the studio talks about its own projects: Home, Interior, Restaurant.",
        "Added four sort orders (position, alphabetical in both directions, random) so a visitor can move through the index the way a printed portfolio is flipped.",
        "Paired every gallery card with its category and its building type, so a coffee roastery does not read as a private house."
      ],
      "deliverables": [
        "Home with the full-bleed hero and studio navigation.",
        "Work index with three filters, four sort orders and the project card layout.",
        "About page.",
        "Project detail pages."
      ]
    }
  },
  {
    "slug": "bellrock",
    "caseStudyHref": "/work/bellrock",
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
    "caseStudyHref": "/work/siliwangi",
    "title": "CV Siliwangi Nusantara Telecom",
    "kicker": "Freelance · Apr 2025",
    "year": "2025",
    "role": "Web Designer & Developer",
    "image": "/projects/siliwangi-signal.jpg",
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
    "caseStudyHref": "/work/myrt",
    "title": "MyRT Population Data App",
    "kicker": "Course & exploration project",
    "year": "2023",
    "role": "UI/UX Designer & mobile front-end developer",
    "image": "/projects/myrt-cover.jpg",
    "tags": [
      "Flutter",
      "Figma",
      "Mobile UX"
    ],
    "summary": "Neighbourhood population app with two roles: the RT head files reports and sees the resident data, the resident files their own.",
    "details": "MyRT replaces the paper book a neighbourhood head keeps. The app opens on a greeting that offers Data, List Tamu and Jadwal, and the report form asks for a title, a type and the body before Kirim Laporan. Eleven screens cover the two sides of it, the RT head and the resident, with login, register, email verification and password recovery sitting in front of both. The interface was designed in Figma with its own type and colour sheet, then implemented in Flutter.",
    "metrics": [
      {
        "label": "Screens",
        "value": "11"
      },
      {
        "label": "Roles",
        "value": "2"
      },
      {
        "label": "Sections",
        "value": "Data · Tamu · Jadwal"
      }
    ],
    "case": {
      "context": "Population data at the neighbourhood level is usually kept in a paper book, which makes reporting slow for the RT head and leaves residents with no way to file anything themselves.",
      "approach": [
        "Split the app by role rather than by feature, so the RT head and the resident get their own home, report and data screens instead of one screen with hidden controls.",
        "Kept the resident home to three entries (Data, List Tamu, Jadwal) so the app opens on the three things a neighbourhood actually asks about.",
        "Reduced the report form to a title, a type and a body, with a single Kirim Laporan action.",
        "Put login, register, email verification and password recovery in front of both roles.",
        "Designed the type and colour sheet in Figma before implementing the front end in Flutter."
      ],
      "deliverables": [
        "Eleven screens across the RT head and resident roles.",
        "Report flow with title, type and body.",
        "Data, guest list and schedule sections.",
        "Login, register, verify email and forgot password.",
        "Flutter front end."
      ],
      "limits": "Course and exploration project. The resident data in the screens is placeholder content, and the app was built as a student exercise rather than deployed for a real neighbourhood."
    }
  },
  {
    "slug": "woodcraft",
    "caseStudyHref": "/work/woodcraft",
    "title": "WoodCraft — House of Wood",
    "kicker": "UAS RPL · Software engineering final exam · 2023",
    "year": "2023",
    "role": "Brand and interface design, team of four",
    "image": "/projects/woodcraft.jpg",
    "tags": [
      "Branding",
      "Web Design",
      "PHP"
    ],
    "summary": "Brand and storefront for a fictional Bandung furniture house: a logo built from wood grain, a brown identity, and a site that sells default or custom pieces.",
    "details": "WoodCraft was the final exam for a software engineering course, built by a group of four. The work runs from the identity to the site: a glyph made of wood grain forming a house, a brown palette argued in the guidelines, typography rules and logo lockups, then the storefront, a home page with testimonials, a products index of finished rooms, about, contact, login, register and a cart. The front end is HTML, CSS and JavaScript, the back end PHP with MySQL, versioned in Git.",
    "metrics": [
      {
        "label": "Screens",
        "value": "8"
      },
      {
        "label": "Guideline pages",
        "value": "11"
      },
      {
        "label": "Team",
        "value": "4"
      },
      {
        "label": "Stack",
        "value": "JS · PHP · MySQL"
      }
    ],
    "case": {
      "context": "The course's final exam asked for a working web product with the brand work that goes with it. The team picked a fictional Bandung furniture company selling Indonesian wood, where a customer can order a default model or ask for one built to their own specification.",
      "approach": [
        "Wrote the brand guidelines first, logo, glyph, colour styles, typography and lockups, so the site had rules to follow instead of a mood.",
        "Built the glyph from wood grain forming the shape of a house, and set the identity in browns arguing warmth and stability rather than a luxury veneer.",
        "Laid the storefront out in the order a buyer moves: home with testimonials, our works, products, a chosen piece, then the cart and the account screens.",
        "Held the contact form, login and register inside the same header and footer so the site reads as one system rather than pages stitched together.",
        "Built it on HTML, CSS and JavaScript with a PHP back end and MySQL, versioned in Git across four people."
      ],
      "deliverables": [
        "Brand guidelines: glyph, logo, colour styles, typography and lockups.",
        "Home with testimonials, workshop and forest sections.",
        "Products index, product detail and cart.",
        "About, contact, login and register.",
        "Front end in HTML, CSS and JavaScript, back end in PHP with a MySQL database."
      ],
      "limits": "Final-exam group project for a software engineering course, built by four people. The company is fictional: the address, phone number, cart total and testimonials in the screens are placeholders."
    }
  },
  {
    "slug": "bni-redesign",
    "caseStudyHref": "/work/bni-redesign",
    "title": "BNI Mobile Banking Redesign",
    "kicker": "Course & exploration project",
    "year": "2023",
    "role": "UI/UX Designer · team project",
    "image": "/projects/bni-redesign-cover.jpg",
    "tags": [
      "Figma",
      "Gestalt",
      "Mobile UX"
    ],
    "summary": "Team redesign of the BNI mobile app: a login that offers biometric entry, and a home screen that separates actions from balances.",
    "details": "A team exercise that audited the BNI mobile app against Gestalt principles and rebuilt the screens in Figma. The redesign keeps the bank's identity and reorganises the home screen into blocks: greeting and account, the balance card, four quick actions (Send and Pay, Digital Wallet, Tarik Tunai, Lainnya), then income against expense and a promo slot. The five-item bottom bar stays, with the central QR action given its own weight. Login adds fingerprint entry beside the password field, and the flow extends to a customer care chat room and the registration steps.",
    "metrics": [
      {
        "label": "Redesigned screens",
        "value": "5"
      },
      {
        "label": "Quick actions",
        "value": "4"
      },
      {
        "label": "Bottom-bar items",
        "value": "5"
      }
    ],
    "case": {
      "context": "Mobile banking puts balances, promotions, quick actions and a five-item bottom bar on one screen. The grouping that should make it scannable is what the audit went looking for in the BNI app.",
      "approach": [
        "Audited the live app as a team against Gestalt principles, cataloguing where proximity, similarity and common region break down.",
        "Rebuilt login with User ID and password, a fingerprint shortcut alongside the button, and the existing recovery and support links kept where people already look for them.",
        "Reorganised the home screen into four blocks, greeting and account, balance card, quick actions, income against expense, so each block carries one kind of information.",
        "Kept the five-item bottom bar but gave the central QR action its own weight.",
        "Extended the flow with a customer care chat room and the registration steps."
      ],
      "deliverables": [
        "Login with biometric entry.",
        "Home dashboard with the balance card, four quick actions, income and expense, and the promo slot.",
        "Customer care chat room.",
        "Registration flow screens.",
        "Annotated Gestalt analysis of the original screens."
      ],
      "limits": "Team project for a course, and the redesign is a Figma proposal rather than a shipped BNI release. The account holder, balances and promo dates in the screens are placeholders from the mock."
    }
  },
  {
    "slug": "vino-vault",
    "caseStudyHref": "/work/vino-vault",
    "title": "Vino Vault",
    "kicker": "Software engineering course",
    "year": "2023",
    "role": "Designer & HTML/CSS implementer",
    "image": "/projects/vino-vault.jpg",
    "tags": [
      "PHP",
      "HTML",
      "CSS",
      "CRUD"
    ],
    "summary": "Wine inventory site in pure PHP: a storefront with search, an item form for the vault, and login and register screens.",
    "details": "Vino Vault is a course project built without a framework. The storefront opens on a hero over a grapevine illustration, a search field that leads into the catalogue, an About section explaining the vault, and a 3x3 card grid. Three tabs carry the product: Wines, Location and Inventory. The inventory tab is the working half, taking a name, type, quantity, price and description and submitting the item into the vault, with login and register alongside it.",
    "metrics": [
      {
        "label": "Screens",
        "value": "4"
      },
      {
        "label": "Item fields",
        "value": "5"
      },
      {
        "label": "Inventory tabs",
        "value": "3"
      }
    ],
    "case": {
      "context": "A software engineering course asked for a working CRUD system without a framework. The brief was a wine inventory a shop or distributor could use to add bottles, update quantities and read the stock back.",
      "approach": [
        "Designed the interface first, then implemented it in HTML and CSS against the PHP back end.",
        "Split the product into three tabs, Wines, Location and Inventory, so the entry form does not compete with the catalogue.",
        "Kept the item form to five fields: name, type, quantity, price and description.",
        "Built login and register as their own screens rather than overlays, because the course required session handling.",
        "Kept the data model small enough to stay readable."
      ],
      "deliverables": [
        "Storefront home with search and the product grid.",
        "Inventory form with the five fields and a submit action.",
        "Login and register screens.",
        "HTML and CSS implementation."
      ],
      "limits": "Course project. The card grid in the screenshots still carries placeholder titles and copy, and the photography is used for non-commercial coursework only."
    }
  },
  {
    "slug": "dramm",
    "caseStudyHref": "/work/dramm",
    "title": "DRAMM Whisky Product Site",
    "kicker": "Web development course",
    "year": "2023",
    "role": "Designer",
    "image": "/projects/dramm.jpg",
    "tags": [
      "Laravel",
      "CRUD",
      "E-commerce"
    ],
    "summary": "Whisky storefront and the store management behind it: a Laravel CRUD exercise with a catalogue, a product page and an admin table.",
    "details": "DRAMM is a whisky site built as a Laravel CRUD exercise. The storefront opens on a hero about whiskey production, lists three bottles (Monkey Shoulder, Glenfiddich 12, Johnnie Walker Black Label), adds a feature row for deals, a curated database, news and distillery locations, then runs a carousel and an FAQ before the footer. A product page carries a single bottle, and the admin side is a store manager: a form for store name, location and contact details, and a table of existing stores with edit and delete.",
    "metrics": [
      {
        "label": "Screens",
        "value": "3"
      },
      {
        "label": "Catalogue bottles",
        "value": "3"
      },
      {
        "label": "Admin actions",
        "value": "3"
      }
    ],
    "case": {
      "context": "A web development course project: a product site with both a customer-facing store and the management side behind it.",
      "approach": [
        "Designed the storefront and the store management as one system, so the catalogue the admin edits is the catalogue the shop shows.",
        "Built the landing page in blocks a visitor moves through: hero, product row, feature list, carousel, FAQ.",
        "Added a product detail page for a single bottle.",
        "Built the admin store manager as an add form plus a table with edit and delete, the CRUD half of the exercise."
      ],
      "deliverables": [
        "Storefront landing with the hero, a three-bottle catalogue, the feature row, carousel and FAQ.",
        "Product detail page.",
        "Store management screen with the add-store form and the existing-stores table."
      ],
      "limits": "Course exercise built in Laravel. The site carries a third-party credit line in its footer, so this entry documents the interface and the admin workflows, not the brand."
    }
  }
];
