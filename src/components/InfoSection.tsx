'use client';
import { useTranslation, Trans } from '../../node_modules/react-i18next';

export default function InfoSection() {
  const { t } = useTranslation('common');

  // Offuscamento leggero
  const phone = '+39 371 766 5575';
  const encodedPhone = '393717665575';
  const emailUser = 'spazioaiciompi';
  const emailDomain = 'gmail.com';

  return (
    <section id="info" className="bg-white py-20 text-center">
      <div className="container max-w-[87%] sm:max-w-xl mx-auto px-4">
        <h2 className="text-3xl text-black font-glow">{t('info.title')}</h2>
        <p className="mt-4 text-[16px] text-gray-900 max-w-2xl font-lora mx-auto whitespace-pre-line">
          <Trans
            i18nKey="info.booking"
            components={{
              bold: <span className="font-bold" />,
              linkWhatsApp: (
                <a
                  href={`https://wa.me/${encodedPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                />
              ),
              linkSMS: (
                <a
                  href={`sms:+${encodedPhone}`}
                  className="text-blue-600 hover:underline"
                />
              ),
              linkNumber: (
                <a
                  href={`https://wa.me/${encodedPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                />
              ),
              linkEmail: (
                <a
                  href={`mailto:${emailUser}@${emailDomain}`}
                  className="text-blue-600 hover:underline"
                />
              )
            }}
          />
        </p>
      </div>
    </section>
  );
}
