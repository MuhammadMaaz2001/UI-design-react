export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-[#ED1C24]">Appicoders</span> <span className="text-[#ED1C24]">– #1.</span> Mobile App & Web Development Company in USA
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
            </p>
            <button className="bg-[#C41820] hover:bg-[#A01519] text-white px-10 py-4 rounded-md font-bold text-sm tracking-wide transition-colors shadow-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}