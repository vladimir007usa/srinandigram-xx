import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Sparkles, TreePine, Building, Train, Plane } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LocationSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Sparkles,
      title: t('location.benefits.spiritual_t'),
      description: t('location.benefits.spiritual_d'),
    },
    {
      icon: TreePine,
      title: t('location.benefits.natural_t'),
      description: t('location.benefits.natural_d'),
    },
    {
      icon: Building,
      title: t('location.benefits.growing_t'),
      description: t('location.benefits.growing_d'),
    },
    {
      icon: Train,
      title: t('location.benefits.connected_t'),
      description: t('location.benefits.connected_d'),
    },
    {
      icon: Plane,
      title: t('location.benefits.access_t'),
      description: t('location.benefits.access_d'),
    },
    {
      icon: MapPin,
      title: t('location.benefits.prime_t'),
      description: t('location.benefits.prime_d'),
    },
  ];

  return (
    <section id="location" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading font-bold text-[#d5b474] 
                         text-2xl md:text-3xl lg:text-4xl 
                         tracking-widest mb-2 uppercase">
            {t('location.badge')}
          </span>
          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
            <span className="text-[#d5b474]">{t('location.title_start')}</span> {t('location.title_end')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('location.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border/50 hover:shadow-soft transition-shadow"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-elevated border border-border/50">
              <iframe
                src="https://www.google.com/maps?q=Sri+NandiGram+Mayapur+West+Bengal&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri NandiGram Location Map"
                className="w-full"
              />
            </div>

            {/* Address Card */}
            <div className="p-6 bg-primary rounded-xl text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{t('location.visit_us')}</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Sri NandiGram Realty<br />
                    Mayapur Road, Mayapur<br />
                    Nadia District, West Bengal, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/RAyitsENAQxcZLBK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-2.5
                               bg-[#d5b474] text-[#2a1d0d] font-heading font-bold text-sm
                               rounded-full shadow-md
                               hover:bg-[#e8ca8a] hover:shadow-lg hover:scale-[1.03]
                               active:scale-95 transition-all duration-300"
                  >
                    {t('location.directions')}
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
