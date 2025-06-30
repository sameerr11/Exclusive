import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About Exclusive Vision
            </h1>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Founded in Tripoli, Lebanon, we are a premier end-to-end IT solutions company 
              redefining the digital experience across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Story */}
        <ScrollReveal direction="left">
          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Founded in Tripoli, Lebanon, Exclusive Vision is a premier end-to-end IT solutions company 
                redefining the digital experience across the globe. We specialize in delivering cutting-edge, 
                customized, and scalable technology solutions that drive innovation and business success.
              </p>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Whether you're a startup, SME, or enterprise, Exclusive Vision empowers you to lead in your 
                digital transformation journey. With a passionate team of developers, designers, analysts, 
                strategists, and certified professionals, we bring technology and creativity together to build the future.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To empower businesses through excellence in digital services, leveraging innovation, 
                certified expertise, and next-gen technologies to solve real-world challenges.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To be the region's most trusted IT solutions partner by delivering futuristic, 
                intelligent, and human-centered technology solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values Details */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-xl font-body max-w-2xl mx-auto">
                The principles that guide every decision and interaction
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Innovation First</h3>
              <p className="font-body text-sm opacity-90">We lead with creativity and the latest technologies</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Integrity & Trust</h3>
              <p className="font-body text-sm opacity-90">Transparent and honest relationships with clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Excellence</h3>
              <p className="font-body text-sm opacity-90">World-class quality in every line of code and pixel</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Customer-Centricity</h3>
              <p className="font-body text-sm opacity-90">Solutions built for your business goals</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Agility</h3>
              <p className="font-body text-sm opacity-90">Fast, flexible, and adaptive to ever-evolving demands</p>
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
              A passionate team of developers, designers, analysts, strategists, and certified professionals 
              bringing technology and creativity together.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office workspace at Exclusive Vision"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center">
                <p className="font-body text-gray-600 text-sm">Our modern workspace in Tripoli, Lebanon</p>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Collaborative team meeting at Exclusive Vision"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center">
                <p className="font-body text-gray-600 text-sm">Collaborative teamwork driving innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Development Team Lead"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Development Team</h3>
            <p className="font-body text-accent mb-2">Full-Stack Developers</p>
            <p className="font-body text-gray-600 text-sm">
              Expert developers crafting scalable and robust digital solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b4af?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Design Team Lead"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Design Team</h3>
            <p className="font-body text-accent mb-2">UI/UX Designers</p>
            <p className="font-body text-gray-600 text-sm">
              Creative designers focused on user-centered and visually appealing experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Strategy Team Lead"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Strategy Team</h3>
            <p className="font-body text-accent mb-2">Analysts & Strategists</p>
            <p className="font-body text-gray-600 text-sm">
              Strategic thinkers ensuring every solution aligns with business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 