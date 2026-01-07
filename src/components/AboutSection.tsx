import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Leaf, Heart, Users } from 'lucide-react';
import templeImg from '@/assets/temple.jpg';
import villaImg from '@/assets/villa.jpg';
import gardenImg from '@/assets/organic-garden.jpg';

const highlights = [
  {
    icon: Shield,
    title: 'Gated Security',
    description: '24/7 secured community with CCTV surveillance',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Organic farming, sustainable living practices',
  },
  {
    icon: Heart,
    title: 'Spiritual Living',
    description: 'Temple, yoga center, and meditation spaces',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Like-minded families in a nurturing environment',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="section-title mt-4 mb-6">
            Welcome to <span className="text-gradient-gold">Sri NandiGram</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A unique spiritual community in the sacred land of Mayapur, where devotion, nature, and modern comfort blend seamlessly.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={templeImg}
                  alt="Sri Sri Krishna Balaram Temple"
                  className="w-full h-48 object-cover rounded-xl shadow-soft"
                />
                <img
                  src={gardenImg}
                  alt="Organic vegetable garden"
                  className="w-full h-64 object-cover rounded-xl shadow-soft"
                />
              </div>
              <div className="pt-8">
                <img
                  src={villaImg}
                  alt="Luxury villa at Sri NandiGram"
                  className="w-full h-80 object-cover rounded-xl shadow-elevated"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-secondary rounded-xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              A Sanctuary for Mind, Body & Soul
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Sri NandiGram is more than just a residential community — it&apos;s a way of life. Nestled in the sacred town of Mayapur, the spiritual headquarters of ISKCON, our community offers a rare opportunity to live in harmony with nature, culture, and divine consciousness.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From organic farming and cow sanctuaries to yoga pavilions and the beautiful Sri Sri Krishna Balaram Temple, every aspect of Sri NandiGram is designed to nurture your spiritual journey while providing all modern amenities.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                >
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
