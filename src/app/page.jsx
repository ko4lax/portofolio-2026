"use client";

import {
  MotionButton,
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionP,
} from "@/components/motion";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaCss3Alt,
  FaDribbble,
  FaFigma,
  FaJs,
  FaLightbulb,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  // Updated skills array with 8 cards
  const skills = [
    { name: "React.js", Icon: FaReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "JavaScript", Icon: FaJs },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "UI Design", Icon: FaFigma },
    { name: "UX Design", Icon: FaLightbulb },
    { name: "Web Dev", Icon: FaCode },
    { name: "Problem Solving", Icon: FaBrain },
  ];

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-12 md:gap-20 max-w-7xl mx-auto'>
        {/* Profile Image Container */}
        <div className='flex flex-col md:flex-row gap-6 items-center'>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative group'>
            <div className='absolute -inset-1 bg-border rounded-2xl group-hover:bg-accent/10 transition-colors duration-200'></div>
            <SafeImage
              src='/images/profile.jpg'
              alt='Hanif Nugraha'
              className='relative w-64 h-80 object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-200'
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='relative group hidden lg:block mt-12'>
            <div className='absolute -inset-1 bg-border rounded-2xl group-hover:bg-accent/10 transition-colors duration-200'></div>
            <SafeImage
              src='/images/profile2.jpg'
              alt='Hanif Nugraha 2'
              className='relative w-64 h-80 object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-200'
            />
          </MotionDiv>
        </div>

        {/* Text */}
        <div className='max-w-xl text-left'>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <span className='text-accent font-bold tracking-widest uppercase text-sm mb-4 block'>
              Available for new projects
            </span>
            <MotionH1 className='text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-primary'>
              HELLO! <br />
              I'M <span className='text-accent'>HANIF.</span>
            </MotionH1>
            <p className='text-xl md:text-2xl text-secondary mb-8 leading-relaxed font-medium'>
              UI/UX Designer & Frontend Developer based in Indonesia. I bridge
              the gap between complex functionality and intuitive design.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link href='/projects'>
                <MotionButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-primary px-8 py-4 text-lg font-bold'>
                  View Projects
                </MotionButton>
              </Link>
              <Link href='/contact'>
                <MotionButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-secondary px-8 py-4 text-lg font-bold'>
                  Let's Talk
                </MotionButton>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 bg-surface'>
        <div className='max-w-4xl mx-auto'>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <MotionH2 className='text-3xl font-bold text-primary mb-8'>
              Skills & Experience
            </MotionH2>
            <MotionP className='text-lg text-secondary mb-8'>
              Currently pursuing my Bachelor's in Information System, I'm
              focusing on UI/UX design and web development. My hospitality
              background has taught me the importance of attention to detail and
              exceptional user experience.
            </MotionP>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {skills.map(({ name, Icon }, index) => (
                <MotionDiv
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "var(--accent)",
                    color: "white",
                  }}
                  className='group p-6 text-center flex flex-col items-center justify-center gap-4 bg-surface border border-border rounded-2xl transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-accent/20'>
                  <div className='p-4 rounded-xl bg-accent/10 group-hover:bg-white/20 transition-colors duration-300'>
                    <Icon className='text-3xl text-accent group-hover:text-white transition-colors duration-300' />
                  </div>
                  <span className='font-bold text-primary group-hover:text-white transition-colors duration-300'>
                    {name}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Certifications Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <MotionH2 className='text-3xl font-bold text-primary mb-8'>
              Certifications
            </MotionH2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {[
                {
                  title: "React (Basic)",
                  org: "HackerRank",
                  id: "DB8E175EC37A",
                },
                {
                  title: "UX Design Foundations",
                  org: "Coursera",
                  id: "XRFPPG36E9JN",
                },
                {
                  title: "SEO with Squarespace",
                  org: "Coursera",
                  id: "N5DR4WCJ7M8G",
                },
                {
                  title: "Problem Solving (Basic)",
                  org: "HackerRank",
                  id: "ADD0EB985D71",
                },
              ].map((cert, index) => (
                <MotionDiv
                  key={cert.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className='group p-8 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-all duration-300'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300'>
                      {cert.title}
                    </h3>
                    <div className='p-2 bg-accent/10 rounded-lg'>
                      <FaLightbulb className='text-accent' />
                    </div>
                  </div>
                  <p className='text-secondary font-medium mb-4'>{cert.org}</p>
                  <div className='flex items-center justify-between pt-4 border-t border-border/50'>
                    <span className='text-xs font-bold tracking-widest uppercase text-secondary/50'>
                      Credential ID
                    </span>
                    <span className='text-sm font-mono text-accent bg-accent/5 px-3 py-1 rounded-md'>
                      {cert.id}
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-32 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='p-16 rounded-[3rem] bg-surface border border-border relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl' />

            <MotionH2 className='text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter'>
              READY TO <br />
              <span className='text-accent'>COLLABORATE?</span>
            </MotionH2>
            <p className='text-xl text-secondary mb-12 max-w-lg mx-auto leading-relaxed'>
              I'm always open to discussing new opportunities, creative ideas or
              original projects.
            </p>
            <Link href='/contact'>
              <MotionButton
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--accent-dark)",
                }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary px-12 py-5 text-xl font-bold shadow-xl shadow-accent/20'>
                Get in Touch
              </MotionButton>
            </Link>
            <div className='mt-12 flex justify-center space-x-8'>
              <a
                href='https://linkedin.com/in/hanifnugraha'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-accent transition-all duration-300'>
                <FaLinkedin className='text-3xl' />
              </a>
              <a
                href='https://dribbble.com/hanifnugraha'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-accent transition-all duration-300'>
                <FaDribbble className='text-3xl' />
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </main>
  );
}
