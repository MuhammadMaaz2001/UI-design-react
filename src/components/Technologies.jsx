const Technologies = () => {
  return (
    <section className="relative w-full py-20 px-8 overflow-hidden">
      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/bg-7.svg')" }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Title */}
        <h2 className="text-3xl mx-auto flex justify-center md:text-4xl font-bold text-white mb-12">
          Technologies
        </h2>

        {/* Wrapper with relative positioning */}
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          
          {/* White Card */}
                  <div className="bg-white rounded-lg shadow-xl p-10 relative z-20 md:w-1/2 h-[350px] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus finibus libero, sollicitudin vel tempor vel, aliquam
              quis diam. Ut eros est, luctus eu pulvinar a, luctus in justo.
              Sed felis sapien, rutrum ut tempus quis, elementum eu dui.
            </p>

            {/* Red underline accents */}
            <div className="mt-6 flex gap-2">
              <span className="block h-[3px] w-10 rounded-full bg-[#D11725]" />
              <span className="block h-[3px] w-6 rounded-full bg-[#D11725]/70" />
            </div>
          </div>

          {/* Overlapping Image */}
          <div className="relative md:-ml-24 -mt-12 md:mt-8 z-30 md:w-1/2 flex justify-center">
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/assets/technologies.png"
                alt="Cloud Solutions"
                className="w-[500px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
