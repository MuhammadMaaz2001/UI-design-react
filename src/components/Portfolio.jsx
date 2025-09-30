import React, { useState } from 'react';
import ChipView from './ChipView';


const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const chipItems = [
    'iOS Development',
    'Android Development',
    'UI/UX Design'
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  return (
    <section className="w-full relative bg-gray-50">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="/assets/Mask group (2).png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background-overlayDark"></div>
        <img
          src="/assets/Mask group (2).png"
          alt="Background Overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Portfolio Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="flex justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 flex flex-col">
              
              {/* Chip Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {chipItems?.map((item, index) => (
                  <ChipView
  key={index}
  text={item}
  className="bg-white text-red-300 text-xs font-bold rounded px-4 py-2"
  layout_width="auto"
  position="relative"
  variant="filled" 
  size="medium"
  onClick={() => {}}
  icon=""
  onRemove={() => {}}
/>

                ))}
              </div>

              {/* Project Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Caviar - Order Food Delivery
              </h2>

              {/* Project Description */}
              <p className="text-base md:text-lg lg:text-xl font-medium text-white/90 mb-8 leading-relaxed max-w-3xl">
                Get Food delivered from curated lists of local restaurants right at your doorstep. Get the way you really wanna...at home and make any night a special occasion.
              </p>

              {/* App Store Badges */}
              <div className="flex flex-wrap gap-4 mb-10">
                <img
                  src="/assets/app-store.png"
                  alt="App Store"
                  className="h-12 md:h-14 lg:h-16 object-contain"
                />
                <img
                  src="/assets/play-store.png"
                  alt="Google Play"
                  className="h-12 md:h-14 lg:h-16 object-contain"
                />
              </div>

              {/* CTA button */}
              <button
  className="bg-red-700 text-white font-bold text-sm md:text-base lg:text-lg px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 self-start"
  onClick={() => {}}
>
  VIEW CASE STUDY
</button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-2/5 flex justify-center items-center relative">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Background Gradient Card */}
                <div className="absolute top-2 left-4 right-0 bottom-0 bg-gradient-to-br from-white/20 to-transparent border border-white/20 rounded-xl shadow-2xl"></div>
                
                {/* Main Image */}
                <img
                  src="/assets/mob-17.png"
                  alt="Caviar App"
                  className="relative z-10 w-full h-auto object-contain rounded-xl"
                />
              </div>

              {/* Next button */}
              <button
                onClick={handleNextSlide}
                className="absolute -bottom-8 right-0 w-12 h-12 lg:w-14 lg:h-14 hover:opacity-80 transition-opacity"
                aria-label="Next project"
              >
                <img
                  src="/assets/nav.png"
                  alt="Next"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;