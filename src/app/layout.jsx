import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";
import { defaultDescription, defaultTitle, ogImage, siteName, siteUrl } from "@/data/seo";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-background text-primary`}>
        <LanguageProvider>
          <Navbar />
          <div className='min-h-screen bg-background'>{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
