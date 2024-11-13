import { motion, Variants } from 'framer-motion';
import React from 'react';

interface IconProps {
  icons: string[];
}

const basicSnakeVariants: Variants = {
  initial: { x: "200vw", y: "50vh" },
  animate: (index) => ({
    x: ["200vw", "150vw", "100vw", "50vw", "0vw", "-50vw", "-100vw", "-150vw", "-200vw"],
    y: [
      "50vh",    // Départ au milieu
      "15vh",    // Moins haut
      "75vh",    // Moins bas
      "20vh",    // Moins haut
      "70vh",    // Moins bas
      "15vh",    // Moins haut
      "75vh",    // Moins bas
      "20vh",    // Moins haut
      "50vh",    // Retour au milieu
    ],
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear",
      delay: index * 0.8,
      times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
      immediateStart: true,
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