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
            With a few years of experience in the wine and spirit industry,{" "}
            <span className='italic text-primary'>
              I've developed a unique perspective on user experience.
            </span>
          </MotionP>

          <MotionP className='text-secondary leading-relaxed'>
            I'm currently pursuing a Bachelor's degree in Information System at
            ITENAS, focusing on UI/UX Design and Web Development.
          </MotionP>

          <MotionDiv className='p-6 bg-surface border-l-4 border-accent rounded-r-xl'>
            <p className='text-primary font-medium italic'>
              "I believe great technology should be as welcoming as exceptional
              hospitality."
            </p>
          </MotionDiv>

          <MotionP className='text-secondary leading-relaxed'>
            My background in fine dining has taught me the importance of
            attention to detail and creating memorable experiences. Now, I'm
            channeling that same dedication into designing and developing
            digital solutions that truly serve users' needs.
          </MotionP>

          <MotionP className='text-secondary leading-relaxed'>
            I'm proficient in React.js, CSS, and various UX design tools. My
            experience includes both technical certifications from HackerRank
            and practical knowledge in SEO and user experience design from
            Coursera.
          </MotionP>

          <MotionP className='text-secondary leading-relaxed'>
            Currently based in West Java, Indonesia, I'm actively working on
            expanding my skills in data structures, algorithms, and
            problem-solving while pursuing my degree at Institut Teknologi
            Nasional (ITENAS).
          </MotionP>
        </MotionDiv>
      </div>
    </main>
  );
}
