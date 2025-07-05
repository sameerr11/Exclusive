import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Animated Background */}
        <ScrollReveal>
            <div className="relative text-center mb-24">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative py-16 px-8">
                <motion.h1 
                  className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
              About Exclusive Vision
                </motion.h1>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.p 
                  className="text-xl font-body text-gray-600 max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  We are a premier end-to-end IT solutions company redefining the digital experience 
                  across the globe with our remote-first approach and global expertise.
                </motion.p>
              </div>
          </div>
        </ScrollReveal>

          {/* Company Story with Creative Layout */}
        <ScrollReveal direction="left">
            <div className="mb-24">
              <div className="relative">
                <motion.div 
                  className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="bg-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="relative z-10">
                    <motion.h2 
                      className="text-4xl font-heading font-bold text-primary mb-8 relative"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Our Story
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </motion.h2>
                    <div className="space-y-6">
                      <motion.p 
                        className="font-body text-gray-600 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        Exclusive Vision is a premier end-to-end IT solutions company redefining the digital 
                        experience across the globe. We specialize in delivering cutting-edge, customized, and 
                        scalable technology solutions that drive innovation and business success with our 
                        remote-first approach and global reach.
                      </motion.p>
                      <motion.p 
                        className="font-body text-gray-600 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                Whether you're a startup, SME, or enterprise, Exclusive Vision empowers you to lead in your 
                        digital transformation journey. With a passionate remote team of developers, designers, analysts, 
                        strategists, and certified professionals distributed across the globe, we bring technology and 
                        creativity together to build the future through seamless remote collaboration.
                      </motion.p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </ScrollReveal>

          {/* Mission & Vision with Interconnected Design */}
          <div className="mb-24 relative">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full z-10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left" delay={0.1}>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-10 rounded-2xl shadow-xl">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Mission</h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed text-center">
                To empower businesses through excellence in digital services, leveraging innovation, 
                certified expertise, and next-gen technologies to solve real-world challenges.
              </p>
            </div>
                </motion.div>
          </ScrollReveal>
              
          <ScrollReveal direction="right" delay={0.2}>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-primary/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-10 rounded-2xl shadow-xl">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ rotate: -180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </motion.div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Vision</h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed text-center">
                To be the region's most trusted IT solutions partner by delivering futuristic, 
                intelligent, and human-centered technology solutions.
              </p>
            </div>
                </motion.div>
          </ScrollReveal>
            </div>
          </div>

          {/* Remote Work Philosophy with Modern Card Design */}
        <ScrollReveal>
            <div className="mb-24 relative">
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-white p-12 rounded-3xl shadow-2xl overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <div className="relative z-10">
                  <motion.div className="text-center mb-8">
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </motion.div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Remote-First Approach</h2>
                  </motion.div>
                  <motion.p 
                    className="font-body text-gray-600 text-lg leading-relaxed text-center max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    We believe in the power of remote collaboration. Our distributed team works seamlessly across 
                    time zones, leveraging cutting-edge collaboration tools and methodologies to deliver exceptional 
                    results. This approach allows us to tap into global talent and provide round-the-clock support 
                    to our clients while maintaining the highest standards of quality and innovation.
                  </motion.p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Team Section with Enhanced Design */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 relative z-10">
                  Our Expert Team
                </h2>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl"
                  animate={{
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.p 
                className="text-lg font-body text-gray-600 max-w-3xl mx-auto mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A passionate remote team of developers, designers, analysts, strategists, and certified professionals 
                bringing technology and creativity together from around the world.
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Team Cards with Enhanced Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Development Team",
                role: "Full-Stack Developers",
                description: "Expert developers crafting scalable and robust digital solutions.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                color: "primary",
                delay: 0.1
              },
              {
                title: "Design Team", 
                role: "UI/UX Designers",
                description: "Creative designers focused on user-centered and visually appealing experiences.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
                color: "accent",
                delay: 0.2
              },
              {
                title: "Strategy Team",
                role: "Analysts & Strategists", 
                description: "Strategic thinkers ensuring every solution aligns with business goals.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                color: "primary",
                delay: 0.3
              }
            ].map((team, index) => (
              <ScrollReveal key={index} delay={team.delay}>
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: team.delay }}
                  />
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <motion.div 
                      className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden ${
                        team.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`absolute inset-0 ${
                          team.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <svg 
                        className={`w-12 h-12 relative z-10 ${
                          team.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={team.icon} />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2 text-center">
                      {team.title}
                    </h3>
                    <p className="font-body text-accent mb-4 text-center font-semibold">
                      {team.role}
                    </p>
                    <p className="font-body text-gray-600 text-sm text-center leading-relaxed">
                      {team.description}
            </p>
          </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 