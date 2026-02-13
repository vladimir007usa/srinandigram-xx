import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is Russian
  const isRussian = i18n.language.startsWith('ru');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brown-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBanner}
          alt="Sri NandiGram luxury villa community in Mayapur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/95 via-brown-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom section-padding text-left w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl pointer-events-auto"
        >
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-md border border-secondary/40 rounded-full px-5 py-2.5 transition-all hover:bg-secondary/50 hover:scale-105 active:scale-95 cursor-pointer group shadow-xl"
            >
              <MapPin className="w-4 h-4 text-secondary group-hover:animate-bounce" />
              <span className="text-white font-body text-sm font-medium">
                {t('hero.location')}
              </span>
            </a>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-cream mb-6 leading-tight"
          >
            {/* If Russian, we force Sri NandiGram to be a block (new line). If English, it stays inline. */}
            <span className={`font-para tracking-wider whitespace-nowrap mr-4 ${isRussian ? 'block mb-2' : 'inline-block'}`}>
              Sri NandiGram
            </span>
            <span className={`text-[#d5b474] ${isRussian ? 'block' : ''}`}>
              {t('hero.title')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-cream/90 font-body mb-12 max-w-3xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#properties"
              className="btn-secondary flex items-center justify-center px-8 py-4 text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              {t('hero.explore')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="https://wa.me/919239633577?text=Hi,%20I'm%20interested%20in%20Sri%20NandiGram%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-4 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            >
              {t('hero.whatsapp')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;