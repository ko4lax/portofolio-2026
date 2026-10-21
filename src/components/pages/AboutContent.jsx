"use client";

import Image from "next/image";
import MetaFrame from "@/components/MetaFrame";
import { useLanguage } from "@/components/LanguageProvider";

const about = {
  en: {
    title: "Hi, I'm Hanif",
    intro:
      "I'm a UI/UX Designer and Front-end Developer completing my Bachelor's degree in Information Systems at the National Institute of Technology Bandung. I bring more than four years of freelance and agency work, alongside a hospitality background that shaped my attention to detail and empathy.",
    craft:
      "I take products from research, interviews, personas, journey maps, wireframes, and Figma prototypes through to responsive frontends in HTML, CSS, JavaScript, React, Next.js, WordPress, Shopify, and Laravel.",
    experience: "Experience",
    digitalkultr:
      "At Digitalkultr, I design websites and brand identities for architecture and food-and-beverage clients. Faza Architect included a filterable portfolio gallery, project detail pages, and an About page; Bellrock Artisan Coffee included a brand identity, landing pages, and an online storefront.",
    waitwhat:
      "At WaitWhatWeb, I designed UI/UX for ten client brands across fashion, beauty, and food. The Me+Lia redesign included two personas, a journey map, four user flows, responsive Figma prototypes, and UEQ testing with more than 30 respondents.",
    research:
      "My research practice includes a 193-user TikTok Shop study with PLS-SEM and five interviews, plus the Dutra Parahyangan warehouse capstone, where I built the frontend for 27 screens across 12 modules and helped the team pass 33 black-box scenarios.",
    hospitality:
      "Earlier roles at The Union Group and The Ritz-Carlton Jakarta strengthened my service mindset, brand discipline, and ability to stay attentive under pressure.",
  },
  id: {
    title: "Hai, saya Hanif",
    intro:
      "Saya UI/UX Designer dan Front-end Developer yang sedang menyelesaikan Sarjana Sistem Informasi di Institut Teknologi Nasional Bandung. Saya memiliki pengalaman freelance dan agensi lebih dari empat tahun, ditambah latar hospitality yang membentuk perhatian pada detail dan empati saya.",
    craft:
      "Saya mengerjakan produk dari riset, wawancara, persona, customer journey, wireframe, dan prototipe Figma hingga frontend responsif dengan HTML, CSS, JavaScript, React, Next.js, WordPress, Shopify, dan Laravel.",
    experience: "Pengalaman",
    digitalkultr:
      "Di Digitalkultr, saya merancang website dan identitas brand untuk klien arsitektur serta food-and-beverage. Faza Architect mencakup galeri portfolio yang dapat difilter, halaman detail proyek, dan halaman About; Bellrock Artisan Coffee mencakup identitas brand, landing page, dan storefront online.",
    waitwhat:
      "Di WaitWhatWeb, saya merancang UI/UX untuk sepuluh brand fashion, beauty, dan food. Redesign Me+Lia mencakup dua persona, customer journey, empat user flow, prototipe Figma responsif, dan pengujian UEQ dengan lebih dari 30 responden.",
    research:
      "Praktik riset saya mencakup studi TikTok Shop terhadap 193 pengguna dengan PLS-SEM dan lima wawancara, serta capstone warehouse Dutra Parahyangan. Pada proyek tersebut saya membangun frontend untuk 27 layar dalam 12 modul dan membantu tim melewati 33 skenario black-box.",
    hospitality:
      "Pengalaman sebelumnya di The Union Group dan The Ritz-Carlton Jakarta memperkuat orientasi pelayanan, disiplin terhadap brand, dan ketelitian saya.",
  },
};

export default function AboutContent() {
  const { language } = useLanguage();
  const text = about[language];

  return (
    <section id='about' data-accent='orange' className='bg-background'>
      <section className='mx-auto max-w-shell px-5 pt-12 md:px-10 md:pt-14'>
        <div className='reveal'>
          <MetaFrame label='banner.jpg' accent='orange' className='pt-6'>
          <div className='frame aspect-[16/6] w-full'>
            <Image
              src='/images/banner.jpg'
              alt='Hanif Nugraha portfolio work'
              width={1600}
              height={640}
              sizes='100vw'
              className='img-quiet h-full w-full object-cover'
            />
          </div>
          </MetaFrame>
          <span className='mono-lg mt-6 block text-right accent-text'>
            Bandung, West Java, Indonesia
          </span>

          <h2 className='mt-20 max-w-4xl text-[12vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl'>
            {text.title} <span className='display-outline'>:)</span>
          </h2>

          <div className='mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-12'>
            <div className='space-y-6 lg:col-span-7'>
              <p className='measure text-lg'>{text.intro}</p>
              <p className='measure text-lg'>{text.craft}</p>
            </div>

            <blockquote className='border-l-2 border-primary pl-6 lg:col-span-5 lg:self-start'>
              <p className='font-display text-xl font-medium leading-[1.3] tracking-[-0.02em] text-primary md:text-2xl'>
                &ldquo;I believe great technology should be as welcoming as exceptional
                hospitality.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className='mt-24'>
            <h2 className='text-3xl md:text-4xl'>{text.experience}</h2>
            <div className='mt-12 border-t border-border'>
              <p className='measure border-b border-border py-8 text-lg'>{text.digitalkultr}</p>
              <p className='measure border-b border-border py-8 text-lg'>{text.waitwhat}</p>
              <p className='measure border-b border-border py-8 text-lg'>{text.research}</p>
              <p className='measure border-b border-border py-8 text-lg'>{text.hospitality}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
