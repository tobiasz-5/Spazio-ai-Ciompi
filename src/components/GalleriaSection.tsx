'use client';
import { useTranslation, Trans } from '../../node_modules/react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function GalleriaSection() {
  const { t } = useTranslation('common');

  return (
    <section id="galleria" className="bg-gray-100 py-20 text-center">
      <div className="container max-w-[87%] mx-auto">
        <h2 className="text-4xl text-black font-glow">{t('galleria.title')}</h2>
        <p className="mt-2 text-gray-700 text-[16px] font-lora">
          <Trans 
            i18nKey="galleria.description" 
            components={{ bold: <span className="font-bold" /> }}
          />
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
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* Slide 2: Immagine */}
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/quarta_immagine.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* Slide 3: Immagine */}
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/scorcio_scroce.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/scorcio_tagliato_ciompi.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/eventi.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/ingresso_ciompi.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/terza_immagine.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_1.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_3.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_2.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover object-[center_90%] rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_2.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_1.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_3.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_1.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg object-[center_42%]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_2.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_2.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover object-[center_10%] rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_3.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_3.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg object-[center_20%]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_4.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_1.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_5.jpg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/seconda_immagine.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_5_1.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_6.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_7.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_5.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_8.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_6.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_9.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_9_1.jpeg"
                  alt="Dettaglio artistico"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
