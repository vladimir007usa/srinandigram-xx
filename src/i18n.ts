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
        gallery: "Gallery",
        villas: "Villas",
        apartments: "Apartments",
        map: "Map",
        switch_ru: "Switch to Russian",
        switch_en: "Switch to English",
        back: "Back",
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
        expanded_title: "A Place for Mind, Body & Soul",
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
      features: {
        badge: "WHAT MAKES US SPECIAL",
        title_start: "Life at",
        subtitle: "Experience a unique blend of spiritual living, sustainable practices, and modern amenities.",
        btn_more: "Know More",
        btn_less: "Show Less",
        btn_gallery: "Go to Gallery",
        eco: "Eco Living",
        amenities: "Amenities",
        vcf: "Varnasrama College",
        devotional: "Devotional Life",
        edu: "Education",
        rec: "Recreation",
        items: {
          garden_t: "Organic Vegetable Garden",
          garden_d: "Fresh, chemical-free vegetables grown with love right in our community.",
          bee_t: "Bee\nKeeping",
          bee_d: "Sustainable beekeeping for fresh honey and supporting pollinators.",
          grove_t: "Mango Grove & Banana Farm",
          grove_d: "Lush orchards providing fresh fruits and serene walking paths.",
          security_t: "Secured Gated Community",
          security_d: "24x7x365 security with CCTV cameras for complete peace of mind.",
          grocery_t: "Nandigram Grocery Store",
          grocery_d: "A convenient on-site store providing all essential items and organic produce.",
          guest_t: "Srivas Bhavan Guest House",
          guest_d: "Comfortable staying facilities for residents and visiting guests.",
          water_t: "Water Filtration Plant",
          water_d: "Pure, treated water supply for all community needs.",
          stp_t: "Sewage Treatment Plant (STP)",
          stp_d: "Eco-friendly water recycling system to maintain our green spaces.",
          wifi_t: "Dedicated Internet Facilities",
          wifi_d: "High-speed connectivity to stay connected with the world.",
          temple_t: "Sri Sri Krishna Balaram Temple",
          temple_d: "Beautiful temple for daily darshan and spiritual programs.",
          yajna_t: "Garuda\nYajna Sala",
          yajna_d: "Sacred space for performing Vedic yajnas and spiritual ceremonies.",
          gau_t: "Gau-Nandi Sanctuary",
          gau_d: "Sacred cow sanctuary where cows are loved and protected.",
          college_t: "Varnashram College",
          college_d: "Traditional education integrating spiritual wisdom with practical skills.",
          research_t: "Vaishnav Research Institute",
          research_d: "Dedicated to preserving and advancing Vaishnava philosophy and culture.",
          gita_t: "Gita Pathshala",
          gita_d: "Learn the timeless wisdom of Bhagavad Gita in a nurturing environment.",
          play_t: "Children Playing Area",
          play_d: "Safe, engaging play spaces for children to grow and explore.",
          yoga_t: "Yoga & Vrinda Kunj",
          yoga_d: "Serene spaces for yoga, meditation, and spiritual practices.",
          archery_t: "Arjuna Archery Academy",
          archery_d: "Master the ancient art of focus and precision in our dedicated archery range."
        }
      },
      videos: {
        title_start: "Explore",
        title_end: "Our Vision",
        video1_title: "Sri NandiGram Journey",
        video2_title: "Sri NandiGram Experience",
        video3_title: "Sri NandiGram Festival"
      },
      contact: {
        badge: "Get In Touch",
        title_start: "Start Your",
        title_end: "Journey",
        subtitle: "Ready to make Sri NandiGram your home? Fill out the form and our team will reach out.",
        form: {
          name: "Full Name *",
          name_placeholder: "Your name",
          email: "Email Address *",
          email_placeholder: "your@email.com",
          phone: "Phone Number *",
          phone_placeholder: "Enter phone number",
          interest: "Interested In *",
          interest_placeholder: "Select property type",
          message: "Message",
          message_placeholder: "Tell us about your requirements...",
          sending: "Sending...",
          submit: "Submit Inquiry"
        },
        info: {
          title: "Quick Contact",
          call: "Call Us",
          email: "Email Us",
          whatsapp: "WhatsApp",
          whatsapp_sub: "Chat with our team",
          office: "Our Office",
          address: "Sri NandiGram Realty, Mayapur Road, Mayapur, Nadia District, West Bengal, India"
        },
        success: {
          title: "Inquiry Received!",
          message: "Thank you for reaching out to Sri NandiGram. We have received your details and our team will contact you shortly.",
          button: "Go Back"
        }
      },
      footer: {
        description: "A premium gated community in Mayapur offering luxury villas, plots, and spiritual living in harmony with nature.",
        quick_links: "Quick Links",
        properties: "Properties",
        contact_us: "Contact Us",
        festivals: "Festivals Calendar",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        rights: "All rights reserved.",
        links: {
          plots: "Premium Plots",
          villas: "Luxury Villas",
          land: "Open Land",
          pricing: "Pricing",
          home: "Home",
          about: "About",
          gallery: "Gallery",
          contact: "Contact"
        }
      },
      cta: {
        festivals: "Festivals",
        message: "Message Us"
      },
      calendar: {
        title: "Festivals Calendar - Sri NandiGram"
      },
      location: {
        badge: "Location",
        title_start: "Why",
        title_end: "Mayapur?",
        subtitle: "Mayapur is one of the most spiritually significant places in India, attracting millions of devotees and seekers from around the world.",
        visit_us: "Visit Us",
        directions: "Get Directions",
        benefits: {
          spiritual_t: "Spiritual Capital",
          spiritual_d: "Mayapur is the spiritual headquarters of ISKCON and a major pilgrimage destination.",
          natural_t: "Natural Beauty",
          natural_d: "Surrounded by lush greenery, rivers, and pristine natural landscapes.",
          growing_t: "Growing Infrastructure",
          growing_d: "Rapid development with schools, hospitals, and commercial facilities nearby.",
          connected_t: "Well Connected",
          connected_d: "2.5 hours from Kolkata, accessible by road and rail.",
          access_t: "Easy Access",
          access_d: "Nearest airport: Netaji Subhas Chandra Bose International Airport.",
          prime_t: "Prime Location",
          prime_d: "Strategic location with excellent appreciation potential."
        }
      },
      villas_page: {
        back: "Back to Properties",
        title: "Private Luxury Villas",
        subtitle_t: "Spiritual Living, Modern Comfort",
        subtitle_d: "Our villas in Sri NandiGram are designed with the principles of Vastu Shastra, ensuring your home is a sanctuary of positive energy.",
        video_title: "Experience The Villas",
        enquiry_title: "Inquire About Your Future Villas",
        enquiry_subtitle: "Book a private tour of our model homes and villas today.",
        enquiry_cta: "Contact Sales Team",
        types: {
          v1: "Villa Type 1",
          v2: "Villa Type 2"
        },
        labels: {
          exterior: "Exterior View",
          ground: "Ground Floor",
          first: "1st Floor",
          p3d: "3D Plan",
          p2d: "2D Plan"
        },
        features: {
          p1: "Premium Finish",
          p2: "Spacious Design"
        }
      },
      apartments_page: {
        title: "Premium Apartments",
        back: "Back to Properties",
        enquiry_title: "Inquire About Your Future Home",
        enquiry_subtitle: "Book a private tour of our model homes and villas today.",
        enquiry_cta: "Contact Sales Team",
        plans: {
          p3d: "3D Plan",
          p2d: "2D Plan"
        },
        options: {
          bhk1: {
            title: "1 BHK Apartment",
            size: "Total built up area 710 Sq. Ft.",
            desc: "Ideal for spiritual seekers or young professionals. Designed with a separate bedroom for privacy and a spacious hall for relaxation.",
            f1: "Spiritual Seeker’s Layout",
            f2: "Large Balcony",
            f3: "Premium Glass Finish",
            f4: "Vastu Compliant"
          },
          bhk2: {
            title: "2 BHK Apartment",
            size: "Total built up area 1170 Sq. Ft.",
            desc: "Perfect for growing families. Our unique 'No Shared Walls' design ensures maximum acoustic privacy and natural cross-ventilation.",
            f1: "2 Balconies",
            f2: "Guest/Study Room",
            f3: "Spacious Kitchen",
            f4: "Corner Unit View"
          }
        }
      },
      map_page: {
        back: "Back to Properties",
        hero_title: "Buy Land in Mayapur",
        hero_subtitle: "Gated Community",
        header_title: "Premium Plot Selection",
        header_subtitle: "Explore our available gated community plots in the heart of Mayapur Dham.",
        enquiry_title: "Inquire About Your Future Plots",
        enquiry_subtitle: "Ready to secure your land? Connect with us for pricing and site visit details.",
        enquiry_cta: "Contact Sales Team",
        sections: {
          s1: {
            badge: "Limited Plots Available",
            title: "Secure Your Sacred Space in Mayapur Dham",
            desc: "Buy your space within a secure gated, eco friendly community. Our plots offer the perfect balance of spiritual serenity and modern infrastructure.",
            vis: "Visualization A",
            label: "Planned Green Enclave",
            at: "at Sri NandiGram",
            f1: "Clear Title Deeds",
            f2: "24/7 Gated Security",
            f3: "Internal Paved Roads",
            f4: "Water & Electricity",
            f5: "Drainage System",
            f6: "Green Surroundings",
            cta: "Enquire Now"
          },
          s2: {
            badge: "Modern Lifestyle",
            title: "Architectural Excellence",
            desc: "Every plot is strategically placed to ensure maximum ventilation and Vastu compliance. Build your dream villa in a community designed for devotees and peace-seekers alike.",
            vis: "Visualization B",
            label: "Luxury Villa Concepts",
            at: "at Sri NandiGram",
            f1_t: "Temple Proximity",
            f1_d: "Located just 5 minutes from the main temple gates, ensuring you never miss a morning mangala-arati.",
            f2_t: "Community Living",
            f2_d: "Join a neighborhood of like-minded individuals in a safe, peaceful, and spiritually vibrant atmosphere."
          }
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
        gallery: "Галерея",
        villas: "Виллы",
        apartments: "Апартаменты",
        map: "Карта",
        switch_ru: "Переключить на русский",
        switch_en: "Переключить на английский",
        back: "Назад",
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
        expanded_title: "Место для ума, тела и души",
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
      features: {
        badge: "ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ",
        title_start: "Жизнь в",
        subtitle: "Испытайте уникальное сочетание духовной жизни, экологических практик и современных удобств.",
        btn_more: "Узнать больше",
        btn_less: "Свернуть",
        btn_gallery: "В галерею",
        eco: "Эко-жизнь",
        amenities: "Удобства",
        vcf: "Varnasrama College",
        devotional: "Духовная жизнь",
        edu: "Образование",
        rec: "Отдых",
        items: {
          garden_t: "Органический огород",
          garden_d: "Свежие овощи без химии, выращенные с любовью прямо в нашем сообществе.",
          bee_t: "Пчеловодство",
          bee_d: "Экологичное пчеловодство для получения свежего меда и поддержки природы.",
          grove_t: "Манговая роща и банановая ферма",
          grove_d: "Пышные сады, дарящие свежие фрукты и спокойные тропы для прогулок.",
          security_t: "Охраняемый поселок",
          security_d: "Круглосуточная охрана с системой видеонаблюдения для вашего спокойствия.",
          grocery_t: "Магазин Nandigram",
          grocery_d: "Удобный магазин на территории со всеми необходимыми товарами и органикой.",
          guest_t: "Гостевой дом Srivas Bhavan",
          guest_d: "Комфортные условия для проживания резидентов и их гостей.",
          water_t: "Станция фильтрации воды",
          water_d: "Чистая и очищенная вода для всех нужд сообщества.",
          stp_t: "Очистные сооружения (STP)",
          stp_d: "Экологичная система переработки воды для поддержания наших садов.",
          wifi_t: "Выделенный интернет",
          wifi_d: "Высокоскоростное соединение, чтобы всегда оставаться на связи с миром.",
          temple_t: "Храм Шри Шри Кришна-Баларам",
          temple_d: "Красивый храм для ежедневных даршанов и духовных программ.",
          yajna_t: "Гаруда\nЯджня-шала",
          yajna_d: "Священное место для проведения ведических яджний и церемоний.",
          gau_t: "Гошала Гау-Нанди",
          gau_d: "Священный приют, где коров любят и защищают.",
          college_t: "Колледж Варнашрам",
          college_d: "Традиционное образование, сочетающее духовную мудрость с навыками.",
          research_t: "Институт вайшнавских исследований",
          research_d: "Посвящен сохранению и развитию вайшнавской философии и культуры.",
          gita_t: "Гита Патхшала",
          gita_d: "Изучайте вечную мудрость Бхагавад-гиты в благоприятной атмосфере.",
          play_t: "Детская игровая зона",
          play_d: "Безопасные и интересные пространства для развития и игр ваших детей.",
          yoga_t: "Йога и Вринда Кундж",
          yoga_d: "Спокойные места для йоги, медитации и духовных практик.",
          archery_t: "Академия стрельбы из лука Арджуны",
          archery_d: "Освойте древнее искусство концентрации на нашей площадке для стрельбы."
        }
      },
      videos: {
        title_start: "Узнайте о",
        title_end: "Нашем Видении",
        video1_title: "Путешествие в Шри НандиГрам",
        video2_title: "Опыт в Шри НандиГрам",
        video3_title: "Фестиваль Шри НандиГрам"
      },
      contact: {
        badge: "Свяжитесь с нами",
        title_start: "Начните свое",
        title_end: "Путешествие",
        subtitle: "Готовы сделать Sri NandiGram своим домом? Заполните форму, и наша команда свяжется с вами.",
        form: {
          name: "Полное имя *",
          name_placeholder: "Ваше имя",
          email: "Электронная почта *",
          email_placeholder: "your@email.com",
          phone: "Номер телефона *",
          phone_placeholder: "Введите номер телефона",
          interest: "Вас интересует *",
          interest_placeholder: "Выберите тип недвижимости",
          message: "Сообщение",
          message_placeholder: "Расскажите нам о ваших требованиях...",
          sending: "Отправка...",
          submit: "Отправить запрос"
        },
        info: {
          title: "Быстрая связь",
          call: "Позвоните нам",
          email: "Напишите нам",
          whatsapp: "WhatsApp",
          whatsapp_sub: "Чат с нашей командой",
          office: "Наш офис",
          address: "Sri NandiGram Realty, Mayapur Road, Mayapur, Nadia District, West Bengal, India"
        },
        success: {
          title: "Запрос получен!",
          message: "Спасибо, что обратились в Sri NandiGram. Мы получили ваши данные, и наша команда свяжется с вами в ближайшее время.",
          button: "Вернуться"
        }
      },
      footer: {
        description: "Жилой комплекс премиум-класса в Маяпуре, предлагающий роскошные виллы, участки и духовную жизнь в гармонии с природой.",
        quick_links: "Быстрые ссылки",
        properties: "Недвижимость",
        contact_us: "Контакты",
        festivals: "Календарь фестивалей",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        rights: "Все права защищены.",
        links: {
          plots: "Земельные участки",
          villas: "Роскошные виллы",
          land: "Свободная земля",
          pricing: "Цены",
          home: "Главная",
          about: "О нас",
          gallery: "Галерея",
          contact: "Контакты"
        }
      },
      cta: {
        festivals: "Фестивали",
        message: "Напишите нам"
      },
      calendar: {
        title: "Календарь фестивалей - Sri NandiGram"
      },
      location: {
        badge: "Локация",
        title_start: "Почему",
        title_end: "Маяпур?",
        subtitle: "Маяпур — одно из самых духовно значимых мест в Индии, которое привлекает миллионы преданных и искателей со всего мира.",
        visit_us: "Посетите нас",
        directions: "Как добраться",
        benefits: {
          spiritual_t: "Духовная столица",
          spiritual_d: "Маяпур является духовной штаб-квартирой ИСККОН и крупным центром паломничества.",
          natural_t: "Природная красота",
          natural_d: "В окружении пышной зелени, рек и нетронутых природных ландшафтов.",
          growing_t: "Развитая инфраструктура",
          growing_d: "Активное развитие: школы, больницы и торговые центры поблизости.",
          connected_t: "Транспортная доступность",
          connected_d: "2.5 часа от Калькутты, доступ по дороге и железной дороге.",
          access_t: "Легкий доступ",
          access_d: "Ближайший аэропорт: международный аэропорт имени Нетаджи Субхас Чандра Боса.",
          prime_t: "Престижное место",
          prime_d: "Стратегическое расположение с отличным потенциалом роста стоимости."
        }
      },
      villas_page: {
        back: "Назад к недвижимости",
        title: "Частные роскошные виллы",
        subtitle_t: "Духовная жизнь, современный комфорт",
        subtitle_d: "Наши виллы в Sri NandiGram спроектированы по принципам Васту-шастры, что гарантирует гармонию и позитивную энергию в вашем доме.",
        video_title: "Посмотрите наши виллы",
        enquiry_title: "Узнайте больше о ваших будущих виллах",
        enquiry_subtitle: "Запишитесь на частный тур по нашим модельным домам и виллам сегодня.",
        enquiry_cta: "Связаться с отделом продаж",
        types: {
          v1: "Вилла тип 1",
          v2: "Вилла тип 2"
        },
        labels: {
          exterior: "Внешний вид",
          ground: "Первый этаж",
          first: "Второй этаж",
          p3d: "3D План",
          p2d: "2D План"
        },
        features: {
          p1: "Премиальная отделка",
          p2: "Просторный дизайн"
        }
      },
      apartments_page: {
        title: "Апартаменты премиум-класса",
        back: "Назад к недвижимости",
        enquiry_title: "Узнайте больше о вашем будущем доме",
        enquiry_subtitle: "Запишитесь на частный тур по нашим модельным домам сегодня.",
        enquiry_cta: "Связаться с отделом продаж",
        plans: {
          p3d: "3D План",
          p2d: "2D План"
        },
        options: {
          bhk1: {
            title: "1-комнатная квартира",
            size: "Общая площадь 66 кв. м (710 кв. футов)",
            desc: "Идеально подходит для духовных искателей или молодых специалистов. Отдельная спальня для уединения и просторный холл для отдыха.",
            f1: "Планировка для духовной жизни",
            f2: "Большой балкон",
            f3: "Панорамное остекление",
            f4: "Соответствие Васту"
          },
          bhk2: {
            title: "2-комнатная квартира",
            size: "Общая площадь 109 кв. м (1170 кв. футов)",
            desc: "Идеально для растущих семей. Уникальный дизайн «без общих стен» гарантирует максимальную звукоизоляцию и естественную вентиляцию.",
            f1: "2 балкона",
            f2: "Гостевая комната/кабинет",
            f3: "Просторная кухня",
            f4: "Угловой вид"
          }
        }
      },
      map_page: {
        back: "Назад к недвижимости",
        hero_title: "Купить землю в Маяпуре",
        hero_subtitle: "Закрытый поселок",
        header_title: "Выбор участков премиум-класса",
        header_subtitle: "Ознакомьтесь с доступными участками в самом сердце Маяпур Дхамы.",
        enquiry_title: "Узнайте больше о ваших будущих участках",
        enquiry_subtitle: "Готовы закрепить за собой землю? Свяжитесь с нами для уточнения цены и деталей визита.",
        enquiry_cta: "Связаться с отделом продаж",
        sections: {
          s1: {
            badge: "Доступно ограниченное количество участков",
            title: "Обеспечьте себе священное пространство в Маяпур Дхаме",
            desc: "Купите свое пространство в безопасном, закрытом, экологически чистом поселке. Наши участки предлагают идеальный баланс духовного спокойствия и современной инфраструктуры.",
            vis: "Визуализация A",
            label: "Планируемый зеленый анклав",
            at: "в Sri NandiGram",
            f1: "Чистые документы на право собственности",
            f2: "Круглосуточная охрана",
            f3: "Внутренние мощеные дороги",
            f4: "Вода и электричество",
            f5: "Дренажная система",
            f6: "Зеленое окружение",
            cta: "Узнать больше"
          },
          s2: {
            badge: "Современный стиль жизни",
            title: "Архитектурное совершенство",
            desc: "Каждый участок стратегически расположен для обеспечения максимальной вентиляции и соответствия Васту. Постройте виллу своей мечты в поселке, созданном для преданных и искателей покоя.",
            vis: "Визуализация B",
            label: "Концепции роскошных вилл",
            at: "в Sri NandiGram",
            f1_t: "Близость к храму",
            f1_d: "Расположен всего в 5 минутах от главных ворот храма, так что вы никогда не пропустите утреннюю мангала-арати.",
            f2_t: "Жизнь в сообществе",
            f2_d: "Присоединяйтесь к соседству единомышленников в безопасной, мирной и духовно насыщенной атмосфере."
          }
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
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;