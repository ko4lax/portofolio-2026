"use client";

import { MotionButton, MotionDiv, MotionNav } from "@/components/motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <MotionNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 transition-all duration-300 ${
        scrolled ? "bg-surface shadow-md border-b border-border" : "bg-surface"
      }`}>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='/'
            className='logo text-primary'
            onClick={() => setIsOpen(false)}>
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
              href='/resume.pdf'
              download='Hanif-Nugraha-Resume-EN.pdf'
              className='flex items-center text-secondary hover:text-primary transition-colors duration-200'>
              <IoDocumentTextOutline className='w-5 h-5 mr-1' />
              Resume
            </a>

            {/* Social Links */}
            <a
              href='https://linkedin.com/in/hanifnugraha'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-primary transition-colors duration-200'>
              <FaLinkedin className='w-5 h-5' />
            </a>
            <a
              href='https://dribbble.com/hanifnugraha'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-primary transition-colors duration-200'>
              <FaDribbble className='w-5 h-5' />
            </a>
          </div>

          {/* Mobile menu button */}
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200'>
            <span className='sr-only'>Open menu</span>
            {!isOpen ? (
              <svg
                className='h-6 w-6 text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
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
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            )}
          </MotionButton>
        </div>
      </div>

      {/* Mobile menu */}
      <MotionDiv
        initial='closed'
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className='md:hidden overflow-hidden bg-surface/95 backdrop-blur-lg border-t border-border'>
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
              <a
                href='https://linkedin.com/in/hanifnugraha'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-primary'>
                <FaLinkedin className='w-6 h-6' />
              </a>
              <a
                href='https://dribbble.com/hanifnugraha'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-primary'>
                <FaDribbble className='w-6 h-6' />
              </a>
            </div>
            <a
              href='/resume.pdf'
              download='Hanif-Nugraha-Resume-EN.pdf'
              className='flex items-center text-accent font-medium'>
              <IoDocumentTextOutline className='w-5 h-5 mr-1' />
              Resume
            </a>
          </div>
        </div>
      </MotionDiv>
    </MotionNav>
  );
}
