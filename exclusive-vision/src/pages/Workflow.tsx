import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const navigate = useNavigate();
  
  // Respect user's motion preferences
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description: "We begin by understanding your business needs, goals, and specific requirements through detailed consultation.",
      details: [
        "Understand business needs",
        "Stakeholder interviews",
        "Project scope definition",
        "Timeline and budget planning"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      number: "02",
      title: "Research & Analysis",
      description: "Comprehensive research and analysis focusing on technical feasibility and user-centric design approach.",
      details: [
        "Technical & user-centric feasibility",
        "Market research analysis",
        "Technology stack evaluation",
        "Risk assessment and mitigation"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "Creating visual and functional layouts that align with your brand and user experience requirements.",
      details: [
        "Visual and functional layout",
        "UI/UX design and wireframes",
        "Interactive prototypes",
        "Design system creation"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      number: "04",
      title: "Development & Testing",
      description: "Implementation using agile sprints with continuous quality assurance and testing cycles.",
      details: [
        "Agile sprints and QA cycles",
        "Code development and reviews",
        "Continuous testing and debugging",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      number: "05",
      title: "Deployment & Training",
      description: "Smooth launch process with comprehensive client enablement and user training programs.",
      details: [
        "Smooth launch and client enablement",
        "Production deployment",
        "User training and documentation",
        "Go-live support and monitoring"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Ongoing maintenance, updates, and continuous improvement to ensure optimal performance.",
      details: [
        "Ongoing maintenance & upgrades",
        "Performance monitoring",
        "Feature enhancements",
        "24/7 technical support"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with regular client feedback and flexible adaptation",
      icon: "🔄"
    },
    {
      title: "User-Centric Design",
      description: "Focus on user experience and human-centered design principles",
      icon: "👤"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing at every stage to ensure reliability",
      icon: "✅"
    },
    {
      title: "Client Collaboration",
      description: "Regular communication and transparency throughout the project",
      icon: "🤝"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Optimized Background Elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <motion.div
            className="absolute top-24 right-12 w-24 h-24 bg-primary/5 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-24 left-12 w-20 h-20 bg-accent/5 rounded-full"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      <div className="relative z-10">
          {/* Enhanced Hero Section */}
          <AnimatedHeroBackground pattern="grid" fullHeight={true}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  <span className="text-white text-sm font-semibold">6-Step Process</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
                  Our Workflow
                </h1>

                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                  A comprehensive process that ensures successful project delivery and exceptional results for every client
                </p>
              </motion.div>
            </div>
        </AnimatedHeroBackground>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Enhanced Process Steps */}
          <ScrollReveal>
            <div className="mb-24">
              <motion.div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 relative inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
            Our 6-Step Process
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-2xl -z-10"
                    animate={{
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h2>
              </motion.div>
              
              <div className="space-y-16">
            {steps.map((step, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <motion.div 
                      className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                      onHoverStart={() => setActiveStep(index)}
                      onHoverEnd={() => setActiveStep(null)}
                    >
                <div className="lg:w-1/2">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform rotate-1"
                            animate={{
                              rotate: activeStep === index ? 2 : 1,
                              scale: activeStep === index ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <motion.div
                              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 * index }}
                            />
                            
                            <div className="flex items-center mb-6 relative z-10">
                              <motion.div 
                                className="w-16 h-16 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mr-6"
                                whileHover={{ 
                                  scale: 1.1,
                                  boxShadow: "0 10px 30px rgba(138, 175, 206, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                              >
                        {step.number}
                              </motion.div>
                              <motion.h3 
                                className="text-2xl font-heading font-semibold text-primary"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                              >
                        {step.title}
                              </motion.h3>
                    </div>
                            
                            <motion.p 
                              className="font-body text-gray-600 mb-6 leading-relaxed text-lg"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 + (0.1 * index) }}
                            >
                      {step.description}
                            </motion.p>
                            
                            <motion.ul 
                              className="space-y-3"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                            >
                      {step.details.map((detail, detailIndex) => (
                                <motion.li 
                                  key={detailIndex} 
                                  className="flex items-center font-body text-gray-700"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.6 + (0.1 * index) + (0.1 * detailIndex) }}
                                >
                                  <motion.svg 
                                    className="w-5 h-5 text-accent mr-3" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    whileHover={{ scale: 1.2 }}
                                  >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </motion.svg>
                          {detail}
                                </motion.li>
                      ))}
                            </motion.ul>
                  </div>
                        </motion.div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                        <motion.div 
                          className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl group"
                          whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.img 
                      src={step.image} 
                      alt={step.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/70 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 + (0.1 * index) }}
                          >
                      <div className="text-white text-center">
                              <motion.div 
                                className="text-6xl font-heading font-bold mb-4"
                                animate={{
                                  scale: activeStep === index ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {step.number}
                              </motion.div>
                              <motion.div 
                                className="font-body text-xl"
                                animate={{
                                  y: activeStep === index ? -5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {step.title}
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
          </div>
          </ScrollReveal>

          {/* Enhanced Methodologies */}
          <ScrollReveal>
            <div className="mb-24">
              <div className="relative bg-gradient-to-br from-primary to-accent text-white py-20 rounded-3xl shadow-2xl overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-white to-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0.5 : 1 }}
                />
                <div className="relative z-10 px-8">
                  <motion.div className="text-center mb-16">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-heading font-bold mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
              Our Development Philosophy
                    </motion.h2>
                    <motion.p 
                      className="text-xl font-body max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
              Principles that guide our approach to every project
                    </motion.p>
                  </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
                      <motion.div 
                        key={index} 
                        className="text-center group"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.05 * index }}
                        whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
                      >
                        <motion.div 
                          className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                          whileHover={prefersReducedMotion ? {} : { 
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                                                                               <motion.div 
                            className="text-4xl"
                            animate={prefersReducedMotion ? {} : {
                              rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {methodology.icon}
                          </motion.div>
                        </motion.div>
                        <motion.h3 
                          className="text-lg font-heading font-semibold mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                  {methodology.title}
                        </motion.h3>
                        <motion.p 
                          className="font-body text-sm opacity-90 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.9 }}
                          transition={{ duration: 0.6, delay: 0.2 + (0.1 * index) }}
                        >
                  {methodology.description}
                        </motion.p>
                      </motion.div>
            ))}
          </div>
                </div>
              </div>
                </div>
          </ScrollReveal>

          {/* Enhanced Timeline */}
          <ScrollReveal>
            <div className="mb-24">
              <motion.div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 relative inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Typical Project Timeline
                                     <motion.div
                     className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-2xl -z-10"
                     animate={{
                       rotate: [0, 1, -1, 0],
                     }}
                     transition={{
                       duration: 4,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
                </motion.h2>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-white via-gray-50 to-white p-12 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                  {[
                    { duration: "1-2", unit: "Weeks", phase: "Requirement & Research" },
                    { duration: "2-3", unit: "Weeks", phase: "Design & Prototyping" },
                    { duration: "6-12", unit: "Weeks", phase: "Development & Testing" },
                    { duration: "1-2", unit: "Weeks", phase: "Deployment & Training" },
                    { duration: "∞", unit: "Ongoing", phase: "Support & Optimization" }
                  ].map((timeline, index) => (
                    <React.Fragment key={index}>
                      <motion.div 
                        className="text-center group"
                        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 0.05 * index }}
                        whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                      >
                        <motion.div 
                          className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          whileHover={prefersReducedMotion ? {} : { 
                            boxShadow: "0 12px 30px rgba(138, 175, 206, 0.25)",
                            y: -3
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-white font-heading font-bold text-lg">{timeline.duration}</span>
                        </motion.div>
                        <motion.p 
                          className="font-body font-semibold text-primary text-lg"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + (0.1 * index) }}
                        >
                          {timeline.unit}
                        </motion.p>
                        <motion.p 
                          className="font-body text-sm text-gray-600"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + (0.1 * index) }}
                        >
                          {timeline.phase}
                        </motion.p>
                      </motion.div>
                      
                      {index < 4 && (
                        <motion.div 
                          className="hidden lg:block flex-1 h-1 bg-gradient-to-r from-accent to-primary mx-6 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 + (0.1 * index) }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Enhanced CTA Section */}
          <ScrollReveal>
        <div className="text-center">
              <motion.div
                className="relative bg-gradient-to-br from-gray-50 to-white p-16 rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0.5 : 1 }}
                />
                <motion.h2 
                  className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
            Ready to Start Your Project?
                </motion.h2>
                <motion.p 
                  className="text-lg font-body text-gray-600 mb-10 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
            Let's discuss your requirements and create a customized development plan for your success
                </motion.p>
                                <motion.button 
                  onClick={handleScheduleConsultation}
                  className="bg-gradient-to-r from-accent to-primary text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 0.2 }}
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.03,
                    boxShadow: "0 12px 30px rgba(138, 175, 206, 0.25)"
                  }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                >
                  Schedule a Consultation
                </motion.button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Workflow; 