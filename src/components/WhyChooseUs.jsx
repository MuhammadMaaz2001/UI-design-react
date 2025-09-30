import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '/assets/brain.png',
      title: 'Focused Business Approach',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
      bgColor: 'bg-gray-100',
     iconBgColor: 'bg-gray-400',
      textColor: 'text-gray-900'
    },
    {
      icon: '/assets/creative-team.png',
      title: 'Professional Team',
      description: 'Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & Isometric apps for Android, IOS, & webapp platforms.',
      bgColor: 'bg-white',
      iconBgColor: 'bg-red-600',
      textColor: 'text-gray-900',
      shadow: true
    },
    {
      icon: '/assets/credit-card.png',
      title: 'Flexible Payment Terms',
      description: 'Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.',
      bgColor: 'bg-gray-100',
      iconBgColor: 'bg-gray-400',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16  max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            With our unique approach and cost-effective solutions, your business will prosper because quality is the top priority for us.
          </p>
        </div>

        {/* Features Row */}
        <div className="flex items-center justify-center gap-5  pb-4">
          {/* Left Circle */}
          <div className="hidden lg:block w-96 h-96 bg-gray-100 rounded-full flex-shrink-0"></div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-96 h-96 ${feature.bgColor} rounded-full p-12 flex-shrink-0 ${
                feature.shadow ? 'shadow-2xl' : ''
              }`}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-28 h-24 ${feature.iconBgColor} rounded-lg mb-6`}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-3 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`text-lg leading-relaxed ${feature.textColor}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          {/* Right Circle */}
          <div className="hidden lg:block w-96 h-96 bg-gray-100 rounded-full flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;