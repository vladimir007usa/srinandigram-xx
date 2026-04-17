import { motion } from 'framer-motion';
import { ArrowLeft, Sprout, Leaf, TreePine, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import organicGarden from '@/assets/organic-garden.webp';
import beekeeping from '@/assets/beekeeping.webp';
import mangoGrove from '@/assets/mango-grove.webp';
import grocery from '@/assets/grocery.webp';

const EcoLivingPage = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: Sprout,
      title: t('features.items.garden_t'),
      description: t('features.items.garden_d'),
      image: organicGarden,
    },
    {
      icon: Leaf,
      title: t('features.items.bee_t'),
      description: t('features.items.bee_d'),
      image: beekeeping,
    },
    {
      icon: TreePine,
      title: t('features.items.grove_t'),
      description: t('features.items.grove_d'),
      image: mangoGrove,
    },
    {
      icon: ShoppingBag,
      title: t('features.items.grocery_t'),
      description: t('features.items.grocery_d'),
      image: grocery,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[40vh]">
        <img 
          src={organicGarden} 
          className="w-full h-full object-cover" 
          alt="Eco Living" 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container-custom text-center">
            <Link to="/#features" className="inline-flex items-center text-white mb-6 hover:text-[#d5b474] transition-colors text-lg md:text-xl">
              <ArrowLeft className="mr-2 w-6 h-6" /> {t('nav.back')}
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-wider">
              {t('features.eco')}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="p-2 bg-[#d5b474] rounded-lg">
                    <item.icon className="w-6 h-6 text-[#2a1d0d]" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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

export default EcoLivingPage;
