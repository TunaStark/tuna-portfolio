'use client';
import dynamic from 'next/dynamic';

const DynamicDigitalArtGallery = dynamic(() => import('@/components/DigitalArtGallery'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function DigitalArtPage() {
  return (
    <main>
      <DynamicDigitalArtGallery />
    </main>
  );
}