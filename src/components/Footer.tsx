import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Sol: Marka ve Açıklama */}
          <div className="space-y-4">
            {/* Metin rengini text-white yaptık */}
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              Tuna<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Modern web teknolojileri ile kullanıcı deneyimini odağına alan dijital çözümler üretiyorum.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-white">Menü</h3>
            <Link href="/projects" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Projeler</Link>
            <Link href="/about" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Hakkımda</Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">İletişim</Link>
          </div>

          {/* Sağ: Sosyal Medya */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-white">Sosyal</h3>
            {/* DÜZELTME 2: Güvenlik için 'rel="noopener noreferrer"' eklendi */}
            <Link 
                href="https://linkedin.com/in/tunaguralp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
            >
                LinkedIn
            </Link>
            <Link 
                href="https://github.com/TunaStark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
            >
                GitHub
            </Link>
            <Link 
                href="https://instagram.com/tunaxg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
            >
                Instagram
            </Link>
          </div>
        </div>

        {/* Alt Telif Kısmı - Kenarlığı border-gray-800 yaptık */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Tuna Güralp. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;