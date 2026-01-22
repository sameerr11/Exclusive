import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const EvErp: React.FC = () => {
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
                src="/EV ERP.png" 
                alt="EV ERP System" 
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
                Comprehensive Enterprise Resource Planning solution designed to streamline business operations, 
                manage resources efficiently, and integrate all business processes into a unified system.
              </motion.p>

              {/* Modules Section */}
              <div className="space-y-4 lg:space-y-6">
            {[
              {
                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "Accounting",
                description: "Complete financial management with ledger, accounts payable, accounts receivable, and financial reporting."
              },
              {
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Purchase",
                description: "Streamline procurement processes with purchase orders, vendor management, and purchase analytics."
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "Sale",
                description: "Manage sales orders, invoicing, quotations, and customer transactions with comprehensive sales tracking."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "CRM",
                description: "Customer relationship management with lead tracking, customer interactions, and sales pipeline management."
              },
              {
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                title: "Inventory",
                description: "Real-time inventory tracking, stock management, and automated reorder points for optimal stock levels."
              },
              {
                icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                title: "Warehouse",
                description: "Warehouse management with location tracking, bin management, and efficient stock movement operations."
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "POS",
                description: "Point of Sale system for retail operations with barcode scanning, payment processing, and receipt generation."
              }
            ].map((module, index) => (
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={module.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-primary mb-1 sm:mb-2">
                        {module.title}
                      </h3>
                      <p className="font-body text-gray-600 leading-relaxed text-xs sm:text-sm">
                        {module.description}
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
                  Ready to Transform Your Business Operations?
                </motion.h2>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl font-body mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto opacity-90 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the power of EV ERP System and streamline your entire business with integrated modules.
                </motion.p>

                <motion.a
                  href="https://your-ev-erp-url.com"
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
                  Access EV ERP System →
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

export default EvErp;
