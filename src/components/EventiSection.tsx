'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function EventiSection() {
  const { t } = useTranslation('common');

  return (
    <section id="eventi" className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-glow mb-8">
          {t('eventi.title')}
        </h2>
        {/* Layout flessibile: verticalmente su mobile, in riga su desktop */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Eventi Passati */}
          <div className="md:w-1/2">
            <h3 className="text-[16px] text-black mb-4 font-lora">
              {t('eventi.passedTitle')}
            </h3>
            <div className="flex items-center justify-center">
              <Image
                src="/locandina_1.jpg"
                alt="Locandina Evento Passato"
                width={300}
                height={200}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Separatore: su mobile una riga orizzontale, su desktop una linea verticale */}
          <hr className="md:hidden w-full border-t border-gray-300" />
          <div className="hidden md:block w-px h-full bg-gray-300" />

          {/* Eventi in Programma */}
          <div className="md:w-1/2">
            <h3 className="text-[16px] text-black mb-4 font-lora">
              {t('eventi.upcomingTitle')}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/locandina_2.jpg"
                  alt="Locandina Evento in Programma 1"
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/locandina_3.jpg"
                  alt="Locandina Evento in Programma 2"
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
