import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import organicGarden from '@/assets/organic-garden.jpg';
import gauSanctuary from '@/assets/gau-sanctuary.jpg';
import temple from '@/assets/temple.jpg';
import villa from '@/assets/villa.jpg';
import mangoGrove from '@/assets/mango-grove.jpg';
import playground from '@/assets/children-playground.jpg';
import yogaArea from '@/assets/yoga-area.jpg';
import plots from '@/assets/plots.jpg';
import beekeeping from '@/assets/beekeeping.jpg';

const galleryImages = [
  { src: heroBanner, alt: 'Aerial view of Sri NandiGram community', category: 'Community' },
  { src: temple, alt: 'Sri Sri Krishna Balaram Temple', category: 'Spiritual' },
  { src: villa, alt: 'Luxury villa exterior', category: 'Properties' },
  { src: organicGarden, alt: 'Organic vegetable garden', category: 'Nature' },
  { src: gauSanctuary, alt: 'Gau-Nandi Sanctuary', category: 'Spiritual' },
  { src: mangoGrove, alt: 'Lush mango grove', category: 'Nature' },
  { src: playground, alt: 'Children playing area', category: 'Lifestyle' },
  { src: yogaArea, alt: 'Yoga and meditation pavilion', category: 'Wellness' },
  { src: plots, alt: 'Premium residential plots', category: 'Properties' },
  { src: beekeeping, alt: 'Beekeeping farm', category: 'Nature' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="section-title mt-4 mb-6">
            Experience <span className="text-gradient-gold">Sri NandiGram</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Take a visual tour of our beautiful community and discover the serenity that awaits you.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 || index === 5 ? 'h-64 md:h-full' : 'h-48 md:h-56'
                }`}
              />
              <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-semibold rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-cream/10 rounded-full text-cream hover:bg-cream/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
