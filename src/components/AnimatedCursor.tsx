import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'button'>('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      
      // Check for text elements
      if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'P') {
        setCursorVariant('text');
      }
      // Check for interactive elements
      else if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
               target.closest('a') || target.closest('button') ||
               window.getComputedStyle(target).cursor === 'pointer') {
        setCursorVariant('button');
      }
      else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      opacity: 0.5,
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.3,
      opacity: 0.8,
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 0,
    },
    button: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 0,
    },
  };

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-black dark:border-white pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Inner dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-1 h-1 rounded-full bg-black dark:bg-white pointer-events-none z-[9999] mix-blend-difference"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
      />
    </>
  );
}
