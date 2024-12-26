import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import IconSnake from '@/components/IconSnake';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { ContactCard } from '@/components/contact-card';

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
      repeatType: "reverse" as const,
      repeatDelay: 5
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const spanVariants = {
  hidden: { 
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const timelineData = [
  {
    date: "2020",
    title: "Formation en Design Graphique",
    description: "Baccalauréat en apprentissage spécialisé en graphisme, alliant théorie et pratique professionnelle pendant 2 ans",
    color: "purple"
  },
  {
    date: "2024",
    title: "Initiation au Développement Web",
    description: "Formation d'initiation au code, découverte de la programmation et première passerelle entre le design et le développement",
    color: "blue"
  },
  {
    date: "2024",
    title: "Formation Développeur Web",
    description: "Formation intensive de 16 mois en alternance, combinant périodes en entreprise et formation approfondie au développement web",
    color: "orange"
  },
  {
    date: "2024",
    title: "Expérience Professionnelle",
    description: "Missions en intérim comme développeur, mise en pratique des compétences acquises dans un contexte professionnel",
    color: "green"
  }
];

const TimelineItem: React.FC<{
  item: typeof timelineData[0];
  index: number;
}> = ({ item, index }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? -200 : 200, 0, isEven ? 200 : -200]
  );

  const z = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-20, 0, -20]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? 25 : -25, 0, isEven ? -25 : 25]
  );

  // Définition des couleurs en fonction de item.color
  const getColorValue = (color: string) => {
    const colorMap: { [key: string]: { primary: string; secondary: string; text: string } } = {
      purple: { primary: '#8B5CF6', secondary: '#7C3AED', text: '#DDD6FE' },
      orange: { primary: '#F97316', secondary: '#EA580C', text: '#FFEDD5' },
      green: { primary: '#22C55E', secondary: '#16A34A', text: '#DCFCE7' },
      blue: { primary: '#3B82F6', secondary: '#2563EB', text: '#DBEAFE' },
      pink: { primary: '#EC4899', secondary: '#DB2777', text: '#FCE7F3' },
      yellow: { primary: '#EAB308', secondary: '#CA8A04', text: '#FEF9C3' },
      indigo: { primary: '#6366F1', secondary: '#4F46E5', text: '#E0E7FF' },
      red: { primary: '#EF4444', secondary: '#DC2626', text: '#FEE2E2' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorValue(item.color);

  return (
    <motion.div 
      className="flex justify-center mb-16 sm:mb-24 md:mb-32 perspective-1000 w-full"
      style={{
        opacity,
        x,
        rotateY,
        z,
        transformPerspective: 1000,
      }}
    >
      <div 
        className={`relative w-[95%] sm:w-[90%] md:max-w-2xl p-4 sm:p-6 md:p-10 rounded-2xl backdrop-blur-lg transition-all duration-500 group hover:shadow-2xl ${isEven ? 'ml-auto' : 'mr-auto'}`}
        style={{
          background: `linear-gradient(135deg, ${colors.primary}10, rgba(17, 17, 17, 0.3))`,
          borderWidth: '1px',
          borderColor: `${colors.primary}33`,
          '--tw-shadow-color': `${colors.primary}33`
        } as React.CSSProperties}
      >
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, ${colors.primary}0A, ${colors.primary}1A, transparent)`
          }}
        />
        
        {/* Date badge */}
        <div 
          className="absolute -top-4 left-10 px-4 py-1 rounded-full backdrop-blur-sm"
          style={{
            background: `${colors.primary}33`,
            borderWidth: '1px',
            borderColor: `${colors.primary}4D`
          }}
        >
          <p style={{ color: colors.text }}>{item.date}</p>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div 
            className="w-20 h-1 rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
            }}
          />
          <h3 
            className="text-3xl font-bold mb-6 text-white transition-colors duration-300"
            style={{
              ['--tw-text-opacity' as string]: '1',
              color: 'white',
              ['&:hover' as string]: {
                color: colors.text
              }
            }}
          >
            {item.title}
          </h3>
          <p 
            className="text-lg leading-relaxed"
            style={{ color: colors.text }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Timeline central line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const { scrollY } = useScroll();
  const { } = useScroll();

  // Effets de parallaxe
  const titleY = useTransform(scrollY, [0, 500], [0, -100]);
  const iconsY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityTitle = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowContact = window.scrollY > 100;
      setShowContact(shouldShowContact);
      
      // Masquer la flèche dès que l'utilisateur commence à scroller
      setShowScrollArrow(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    // Animation fluide vers la section des projets
    const nextSection = document.querySelector('.projects-section');

    if (nextSection) {
      const start = window.pageYOffset;
      const offset = 50;
      const target = nextSection.getBoundingClientRect().top + window.pageYOffset - offset;
      const duration = 2500;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeInOutQuart = (t: number) =>
          t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

        window.scrollTo(0, start + (target - start) * easeInOutQuart(progress));

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
          <motion.div 
            className="text-center mx-auto max-w-4xl mt-12 sm:mt-16 relative z-10"
            style={{ y: titleY, opacity: opacityTitle }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-istok mb-2 sm:mb-4"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={spanVariants}>Arthur, </motion.span>
              <motion.span variants={spanVariants} className="underline">Développeur web créatif</motion.span>
              <motion.span variants={spanVariants}>,</motion.span>
            </motion.h1>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              à la croisée du <motion.span variants={spanVariants} className="text-orange-500">design</motion.span> et de la
            </motion.h2>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={spanVariants} className="text-blue-500">programmation</motion.span> . . .
            </motion.h2>
          </motion.div>

          <motion.div 
            className="absolute inset-0 w-[200vw] left-[-50vw] sm:w-[200vw] sm:left-[-50vw] md:w-[150vw] md:left-[-25vw]"
            style={{ y: iconsY }}
          >
            <div className="w-full h-full relative">
              <IconSnake icons={icons} />
            </div>
          </motion.div>

          <motion.div 
            className="mt-auto relative z-10"
            style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          >
            <p className="text-center text-lg sm:text-xl mb-8 px-4">
              Découvrez comment mes compétences peuvent booster votre projet web
            </p>
            <div className="flex justify-center mb-8 h-[40px]">
              <motion.button
                onClick={scrollToNext}
                className="animate-bounce p-2 hover:text-gray-400 transition-colors"
                aria-label="Scroll to next section"
                animate={{
                  opacity: showScrollArrow ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={24} className="sm:w-8 sm:h-8" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <TimelineSection />

        {/* Section des projets - Titre */}
        <section className="projects-section mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2 sm:px-4 md:px-6 lg:px-8 text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed sm:leading-relaxed"
            style={{ 
              y: useTransform(scrollY, [300, 600], [50, 0]),
              opacity: useTransform(scrollY, [300, 600], [0, 1])
            }}
          >
            Découvrez quelques-uns de mes <span className="relative inline-block">
              projets
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] md:h-[4px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"
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
            </span> les plus récents et les plus représentatifs de mes <span className="relative inline-block">
              compétences
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[1.5px] md:h-[2px] bg-blue-500"
                initial="initial"
                animate="animate"
                variants={underlineVariants}
              />
            </span>
          </motion.h2>
        </section>
      </div>

      {/* Carousel en dehors de la div avec max-width */}
      <div className="w-full bg-background">
        <motion.div 
          className="w-full overflow-hidden pb-8 sm:pb-12 md:pb-16 lg:pb-24"
          style={{ 
            y: useTransform(scrollY, [600, 1000], [50, 0]),
            opacity: useTransform(scrollY, [600, 1000], [0, 1])
          }}
        >
          <ProjectCarousel projects={projects} />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
