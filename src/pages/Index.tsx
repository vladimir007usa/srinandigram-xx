import { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
const PropertiesSection = lazy(() => import('@/components/PropertiesSection'));
import LocationSection from '@/components/LocationSection';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="properties">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-brown-dark font-heading text-xl">Loading Properties...</div>}>
          <PropertiesSection />
        </Suspense>
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="video">
        <VideoSection />
      </section>

      <section id="location">
        <LocationSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
