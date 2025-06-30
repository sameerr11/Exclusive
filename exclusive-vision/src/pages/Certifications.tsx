import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      category: "Quality Management",
      description: "International standard for quality management systems ensuring consistent product quality.",
      year: "2023"
    },
    {
      title: "IEC 61508",
      category: "Functional Safety",
      description: "International standard for functional safety of electrical/electronic systems.",
      year: "2022"
    },
    {
      title: "CE Marking",
      category: "European Conformity",
      description: "Compliance with European Union safety, health, and environmental requirements.",
      year: "2023"
    },
    {
      title: "FDA 21 CFR Part 820",
      category: "Medical Device Quality",
      description: "Quality system regulation for medical device manufacturing.",
      year: "2023"
    },
    {
      title: "IATF 16949",
      category: "Automotive Quality",
      description: "Automotive quality management system standard for the automotive industry.",
      year: "2022"
    },
    {
      title: "AS9100D",
      category: "Aerospace Quality",
      description: "Quality management system for the aerospace and defense industries.",
      year: "2023"
    }
  ];

  const partners = [
    "Microsoft Azure Certified",
    "AWS Solutions Provider",
    "NVIDIA Partner Network",
    "Intel IoT Solutions Alliance",
    "Siemens Technology Partner",
    "Cognex Certified System Integrator"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Certifications & Standards
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated through industry-leading certifications and partnerships
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Industry Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {cert.title}
                  </h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cert.year}
                  </span>
                </div>
                <p className="font-body text-accent font-medium mb-3">
                  {cert.category}
                </p>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body text-sm text-green-600 font-medium">Certified & Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Compliance */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl font-body max-w-2xl mx-auto">
              We adhere to the highest industry standards across all sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Quality</h3>
              <p className="font-body text-sm opacity-90">ISO 9001 Quality Management</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Safety</h3>
              <p className="font-body text-sm opacity-90">IEC 61508 Functional Safety</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.46.66C7.5 16.67 9.59 10.84 18.68 9L17 8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Environmental</h3>
              <p className="font-body text-sm opacity-90">RoHS & REACH Compliance</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Security</h3>
              <p className="font-body text-sm opacity-90">Cybersecurity Framework</p>
            </div>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <p className="font-body text-sm font-medium text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            Verified Excellence
          </h2>
          <p className="font-body text-gray-600 mb-6">
            Our certifications ensure you receive solutions that meet the highest industry standards
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
            View Full Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 