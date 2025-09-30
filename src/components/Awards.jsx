export default function Awards() {
  const awards = [
    {
      image: "/assets/Mask group.png",
      alt: "ITFirms Award",
    },
    {
      image: "/assets/bgreomve.png",
      alt: "Top Mobile App Developers 2020",
    },
    {
      image: "/assets/clutch.png",
      alt: "Clutch Award",
    },
    {
      image: "/assets/appfutua.png",
      alt: "Appfutura Award",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Awards and Recognitions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={award.image || "/placeholder.svg"}
                alt={award.alt}
                className={`w-auto object-contain transition-all
                  ${award.alt === "ITFirms Award" ? "h-40" : "h-32"}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
