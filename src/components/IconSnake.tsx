import { motion, Variants } from 'framer-motion';
import React from 'react';

interface IconProps {
  icons: string[];
}

const basicSnakeVariants: Variants = {
  initial: { x: "100vw", y: "50vh" },  // Position initiale au milieu
  animate: (index) => ({
    x: ["100vw", "75vw", "50vw", "25vw", "0vw", "-25vw", "-50vw", "-75vw", "-100vw"],
    y: ["50vh", "65vh", "45vh", "70vh", "50vh", "65vh", "45vh", "70vh", "50vh"],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: index * 0.3,
      times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    }
  })
};

const IconSnake: React.FC<IconProps> = ({ icons }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="flex gap-2 absolute">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={basicSnakeVariants}
            initial="initial"
            animate="animate"
            style={{ 
              originX: 0.5, 
              originY: 0.5,
              position: 'relative',
            }}
            className="relative"
          >
            <img 
              src={icon} 
              alt={`tech-${index}`} 
              className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconSnake;