"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const colors = [
  "text-[#D48B5C]", // Marrone caldo più vivace
  "text-[#2A7FAA]", // Blu più brillante
  "text-[#F5C97F]", // Beige dorato più caldo
  "text-[#7A956B]", // Verde desaturato presente in alto a sinistra
];



const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export default function HeroTitle() {
  const [titleColor, setTitleColor] = useState("text-white");
  const [buttonColor, setButtonColor] = useState("text-white");

  return (
    <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 text-center z-10">
      <motion.h1
        initial={{ scale: [0.1, 0.5], y: -142, opacity: 0 }}
        animate={{ scale: 1, y: 42, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className={`text-3xl ${titleColor} bg-black/70 px-4 py-2 rounded-lg inline-block`}
        onMouseEnter={() => setTitleColor(getRandomColor())}
      >
        <span className="tracking-widest font-julius font-bold">SPAZIO...</span> <br />
        <span className="font-julius font-bold">AI CIOMPI</span>
      </motion.h1>

      <motion.a
        href="#info"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className={`absolute top-[550%] max-2xl:top-[550%]  max-xl:top-[550%] max-lg:top-[600%] max-md:top-[600%] max-sm:top-[600%] max-[421px]:!top-[520%] max-[371px]:!top-[360%] text-xl font-julius font-bold whitespace-nowrap left-1/2 transform -translate-x-1/2 ${buttonColor} bg-black/70 py-3 px-6 rounded-lg`}
        onMouseEnter={() => setButtonColor(getRandomColor())}
      >
        PRENOTA QUESTO SPAZIO
      </motion.a>
    </div>
  );
}
