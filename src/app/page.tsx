import HeroSlider from "@/components/HeroSlider";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import DoveSiamoSection from "@/components/DoveSiamoSection";
import InfoSection from "@/components/InfoSection";
import EventiSection from "@/components/EventiSection";
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
      <EventiSection /> 
      <GalleriaSection />
      <Footer /> 
    </main>
  );
}
