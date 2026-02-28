'use client';
import dynamic from 'next/dynamic';

// Sorunlu Formspree bileşenini Next.js'in derleme (SSR) radarından kaçırıyoruz.
// "Sadece tarayıcıda yükle, sunucuda hiç dokunma" diyoruz.
const DynamicContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false, // İşte hayat kurtaran o sihirli satır!
  loading: () => (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p>İletişim formu yükleniyor...</p>
      </div>
    </div>
  ),
});

export default function ContactPage() {
  return (
    <main>
      {/* Artık form güvenli bir şekilde sadece istemcide (Client) çalışacak */}
      <DynamicContactForm />
    </main>
  );
}