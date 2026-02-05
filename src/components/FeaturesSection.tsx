import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, Leaf, GraduationCap, BookOpen, Flame, Baby, 
  TreePine, HandHeart, Building, Hotel, Shield, Wifi, 
  Droplets, Sun, Target, ShoppingBag, Waves, ChevronDown, ChevronUp 
} from 'lucide-react';

import organicGarden from '@/assets/organic-garden.jpg';
import beekeeping from '@/assets/beekeeping.jpg';
import gauSanctuary from '@/assets/gau-sanctuary.jpg';
import temple from '@/assets/temple.jpg';
import playground from '@/assets/children-playground.jpg';
import mangoGrove from '@/assets/mango-grove.jpg';
import yogaArea from '@/assets/yoga-area.jpg';
import varnashramCollege from '@/assets/varnashram-college.jpg';
import vaishnavInstitute from '@/assets/vaishnav-institute.jpg';
import gitaPathshala from '@/assets/gita-pathshala.jpg';
import yajnaSala from '@/assets/yajna-sala.jpg';
import guestHouse from '@/assets/guest-house.jpg';
import securityGate from '@/assets/security-gate.jpg';
import internetFacility from '@/assets/internet-facility.jpg';
import waterTreatment from '@/assets/water-treatment.jpg';
import archery from '@/assets/archery.jpg';
import grocery from '@/assets/grocery.jpg';
import stp from '@/assets/stp.jpg';

const ecoLiving = [
  { icon: Sprout, title: 'Organic Vegetable Garden', description: 'Fresh, chemical-free vegetables grown with love right in our community.', image: organicGarden },
  { icon: Leaf, title: 'Bee Keeping', description: 'Sustainable beekeeping for fresh honey and supporting pollinators.', image: beekeeping },
  { icon: TreePine, title: 'Mango Grove & Banana Farm', description: 'Lush orchards providing fresh fruits and serene walking paths.', image: mangoGrove },
];

const amenities = [
  { icon: Shield, title: 'Secured Gated Community', description: '24x7x365 security with CCTV cameras for complete peace of mind.', image: securityGate },
  { icon: ShoppingBag, title: 'Nandigram Grocery Store', description: 'A convenient on-site store providing all essential items and organic produce.', image: grocery },
  { icon: Hotel, title: 'Srivas Bhavan Guest House', description: 'Comfortable staying facilities for residents and visiting guests.', image: guestHouse },
  { icon: Droplets, title: 'Water Filtration Plant', description: 'Pure, treated water supply for all community needs.', image: waterTreatment },
  { icon: Waves, title: 'Sewage Treatment Plant (STP)', description: 'Eco-friendly water recycling system to maintain our green spaces.', image: stp },
  { icon: Wifi, title: 'Dedicated Internet Facilities', description: 'High-speed connectivity to stay connected with the world.', image: internetFacility },
];

const devotionalLife = [
  { icon: Building, title: 'Sri Sri Krishna Balaram Temple', description: 'Beautiful temple for daily darshan and spiritual programs.', image: temple },
  { icon: Flame, title: 'Garuda Yajna Sala', description: 'Sacred space for performing Vedic yajnas and spiritual ceremonies.', image: yajnaSala },
  { icon: HandHeart, title: 'Gau-Nandi Sanctuary', description: 'Sacred cow sanctuary where cows are loved and protected.', image: gauSanctuary },
];

const education = [
  { icon: GraduationCap, title: 'Varnashram College', description: 'Traditional education integrating spiritual wisdom with practical skills.', image: varnashramCollege },
  { icon: BookOpen, title: 'Vaishnav Research Institute', description: 'Dedicated to preserving and advancing Vaishnava philosophy and culture.', image: vaishnavInstitute },
  { icon: BookOpen, title: 'Gita Pathshala', description: 'Learn the timeless wisdom of Bhagavad Gita in a nurturing environment.', image: gitaPathshala },
];

const recreation = [
  { icon: Baby, title: 'Children Playing Area', description: 'Safe, engaging play spaces for children to grow and explore.', image: playground },
  { icon: Sun, title: 'Yoga & Vrinda Kunj', description: 'Serene spaces for yoga, meditation, and spiritual practices.', image: yogaArea },
  { icon: Target, title: 'Arjuna Archery Academy', description: 'Master the ancient art of focus and precision in our dedicated archery range.', image: archery },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showFullContent, setShowFullContent] = useState(false);

  const renderCard = (feature: any, index: number) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#d5b474]/10 rounded-xl">
            <feature.icon className="w-6 h-6 text-[#d5b474]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[#5C3A1E] mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-xl font-heading font-bold text-[#5C3A1E] mt-12 mb-6 border-l-4 border-[#d5b474] pl-4 uppercase tracking-wider">
      {children}
    </div>
  );

  return (
    <section id="features" className="pt-12 pb-20 bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-black text-[#d5b474] text-2xl md:text-3xl lg:text-4xl tracking-widest mb-4 uppercase px-6 md:px-0">
  WHAT MAKES US SPECIAL
</h1>
          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
  <span className="text-[#d5b474]">Life at</span> 
  <span className="font-para tracking-wider ml-2">Sri NandiGram</span>
</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a unique blend of spiritual living, sustainable practices, and modern amenities.
          </p>
        </motion.div>

        {/* ALWAYS VISIBLE: ECO LIVING */}
        <SectionTitle>Eco Living</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecoLiving.map((f, i) => renderCard(f, i))}
        </div>

        {/* TOGGLE BUTTON */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowFullContent(!showFullContent)}
            className="flex items-center gap-3 bg-[#003366] text-white px-12 py-3.5 rounded-full font-black border-2 border-[#003366] transition-all duration-300 hover:bg-white hover:text-[#003366] shadow-xl active:scale-95"
          >
            {showFullContent ? 'Show Less' : 'Know More'}
            {showFullContent ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>

        {/* REVEALED CONTENT */}
        <AnimatePresence>
          {showFullContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* AMENITIES */}
              <SectionTitle>Amenities</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {amenities.map((f, i) => renderCard(f, i))}
              </div>

              {/* DEVOTIONAL LIFE */}
              <SectionTitle>Devotional Life</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {devotionalLife.map((f, i) => renderCard(f, i))}
              </div>

              {/* EDUCATION */}
              <SectionTitle>Education</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {education.map((f, i) => renderCard(f, i))}
              </div>

              {/* RECREATION */}
              <SectionTitle>Recreation</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {recreation.map((f, i) => renderCard(f, i))}
              </div>

              {/* GALLERY BUTTON (Updated Color & Removed Icon) */}
              <div className="flex justify-center pb-12 mt-12">
                <Link 
                  to="/gallery" 
                  className="inline-block bg-[#003366] text-white px-12 py-3.5 rounded-full font-black border-2 border-[#003366] transition-all duration-300 hover:bg-white hover:text-[#003366] shadow-xl active:scale-95"
                >
                  Go to Gallery
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;