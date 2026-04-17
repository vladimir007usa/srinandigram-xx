import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Sprout, Leaf, GraduationCap, BookOpen, Flame, Baby, 
  TreePine, HandHeart, Building, Hotel, Shield, Wifi, 
  Droplets, Sun, Target, ShoppingBag, Waves, Plus, Minus, ArrowRight
} from 'lucide-react';

import organicGarden from '@/assets/organic-garden.webp';
import beekeeping from '@/assets/beekeeping.webp';
import gauSanctuary from '@/assets/gau-sanctuary.webp';
import temple from '@/assets/temple.webp';
import playground from '@/assets/children-playground.webp';
import mangoGrove from '@/assets/mango-grove.webp';
import yogaArea from '@/assets/yoga-area.webp';
import varnashramCollege from '@/assets/varnashram-college.webp';
import vaishnavInstitute from '@/assets/vaishnav-institute.webp';
import gitaPathshala from '@/assets/gita-pathshala.webp';
import yajnaSala from '@/assets/yajna-sala.webp';
import guestHouse from '@/assets/guest-house.webp';
import securityGate from '@/assets/security-gate.webp';
import internetFacility from '@/assets/internet-facility.webp';
import waterTreatment from '@/assets/water-treatment.webp';
import archery from '@/assets/archery.webp';
import grocery from '@/assets/grocery.webp';
import stp from '@/assets/stp.webp';

interface FeatureItem {
  icon: any;
  title: string;
  image: string;
  link?: string;
}

interface CategoryBoxProps {
  title: string;
  items: FeatureItem[];
  targetPath: string;
  delay?: number;
  isInView: boolean;
}

const CategoryBox = ({ title, items, targetPath, delay = 0, isInView }: CategoryBoxProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-2 shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500"
    >
      <h3 className="font-heading font-black text-[#5C3A1E] mb-1.5 pb-1 border-b border-[#d5b474]/30 uppercase tracking-wider cursor-default select-none min-h-[3rem] flex items-center text-sm sm:text-lg">
        {title}
      </h3>
      
      <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 content-start">
        {items.slice(0, 4).map((item, idx) => (
          <div key={idx} className="group relative rounded-sm overflow-hidden aspect-square shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 p-1 flex flex-col justify-end">
              <item.icon className="w-5 h-5 text-[#d5b474] mb-1" />
              <p className="text-white text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wide whitespace-pre-line">
                {item.title}
              </p>
            </div>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Link 
          to={targetPath}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold bg-[#d5b474] text-[#2a1d0d] rounded-lg shadow-md hover:bg-[#e8ca8a] hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-wide"
        >
          <Plus className="w-4 h-4" />
          {t('features.btn_more')}
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ecoCategories = [
    { icon: Sprout, title: t('features.items.garden_t'), image: organicGarden },
    { icon: Leaf, title: t('features.items.bee_t'), image: beekeeping },
    { icon: TreePine, title: t('features.items.grove_t'), image: mangoGrove },
    { icon: ShoppingBag, title: t('features.items.grocery_t'), image: grocery },
  ];

  const amenitiesCategories = [
    { icon: Shield, title: t('features.items.security_t'), image: securityGate },
    { icon: Hotel, title: t('features.items.guest_t'), image: guestHouse },
    { icon: Droplets, title: t('features.items.water_t'), image: waterTreatment },
    { icon: Waves, title: t('features.items.stp_t'), image: stp },
  ];

  const vcfCategories = [
    { icon: Building, title: t('features.items.temple_t'), image: temple },
    { icon: Flame, title: t('features.items.yajna_t'), image: yajnaSala },
    { icon: BookOpen, title: t('features.items.gita_t'), image: gitaPathshala },
    { icon: GraduationCap, title: t('features.items.college_t'), image: varnashramCollege },
  ];



  const lifestyleCategories = [
    { icon: Baby, title: t('features.items.play_t'), image: playground },
    { icon: Sun, title: t('features.items.yoga_t'), image: yogaArea },
    { icon: Target, title: t('features.items.archery_t'), image: archery },
    { icon: HandHeart, title: t('features.items.gau_t'), image: gauSanctuary, link: 'https://www.nandisanctuary.com/' },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/50 to-white" ref={ref}>
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

        {/* MAIN GRID */}
        {/* Order: Amenities, VCF, Eco Living, Recreation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 items-start">
          <CategoryBox 
            title={t('features.vcf')} 
            items={vcfCategories} 
            targetPath="/vcf"
            isInView={isInView} 
            delay={0.1}
          />
          <CategoryBox 
            title={t('features.amenities')} 
            items={amenitiesCategories} 
            targetPath="/amenities"
            isInView={isInView} 
            delay={0.2}
          />
          <CategoryBox 
            title={t('features.eco')} 
            items={ecoCategories} 
            targetPath="/eco-living"
            isInView={isInView} 
            delay={0.3}
          />
          <CategoryBox 
            title={t('features.rec')} 
            items={lifestyleCategories} 
            targetPath="/recreation"
            isInView={isInView} 
            delay={0.4}
          />
        </div>

        {/* GALLERY CTA */}
        <div className="flex justify-center mt-16">
          <Link 
            to="/gallery" 
            className="group relative inline-flex items-center gap-3 bg-[#003366] text-white px-12 py-4 rounded-full font-black overflow-hidden shadow-xl hover:shadow-[#003366]/20 transition-all duration-300"
          >
            <span className="relative z-10">{t('features.btn_gallery')}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;