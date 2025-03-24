// src/app/layout.tsx
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Spazio ai Ciompi - Affitto per Eventi a Firenze",
  description: "Affitta uno spazio per eventi, mostre e workshop a Firenze. Scopri Spazio ai Ciompi!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        {/* Avvolgi l'albero client con il Provider */}
        <Providers>{children}</Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
