// src/data/site.js
// Single source for identity, links and the resume. Replaces the literals that are
// currently duplicated across Navbar.jsx (3x) and page.jsx (2x).

export const site = {
  name: "Hanif Nahriya Nugraha",
  role: "UI/UX Designer & Front-end Developer",
  email: "hanifnnugraha@gmail.com",
  phone: "+62 823-1667-6968",
  location: "Bandung, West Java, Indonesia",
  // Ship the uploaded English resume at public/resume.pdf (already in this kit).
  resume: "/resume.pdf",
  resumeFileName: "Hanif-Nugraha-Resume-EN.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/hanifnugraha" },
    { label: "Dribbble", href: "https://dribbble.com/hanifnugraha" },
    { label: "GitHub", href: "https://github.com/ko4lax" },
  ],
};

export const publications = [
  {
    authors: "Nugraha, H. N., & Umaroh, S. (2026)",
    title:
      "Users Judge Them Equal, but Loyalty Follows Emotion: A UX-Tips Instrument Validation and Pragmatic-Hedonic Comparison in Indonesia's Leading Social Commerce Application",
    venue: "Journal of Information Systems, Informatics, and Computer Sciences (JISICS), 1(4)",
    status: "Accepted · Sep 2026",
  },
  {
    authors: "Nugraha, H. N., & Umaroh, S. (2026)",
    title:
      "Evaluating Emotional Design in a Mobile Social Commerce Application: A Mixed-Methods Study of TikTok Shop",
    venue: "Journal of Information Systems Engineering and Business Intelligence (JISEBI)",
    status: "Manuscript prepared",
  },
];
