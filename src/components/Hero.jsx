import React from 'react'
import Header from "./Header"
import { ChevronLeft, ChevronRight } from "lucide-react";


const HeroSection = () => {
  return (
  <>
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

       
      <img
  src="/assets/Rectangle 38.svg"
  alt="Main Black Background"
  className="absolute top-0 left-0 w-full h-full object-cover -z-30"
/>
<div className="absolute bottom-12 right-80 flex gap-4">
  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
    <ChevronLeft className="w-5 h-5 text-black" />
  </button>
  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
    <ChevronRight className="w-5 h-5 text-black" />
  </button>
</div>

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
        <Header />
<div className="relative z-10 container grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-4 px-6">
  {/* Left - Image */}
  <div className="flex mt-8 justify-center md:justify-start">
    <img
      src="/assets/Mobile-Mockup.svg"
      alt="App Showcase"
      className="w-[120px] md:w-[200px] lg:w-[360px]"
    />
  </div>

  {/* Right - Text */}
  <div className="text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
      Leading the Way in App Development Innovation
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100">
      We build Android &amp; iOS Mobile Apps that cater to all your business needs.
    </p>
    <button className="mt-6 px-12 py-4 rounded bg-gradient-to-r from-[#4b0000] to-[#b31217] text-white font-semibold shadow-md hover:opacity-90">
      GET A FREE QUOTE
    </button>
  </div>
</div>

      </section>

  </>
  )
}

export default HeroSection