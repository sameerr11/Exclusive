import React from 'react';

const Workflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin with a comprehensive assessment of your requirements, current systems, and objectives.",
      details: [
        "Requirements gathering",
        "System analysis",
        "Feasibility study",
        "ROI assessment"
      ]
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our experts develop a customized solution architecture tailored to your specific needs.",
      details: [
        "Solution architecture",
        "Technical specifications",
        "Project timeline",
        "Resource allocation"
      ]
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We implement the solution using industry best practices and rigorous testing protocols.",
      details: [
        "Software development",
        "Hardware integration",
        "Quality assurance",
        "Performance optimization"
      ]
    },
    {
      number: "04",
      title: "Installation & Integration",
      description: "Professional deployment and seamless integration with your existing infrastructure.",
      details: [
        "System installation",
        "Configuration setup",
        "Integration testing",
        "User training"
      ]
    },
    {
      number: "05",
      title: "Support & Maintenance",
      description: "Ongoing support to ensure optimal performance and continuous improvement.",
      details: [
        "24/7 monitoring",
        "Regular maintenance",
        "Performance tuning",
        "Feature updates"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach ensuring flexibility and rapid delivery",
      icon: "🔄"
    },
    {
      title: "DevOps Integration",
      description: "Continuous integration and deployment for faster time-to-market",
      icon: "⚙️"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing at every stage to ensure reliability",
      icon: "✅"
    },
    {
      title: "Risk Management",
      description: "Proactive identification and mitigation of potential issues",
      icon: "🛡️"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Workflow
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Project Delivery Process
          </h2>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center font-body text-gray-700">
                          <svg className="w-4 h-4 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-heading font-bold mb-2">{step.number}</div>
                      <div className="font-body text-lg">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl font-body max-w-2xl mx-auto">
              Industry-proven approaches that drive success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{methodology.icon}</div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {methodology.title}
                </h3>
                <p className="font-body text-sm opacity-90">
                  {methodology.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            Typical Project Timeline
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-heading font-bold">1-2</span>
                </div>
                <p className="font-body font-semibold text-primary">Weeks</p>
                <p className="font-body text-sm text-gray-600">Discovery & Design</p>
              </div>
              
              <div className="hidden md:block flex-1 h-0.5 bg-accent mx-4"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-heading font-bold">4-8</span>
                </div>
                <p className="font-body font-semibold text-primary">Weeks</p>
                <p className="font-body text-sm text-gray-600">Development & Testing</p>
              </div>
              
              <div className="hidden md:block flex-1 h-0.5 bg-accent mx-4"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-heading font-bold">1-2</span>
                </div>
                <p className="font-body font-semibold text-primary">Weeks</p>
                <p className="font-body text-sm text-gray-600">Deployment & Training</p>
              </div>
              
              <div className="hidden md:block flex-1 h-0.5 bg-accent mx-4"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-heading font-bold">∞</span>
                </div>
                <p className="font-body font-semibold text-primary">Ongoing</p>
                <p className="font-body text-sm text-gray-600">Support & Maintenance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg font-body text-gray-600 mb-8">
            Let's discuss your requirements and create a customized workflow for your success
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workflow; 