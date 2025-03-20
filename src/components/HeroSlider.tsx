"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import HeroTitle from "./HeroTitle";
import MovingText from "./MovingText";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div>
    <HeroTitle />
    <MovingText />
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 12000 }}
      loop
      className="w-full h-screen relative"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/scorcio_tagliato_ciompi.jpg"
            alt="Spazio Ai Ciompi"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      {/* <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/ingresso_ciompi.jpg"
            alt="Seconda immagine"
            fill
            className="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide> */}

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/piazza_ciompi.jpeg"
            alt="Terza immagine"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/specchio.jpeg"
            alt="Terza immagine"
            fill
            className="w-full h-full object-cover"
          />
        </div>

      </SwiperSlide>

      {/* Slide 3
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/quarta_immagine.jpeg"
            alt="Terza immagine"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide> */}

    </Swiper>
    </div>
  );
}
