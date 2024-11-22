import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Add ArrowRight import
import IconSnake from '@/components/IconSnake';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { motion } from 'framer-motion';
import { ContactCard } from '@/components/contact-card';
import SplineViewer from '@/components/Spline';

// Import des icônes
import htmlIcon from '@/assets/icons/html.png';
import cssIcon from '@/assets/icons/css.png';
import phpIcon from '@/assets/icons/php.png';
import sqlIcon from '@/assets/icons/sql.png';
import jsIcon from '@/assets/icons/js.png';
import nodeIcon from '@/assets/icons/node.png';
import reactIcon from '@/assets/icons/react.png';

// Importer le composant ProjectCarousel
import { ProjectCarousel } from '@/components/ProjectCarousel';
// Importer les données des projets
import { projects } from '@/data/carouselData';

const underlineVariants = {
  initial: { width: 0 },
  animate: { 
    width: "100%",
    transition: { 
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 5
    }
  }
};

const Home: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShowContact(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    // Récupérer la hauteur de la section suivante
    const nextSection = document.querySelector('.projects-section');

    if (nextSection) {
      // Animation fluide personnalisée
      const start = window.pageYOffset;
      const target = nextSection.getBoundingClientRect().top + window.pageYOffset;
      const duration = 1000; // Durée de l'animation en ms
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Fonction d'easing pour une animation plus naturelle
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, start + (target - start) * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const icons = [
    htmlIcon,
    cssIcon,
    phpIcon,
    sqlIcon,
    jsIcon,
    nodeIcon,
    reactIcon
  ];


  return (
    <>
      <div className="min-h-screen text-white py-4 sm:py-8 overflow-x-hidden max-w-[90%] sm:max-w-none mx-auto">
        <ContactCard isVisible={showContact} />
        
        <div className="h-screen flex flex-col justify-between relative">
          {/* Header section - Ajout des classes de centrage */}
          <div className="text-center mx-auto max-w-4xl mt-12 sm:mt-16 relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-istok mb-2 sm:mb-4">
              Arthur, <span className="underline">Développeur web créatif</span>,
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
              à la croisée du <span className="text-orange-500">design</span> et de la
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
              <span className="text-blue-500">programmation</span> . . .
            </h2>
         
          </div>

          {/* Modification du conteneur des technologies */}
          <div className="absolute inset-0 w-[200vw] left-[-50vw] sm:w-[200vw] sm:left-[-50vw] md:w-[150vw] md:left-[-25vw]">
            <div className="w-full h-full relative">
              <IconSnake icons={icons} />
            </div>
          </div>

          {/* Texte et flèche */}
          <div className="mt-auto relative z-10">
            <p className="text-center text-lg sm:text-xl mb-8 px-4">
              Découvrez comment mes compétences polyvalentes peuvent booster votre projet web
            </p>
            <div className="flex justify-center mb-8">
              <button
                onClick={scrollToNext}
                className="animate-bounce p-2 hover:text-gray-400 transition-colors"
                aria-label="Scroll to next section"
              >
                <ChevronDown size={24} className="sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Section des projets - Titre */}
        <section className="projects-section mt-8 md:mt-18">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-24 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 text-center max-w-5xl mx-auto">
            Découvrez quelques-uns de mes <span className="relative">
              projets
              <motion.span 
                className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "right bottom",
                  filter: "url(#rough)",
                  animation: "gradient 30s linear infinite"
                }}
                initial="initial"
                animate="animate"
                variants={underlineVariants}
              />
            </span> les plus récents et les plus représentatifs de mes <span className="relative">
              compétences
              <motion.span 
                className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                initial="initial"
                animate="animate"
                variants={underlineVariants}
              />
            </span>
          </h2>
        </section>
      </div>

      {/* Carousel en dehors de la div avec max-width */}
      <div className="w-full overflow-hidden">
        <ProjectCarousel projects={projects} />
      </div>

      {/* Add Spline section */}
      <div className="w-full min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-istok">
            Explorez mon univers créatif en 3D
          </h2>
          <div className="w-full h-[600px] relative bg-background mb-12">
            <SplineViewer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
