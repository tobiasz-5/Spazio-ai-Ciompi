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
                  alt="Santa Croce, Meetings, Events, Workshops"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </SwiperSlide>

            {/* Slide 3: Immagine */}
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/scorcio_scroce.jpeg"
                  alt="Santa Croce, Incontri professionali, Eventi, Lezioni, Workshops"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/seconda_immagine.jpeg"
                  alt="florence craftmanship"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/scorcio_tagliato_ciompi.jpg"
                  alt="Area espositiva dello Spazio ai Ciompi con allestimento per mostre d'arte"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/eventi.jpeg"
                  alt="Area esposizioni"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/ingresso_ciompi.jpg"
                  alt="Esposizioni artistiche"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/terza_immagine.jpeg"
                  alt="Evento culturale in corso nello Spazio ai Ciompi, con partecipanti e installazioni artistiche"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_1.jpeg"
                  alt="Evento culturale in corso nello Spazio ai Ciompi, Firenze, con partecipanti e installazioni artistiche"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_3.jpeg"
                  alt="Evento culturale"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_2.jpeg"
                  alt="partecipanti e installazioni artistiche"
                  fill
                  className="object-cover object-[center_90%] rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_2.jpeg"
                  alt="workshop legno"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_1.jpg"
                  alt="Il cavallino di legno"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_3.jpeg"
                  alt="attività artistiche"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_1.jpeg"
                  alt="attività artistiche, artigianato firenze"
                  fill
                  className="object-cover rounded-lg object-[center_42%]"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_2.jpg"
                  alt="artigianato firenze workshop"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_2.jpeg"
                  alt="Spazio ai ciompi, eventi, cultura"
                  fill
                  className="object-cover object-[center_10%] rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_3.jpeg"
                  alt="Allestimento per meeting e presentazioni"
                  fill
                  className="object-cover rounded-lg object-[center_20%]"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_4.jpg"
                  alt="Allestimento eventi"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/eventi_1_1.jpeg"
                  alt="meeting, eventi e presentazioni"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_5.jpg"
                  alt="craftman, wood, florence, room for many different kinds of events"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_5_1.jpeg"
                  alt="S. Ambrogio an open space for art, culture, events, lessons"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_6.jpeg"
                  alt="S. Ambrogio art room"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_7.jpeg"
                  alt="cultural events"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_5.jpeg"
                  alt="open space for art exhibition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_8.jpeg"
                  alt="open space for day rent florence center"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/lezione_ciompi_6.jpeg"
                  alt="open room for rent for lessons florence"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_9.jpeg"
                  alt="open room for exhibition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_9_1.jpeg"
                  alt="lezioni"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
             <div className="relative w-full h-96">
                <Image
                  src="/workshop_3.jpg"
                  alt="Allestimento per meeting e presentazioni"
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
                  alt="Sant Ambrogio, Meetings, Events, Workshops"
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
