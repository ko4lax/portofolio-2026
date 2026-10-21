import ContactContent from "@/components/pages/ContactContent";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Hanif Nugraha, UI/UX designer and front-end developer in Bandung, Indonesia. Open to work in Jakarta and remote.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
