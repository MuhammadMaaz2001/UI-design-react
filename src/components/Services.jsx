export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
        </svg>
      ),
      title: "Custom Mobile Application",
      description: "iOS, Android and Hybrid Apps",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      ),
      title: "Artificial Intelligence",
      description: "Chatbots & ML Bot Development",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      title: "Custom Web Development",
      description: "Laravel, React, Progressive Web App",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2l-4 4 4 4V7h4.5c2.76 0 5 2.24 5 5s-2.24 5-5 5H10v3h.5c4.42 0 8-3.58 8-8s-3.58-8-8-8H6V2zm12 16l4-4-4-4v3h-4.5c-2.76 0-5-2.24-5-5s2.24-5 5-5H14V0h-.5c-4.42 0-8 3.58-8 8s3.58 8 8 8h4.5v3z" />
        </svg>
      ),
      title: "Blockchain Development",
      description: "Decentralized Apps",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Augmented Reality",
      description: "Marker-AR App",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
        </svg>
      ),
      title: "MVP Development",
      description: "for Startups & Entrepreneurs",
    },
  ]

  return (
    <section id="services" className="relative bg-[#ED1C24] overflow-hidden">
      {/* Curved shape at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-[#ED1C24] -mt-1">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 Q720,0 1440,120 L1440,0 L0,0 Z" fill="#F3F4F6" />
        </svg>
      </div>

      {/* Diagonal line pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)",
          }}
        />
      </div>

      {/* Curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#ED1C24]">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#2B2D42" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Services List */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/90 mb-12">Get to know about what we're good at.</p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#ED1C24]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-lg">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Illustration */}
          <div className="relative">
            <img
              src="/assets/vector-services.svg"
              alt="App Development Illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}