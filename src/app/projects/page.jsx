"use client";

import { MotionDiv, MotionH2, MotionP } from "@/components/motion";
import SafeImage from "@/components/SafeImage";

const projects = [
  {
    title: "Me+Lia — Redesign (Client, WaitWhatWeb)",
    description:
      "Redesigned Me+Lia, a Melbourne sustainable loungewear store, using user-centred design. Ran client interviews, built 2 user personas, a user journey map, a competitor + SWOT analysis, and 4 user flows from browsing to checkout. Produced brand guidelines and low-/high-fidelity Figma prototypes, then ran usability testing with UEQ on 30+ respondents; results showed a ~30% increase in user satisfaction and improved navigation comfort and visual appeal, with low/high-fidelity prototypes receiving positive feedback.",
    image: "/projects/me-lia.svg",
    tags: ["UI/UX Design", "E-commerce", "User Research", "Figma"],
  },
  {
    title: "Faza Architect — Portfolio UI",
    description:
      "Designed the UI for an architecture studio's portfolio site, mirroring the studio's own design language: a filterable, sortable project gallery, project detail pages and an About page.",
    image: "/projects/faza-architect.svg",
    tags: ["UI Design", "Portfolio", "Architecture"],
  },
  {
    title: "Bellrock Artisan Coffee — Landing Page + Storefront",
    description:
      "Took a formerly offline specialty coffee brand online: designed a compelling landing page, an online storefront and the overall brand identity.",
    image: "/projects/bellrock.svg",
    tags: ["Web Development", "E-commerce", "Branding"],
  },
  {
    title: "TikTok Shop — Emotional Design Study",
    description:
      "Mixed-methods UX study of TikTok Shop (Indonesia's leading social commerce app): a survey of 193 active users across 13 UX-Tips dimensions and 29 items, followed by 5 in-depth interviews. Validated the measurement model with PLS-SEM in SmartPLS 4 (outer loadings 0.731-0.919, AVE 0.645-0.835) and compared pragmatic vs hedonic UX with a Wilcoxon signed-rank test (p = 0.034). Mapped user emotion across 5 shopping touchpoints with the Self-Assessment Manikin and coded interviews with the Framework Method. Found the emotional peak at order status, and traced negative experiences to aesthetics and physical characteristics - concrete design recommendations. Accepted at JISICS. Five shopping touchpoints were rated with the Self-Assessment Manikin; qualitative interviews were coded with the Framework Method; resulting recommendations concentrated on strengthening the order-status moment and refining aesthetics and physical characteristics.",
    image: "/projects/tiktok-shop.svg",
    tags: ["UX Research", "Mixed Methods", "PLS-SEM", "Journal"],
  },
  {
    title: "Dutra Parahyangan Warehouse - Front-end (Capstone)",
    description:
      "Built the front end of a web-based warehouse management system (goods receiving, dispatch, inter-branch requests, returns, real-time stock monitoring). Implemented 27 screens across 12 modules in Next.js, plus PDF export and role-based access control. Turned Figma designs into a responsive UI from use case, ERD and activity diagrams, in a cross-functional team. Passed all 33 black-box test scenarios. Poster-verified features: tracking incoming/outgoing stock, inter-branch requests, returns, PPSM, real-time stock monitoring, and daily/weekly reporting.",
    image: "/projects/warehouse.svg",
    tags: ["Front-end", "Next.js", "Warehouse System"],
  },
  {
    title: "CV Siliwangi Nusantara Telecom - Company Profile",
    description:
      "Designed and built a company profile website for a telecom engineering contractor under a signed agreement, turning a 15-page printed profile into web pages in 8 days, with progress updates and post-launch support.",
    image: "/projects/siliwangi.svg",
    tags: ["Web Design", "Front-end", "Freelance"],
  },
  {
    title: "WaitWhatWeb — 9 Client Brands (E-commerce & Landing)",
    description:
      "During the WaitWhatWeb internship, delivered UI/UX design and front-ends (WordPress, Laravel, React, Shopify) for 9 brands: Brasov (beauty e-commerce), Supergrain (landing page), Junkard Co (rebrand), Me+Lia (redesign and UEQ usability study), Wingman Denim, MyRubylicious, Nokha, Tragen, Trackerindo, and Cartenz Tactical. Scope covered 6 homepage refreshes and 3 full redesigns.",
    image: "/projects/waitwhatweb.svg",
    tags: ["UI/UX Design", "E-commerce", "Multi-brand", "WordPress"],
  },
];

export default function Projects() {
  return (
    <div className='min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-5xl font-bold text-primary mb-12'>
          Projects
        </MotionH2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className='group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-200'>
              <div className='aspect-video overflow-hidden'>
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200'>
                  {project.title}
                </h3>
                <MotionP className='text-secondary text-sm leading-relaxed mb-6 flex-grow'>
                  {project.description}
                </MotionP>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-surface text-secondary border border-border rounded-full text-xs font-medium'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
