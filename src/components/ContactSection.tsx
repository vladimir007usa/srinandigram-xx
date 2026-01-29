import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const propertyTypes = [
  'Premium Villa',
  'Luxury Apartments',
  'Plots Allocation',
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Formspree Integration with your provided ID
  const [state, handleSubmit] = useForm("xvzajgkp");

  // Success State: Shown after the user submits successfully
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-background text-center">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#2a1d0d] mb-4">Inquiry Received!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out to Sri NandiGram. We have received your details and our team will contact you shortly.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#d5b474] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2a1d0d] transition-all"
            >
              Go Back
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading font-bold text-[#d5b474] text-2xl md:text-3xl lg:text-4xl tracking-widest mb-2 uppercase block">
            Get In Touch
          </span>
          <h2 className="font-heading font-semibold text-lg md:text-xl text-[#2a1d0d] mb-4">
            <span className="text-[#d5b474]">Start Your</span> Journey
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
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
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="full-name" className="block text-sm font-bold text-[#2a1d0d] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5b474]/50 focus:border-[#d5b474] transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email-address" className="block text-sm font-bold text-[#2a1d0d] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5b474]/50 focus:border-[#d5b474] transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone-number" className="block text-sm font-bold text-[#2a1d0d] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5b474]/50 focus:border-[#d5b474] transition-all"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label htmlFor="property-type" className="block text-sm font-bold text-[#2a1d0d] mb-2">
                    Interested In *
                  </label>
                  <select
                    id="property-type"
                    name="interest"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5b474]/50 focus:border-[#d5b474] transition-all"
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
                <label htmlFor="message-content" className="block text-sm font-bold text-[#2a1d0d] mb-2">
                  Message
                </label>
                <textarea
                  id="message-content"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d5b474]/50 focus:border-[#d5b474] transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#d5b474] hover:bg-[#2a1d0d] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="bg-[#5C3A1E] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="font-heading text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a href="tel:+919239633577" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-[#d5b474] rounded-lg">
                    <Phone className="w-5 h-5 text-[#5C3A1E]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-1 uppercase tracking-tighter">Call Us</p>
                    <p className="font-bold">+91 9239633577</p>
                  </div>
                </a>

                <a href="mailto:nandigram1008@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-[#d5b474] rounded-lg">
                    <Mail className="w-5 h-5 text-[#5C3A1E]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-1 uppercase tracking-tighter">Email Us</p>
                    <p className="font-bold">nandigram1008@gmail.com</p>
                  </div>
                </a>

                {/* ✅ UPDATED: Clickable WhatsApp Card */}
                <a 
                  href="https://wa.me/919239633577" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all cursor-pointer group"
                >
                  <div className="p-3 bg-[#d5b474] rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#5C3A1E]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 mb-1 uppercase tracking-tighter">WhatsApp</p>
                    <p className="font-bold">Chat with our team</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#d5b474]/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#d5b474]" />
              </div>
              <div>
                <h4 className="font-bold text-[#2a1d0d] mb-2">Our Office</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sri NandiGram Realty<br />
                  Mayapur Road, Mayapur<br />
                  Nadia District, West Bengal<br />
                  India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;