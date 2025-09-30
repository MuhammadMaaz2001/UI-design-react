
import { useState } from "react"

export default function Technologies() {
  const [activeSlide, setActiveSlide] = useState(0)

  const technologies = [
    {
      title: "Cloud Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis nisl. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu dui.",
      image: "/assets/technologies.png",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis nisl. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu dui.",
      image: "/assets/technologies.png",
    },
    {
      title: "Blockchain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis nisl. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu dui.",
      image: "/assets/technologies.png",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Subtle background effects */}
      
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-wide">Technologies</h2>
        </div>

        <div className="relative flex items-center justify-start">
          {/* Left: Content Card */}
          <div className="bg-white p-10 rounded-lg shadow-2xl relative max-w-xl z-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {technologies[activeSlide].title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-12 text-left font-normal tracking-normal">
              {technologies[activeSlide].description}
            </p>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "w-10 bg-[#ED1C24]" : "w-8 bg-gray-300"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Technology Image - Overlapping with proper z-index */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 lg:w-7/12 z-10">
            <img
              src={technologies[activeSlide].image || "/assets/technologies.png"}
              alt={technologies[activeSlide].title}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}