"use client"
import Header from "./Header"

export default function Hero() {
  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#2B2D42]">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        {/* Large red shape */}
        <div className="absolute top-0 right-0 w-[70%] h-full bg-[#ED1C24] rounded-bl-[200px]" />
        {/* Dark overlay shape */}
        <div className="absolute bottom-0 left-0 w-[60%] h-[40%] bg-[#2B2D42] rounded-tr-[200px]" />
      </div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Mockup%201-GZHl7oo8qjOsphjqUi9eKyqdJ5yr15.png"
                alt="Mobile App Mockup"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Leading the Way in App Development Innovation
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
            </p>
            <div className="pt-4">
              <button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors">
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 right-12 flex gap-4">
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeftIcon />
          </button>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
