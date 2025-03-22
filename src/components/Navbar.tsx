"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

  return (
    <nav
      className={`
        w-full fixed top-0 left-0 z-50
        bg-gradient-to-b from-black via-gray-900 to-transparent
        transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container h-[90px] mx-auto px-4 py-2 flex items-center justify-between text-white overflow-hidden">
        {/* Link sinistra (desktop) */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#galleria"
            className={`font-poppins text-lg uppercase transition-colors ${hoverColorGalleria || "text-white"}`}
            onMouseEnter={() => setHoverColorGalleria(getRandomColor())}
          >
            Galleria
          </a>
          <a
            href="#dove-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${hoverColorDove || "text-white"}`}
            onMouseEnter={() => setHoverColorDove(getRandomColor())}
          >
            Dove Siamo
          </a>
        </div>

        {/* Logo centrato */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/Spazio_ciompi_white.png"
              alt="Logo Spazio Ai Ciompi"
              width={100}
              height={70}
              className="w-[100px] max-sm:w-[70px] h-auto"
            />
          </Link>
        </div>

        {/* Link destra (desktop) */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#chi-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${hoverColorChi || "text-white"}`}
            onMouseEnter={() => setHoverColorChi(getRandomColor())}
          >
            Chi Siamo
          </a>
          <a
            href="#info"
            className={`font-poppins text-lg uppercase transition-colors ${hoverColorInfo || "text-white"}`}
            onMouseEnter={() => setHoverColorInfo(getRandomColor())}
          >
            Info
          </a>
          <div className="flex space-x-2">
            <button onClick={() => setLanguage("it")}> 
              <Image
                src="/it.svg"
                alt="IT"
                width={24}
                height={32}
                className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "it" ? "opacity-100" : "opacity-50"}`}
              />
            </button>
            <button onClick={() => setLanguage("en")}> 
              <Image
                src="/gb.svg"
                alt="EN"
                width={24}
                height={32}
                className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "en" ? "opacity-100" : "opacity-50"}`}
              />
            </button>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-gray-900/90">
          <a href="#galleria" className={`font-poppins text-lg uppercase transition-colors ${hoverColorGalleria || "text-white"}`} onMouseEnter={() => setHoverColorGalleria(getRandomColor())} onClick={() => setIsMenuOpen(false)}>Galleria</a>
          <a href="#dove-siamo" className={`font-poppins text-lg uppercase transition-colors ${hoverColorDove || "text-white"}`} onMouseEnter={() => setHoverColorDove(getRandomColor())} onClick={() => setIsMenuOpen(false)}>Dove Siamo</a>
          <a href="#chi-siamo" className={`font-poppins text-lg uppercase transition-colors ${hoverColorChi || "text-white"}`} onMouseEnter={() => setHoverColorChi(getRandomColor())} onClick={() => setIsMenuOpen(false)}>Chi Siamo</a>
          <a href="#info" className={`font-poppins text-lg uppercase transition-colors ${hoverColorInfo || "text-white"}`} onMouseEnter={() => setHoverColorInfo(getRandomColor())} onClick={() => setIsMenuOpen(false)}>Info</a>
        </div>
      )}
    </nav>
  );
}
