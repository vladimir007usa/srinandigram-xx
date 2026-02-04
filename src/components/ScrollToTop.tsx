import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (like #properties), scroll to the very top
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash, the browser's default behavior will handle 
    // jumping to that specific section.
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;