"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";

export default function ContactContent() {
  const { language } = useLanguage();
  const [emailUser, emailDomain] = site.email.split("@");
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
    <section id='contact' className='flex min-h-screen flex-col justify-center border-t border-border bg-background'>
      <div className='mx-auto w-full max-w-shell px-5 pb-24 pt-32 md:px-10'>
        <div className='reveal border-t-2 border-primary pt-8'>
          <h2 className='mono uppercase text-secondary'>{text.eyebrow}</h2>

          <a
            href={`mailto:${site.email}`}
            className='link-rule mt-12 block break-all font-display text-[10.5vw] font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-primary hover:text-primary sm:text-5xl md:text-[6rem] lg:text-[8rem]'>
            {emailUser}
            <br />
            @{emailDomain}
          </a>

          <div className='reveal reveal-delay mt-20 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between'>
            <p className='mono text-secondary'>{text.location}</p>
            <div className='flex items-center gap-4 text-primary'>
              <div className='h-px w-12 bg-border' />
              <div className='h-1.5 w-1.5 rounded-full bg-primary animate-pulse' />
              <div className='h-px w-12 bg-border' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
