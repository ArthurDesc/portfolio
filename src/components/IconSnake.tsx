import { motion, Variants, useAnimationControls } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';

interface IconProps {
  icons: string[];
}

type TechnologyType = 'html' | 'css' | 'php' | 'js' | 'node' | 'react';

// Mapping des couleurs pour chaque technologie
const iconColors: Record<TechnologyType, string> = {
  'html': 'rgba(255, 87, 34, 0.7)',    // Orange pour HTML
  'css': 'rgba(138, 43, 226, 0.8)',    // Violet pour CSS
  'php': 'rgba(79, 91, 147, 0.7)',     // Violet pour PHP
  'js': 'rgba(255, 214, 0, 0.7)',      // Jaune pour JavaScript
  'node': 'rgba(67, 160, 71, 0.7)',    // Vert pour Node
  'react': 'rgba(97, 218, 251, 0.7)',  // Bleu clair pour React
};

const technologies: TechnologyType[] = ['html', 'css', 'php', 'js', 'node', 'react'];

// Fonction pour obtenir la couleur de l'effet en fonction de l'index
const getIconGlow = (index: number): string => {
  const tech = technologies[index % technologies.length];
  return iconColors[tech];
};

// Créer une fonction pour obtenir le délai en fonction de la taille d'écran
const getIconDelay = (index: number, windowWidth: number) => {
  if (windowWidth < 640) { // Mobile
    return index * 1.2; // Plus grand espacement pour mobile
  } else if (windowWidth < 768) { // Tablette
    return index * 1.5; // Espacement moyen pour tablette
  } else {
    return index * 1.0; // Espacement original pour desktop
  }
};

// Animation de flottement
const floatVariants: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const IconSnake: React.FC<IconProps> = ({ icons }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rightControls = useAnimationControls();
  const leftControls = useAnimationControls();

  // Définir les variants à l'intérieur du composant pour avoir accès à icons et windowWidth
  const leftSnakeVariants: Variants = {
    initial: (index) => ({
      x: `${-120 - (index * 20)}vw`,
      y: "50vh"
    }),
    animate: (index) => ({
      x: [
        `${-120 - (index * 20)}vw`, "-100vw", "-80vw", "-60vw", "-40vw", "-20vw",
        "0vw", "20vw", "40vw", "60vw", "80vw", `${120 + ((icons.length - index) * 20)}vw`
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
        "50vh",
      ],
      transition: {
        duration: windowWidth < 768 ? 8 : 12,
        ease: "linear",
        delay: getIconDelay(index, windowWidth) * 0.7,
        times: [0, 0.09, 0.18, 0.27, 0.36, 0.45, 0.54, 0.63, 0.72, 0.81, 0.9, 1],
        repeatDelay: 0,
      }
    })
  };

  const basicSnakeVariants: Variants = {
    initial: (index) => ({
      x: `${120 + (index * 20)}vw`,
      y: "50vh"
    }),
    animate: (index) => ({
      x: [
        `${120 + (index * 20)}vw`, "100vw", "80vw", "60vw", "40vw", "20vw",
        "0vw", "-20vw", "-40vw", "-60vw", "-80vw", `${-120 - (index * 20)}vw`
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
        "50vh",
      ],
      transition: {
        duration: windowWidth < 768 ? 8 : 12,
        ease: "linear",
        delay: getIconDelay(index, windowWidth) * 0.7,
        times: [0, 0.09, 0.18, 0.27, 0.36, 0.45, 0.54, 0.63, 0.72, 0.81, 0.9, 1],
        repeatDelay: 0,
      }
    })
  };

  useEffect(() => {
    if (containerRef.current) {
      setIsReady(true);
    }
  }, [containerRef]);

  useEffect(() => {
    if (!isReady) return;
    let isMounted = true;
    const animateSequence = async () => {
      const baseTimer = windowWidth < 768 ? 6000 : 9000;
      const totalAnimationDuration = baseTimer + (icons.length * getIconDelay(1, windowWidth) * 700);
      const safetyDelay = 200;

      // Attendre 100ms pour garantir le montage
      await new Promise(resolve => setTimeout(resolve, 100));
      rightControls.start("animate");
      await new Promise(resolve => setTimeout(resolve, totalAnimationDuration * 0.6));

      while (isMounted) {
        if (isMounted) leftControls.set("initial");
        await new Promise(resolve => setTimeout(resolve, 50));
        if (isMounted) leftControls.start("animate");
        await new Promise(resolve => setTimeout(resolve, totalAnimationDuration * 0.85 + safetyDelay));

        if (isMounted) rightControls.set("initial");
        await new Promise(resolve => setTimeout(resolve, 50));
        if (isMounted) rightControls.start("animate");
        await new Promise(resolve => setTimeout(resolve, totalAnimationDuration * 0.85 + safetyDelay));
      }
    };

    animateSequence();

    return () => {
      isMounted = false;
      rightControls.stop();
      leftControls.stop();
    };
  }, [isReady, rightControls, leftControls, windowWidth, icons.length]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Premier serpent (de droite) */}
        {icons.map((icon, index) => (
          <motion.div
            key={`right-${index}`}
            custom={index}
            variants={basicSnakeVariants}
            initial="initial"
            animate={rightControls}
            whileHover={{ 
              scale: 1.2,
              rotate: 10,
              filter: "brightness(1.2)",
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              width: 'auto',
              height: 'auto',
            }}
          >
            <motion.div
              variants={floatVariants}
              animate={hoveredIndex === index ? "float" : ""}
            >
              <motion.div
                initial={false}
                animate={{
                  filter: hoveredIndex === index 
                    ? `drop-shadow(0 0 8px rgba(255,255,255,0.5)) drop-shadow(0 0 12px ${getIconGlow(index)})` 
                    : "drop-shadow(0 0 0px transparent)",
                }}
                transition={{ duration: 0.3 }}
                className="p-1"
              >
                <img 
                  src={icon} 
                  alt={`tech-${index}`} 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                  style={{
                    filter: hoveredIndex === index 
                      ? "brightness(1.2) contrast(1.1)" 
                      : "brightness(1) contrast(1)"
                  }}
                />
              </motion.div>
            </motion.div>
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
            whileHover={{ 
              scale: 1.2,
              rotate: -10,
              filter: "brightness(1.2)",
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            onHoverStart={() => setHoveredIndex(index + icons.length)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              width: 'auto',
              height: 'auto',
            }}
          >
            <motion.div
              variants={floatVariants}
              animate={hoveredIndex === index + icons.length ? "float" : ""}
            >
              <motion.div
                initial={false}
                animate={{
                  filter: hoveredIndex === index + icons.length 
                    ? `drop-shadow(0 0 8px rgba(255,255,255,0.5)) drop-shadow(0 0 12px ${getIconGlow(index)})` 
                    : "drop-shadow(0 0 0px transparent)",
                }}
                transition={{ duration: 0.3 }}
                className="p-1"
              >
                <img 
                  src={icon} 
                  alt={`tech-${index}`} 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                  style={{
                    filter: hoveredIndex === index + icons.length 
                      ? "brightness(1.2) contrast(1.1)" 
                      : "brightness(1) contrast(1)"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconSnake;