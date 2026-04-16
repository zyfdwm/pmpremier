"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * PageTransition - Clean Version
 * Temporarily using standard CSS to avoid "framer-motion" dependency errors.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div 
      style={{ 
        opacity: isAnimating ? 0.6 : 1,
        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease'
      }}
    >
      {children}
    </div>
  );
}
