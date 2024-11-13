import { motion, Variants } from 'framer-motion';
import React from 'react';

interface IconProps {
  icons: string[];
}

const basicSnakeVariants: Variants = {
  initial: { x: "100vw", y: "50vh" },
  animate: (index) => ({
    x: ["150vw", "100vw", "50vw", "0vw", "-50vw", "-100vw", "-150vw"],
    y: ["50vh", "20vh", "80vh", "20vh", "80vh", "20vh", "50vh"],
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear",
      delay: index * 0.8,
      times: [0, 0.16, 0.33, 0.5, 0.67, 0.84, 1],
    }
  })
};

const IconSnake: React.FC<IconProps> = ({ icons }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={basicSnakeVariants}
            initial="initial"
            animate="animate"
            style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              width: 'auto',
              height: 'auto',
            }}
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