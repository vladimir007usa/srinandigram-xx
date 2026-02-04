import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import PropertiesSection from '@/components/PropertiesSection';
import LocationSection from '@/components/LocationSection';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="properties">
        <PropertiesSection />
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
