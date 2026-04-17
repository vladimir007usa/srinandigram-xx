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
import { useTranslation } from 'react-i18next';

import villaImg from '@/assets/plots.webp';
import villaGround3D from '@/assets/68460886.webp';
import homeGround3D from '@/assets/68468948.webp';
import villaFirst3D from '@/assets/68460889.webp';
import homeFirst3D from '@/assets/68469187.webp';

// ✅ TYPE 1 EXTERIOR IMAGES
import villaExterior1 from '@/assets/68468916.webp';
import villaExterior2 from '@/assets/2025.webp';

// ✅ TYPE 2 SECOND EXTERIOR IMAGE
import homeExterior2 from '@/assets/68451620.webp';

// ✅ 2D IMAGES
import villaGround2D from '@/assets/new 1.webp';
import homeGround2D from '@/assets/new 3.webp';
import villaFirst2D from '@/assets/new 2.webp';
import homeFirst2D from '@/assets/new 4.webp';

const VillasPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nandiVillasGallery = [
    { src: villaExterior1, alt: t('villas_page.labels.exterior') },
    { src: villaExterior2, alt: t('villas_page.labels.exterior') },
    { src: homeGround3D, alt: `${t('villas_page.labels.ground')} ${t('villas_page.labels.p3d')}` },
    { src: villaGround2D, alt: `${t('villas_page.labels.ground')} ${t('villas_page.labels.p2d')}` },
    { src: homeFirst3D, alt: `${t('villas_page.labels.first')} ${t('villas_page.labels.p3d')}` },
    { src: villaFirst2D, alt: `${t('villas_page.labels.first')} ${t('villas_page.labels.p2d')}` },
  ];

  const nandiHomesGallery = [
    { src: villaImg, alt: t('villas_page.labels.exterior') },
    { src: homeExterior2, alt: t('villas_page.labels.exterior') },
    { src: villaGround3D, alt: `${t('villas_page.labels.ground')} ${t('villas_page.labels.p3d')}` },
    { src: homeGround2D, alt: `${t('villas_page.labels.ground')} ${t('villas_page.labels.p2d')}` },
    { src: villaFirst3D, alt: `${t('villas_page.labels.first')} ${t('villas_page.labels.p3d')}` },
    { src: homeFirst2D, alt: `${t('villas_page.labels.first')} ${t('villas_page.labels.p2d')}` },
  ];

  const sections = [
    { label: t('villas_page.labels.exterior') },
    { label: t('villas_page.labels.ground'), sub: [t('villas_page.labels.p3d'), t('villas_page.labels.p2d')] },
    { label: t('villas_page.labels.first'), sub: [t('villas_page.labels.p3d'), t('villas_page.labels.p2d')] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img loading="lazy" src={villaImg} className="w-full h-full object-cover" alt="Luxury Villa" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container-custom text-center">
            <Link to="/#properties" className="inline-flex items-center text-white mb-6 text-lg md:text-xl">
              <ArrowLeft className="mr-2 w-6 h-6" /> {t('villas_page.back')}
            </Link>
            <h1 className="text-5xl font-heading font-bold text-white">
              {t('villas_page.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-[#5C3A1E]">
            {t('villas_page.subtitle_t')}
          </h2>

          <p className="text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            {t('villas_page.subtitle_d')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              { title: t('villas_page.types.v1'), icon: Building2, gallery: nandiVillasGallery },
              { title: t('villas_page.types.v2'), icon: Home, gallery: nandiHomesGallery },
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
                          <img loading="lazy"
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
                    <Check className="w-5 h-5 text-secondary" /> {t('villas_page.features.p1')}
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-secondary" /> {t('villas_page.features.p2')}
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
          {t('villas_page.video_title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/sJ2gtAJeNtY"
              title="Villa Video 1"
              allowFullScreen
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UB3aj6VLmZE"
              title="Villa Video 2"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ✅ ENQUIRY SECTION */}
      <section className="container-custom pb-24">
        <div className="bg-[#8B5E3C] rounded-[3rem] px-6 py-16 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {t('villas_page.enquiry_title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('villas_page.enquiry_subtitle')}
          </p>
          <a
            href="https://wa.me/919239633577"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D2B06A] text-[#5C3A1E] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            {t('villas_page.enquiry_cta')}
          </a>
        </div>
      </section>

      {/* ✅ BACK TO PROPERTIES (NEW – LAST SECTION) */}
      <section className="container-custom pb-24">
        <div className="text-center">
          <Link
            to="/#properties"
            className="inline-flex items-center gap-3 text-[#5C3A1E] font-heading font-bold text-xl md:text-2xl hover:text-[#C19A6B] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
            {t('villas_page.back')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VillasPage;
