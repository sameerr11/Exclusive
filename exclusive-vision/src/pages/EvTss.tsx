import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const EvTss: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full"
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
          className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Image and Content Side by Side */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-8 lg:mb-16">
            {/* Left Side - Image */}
            <motion.div
              className="lg:sticky lg:top-24 mb-6 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src="/EV TICKET.png"
                alt="EV Ticket Support System"
                className="w-full rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl"
              />
            </motion.div>

            {/* Right Side - Content */}
            <div>
              <motion.p
                className="text-base sm:text-lg font-body text-gray-600 leading-relaxed mb-6 lg:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Comprehensive helpdesk and ticket support platform designed to streamline customer inquiries,
                track issues, and deliver exceptional support with automated workflows and analytics.
              </motion.p>

              {/* Features Section */}
              <div className="space-y-4 lg:space-y-6">
                {[
                  {
                    icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
                    title: "Ticket Management",
                    description: "Create, assign, and track support tickets with priority levels and status tracking."
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Multi-Channel Support",
                    description: "Handle tickets from email, chat, and web forms in a unified dashboard."
                  },
                  {
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    title: "Analytics & Reporting",
                    description: "Monitor response times, resolution rates, and agent performance with detailed reports."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-heading font-semibold text-primary mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="font-body text-gray-600 leading-relaxed text-xs sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent text-white py-10 sm:py-12 lg:py-16 rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
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
                  backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fff 75%), linear-gradient(-45deg, transparent 75%, #fff 75%)',
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Elevate Your Customer Support
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl font-body mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto opacity-90 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the power of EV Ticket Support System and deliver outstanding customer service.
                </motion.p>

                <motion.a
                  href="https://your-ev-tss-url.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Access EV Ticket Support System →
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Back to Products */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center text-accent hover:text-primary font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default EvTss;
