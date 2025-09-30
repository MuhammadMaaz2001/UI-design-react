"use client"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    "HOME",
    "About",
    "Services",
    "Why Choose Us",
    "Portfolio",
    "Products",
    "Testimonial",
    "Technologies",
    "Contact",
  ]

  const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const XIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl">
            <img src="/assets/Logo-Final 2.png" alt="Appicoders Logo" className="h-20 w-20" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white text-sm hover:opacity-80 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Phone Button */}
        <div className="hidden lg:flex">
          <a
            href="tel:+18008268018"
            className="flex items-center gap-2 px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-red-600 transition-all"
          >
            <PhoneIcon />
            <span className="text-sm font-medium">+1 (800) 826-8018</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-red-600 border-t border-white/20">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white text-sm hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+18008268018"
              className="flex items-center justify-center gap-2 px-6 py-2 border-2 border-white rounded-full text-white mt-4"
            >
              <PhoneIcon />
              <span className="text-sm font-medium">+1 (800) 826-8018</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
