import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      category: "Cloud Development",
      provider: "Microsoft",
      icon: "☁️"
    },
    {
      title: "Microsoft Certified Solutions Developer (MCSD)",
      category: "Software Development",
      provider: "Microsoft",
      icon: "💻"
    },
    {
      title: "AWS Certified Developer – Associate",
      category: "Cloud Development",
      provider: "Amazon Web Services",
      icon: "🚀"
    },
    {
      title: "Google Associate Android Developer",
      category: "Mobile Development",
      provider: "Google",
      icon: "📱"
    },
    {
      title: "Apple Certified iOS Developer",
      category: "Mobile Development",
      provider: "Apple",
      icon: "🍎"
    },
    {
      title: "Adobe Certified Expert (ACE)",
      category: "Design & Creative",
      provider: "Adobe",
      icon: "🎨"
    },
    {
      title: "Adobe Certified Professional in Visual Design",
      category: "Design & Creative",
      provider: "Adobe",
      icon: "🎭"
    },
    {
      title: "Adobe XD Certification",
      category: "UX/UI Design",
      provider: "Adobe",
      icon: "🔧"
    },
    {
      title: "Figma UX Design Certificate",
      category: "UX/UI Design",
      provider: "Figma",
      icon: "🖌️"
    },
    {
      title: "Google Ads Search Certification",
      category: "Digital Marketing",
      provider: "Google",
      icon: "📈"
    },
    {
      title: "AWS Certified Solutions Architect",
      category: "Cloud Architecture",
      provider: "Amazon Web Services",
      icon: "🏗️"
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      category: "Productivity Tools",
      provider: "Microsoft",
      icon: "📊"
    }
  ];

  const categories = [
    { name: "Cloud Development", count: 2, color: "bg-blue-100 text-blue-800" },
    { name: "Software Development", count: 1, color: "bg-green-100 text-green-800" },
    { name: "Mobile Development", count: 2, color: "bg-purple-100 text-purple-800" },
    { name: "Design & Creative", count: 4, color: "bg-pink-100 text-pink-800" },
    { name: "Digital Marketing", count: 1, color: "bg-yellow-100 text-yellow-800" },
    { name: "Cloud Architecture", count: 1, color: "bg-indigo-100 text-indigo-800" },
    { name: "Cybersecurity", count: 1, color: "bg-red-100 text-red-800" },
    { name: "Productivity Tools", count: 1, color: "bg-gray-100 text-gray-800" }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Certifications
          </h1>
          <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto mb-8">
            Exclusive Vision is powered by a highly certified team, ensuring top-tier professionalism and global standards
          </p>
          <div className="bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-lg inline-block">
            <p className="font-heading font-semibold text-lg">12+ Professional Certifications</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Complete Certification List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-body text-accent font-medium">
                        {cert.provider}
                      </span>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full w-fit">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Certifications Matter */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 rounded-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Our Certifications Matter
            </h2>
            <p className="text-xl font-body max-w-2xl mx-auto">
              Industry-recognized expertise that ensures quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Proven Expertise</h3>
              <p className="font-body text-sm opacity-90">
                Validated skills and knowledge in cutting-edge technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Quality Assurance</h3>
              <p className="font-body text-sm opacity-90">
                Industry standards compliance and best practices implementation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Continuous Learning</h3>
              <p className="font-body text-sm opacity-90">
                Commitment to staying updated with latest technologies and trends
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certifications; 