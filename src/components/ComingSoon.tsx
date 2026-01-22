import Link from 'next/link';
import React from 'react';

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      {/* İkon / Görsel */}
      <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
        {description}
      </p>

      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default ComingSoon;