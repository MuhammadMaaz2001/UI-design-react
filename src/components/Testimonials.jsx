import React, { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Scarlett Lawrence",
      image: "/assets/scarlett.png",
      quote:
        "Thank you Team Appingine you guys have a great understanding of what is current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing, Tight deadlines were reliably met without issue. Our strong recommendation if you are looking for quality work.",
    },
   
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      className="relative w-full min-h-[600px] bg-cover bg-center py-16 sm:py-20"
      style={{
        backgroundImage: "url('/assets/Mask group (1).png')",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative">
          {/* Floating Quote Icon */}
          <div className="absolute -top-12 sm:-top-16 left-4 sm:left-12 w-20 sm:w-28 h-20 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
            <img
              src="/assets/quote-left-1 2.png"
              alt="quote"
              className="w-10 sm:w-14 h-10 sm:h-14 object-contain"
            />
          </div>

          {/* Red Card */}
          <div className="relative bg-red-700/80 rounded-xl shadow-2xl p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-start gap-10 sm:gap-16">
            
            {/* Left Section */}
            <div className="lg:w-2/5 text-white pt-2 sm:pt-4 text-center lg:text-left">
              <p className="text-base sm:text-xl font-medium mb-2 sm:mb-4 tracking-wide">
                CLIENT TESTIMONIALS
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                What our clients <br className="hidden sm:block" /> are Saying.
              </h2>
            </div>

            {/* Right Section */}
            <div className="lg:w-3/5 w-full -mt-4 sm:-mt-8">
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-2xl">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg mx-auto sm:mx-0"
                    />
                    {/* Small Quote Badge */}
                    <div className="absolute bottom-0 left-1/2 sm:left-5 -translate-x-1/2 sm:translate-x-0 w-8 h-8 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <img
                        src="/assets/quote.png"
                        alt="quote"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 pt-2 sm:pt-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <div className="w-24 sm:w-36 h-1.5 bg-red-600 rounded-full mx-auto sm:mx-0"></div>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-normal">
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* Dots Indicator */}
                <div className="flex justify-center sm:justify-end items-center gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "w-10 sm:w-14 bg-red-600"
                          : "w-5 sm:w-7 bg-red-200"
                      }`}
                    ></div>
                  ))}
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
