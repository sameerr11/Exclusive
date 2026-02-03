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

// Elegant floating geometric shape
function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
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
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-[#1a1b4d]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a5ba8]/[0.08] via-transparent to-accent/[0.08] blur-3xl" />

      {/* Elegant Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={500}
          height={120}
          rotate={15}
          gradient="from-[#5a6bc8]/[0.15]"
          className="left-[-10%] top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={400}
          height={100}
          rotate={-12}
          gradient="from-accent/[0.15]"
          className="right-[-5%] top-[70%]"
        />
        <ElegantShape
          delay={0.4}
          width={250}
          height={70}
          rotate={8}
          gradient="from-[#6a7bd8]/[0.15]"
          className="left-[10%] bottom-[15%]"
        />
        <ElegantShape
          delay={0.6}
          width={180}
          height={50}
          rotate={-20}
          gradient="from-[#7a8ce8]/[0.12]"
          className="right-[20%] top-[15%]"
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
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-[#a8c8e8] text-primary rounded-lg font-semibold text-base hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Launch Demo
              </motion.a>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image - Floating Effect */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-[#a8c8e8]/30 rounded-2xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto relative z-10"
                  loading="lazy"
                />
                
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6a7bd8]/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80 pointer-events-none" />
    </section>
  );
};

export default React.memo(ProductHero);
