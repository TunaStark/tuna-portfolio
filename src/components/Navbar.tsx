"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Projeler", href: "/projects" },
  { name: "Dijital Sanat", href: "/digital-art" },
  { name: "Yapay Zeka", href: "/ai" },
  { name: "Hakkımda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Yeni: Scroll durumunu tutuyoruz
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Scroll olayını dinleyen useEffect
  useEffect(() => {
    const handleScroll = () => {
      // Sayfa 20px'den fazla aşağı kaydırıldıysa 'scrolled' true olsun
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          // Mantık: Eğer sayfa aşağı kaydırılmışsa VEYA Anasayfada değilsek -> Buzlu Cam Yap
          scrolled || !isHomePage
            ? "bg-gray-900/60 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-transparent border-b border-transparent" // Değilse tamamen şeffaf
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-white hover:text-blue-500 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Tuna<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-300"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl absolute w-full left-0 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => {
               const isActive = pathname === link.href;
               return (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive 
                        ? "bg-blue-900/20 text-blue-400" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                    }`}
                >
                    {link.name}
                </Link>
               )
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;