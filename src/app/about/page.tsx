import React from 'react';

// Yetenekleri kategorize edelim.
const SKILLS = [
  { category: "Frontend", items: ["React 19", "Next.js 15", "Tailwind CSS", "TypeScript", "Redux"] },
  { category: "Backend", items: ["Node.js", "C# / .NET", "Python", "RESTful API", "SQL"] },
  { category: "Tools & DevOps", items: ["Git & GitHub", "Docker", "VS Code", "Vercel", "Postman"] },
];

export const metadata = {
  title: "Hakkımda | Tuna Portfolio",
  description: "Yazılım geliştirme yolculuğum, yeteneklerim ve deneyimlerim.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Kodla <span className="text-blue-600">Çözüm Üreten</span> <br />
            Bir Mühendis.
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Merhaba! Ben Tuna. Teknolojiye olan tutkum, karmaşık problemleri basit ve etkili yazılım çözümlerine dönüştürme isteğimle başladı. 
            Sürekli öğrenen, modern web teknolojilerini yakından takip eden ve &quot;temiz kod&quot; prensibini benimseyen bir geliştiriciyim.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Şu anda iş arayışındayım ve yeni projelerde yer alarak ekibe değer katmak istiyorum. Hem Frontend hem de Backend tarafında kendimi geliştirmeye devam ediyorum.
          </p>
        </div>
        
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl flex items-center justify-center group">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:opacity-75 transition-opacity" />
             <span className="text-gray-500 font-medium">Fotoğraf Alanı</span>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">
          Teknik Yetkinlikler
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors shadow-sm hover:shadow-lg hover:shadow-blue-900/10">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}