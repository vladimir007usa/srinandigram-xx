import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Standard Plot',
    size: '1,000 sq. ft.',
    features: [
      'Prime location',
      'Vastu-compliant layout',
      'Road connectivity',
      'Water supply',
      'Electricity connection',
      'Landscaped surroundings',
    ],
    popular: false,
  },
  {
    name: 'Premium Plot',
    size: '1,500 sq. ft.',
    features: [
      'Corner plot options',
      'Vastu-compliant layout',
      'Wide road frontage',
      'Underground utilities',
      'Premium landscaping',
      'Temple proximity',
      'Priority allocation',
    ],
    popular: true,
  },
  {
    name: 'Custom Size',
    size: 'As per requirement',
    features: [
      'Flexible plot sizes',
      'Custom layouts available',
      'Multiple plots combination',
      'Special purpose land',
      'Agricultural options',
      'Dedicated support',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Investment Options
          </span>
          <h2 className="section-title mt-4 mb-6">
            Pricing & <span className="text-gradient-gold">Plans</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Flexible options to suit every budget. Contact us for detailed pricing and payment plans.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-elevated ${
                plan.popular
                  ? 'border-secondary shadow-gold scale-105'
                  : 'border-border/50 hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-heading font-semibold rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-heading font-bold text-primary">
                  {plan.size}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="p-1 bg-secondary/20 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-heading font-semibold transition-all ${
                  plan.popular
                    ? 'bg-secondary text-secondary-foreground hover:shadow-gold'
                    : 'bg-primary text-primary-foreground hover:shadow-elevated'
                }`}
              >
                Request Price
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          * Prices vary based on location, size, and current market conditions. Contact us for the latest pricing.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
