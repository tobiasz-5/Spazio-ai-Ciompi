"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [language, setLanguage] = useState("it");
  const [hoverColorDove, setHoverColorDove] = useState("");
  const [hoverColorChi, setHoverColorChi] = useState("");
  const colors = ["text-blue-400", "text-red-400", "text-green-400", "text-orange-400", "text-purple-400"];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <nav className="w-full h-25 absolute top-0 left-0 z-50 p-1 flex items-center bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto flex items-center justify-between text-white">
        
        {/* Sinistra: Dove Siamo (spostato più a sinistra) */}
        <div className="flex-1 flex justify-end pr-32">
          <a 
            href="#dove-siamo" 
            className={`whitespace-nowrap font-fugaz text-black text-2xl tracking-wide uppercase transition duration-200 ${hoverColorDove}`}
            onMouseEnter={() => setHoverColorDove(getRandomColor())}
          >
            Dove siamo
          </a>
        </div>

        {/* Centro: Logo perfettamente centrato */}
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
          <Image
            src="/logo_ciompi.svg"
            alt="Logo Spazio Ai Ciompi"
            width={142}  
            height={142}
          />
        </div>

        {/* Destra: Chi Siamo (spostato più a destra) */}
        <div className="flex-1 flex justify-start pl-32">
          <a 
            href="#chi-siamo" 
            className={`whitespace-nowrap font-fugaz text-black text-2xl tracking-wide uppercase transition duration-200 ${hoverColorChi}`}
            onMouseEnter={() => setHoverColorChi(getRandomColor())}
          >
            Chi siamo
          </a>
        </div>

        {/*Bandiere*/}
        <div className="flex space-x-2 ml-auto">
          <button onClick={() => setLanguage("it")}>
            <Image 
              src="/it.svg" 
              alt="IT" 
              width={18} 
              height={28} 
              className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "it" ? "opacity-100" : "opacity-50"}`}
            />
          </button>
          <button onClick={() => setLanguage("en")}>
            <Image 
              src="/gb.svg" 
              alt="EN" 
              width={18} 
              height={28} 
              className={`hover:brightness-125 transition duration-200 cursor-pointer ${language === "en" ? "opacity-100" : "opacity-50"}`}
            />
          </button>
        </div> 
      </div>
    </nav>
  );
}
