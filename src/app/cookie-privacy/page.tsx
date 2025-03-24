'use client';
import { useTranslation, Trans } from 'react-i18next';

export default function CookiePrivacyPolicy() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-gray-200 font-lora text-gray-900 py-16 px-6 max-w-3xl mx-auto pt-30">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">
        {t('cookiePolicy.title')}
      </h1>

      {/* SEZIONE PRIVACY POLICY */}
      <h2 className="text-2xl font-bold mt-8 text-black">
        {t('cookiePolicy.privacyTitle')}
      </h2>
      <p className="text-lg mb-4 whitespace-pre-line">
        <Trans
          i18nKey="cookiePolicy.privacyDescription"
          components={{ bold: <span className="font-bold" /> }}
        />
      </p>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.dataCollectedTitle')}
      </h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>{t('cookiePolicy.dataCollected.item1')}</li>
        <li>{t('cookiePolicy.dataCollected.item2')}</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.dataUsageTitle')}
      </h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>{t('cookiePolicy.dataUsage.item1')}</li>
        <li>{t('cookiePolicy.dataUsage.item2')}</li>
        <li>{t('cookiePolicy.dataUsage.item3')}</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.googleMapsTitle')}
      </h3>
      <p className="text-lg mb-4">
        <Trans
          i18nKey="cookiePolicy.googleMapsDescription"
          components={{
            bold: <span className="font-bold" />,
            link: (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                className="text-[#2A7FAA] hover:underline"
              />
            )
          }}
        />
      </p>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.userRightsTitle')}
      </h3>
      <p className="text-lg mb-4">
        <Trans
          i18nKey="cookiePolicy.userRightsDescription"
          components={{
            link: (
              <a
                href="mailto:spazioaiciompi@gmail.com"
                className="text-[#2A7FAA] hover:underline"
              />
            )
          }}
        />
      </p>

      {/* SEZIONE COOKIE POLICY */}
      <h2 className="text-2xl font-bold mt-10 text-black">
        {t('cookiePolicy.cookieTitle')}
      </h2>
      <p className="text-lg mb-4">
        <Trans
          i18nKey="cookiePolicy.cookieDescription"
          components={{ bold: <span className="font-bold" /> }}
        />
      </p>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.cookieTypesTitle')}
      </h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>
          <strong>{t('cookiePolicy.cookieTypes.essentialTitle')}</strong>: {t('cookiePolicy.cookieTypes.essentialDescription')}
        </li>
        <li>
          <strong>{t('cookiePolicy.cookieTypes.analyticsTitle')}</strong>: {t('cookiePolicy.cookieTypes.analyticsDescription')}
        </li>
        <li>
          <strong>{t('cookiePolicy.cookieTypes.thirdPartyTitle')}</strong>: {t('cookiePolicy.cookieTypes.thirdPartyDescription')}
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.cookieManagementTitle')}
      </h3>
      <p className="text-lg mb-4">{t('cookiePolicy.cookieManagementDescription')}</p>
      <ul className="list-disc pl-6 text-lg">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=it"
            target="_blank"
            className="text-[#2A7FAA] hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
            target="_blank"
            className="text-[#2A7FAA] hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/it-it/HT201265"
            target="_blank"
            className="text-[#2A7FAA] hover:underline"
          >
            Safari
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-black">
        {t('cookiePolicy.contactTitle')}
      </h3>
      <p className="text-lg">
        <Trans
          i18nKey="cookiePolicy.contactDescription"
          components={{
            link: (
              <a
                href="mailto:spazioaiciompi@gmail.com"
                className="text-[#2A7FAA] hover:underline"
              />
            )
          }}
        />
      </p>
    </section>
  );
}
