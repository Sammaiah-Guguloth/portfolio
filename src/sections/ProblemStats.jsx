import React from "react";
import { motion } from "framer-motion";

const ProblemStats = ({ leetcode = 300, gfg = 330, maxValue = 700 }) => {
  const circleRadius = 70;
  const circumference = 2 * Math.PI * circleRadius;

  const calcProgress = (solved) => {
    const rawProgress = solved / maxValue;
    return rawProgress < 0.5 ? 0.5 : Math.min(rawProgress, 1);
  };

  const leetcodeProgress = calcProgress(leetcode);
  const gfgProgress = calcProgress(gfg);

  const leetcodeOffset = circumference * (1 - leetcodeProgress);
  const gfgOffset = circumference * (1 - gfgProgress);

  // Hover rotation for circles
  const circleHover = {
    rotate: 90,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  // Number scale on hover
  const numberVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.3, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Animate each circle rising from bottom when in view
  const riseFromBottomVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-[#121212] p-8 rounded-xl max-w-4xl mx-auto my-20 text-white">
      <p className="head-text mb-10 text-3xl font-bold">Problems Solved</p>
      <div className="flex flex-wrap justify-center gap-12">
        {/* LeetCode Circle */}
        <motion.a
          href="https://leetcode.com/u/Sammaiah1919/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer"
          variants={riseFromBottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          whileHover={circleHover}
          style={{ originX: "50%", originY: "50%" }}
        >
          <svg
            width="180"
            height="180"
            className="transform -rotate-90"
            aria-label="LeetCode problems solved progress"
          >
            <circle
              cx="90"
              cy="90"
              r={circleRadius}
              stroke="#444"
              strokeWidth="15"
              fill="none"
            />
            <motion.circle
              cx="90"
              cy="90"
              r={circleRadius}
              stroke="#FFA116"
              strokeWidth="15"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={leetcodeOffset}
              strokeLinecap="round"
            />
            <motion.text
              x="90"
              y="85"
              textAnchor="middle"
              fontSize="28"
              fill="#FFA116"
              fontWeight="bold"
              variants={numberVariants}
              initial="initial"
              whileHover="hover"
            >
              {leetcode + "+"}
            </motion.text>
            <text
              x="90"
              y="115"
              textAnchor="middle"
              fontSize="18"
              fill="#FFA116"
              fontWeight="600"
            >
              LeetCode
            </text>
          </svg>
          <p className="mt-4 max-w-xs text-center text-gray-400">
            Kept pushing! By solving real challenges on LeetCode.
          </p>
        </motion.a>

        {/* GFG Circle */}
        <motion.a
          href="https://www.geeksforgeeks.org/user/gugulothsh6ps/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer"
          variants={riseFromBottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          whileHover={circleHover}
          style={{ originX: "50%", originY: "50%" }}
        >
          <svg
            width="180"
            height="180"
            className="transform -rotate-90"
            aria-label="GeeksforGeeks problems solved progress"
          >
            <circle
              cx="90"
              cy="90"
              r={circleRadius}
              stroke="#444"
              strokeWidth="15"
              fill="none"
            />
            <motion.circle
              cx="90"
              cy="90"
              r={circleRadius}
              stroke="#0F9D58"
              strokeWidth="15"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={gfgOffset}
              strokeLinecap="round"
            />
            <motion.text
              x="90"
              y="85"
              textAnchor="middle"
              fontSize="28"
              fill="#0F9D58"
              fontWeight="bold"
              variants={numberVariants}
              initial="initial"
              whileHover="hover"
            >
              {gfg + "+"}
            </motion.text>
            <text
              x="90"
              y="115"
              textAnchor="middle"
              fontSize="18"
              fill="#0F9D58"
              fontWeight="600"
            >
              GeeksforGeeks
            </text>
          </svg>
          <p className="mt-4 max-w-xs text-center text-gray-400">
            Strong grasp of fundamentals via GeeksforGeeks problems.
          </p>
        </motion.a>
      </div>
    </section>
  );
};

export default ProblemStats;
