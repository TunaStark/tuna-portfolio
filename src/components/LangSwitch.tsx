"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LangSwitch() {
  const pathname = usePathname();

  // Mevcut URL'yi alıp, sadece dil kodunu değiştiren sihirli fonksiyon
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    // URL'ler "/en/hakkimda" gibi olduğu için index 1 her zaman dil kodudur
    segments[1] = locale; 
    return segments.join("/");
  };

  // Hangi dilde olduğumuzu anlıyoruz ki butonu ona göre parlatalım
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full p-1 shadow-lg">
      <Link
        href={redirectedPathName("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentLocale === "en"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/20"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }`}
      >
        EN
      </Link>
      
      <Link
        href={redirectedPathName("tr")}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentLocale === "tr"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/20"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }`}
      >
        TR
      </Link>
    </div>
  );
}