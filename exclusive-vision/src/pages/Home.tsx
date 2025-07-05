import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, isVisible]);

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

// Floating Icon Component
const FloatingIcon: React.FC<{ icon: React.ReactNode; delay?: number }> = ({ icon, delay = 0 }) => {
  return (
    <motion.div
      className="absolute text-accent/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay
      }}
    >
      {icon}
    </motion.div>
  );
};

// Animated Text Component
const AnimatedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const letters = text.split('');
  
  return (
    <motion.div className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            mixBlendMode: 'multiply'
          }}
        ></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 175, 206, 0.1), transparent 40%)`
          }}
        />
        
        {/* Floating Icons */}
        <FloatingIcon 
          icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
          delay={0}
        />
        <FloatingIcon 
          icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.5 5-6.5h-3.025c.26-3.037 2.725-5.5 5.775-5.5 3.183 0 5.75 2.567 5.75 5.75s-2.567 5.75-5.75 5.75c-1.678 0-3.127-.684-4.19-1.813l-1.414 1.414c1.414 1.414 3.355 2.399 5.604 2.399 4.418 0 8-3.582 8-8s-3.582-8-8-8z"/></svg>}
          delay={1}
        />
        <FloatingIcon 
          icon={<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
          delay={2}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="text-center"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
              variants={itemVariants}
            >
              <AnimatedText text="Exclusive Vision" delay={0.5} />
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-body mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Where vision meets innovation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform inline-block"
                >
                  Our Services
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 transform inline-block"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Impact
              </h2>
              <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
                Numbers that speak to our commitment and success
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <AnimatedCounter end={150} suffix="+" />
                <p className="text-lg font-body text-gray-600 mt-2">Projects Completed</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <AnimatedCounter end={98} suffix="%" />
                <p className="text-lg font-body text-gray-600 mt-2">Client Satisfaction</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <AnimatedCounter end={50} suffix="+" />
                <p className="text-lg font-body text-gray-600 mt-2">Team Members</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <AnimatedCounter end={5} suffix=" Years" />
                <p className="text-lg font-body text-gray-600 mt-2">Industry Experience</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
                The principles that drive our commitment to excellence in digital transformation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Innovation First
                </h3>
                <p className="font-body text-gray-600">
                  We lead with creativity and the latest technologies
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Integrity & Trust
                </h3>
                <p className="font-body text-gray-600">
                  Transparent and honest relationships with clients
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Excellence
                </h3>
                <p className="font-body text-gray-600">
                  World-class quality in every line of code and pixel
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Customer-Centricity
                </h3>
                <p className="font-body text-gray-600">
                  Solutions built for your business goals
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Agility
                </h3>
                <p className="font-body text-gray-600">
                  Fast, flexible, and adaptive to ever-evolving demands
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Innovation
                </h3>
                <p className="font-body text-gray-600">
                  Pushing boundaries with cutting-edge solutions
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #8aafce 25%, transparent 25%), linear-gradient(-45deg, #8aafce 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #8aafce 75%), linear-gradient(-45deg, transparent 75%, #8aafce 75%)',
            backgroundSize: '20px 20px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Transform Your Digital Journey?
            </h2>
            <p className="text-xl font-body mb-8 max-w-2xl mx-auto">
              Whether you're a startup, SME, or enterprise, we empower you to lead in your digital transformation
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform inline-block"
              >
                Start Your Project Today
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home; 