import AboutContent from "@/components/pages/AboutContent";
import ContactContent from "@/components/pages/ContactContent";
import HomeContent from "@/components/pages/HomeContent";
import ProjectsContent from "@/components/pages/ProjectsContent";

// One document. Each former route is a section with an id, and the sections
// stay in the original order: home, about, projects, contact. The old routes
// are permanent redirects to the matching anchor (see next.config.mjs), so
// every existing link and search result still lands somewhere real.
export const metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <main>
      <HomeContent />
      <AboutContent />
      <ProjectsContent />
      <ContactContent />
    </main>
  );
}
