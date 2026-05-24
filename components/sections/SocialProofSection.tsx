"use client";

import { motion } from "framer-motion";

export default function SocialProofSection() {
  const brands = ["NORDIC", "LUMINA", "VERTEX", "CORE", "ELEVATE"];

  // Duplicate for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 border-y border-white/5 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8 font-bold">
          Trusted by high-growth global retailers
        </p>
        
        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden relative w-full opacity-40 grayscale pointer-events-none select-none">
          {/* Gradient Masks for smooth fading at edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

          <motion.div
            className="flex items-center gap-12 md:gap-24 flex-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className={`whitespace-nowrap ${
                  index % 3 === 0 ? "text-2xl font-black font-sans tracking-tighter" :
                  index % 3 === 1 ? "text-2xl font-cabinet tracking-widest uppercase" :
                  "text-2xl italic font-serif"
                }`}
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
