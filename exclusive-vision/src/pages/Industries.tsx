import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Digital health solutions, telemedicine platforms, and healthcare management systems.",
      applications: [
        "Telemedicine platforms",
        "Electronic health records",
        "Patient management systems",
        "Medical appointment scheduling"
      ],
      icon: "🏥"
    },
    {
      title: "Education",
      description: "Learning management systems, educational platforms, and digital learning tools.",
      applications: [
        "Learning management systems",
        "Online course platforms",
        "Student information systems",
        "Virtual classroom solutions"
      ],
      icon: "🎓"
    },
    {
      title: "Finance",
      description: "Fintech solutions, banking applications, and financial management systems.",
      applications: [
        "Banking applications",
        "Payment processing systems",
        "Financial dashboards",
        "Investment platforms"
      ],
      icon: "💰"
    },
    {
      title: "Retail & E-commerce",
      description: "Complete e-commerce platforms, inventory management, and retail solutions.",
      applications: [
        "E-commerce portals",
        "Inventory management",
        "Point of sale systems",
        "Customer loyalty programs"
      ],
      icon: "🛍️"
    },
    {
      title: "Real Estate",
      description: "Property management systems, real estate platforms, and CRM solutions.",
      applications: [
        "Property listing platforms",
        "Property management systems",
        "Real estate CRM",
        "Virtual property tours"
      ],
      icon: "🏢"
    },
    {
      title: "Manufacturing",
      description: "Industrial automation, supply chain management, and production optimization systems.",
      applications: [
        "Production management",
        "Supply chain optimization",
        "Quality control systems",
        "Equipment monitoring"
      ],
      icon: "🏭"
    },
    {
      title: "Tourism & Hospitality",
      description: "Booking systems, hotel management, and travel platform solutions.",
      applications: [
        "Hotel booking systems",
        "Restaurant management",
        "Travel planning platforms",
        "Guest experience apps"
      ],
      icon: "✈️"
    },
    {
      title: "NGOs & Government",
      description: "Public sector solutions, citizen services, and non-profit management systems.",
      applications: [
        "Citizen service portals",
        "Government databases",
        "NGO management systems",
        "Public information systems"
      ],
      icon: "🏛️"
    },
    {
      title: "Media & Entertainment",
      description: "Content management systems, streaming platforms, and media production tools.",
      applications: [
        "Content management platforms",
        "Streaming solutions",
        "Media production tools",
        "Digital distribution systems"
      ],
      icon: "🎬"
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      challenge: "Create HIPAA-compliant telemedicine platform",
      solution: "Built secure, cloud-based telemedicine solution with video consultations",
      result: "Served 15,000+ patients, 98% user satisfaction rate"
    },
    {
      industry: "E-commerce",
      challenge: "Build scalable multi-vendor marketplace",
      solution: "Developed comprehensive e-commerce platform with vendor management",
      result: "300% increase in sales, 50% faster checkout process"
    },
    {
      industry: "Education",
      challenge: "Develop interactive learning management system",
      solution: "Created LMS with video conferencing, assessments, and progress tracking",
      result: "40% improvement in student engagement, 60% faster grading"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Delivering specialized IT solutions across diverse industries with tailored expertise and innovation
            </p>
          </div>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * (index % 6)} 
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col h-full">
              <div className="p-6 flex-grow">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 text-center">
                  {industry.title}
                </h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed text-center">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-body font-semibold text-accent mb-3">Key Solutions:</h4>
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
              <div className="bg-gradient-to-r from-primary to-accent p-4 mt-auto">
                <button className="w-full text-white font-semibold hover:bg-white hover:bg-opacity-20 transition-colors duration-200 py-2 rounded">
                  Learn More
                </button>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industry Stats */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-xl font-body max-w-2xl mx-auto">
                Proven results across multiple sectors and business sizes
              </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">9+</div>
              <div className="font-body text-lg">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">200+</div>
              <div className="font-body text-lg">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">50+</div>
              <div className="font-body text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">24/7</div>
              <div className="font-body text-lg">Support Available</div>
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Case Studies */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Custom Solutions */}
        <ScrollReveal>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Don't See Your Industry?
            </h2>
            <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
              We specialize in creating custom IT solutions for unique business requirements. 
              Our flexible approach allows us to adapt to any industry's specific needs.
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
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Industries; 