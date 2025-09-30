"use client"
import { useState } from "react"

export default function Products() {
  const [activeTab, setActiveTab] = useState("ALL")

  const tabs = [
    "ALL",
    "Health Supreme",
    "CRM 365",
    "OSDA",
    "Marketplace E-Commerce Platform",
    "Sports Training App",
    "Fitness",
  ]

  const products = [
    { 
      image: "/assets/laptop.png", 
      category: "CRM 365",
      title: "CRM 365"
    },
    { 
      image: "/assets/ipad.png", 
      category: "Marketplace E-Commerce Platform",
      title: "Marketplace Platform"
    },
    { 
      image: "/assets/mobile-product.png", 
      category: "Sports Training App",
      title: "Sports Training App"
    },
    { 
      image: "/assets/ipad-2.png", 
      category: "Fitness",
      title: "Fitness App"
    },
    { 
      image: "/assets/health-supreme.png", 
      category: "Health Supreme",
      title: "Health Supreme"
    },
    { 
      image: "/assets/laptop-2.png", 
      category: "OSDA",
      title: "OSDA Platform"
    },
  ]

  // Filter products based on active tab
  const filteredProducts = activeTab === "ALL" 
    ? products 
    : products.filter(product => product.category === activeTab)

  return (
    <section
      id="products"
      className="relative py-20 bg-[#ED1C24] overflow-hidden"
    >
      {/* Vector Top - Red wave pattern */}
      <img
        src="/assets/Vector-product-top.png"
        alt="Vector Top"
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-0"
      />

      {/* Vector Bottom - Red wave pattern */}
      <img
        src="/assets/Vector-product-bottom.png"
        alt="Vector Bottom"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0"
      />

      {/* Diagonal line pattern background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Products
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-white text-[#ED1C24] shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-xl">No products found for this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}