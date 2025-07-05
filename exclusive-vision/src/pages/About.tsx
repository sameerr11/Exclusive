import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About Exclusive Vision
            </h1>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We are a premier end-to-end IT solutions company redefining the digital experience 
              across the globe with our remote-first approach and global expertise.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Story */}
        <ScrollReveal direction="left">
          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Exclusive Vision is a premier end-to-end IT solutions company redefining the digital 
                experience across the globe. We specialize in delivering cutting-edge, customized, and 
                scalable technology solutions that drive innovation and business success with our 
                remote-first approach and global reach.
              </p>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Whether you're a startup, SME, or enterprise, Exclusive Vision empowers you to lead in your 
                digital transformation journey. With a passionate remote team of developers, designers, analysts, 
                strategists, and certified professionals distributed across the globe, we bring technology and 
                creativity together to build the future through seamless remote collaboration.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To empower businesses through excellence in digital services, leveraging innovation, 
                certified expertise, and next-gen technologies to solve real-world challenges.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To be the region's most trusted IT solutions partner by delivering futuristic, 
                intelligent, and human-centered technology solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>



        {/* Team Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
              A passionate remote team of developers, designers, analysts, strategists, and certified professionals 
              bringing technology and creativity together from around the world.
            </p>
          </div>
        </ScrollReveal>

        {/* Remote Work Philosophy */}
        <ScrollReveal>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Remote-First Approach</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              We believe in the power of remote collaboration. Our distributed team works seamlessly across 
              time zones, leveraging cutting-edge collaboration tools and methodologies to deliver exceptional 
              results. This approach allows us to tap into global talent and provide round-the-clock support 
              to our clients while maintaining the highest standards of quality and innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Development Team</h3>
            <p className="font-body text-accent mb-2">Full-Stack Developers</p>
            <p className="font-body text-gray-600 text-sm">
              Expert developers crafting scalable and robust digital solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-accent/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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