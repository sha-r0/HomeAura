// components/AboutSection.jsx

export default function AboutSection() {
    return (
      <section className="w-full py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center gap-16">
  
        {/* Left Side - Image + Overlay Frame */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Main Image */}
          <img
            src="/about-img.jpg"  // replace with your image
            alt="Interior Design"
            className="rounded-md shadow-md w-[420px] h-auto object-cover"
          />
  
          {/* Transparent Frame Effect */}
          <div className="absolute top-12 left-12 w-[260px] h-[360px] border border-gray-300 opacity-60"></div>
        </div>
  
        {/* Right Side Content */}
        <div className="w-full md:w-1/2">
          
          {/* Stats */}
          <div className="flex flex-col gap-10 mb-12">
            <div>
              <h2 className="text-5xl font-light">03+</h2>
              <p className="text-lg tracking-wide mt-2">YEARS<br />EXPERIENCE</p>
            </div>
  
            <div>
              <h2 className="text-5xl font-light">20+</h2>
              <p className="text-lg tracking-wide mt-2">PROJECTS</p>
            </div>
          </div>
  
          {/* Heading */}
          <h3 className="text-xl tracking-widest text-[#0b3b44] uppercase mb-3">
            About Us
          </h3>
  
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Make Is a Different <br /> Kind Of Architecture <br /> Practice
          </h1>
  
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            At Home, we believe architecture is more than just building spaces—
            it's about creating experiences. Our practice blends modern design,
            functionality, and timeless aesthetics, ensuring every project reflects
            both innovation and individuality.
          </p>
  
          {/* CTA Button */}
          <button className="flex items-center gap-3 bg-[#0b5c63] text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-[#094b50] transition">
            <span className="text-xl">→</span>
            Discover Our Projects
          </button>
        </div>
  
      </section>
    );
  }
  