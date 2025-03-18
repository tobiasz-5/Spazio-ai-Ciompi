"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
<div className="absolute top-[10%]  left-1/2 transform -translate-x-1/2 text-center z-10">
  <motion.h1
    initial={{ scale: [0.1, 0.5], y: -142, opacity: 0 }} // Parte molto piccolo e lontano
    animate={{ scale: 1, y: 42, opacity: 1 }} // Si avvicina e si posiziona sotto la navbar
    transition={{ duration: 2.4, ease: "easeOut" }}
    className="text-5xl text-white"
  >
    <span className="tracking-wide font-fugaz">SPAZIO...</span> <br />
    <span className="font-fugaz">AI CIOMPI</span>
  </motion.h1>
</div>

  );
}
