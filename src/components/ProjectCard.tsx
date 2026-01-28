import React from 'react';
import Link from 'next/link';

// TypeScript Interface: Gelen verinin tipini tanımlıyoruz (Type Safety)
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string | null; // Canlı link olmayabilir (opsiyonel)
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, githubUrl, liveUrl }) => {
  return (
    <div className="group border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 flex flex-col h-full">
      
      {/* Başlık */}
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      {/* Açıklama */}
      <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      
      {/* Etiketler (Tags) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs font-medium px-2 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Butonlar */}
      <div className="flex items-center gap-4 mt-auto">
        <Link 
          href={githubUrl} 
          target="_blank"
          rel="noopener noreferrer" // Güvenlik kuralı
          className="text-sm font-medium text-white hover:text-blue-400 underline underline-offset-4"
        >
          GitHub&apos;da İncele &rarr;
        </Link>
        
        {liveUrl && (
          <Link 
            href={liveUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Canlı Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;