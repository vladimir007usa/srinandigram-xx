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
        subtitle: "Luxury Villas, Plot allocations and Premium Apartments in Mayapur — where Spirituality Meets Modern Living",
        explore: "Explore Properties",
        whatsapp: "Chat on WhatsApp",
      },
      offerings: {
        badge: "Our Offerings",
        title_start: "Find Your",
        title_end: "Perfect Property",
        villas: {
          title: "Premium Villa",
          description: "A villa in a secured gated community, built for comfort, care, and close family moments.",
          f1: "Vastu-compliant layouts",
          f2: "Road connectivity",
          f3: "High Glass Coverage",
          f4: "Gated Community",
          cta: "Explore Villas"
        },
        apartments: {
          title: "Premium Apartments",
          description: "These apartments suit families, professionals, and investors seeking long-term value.",
          f1: "1-3 BHK Options",
          f2: "No Shared Walls",
          f3: "Vastu Compliance design",
          f4: "Premium finishes",
          cta: "Explore Apartments"
        },
        plots: {
          title: "Plots Allocation",
          description: "Not just land — the beginning of everything you imagine. A place where your future takes shape.",
          f1: "Custom Size",
          f2: "Road Connectivity",
          f3: "Free Planing",
          f4: "Inside Community Sector",
          cta: "View Map"
        },
        footer: {
          title: "Ready to Own Your Dream Property?",
          cta: "Send a message"
        }
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
        subtitle: "Роскошные виллы, эксклюзивные земельные участки и квартиры высокого класса в сердце Маяпура, где духовность гармонично соединяется с современным стилем жизни.",
        explore: "Недвижимость",
        whatsapp: "Написать в WhatsApp",
      },
      offerings: {
        badge: "Что мы предлагаем",
        title_start: "Найдите свою",
        title_end: "идеальную недвижимость",
        villas: {
          title: "Виллы премиум-класса",
          description: "Виллы в охраняемом закрытом жилом комплексе, созданные для комфорта, уюта и тёплых семейных моментов.",
          f1: "Планировки, соответствующие принципам Васту",
          f2: "Удобная транспортная доступность",
          f3: "Панорамное остекление",
          f4: "Закрытый жилой комплекс",
          cta: "Смотреть виллы"
        },
        apartments: {
          title: "Апартаменты премиум-класса",
          description: "Квартиры идеально подходят для семей и инвесторов, ориентированных на долгосрочную перспективу.",
          f1: "1–3 комнаты",
          f2: "Без смежных стен",
          f3: "Дизайн, соответствующий принципам Васту",
          f4: " Премиальная отделка",
          cta: "Смотреть апартаменты"
        },
        plots: {
          title: "Земельные участки",
          description: "Не просто земля — начало всего, что вы воображаете. Место, где обретает форму ваше будущее.",
          f1: "Индивидуальный размер",
          f2: "Дорожная сеть",
          f3: "Свободная планировка",
          f4: "Внутри сообщества",
          cta: "Показать карту"
        },
        footer: {
          title: "Готовы стать владельцем недвижимости своей мечты?",
          cta: "Написать сообщение"
        }
      },
      change_language: "Сменить язык",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;