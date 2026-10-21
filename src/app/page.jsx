import HomeContent from "@/components/pages/HomeContent";

// The home page uses the site-wide title, description and Open Graph tags from
// the root layout; it only needs its own canonical URL.
export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
