import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import MouseGradient from "@/components/MouseGradient";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { getDictionary } from "@/utils/getDictionary";

// Google Font optimizasyonu
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Font yüklenene kadar sistem fontunu gösterir
});

// SEO Konfigürasyonu
// Not: İleride SEO'yu da çok dilli yapmak istersek "generateMetadata" kullanacağız, şimdilik böyle kalabilir.
export const metadata: Metadata = {
  title: {
    template: "%s | Tuna Portfolio",
    default: "Tuna | Kıdemli Yazılım Geliştirici",
  },
  description:
    "Modern web teknolojileri ile geliştirilmiş kişisel portfolyo sitesi.",
  keywords: ["Next.js", "React", "Developer", "Portfolio", "Tuna"],
  authors: [{ name: "Tuna", url: "https://github.com/tunastark" }],
  openGraph: {
    type: "website",
    locale: "tr_TR", // İleride bunu da dinamik yapacağız
    url: "https://tuna.dev",
    siteName: "Tuna Portfolio",
  },
};

// 1. DİKKAT: Fonksiyon 'async' yapıldı ve 'params' eklendi
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'tr' }>;
}>) {
  // 2. Dili asenkron olarak alıyoruz
  const { lang } = await params;
  
  // 3. Sözlüğü çekiyoruz
  const dict = await getDictionary(lang);

  return (
    // 4. html lang değeri URL'den gelen dinamik "lang" değerine bağlandı
    <html lang={lang} className="scroll-smooth dark">
      {/* Hydration hatalarını önlemek ve font değişkenini body'e eklemek için 
        template literal kullanıyoruz.
      */}
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col cursor-none`}
      >
        <CustomCursor />
        {/* Navbar artık sözlükten gelen nav verisini alıyor */}
       <Navbar dict={dict.nav} />
        <MouseGradient />
        <SmoothScroll />
        <main className="flex-grow mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}