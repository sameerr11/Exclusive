import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            About Exclusive Vision
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            Founded in Tripoli, Lebanon, we are a premier end-to-end IT solutions company 
            redefining the digital experience across the globe.
          </p>
        </div>

        {/* Company Story */}
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

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              To empower businesses through excellence in digital services, leveraging innovation, 
              certified expertise, and next-gen technologies to solve real-world challenges.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              To be the region's most trusted IT solutions partner by delivering futuristic, 
              intelligent, and human-centered technology solutions.
            </p>
          </div>
        </div>

        {/* Core Values Details */}
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

        {/* Company Stats */}
        <div className="bg-white py-16 rounded-lg mb-16 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-primary">10+</div>
              <div className="font-body text-lg text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-primary">200+</div>
              <div className="font-body text-lg text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-primary">50+</div>
              <div className="font-body text-lg text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-primary">24/7</div>
              <div className="font-body text-lg text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            A passionate team of developers, designers, analysts, strategists, and certified professionals 
            bringing technology and creativity together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Development Team</h3>
            <p className="font-body text-accent mb-2">Full-Stack Developers</p>
            <p className="font-body text-gray-600 text-sm">
              Expert developers crafting scalable and robust digital solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Design Team</h3>
            <p className="font-body text-accent mb-2">UI/UX Designers</p>
            <p className="font-body text-gray-600 text-sm">
              Creative designers focused on user-centered and visually appealing experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
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