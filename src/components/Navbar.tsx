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

  // Stato per l'hamburger menu e per l'animazione allo scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Colori hover
  const colors = [
    "text-[#D48B5C]",
    "text-[#2A7FAA]",
    "text-[#F5C97F]",
    "text-[#7A956B]",
    "text-[#f5f5f5]",
  ];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  // Nascondo la navbar se scrollo in basso, la mostro se scrollo in alto
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
      {/*
        NOTA: la classe "relative" qui fa sì che l'elemento assoluto (il logo)
        si centri rispetto a questo contenitore, evitando overflow orizzontale.
      */}
      <div className="container mx-auto px-4 py-2 relative flex items-center justify-between text-white overflow-hidden
">
        
        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo in assoluto al centro */}
        <div className="absolute left-[12rem] transform -translate-x-1/2 cursor-pointer  overflow-hidden left 30%">
          <Link href="/">
            <Image
              src="/Spazio_ciompi_white.png"
              alt="Logo Spazio Ai Ciompi"
              width={180}
              height={70}
            />
          </Link>
        </div>

        {/* Link sinistra (desktop) */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#galleria"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorGalleria || "text-white"
            }`}
            onMouseEnter={() => setHoverColorGalleria(getRandomColor())}
          >
            Galleria
          </a>
          <a
            href="#dove-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorDove || "text-white"
            }`}
            onMouseEnter={() => setHoverColorDove(getRandomColor())}
          >
            Dove Siamo
          </a>
        </div>

        {/* Link destra (desktop) */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#chi-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorChi || "text-white"
            }`}
            onMouseEnter={() => setHoverColorChi(getRandomColor())}
          >
            Chi Siamo
          </a>
          <a
            href="#info"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorInfo || "text-white"
            }`}
            onMouseEnter={() => setHoverColorInfo(getRandomColor())}
          >
            Info
          </a>
        </div>

        {/* Bandiere (sempre visibili) */}
        <div className="flex space-x-2">
          <button onClick={() => setLanguage("it")}>
            <Image
              src="/it.svg"
              alt="IT"
              width={24}
              height={32}
              className={`hover:brightness-125 transition duration-200 cursor-pointer ${
                language === "it" ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
          <button onClick={() => setLanguage("en")}>
            <Image
              src="/gb.svg"
              alt="EN"
              width={24}
              height={32}
              className={`hover:brightness-125 transition duration-200 cursor-pointer ${
                language === "en" ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu a tendina su mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-gray-900/90">
          <a
            href="#galleria"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorGalleria || "text-white"
            }`}
            onMouseEnter={() => setHoverColorGalleria(getRandomColor())}
            onClick={() => setIsMenuOpen(false)}
          >
            Galleria
          </a>
          <a
            href="#dove-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorDove || "text-white"
            }`}
            onMouseEnter={() => setHoverColorDove(getRandomColor())}
            onClick={() => setIsMenuOpen(false)}
          >
            Dove Siamo
          </a>
          <a
            href="#chi-siamo"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorChi || "text-white"
            }`}
            onMouseEnter={() => setHoverColorChi(getRandomColor())}
            onClick={() => setIsMenuOpen(false)}
          >
            Chi Siamo
          </a>
          <a
            href="#info"
            className={`font-poppins text-lg uppercase transition-colors ${
              hoverColorInfo || "text-white"
            }`}
            onMouseEnter={() => setHoverColorInfo(getRandomColor())}
            onClick={() => setIsMenuOpen(false)}
          >
            Info
          </a>
        </div>
      )}
    </nav>
  );
}
