import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaBookOpen,
  FaSortAmountDown,
  FaCube,
  FaSearch,
  FaFont,
  FaLink,
  FaRecycle,
  FaBolt,
  FaStackOverflow,
  FaArrowsAltH,
  FaMountain,
  FaFistRaised,
  FaTree,
  FaProjectDiagram,
  FaNetworkWired,
  FaProjectDiagram as FaDynamic,
  FaTree as FaTries,
  FaFont as FaStrings,
} from "react-icons/fa";

const timelineData = [
  {
    title: "Learned the Basics",
    description:
      "Mastered loops, pattern printing, conditional statements, and foundational problem solving.",
    icon: <FaBookOpen />,
  },
  {
    title: "Learned Important Sorting Techniques",
    description:
      "Studied bubble, selection, insertion, merge, and quick sort algorithms.",
    icon: <FaSortAmountDown />,
  },
  {
    title: "Solved Problems on Arrays",
    description:
      "Practiced array manipulation, searching, and problem solving.",
    icon: <FaCube />,
  },
  {
    title: "Mastered Binary Search",
    description:
      "Implemented binary search on 1D and 2D arrays and explored search space techniques.",
    icon: <FaSearch />,
  },
  {
    title: "Worked on Strings",
    description: "Covered string manipulation and common algorithms.",
    icon: <FaFont />,
  },
  {
    title: "Learned Linked Lists",
    description:
      "Implemented single and double linked lists, practiced traversal and modification.",
    icon: <FaLink />,
  },
  {
    title: "Understood Recursion",
    description: "Solved pattern problems and recursion basics.",
    icon: <FaRecycle />,
  },
  {
    title: "Studied Bit Manipulation",
    description: "Learned bitwise operations and related problems.",
    icon: <FaBolt />,
  },
  {
    title: "Learned Stacks and Queues",
    description:
      "Implemented stack and queue data structures and practiced related problems.",
    icon: <FaStackOverflow />,
  },
  {
    title: "Practiced Sliding Window & Two Pointers",
    description: "Solved combined problems using these techniques.",
    icon: <FaArrowsAltH />,
  },
  {
    title: "Learned Heaps",
    description: "Understood heap data structures and applications.",
    icon: <FaMountain />,
  },
  {
    title: "Studied Greedy Algorithms",
    description: "Applied greedy techniques to problem solving.",
    icon: <FaFistRaised />,
  },
  {
    title: "Learned Binary Trees",
    description: "Practiced tree traversals and binary tree problems.",
    icon: <FaTree />,
  },
  {
    title: "Understood Binary Search Trees",
    description: "Explored BST properties and related problems.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Studied Graphs",
    description: "Covered graph concepts, traversal, and problems.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Learned Dynamic Programming",
    description: "Solved pattern problems and optimized recursive solutions.",
    icon: <FaDynamic />,
  },
  {
    title: "Explored Tries",
    description: "Implemented trie data structure and problems.",
    icon: <FaTries />,
  },
  {
    title: "Worked on Advanced Strings",
    description: "Covered advanced string algorithms and challenges.",
    icon: <FaStrings />,
  },
];

// Define a palette of colors
const colors = [
  "#0ea5e9",
  "#f97316",
  "#22c55e",
  "#eab308",
  "#ec4899",
  "#3b82f6",
  "#a855f7",
  "#f43f5e",
  "#10b981",
  "#6366f1",
  "#f59e0b",
  "#14b8a6",
  "#facc15",
  "#7c3aed",
  "#d946ef",
  "#22d3ee",
  "#f87171",
  "#4ade80",
];

const DSATimeline = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <section
      className="c-space my-20 w-full flex flex-col items-center"
      id="dsa-timeline"
    >
      <p className="head-text mb-6 text-3xl font-bold text-center">
        My DSA Learning Journey
      </p>

      <button
        onClick={() => setShowTimeline((prev) => !prev)}
        className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:scale-105 transition-transform mb-10 shadow-lg  cursor-pointer"
      >
        {showTimeline ? "Hide My Journey" : "Explore My Journey"}
      </button>

      {showTimeline && (
        <VerticalTimeline>
          {timelineData.map(({ title, description, icon }, idx) => {
            const color = colors[idx % colors.length];
            return (
              <VerticalTimelineElement
                key={idx}
                contentStyle={{
                  background: "#1c1c21",
                  color: "#fff",
                  boxShadow: `0 0 15px ${color}`,
                  borderLeft: `4px solid ${color}`,
                }}
                contentArrowStyle={{ borderRight: `7px solid ${color}` }}
                date={`${idx + 1}`}
                iconStyle={{ background: color, color: "#fff" }}
                icon={icon}
                position={idx % 2 === 0 ? "left" : "right"}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-gray-300">{description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
    </section>
  );
};

export default DSATimeline;
