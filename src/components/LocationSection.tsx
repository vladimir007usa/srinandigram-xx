import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Sparkles, TreePine, Building, Train, Plane } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Spiritual Capital',
    description: 'Mayapur is the spiritual headquarters of ISKCON and a major pilgrimage destination.',
  },
  {
    icon: TreePine,
    title: 'Natural Beauty',
    description: 'Surrounded by lush greenery, rivers, and pristine natural landscapes.',
  },
  {
    icon: Building,
    title: 'Growing Infrastructure',
    description: 'Rapid development with schools, hospitals, and commercial facilities nearby.',
  },
  {
    icon: Train,
    title: 'Well Connected',
    description: '2.5 hours from Kolkata, accessible by road and rail.',
  },
  {
    icon: Plane,
    title: 'Easy Access',
    description: 'Nearest airport: Netaji Subhas Chandra Bose International Airport.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Strategic location with excellent appreciation potential.',
  },
];

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading font-bold text-[#d5b474] 
                         text-2xl md:text-3xl lg:text-4xl 
                         tracking-widest mb-2 uppercase">
            Location
          </span>
          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
            <span className="text-[#d5b474]">Why</span> Mayapur?
          </h2>
          <p className="section-subtitle mx-auto">
            Mayapur is one of the most spiritually significant places in India, attracting millions of devotees and seekers from around the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border/50 hover:shadow-soft transition-shadow"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-elevated border border-border/50">
              <iframe
                src="https://www.google.com/maps?q=Sri+NandiGram+Mayapur+West+Bengal&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri NandiGram Location Map"
                className="w-full"
              />
            </div>

            {/* Address Card */}
            <div className="p-6 bg-primary rounded-xl text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Visit Us</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Sri NandiGram Realty<br />
                    Mayapur Road, Mayapur<br />
                    Nadia District, West Bengal, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/RAyitsENAQxcZLBK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-secondary font-heading font-semibold text-sm hover:underline"
                  >
                    Get Directions
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
