import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";
import { defaultDescription, defaultTitle, ogImage, siteName, siteUrl } from "@/data/seo";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

// Body voice.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display voice: wide grotesk for headlines and the logo.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

// Utility voice: metadata, dates, metrics, tags.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Hanif Nugraha",
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
  },
};

export const viewport = {
  themeColor: "#fafaf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${archivo.variable} ${plexMono.variable} min-h-screen bg-background text-primary`}>
        <LanguageProvider>
          <Navbar />
          <div className='min-h-screen bg-background'>{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
