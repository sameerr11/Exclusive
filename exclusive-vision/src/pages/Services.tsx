import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      description: "Comprehensive web solutions from static sites to complex e-commerce platforms.",
      features: ["Static & dynamic websites", "E-commerce platforms", "CMS (WordPress, Joomla, Drupal)", "SEO-friendly architecture"]
    },
    {
      title: "iOS Development",
      description: "Native iOS applications with full Apple ecosystem compatibility.",
      features: ["Native Swift development", "iPad & Apple Watch compatibility", "App Store publishing & compliance", "iOS-specific optimizations"]
    },
    {
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to boost your online presence.",
      features: ["SEO & SEM", "Pay-Per-Click (PPC) Campaigns", "Email Marketing Automation", "Content Marketing & Blogging"]
    },
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI integration to automate and enhance business processes.",
      features: ["AI-powered chatbots", "Predictive analytics", "NLP & machine learning integration", "Custom AI tools for automation"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications for all business needs.",
      features: ["Android app development", "Cross-platform apps (Flutter, React Native)", "Enterprise mobility solutions", "Mobile app optimization"]
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design solutions that deliver exceptional user experiences.",
      features: ["Wireframing & prototyping", "Responsive design for all platforms", "Human-centric product design", "Figma, Adobe XD, Sketch"]
    },
    {
      title: "Social Media Management",
      description: "Strategic social media solutions to build and engage your community.",
      features: ["Strategy & planning", "Creatives & branding", "Community engagement", "Analytics & reporting"]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business requirements.",
      features: ["CRM, ERP, and HRM systems", "Desktop software solutions", "SaaS product development", "Agile development methodologies"]
    },
    {
      title: "Cloud Computing Services",
      description: "Comprehensive cloud solutions for scalable and secure infrastructure.",
      features: ["Cloud migration & setup (AWS, Azure, GCP)", "Serverless architecture", "Cloud security & DevOps", "Infrastructure management"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Robust security measures to protect your digital assets and data.",
      features: ["Vulnerability assessments", "Endpoint security", "Network monitoring", "Compliance audits (ISO 27001, GDPR)"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with integrated payment and logistics systems.",
      features: ["Custom e-commerce portals", "Shopify, Magento, WooCommerce", "Payment gateway integration", "Inventory & logistics automation"]
    },
    {
      title: "IT Training & Certifications",
      description: "Professional training programs for individuals and corporate teams.",
      features: ["Tailored training for corporates and individuals", "Microsoft Office, Adobe, and Dev tools", "Online & in-person bootcamps", "Certification programs"]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Power BI, Tableau dashboarding", "Data warehousing", "Real-time reporting solutions", "Advanced analytics & KPIs"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlined development operations for faster and more reliable deployments.",
      features: ["CI/CD pipelines", "Docker, Kubernetes, Jenkins", "Cloud-native infrastructure management", "Automated deployment solutions"]
    },
    {
      title: "IT Consulting & Project Management",
      description: "Strategic IT guidance and expert project management for digital transformation.",
      features: ["Digital transformation strategy", "Agile & Scrum-based project leadership", "Vendor management", "Technical documentation"]
    },
    {
      title: "Blockchain Development",
      description: "Innovative blockchain solutions for decentralized applications and smart contracts.",
      features: ["Smart contracts", "Decentralized apps (dApps)", "Wallet development", "Blockchain integration"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions covering every aspect of digital transformation and business technology needs
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * (index % 8)} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start font-body text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Service Categories */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Service Categories
              </h2>
              <p className="text-xl font-body max-w-2xl mx-auto">
                Our expertise spans across multiple technology domains
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Development</h3>
              <p className="font-body text-sm opacity-90">Web, Mobile, Software & Custom Solutions</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Cloud & Infrastructure</h3>
              <p className="font-body text-sm opacity-90">Cloud Migration, DevOps & Security</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L16.16 14.5 15 15.66l-1.75-1.75L12 15.16l1.41 1.41L16.16 20l3.75-3.75z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Analytics & AI</h3>
              <p className="font-body text-sm opacity-90">Data Analytics, BI & AI Solutions</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Consulting & Training</h3>
              <p className="font-body text-sm opacity-90">IT Consulting, Project Management & Training</p>
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Technology Stack */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Technologies We Master
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              'React', 'Node.js', 'Python', 'Swift', 'Flutter', 'Angular', 'Vue.js', 'Django',
              'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'MongoDB', 'PostgreSQL',
              'Shopify', 'Magento', 'WordPress', 'Drupal', 'Power BI', 'Tableau', 'Figma', 'Adobe XD'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <p className="font-body font-semibold text-gray-700 text-sm">{tech}</p>
              </div>
            ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg font-body text-gray-600 mb-8">
              Contact us today to discuss your specific requirements and get a customized solution
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-200 transform">
              Request a Consultation
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Services; 