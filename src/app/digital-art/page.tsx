"use client";

import { useState, useEffect } from "react";

// GEÇİCİ VERİ (Kendi resimlerini public klasörüne atınca buraları güncellersin)
const ARTWORKS = [
  { id: 1, title: "Neon Gece", category: "Konsept Tasarım", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Karanlık Vadi", category: "Matte Painting", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Cyber Şehir", category: "3D Çizim", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Soyut Dalgalar", category: "Vektörel", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Kayıp Astronot", category: "Karakter", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Minimal Portre", category: "Vektörel", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
];

const CATEGORIES = ["Tümü", "Konsept Tasarım", "3D Çizim", "Vektörel", "Matte Painting", "Karakter"];

// TypeScript için seçilen eserin tipini belirliyoruz
type Artwork = typeof ARTWORKS[0];

export default function DigitalArtPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null); // 🌟 YENİ: Lightbox State'i

  // Kategoriye göre filtreleme
  const filteredArts = activeCategory === "Tümü" 
    ? ARTWORKS 
    : ARTWORKS.filter(art => art.category === activeCategory);

  // 🌟 YENİ: "Esc" tuşuna basınca Lightbox'ı kapatma özelliği (Premium UX)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArt(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 🌟 YENİ: Lightbox açıkken arkadaki sayfanın kaymasını (scroll) engelleme
  useEffect(() => {
    if (selectedArt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedArt]);

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Üst Başlık */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Dijital Sanat Galerisi
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Görsel dünyadaki keşiflerim, dijital çizimlerim ve konsept tasarımlarım.
          </p>
        </div>

        {/* Filtreleme Butonları */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeCategory === category 
                  ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/30" 
                  : "bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galeri Izgarası (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArts.map((art) => (
            <div 
              key={art.id} 
              onClick={() => setSelectedArt(art)} // 🌟 YENİ: Tıklayınca eseri seç
              className="group relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 cursor-zoom-in"
            >
              {/* Resim */}
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Karartması ve Yazılar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-purple-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {art.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {art.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredArts.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            Bu kategoride henüz bir eser bulunmuyor.
          </div>
        )}
      </div>

      {/* 🌟 YENİ: LIGHTBOX (MODAL) VİTRİNİ */}
      {selectedArt && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedArt(null)} // Arka plana tıklayınca kapat
        >
          {/* Kapat Butonu */}
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-50"
            onClick={(e) => {
              e.stopPropagation(); // İçerideki tıklamaların arkaya geçmesini engelle
              setSelectedArt(null);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Odaklanmış Resim Konteyneri */}
          <div 
            className="relative max-w-5xl max-h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Resme tıklayınca modal kapanmasın
          >
            <img 
              src={selectedArt.image} 
              alt={selectedArt.title} 
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
            />
            
            {/* Alt Bilgi Çubuğu */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20 rounded-b-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedArt.title}</h2>
              <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-full text-sm">
                {selectedArt.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}