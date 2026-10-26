"use client";

import Image from "next/image";
import {
  FaChartLine,
  FaFigma,
  FaJs,
  FaLightbulb,
  FaPuzzlePiece,
  FaReact,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import FactRail from "@/components/FactRail";
import ResearchSection from "@/components/pages/ResearchSection";
import { certifications } from "@/data/site";

const skills = [
  ["UI/UX Design", FaLightbulb],
  ["User Research", FaSearch],
  ["Figma & Prototyping", FaFigma],
  ["HTML / CSS / JS", FaJs],
  ["React / Next.js", FaReact],
  ["WordPress / Shopify", FaShoppingCart],
  ["Design Systems", FaPuzzlePiece],
  ["UX Research (PLS-SEM)", FaChartLine],
];

export default function HomeContent() {
  const { text } = useLanguage();

  return (
    <section id='home' className='bg-background'>
      {/* Hero. Source order is preserved (portrait, then the statement); on
          wide screens the portrait is placed in the right column with grid
          placement instead of an order override. */}
      <section className='mx-auto grid max-w-shell grid-cols-1 items-center gap-x-16 gap-y-12 px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:grid-cols-12'>
        <div className='reveal group frame w-full max-w-[21rem] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:justify-self-end'>
          <Image
            src='/images/profile.jpg'
            alt='Hanif Nugraha'
            width={512}
            height={640}
            priority
            className='img-quiet h-auto w-full'
          />
        </div>

        <div className='reveal reveal-delay lg:col-span-7 lg:col-start-1 lg:row-start-1'>
          <p className='mono uppercase text-secondary'>{text.home.availability}</p>
          <h1 className='mt-8 text-[15vw] font-semibold leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.25rem]'>
            HELLO!
            <br />
            I&apos;M <span className='display-outline'>HANIF.</span>
          </h1>
          <p className='measure mt-10 text-lg text-secondary md:text-xl'>{text.home.intro}</p>
          <div className='mt-12 flex flex-wrap items-center gap-3'>
            <a href='#projects' className='btn-primary'>
              {text.home.viewProjects}
            </a>
            <a href='#contact' className='btn-secondary'>
              {text.home.letsTalk}
            </a>
          </div>
        </div>
      </section>

      {/* Skills ledger */}
      <section className='border-t border-border'>
        <div className='mx-auto max-w-shell px-5 py-20 md:px-10 md:py-28'>
          <div className='grid gap-x-16 gap-y-8 lg:grid-cols-12'>
            <h2 className='text-3xl md:text-4xl lg:col-span-4'>{text.home.skills}</h2>
            <p className='measure text-lg text-secondary lg:col-span-8 xl:col-span-4'>
              {text.home.experience}
            </p>
            <div className='lg:col-span-12 xl:col-span-4'>
              <FactRail rows={text.home.experienceFacts} />
            </div>
          </div>

          <ul className='mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-4'>
            {skills.map(([name, Icon]) => (
              <li key={name} className='flex items-center gap-3 bg-background px-5 py-6'>
                <Icon className='h-4 w-4 shrink-0 text-secondary' aria-hidden='true' />
                <span className='font-display text-[0.95rem] font-medium tracking-[-0.01em] text-primary'>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ResearchSection />

      {/* Certifications ledger */}
      <section className='border-t border-border'>
        <div className='mx-auto max-w-shell px-5 py-20 md:px-10 md:py-28'>
          <h2 className='text-3xl md:text-4xl'>{text.home.certifications}</h2>
          <ul className='mt-12 border-t border-border'>
            {certifications.map(([title, org, year]) => (
              <li
                key={title}
                className='flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border py-5'>
                <h3 className='text-lg font-medium tracking-[-0.02em]'>{title}</h3>
                <span
                  className='hidden h-3 flex-1 border-b border-dotted border-border md:block'
                  aria-hidden='true'
                />
                <p className='mono text-secondary'>
                  {org} · {year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing statement: inverted ink panel, the one high-contrast moment. */}
      <section className='bg-primary text-background'>
        <div className='mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24'>
          <h2 className='max-w-5xl text-4xl font-semibold text-background md:text-6xl'>
            {text.home.collaborate}
          </h2>
          <p className='measure mt-6 text-lg text-white/70'>{text.home.contactText}</p>
          <a
            href='#contact'
            className='btn-secondary mt-12 border-background text-background hover:bg-background hover:text-primary'>
            {text.home.letsTalk}
          </a>
        </div>
      </section>
    </section>
  );
}
