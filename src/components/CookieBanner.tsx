"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 pt-24 left-0 right-0 bg-gradient-to-t from-black via-gray-900 to-transparent transition-transform duration-300 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-[12px] text-center max-w-md">
        Questo sito utilizza cookie per migliorare l esperienza utente.
      </p>
      <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <button
          onClick={handleAccept}
          className="bg-[#2A7FAA] hover:bg-gray-800 text-white px-2 py-1 rounded-md text-[14px]"
        >
          Accetta
        </button>
        <button
          onClick={handleReject}
          className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded-md text-[14px]"
        >
          Rifiuta
        </button>
        <Link
          href="/cookie-privacy"
          className="text-[#2A7FAA] hover:underline text-[12px] px-4 whitespace-nowrap"
        >
          Privacy & Cookie Policy
        </Link>
      </div>
    </div>
  );
}
