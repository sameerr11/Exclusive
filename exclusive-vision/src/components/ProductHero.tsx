import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SparklesCore } from './Sparkles';

interface ProductHeroProps {
  badge: string;
  title: string;
  description: string;
  demoLink: string;
  image: string;
  imageAlt: string;
  pattern?: 'grid' | 'dots' | 'diagonal' | 'waves' | 'cross' | 'hexagon';
}

const ProductHero: React.FC<ProductHeroProps> = ({
  badge,
  title,
  description,
  demoLink,
  image,
  imageAlt,
  pattern = 'grid'
}) => {
  const patterns: Record<string, { backgroundImage: string; backgroundSize: string }> = {
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
        repeating-linear-gradient(120deg, white 0px, white 2px, transparent 2px, transparent 15px)
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
    <section className="relative bg-gradient-to-br from-primary via-[#4a5ba8] to-accent overflow-hidden min-h-screen flex items-center">
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
          id={`sparkles-product-${pattern}`}
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
            >
              <span className="text-white text-sm font-semibold">{badge}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductHero);
