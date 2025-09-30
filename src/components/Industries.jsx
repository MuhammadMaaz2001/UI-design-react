import React from 'react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: '/assets/pills.png',
      title: 'Medical & Pharma Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.'
    },
    {
      icon: '/assets/running-shoes.png',
      title: 'Training & Fitness',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
      hasRedLine: true
    },
    {
      icon: '/assets/digital-economy.png',
      title: 'Fintech',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.'
    },
    {
      icon: '/assets/healthcare.png',
      title: 'Health & Fitness',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.'
    },
    {
      icon: '/assets/briefcase (1).png',
      title: 'Business & Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.'
    },
    {
      icon: '/assets/cleaning.png',
      title: 'Cleaning Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.'
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-12">
          Industries
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
              {/* Red line indicator */}
              {industry.hasRedLine && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-b-lg"></div>
              )}
              
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;