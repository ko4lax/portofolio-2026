import ClientSplashScreen from "@/components/ClientSplashScreen";
import Navbar from "@/components/Navbar";
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
  metadataBase: new URL("https://ko4lax.me"),
  title: {
    default: "Hanif Nugraha — UI/UX Designer & Front-end Developer",
    template: "%s — Hanif Nugraha",
  },
  description:
    "UI/UX designer and front-end developer in Bandung. UX research, Figma, React and Next.js.",
  openGraph: {
    title: "Hanif Nugraha — UI/UX Designer & Front-end Developer",
    description:
      "UI/UX designer and front-end developer in Bandung. UX research, Figma, React and Next.js.",
    url: "https://ko4lax.me",
    siteName: "Hanif Nugraha",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-background text-primary`}
        suppressHydrationWarning>
        <ClientSplashScreen />
        <Navbar />
        <div className='min-h-screen bg-background'>{children}</div>
      </body>
    </html>
  );
}
