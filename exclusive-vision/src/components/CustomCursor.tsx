import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail positions
      setTrailPositions(prev => {
        const newTrail = [newPosition, ...prev.slice(0, 8)];
        return newTrail;
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Smooth trail effect */}
      {trailPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: pos.x - 3,
            y: pos.y - 3,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: 0.8 - (index * 0.08),
            opacity: 0.8 - (index * 0.1),
          }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: index % 2 === 0 ? '#8aafce' : '#24256d',
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor - clean circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-white/40 shadow-lg" />
      </motion.div>

      {/* Outer hover ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.9,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-accent/50" />
      </motion.div>
    </>
  );
};

export default CustomCursor; 