"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitch from "./LangSwitch";

const NAV_ROUTES = [
  { key: "projects", href: "/projects" },
  { key: "digitalArt", href: "/digital-art" },
  { key: "ai", href: "/ai" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

// DİKKAT: 'lang' prop'unu sildik, sadece 'dict' alıyor.
const Navbar = ({ dict }: { dict: Record<string, string> }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // YENİ: Dili direkt URL'den çekiyoruz! (Örn: /en/contact -> "en")
  const currentLang = pathname?.split("/")[1] || "en";

  const isHomePage = pathname === `/${currentLang}` || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-gray-900/60 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href={`/${currentLang}`}
          className="text-2xl font-extrabold tracking-tighter text-white hover:text-blue-500 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Tuna<span className="text-blue-600">.</span>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {NAV_ROUTES.map((route) => {
              const isActive = pathname?.includes(route.href);
              return (
                <Link
                  key={route.href}
                  // YENİ: URL'yi currentLang ile oluşturuyoruz
                  href={`/${currentLang}${route.href}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-300"
                  }`}
                >
                  {dict[route.key]}
                </Link>
              );
            })}
          </div>

          <div className="pl-4 border-l border-gray-700/50">
            <LangSwitch />
          </div>
        </div>

        {/* MOBİL MENÜ */}
        <div className="md:hidden flex items-center gap-4">
          <LangSwitch />

          <button
            className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBİL MENÜ İÇERİĞİ */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl absolute w-full left-0 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_ROUTES.map((route) => {
              const isActive = pathname?.includes(route.href);
              return (
                <Link
                  key={route.href}
                  // YENİ: URL'yi currentLang ile oluşturuyoruz
                  href={`/${currentLang}${route.href}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-900/20 text-blue-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                  }`}
                >
                  {dict[route.key]}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;