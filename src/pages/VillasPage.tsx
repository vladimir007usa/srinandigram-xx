import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  Home,
  Building2,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import villaImg from '@/assets/plots.jpg';
import villaGround3D from '@/assets/68460886.png';
import homeGround3D from '@/assets/68468948.png';
import villaFirst3D from '@/assets/68460889.png';
import homeFirst3D from '@/assets/68469187.png';

// ✅ TYPE 1 EXTERIOR IMAGES
import villaExterior1 from '@/assets/68468916.jpg';
import villaExterior2 from '@/assets/2025.jpg';

// ✅ TYPE 2 SECOND EXTERIOR IMAGE
import homeExterior2 from '@/assets/68451620.jpg';

// ✅ 2D IMAGES
import villaGround2D from '@/assets/new 1.png';
import homeGround2D from '@/assets/new 3.png';
import villaFirst2D from '@/assets/new 2.png';
import homeFirst2D from '@/assets/new 4.png';

const VillasPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nandiVillasGallery = [
    { src: villaExterior1, alt: 'Villa Exterior 1' },
    { src: villaExterior2, alt: 'Villa Exterior 2' },
    { src: homeGround3D, alt: 'Villa Ground Floor 3D Plan' },
    { src: villaGround2D, alt: 'Villa Ground Floor 2D Plan' },
    { src: homeFirst3D, alt: 'Villa 1st Floor 3D Plan' },
    { src: villaFirst2D, alt: 'Villa 1st Floor 2D Plan' },
  ];

  const nandiHomesGallery = [
    { src: villaImg, alt: 'Home Exterior 1' },
    { src: homeExterior2, alt: 'Home Exterior 2' },
    { src: villaGround3D, alt: 'Home Ground Floor 3D Plan' },
    { src: homeGround2D, alt: 'Home Ground Floor 2D Plan' },
    { src: villaFirst3D, alt: 'Home 1st Floor 3D Plan' },
    { src: homeFirst2D, alt: 'Home 1st Floor 2D Plan' },
  ];

  const sections = [
    { label: 'Exterior View' },
    { label: 'Ground Floor', sub: ['3D Plan', '2D Plan'] },
    { label: '1st Floor', sub: ['3D Plan', '2D Plan'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img src={villaImg} className="w-full h-full object-cover" alt="Luxury Villa" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container-custom text-center">
            <Link to="/#properties" className="inline-flex items-center text-white mb-6">
              <ArrowLeft className="mr-2" /> Back to Properties
            </Link>
            <h1 className="text-5xl font-heading font-bold text-white">
              Private Luxury Villas
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-[#5C3A1E]">
            Spiritual Living, Modern Comfort
          </h2>

          <p className="text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            Our villas in Sri NandiGram are designed with the principles of
            Vastu Shastra, ensuring your home is a sanctuary of positive energy.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              { title: 'Villa Type 1', icon: Building2, gallery: nandiVillasGallery },
              { title: 'Villa Type 2', icon: Home, gallery: nandiHomesGallery },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col border border-gray-100 rounded-[2.5rem] p-6 md:p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <item.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-[#5C3A1E]">
                    {item.title}
                  </h3>
                </div>

                {sections.map((section, i) => (
                  <div key={i} className="mb-6">
                    <p className="text-sm font-bold text-secondary uppercase mb-2">
                      {section.label}
                    </p>

                    {section.sub && (
                      <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-2 px-1">
                        {section.sub.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      {item.gallery.slice(i * 2, i * 2 + 2).map((img, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          className="aspect-square rounded-xl overflow-hidden cursor-pointer bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                          onClick={() => setSelectedImage(img.src)}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-contain p-3"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                <ul className="border-t pt-6 space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-secondary" /> Premium Finish
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-secondary" /> Spacious Design
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100]"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selectedImage}
              className="max-h-[90vh] max-w-[90vw] rounded-lg bg-white p-4 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ NEW VIDEO SECTION */}
      <section className="container-custom pb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center text-[#5C3A1E]">
          Experience The Villas
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video 1 */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/sJ2gtAJeNtY?si=o2NghfO1IQeUGxQA" 
              title="Villa Video 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/UB3aj6VLmZE?si=VC4Y1HcCF1kF2_uD" 
              title="Villa Video 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ ENQUIRY SECTION */}
      <section className="container-custom pb-16">
        <div className="bg-[#8B5E3C] rounded-[3rem] px-6 py-16 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Inquire About Your Future Villas
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book a private tour of our model homes and villas today.
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

      {/* ✅ BACK TO PROPERTY BUTTON (LOWER PART) */}
      <div className="container-custom pb-20 flex justify-center">
        <Link 
          to="/#properties" 
          className="flex items-center gap-2 text-[#5C3A1E] font-bold hover:text-[#8B5E3C] transition-colors text-lg"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default VillasPage;