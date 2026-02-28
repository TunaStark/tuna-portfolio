import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Oluşturduğumuz bileşeni çağırdık
import projectsData from '@/data/projects.json'; // JSON verisini çektik

// Metadata: Sayfa başlığı tarayıcı sekmesinde "Projeler | ..." görünecek
export const metadata = {
  title: 'Projelerim',
  description: 'Geliştirdiğim web uygulamaları ve açık kaynak projeler.',
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Neler Ürettim?
        </h1>
        <p className="text-gray-400 text-lg">
          Kullandığım teknolojiler ve geliştirdiğim çözümlerden seçkiler.
        </p>
      </div>

      {/* Grid Yapısı: Mobilde 1, Tablette 2, Masaüstünde 3 sütun */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
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

    </section>
  );
}