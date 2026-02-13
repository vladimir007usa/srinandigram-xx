import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getSavedLanguage = () => {
  try {
    return localStorage.getItem('lang') || 'en';
  } catch {
    return 'en';
  }
};

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        properties: "Properties",
        about: "Our Story",
        location: "Location",
        contact: "Contact Us",
      },

      hero: {
        location: "Mayapur, West Bengal, India",
        title: "Premium property in Mayapur",
        subtitle:
          "Luxury Villas, Plot allocations and Premium Apartments in Mayapur — where Spirituality Meets Modern Living",
        explore: "Explore Properties",
        whatsapp: "Chat on WhatsApp",
      },

      change_language: "Language",
    },
  },

  ru: {
    translation: {
      nav: {
        home: "Главная",
        properties: "Недвижимость",
        about: "О Нас",
        location: "Локация",
        contact: "Контакты",
      },

      hero: {
        location: "Маяпур, Западная Бенгалия, Индия",
        title: "Недвижимость в Маяпуре Премиум Класса",
        subtitle:
          "Роскошные виллы, эксклюзивные земельные участки и квартиры высокого класса в сердце Маяпура — где духовность гармонично соединяется с современным стилем жизни.",
        explore: "Недвижимость",
        whatsapp: "Написать в WhatsApp",
      },

      change_language: "Сменить язык",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(), // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
