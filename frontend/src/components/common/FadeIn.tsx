import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string; // Allow passing extra classes like w-full
}

/**
 * A reusable component that fades in its content when it enters the viewport.
 * Uses Intersection Observer for performance and reliability.
 */
const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing to keep it visible
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Slight offset for better feel
      }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getDirectionClass = () => {
    if (isVisible) return "opacity-100 translate-y-0 translate-x-0";
    
    const base = "opacity-0";
    switch (direction) {
      case 'up': return `${base} translate-y-12`;
      case 'down': return `${base} -translate-y-12`;
      case 'left': return `${base} translate-x-12`;
      case 'right': return `${base} -translate-x-12`;
      case 'none': return base;
      default: return `${base} translate-y-12`;
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
