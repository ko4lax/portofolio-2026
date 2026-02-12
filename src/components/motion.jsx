"use client";

import { motion as motionBase } from "framer-motion";

export const motion = motionBase;

// Animation presets
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

// Re-export specific motion components we need
export const MotionDiv = motionBase.div;
export const MotionH1 = motionBase.h1;
export const MotionH2 = motionBase.h2;
export const MotionH3 = motionBase.h3;
export const MotionP = motionBase.p;
export const MotionSpan = motionBase.span;
export const MotionSection = motionBase.section;
export const MotionNav = motionBase.nav;
export const MotionButton = motionBase.button;
export const MotionA = motionBase.a;
export const MotionImg = motionBase.img;
export const MotionPath = motionBase.path;
export const MotionSvg = motionBase.svg;
