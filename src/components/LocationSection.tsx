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
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Location
          </span>
          <h2 className="section-title mt-4 mb-6">
            Why <span className="text-gradient-gold">Mayapur</span>?
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29227.89721082655!2d88.36986565!3d23.42116155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91dbe780c3943%3A0x6e6e2cb3ea1a9c4c!2sMayapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704200000000!5m2!1sen!2sin"
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
                    href="https://maps.google.com/?q=Mayapur+West+Bengal+India"
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
