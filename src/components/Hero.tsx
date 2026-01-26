import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

// İkonları metin olarak veya basit SVG olarak tutabiliriz.
// Şimdilik isimlerini yazıyoruz, ileride ikon yapabiliriz.
const TECHNOLOGIES = [
  "React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", 
  "PostgreSQL", "Git", "Redux", "Figma", "Vercel", "Python", "C#"
];

export default function Home() {
  // Sadece ilk 3 projeyi vitrine çıkaralım
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. BÖLÜM: HERO (Giriş) */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden pt-20">
        <div className="absolute mt-8 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="space-y-6 max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Modern Web <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Deneyimleri
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Merhaba, ben Tuna. Fikirleri koda, kodu ürüne dönüştürüyorum. 
            Performans, estetik ve kullanılabilirliği odağıma alarak 
            Next.js ekosisteminde çözümler üretiyorum.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Projelerimi İncele
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: TECH STACK (Akan Şerit) */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Kullandığım Teknolojiler</p>
        </div>
        
        {/* Sonsuz Kaydırma Efekti */}
        <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-scroll whitespace-nowrap">
                {/* 2 kez render ediyoruz ki döngü kesintisiz olsun */}
                {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                    <span 
                        key={index} 
                        className="mx-8 text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            
            {/* Kenarlara fading efekti */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
        </div>
      </section>

      {/* 3. BÖLÜM: ÖNE ÇIKAN PROJELER */}
      <section className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Seçilmiş Çalışmalar
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                        Son zamanlarda üzerinde çalıştığım, problem çözme yeteneğimi ve teknik bilgimi yansıtan bazı projeler.
                    </p>
                </div>
                <Link 
                    href="/projects" 
                    className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                    Tümünü Gör 
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}