import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ASSETS
import apartmentHero from '@/assets/villa.jpg';
import lk1bhk from '@/assets/LK 1 BHK.png';
import lk2bhk from '@/assets/LK 2 bhk.png';
import lk1bhkPlan from '@/assets/Lalita Kunj A 07.03 FT2_.png';
import lk2bhkPlan from '@/assets/Lalita Kunj B 07.03 FT2.png';

const ApartmentsPage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const bhkOptions = [
    {
      title: '1 BHK Apartment',
      size: 'Total built up area 710 Sq. Ft.',
      description:
        'Ideal for spiritual seekers or young professionals. Designed with a separate bedroom for privacy and a spacious hall for relaxation.',
      features: ['Spiritual Seeker’s Layout', 'Large Balcony', 'Premium Glass Finish', 'Vastu Compliant'],
      images: [lk1bhk, lk2bhkPlan],
    },
    {
      title: '2 BHK Apartment',
      size: 'Total built up area 1170 Sq. Ft.',
      description:
        "Perfect for growing families. Our unique 'No Shared Walls' design ensures maximum acoustic privacy and natural cross-ventilation.",
      features: ['2 Balconies', 'Guest/Study Room', 'Spacious Kitchen', 'Corner Unit View'],
      images: [lk2bhk, lk1bhkPlan],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF6]">
      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              alt="Enlarged plan"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
        <img src={apartmentHero} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <Link
            to="/#properties"
            className="text-white/90 flex items-center gap-2 mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Luxury Apartments
          </h1>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              Mayapur, West Bengal, India
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {bhkOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-brown-light/10 overflow-hidden flex flex-col"
            >
              <div className="p-8 pb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#4A3427] mb-2">
                  {option.title}
                </h3>
                <p className="text-secondary font-bold text-sm tracking-wider uppercase">
                  {option.size}
                </p>
              </div>

              <div className="relative grid grid-cols-2 h-[300px] md:h-[350px] bg-[#f8f8f8] border-y border-gray-100">
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-200 z-10" />

                {option.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className="relative flex items-center justify-center cursor-zoom-in group p-4"
                  >
                    <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter text-secondary shadow-sm border border-gray-100">
                      {idx === 0 ? '3D Plan' : '2D Plan'}
                    </div>

                    <img
                      src={img}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      alt={`${option.title} view`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-8">
                  {option.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <ul className="grid grid-cols-2 gap-4">
                    {option.features.map(f => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm font-bold text-[#4A3427]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-custom pb-16">
        <div className="bg-[#8B5E3C] rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Inquire About Your Future Home
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto relative z-10">
            Book a private tour of our model homes and villas today.
          </p>
          <a
            href="https://wa.me/919239633577"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A267] hover:bg-[#b38f56] text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all hover:scale-105 relative z-10"
          >
            Contact Sales Team
          </a>
        </div>
      </div>

      {/* ✅ BACK TO PROPERTIES (NEW SECTION) */}
      <div className="container-custom pb-24 text-center">
        <Link
          to="/#properties"
          className="inline-flex items-center gap-2 text-[#4A3427] font-bold text-lg hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default ApartmentsPage;
