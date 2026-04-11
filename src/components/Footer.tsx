import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CalendarModal from './CalendarModal';

/* =======================
    Official Brand Icons 
======================= */

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#25D366"
      d="M12.031 2c-5.51 0-9.989 4.478-9.989 9.989 0 1.762.459 3.418 1.261 4.867L2 22l5.314-1.395a9.947 9.947 0 004.717 1.186h.005c5.509 0 9.988-4.478 9.988-9.989 0-5.51-4.479-9.99-9.989-9.99zM17.43 16.143c-.233.656-1.35 1.206-1.85 1.284-.424.066-.976.113-2.618-.55-2.09-.847-3.435-2.981-3.54-3.121-.104-.14-.848-1.128-.848-2.169 0-1.041.542-1.553.735-1.764.192-.212.424-.265.565-.265.14 0 .282.002.405.008.134.006.314-.05.49.376.18.435.614 1.498.666 1.604.053.106.088.23.018.371-.07.141-.105.23-.21.353-.105.124-.223.276-.32.371-.11.106-.224.22-.096.44.128.22.569.937 1.22 1.516.839.746 1.549.976 1.77 1.082.221.106.353.088.484-.062.13-.15.565-.656.715-.88.151-.225.302-.19.51-.114.207.076 1.314.619 1.54.733.226.113.376.17.432.265.056.094.056.545-.177 1.201z"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#26A5E4"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.84 8.04l-1.63 7.68c-.12.54-.44.67-.89.42l-2.48-1.83-1.2 1.15c-.13.13-.24.24-.49.24l.18-2.52 4.59-4.14c.2-.18-.04-.28-.31-.1l-5.67 3.57-2.44-.76c-.53-.17-.54-.53.11-.79l9.53-3.67c.44-.16.83.1.7.75z"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#FF0000"
      d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
    />
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig-grad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
);

/* =======================
    Data Config
======================= */

const navLinks = [
  { name: 'nav.home', href: '/', id: 'home' },
  { name: 'nav.properties', href: '/#properties', id: 'properties' },
  { name: 'nav.about', href: '/#about', id: 'about' },
  { name: 'nav.location', href: '/#location', id: 'location' },
  { name: 'nav.contact', href: '/#contact', id: 'contact' },
];

const quickLinks = [
  { name: 'footer.links.home', href: '#home', id: 'home' },
  { name: 'footer.links.about', href: '#about', id: 'about' },
  { name: 'footer.links.gallery', href: '#gallery', id: 'gallery' },
  { name: 'footer.links.contact', href: '#contact', id: 'contact' },
];

const propertyLinks = [
  { name: 'footer.links.plots', href: '#properties', id: 'plots' },
  { name: 'footer.links.villas', href: '#properties', id: 'villas' },
  { name: 'footer.links.land', href: '#properties', id: 'land' },
  { name: 'footer.links.pricing', href: '#pricing', id: 'pricing' },
];

/* =======================
    Footer Component
======================= */

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !pb-12">

        {/* TOP GRID */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="font-para text-2xl font-bold mb-4">Sri NandiGram</h3>
            <p className="text-primary-foreground/70 text-sm mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919239633577"
                target="_blank"
                aria-label={t('contact.info.whatsapp')}
                className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-sm"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://t.me/+eysRT04fXCAwNjRl"
                target="_blank"
                aria-label="Telegram"
                className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-sm"
              >
                <TelegramIcon />
              </a>
              <a
                href="https://www.youtube.com/@srinandigram"
                target="_blank"
                aria-label="YouTube"
                className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-sm"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/mayapur_srinandigram?igsh=MTRkYXNxNW1rM2Zhdg=="
                target="_blank"
                aria-label="Instagram"
                className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-sm"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* QUICK LINKS + PROPERTIES */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-2">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">{t('footer.quick_links')}</h4>
              <ul className="grid grid-cols-2 gap-y-3 text-sm">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary">
                      {t(link.name)}
                    </a>
                  </li>
                ))}
                <li>
                  <CalendarModal
                    trigger={
                      <button className="text-primary-foreground/70 hover:text-secondary flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {t('footer.festivals')}
                      </button>
                    }
                  />
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">{t('footer.properties')}</h4>
              <ul className="grid grid-cols-2 gap-y-3 text-sm">
                {propertyLinks.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary">
                      {t(link.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t('footer.contact_us')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> +91 9239633577
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> nandigram1008@gmail.com
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                {t('contact.info.address')}
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/60">
        © {currentYear} Sri NandiGram Realty. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;