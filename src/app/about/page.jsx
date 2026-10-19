"use client";

import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/motion";
import Image from "next/image";

export default function About() {
  return (
    <main className='min-h-screen bg-background pt-24 pb-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Banner Image */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full flex justify-center mb-8'>
          <Image
            src='/images/banner.jpg'
            alt='Hanif portrait alongside Me+Lia and Bellrock storefront work'
            width={1600}
            height={640}
            sizes='(max-width: 768px) 100vw, 1024px'
            className='w-full max-w-5xl h-72 object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700'
          />
        </MotionDiv>

        {/* Location */}
        <div className='flex justify-end mb-12'>
          <span className='text-sm text-secondary font-medium px-4 py-2 bg-surface rounded-full border border-border'>
            📍 West Java, Indonesia
          </span>
        </div>

        {/* Intro Text */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-6 text-lg'>
          <MotionH1 className='text-4xl md:text-5xl font-bold text-primary mb-8'>
            Hi, I'm Hanif <span className='text-accent'>:)</span>
          </MotionH1>

          <MotionP className='text-secondary leading-relaxed'>
            I'm a UI/UX Designer & Front-end Developer, currently finishing my
            Bachelor's in Information System at ITENAS (expected Oct 2026). I bridge
            the gap between complex functionality and intuitive design — and I
            bring a rare mix: a background in luxury hospitality (The Ritz-
            Carlton Jakarta) and 4+ years of freelance + agency UI/UX work on
            10+ client brands.
          </MotionP>

          <MotionP className='text-secondary leading-relaxed'>
            I take products from UX research, wireframes and Figma prototypes
            through to responsive, production front-ends built with HTML, CSS,
            JavaScript, React, Next.js, WordPress, Shopify and Laravel — so design
            is handed off to real code, not left in a slide.
          </MotionP>

          <MotionP className='text-secondary leading-relaxed'>
            I ground decisions in research: user interviews, surveys (193+
            respondents), journey maps, personas, usability testing (UEQ) and
            PLS-SEM-validated instruments.
          </MotionP>

          <MotionDiv className='p-6 bg-surface border-l-4 border-accent rounded-r-xl'>
            <p className='text-primary font-medium italic'>
              "I believe great technology should be as welcoming as exceptional
              hospitality."
            </p>
          </MotionDiv>

          <MotionDiv className='mt-10 space-y-4'>
            <MotionH2 className='text-2xl font-bold text-primary'>Experience</MotionH2>
            <MotionP className='text-secondary leading-relaxed'>
              Senior UI/UX Designer & Front-end Developer at WaitWhatWeb
              (PT Stellar Kreavi Digital, Jul-Sep 2024, Bandung, on-site):
              designed UI/UX for 10 client brands across fashion, beauty, and
              food (Me+Lia, Brasov, MyRubylicious, Wingman Denim, Junkard Co,
              Nokha, Supergrain, Tragen, Trackerindo, Cartenz Tactical), delivered
              front-ends in WordPress, Laravel, React, and Shopify, and ran
              UEQ-based usability tests on 30+ respondents.
            </MotionP>
            <MotionP className='text-secondary leading-relaxed'>
              UI Designer & Front-end Developer at Digitalkultr (self-employed,
              May 2022-Present): end-to-end web and brand delivery for
              architecture (Faza Architect) and food-and-beverage (Bellrock)
              clients.
            </MotionP>
            <MotionP className='text-secondary leading-relaxed'>
              Server at The Union Group (Roma Osteria & Bar; Bistecca, Jan 2020-
              Jan 2021, Jakarta) and Buffet Waiter (internship) at The Ritz-
              Carlton Jakarta, Mega Kuningan (Jan-Jul 2019): luxury hospitality
              grounding in attention to detail, brand standards, and guest empathy.
            </MotionP>
          </MotionDiv>
          </MotionDiv>
      </div>
    </main>
  );
}
