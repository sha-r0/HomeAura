"use client";
import { useState } from "react";

const expertiseData = [
  {
    title: "RESIDENTIAL (HOME, FLAT, VILLA)",
    image: "/residential.jpg",
    description:
      "We design beautiful and functional homes, flats, and villas that reflect your lifestyle. From modern minimalism to luxury comfort, our residential designs create spaces where you truly feel at home.",
  },
  {
    title: "COMMERCIAL (OFFICE, RESTAURANT, RETAIL SPACE)",
    image: "/commercial.jpg",
    description:
      "We create workplaces and commercial interiors that enhance productivity, improve customer engagement, and elevate brand identity.",
  },
  {
    title: "LUXURY / PREMIUM INTERIORS",
    image: "/luxury.jpg",
    description:
      "Premium design solutions that blend modern elegance with world-class finishes, crafted for clients seeking distinctive and refined interiors.",
  },
  {
    title: "FULL PROJECT (CONCEPT → DESIGN → EXECUTION)",
    image: "/fullproject.jpg",
    description:
      "Complete turnkey project services — from concept creation and mood boards to full execution and on-site supervision.",
  },
];

export default function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">

      {/* Section Title */}
      <h2 className="text-center text-[#0b3b44] tracking-widest uppercase mb-14">
        Areas of Expertise
      </h2>

      {/* Loop Items */}
      <div className="space-y-10">
        {expertiseData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">

            {/* Header Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-xl md:text-2xl text-gray-700">
                {item.title}
              </h3>

              <span className="text-2xl text-gray-500">
                {openIndex === index ? "✕" : "+"}
              </span>
            </div>

            {/* Expanded Content */}
            {openIndex === index && (
              <div className="mt-6 flex flex-col md:flex-row gap-6 animate-fadeIn">

                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={item.image}
                    alt="Interior"
                    className="rounded-lg w-full h-[180px] object-cover grayscale"
                  />
                </div>

                {/* Description */}
                <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fade animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
}
