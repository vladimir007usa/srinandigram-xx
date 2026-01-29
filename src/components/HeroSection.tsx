import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brown-dark"
    >
      {/* 1. Background Layer - Locked to the back */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBanner}
          alt="Sri NandiGram luxury villa community in Mayapur"
          className="w-full h-full object-cover"
        />
        {/* Deep gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/95 via-brown-dark/60 to-transparent" />
      </div>

      {/* 2. Interactive Content Layer - Elevated for Clickability */}
      <div className="relative z-30 container-custom section-padding text-left w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl pointer-events-auto" // Re-enables clicks for just the content
        >
          {/* Location Badge - Now highly interactive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+NandiGram+Mayapur+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-md border border-secondary/40 rounded-full px-5 py-2.5 transition-all hover:bg-secondary/50 hover:scale-105 active:scale-95 cursor-pointer group shadow-xl"
            >
              <MapPin className="w-4 h-4 text-secondary group-hover:animate-bounce" />
              <span className="text-white font-body text-sm font-medium">
                Mayapur, West Bengal, India
              </span>
            </a>
          </motion.div>

          {/* Title - Using 'Para' font for the brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-cream mb-6 leading-tight"
          >
            <span className="font-para tracking-wider block md:inline mr-4">
              Sri NandiGram
            </span>
            <span className="text-[#d5b474]">
              Premium property in Mayapur
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-cream/90 font-body mb-12 max-w-2xl"
          >
            Luxury Villa, Plots allocation and Premium Apartments in Mayapur —
            where Spirituality Meets Modern Living
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#properties"
              className="btn-secondary flex items-center justify-center px-8 py-4 text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Explore Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="https://wa.me/919239633577?text=Hi,%20I'm%20interested%20in%20Sri%20NandiGram%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-4 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;