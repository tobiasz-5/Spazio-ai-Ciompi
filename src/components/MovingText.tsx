"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { text: "Eventi Culturali", color: "text-[#D48B5C]", direction: "left" }, // Marrone caldo
  { text: "Mostre", color: "text-[#2A7FAA]", direction: "right" }, // Blu profondo
  { text: "Workshop", color: "text-[#F5C97F]", direction: "left" }, // Beige dorato
  { text: "Lezioni", color: "text-[#D48B5C]", direction: "right" }, // Grigio scuro neutro
  { text: "Incontri Professionali", color: "text-[#7A956B]", direction: "left" }, // Marrone caldo
];



const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export default function MovingText() {
  const [randomData, setRandomData] = useState<{ size: number; offset: number; delay: number }[]>([]);

  useEffect(() => {
    setRandomData(
      items.map(() => ({
        size: Math.round(getRandom(1, 2)), // Dimensione casuale
        offset: getRandom(10, 20), // Offset verticale casuale
        delay: getRandom(0, 4), // Ritardo iniziale casuale
      }))
    );
  }, []);

  return (
    <div className="absolute font-fugaz top-70 left-0 w-full h-[142px] flex flex-col justify-center items-center z-50">
      {randomData.length > 0 &&
        items.map((item, index) => {
          const randomDuration = getRandom(24, 55);

          return (
            <motion.div
              key={index}
              initial={{
                x: item.direction === "left" ? `-${getRandom(100, 110)}vw` : `${getRandom(100, 105)}vw`,
              }}
              animate={{
                x: item.direction === "left" ? `${getRandom(100, 120)}vw` : `-${getRandom(100, 114)}vw`,
              }}
              transition={{
                duration: randomDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: getRandom(2, 5),
                delay: randomData[index].delay, // Ritardo ora gestito solo lato client
              }}
              className={`text-${randomData[index].size}xl font-extrabold uppercase ${item.color} text-center whitespace-nowrap text-glow px-2 py-1`}
              style={{
                position: "relative",
                top: `${index * 10 + randomData[index].offset}px`,
              }}
            >
              {item.text}
            </motion.div>
          );
        })}
    </div>
  );
}
