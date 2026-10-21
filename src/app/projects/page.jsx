import ProjectsContent from "@/components/pages/ProjectsContent";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected UI/UX and front-end work: the TikTok Shop emotional design study, the Me+Lia storefront redesign, a warehouse management system and client brand builds.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
