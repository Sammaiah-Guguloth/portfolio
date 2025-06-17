import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants";

const TechSlider = () => {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden bg-[#0b0b0b] mt-2 rounded-2xl px-6 py-10 shadow-xl relative">
      <div className="animate-slider flex whitespace-nowrap gap-16 will-change-transform">
        {duplicatedStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-12"
          >
            <motion.img
              src={tech.icon}
              alt={tech.name}
              className="w-30 h-30 md:w-40 md:h-40 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (index % techStack.length) * 0.1, // creates a wave effect
              }}
            />
            <p className="text-white text-lg mt-5 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
