import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseGradient from "@/components/MouseGradient";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

// Google Font optimizasyonu
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Font yüklenene kadar sistem fontunu gösterir
});

// SEO Konfigürasyonu
// Burayı kendi bilgilerinle doldurmalısın.
export const metadata: Metadata = {
  title: {
    template: "%s | Tuna Portfolio",
    default: "Tuna | Kıdemli Yazılım Geliştirici",
  },
  description:
    "Modern web teknolojileri ile geliştirilmiş kişisel portfolyo sitesi.",
  keywords: ["Next.js", "React", "Developer", "Portfolio", "Tuna"],
  authors: [{ name: "Tuna", url: "https://github.com/senin-kullanici-adin" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tuna.dev",
    siteName: "Tuna Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      {/* Hydration hatalarını önlemek ve font değişkenini body'e eklemek için 
        template literal kullanıyoruz.
      */}
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* İleride buraya Header/Navbar gelecek */}
        <Navbar />
        <MouseGradient />
        <SmoothScroll />
        <main className="flex-grow">{children}</main>
        {/* İleride buraya Footer gelecek */}
        <Footer />
      </body>
    </html>
  );
}
