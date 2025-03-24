import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa le traduzioni (assicurati che i percorsi siano corretti)
import common_it from './public/locales/it/common.json';
import common_en from './public/locales/en/common.json';

i18n.use(initReactI18next).init({
  resources: {
    it: { common: common_it },
    en: { common: common_en },
  },
  lng: 'it', // lingua predefinita
  fallbackLng: 'it',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // non serve per React
  },
  debug: process.env.NODE_ENV === 'development',
});

export default i18n;
