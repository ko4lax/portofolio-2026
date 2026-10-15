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
  FaFigma,
  FaJs,
  FaLightbulb,
  FaReact,
  FaSearch,
  FaPuzzlePiece,
  FaShoppingCart,
  FaChartLine,
  FaProjectDiagram,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "UI/UX Design",       Icon: FaLightbulb },
    { name: "User Research",      Icon: FaSearch },
    { name: "Figma & Prototyping", Icon: FaFigma },
    { name: "HTML / CSS / JS",    Icon: FaJs },
    { name: "React / Next.js",    Icon: FaReact },
    { name: "WordPress / Shopify", Icon: FaShoppingCart },
    { name: "Laravel / E-commerce", Icon: FaShoppingCart },
    { name: "Design Systems",     Icon: FaPuzzlePiece },
    { name: "UX Research (PLS-SEM)", Icon: FaChartLine },
    { name: "Agile / Scrum",      Icon: FaProjectDiagram },
  ];

  const certifications = [
    { title: "Foundations of UX Design",     org: "Google", year: "Mar 2023" },
    { title: "Design Thinking", org: "Great Learning", year: "Sep 2023" },
    { title: "SEO with Squarespace",         org: "Coursera", year: "Sep 2023" },
    { title: "React (Basic)",                org: "HackerRank", year: "May 2023" },
    { title: "CSS (Basic)",                  org: "HackerRank", year: "May 2023" },
    { title: "Problem Solving (Basic)",      org: "HackerRank", year: "Oct 2022" },
    { title: "Intro to Data Analytics",      org: "RevoU", year: "Feb 2022" },
  ];

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-12 md:gap-20 max-w-7xl mx-auto'>
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
        </div>

        <div className='max-w-xl text-left'>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <span className='text-accent font-bold tracking-widest uppercase text-sm mb-4 block'>
              Available for freelance & UI/UX / frontend roles · open to Jakarta
            </span>
            <MotionH1 className='text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-primary'>
              HELLO! <br />
              I'M <span className='text-accent'>HANIF.</span>
            </MotionH1>
            <p className='text-xl md:text-2xl text-secondary mb-8 leading-relaxed font-medium'>
              UI/UX Designer & Front-end Developer based in Indonesia. I turn
              complex problems into intuitive, human-centred digital experiences.
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

      {/* Skills & Experience */}
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
              Currently finishing my Bachelor's in Information System at ITENAS
              (expected Oct 2026), I'm focusing on UI/UX design and web development.
              My hospitality background (The Ritz-Carlton Jakarta) shaped my
              attention to detail and user empathy.
            </MotionP>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
              {skills.map(({ name, Icon }, index) => (
                <MotionDiv
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className='group p-5 text-center bg-background border border-border rounded-2xl transition-all duration-200 shadow-sm hover:shadow-xl'>
                  <div className='p-3 rounded-xl bg-accent/10 group-hover:bg-white/20 transition-colors duration-300'>
                    <Icon className='text-xl text-accent group-hover:text-white transition-colors duration-300' />
                  </div>
                  <span className='font-medium text-primary group-hover:text-accent transition-colors duration-300'>
                    {name}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Research */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <MotionH2 className='text-3xl font-bold text-primary mb-6'>
              Research & Publications
            </MotionH2>
            <MotionP className='text-lg text-secondary mb-8'>
              Peer-reviewed UX research on social commerce in Indonesia —
              validated with PLS-SEM and published in JISICS.
            </MotionP>
            <MotionDiv className='p-8 bg-surface border border-border rounded-2xl mb-6'>
              <h3 className='text-xl font-bold text-primary mb-2'>
                TikTok Shop — Emotional Design Study
              </h3>
              <p className='text-secondary mb-3'>
                Mixed-methods study of TikTok Shop (n = 193 users). Validated the
                UX-Tips instrument with PLS-SEM (outer loadings 0.731–0.919,
                AVE 0.645–0.835) and compared pragmatic vs hedonic UX with a
                Wilcoxon signed-rank test (p = 0.034). Emotional peak found at
                order status; negative experiences traced to aesthetics and
                physical characteristics.
              </p>
              <p className='text-secondary mb-0'>
                Accepted at <span className='text-accent'>JISICS</span>.
              </p>
            </MotionDiv>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside'>
              <li>
                Nugraha, H. N., & Umaroh, S. (2026). Users Judge Them Equal, but
                Loyalty Follows Emotion: A UX-Tips Instrument Validation and
                Pragmatic-Hedonic Comparison in Indonesia's Leading Social
                Commerce Application. <span className='text-accent'>JISICS</span>,
                1(4).
              </li>
              <li>
                Evaluating Emotional Design in a Mobile Social Commerce
                Application: A Mixed-Methods Study of TikTok Shop. Manuscript in
                preparation for <span className='text-accent'>JISEBI</span>.
              </li>
            </ul>
          </MotionDiv>
        </div>
      </section>

      {/* Certifications */}
      <section className='py-20 px-4 bg-background'>
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
              {certifications.map((cert, index) => (
                <MotionDiv
                  key={cert.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className='p-8 bg-surface border border-border rounded-2xl'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-bold text-primary'>
                      {cert.title}
                    </h3>
                    <div className='p-2 bg-accent/10 rounded-lg'>
                      <FaLightbulb className='text-accent' />
                    </div>
                  </div>
                  <p className='text-secondary font-medium mb-4'>
                    {cert.org} · {cert.year}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Contact */}
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
                whileHover={{ scale: 1.05, backgroundColor: "var(--accent-dark)" }}
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
