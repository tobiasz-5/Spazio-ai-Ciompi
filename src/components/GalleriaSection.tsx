"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function GalleriaSection() {
  return (
    <section id="galleria" className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl text-black font-fugaz">GALLERIA</h2>
        <p className="mt-2 text-gray-700 text-2xl">
          Scopri le <span className="font-bold">immagini</span> e i <span className="font-bold">video</span> del nostro <span className="font-bold">spazio...</span>
        </p>

        {/* Swiper Slider */}
        <div className="mt-6 max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation
            pagination={{ clickable: true }}
            className="w-full h-96 rounded-lg shadow-lg"
          >
            {/* Slide 1: Immagine */}
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/piazza_ciompi.jpeg"
                  alt="Spazio interno"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3: Immagine */}
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/quarta_immagine.jpeg"
                  alt="Dettaglio artistico"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
}
