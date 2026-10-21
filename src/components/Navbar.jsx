"use client";

import { useEffect, useRef, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLanguage } from "@/components/LanguageProvider";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

const MENU_ID = "mobile-menu";

// Single-page site: the nav moves between in-page sections. These ids match the
// section elements in src/components/pages/*Content.jsx.
const SECTION_IDS = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef(null);
  const { text, toggleLanguage } = useLanguage();

  const navItems = [
    { name: text.nav.about, href: "#about" },
    { name: text.nav.projects, href: "#projects" },
    { name: text.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view. Plain anchor links already scroll
  // without JavaScript, so this is decoration on top of working behaviour.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Arriving on /#projects (for example from the old /projects redirect) should
  // land on that section once fonts and images have settled.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return undefined;

    const target = document.getElementById(hash.slice(1));
    if (!target) return undefined;

    const timer = window.setTimeout(() => target.scrollIntoView({ block: "start" }), 120);
    return () => window.clearTimeout(timer);
  }, []);

  // Close the panel after an in-page jump, and let Escape back out of it.
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

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      data-accent='blue'
      className={`nav-enter fixed left-0 right-0 top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        scrolled ? "border-border bg-background/85" : "border-transparent"
      }`}>
      <div className='mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:h-20 md:px-10'>
        <a
          href='#home'
          onClick={closeMenu}
          aria-label='Hanif Nugraha, back to top'
          className='font-display text-xl font-semibold tracking-[-0.04em] text-primary'>
          Hn
        </a>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className={`link-rule mono ${
                activeSection === item.href.slice(1)
                  ? "link-rule-active text-primary"
                  : "text-secondary hover:text-primary"
              }`}>
              {item.name}
            </a>
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
            className='chip transition-colors duration-200 hover:bg-white/10'>
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
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className='flex items-baseline justify-between border-b border-border py-4 font-display text-2xl tracking-[-0.03em] text-primary'>
              {item.name}
            </a>
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
              className='chip transition-colors duration-200 hover:bg-white/10'>
              {text.nav.language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
