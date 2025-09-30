import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Scarlett Lawrence',
      image: '/assets/scarlett.png',
      quote: 'Thank you Team Appingine you guys have a great understanding of what is current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing, Tight deadlines were reliably met without issue. Our Strong recommendations if you are looking for quality work'
    }
  ];

  return (
    <section 
      className="relative w-full min-h-[600px] bg-cover bg-center py-20"
      style={{ 
        backgroundImage: "url('/assets/Mask group (1).png')",
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          {/* Quote Icon - Top Left Outside */}
         <div className="absolute -top-16 left-12 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
  <img
    src="/assets/quote-left-1 2.png"
    alt="Award Icon"
    className="w-14 h-14 object-contain"
  />
</div>


          {/* Main Red Card */}
          <div className="relative bg-red-700/80 rounded-xl shadow-2xl p-16 flex flex-col lg:flex-row items-start gap-16">

            
            {/* Left: Text Content */}
            <div className="lg:w-2/5 text-white pt-4">
              <p className="text-xl font-normal mb-4 tracking-wide">CLIENT TESTIMONIALS</p>
              <h2 className="text-6xl font-bold leading-tight">
                What our clients<br />are Saying.
              </h2>
            </div>

            {/* Right: Testimonial Card */}
            <div className="lg:w-3/5 w-full -mt-8">
              <div className="bg-white rounded-xl p-10 shadow-2xl">
                
                {/* Profile Section */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {/* Small Quote Badge */}
                    <div className="absolute bottom-0 left-5 w-8 h-8 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <img
    src="/assets/quote.png"
    alt="Award Icon"
    className="w-4 h-4 object-contain"
  />
                    </div>
                  </div>

                  <div className="flex-1 pt-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <div className="w-36 h-1.5 bg-red-600 rounded-full"></div>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-900 text-lg leading-relaxed mb-8 font-normal">
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* Progress Indicators */}
                <div className="flex justify-end items-center gap-2">
                  <div className="w-14 h-1.5 bg-red-600 rounded-full"></div>
                  <div className="w-7 h-1.5 bg-red-200 rounded-full"></div>
                  <div className="w-7 h-1.5 bg-red-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;