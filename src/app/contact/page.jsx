"use client";

import { MotionDiv, motion } from "@/components/motion";
import { useState } from "react";

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const emailFull = "hanifnnugraha@gmail.com";

  const underlineVariants = {
    initial: { scaleX: 0, originX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textVariants = {
    initial: { y: 0 },
    hover: {
      y: -10,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center px-4 overflow-hidden'>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mb-16 text-center'>
        <span className='text-sm md:text-base font-bold tracking-[0.3em] text-accent uppercase'>
          Get in touch
        </span>
      </MotionDiv>

      <motion.a
        href={`mailto:${emailFull}`}
        className='group text-center relative max-w-full'
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}>
        <div className='flex flex-col items-center'>
          <div className='overflow-hidden py-2'>
            <motion.h2
              variants={textVariants}
              initial='initial'
              whileHover='hover'
              className='text-4xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-tight tracking-tighter'>
              hanifnnugraha
            </motion.h2>
          </div>
          <div className='overflow-hidden py-2'>
            <motion.h2
              variants={textVariants}
              initial='initial'
              whileHover='hover'
              className='text-4xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-tight tracking-tighter'>
              @gmail.com
            </motion.h2>
          </div>
        </div>

        <motion.div
          variants={underlineVariants}
          initial='initial'
          whileHover='hover'
          className='h-1 md:h-2 bg-accent absolute -bottom-4 left-0 right-0'
        />
      </motion.a>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='mt-24 text-center'>
        <p className='text-secondary text-lg md:text-xl font-medium'>
          Based in West Java, Indonesia · open to Jakarta
        </p>
        <div className='mt-4 flex items-center justify-center gap-4 text-accent'>
          <div className='w-12 h-px bg-border' />
          <div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
          <div className='w-12 h-px bg-border' />
        </div>
      </MotionDiv>
    </main>
  );
}
