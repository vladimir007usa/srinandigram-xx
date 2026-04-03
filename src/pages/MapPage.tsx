import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ASSETS
import img1 from '@/assets/41446787.webp';
import img2 from '@/assets/41446814.webp';
import img3 from '@/assets/41446817.webp';
import img4 from '@/assets/41446844.webp';
import img5 from '@/assets/41446865.webp';
import imgLand1 from '@/assets/68663755.webp'; 
import imgLand2 from '@/assets/68663898.webp';

const MapPage = () => {
  const { t } = useTranslation();
  const heroImages = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const slideVariants = {
    enter: { x: '100%', opacity: 1 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO SLIDER SECTION ================= */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black">
        
        {/* Back to Properties Link */}
        <Link 
          to="/#properties" 
          className="absolute top-8 left-1/2 -translate-x-1/2 z-50 inline-flex items-center text-white/90 hover:text-white hover:bg-black/40 transition-all font-bold group bg-black/20 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" /> 
          {t('map_page.back')}
        </Link>

        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            alt={`Project View ${currentIndex + 1}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6 text-white">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 drop-shadow-2xl text-[#d5b474]">
              {t('map_page.hero_title')}
            </h1>
            
            <p className="text-xl md:text-2xl tracking-[0.1em] text-white/95">
              <span className="font-para text-3xl md:text-4xl normal-case mr-2">Sri NandiGram</span>
              <span className="font-heading text-3xl md:text-4xl normal-case mr-1">{t('map_page.hero_subtitle')}</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative h-1 bg-white/40 w-12 overflow-hidden rounded-full"
            >
              <div 
                className={`absolute inset-0 bg-secondary transition-transform duration-[4000ms] ease-linear origin-left ${
                  index === currentIndex ? "scale-x-100" : "scale-x-0"
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="container-custom py-16">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-900">{t('map_page.header_title')}</h2>
          <p className="text-slate-500 mt-2">{t('map_page.header_subtitle')}</p>
        </div>

        {/* ================= SECTION 1: PICTURE LEFT | TEXT RIGHT ================= */}
        <section className="mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            
            <motion.div initial={{ opacity: 0, scale: 0.95, x: -30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} className="relative group overflow-hidden rounded-[2.5rem] shadow-lg h-full min-h-[400px]">
              <img loading="lazy" src={imgLand1} alt="Plot visualization 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-2">{t('map_page.sections.s1.vis')}</p>
                <div className="leading-tight">
                    <p className="text-xl font-bold uppercase">{t('map_page.sections.s1.label')}</p>
                    <p className="text-2xl font-para">{t('map_page.sections.s1.at')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> {t('map_page.sections.s1.badge')}
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900">
                  {t('map_page.sections.s1.title')}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t('map_page.sections.s1.desc')}
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
                {[
                  t('map_page.sections.s1.f1'),
                  t('map_page.sections.s1.f2'),
                  t('map_page.sections.s1.f3'),
                  t('map_page.sections.s1.f4'),
                  t('map_page.sections.s1.f5'),
                  t('map_page.sections.s1.f6')
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" /> 
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/919239633577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-secondary text-white font-black rounded-2xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 hover:-translate-y-1 inline-block"
                  >
                    {t('map_page.sections.s1.cta')}
                  </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: TEXT LEFT | PICTURE RIGHT ================= */}
        <section className="mt-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4 text-slate-900">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> {t('map_page.sections.s2.badge')}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                  {t('map_page.sections.s2.title')}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t('map_page.sections.s2.desc')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-secondary font-bold mb-2">{t('map_page.sections.s2.f1_t')}</h4>
                  <p className="text-sm text-slate-500">{t('map_page.sections.s2.f1_d')}</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-secondary font-bold mb-2">{t('map_page.sections.s2.f2_t')}</h4>
                  <p className="text-sm text-slate-500">{t('map_page.sections.s2.f2_d')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95, x: 30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} className="relative group overflow-hidden rounded-[2.5rem] shadow-lg h-full min-h-[400px] order-1 lg:order-2">
              <img loading="lazy" src={imgLand2} alt="Plot visualization 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8 text-right text-white">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400 mb-2">{t('map_page.sections.s2.vis')}</p>
                <div className="leading-tight">
                    <p className="text-xl font-bold uppercase">{t('map_page.sections.s2.label')}</p>
                    <p className="text-2xl font-para">{t('map_page.sections.s2.at')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= UPDATED ENQUIRY SECTION ================= */}
        <section className="pb-8">
          <div className="bg-[#8B5E3C] rounded-[3rem] px-6 py-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              {t('map_page.enquiry_title')}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('map_page.enquiry_subtitle')}
            </p>
            <a
              href="https://wa.me/919239633577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D2B06A] text-[#5C3A1E] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              {t('map_page.enquiry_cta')}
            </a>
          </div>
        </section>
      </div>

      {/* ✅ BACK TO PROPERTIES (NEW SECTION) */}
      <div className="container-custom pb-24 text-center">
        <Link
          to="/#properties"
          className="inline-flex items-center gap-2 text-[#4A3427] font-bold text-lg hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('map_page.back')}
        </Link>
      </div>
    </div>
  );
};

export default MapPage;