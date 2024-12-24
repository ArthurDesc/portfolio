import { motion, Variants, useAnimationControls } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface IconProps {
  icons: string[];
}

// Créer une fonction pour obtenir le délai en fonction de la taille d'écran
const getIconDelay = (index: number, windowWidth: number) => {
  if (windowWidth < 640) { // Mobile
    return index * 0.8; // Plus grand espacement pour mobile
  } else if (windowWidth < 768) { // Tablette
    return index * 1.3; // Espacement moyen pour tablette
  } else {
    return index * 0.7; // Espacement original pour desktop
  }
};

const basicSnakeVariants: Variants = {
  initial: (index) => ({
    x: `${120 + (index * 10)}vw`,  // Position initiale décalée pour chaque icône
    y: "50vh"
  }),
  animate: (index) => ({
    x: [
      `${120 + (index * 10)}vw`, "100vw", "80vw", "60vw", "40vw", "20vw",
      "0vw", "-20vw", "-40vw", "-60vw", "-80vw", "-100vw", "-120vw"
    ],
    y: [
      "50vh",  
      "40vh",
      "30vh",
      "25vh",
      "30vh",
      "40vh",
      "45vh",
      "50vh",
      "45vh",
      "40vh",
      "35vh",
      "40vh",
      "50vh",
    ],
    transition: {
      duration: window.innerWidth < 768 ? 10 : 15,
      ease: "linear",
      delay: getIconDelay(index, window.innerWidth) * 0.5, // Réduire le délai entre les icônes
      times: [0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 0.9, 1],
      repeatDelay: 0,
    }
  })
};

const leftSnakeVariants: Variants = {
  initial: (index) => ({
    x: `${-120 - (index * 10)}vw`,  // Position initiale décalée pour chaque icône
    y: "50vh"
  }),
  animate: (index) => ({
    x: [
      `${-120 - (index * 10)}vw`, "-100vw", "-80vw", "-60vw", "-40vw", "-20vw",
      "0vw", "20vw", "40vw", "60vw", "80vw", "100vw", "120vw"
    ],
    y: [
      "50vh",
      "35vh",
      "20vh",
      "15vh",
      "20vh",
      "35vh",
      "45vh",
      "50vh",
      "45vh",
      "35vh",
      "25vh",
      "35vh",
      "50vh",
    ],
    transition: {
      duration: window.innerWidth < 768 ? 10 : 15,
      ease: "linear",
      delay: getIconDelay(index, window.innerWidth) * 0.5,
      times: [0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 0.9, 1],
      repeatDelay: 0,
    }
  })
};

const IconSnake: React.FC<IconProps> = ({ icons }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rightControls = useAnimationControls();
  const leftControls = useAnimationControls();

  useEffect(() => {
    const animateSequence = async () => {
      rightControls.start("animate");

      const baseTimer = windowWidth < 768 ? 8000 : 12000;

      await new Promise(resolve => setTimeout(resolve, baseTimer * 0.4));

      while (true) {
        leftControls.set("initial");
        leftControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, baseTimer));

        rightControls.set("initial");
        rightControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, baseTimer));
      }
    };

    animateSequence();

    return () => {
      rightControls.stop();
      leftControls.stop();
    };
  }, [rightControls, leftControls, windowWidth]);

  const getAnimationValues = () => {
    if (windowWidth < 768) {
      return {
        duration: 15,
        delay: 0.4,
        amplitude: 30 // vh
      };
    }
    return {
      duration: 20,
      delay: 0.7,
      amplitude: 50 // vh
    };
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Premier serpent (de droite) */}
        {icons.map((icon, index) => (
          <motion.div
            key={`right-${index}`}
            custom={index}
            variants={basicSnakeVariants}
            initial="initial"
            animate={rightControls}
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
        
        {/* Deuxième serpent (de gauche) */}
        {icons.map((icon, index) => (
          <motion.div
            key={`left-${index}`}
            custom={index}
            variants={leftSnakeVariants}
            initial="initial"
            animate={leftControls}
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