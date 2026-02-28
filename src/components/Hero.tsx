import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

const TECHNOLOGIES = [
  "React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", 
  "PostgreSQL", "Git", "Redux", "Figma", "Vercel", "Python", "C#"
];

// Bileşenin dışarıdan alacağı özellikleri (Props) tanımlıyoruz
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ dict, lang }: { dict: any; lang: string }) {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. BÖLÜM: HERO (Giriş) */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden pt-20">
        {/* Tema ile uyumlu arka plan parlaması */}
        <div className="absolute mt-8 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
            {dict.hero.title} <br />
            {/* Sitenin imza rengi: Mavi'den Mor'a */}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              // href dinamik hale getirildi: /en/projects veya /tr/projects
              href={`/${lang}/projects`}
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              {dict.hero.projectsBtn}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-8 py-4 rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors font-medium backdrop-blur-sm"
            >
              {dict.hero.contactBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: TECH STACK (Akan Şerit) */}
      <section className="py-10 bg-gray-900/30 border-y border-gray-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              {dict.hero.techStack}
            </p>
        </div>
        
        {/* Sonsuz Kaydırma Efekti */}
        <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-scroll whitespace-nowrap">
                {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                    <span 
                        key={index} 
                        className="mx-8 text-2xl font-bold text-gray-400 hover:text-blue-400 transition-colors cursor-hover-target"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {/* Sağ-Sol Karartma Geçişleri */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        </div>
      </section>

      {/* 3. BÖLÜM: ÖNE ÇIKAN PROJELER */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {dict.hero.featuredProjects}
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        {dict.hero.featuredDesc}
                    </p>
                </div>
                <Link 
                    href={`/${lang}/projects`} 
                    className="group flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors"
                >
                    {dict.hero.viewAll} 
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        // NOT: project.title ve description kısmı projeler JSON'ından geliyor. 
                        // İleride o JSON'ı da { en: [], tr: [] } şeklinde bölebiliriz!
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