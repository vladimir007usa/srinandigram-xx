import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Maximize2, Home, Building2, Map } from 'lucide-react';
import plotsImg from '@/assets/plots.jpg';
import villaImg from '@/assets/villa.jpg';
import heroBanner from '@/assets/hero-banner.jpg';

const properties = [
  {
    title: 'Premium Plots',
    description: 'Build your dream home on our meticulously planned residential plots with all modern amenities.',
    image: plotsImg,
    icon: Map,
    features: ['Vastu-compliant layouts', 'Road connectivity', 'Underground utilities', 'Landscaped surroundings'],
    cta: 'View Plots',
  },
  {
    title: 'Luxury Villas',
    description: 'Ready-to-move premium villas designed with traditional aesthetics and contemporary comfort.',
    image: villaImg,
    icon: Home,
    features: ['2-4 BHK options', 'Private gardens', 'Modern architecture', 'Premium finishes'],
    cta: 'Explore Villas',
  },
  {
    title: 'Open Land',
    description: 'Invest in larger land parcels for farming, ashrams, or custom development projects.',
    image: heroBanner,
    icon: Maximize2,
    features: ['Agricultural land', 'Flexible usage', 'Scenic views', 'Long-term investment'],
    cta: 'Learn More',
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="properties" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="section-title mt-4 mb-6">
            Find Your <span className="text-gradient-gold">Perfect Property</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose from premium plots, luxury villas, or open land to create your spiritual haven.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <property.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {property.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {property.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-primary font-heading font-semibold text-sm group-hover:text-secondary transition-colors"
                >
                  {property.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 bg-primary rounded-2xl text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Own Your Piece of Paradise?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Schedule a site visit to experience the serenity of Sri NandiGram firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-secondary">
              Request a Quote
            </a>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground/10">
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
