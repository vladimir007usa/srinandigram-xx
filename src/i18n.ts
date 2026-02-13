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
      about: {
        badge: "OUR STORY",
        title_part1: "Sri NandiGram",
        title_part2: "Brings To You",
        subtitle: "A unique spiritual community in the sacred land of Mayapur, where devotion, nature, and modern comfort blend seamlessly.",
        read_more: "Read More",
        show_less: "Show Less",
        expanded_title: "A Sanctuary for Mind, Body & Soul",
        p1: "Sri NandiGram is more than just a residential community — it's a way of life. Nestled in the sacred town of Mayapur, the spiritual headquarters of ISKCON, our community offers a rare opportunity to live in harmony with nature, culture, and divine consciousness.",
        p2: "From organic farming and cow sanctuaries to yoga pavilions and the beautiful Sri Sri Krishna Balaram Temple, every aspect of Sri NandiGram is designed to nurture your spiritual journey while providing all modern amenities.",
        h1_t: "Gated Security",
        h1_d: "24/7 secured community with CCTV surveillance",
        h2_t: "Eco-Friendly",
        h2_d: "Organic farming, sustainable living practices",
        h3_t: "Spiritual Living",
        h3_d: "Temple, yoga center, and meditation spaces",
        h4_t: "Community",
        h4_d: "Like-minded families in a nurturing environment"
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
          f1: "Планировки по Васту",
          f2: "Транспортная доступность",
          f3: "Панорамное остекление",
          f4: "Закрытый комплекс",
          cta: "Смотреть виллы"
        },
        apartments: {
          title: "Апартаменты премиум-класса",
          description: "Квартиры идеально подходят для семей и инвесторов, ориентированных на долгосрочную перспективу.",
          f1: "1–3 комнаты",
          f2: "Без смежных стен",
          f3: "Дизайн по Васту",
          f4: "Премиальная отделка",
          cta: "Смотреть Квартиры"
        },
        plots: {
          title: "Земельные участки",
          description: "Земельные участки — начало всего, что вы себе представляете. Место, где формируется ваше будущее.",
          f1: "Индивидуальные участки",
          f2: "Лёгкий подъезд",
          f3: "Свободное планирование",
          f4: "Внутри сектора жилого комплекса",
          cta: "Выбрать участок"
        },
        footer: {
          title: "Готовы стать владельцем недвижимости своей мечты?",
          cta: "Написать сообщение"
        }
      },
      about: {
        badge: "НАША ИСТОРИЯ",
        title_part1: "Sri NandiGram",
        title_part2: "представляет вам",
        subtitle: "Уникальное духовное сообщество на священной земле Маяпура, где преданность, природа и современный комфорт гармонично сочетаются.",
        read_more: "Читать далее",
        show_less: "Свернуть",
        expanded_title: "Обитель для ума, тела и души",
        p1: "Sri NandiGram — это не просто жилой комплекс, это образ жизни. Наше сообщество, расположенное в священном городе Маяпур, духовной столице ИСККОН, предлагает редкую возможность жить в гармонии с природой, культурой и божественным сознанием.",
        p2: "От органического земледелия и защиты коров до павильонов для йоги и прекрасного храма Шри Шри Кришна-Баларам — каждый аспект Sri NandiGram разработан для вашего духовного пути со всеми современными удобствами.",
        h1_t: "Охраняемая зона",
        h1_d: "Круглосуточная охрана и видеонаблюдение",
        h2_t: "Экологичность",
        h2_d: "Органическое хозяйство, устойчивое развитие",
        h3_t: "Духовная жизнь",
        h3_d: "Храм, центр йоги и места для медитации",
        h4_t: "Сообщество",
        h4_d: "Семьи единомышленников в благоприятной среде"
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