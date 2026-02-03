import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Circle, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProductHeroProps {
  badge: string;
  title: string;
  description: string;
  demoLink: string;
  image: string;
  imageAlt: string;
  pattern?: 'grid' | 'dots' | 'diagonal' | 'waves' | 'cross' | 'hexagon';
}

// Elegant floating geometric shape - Optimized
function ElegantShape({
    className,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <div
            className={cn("absolute", className)}
            style={{
                width,
                height,
                transform: `rotate(${rotate}deg)`,
            }}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-full animate-float-slow",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "border border-white/[0.12]",
                    "shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]"
                )}
            />
        </div>
    );
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
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-[#1a1b4d]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a5ba8]/[0.08] via-transparent to-accent/[0.08] blur-3xl" />

      {/* Elegant Geometric Shapes - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          width={500}
          height={120}
          rotate={15}
          gradient="from-[#5a6bc8]/[0.12]"
          className="left-[-10%] top-[20%]"
        />
        <ElegantShape
          width={400}
          height={100}
          rotate={-12}
          gradient="from-accent/[0.12]"
          className="right-[-5%] top-[70%]"
        />
        <ElegantShape
          width={250}
          height={70}
          rotate={8}
          gradient="from-[#6a7bd8]/[0.12]"
          className="left-[10%] bottom-[15%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.15] mb-6 md:mb-8 backdrop-blur-sm"
            >
              <Circle className="h-2 w-2 fill-accent" />
              <span className="text-sm text-white/70 tracking-wide font-semibold">
                {badge}
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-accent via-white/95 to-[#a8c8e8]"
                )}>
                  {title}
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 md:mb-10 leading-relaxed font-light max-w-xl">
                {description}
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-[#a8c8e8] text-primary rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                Launch Demo
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image - Optimized */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative animate-float-slow">
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-[#a8c8e8]/20 rounded-2xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto"
                  loading="lazy"
                />
                
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/15 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#6a7bd8]/15 rounded-full blur-xl" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80 pointer-events-none" />
    </section>
  );
};

export default React.memo(ProductHero);
