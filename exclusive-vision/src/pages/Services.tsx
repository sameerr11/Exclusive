import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Computer Vision Solutions",
      description: "Advanced image processing and analysis systems for automated inspection and quality control.",
      features: ["Real-time processing", "Machine learning integration", "Custom algorithms", "24/7 monitoring"]
    },
    {
      title: "Industrial Automation",
      description: "Comprehensive automation solutions that integrate vision systems with manufacturing processes.",
      features: ["Production line integration", "Quality assurance", "Defect detection", "Process optimization"]
    },
    {
      title: "Optical Inspection Systems",
      description: "High-precision inspection systems for detecting defects and ensuring product quality.",
      features: ["Microscopic analysis", "Surface inspection", "Dimensional measurement", "Compliance reporting"]
    },
    {
      title: "Vision System Integration",
      description: "Seamless integration of vision technology into existing business infrastructure.",
      features: ["Legacy system compatibility", "Custom interfaces", "Data analytics", "Remote monitoring"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            Comprehensive vision solutions tailored to meet the unique needs of your industry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center font-body text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Service Approach
            </h2>
            <p className="text-xl font-body max-w-2xl mx-auto">
              A systematic approach ensuring optimal results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold">1</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Analysis</h3>
              <p className="font-body text-sm opacity-90">Comprehensive assessment of your requirements</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold">2</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Design</h3>
              <p className="font-body text-sm opacity-90">Custom solution architecture and planning</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold">3</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Implementation</h3>
              <p className="font-body text-sm opacity-90">Professional installation and configuration</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold">4</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Support</h3>
              <p className="font-body text-sm opacity-90">Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg font-body text-gray-600 mb-8">
            Contact us today to discuss your vision solution requirements
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 