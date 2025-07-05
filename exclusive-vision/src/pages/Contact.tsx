import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: ''
      });
    }, 1500);
  };

  const industries = [
    'Healthcare & Telemedicine',
    'Education & E-learning',
    'Financial Services',
    'E-commerce & Retail',
    'Real Estate',
    'Manufacturing',
    'Tourism & Hospitality',
    'Media & Entertainment',
    'Government & NGOs',
    'Startups & SMEs',
    'Other'
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@exclusivevision.com',
      subContent: 'We respond within 24 hours'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+961 6 XXX XXX',
      subContent: 'Mon-Fri 9AM-6PM (Lebanon Time)'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Remote-First Team',
      subContent: 'Based in Lebanon, Serving Globally'
    }
  ];

  return (
    <div className="relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-primary opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent opacity-10 rounded-full blur-xl"
        />
      </div>

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <ScrollReveal>
            <div className="relative text-center mb-16 overflow-hidden rounded-2xl">
              <div 
                className="relative bg-cover bg-center bg-no-repeat py-24"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                  backgroundBlendMode: 'multiply'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent/90"></div>
                <div className="relative z-10 px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                      Let's Start Building
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                        Your Digital Future
                      </span>
                    </h1>
                    <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
                      Ready to transform your ideas into reality? Our expert team is here to guide you through every step of your digital journey.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                      >
                        ✨ Free Consultation
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                      >
                        🚀 Fast Response
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                      >
                        💡 Expert Guidance
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Tell Us About Your Project
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                          placeholder="Your company name"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                          placeholder="+961 XX XXX XXX"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry / Sector
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry, index) => (
                          <option key={index} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50"
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-primary to-accent text-white p-8 rounded-2xl shadow-xl">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Get in Touch
                  </h2>
                  <p className="font-body mb-8 opacity-90">
                    We're here to help you bring your digital vision to life. Reach out through any of these channels:
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">{info.title}</h3>
                          <p className="font-body">{info.content}</p>
                          <p className="font-body text-sm opacity-75">{info.subContent}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Quick Actions */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-semibold text-primary mb-1">Response Time</h3>
                        <p className="font-body text-sm text-gray-600">Within 24 hours</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-semibold text-primary mb-1">Free Consultation</h3>
                        <p className="font-body text-sm text-gray-600">No commitment required</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Office Hours */}
              <ScrollReveal delay={0.4}>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <h3 className="font-heading font-semibold text-blue-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-body font-medium text-blue-800">Monday - Friday:</span>
                      <span className="font-body text-blue-700">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body font-medium text-blue-800">Saturday:</span>
                      <span className="font-body text-blue-700">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body font-medium text-blue-800">Sunday:</span>
                      <span className="font-body text-blue-700">Closed</span>
                    </div>
                    <p className="font-body text-xs text-blue-600 mt-3 text-center">
                      Lebanon Time (GMT+2/+3)
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 