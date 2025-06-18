import React from "react";

import Button from "../components/Button";
import { motion } from "framer-motion";
import TechSlider from "../components/TechSlider";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-8">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 1 }}
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"
        >
          Hi, I'm Sammaiah <span className="waving-hand">👋</span>
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 1.2 }}
          className="hero_tag text-gray_gradient"
        >
          From DSA to Deployment
        </motion.p>

        <div className="w-full h-full inset-0">
          <TechSlider />
        </div>

        <div className="w-full mt-9 z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
