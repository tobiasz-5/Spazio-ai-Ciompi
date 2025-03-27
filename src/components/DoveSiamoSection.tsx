'use client';
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "../../node_modules/react-i18next";

export default function DoveSiamoSection() {
  const { t } = useTranslation("common");
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true") {
      setCookieConsent(true);
    }
  }, []);

  return (
    <section id="dove-siamo" className="bg-gray-100 py-20 text-center">
      <div className="max-w-[87%] sm:max-w-xl mx-auto px-4">
        <h2 className="text-3xl text-black font-glow">{t("doveSiamo.title")}</h2>
        <p className="mt-4 text-[16px] text-gray-900 max-w-2xl font-lora mx-auto whitespace-pre-line">
          <Trans
            i18nKey="doveSiamo.description"
            components={{
              bold: <span className="font-bold" />
            }}
          />
        </p>
        {cookieConsent ? (
          <iframe
            className="w-full h-64 max-w-lg mx-auto rounded-lg shadow-md mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.2730921710483!2d11.264458369593328!3d43.77094139819355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10.1!3m3!1m2!1s0x132a5408b62d6551%3A0xdaa303b842cbd9b2!2sPiazza%20dei%20Ciompi%2C%2017%2C%2050122%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1742417311294!5m2!1sit!2sit"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <p className="mt-4 text-red-900 text-sm">
            {t("doveSiamo.noConsent")}
          </p>
        )}
      </div>
    </section>
  );
}
