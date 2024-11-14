import { motion, Variants, useAnimationControls } from 'framer-motion';
import React, { useEffect } from 'react';

interface IconProps {
  icons: string[];
}

const basicSnakeVariants: Variants = {
  initial: { x: "200vw", y: "50vh" },
  animate: (index) => ({
    x: [
      "200vw", "180vw", "160vw", "140vw", "120vw", "100vw", "80vw", "60vw", "40vw", "20vw",
      "0vw", "-20vw", "-40vw", "-60vw", "-80vw", "-100vw", "-120vw", "-140vw", "-160vw", "-180vw", "-200vw"
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
      duration: 20,
      ease: "linear",
      delay: index * 0.7,
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
      immediateStart: true,
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
      duration: 20,
      ease: "linear",
      delay: index * 0.7,
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
      immediateStart: true,
    }
  })
};

const IconSnake: React.FC<IconProps> = ({ icons }) => {
  const rightControls = useAnimationControls();
  const leftControls = useAnimationControls();

  useEffect(() => {
    const animateSequence = async () => {
      rightControls.set("initial");
      rightControls.start("animate");

      await new Promise(resolve => setTimeout(resolve, 5000));

      while (true) {
        leftControls.set("initial");
        leftControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, 15000));

        rightControls.set("initial");
        rightControls.start("animate");
        
        await new Promise(resolve => setTimeout(resolve, 8000));
      }
    };

    animateSequence();

    return () => {
      rightControls.stop();
      leftControls.stop();
    };
  }, [rightControls, leftControls]);

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