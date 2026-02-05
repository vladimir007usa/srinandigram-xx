import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Map, MessageCircle } from 'lucide-react';

import plotsImg from '@/assets/plots.jpg';            // Apartment image
import villaImg from '@/assets/villa.jpg';            // Villa / Row house image
import plotsAllocation from '@/assets/plots allocation.jpg';

const properties = [
  {
    title: 'Premium Villa',
    description:
      'A villa in a secured gated community, built for comfort, care, and close family moments.',
    image: plotsImg, // ✅ Apartment image moved here
    icon: Home,
    features: [
      'Vastu-compliant layouts',
      'Road connectivity',
      'High Glass Coverage',
      'Gated Community',
    ],
    cta: 'Explore Villas',
    path: '/properties/villas',
  },
  {
    title: 'Premium Apartments',
    description:
      'These apartments suit families, professionals, and investors seeking long-term value.',
    image: villaImg, // ✅ Villa image moved here
    icon: Building2,
    features: [
      '1-3 BHK Options',
      'No Shared Walls',
      'Vastu Compliance design',
      'Premium finishes',
    ],
    cta: 'Explore Apartments',
    path: '/properties/apartments',
  },
  {
    title: 'Plots Allocation',
    description:
      'Not just land — the beginning of everything you imagine. A place where your future takes shape.',
    image: plotsAllocation,
    icon: Map,
    features: [
      'Custom Size',
      'Road Connectivity',
      'Free Planing',
      'Inside Community Sector',
    ],
    cta: 'View Map',
    path: '/properties/map',
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const whatsappUrl = `https://wa.me/919239633577?text=${encodeURIComponent(
    'Hello! I am interested in Sri NandiGram properties.'
  )}`;

  return (
    <section id="properties" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading font-bold text-[#d5b474] 
                         text-2xl md:text-3xl lg:text-4xl 
                         tracking-widest mb-2 uppercase">
            Our Offerings
          </span>
          <h2 className="font-heading font-semibold text-lg md:text-xl">
  <span className="text-[#d5b474]">Find Your</span> Perfect Property
</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-secondary rounded-xl shadow-lg">
                    <property.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {property.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {property.description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={property.path}
                  className="mt-auto inline-flex items-center justify-center w-full py-3 px-6 bg-secondary text-secondary-foreground font-heading font-bold text-sm rounded-xl shadow-md hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn"
                >
                  {property.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 p-8 md:p-12 bg-primary rounded-2xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Own Your Dream Property?
          </h3>
          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-10 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Send a message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
