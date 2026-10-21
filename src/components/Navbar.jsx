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
      className={`nav-enter fixed top-0 left-0 right-0 w-full z-50 px-4 transition-all duration-300 ${
        scrolled ? "bg-surface shadow-md border-b border-border" : "bg-surface"
      }`}>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='logo text-primary' onClick={() => setIsOpen(false)}>
            Hn
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-secondary hover:text-primary transition-colors duration-200 relative group'>
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300' />
              </Link>
            ))}

            {/* Divider */}
            <div className='h-6 w-px bg-secondary/20 mx-2' />

            {/* Resume Download */}
            <a
              href={site.resume}
              download={site.resumeFileName}
              className='flex items-center text-secondary hover:text-primary transition-colors duration-200'>
              <IoDocumentTextOutline className='w-5 h-5 mr-1' aria-hidden='true' />
              {text.nav.resume}
            </a>
            <button
              type='button'
              onClick={toggleLanguage}
              aria-label={`Switch language to ${text.nav.language}`}
              className='rounded-full border border-border px-3 py-1 text-xs font-bold text-secondary hover:border-accent hover:text-primary'>
              {text.nav.language}
            </button>

            {/* Social Links */}
            <SocialLinks className='text-secondary hover:text-primary transition-colors duration-200' />
          </div>

          {/* Mobile menu button */}
          <button
            ref={toggleRef}
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={MENU_ID}
            className='md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200'>
            <span className='sr-only'>{isOpen ? "Close menu" : "Open menu"}</span>
            {!isOpen ? (
              <svg
                className='h-6 w-6 text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6 text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu. `inert` keeps the collapsed links out of the tab order and
          out of the accessibility tree while the panel is closed. */}
      <div
        id={MENU_ID}
        inert={!isOpen}
        className={`md:hidden overflow-hidden bg-surface/95 backdrop-blur-lg border-t border-border transition-all duration-300 ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className='px-4 pt-4 pb-6 space-y-4'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className='block px-4 py-3 rounded-xl text-lg font-medium text-secondary hover:text-primary hover:bg-accent/10 transition-all duration-200'>
              {item.name}
            </Link>
          ))}
          <div className='pt-4 border-t border-border flex items-center justify-between'>
            <div className='flex space-x-6'>
              <SocialLinks className='text-secondary hover:text-primary' iconClassName='w-6 h-6' />
            </div>
            <a
              href={site.resume}
              download={site.resumeFileName}
              className='flex items-center text-accent font-medium'>
              <IoDocumentTextOutline className='w-5 h-5 mr-1' aria-hidden='true' />
              {text.nav.resume}
            </a>
            <button
              type='button'
              onClick={toggleLanguage}
              aria-label={`Switch language to ${text.nav.language}`}
              className='rounded-full border border-border px-3 py-1 text-xs font-bold text-secondary hover:border-accent hover:text-primary'>
              {text.nav.language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
