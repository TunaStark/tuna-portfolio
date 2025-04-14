// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Tuna.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Projeler
          </Link>
          <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Hakkımda
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            İletişim
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <Link href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Projeler
          </Link>
          <Link href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Hakkımda
          </Link>
          <Link href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
            İletişim
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;