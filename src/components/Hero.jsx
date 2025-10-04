import React from "react";
import Header from "./Header";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* ===== Background Images ===== */}
        <img
          src="/assets/Rectangle 38.svg"
          alt="Main Black Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        />
        <img
          src="/assets/Rectangle 39.svg"
          alt="Outer Background Curve"
          className="absolute inset-0 w-full h-full object-fill -z-20"
        />
        <img
          src="/assets/Rectangle 41.svg"
          alt="Inner Background Curve"
          className="absolute inset-0 w-full h-[96%] object-fill -z-10"
        />

        {/* ===== Navigation Buttons ===== */}
        <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-24 lg:right-80 flex gap-3 sm:gap-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* ===== Header Component ===== */}
        <Header />

        {/* ===== Content Section ===== */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-6 px-4 sm:px-6 lg:px-12">
          {/* Left: App Mockup Image */}
          <div className="flex justify-center md:justify-start mt-8 md:mt-0">
            <img
              src="/assets/Mobile-Mockup.svg"
              alt="App Showcase"
              className="w-[150px] sm:w-[220px] md:w-[300px] lg:w-[360px] drop-shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leading the Way in <br className="hidden sm:block" /> App Development Innovation
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100 max-w-xl mx-auto md:mx-0">
              We build Android &amp; iOS Mobile Apps that cater to all your business needs.
            </p>

            <button className="mt-6 px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[#4b0000] to-[#b31217] text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
