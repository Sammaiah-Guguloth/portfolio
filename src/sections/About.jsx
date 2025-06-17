import React, { useState } from "react";
import Button from "../components/Button";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gugulothsammaiah5@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1 */}
        <motion.div
          className="col-span-1 xl:row-span-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Sammaiah</p>
              <p className="grid-subtext">
                CSE undergrad at RGUKT Basar, passionate about full-stack web
                development and Data Structures & Algorithms. I’ve built several
                real-world projects using the MERN stack.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="col-span-1 xl:row-span-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="grid-container">
            <img
              src="/assets/developer.jpg"
              alt="grid-2"
              className="w-full rounded-xl opacity-65 sm:[276px] h-fit object-contain"
            />
            <div className="my-auto">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Proficient in the MERN stack, Tailwind CSS and tools like Redux
                Toolkit, Razorpay, JWT, Framer Motion, GSAP, Three.js, and React
                Three Fiber.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3 (Globe) */}
        <motion.div
          className="col-span-1 xl:row-span-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 18.8819968,
                    lng: 77.9208459,
                    text: "Rgukt Basar  Nirmal",
                    color: "white",
                    size: 15,
                  },
                  {
                    lat: 17.8928444,
                    lng: 79.1667774,
                    text: "Narmetta  Jangaon",
                    color: "#1e1e1e",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Jangaon, Telangana and open to remote and
                onsite work worldwide.
              </p>

              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="xl:col-span-2 xl:row-span-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.6 }}
        >
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 5 (Contact) */}
        <motion.div
          className="xl:col-span-1 xl:row-span-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.8 }}
        >
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white transition-all">
                  gugulothsammaiah5@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
