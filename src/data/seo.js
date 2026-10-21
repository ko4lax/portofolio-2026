export const siteUrl = "https://www.nifnux.tech";
export const siteName = "Hanif Nugraha";

export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Hanif Nugraha, UI/UX designer and front-end developer",
};

export const defaultTitle = "Hanif Nugraha | UI/UX Designer & Front-end Developer";

export const defaultDescription =
  "UI/UX designer and front-end developer in Bandung. UX research, Figma, React and Next.js.";

/**
 * Per-route metadata. Every page needs its own title, description and
 * canonical URL so search results and link previews are not all identical.
 */
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [ogImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
