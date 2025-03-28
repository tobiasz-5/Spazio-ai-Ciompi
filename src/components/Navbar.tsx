'use client';

import { useTranslation } from '../../node_modules/react-i18next';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import i18next from 'i18next';

export default function Navbar() {
  const { t } = useTranslation('common');
  const [language, setLanguage] = useState("it");
  const [hoverColorDove, setHoverColorDove] = useState("");
  const [hoverColorChi, setHoverColorChi] = useState("");
  const [hoverColorGalleria, setHoverColorGalleria] = useState("");
  const [hoverColorInfo, setHoverColorInfo] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const colors = [
    "text-[#D48B5C]",
    "text-[#2A7FAA]",
    "text-[#F5C97F]",
    "text-[#7A956B]",
    "text-[#f5f5f5]",
    "text-[#9C4B32]",
  ];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18next.changeLanguage(lng);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-101 bg-gradient-to-b from-black via-gray-900 to-transparent transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container h-[72px] mx-auto px-4 py-2 flex items-center justify-between relative text-white overflow-hidden">
        {/* Bandierine desktop */}
        <div className="hidden md:flex space-x-2 absolute right-4 top-1/2 -translate-y-1/2">
          <button onClick={() => changeLanguage("it")}> 
            <Image src="/it.svg" alt="Italian Flag" width={18} height={32} className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "it" ? "opacity-100" : "opacity-50"}`} />
          </button>
          <button onClick={() => changeLanguage("en")}> 
            <Image src="/gb.svg" alt="English Flag" width={18} height={32} className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "en" ? "opacity-100" : "opacity-50"}`} />
          </button>
        </div>

        {/* Sinistra (menu desktop) */}
        <div className="hidden md:flex space-x-8 ml-9 pl-[182px] max-[1020px]:px-16 max-[1020px]:ml-[-60px] mx-auto px-4">
          <a href="#galleria" className={`font-glow text-[14px] font-extrabold uppercase transition-colors ${hoverColorGalleria || "text-white"}`} onMouseEnter={() => setHoverColorGalleria(getRandomColor())}>
            {t('navbar.galleria')}
          </a>
          <a href="#dove-siamo" className={`font-glow text-[14px] font-extrabold uppercase transition-colors ${hoverColorDove || "text-white"}`} onMouseEnter={() => setHoverColorDove(getRandomColor())}>
            {t('navbar.doveSiamo')}
          </a>
        </div>

        {/* Centro: Logo sempre centrato */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/Spazio_ciompi_white.png" alt="Logo Spazio Ai Ciompi" width={80} height={60} className="w-[80px] max-sm:w-[70px] h-auto" />
          </Link>
        </div>

        {/* Destra (menu desktop) */}
        <div className="hidden md:flex space-x-8 items-center mr-18 pr-[201px] max-[1020px]:px-16 max-[1020px]:mr-[-2px] mx-auto px-4">
          <a href="#chi-siamo" className={`font-glow font-extrabold text-[14px] uppercase transition-colors ${hoverColorChi || "text-white"}`} onMouseEnter={() => setHoverColorChi(getRandomColor())}>
            {t('navbar.chiSiamo')}
          </a>
          <a href="#info" className={`font-glow font-extrabold text-[14px] uppercase transition-colors ${hoverColorInfo || "text-white"}`} onMouseEnter={() => setHoverColorInfo(getRandomColor())}>
            {t('navbar.info')}
          </a>
        </div>

        {/* Mobile: Hamburger a sinistra */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={t('navbar.toggleMenu')}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile: Bandierine a destra */}
        <div className="md:hidden flex space-x-2">
          <button onClick={() => changeLanguage("it")}> 
            <Image src="/it.svg" alt="Italian Flag" width={18} height={32} className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "it" ? "opacity-100" : "opacity-50"}`} />
          </button>
          <button onClick={() => changeLanguage("en")}> 
            <Image src="/gb.svg" alt="English Flag" width={18} height={32} className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "en" ? "opacity-100" : "opacity-50"}`} />
          </button>
        </div>
      </div>

      {/* Mobile: Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center pt-2 pb-2 flex flex-col space-y-4 bg-gray-900/90">
          <a href="#galleria" className={`font-glow text-[16px] uppercase transition-colors ${hoverColorGalleria || "text-white"}`} onMouseEnter={() => setHoverColorGalleria(getRandomColor())} onClick={() => setIsMenuOpen(false)}>
            {t('navbar.galleria')}
          </a>
          <a href="#dove-siamo" className={`font-glow text-[16px] uppercase transition-colors ${hoverColorDove || "text-white"}`} onMouseEnter={() => setHoverColorDove(getRandomColor())} onClick={() => setIsMenuOpen(false)}>
            {t('navbar.doveSiamo')}
          </a>
          <a href="#chi-siamo" className={`font-glow text-[16px] uppercase transition-colors ${hoverColorChi || "text-white"}`} onMouseEnter={() => setHoverColorChi(getRandomColor())} onClick={() => setIsMenuOpen(false)}>
            {t('navbar.chiSiamo')}
          </a>
          <a href="#info" className={`font-glow text-[16px] uppercase transition-colors ${hoverColorInfo || "text-white"}`} onMouseEnter={() => setHoverColorInfo(getRandomColor())} onClick={() => setIsMenuOpen(false)}>
            {t('navbar.info')}
          </a>
        </div>
      )}
    </nav>
  );
}
