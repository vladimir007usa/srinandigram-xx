import { Phone, Mail, MapPin } from 'lucide-react';

/* =======================
   Inline SVG Icons
======================= */

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
    <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.61 1.11 2.79c.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.56.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 3C8.83 3 3 8.83 3 16c0 2.82.75 5.47 2.06 7.75L3 29l5.39-1.97A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M9.036 15.464l-.375 5.296c.536 0 .768-.232 1.046-.508l2.508-2.38 5.204 3.808c.954.526 1.628.25 1.87-.883l3.39-15.92h.001c.297-1.38-.5-1.92-1.43-1.57L1.2 9.71c-1.345.526-1.324 1.28-.244 1.61l5.165 1.61L18.1 6.48c.56-.37 1.07-.165.65.205z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M23.5 6.5s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C17.7 3.2 12 3.2 12 3.2h-.1s-5.7 0-8.6.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S0 8.2 0 9.9v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 7.2.3 7.2.3s5.7 0 8.6-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4V9.9c0-1.7-.2-3.4-.2-3.4zM9.5 14.7V8.3l6.3 3.2-6.3 3.2z" />
  </svg>
);

/* =======================
   Footer Component
======================= */

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Properties', href: '#properties' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const propertyLinks = [
  { name: 'Premium Plots', href: '#properties' },
  { name: 'Luxury Villas', href: '#properties' },
  { name: 'Open Land', href: '#properties' },
  { name: 'Pricing', href: '#pricing' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-para text-2xl tracking-wider font-bold mb-4">
              Sri NandiGram
            </h3>

            <p className="text-primary-foreground/70 text-sm mb-6">
              A premium gated community in Mayapur offering luxury villas,
              plots, and spiritual living in harmony with nature.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://wa.me/919239633577" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a 
                href="https://t.me/+eysRT04fXCAwNjRl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <TelegramIcon />
              </a>
              <a 
                href="https://www.youtube.com/@srinandigram" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Properties</h4>
            <ul className="space-y-3">
              {propertyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> +91 9239633577
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> nandigram1008@gmail.com
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                Mayapur Road, Nadia, West Bengal, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/60">
        © {currentYear} Sri NandiGram Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;