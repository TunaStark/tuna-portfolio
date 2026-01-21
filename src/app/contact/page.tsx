import React from 'react';

export const metadata = {
  title: "İletişim | Tuna Portfolio",
  description: "Benimle iletişime geçin.",
};

export default function ContactPage() {
  return (
    // NAVBAR SORUNU İÇİN: pt-24 ekledik.
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          İletişime Geçin
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bir proje fikriniz mi var veya sadece tanışmak mı istiyorsunuz? 
          Aşağıdaki formu doldurabilir veya sosyal medyadan ulaşabilirsiniz.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
        <form className="space-y-6">
          
          {/* İsim Soyisim */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Adınız Soyadınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Örn: Ahmet Yılmaz"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Mesaj */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Size nasıl yardımcı olabilirim?"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Butonu */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/30"
          >
            Gönder
          </button>
        </form>

        {/* Alternatif İletişim (Mailto) */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-400">
                Veya doğrudan e-posta gönderin: <br />
                <a href="mailto:tuna@example.com" className="text-blue-600 hover:underline font-medium">
                    guralptuna@gmail.com
                </a>
            </p>
        </div>
      </div>
    </section>
  );
}