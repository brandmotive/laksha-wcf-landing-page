import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to handle scrolling to an element when the URL hash changes.
 * Useful for navigation from other pages to the home page sections.
 */
export const useHashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the page has rendered
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // No hash: Reset scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
};
