import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const Services: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      description: "Comprehensive web solutions from static sites to complex e-commerce platforms.",
      features: ["Static & dynamic websites", "E-commerce platforms", "CMS (WordPress, Joomla, Drupal)", "SEO-friendly architecture"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "iOS Development",
      description: "Native iOS applications with full Apple ecosystem compatibility.",
      features: ["Native Swift development", "iPad & Apple Watch compatibility", "App Store publishing & compliance", "iOS-specific optimizations"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to boost your online presence.",
      features: ["SEO & SEM", "Pay-Per-Click (PPC) Campaigns", "Email Marketing Automation", "Content Marketing & Blogging"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI integration to automate and enhance business processes.",
      features: ["AI-powered chatbots", "Predictive analytics", "NLP & machine learning integration", "Custom AI tools for automation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications for all business needs.",
      features: ["Android app development", "Cross-platform apps (Flutter, React Native)", "Enterprise mobility solutions", "Mobile app optimization"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design solutions that deliver exceptional user experiences.",
      features: ["Wireframing & prototyping", "Responsive design for all platforms", "Human-centric product design", "Figma, Adobe XD, Sketch"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Media Management",
      description: "Strategic social media solutions to build and engage your community.",
      features: ["Strategy & planning", "Creatives & branding", "Community engagement", "Analytics & reporting"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business requirements.",
      features: ["CRM, ERP, and HRM systems", "Desktop software solutions", "SaaS product development", "Agile development methodologies"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Computing Services",
      description: "Comprehensive cloud solutions for scalable and secure infrastructure.",
      features: ["Cloud migration & setup (AWS, Azure, GCP)", "Serverless architecture", "Cloud security & DevOps", "Infrastructure management"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Robust security measures to protect your digital assets and data.",
      features: ["Vulnerability assessments", "Endpoint security", "Network monitoring", "Compliance audits (ISO 27001, GDPR)"],
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with integrated payment and logistics systems.",
      features: ["Custom e-commerce portals", "Shopify, Magento, WooCommerce", "Payment gateway integration", "Inventory & logistics automation"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "IT Training & Certifications",
      description: "Professional training programs for individuals and corporate teams.",
      features: ["Tailored training for corporates and individuals", "Microsoft Office, Adobe, and Dev tools", "Online & in-person bootcamps", "Certification programs"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Power BI, Tableau dashboarding", "Data warehousing", "Real-time reporting solutions", "Advanced analytics & KPIs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlined development operations for faster and more reliable deployments.",
      features: ["CI/CD pipelines", "Docker, Kubernetes, Jenkins", "Cloud-native infrastructure management", "Automated deployment solutions"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "IT Consulting & Project Management",
      description: "Strategic IT guidance and expert project management for digital transformation.",
      features: ["Digital transformation strategy", "Agile & Scrum-based project leadership", "Vendor management", "Technical documentation"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blockchain Development",
      description: "Innovative blockchain solutions for decentralized applications and smart contracts.",
      features: ["Smart contracts", "Decentralized apps (dApps)", "Wallet development", "Blockchain integration"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <AnimatedHeroBackground pattern="diagonal" fullHeight={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-white text-sm font-semibold">16+ Comprehensive Services</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Our Services
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive IT solutions covering every aspect of digital transformation and business technology needs
            </p>
          </motion.div>
        </div>
      </AnimatedHeroBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * (index % 8)} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
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
              </div>
            </ScrollReveal>
          ))}
        </div>



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
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform border border-blue-200">
                <p className="font-body font-semibold text-blue-800 text-sm">{tech}</p>
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