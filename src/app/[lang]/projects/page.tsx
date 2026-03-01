import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import { getDictionary } from '@/utils/getDictionary';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }>;
}) {
  const { lang } = await params;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dict = (await getDictionary(lang)) as any;
  
  return {
    title: dict.projects.metaTitle,
    description: dict.projects.metaDesc,
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }>;
}) {
  const { lang } = await params;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict = (await getDictionary(lang)) as any;
  const currentLang = lang as keyof typeof projectsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentProjects = projectsData[currentLang] as any[];
  return (
    <section className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
      
      <div className="max-w-4xl mx-auto mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {dict.projects.pageTitle}
        </h1>
        <p className="text-gray-400 text-lg">
          {dict.projects.pageDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            githubText={dict.projects.githubBtn}
            liveText={dict.projects.liveBtn}
          />
        ))}
      </div>

    </section>
  );
}