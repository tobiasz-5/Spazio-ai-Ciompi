import HeroSlider from "@/components/HeroSlider";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import DoveSiamoSection from "@/components/DoveSiamoSection";
import InfoSection from "@/components/InfoSection";
import GalleriaSection from "@/components/GalleriaSection";
import Footer from "@/components/Footer";
import "./globals.css";//qui

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ChiSiamoSection />
      <DoveSiamoSection />
      <InfoSection />
      <GalleriaSection />
      <Footer /> 
    </main>
  );
}
