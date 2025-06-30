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
            We are dedicated to providing innovative vision solutions that transform businesses 
            and drive success across multiple industries.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              To revolutionize industries through cutting-edge vision technology and exceptional service, 
              empowering our clients to achieve unprecedented levels of efficiency and innovation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              To become the global leader in vision solutions, setting industry standards for excellence, 
              innovation, and customer satisfaction while fostering sustainable growth.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">15+</div>
              <div className="font-body text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">500+</div>
              <div className="font-body text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">50+</div>
              <div className="font-body text-lg">Industry Certifications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">24/7</div>
              <div className="font-body text-lg">Support Available</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Our diverse team of professionals brings decades of combined experience in vision technology and industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Sarah Johnson</h3>
            <p className="font-body text-accent mb-2">Chief Executive Officer</p>
            <p className="font-body text-gray-600 text-sm">
              15+ years leading vision technology initiatives across Fortune 500 companies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Michael Chen</h3>
            <p className="font-body text-accent mb-2">Chief Technology Officer</p>
            <p className="font-body text-gray-600 text-sm">
              Pioneering innovation in vision systems with 20+ patents and industry recognition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Emily Rodriguez</h3>
            <p className="font-body text-accent mb-2">Head of Operations</p>
            <p className="font-body text-gray-600 text-sm">
              Expert in streamlining complex workflows and ensuring project excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 