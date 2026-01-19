"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hangi sayfada olduğumuzu anlamak için

// Linkleri tek bir yerden yönetmek için konfigürasyon dizisi
// Gelecekte bir link değişirse sadece burayı güncellersin.
const NAV_LINKS = [
  { name: "Projeler", href: "/projects" },
  { name: "Dijital Sanat", href: "/digital-art" },
  { name: "Yapay Zeka", href: "/ai" },
  { name: "Hakkımda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Mevcut URL yolunu alır (Örn: /projects)
  const isHomePage = pathname === "/";
  return (
    // Backdrop blur efekti ekleyerek modern bir cam görünümü (Glassmorphism) sağladık.
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm
        ${
          isHomePage
            ? "border-b-0 border-transparent"
            : "border-b border-gray-200 dark:border-gray-800"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
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
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat" // Erişilebilirlik (Accessibility) için önemli
        >
          {/* İkonu CSS karakteri yerine basit SVG yaparsak daha profesyonel durur */}
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* Animasyonlu açılış yerine basit şartlı render, ama UX iyileştirildi */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 absolute w-full left-0 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // Tıklayınca menüyü kapat
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500"
                    }`}
                >
                  {link.name}
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
