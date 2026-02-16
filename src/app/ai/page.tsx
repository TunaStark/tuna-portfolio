// import Image from "next/image";
import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Üst Başlık Bölümü */}
        <div className="space-y-4 animate-fade-in-up">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
            🚀 Son Projem
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">
            AI Assistant Studio
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Google Gemini altyapısını kullanan, bağlam farkındalığına sahip (Context-Aware), 
            gerçek zamanlı veri akışı (Streaming) sunan modern bir yapay zeka asistanı.
          </p>
        </div>

        {/* Ana Vitrin: Görsel ve Detaylar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol Taraf: Ekran Görüntüsü */}
          <div className="relative group rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-900 aspect-video">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Buraya screenshot koymalısın: public/ai-preview.png */}
            {/* Eğer resim yoksa bu div görünür */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-800">
               {/* Resmi koyunca alttaki Image componentini aç, bu div'i sil */}
               <span className="text-sm">Ekran Görüntüsü Alanı (ai-preview.png)</span>
            </div>

            {/* Resim Dosyası Varsa Yorumdan Çıkar: */}
            {/* <Image 
              src="/ai-preview.png" 
              alt="AI Project Preview" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            /> 
            */}
          </div>

          {/* Sağ Taraf: Özellikler ve Tech Stack */}
          <div className="space-y-8">
            
            {/* Özellik Listesi */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                ✨ Öne Çıkan Özellikler
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Gerçek Zamanlı Yanıt (Streaming/Typewriter Effect)",
                  "Bağlam Farkındalığı (Sohbeti Hatırlama)",
                  "Markdown & Code Highlighting Desteği",
                  "Supabase ile Geçmiş Sohbet Kaydı",
                  "Mobil Uyumlu Responsive Tasarım"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teknoloji Yığını (Tech Stack) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">🛠️ Kullanılan Teknolojiler</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14", "TypeScript", "Tailwind CSS", 
                  "Python (FastAPI)", "Supabase", "Google Gemini AI", "Vercel"
                ].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-md bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="https://ai-saas-gen-tuna.vercel.app/" 
                target="_blank"
                className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Canlı Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </Link>
              
              <Link 
                href="https://github.com/TunaStark/ai-saas-gen" 
                target="_blank"
                className="flex-1 sm:flex-none px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              >
                <span>GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}