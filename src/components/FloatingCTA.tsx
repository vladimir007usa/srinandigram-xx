import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            {/* Expanded Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 right-0 flex flex-col gap-3"
                >
                  <a
                    href="https://wa.me/919239633577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span className="font-heading font-medium text-sm whitespace-nowrap">
                      Message Us
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              animate={
                !isExpanded
                  ? {
                      opacity: [1, 0.6, 1],
                      scale: [1, 1.03, 1],
                    }
                  : { opacity: 1, scale: 1 }
              }
              transition={
                !isExpanded
                  ? {
                      duration: 5, // ⏳ VERY slow blink
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  : { duration: 0.2 }
              }
              className={`p-4 rounded-full shadow-elevated transition-all duration-300 ${
                isExpanded
                  ? 'bg-muted text-foreground rotate-45'
                  : 'bg-[#25D366] text-white'
              }`}
            >
              {isExpanded ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6 fill-current" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
