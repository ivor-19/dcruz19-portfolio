import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 cursor-pointer"
          onClick={scrollDown}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-xs text-muted-foreground font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              scroll to explore
            </span>
            
            {/* Animated chevrons */}
            <div className="relative h-12 w-8 flex flex-col items-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0"
              >
                <ChevronDown className="w-6 h-6 text-cpurple opacity-60" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-3"
              >
                <ChevronDown className="w-6 h-6 text-cpurple opacity-40" />
              </motion.div>
            </div>

            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-px h-8 bg-linear-to-b from-cpurple/50 to-transparent origin-top"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;