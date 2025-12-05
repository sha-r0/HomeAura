// components/HeroSection.jsx

export default function HeroSection() {
    return (
      <div className="relative w-full h-screen">
  
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/interior-bg.jpg')" }} // your image path
        ></div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
  
        {/* Top Right Button */}
        <div className="absolute top-6 right-6 z-20">
          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/40 hover:bg-white/30 transition">
            <span>📞</span> Talk to the Team
          </button>
        </div>
  
        {/* Center Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-20 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
            DESIGNING SPACES <br /> THAT INSPIRE
          </h1>
  
          <p className="text-white text-lg md:text-xl mt-6">
            Modern, Elegant, and Timeless Interior Solutions.
          </p>
  
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-white/90 text-gray-800 font-semibold px-6 py-3 rounded-full flex items-center gap-3 shadow-md hover:scale-105 transition">
              Request a Quote →
            </button>
          </div>
        </div>
  
        {/* Social Icons */}
        <div className="absolute bottom-6 left-6 flex gap-4 text-white z-20">
          <a href="#" className="text-xl hover:opacity-70">📸</a>
          <a href="#" className="text-xl hover:opacity-70">👍</a>
          <a href="#" className="text-xl hover:opacity-70">💼</a>
        </div>
  
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-6 right-6 text-white text-2xl animate-bounce z-20">
          ↓
        </div>
  
      </div>
    );
  }
  