import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";

import { myWork } from "../constants";

const MyWork = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectsCount = myWork.length;
  const currentProject = myWork[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Panel - Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          className="relative flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-blue-200 rounded-xl bg-[#121212]"
        >
          {/* Spotlight Image */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Logo */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg z-10"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          {/* Project Text Info */}
          <div className="flex flex-col gap-5 text-white my-5 z-10">
            <p className="text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tags and Link */}
          <div className="flex items-center justify-between flex-wrap gap-5 z-10">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-7 z-10">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </motion.div>

        {/* Right Panel - 3D Canvas */}
        {/* Will be replaced with gif or video soon */}
        {/* Right Panel - Preview (GIF or Video) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
          className="w-full h-full flex justify-center items-center bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full h-[500px] max-w-2xl rounded-lg overflow-hidden border border-gray-700">
            <video
              src={currentProject.texture}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffffff22] to-transparent pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
