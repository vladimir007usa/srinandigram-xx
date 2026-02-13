import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Sprout, Leaf, GraduationCap, BookOpen, Flame, Baby, 
  TreePine, HandHeart, Building, Hotel, Shield, Wifi, 
  Droplets, Sun, Target, ShoppingBag, Waves, ChevronDown, ChevronUp 
} from 'lucide-react';

import organicGarden from '@/assets/organic-garden.jpg';
import beekeeping from '@/assets/beekeeping.jpg';
import gauSanctuary from '@/assets/gau-sanctuary.jpg';
import temple from '@/assets/temple.jpg';
import playground from '@/assets/children-playground.jpg';
import mangoGrove from '@/assets/mango-grove.jpg';
import yogaArea from '@/assets/yoga-area.jpg';
import varnashramCollege from '@/assets/varnashram-college.jpg';
import vaishnavInstitute from '@/assets/vaishnav-institute.jpg';
import gitaPathshala from '@/assets/gita-pathshala.jpg';
import yajnaSala from '@/assets/yajna-sala.jpg';
import guestHouse from '@/assets/guest-house.jpg';
import securityGate from '@/assets/security-gate.jpg';
import internetFacility from '@/assets/internet-facility.jpg';
import waterTreatment from '@/assets/water-treatment.jpg';
import archery from '@/assets/archery.jpg';
import grocery from '@/assets/grocery.jpg';
import stp from '@/assets/stp.jpg';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showFullContent, setShowFullContent] = useState(false);

  const ecoLiving = [
    { icon: Sprout, title: t('features.items.garden_t'), description: t('features.items.garden_d'), image: organicGarden },
    { icon: Leaf, title: t('features.items.bee_t'), description: t('features.items.bee_d'), image: beekeeping },
    { icon: TreePine, title: t('features.items.grove_t'), description: t('features.items.grove_d'), image: mangoGrove },
  ];

  const amenities = [
    { icon: Shield, title: t('features.items.security_t'), description: t('features.items.security_d'), image: securityGate },
    { icon: ShoppingBag, title: t('features.items.grocery_t'), description: t('features.items.grocery_d'), image: grocery },
    { icon: Hotel, title: t('features.items.guest_t'), description: t('features.items.guest_d'), image: guestHouse },
    { icon: Droplets, title: t('features.items.water_t'), description: t('features.items.water_d'), image: waterTreatment },
    { icon: Waves, title: t('features.items.stp_t'), description: t('features.items.stp_d'), image: stp },
    { icon: Wifi, title: t('features.items.wifi_t'), description: t('features.items.wifi_d'), image: internetFacility },
  ];

  const devotionalLife = [
    { icon: Building, title: t('features.items.temple_t'), description: t('features.items.temple_d'), image: temple },
    { icon: Flame, title: t('features.items.yajna_t'), description: t('features.items.yajna_d'), image: yajnaSala },
    { icon: HandHeart, title: t('features.items.gau_t'), description: t('features.items.gau_d'), image: gauSanctuary },
  ];

  const education = [
    { icon: GraduationCap, title: t('features.items.college_t'), description: t('features.items.college_d'), image: varnashramCollege },
    { icon: BookOpen, title: t('features.items.research_t'), description: t('features.items.research_d'), image: vaishnavInstitute },
    { icon: BookOpen, title: t('features.items.gita_t'), description: t('features.items.gita_d'), image: gitaPathshala },
  ];

  const recreation = [
    { icon: Baby, title: t('features.items.play_t'), description: t('features.items.play_d'), image: playground },
    { icon: Sun, title: t('features.items.yoga_t'), description: t('features.items.yoga_d'), image: yogaArea },
    { icon: Target, title: t('features.items.archery_t'), description: t('features.items.archery_d'), image: archery },
  ];

  const renderCard = (feature: any, index: number) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#d5b474]/10 rounded-xl">
            <feature.icon className="w-6 h-6 text-[#d5b474]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[#5C3A1E] mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-xl font-heading font-bold text-[#5C3A1E] mt-12 mb-6 border-l-4 border-[#d5b474] pl-4 uppercase tracking-wider">
      {children}
    </div>
  );

  return (
    <section id="features" className="pt-12 pb-20 bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-black text-[#d5b474] text-2xl md:text-3xl lg:text-4xl tracking-widest mb-4 uppercase px-6 md:px-0">
            {t('features.badge')}
          </h1>
          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
            <span className="text-[#d5b474]">{t('features.title_start')}</span> 
            <span className="font-para tracking-wider ml-2">Sri NandiGram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* ALWAYS VISIBLE: ECO LIVING */}
        <SectionTitle>{t('features.eco')}</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecoLiving.map((f, i) => renderCard(f, i))}
        </div>

        {/* TOGGLE BUTTON */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowFullContent(!showFullContent)}
            className="flex items-center gap-3 bg-[#003366] text-white px-12 py-3.5 rounded-full font-black border-2 border-[#003366] transition-all duration-300 hover:bg-white hover:text-[#003366] shadow-xl active:scale-95"
          >
            {showFullContent ? t('features.btn_less') : t('features.btn_more')}
            {showFullContent ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>

        {/* REVEALED CONTENT */}
        <AnimatePresence>
          {showFullContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <SectionTitle>{t('features.amenities')}</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {amenities.map((f, i) => renderCard(f, i))}
              </div>

              <SectionTitle>{t('features.devotional')}</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {devotionalLife.map((f, i) => renderCard(f, i))}
              </div>

              <SectionTitle>{t('features.edu')}</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {education.map((f, i) => renderCard(f, i))}
              </div>

              <SectionTitle>{t('features.rec')}</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {recreation.map((f, i) => renderCard(f, i))}
              </div>

              <div className="flex justify-center pb-12 mt-12">
                <Link 
                  to="/gallery" 
                  className="inline-block bg-[#003366] text-white px-12 py-3.5 rounded-full font-black border-2 border-[#003366] transition-all duration-300 hover:bg-white hover:text-[#003366] shadow-xl active:scale-95"
                >
                  {t('features.btn_gallery')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;