import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Properties', href: '/#properties', id: 'properties' },
  { name: 'Our Story', href: '/#about', id: 'about' },
  { name: 'Location', href: '/#location', id: 'location' },
  { name: 'Contact Us', href: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isGalleryPage =
    location.pathname === '/gallery' || location.pathname.includes('/villas');

  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setActiveItem(link.name);
    setIsMobileMenuOpen(false);

    // FIX: If user clicks Home while on a sub-page, let the Link handle navigation.
    // If they are ALREADY on the home page, scroll them to the top.
    if (link.href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (!isGalleryPage && link.href.includes('#')) {
      e.preventDefault();
      const elementId = link.href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
        window.history.pushState(null, '', link.href);
      }
    }
  };

  const getTextColor = (linkName: string) => {
    const isActiveOrHovered =
      hoveredItem === linkName || activeItem === linkName;

    if (isActiveOrHovered) return 'text-[#C19A6B]';
    if (isScrolled || isGalleryPage) return 'text-[#5C3A1E]';
    return 'text-white';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || isGalleryPage
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'}
        h-auto lg:h-[80px]
      `}
    >
      <nav className="container-custom grid grid-cols-[1fr_auto] lg:grid-cols-[260px_1fr_260px] items-center px-4 lg:px-0 py-2 lg:py-0">

        {/* LOGO */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="flex items-center z-50 lg:-ml-28"
        >
          <img
            src={logo}
            alt="Sri NandiGram Logo"
            className="h-28 md:h-36 object-contain transition-transform duration-500"
            style={{
              filter: isScrolled || isGalleryPage ? 'none' : 'brightness(1.2)',
              transform:
                isScrolled || isGalleryPage ? 'scale(1.6)' : 'scale(2.3)',
              transformOrigin: 'left center',
              marginTop: '-28px',
            }}
          />
        </Link>

        {/* CENTER NAVIGATION */}
        <div
          className="hidden lg:flex items-center justify-center gap-10 h-full"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navLinks.map((link) => (
            <div key={link.name} className="relative h-full flex items-center">
              <Link
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                onMouseEnter={() => setHoveredItem(link.name)}
                className={`font-heading text-sm font-bold uppercase tracking-wider transition-colors relative py-1 ${getTextColor(
                  link.name
                )}`}
              >
                {link.name}
                {(hoveredItem === link.name ||
                  (!hoveredItem && activeItem === link.name)) && (
                  <motion.div
                    layoutId="top-nav-line"
                    className="absolute -top-6 left-0 right-0 h-[3px] bg-[#C19A6B]"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* PHONE */}
        <div className="hidden lg:flex items-center justify-end">
          <a
            href="tel:+919239633577"
            className={`flex items-center gap-2 font-heading text-sm font-bold transition-colors hover:text-[#C19A6B] ${
              isScrolled || isGalleryPage ? 'text-[#003366]' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+91 9239633577</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 z-50 transition-colors ${
              isScrolled || isGalleryPage ? 'text-[#5C3A1E]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 lg:hidden px-4"
            >
              <div className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-2xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="font-heading text-sm font-bold uppercase tracking-wide text-[#5C3A1E]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
};

export default Navbar;