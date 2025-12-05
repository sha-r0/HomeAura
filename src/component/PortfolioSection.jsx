export default function PortfolioSection() {
    return (
        <section className="relative w-full py-20 px-6 md:px-16 text-white overflow-hidden rounded-xl bg-[#1a1a1a]">

            {/* Curved Background Lines */}
            <div className="absolute inset-0 bg-lines opacity-60 pointer-events-none"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-12">

                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2">

                    {/* PORTFOLIO Label */}
                    <div className="inline-block bg-[#2d848d] text-white px-10 py-3 rounded-r-full text-3xl font-serif mb-8">
                        PORTFOLIO
                    </div>

                    {/* Subheading */}
                    <h3 className="uppercase tracking-widest text-lg mb-3 text-gray-200">
                        Our Projects
                    </h3>

                    <p className="text-gray-300 leading-relaxed max-w-md mb-10">
                        Every space tells a story—these are the ones we’ve helped bring to life.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-12 mb-12">
                        <div>
                            <h2 className="text-5xl font-light">30+</h2>
                            <p className="text-gray-400 mt-1">Residential</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-light">10+</h2>
                            <p className="text-gray-400 mt-1">Commercial</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="flex items-center gap-3 bg-[#2d848d] px-6 py-3 rounded-full text-lg shadow-md hover:bg-[#236a72] transition">
                        Showcase Of Project
                        <span className="text-xl">→</span>
                    </button>
                </div>

                {/* RIGHT SIDE — IMAGE GRID */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                    <img src="/portfolio1.jpg" className="rounded-2xl w-full h-64 object-cover" />
                    <img src="/portfolio2.jpg" className="rounded-2xl w-full h-64 object-cover" />
                    <img src="/portfolio3.jpg" className="rounded-2xl w-full h-64 object-cover" />
                    <img src="/portfolio4.jpg" className="rounded-2xl w-full h-64 object-cover" />
                </div>
            </div>

            {/* CSS: Curved Background Lines */}
            <style>
                {`
                  .bg-lines {
                   background-image: url('/portfolio-lines.svg');
                   background-size: cover;
                   background-position: center;
                   background-repeat: no-repeat;
                   opacity: 0.18;  /* adjust brightness */
                }
                 `}
            </style>

        </section>
    );
}
