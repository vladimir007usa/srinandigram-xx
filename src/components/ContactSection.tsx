import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const propertyTypes = [
  'Premium Plot',
  'Luxury Villa',
  'Open Land',
  'Custom Requirement',
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Submitted!",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: '',
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="section-title mt-4 mb-6">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to make Sri NandiGram your home? Fill out the form and our team will reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-soft border border-border/50">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Interested In *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-heading font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Submitted Successfully!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-secondary rounded-lg">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/70 mb-1">Call Us</p>
                    <p className="font-heading font-semibold">+91 XXXXX XXXXX</p>
                  </div>
                </a>

                <a
                  href="mailto:info@nandigram.site"
                  className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-secondary rounded-lg">
                    <Mail className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/70 mb-1">Email Us</p>
                    <p className="font-heading font-semibold">info@nandigram.site</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-secondary rounded-lg">
                    <MessageCircle className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/70 mb-1">WhatsApp</p>
                    <p className="font-heading font-semibold">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Our Office</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sri NandiGram Realty<br />
                    Mayapur Road, Mayapur<br />
                    Nadia District<br />
                    West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
