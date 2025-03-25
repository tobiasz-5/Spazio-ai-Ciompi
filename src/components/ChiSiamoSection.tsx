'use client';
import { useTranslation, Trans } from '../../node_modules/react-i18next';

export default function ChiSiamoSection() {
  const { t } = useTranslation('common');

  return (
    <section id="chi-siamo" className="bg-white py-20 text-center">
      <div className="max-w-[87%] sm:max-w-xl mx-auto px-4">
        <h2 className="text-3xl text-black font-glow">{t('chiSiamo.title')}</h2>
        <p className="mt-4 text-[16px] text-gray-900 font-lora">
          <Trans 
            i18nKey="chiSiamo.description" 
            components={{ bold: <span className="font-bold" /> }} 
          />
        </p>
      </div>
    </section>
  );
}
