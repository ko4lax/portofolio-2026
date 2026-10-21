"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLanguage } from "@/components/LanguageProvider";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

const MENU_ID = "mobile-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const pathname = usePathname();
  const { text, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the panel after a client-side navigation.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { name: text.nav.about, href: "/about" },
    { name: text.nav.projects, href: "/projects" },
    { name: text.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`nav-enter fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background" : "border-transparent"
      }`}>
      <div className='mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:h-20 md:px-10'>
        <Link
          href='/'
          className='font-display text-xl font-semibold tracking-[-0.04em] text-primary'
          onClick={() => setIsOpen(false)}>
          Hn
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='link-rule mono text-secondary hover:text-primary'>
              {item.name}
            </Link>
          ))}

          <span className='h-4 w-px bg-border' aria-hidden='true' />

          <a
            href={site.resume}
            download={site.resumeFileName}
            className='link-rule mono flex items-center gap-2 text-secondary hover:text-primary'>
            <IoDocumentTextOutline className='h-3.5 w-3.5' aria-hidden='true' />
            {text.nav.resume}
          </a>

          <button
            type='button'
            onClick={toggleLanguage}
            aria-label={`Switch language to ${text.nav.language}`}
            className='mono border border-border px-2.5 py-1 text-secondary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-background'>
            {text.nav.language}
          </button>

          <SocialLinks
            className='text-secondary transition-colors duration-200 hover:text-primary'
            iconClassName='h-3.5 w-3.5'
          />
        </div>

        {/* Mobile menu button */}
        <button
          ref={toggleRef}
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={MENU_ID}
          className='-mr-2 p-2 text-primary md:hidden'>
          <span className='sr-only'>{isOpen ? "Close menu" : "Open menu"}</span>
          {!isOpen ? (
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M4 7h16M4 12h16M4 17h16'
              />
            </svg>
          ) : (
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu. `inert` keeps the collapsed links out of the tab order and
          out of the accessibility tree while the panel is closed. */}
      <div
        id={MENU_ID}
        inert={!isOpen}
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className='px-5 pb-6 pt-2'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className='flex items-baseline justify-between border-b border-border py-4 font-display text-2xl tracking-[-0.03em] text-primary'>
              {item.name}
            </Link>
          ))}
          <div className='flex items-center justify-between pt-5'>
            <div className='flex gap-5'>
              <SocialLinks className='text-secondary hover:text-primary' iconClassName='h-4 w-4' />
            </div>
            <a
              href={site.resume}
              download={site.resumeFileName}
              className='mono flex items-center gap-2 text-primary'>
              <IoDocumentTextOutline className='h-3.5 w-3.5' aria-hidden='true' />
              {text.nav.resume}
            </a>
            <button
              type='button'
              onClick={toggleLanguage}
              aria-label={`Switch language to ${text.nav.language}`}
              className='mono border border-border px-2.5 py-1 text-secondary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-background'>
              {text.nav.language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
