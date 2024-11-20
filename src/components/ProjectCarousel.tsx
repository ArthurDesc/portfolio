import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Project } from '@/data/carouselData'

interface CarouselProps {
  projects: Project[]
}

export const ProjectCarousel = ({ projects }: CarouselProps) => {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex w-full"
        animate={{
          x: [-100 * projects.length + '%', 0]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full"
          >
            <div className="flex items-center justify-center gap-4 w-full">
              <img 
                src={project.desktopImage} 
                alt={`${project.name} Desktop`}
                className="w-[40%] max-w-[600px] object-cover"
              />
              <img 
                src={project.mobileImage} 
                alt={`${project.name} Mobile`}
                className="w-[15%] max-w-[200px] object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}