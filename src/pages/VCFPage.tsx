import { motion } from 'framer-motion';
import { ArrowLeft, Building, Flame, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import temple from '@/assets/temple.webp';
import yajnaSala from '@/assets/yajna-sala.webp';
import varnashramCollege from '@/assets/varnashram-college.webp';
import vaishnavInstitute from '@/assets/vaishnav-institute.webp';
import gitaPathshala from '@/assets/gita-pathshala.webp';

const VCFPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[40vh]">
        <img 
          src={temple} 
          className="w-full h-full object-cover" 
          alt="VCF" 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container-custom text-center px-4">
            <Link to="/#features" className="inline-flex items-center text-white mb-6 hover:text-[#d5b474] transition-colors text-lg md:text-xl">
              <ArrowLeft className="mr-2 w-6 h-6" /> {t('nav.back')}
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-wider">
              {t('features.vcf')}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          
          {/* Row 1: Temple - Image Left, Description Right (SWAPPED) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2">
              <img 
                src={temple} 
                className="w-full h-auto rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500" 
                alt="Temple" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#d5b474] rounded-xl shadow-lg">
                  <Building className="w-6 h-6 text-[#2a1d0d]" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#2a1d0d] uppercase tracking-wide">
                  {t('features.items.temple_t')}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('features.items.temple_d')}
              </p>
            </div>
          </motion.div>

          {/* Row 2: Yajna Sala - Description Left, Image Right (SWAPPED) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#d5b474] rounded-xl shadow-lg">
                  <Flame className="w-6 h-6 text-[#2a1d0d]" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#2a1d0d] uppercase tracking-wide whitespace-pre-line">
                  {t('features.items.yajna_t')}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('features.items.yajna_d')}
              </p>
              <div className="mt-8">
                <Link 
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#d5b474] text-[#2a1d0d] font-bold rounded-full shadow-lg hover:bg-[#e8ca8a] hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  <Flame className="w-5 h-5" />
                  Book Yajna
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src={yajnaSala} 
                className="w-full h-auto rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500" 
                alt="Yajna Sala" 
              />
            </div>
          </motion.div>

          {/* Row 3: Combined College & Institute - Image Left, Description Right (SWAPPED) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src={varnashramCollege} 
                className="w-full h-full object-cover rounded-[1.5rem] shadow-xl hover:scale-[1.05] transition-transform duration-500 aspect-[4/5]" 
                alt="College" 
              />
              <img 
                src={vaishnavInstitute} 
                className="w-full h-full object-cover rounded-[1.5rem] shadow-xl hover:scale-[1.05] transition-transform duration-500 aspect-[4/5]" 
                alt="Institute" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#d5b474] rounded-xl shadow-lg">
                  <GraduationCap className="w-6 h-6 text-[#2a1d0d]" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#2a1d0d] uppercase tracking-wide">
                  {t('features.items.college_t')} & {t('features.items.research_t')}
                </h2>
              </div>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>{t('features.items.college_d')}</p>
                <p>{t('features.items.research_d')}</p>
              </div>
            </div>
          </motion.div>

          {/* Row 4: Gita Pathshala - Description Left, Image Right (SWAPPED) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pb-20"
          >
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#d5b474] rounded-xl shadow-lg">
                  <BookOpen className="w-6 h-6 text-[#2a1d0d]" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#2a1d0d] uppercase tracking-wide">
                  {t('features.items.gita_t')}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('features.items.gita_d')}
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src={gitaPathshala} 
                className="w-full h-auto rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500" 
                alt="Gita Pathshala" 
              />
            </div>
          </motion.div>

        </div>

        {/* Closing CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/#features"
            className="inline-flex items-center gap-3 text-[#5C3A1E] font-heading font-bold text-xl md:text-2xl hover:text-[#d5b474] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
            {t('nav.back')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VCFPage;
