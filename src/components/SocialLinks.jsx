import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";

const icons = {
  LinkedIn: FaLinkedin,
  Dribbble: FaDribbble,
  GitHub: FaGithub,
};

/**
 * Single source of truth for the social links. The icons carry no visible
 * text, so every link gets an accessible name from the label.
 */
export default function SocialLinks({ className = "", iconClassName = "w-5 h-5" }) {
  return (
    <>
      {site.socials.map((social) => {
        const Icon = icons[social.label];
        if (!Icon) return null;

        return (
          <a
            key={social.label}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={social.label}
            title={social.label}
            className={className}>
            <Icon className={iconClassName} aria-hidden='true' />
          </a>
        );
      })}
    </>
  );
}
