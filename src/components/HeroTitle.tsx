'use client';
import { motion } from "framer-motion";
import { useTranslation } from "../../node_modules/react-i18next";

export default function HeroTitle() {
  const { t } = useTranslation("common");

  return (
    <div className="absolute top-[0.32%] left-1/2 transform -translate-x-1/2 text-center z-10">
      <h1 className="sr-only"> Spazio ai Ciompi – Affitto Eventi, Mostre, Lezioni, Workshop, Exhibitions, Shows, Meetings - Firenze, Florence - Open Room, Space for rent</h1>
      <motion.a
        href="#chi-siamo"
        initial={{ scale: [0.1, 0.5], y: -142, opacity: 0 }}
        animate={{ scale: 1, y: 42, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="text-[24px] mt-[20px] text-white px-4 py-2 rounded-lg inline-block cursor-pointer text-glow"
      >
        <span className="tracking-widest font-glow font-bold">SPAZIO...</span> <br />
        <span className="font-glow font-bold">AI CIOMPI</span>
      </motion.a>

      <motion.a
        href="#info"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className="absolute mt-[-90px] top-[550%] max-2xl:top-[550%] max-xl:top-[552%] max-lg:top-[600%] max-md:top-[600%] max-sm:top-[600%] max-[421px]:!top-[520%] max-[371px]:!top-[520%] text-[14px] font-glow font-bold whitespace-nowrap left-1/2 transform -translate-x-1/2 text-white bg-black/50 hover:bg-black/70 py-3 px-6 rounded-lg"
      >
        {t("hero.prenota")}
      </motion.a>
    </div>
  );
}
