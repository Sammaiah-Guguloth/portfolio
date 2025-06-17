import React, { useState } from 'react'
import { myProjects } from '../constants'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const Projects = () => {
  const skills = Object.keys(myProjects)

  const [activeSkill, setActiveSkill] = useState(skills[0])
  const [projects, setProjects] = useState(myProjects[activeSkill])
  const [startIndex, setStartIndex] = useState(0)

  const handleSkillClick = (skill) => {
    setActiveSkill(skill)
    setProjects(myProjects[skill])
    setStartIndex(0) // reset to first 3 projects
  }

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 3, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 3, projects.length - 3))
  }

  const visibleProjects = projects.slice(startIndex, startIndex + 3)

  return (
    <section id='projects' className='c-space my-20 w-full flex flex-col' >
      <p className='head-text'>Projects</p>

      {/* Filter bar */}
      <div className='px-2 self-center max-w-fit flex flex-wrap gap-2 md:gap-5 mt-4 bg-[#1c1c21] rounded-3xl'>
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => handleSkillClick(skill)}
            className={`cursor-pointer px-4 py-2 rounded-full shadow-md transition-all duration-300 outline-none 
              ${
                skill === activeSkill
                  ? 'bg-gray-800 text-white'
                  : 'text-white hover:bg-[#29292f]'
              }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Project cards + navigation */}
      <div className='mt-10 relative'>
        <div className='flex items-center justify-between mb-6'>
          <button
            onClick={handlePrev}
            className='text-white text-2xl p-2 bg-[#1c1c21] rounded-full hover:bg-[#29292f]'
            disabled={startIndex === 0}
          >
            <AiOutlineLeft className='cursor-pointer' />
          </button>
          <button
            onClick={handleNext}
            className='text-white text-2xl p-2 bg-[#1c1c21] rounded-full hover:bg-[#29292f]'
            disabled={startIndex + 3 >= projects.length}
          >
            <AiOutlineRight className='cursor-pointer'/>
          </button>
        </div>

        {/* Visible Project Cards */}
        <div className='grid gap-10 md:grid-cols-3'>
          {visibleProjects.map(({ id, title, description, image, github, liveUrl }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareColor='#ffffff'
                className='bg-[#05060A] rounded-lg shadow-lg p-4 md:py-6 border-[#383B44] border-2'
              >
                <img
                  src={image}
                  alt={title}
                  className='w-full h-48 object-cover mb-4 '
                />
                <h3 className='text-xl font-semibold text-white'>{title}</h3>
                <p className='text-gray-400 text-sm mt-2 flex-grow'>{description}</p>
                <div className='flex justify-between items-center mt-4'>
                <a 
                    href={github} target='_blank' rel='noreferrer'
                    className='flex items-center gap-2  cursor-pointer text-white'
                    >
                        <p>Github</p>
                        <img src="/assets/github.svg" alt="github" 
                        className='w-5 h-5'
                        />
                    </a>

                  <a 
                    href={liveUrl} target='_blank' rel='noreferrer'
                    className='flex items-center gap-2  cursor-pointer text-white'
                    >
                        <p>Live Site</p>
                        <img src="/assets/arrow-up.png" alt="arrow" 
                        className='w-3 h-3'
                        />
                    </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
