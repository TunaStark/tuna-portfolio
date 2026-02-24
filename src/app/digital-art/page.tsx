"use client";

import { useState } from "react";

// GEÇİCİ VERİ (Kendi resimlerini public klasörüne atınca buraları güncellersin)
const ARTWORKS = [
  { id: 1, title: "Neon Gece", category: "Konsept Tasarım", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Karanlık Vadi", category: "Matte Painting", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Cyber Şehir", category: "3D Çizim", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Soyut Dalgalar", category: "Vektörel", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Kayıp Astronot", category: "Karakter", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Minimal Portre", category: "Vektörel", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" }, // Örnek tekrar
];

const CATEGORIES = ["Tümü", "Konsept Tasarım", "3D Çizim", "Vektörel", "Matte Painting", "Karakter"];

export default function DigitalArtPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // Kategoriye göre filtreleme
  const filteredArts = activeCategory === "Tümü" 
    ? ARTWORKS 
    : ARTWORKS.filter(art => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Üst Başlık */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-blue-400 via-purple-400 to-white">
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
              className="group relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer"
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
    </div>
  );
}