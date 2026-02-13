import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Leaf, Heart, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import templeImg from '@/assets/temple.jpg';
import villaImg from '@/assets/villa.jpg';
import gardenImg from '@/assets/organic-garden.jpg';

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    {
      icon: Shield,
      title: t('about.h1_t'),
      description: t('about.h1_d'),
    },
    {
      icon: Leaf,
      title: t('about.h2_t'),
      description: t('about.h2_d'),
    },
    {
      icon: Heart,
      title: t('about.h3_t'),
      description: t('about.h3_d'),
    },
    {
      icon: Users,
      title: t('about.h4_t'),
      description: t('about.h4_d'),
    },
  ];

  return (
    <section id="about" className="pt-12 pb-4 bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h1 className="font-heading font-bold text-[#d5b474] 
                         text-2xl md:text-3xl lg:text-4xl 
                         tracking-widest mb-2 uppercase">
            {t('about.badge')}
          </h1>

          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
            <span className="font-para tracking-wider mr-2">
              {t('about.title_part1')}
            </span>
            <span className="text-[#d5b474]">{t('about.title_part2')}</span>
          </h2>

          <p className="section-subtitle mx-auto mb-6 max-w-2xl text-sm md:text-base text-muted-foreground">
            {t('about.subtitle')}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-8 py-2.5 
                       bg-[#003366] text-white border-2 border-[#003366]
                       hover:bg-white hover:text-[#003366] 
                       font-heading font-bold rounded-lg shadow-lg 
                       transition-all duration-300 transform active:scale-95"
          >
            {isExpanded ? (
              <>{t('about.show_less')} <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>{t('about.read_more')} <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img
                        src={templeImg}
                        alt="Temple"
                        className="w-full h-48 object-cover rounded-xl shadow-soft"
                      />
                      <img
                        src={gardenImg}
                        alt="Garden"
                        className="w-full h-64 object-cover rounded-xl shadow-soft"
                      />
                    </div>
                    <div className="pt-8">
                      <img
                        src={villaImg}
                        alt="Villa"
                        className="w-full h-80 object-cover rounded-xl shadow-elevated"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-secondary/20 rounded-xl -z-10" />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {t('about.expanded_title')}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4 text-sm md:text-base">
                    {t('about.p1')}
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6 text-sm md:text-base">
                    {t('about.p2')}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {highlights.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50"
                      >
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <item.icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground text-sm">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-[11px] mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;