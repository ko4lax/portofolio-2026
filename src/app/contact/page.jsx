"use client";

import { MotionDiv } from "@/components/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { language } = useLanguage();
  const text = language === "id" ? { eyebrow: "Mari terhubung", location: "Berbasis di Jawa Barat, Indonesia Â· terbuka untuk Jakarta" } : { eyebrow: "Get in touch", location: "Based in West Java, Indonesia Â· open to Jakarta" };
  return <main className='min-h-screen bg-background flex flex-col items-center justify-center px-4'><MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-16 text-center'><span className='text-sm md:text-base font-bold tracking-[0.3em] text-accent uppercase'>{text.eyebrow}</span></MotionDiv><a href='mailto:hanifnnugraha@gmail.com' className='text-center text-4xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-tight tracking-tighter hover:text-accent transition-colors'>hanifnnugraha<br />@gmail.com</a><MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='mt-24 text-center'><p className='text-secondary text-lg md:text-xl font-medium'>{text.location}</p><div className='mt-4 flex items-center justify-center gap-4 text-accent'><div className='w-12 h-px bg-border' /><div className='w-2 h-2 rounded-full bg-accent animate-pulse' /><div className='w-12 h-px bg-border' /></div></MotionDiv></main>;
}

