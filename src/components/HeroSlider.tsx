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
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-screen relative"
    >
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/piazza_ciompi.jpeg"
            alt="Vista di fronte a Spazio ai Ciompi, ingresso storico a Firenze"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>
      
      </SwiperSlide>


      {/* Slide 4 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/specchio.jpeg"
            alt="Interno accogliente di Spazio ai Ciompi allestito per workshop e eventi culturali"
            fill
            className="w-full h-full object-cover"
          />
        </div>

      </SwiperSlide>

      {/* Slide 1 */}
      <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/scorcio_3.jpg"
            alt="Ingresso principale Spazio ai Ciompi, luogo per eventi e mostre"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
            {/* Slide 1 */}
            <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/scorcio_scroce.jpeg"
            alt="Santa Croce, Meetings, Events, Workshops"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      {/* <SwiperSlide>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/eventi.jpeg"
            alt="Terza immagine"
            fill
            className="w-full h-full object-cover"
          />
        </div>

      </SwiperSlide> */}
    </Swiper>
    </div>
  );
}
