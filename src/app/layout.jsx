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
  title: "UI/UX Designer & Frontend Developer Portfolio",
  description:
    "A minimalist portfolio showcasing UI/UX design and frontend development work",
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
