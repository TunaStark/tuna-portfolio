import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden">
      
      {/* Arka plan için dekoratif bir gradient efekti (Modern UI Trendi) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

      <div className="space-y-6 max-w-3xl">
        {/* Semantik HTML: h1 kullanımı SEO için kritiktir */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Merhaba, ben Tuna. <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Modern Web Çözümleri
          </span>{" "}
          Üretiyorum.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Full-stack geliştiriciyim. Kullanıcı deneyimini ön planda tutan, 
          performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum.
          Şu anda Next.js 15 ve React 19 ile projeler üretiyorum.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {/* Primary Button:
             Tailwind v4 ile hover ve transitionlar daha smooth.
             Erişilebilirlik için 'aria-label' kullanabiliriz ama metin net olduğu için gerek yok.
          */}
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Projelerimi Gör
          </Link>

          {/* Secondary Button */}
          <Link
            href="https://github.com/senin-kullanici-adin"
            target="_blank"
            rel="noopener noreferrer" // Güvenlik: Harici linklerde mutlaka kullanılmalı
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub Profilim
          </Link>
        </div>
      </div>
    </section>
  );
}