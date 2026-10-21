"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { language } = useLanguage();
  const text =
    language === "id"
      ? {
          eyebrow: "Mari terhubung",
          location: "Berbasis di Jawa Barat, Indonesia · terbuka untuk Jakarta",
        }
      : {
          eyebrow: "Get in touch",
          location: "Based in West Java, Indonesia · open to Jakarta",
        };

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center px-4'>
      <div className='reveal mb-16 text-center'>
        <span className='text-sm md:text-base font-bold tracking-[0.3em] text-accent uppercase'>
          {text.eyebrow}
        </span>
      </div>
      <a
        href='mailto:hanifnnugraha@gmail.com'
        className='text-center text-4xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-tight tracking-tighter hover:text-accent transition-colors'>
        hanifnnugraha
        <br />
        @gmail.com
      </a>
      <div className='reveal reveal-delay mt-24 text-center'>
        <p className='text-secondary text-lg md:text-xl font-medium'>{text.location}</p>
        <div className='mt-4 flex items-center justify-center gap-4 text-accent'>
          <div className='w-12 h-px bg-border' />
          <div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
          <div className='w-12 h-px bg-border' />
        </div>
      </div>
    </main>
  );
}
