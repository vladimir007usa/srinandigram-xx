import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react'; // Re-added Globe
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', id: 'home' }, // href remains '/' to avoid #home
  { name: 'Properties', href: '/#properties', id: 'properties' },
  { name: 'Our Story', href: '/#about', id: 'about' },
  { name: 'Location', href: '/#location', id: 'location' },
  { name: 'Contact Us', href: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isGalleryPage = location.pathname === '/gallery' || location.pathname.includes('/villas');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    setActiveItem(link.id);
    setIsMobileMenuOpen(false);
    if (link.href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        // This line resets the URL to base path without any hash
        window.history.pushState(null, '', '/'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (!isGalleryPage && link.href.includes('#')) {
      e.preventDefault();
      const elementId = link.href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', link.href);
      }
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const getTextColor = (id: string) => {
    if (hoveredItem === id || activeItem === id) return 'text-[#C19A6B]';
    if (isScrolled || isGalleryPage) return 'text-[#5C3A1E]';
    return 'text-white';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || isGalleryPage ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'}
        h-auto lg:h-[80px]`}
    >
      <nav className="container-custom grid grid-cols-[1fr_auto] lg:grid-cols-[260px_1fr_260px] items-center px-4 lg:px-0 py-2 lg:py-0">
        
        {/* LOGO - No changes to scale or positioning */}
        <Link to="/" onClick={(e) => handleNavClick(e, navLinks[0])} className="flex items-center z-50 lg:-ml-28">
          <img src={logo} alt="Logo" className="h-28 md:h-36 object-contain transition-transform duration-500"
            style={{
              filter: isScrolled || isGalleryPage ? 'none' : 'brightness(1.2)',
              transform: isScrolled || isGalleryPage ? 'scale(1.6)' : 'scale(2.3)',
              transformOrigin: 'left center',
              marginTop: '-28px',
            }}
          />
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden lg:flex items-center justify-center gap-10 h-full" onMouseLeave={() => setHoveredItem(null)}>
          {navLinks.map((link) => (
            <div key={link.id} className="relative h-full flex items-center whitespace-nowrap">
              <Link to={link.href} onClick={(e) => handleNavClick(e, link)} onMouseEnter={() => setHoveredItem(link.id)}
                className={`font-heading text-sm font-bold uppercase tracking-wider transition-colors relative py-1 ${getTextColor(link.id)}`}
              >
                {t(`nav.${link.id}`, { defaultValue: link.name })}
                {(hoveredItem === link.id || (!hoveredItem && activeItem === link.id)) && (
                  <motion.div layoutId="top-nav-line" className="absolute -top-6 left-0 right-0 h-[3px] bg-[#C19A6B]" />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Number removed, Language button added */}
        <div className="hidden lg:flex items-center justify-end">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all font-bold text-[10px] uppercase
              ${isScrolled || isGalleryPage
                ? 'border-[#5C3A1E] text-[#5C3A1E] hover:bg-[#5C3A1E] hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'}
            `}
          >
            <Globe className="w-3 h-3" />
            {i18n.language.startsWith('en') ? 'RU' : 'EN'}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden justify-end">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 z-50 transition-colors ${isScrolled || isGalleryPage ? 'text-[#5C3A1E]' : 'text-white'}`}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 lg:hidden px-4">
              <div className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-2xl">
                {navLinks.map((link) => (
                  <Link key={link.id} to={link.href} onClick={(e) => handleNavClick(e, link)} className="font-heading text-sm font-bold uppercase tracking-wide text-[#5C3A1E]">
                    {t(`nav.${link.id}`, { defaultValue: link.name })}
                  </Link>
                ))}
                
                {/* Mobile Language Option */}
                <hr className="border-gray-100" />
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between font-heading text-sm font-bold uppercase text-[#C19A6B]"
                >
                  <span>{i18n.language.startsWith('en') ? 'Switch to Russian' : 'Switch to English'}</span>
                  <Globe className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;