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
  initial: { x: "200vw", y: "50vh" },
  animate: (index) => ({
    x: [
      "200vw", "180vw", "160vw", "140vw", "120vw", "100vw", "80vw", "60vw", "40vw", "20vw",
      "0vw", "-20vw", "-40vw", "-60vw", "-80vw", "-100vw", "-120vw", "-140vw", "-160vw", "-180vw", "-200vw"
    ],
    y: [
      "50vh",  
      "40vh",  // Réduire l'amplitude verticale sur mobile
      "30vh",
      "25vh",
      "30vh",
      "40vh",
      "45vh",
      "50vh",
      "45vh",
      "40vh",
      "30vh",
      "25vh",
      "30vh",
      "40vh",
      "45vh",
      "50vh",
      "45vh",
      "40vh",
      "30vh",
      "40vh",
      "50vh",
    ],
    transition: {
      duration: window.innerWidth < 768 ? 15 : 20, // Durée plus courte sur mobile
      ease: "linear",
      delay: getIconDelay(index, window.innerWidth),
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    }
  })
};

const leftSnakeVariants: Variants = {
  initial: { x: "-200vw", y: "50vh" },
  animate: (index) => ({
    x: [
      "-200vw", "-180vw", "-160vw", "-140vw", "-120vw", "-100vw", "-80vw", "-60vw", "-40vw", "-20vw",
      "0vw", "20vw", "40vw", "60vw", "80vw", "100vw", "120vw", "140vw", "160vw", "180vw", "200vw"
    ],
    y: [
      "50vh",  // Départ centre
      "35vh",  // Monte progressivement
      "20vh",  // Continue de monter
      "15vh",  // Presque au plus haut
      "20vh",  // Redescend légèrement
      "35vh",  // Continue de descendre
      "45vh",  // Descend encore
      "50vh",  // Point bas
      "45vh",  // Remonte légèrement
      "35vh",  // Continue de monter
      "20vh",  // Monte encore
      "15vh",  // Point haut
      "20vh",  // Redescend légèrement
      "35vh",  // Continue de descendre
      "45vh",  // Descend encore
      "50vh",  // Point bas
      "45vh",  // Remonte légèrement
      "35vh",  // Continue de monter
      "20vh",  // Monte encore
      "35vh",  // Redescend doucement
      "50vh",  // Retour centre
    ],
    transition: {
      duration: window.innerWidth < 768 ? 15 : 20, // Durée plus courte sur mobile
      ease: "linear",
      delay: getIconDelay(index, window.innerWidth),
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
      immediateStart: true,
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
      rightControls.set("initial");
      rightControls.start("animate");

      // Timer plus court sur mobile
      const baseTimer = windowWidth < 768 ? 12000 : 15000;

      await new Promise(resolve => setTimeout(resolve, baseTimer / 3));

      while (true) {
        leftControls.set("initial");
        leftControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, baseTimer));

        rightControls.set("initial");
        rightControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, baseTimer / 2));
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