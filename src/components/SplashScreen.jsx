"use client";

import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { MotionDiv, fadeIn, slideUp } from "./motion";

const SplashScreen = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimationControls();

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds total

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setCounter(progress);

      if (progress < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Wait a small moment at 100% for impact
        setTimeout(() => {
          controls.start({
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              onComplete: () => setIsVisible(false),
            },
          });
        }, 200);
      }
    };

    const animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [controls]);

  if (!isVisible) return null;

  return (
    <MotionDiv
      initial={{ opacity: 1 }}
      animate={controls}
      className='fixed inset-0 z-[9999] flex items-center justify-center bg-background'>
      {/* Grain overlay */}
      <div
        className='absolute inset-0 opacity-70'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: "contrast(300%) brightness(150%)",
        }}
      />

      <div className='relative flex flex-col items-center justify-center space-y-6'>
        {/* Counter */}
        <MotionDiv
          {...slideUp}
          className='text-7xl font-bold text-primary font-mono'>
          {counter}%
        </MotionDiv>

        {/* Loading bar */}
        <div className='w-48 h-1 bg-primary/10 rounded-full overflow-hidden'>
          <MotionDiv
            className='h-full bg-primary/60'
            initial={{ width: 0 }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Text */}
        <MotionDiv
          {...fadeIn}
          transition={{ delay: 0.5 }}
          className='text-sm text-primary/60 uppercase tracking-widest'>
          Loading Experience
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default SplashScreen;
