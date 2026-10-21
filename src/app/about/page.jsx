import AboutContent from "@/components/pages/AboutContent";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Profile, research practice and experience of Hanif Nugraha, UI/UX designer and front-end developer in Bandung, Indonesia.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
