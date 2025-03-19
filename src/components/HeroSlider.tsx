"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import HeroTitle from "./HeroTitle";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div>
    <HeroTitle />
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 24000 }}
      loop
      className="w-full h-screen relative"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/spazio_ciompi_sfondo.png"
            alt="Spazio Ai Ciompi"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/seconda_immagine.jpeg"
            alt="Seconda immagine"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/terza_immagine.jpeg"
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
