import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft } from 'lucide-react';

// Components
import Footer from '@/components/Footer';
// LocationSection import removed from here

// Assets
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
import plotsAllocation from '@/assets/plots allocation.jpg';

const galleryImages = [
  { src: plotsAllocation, alt: 'Master Plot Allocation Map', category: 'Layout' },
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
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/', { replace: true });
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  return (
    <main className="min-h-screen bg-[#FDFCF0]">
      <div className="pt-12 pb-20">
        <section id="gallery" ref={ref}>
          <div className="container-custom">
            
            <div className="flex flex-col items-start mb-16">
              <button 
                onClick={handleBackToHome}
                type="button"
                className="flex items-center gap-2 text-[#003366] hover:text-secondary transition-all mb-8 font-bold group bg-white/50 px-4 py-2 rounded-lg border border-[#003366]/10"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="w-full text-center"
              >
                <span className="text-[#d5b474] font-heading font-semibold text-sm uppercase tracking-wider">
                  Gallery
                </span>
                <h2 className="section-title mt-4 mb-6 text-[#5C3A1E]">
                  Experience <span className="text-[#d5b474] font-para tracking-wider ml-2">Sri NandiGram</span>
                </h2>
                <p className="section-subtitle mx-auto text-muted-foreground">
                  Take a visual tour of our beautiful community and discover the serenity that awaits you.
                </p>
              </motion.div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group shadow-lg ${
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-heading font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Horizontal rule and LocationSection removed from here */}
          </div>
        </section>
      </div>

      <Footer />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border-2 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GallerySection;