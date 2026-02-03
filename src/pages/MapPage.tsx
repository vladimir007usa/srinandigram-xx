import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// ASSETS
import img1 from '@/assets/41446787.jpg';
import img2 from '@/assets/41446814.jpg';
import img3 from '@/assets/41446817.jpg';
import img4 from '@/assets/41446844.jpg';
import img5 from '@/assets/41446865.jpg';
import imgLand1 from '@/assets/68663755.jpg'; 
import imgLand2 from '@/assets/68663898.jpg';

const MapPage = () => {
  const heroImages = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const slideVariants = {
    enter: { x: '100%', opacity: 1 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO SLIDER SECTION ================= */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black">
        
        {/* Back to Properties Link */}
        <Link 
          to="/#properties" 
          className="absolute top-8 left-1/2 -translate-x-1/2 z-50 inline-flex items-center text-white/90 hover:text-white hover:bg-black/40 transition-all font-bold group bg-black/20 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" /> 
          Back to Properties
        </Link>

        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            alt={`Project View ${currentIndex + 1}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6 text-white">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 drop-shadow-2xl text-[#d5b474]">
              Buy Land in Mayapur
            </h1>
            
            <p className="text-xl md:text-2xl tracking-[0.1em] text-white/95">
              <span className="font-para text-3xl md:text-4xl normal-case mr-2">Sri NandiGram</span>
              <span className="font-heading text-3xl md:text-4xl normal-case mr-1">Gated Community</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative h-1 bg-white/40 w-12 overflow-hidden rounded-full"
            >
              <div 
                className={`absolute inset-0 bg-secondary transition-transform duration-[4000ms] ease-linear origin-left ${
                  index === currentIndex ? "scale-x-100" : "scale-x-0"
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="container-custom py-16">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-900">Premium Plot Selection</h2>
          <p className="text-slate-500 mt-2">Explore our available gated community plots in the heart of Mayapur Dham.</p>
        </div>

        {/* ================= SECTION 1: PICTURE LEFT | TEXT RIGHT ================= */}
        <section className="mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            
            <motion.div initial={{ opacity: 0, scale: 0.95, x: -30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} className="relative group overflow-hidden rounded-[2.5rem] shadow-lg h-full min-h-[400px]">
              <img src={imgLand1} alt="Plot visualization 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-2">Visualization A</p>
                <div className="leading-tight">
                    <p className="text-xl font-bold uppercase">Planned Green Enclave</p>
                    <p className="text-2xl font-para">at Sri NandiGram</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> Limited Plots Available
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900">
                  Secure Your Sacred Space in <span className="text-[#d5b474]">Mayapur Dham</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Buy your space within a secure gated, eco friendly community. 
                  Our plots offer the perfect balance of spiritual serenity and modern 
                  infrastructure.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
                {["Clear Title Deeds", "24/7 Gated Security", "Internal Paved Roads", "Water & Electricity", "Drainage System", "Green Surroundings"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" /> 
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/919239633577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-secondary text-white font-black rounded-2xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 hover:-translate-y-1 inline-block"
                  >
                    Enquire Now
                  </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: TEXT LEFT | PICTURE RIGHT ================= */}
        <section className="mt-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4 text-slate-900">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> Modern Lifestyle</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                  Architectural <span className="text-[#d5b474]">Excellence</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Every plot is strategically placed to ensure maximum ventilation and Vastu compliance. 
                  Build your dream villa in a community designed for devotees and peace-seekers alike.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-secondary font-bold mb-2">Temple Proximity</h4>
                  <p className="text-sm text-slate-500">Located just 5 minutes from the main temple gates, ensuring you never miss a morning mangala-arati.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-secondary font-bold mb-2">Community Living</h4>
                  <p className="text-sm text-slate-500">Join a neighborhood of like-minded individuals in a safe, peaceful, and spiritually vibrant atmosphere.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95, x: 30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} className="relative group overflow-hidden rounded-[2.5rem] shadow-lg h-full min-h-[400px] order-1 lg:order-2">
              <img src={imgLand2} alt="Plot visualization 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8 text-right text-white">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400 mb-2">Visualization B</p>
                <div className="leading-tight">
                    <p className="text-xl font-bold uppercase">Luxury Villa Concepts</p>
                    <p className="text-2xl font-para">at Sri NandiGram</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= UPDATED ENQUIRY SECTION ================= */}
        <section className="pb-8">
          <div className="bg-[#8B5E3C] rounded-[3rem] px-6 py-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Inquire About Your Future Plots
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ready to secure your land? Connect with us for pricing and site visit details.
            </p>
            <a
              href="https://wa.me/919239633577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D2B06A] text-[#5C3A1E] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Contact Sales Team
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MapPage;