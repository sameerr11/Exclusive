import React from 'react';
import { SparklesCore } from './Sparkles';

interface AnimatedHeroBackgroundProps {
  pattern?: 'grid' | 'dots' | 'diagonal' | 'waves' | 'cross' | 'hexagon';
  children: React.ReactNode;
  fullHeight?: boolean;
}

const AnimatedHeroBackground: React.FC<AnimatedHeroBackgroundProps> = ({ 
  pattern = 'grid',
  children,
  fullHeight = false
}) => {
  const patterns = {
    grid: {
      backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    },
    dots: {
      backgroundImage: `
        radial-gradient(circle at 20px 20px, white 2px, transparent 2px),
        radial-gradient(circle at 60px 60px, white 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px'
    },
    diagonal: {
      backgroundImage: `
        repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 20px),
        repeating-linear-gradient(-45deg, white 0px, white 2px, transparent 2px, transparent 20px)
      `,
      backgroundSize: '30px 30px'
    },
    waves: {
      backgroundImage: `
        repeating-linear-gradient(60deg, white 0px, white 2px, transparent 2px, transparent 15px),
        repeating-linear-gradient(120deg, white 0px, white 2px, transparent 2px, transparent 15px),
        repeating-linear-gradient(180deg, white 0px, white 2px, transparent 2px, transparent 15px)
      `,
      backgroundSize: '30px 50px'
    },
    cross: {
      backgroundImage: `
        linear-gradient(30deg, transparent 46%, white 46%, white 54%, transparent 54%),
        linear-gradient(90deg, transparent 46%, white 46%, white 54%, transparent 54%)
      `,
      backgroundSize: '40px 40px'
    },
    hexagon: {
      backgroundImage: `
        linear-gradient(60deg, transparent 45%, white 45%, white 55%, transparent 55%),
        linear-gradient(120deg, transparent 45%, white 45%, white 55%, transparent 55%)
      `,
      backgroundSize: '50px 86.6px'
    }
  };

  return (
    <section className={`relative bg-gradient-to-br from-primary via-[#4a5ba8] to-accent overflow-hidden ${fullHeight ? 'min-h-screen flex items-center' : 'py-16 md:py-24'}`}>
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5a6bc8]/10 via-transparent to-accent/20" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0" 
          style={patterns[pattern]}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#6a7bd8]/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5a7bc8]/10 rounded-full blur-3xl" />

      {/* Sparkles Particle Effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id={`sparkles-${pattern}`}
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.3}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 ${fullHeight ? 'w-full' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default React.memo(AnimatedHeroBackground);
