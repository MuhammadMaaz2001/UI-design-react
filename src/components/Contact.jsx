"use client"

export default function Contact() {
  const PhoneIcon = ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  return (
    <section id="contact" className="grid lg:grid-cols-2">
      {/* Left: Red Section with Form */}
      <div className="bg-[#ED1C24] p-12 lg:p-16">
        <div className="max-w-xl">
          <p className="text-white/90 text-sm uppercase tracking-wider mb-4">LET'S TALK</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Got an idea? Let's get in touch!</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white py-4 rounded-md font-semibold transition-colors"
            >
              LET'S GET IN TOUCH
            </button>
          </form>
        </div>
      </div>

      {/* Right: Dark Section with Contact Info */}
      <div className="bg-[#2B2D42] p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-xl">
          <img src="/assets/contact.png" alt="Team Discussion" className="w-full rounded-lg mb-8" />
          <p className="text-white/90 text-center mb-8">
            Please submit your inquiry and our App Development Strategist will contact you shortly
          </p>
          <div className="text-center">
            <PhoneIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <a href="tel:+18008268018" className="text-3xl font-bold text-white hover:text-[#ED1C24] transition-colors">
              +1-(800) 826 8018
            </a>
            <p className="text-white/70 mt-2">info@appicoders.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
