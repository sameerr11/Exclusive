import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Industries: React.FC = () => {
  const navigate = useNavigate();

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
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];



  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent overflow-hidden py-16 md:py-24 mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(60deg, white 0px, white 2px, transparent 2px, transparent 15px),
              repeating-linear-gradient(120deg, white 0px, white 2px, transparent 2px, transparent 15px),
              repeating-linear-gradient(180deg, white 0px, white 2px, transparent 2px, transparent 15px)
            `,
            backgroundSize: '30px 50px'
          }} />
        </div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
            >
              <span className="text-white text-sm font-semibold">9+ Industries Served</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Industries We Serve
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Delivering specialized IT solutions across diverse industries with tailored expertise and innovation
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * (index % 6)} 
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col h-full">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
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
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full text-white font-semibold hover:bg-white hover:bg-opacity-20 hover:scale-105 transition-all duration-200 transform py-2 rounded cursor-pointer"
                >
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
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">50+</div>
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
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-200 transform cursor-pointer"
              >
                Discuss Custom Solution
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Industries; 