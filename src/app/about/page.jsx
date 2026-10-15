"use client";

import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import SafeImage from "@/components/SafeImage";

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
          <SafeImage
            src='/banner-placeholder.jpg'
            alt='Banner'
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
            Bachelor's in Information System at ITENAS (expected 2026). I bridge
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

          <MotionP className='text-secondary leading-relaxed'>
            My background in fine dining taught me the importance of attention to
            detail and creating memorable experiences. Now I channel that same
            dedication into designing and developing digital solutions that
            truly serve users' needs.
          </MotionP>
        </MotionDiv>
      </div>
    </main>
  );
}
