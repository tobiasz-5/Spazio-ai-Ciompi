"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { text: "", color: "text-[#f5f5f5]" },
];

const variants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 1.05 },
};

export default function OverlayTextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Cambia elemento ogni 3 secondi
    return () => clearInterval(intervalId);
  }, []);

  const currentItem = items[currentIndex];

  return (
    <div className="absolute mt-[-1100px] text-center top-0 left-0 w-full h-full z-50 flex justify-center items-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.text}
          className={`text-4xl font-glow font-bold uppercase ${currentItem.color}`}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          {currentItem.text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
