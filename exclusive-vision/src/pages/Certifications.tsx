import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ElegantHero from '../components/ElegantHero';

const Certifications: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      category: "Cloud Development",
      provider: "Microsoft",
      icon: "☁️"
    },
    {
      title: "Microsoft Certified Solutions Developer (MCSD)",
      category: "Software Development",
      provider: "Microsoft",
      icon: "💻"
    },
    {
      title: "AWS Certified Developer – Associate",
      category: "Cloud Development",
      provider: "Amazon Web Services",
      icon: "🚀"
    },
    {
      title: "Google Associate Android Developer",
      category: "Mobile Development",
      provider: "Google",
      icon: "📱"
    },
    {
      title: "Apple Certified iOS Developer",
      category: "Mobile Development",
      provider: "Apple",
      icon: "🍎"
    },
    {
      title: "Adobe Certified Expert (ACE)",
      category: "Design & Creative",
      provider: "Adobe",
      icon: "🎨"
    },
    {
      title: "Adobe Certified Professional in Visual Design",
      category: "Design & Creative",
      provider: "Adobe",
      icon: "🎭"
    },
    {
      title: "Adobe XD Certification",
      category: "UX/UI Design",
      provider: "Adobe",
      icon: "🔧"
    },
    {
      title: "Figma UX Design Certificate",
      category: "UX/UI Design",
      provider: "Figma",
      icon: "🖌️"
    },
    {
      title: "Google Ads Search Certification",
      category: "Digital Marketing",
      provider: "Google",
      icon: "📈"
    },
    {
      title: "AWS Certified Solutions Architect",
      category: "Cloud Architecture",
      provider: "Amazon Web Services",
      icon: "🏗️"
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      category: "Productivity Tools",
      provider: "Microsoft",
      icon: "📊"
    }
  ];


  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-32 right-16 w-40 h-40 bg-accent/5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-primary/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 bg-accent/10"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <ElegantHero
          badge="Certified Excellence"
          title="Our Certifications"
          subtitle="12+ Professional Certifications"
          description="Exclusive Vision is powered by a highly certified team, ensuring top-tier professionalism and global standards"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Enhanced Certifications Grid */}
          <ScrollReveal>
            <div className="mb-24">
              <motion.div className="text-center mb-16">
                                 <motion.h2 
                   className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 relative inline-block"
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                 >
                  Complete Certification List
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-2xl -z-10"
                    animate={{
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={index} delay={0.1 * (index % 6)}>
                    <motion.div 
                      className="relative group"
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated background shape */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform rotate-3"
                        animate={{
                          rotate: hoveredCard === index ? 6 : 3,
                          scale: hoveredCard === index ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                        {/* Animated corner decoration */}
                        <motion.div
                          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                        />
                        
                        <div className="flex items-start mb-6 relative z-10">
                          <motion.div 
                            className="text-4xl mr-6 transform"
                            animate={{
                              rotate: hoveredCard === index ? [0, 10, -10, 0] : 0,
                              scale: hoveredCard === index ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {cert.icon}
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3 
                              className="text-lg font-heading font-semibold text-primary mb-3 leading-tight"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
                            >
                              {cert.title}
                            </motion.h3>
                            <div className="flex flex-col gap-3">
                              <motion.span 
                                className="text-sm font-body text-accent font-semibold"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                              >
                                {cert.provider}
                              </motion.span>
                              <motion.span 
                                className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs rounded-full w-fit border"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + (0.1 * index) }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {cert.category}
                              </motion.span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Enhanced Why Certifications Matter Section */}
          <ScrollReveal>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent text-white py-16 rounded-3xl shadow-2xl overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-white to-accent rounded-t-3xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                />
                
                <div className="relative z-10 px-8">
                  <motion.div className="text-center mb-12">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-heading font-bold mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Why Our Certifications Matter
                    </motion.h2>
                    <motion.p 
                      className="text-xl font-body max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Industry-recognized expertise that ensures quality and reliability
                    </motion.p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                      {
                        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                        title: "Proven Expertise",
                        description: "Validated skills and knowledge in cutting-edge technologies",
                        delay: 0.1
                      },
                      {
                        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Quality Assurance", 
                        description: "Industry standards compliance and best practices implementation",
                        delay: 0.2
                      },
                      {
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        title: "Continuous Learning",
                        description: "Commitment to staying updated with latest technologies and trends",
                        delay: 0.3
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="text-center group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: item.delay }}
                      >
                        <motion.div 
                          className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d={item.icon}/>
                          </svg>
                        </motion.div>
                                                 <motion.h3 
                           className="text-lg font-heading font-semibold mb-4"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                         >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="font-body text-sm opacity-90 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.9 }}
                          transition={{ duration: 0.6, delay: item.delay + 0.2 }}
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 