import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Manufacturing & Automotive",
      description: "Quality control, assembly line inspection, and automated defect detection systems.",
      applications: [
        "Production line monitoring",
        "Quality assurance",
        "Defect detection",
        "Parts identification"
      ],
      icon: "🏭"
    },
    {
      title: "Healthcare & Medical",
      description: "Medical imaging, diagnostic systems, and pharmaceutical quality control solutions.",
      applications: [
        "Medical imaging analysis",
        "Diagnostic assistance",
        "Pharmaceutical inspection",
        "Laboratory automation"
      ],
      icon: "🏥"
    },
    {
      title: "Food & Beverage",
      description: "Food safety inspection, packaging quality control, and contamination detection.",
      applications: [
        "Food safety inspection",
        "Packaging verification",
        "Contamination detection",
        "Label verification"
      ],
      icon: "🍽️"
    },
    {
      title: "Electronics & Technology",
      description: "PCB inspection, component verification, and semiconductor quality control.",
      applications: [
        "PCB inspection",
        "Component verification",
        "Soldering quality",
        "Circuit testing"
      ],
      icon: "💻"
    },
    {
      title: "Aerospace & Defense",
      description: "Critical component inspection, safety systems, and precision measurement.",
      applications: [
        "Component inspection",
        "Safety verification",
        "Precision measurement",
        "Material analysis"
      ],
      icon: "✈️"
    },
    {
      title: "Pharmaceutical & Life Sciences",
      description: "Drug manufacturing quality control, packaging verification, and compliance monitoring.",
      applications: [
        "Drug quality control",
        "Packaging inspection",
        "Batch verification",
        "Compliance monitoring"
      ],
      icon: "💊"
    }
  ];

  const caseStudies = [
    {
      industry: "Automotive",
      challenge: "Reduce defect rates in transmission assembly",
      solution: "Implemented computer vision system for real-time inspection",
      result: "75% reduction in defect rates, 40% faster inspection times"
    },
    {
      industry: "Electronics",
      challenge: "Improve PCB soldering quality control",
      solution: "Deployed AI-powered visual inspection system",
      result: "99.7% accuracy in defect detection, 60% cost reduction"
    },
    {
      industry: "Pharmaceutical",
      challenge: "Ensure packaging compliance and quality",
      solution: "Integrated vision system with production line",
      result: "100% compliance verification, zero recall incidents"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            Delivering specialized vision solutions across diverse industries with tailored expertise
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 text-center">
                  {industry.title}
                </h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed text-center">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-body font-semibold text-accent mb-3">Key Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center font-body text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-accent p-4">
                <button className="w-full text-white font-semibold hover:bg-white hover:bg-opacity-20 transition-colors duration-200 py-2 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Industry Impact
            </h2>
            <p className="text-xl font-body max-w-2xl mx-auto">
              Proven results across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">25+</div>
              <div className="font-body text-lg">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">99.5%</div>
              <div className="font-body text-lg">Average Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">60%</div>
              <div className="font-body text-lg">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">24/7</div>
              <div className="font-body text-lg">Operation Support</div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {study.industry}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  Challenge
                </h3>
                <p className="font-body text-gray-600 text-sm mb-4">
                  {study.challenge}
                </p>
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  Solution
                </h3>
                <p className="font-body text-gray-600 text-sm mb-4">
                  {study.solution}
                </p>
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  Result
                </h3>
                <p className="font-body text-accent font-semibold text-sm">
                  {study.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Don't See Your Industry?
          </h2>
          <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
            We specialize in creating custom vision solutions for unique industry requirements. 
            Our flexible approach allows us to adapt to any sector's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
              Discuss Custom Solution
            </button>
            <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries; 