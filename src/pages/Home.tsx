import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import IconSnake from '@/components/IconSnake';
import { ContactCard } from '@/components/contact-card';
import { useTranslation } from 'react-i18next';

// Import des icônes
import htmlIcon from '@/assets/icons/html.png';
import cssIcon from '@/assets/icons/css.png';
import phpIcon from '@/assets/icons/php.png';
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
    titleKey: "graphic_design",
    descriptionKey: "graphic_design_desc",
    color: "purple"
  },
  {
    date: "2024",
    titleKey: "web_init",
    descriptionKey: "web_init_desc",
    color: "blue"
  },
  {
    date: "2024",
    titleKey: "web_dev",
    descriptionKey: "web_dev_desc",
    color: "orange"
  },
  {
    date: "2024",
    titleKey: "pro_exp",
    descriptionKey: "pro_exp_desc",
    color: "green"
  }
];

const TimelineItem: React.FC<{
  item: typeof timelineData[0];
  index: number;
}> = ({ item, index }) => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  
  // Animation adaptative selon la taille d'écran
  const isMobile = window.innerWidth < 640;
  
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile 
      ? [isEven ? -50 : 50, 0, isEven ? 50 : -50]
      : [isEven ? -200 : 200, 0, isEven ? 200 : -200]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Rotation uniquement sur desktop
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [isEven ? -10 : 10, 0, isEven ? 10 : -10]
  );

  // Définition des couleurs en fonction de item.color
  const getColorValue = (color: string) => {
    const colorMap: { [key: string]: { primary: string; secondary: string; text: string } } = {
      purple: { primary: '#8B5CF6', secondary: '#7C3AED', text: '#DDD6FE' },
      orange: { primary: '#F97316', secondary: '#EA580C', text: '#FFEDD5' },
      green: { primary: '#22C55E', secondary: '#16A34A', text: '#DCFCE7' },
      blue: { primary: '#3B82F6', secondary: '#2563EB', text: '#DBEAFE' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorValue(item.color);

  return (
    <motion.div 
      className="flex justify-center mb-12 sm:mb-16 md:mb-24 w-full"
      style={{
        opacity,
        x,
        rotate,
        transformPerspective: isMobile ? undefined : 1000
      }}
    >
      <div 
        className={`relative w-[85%] sm:w-[90%] md:max-w-2xl p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 group hover:shadow-2xl ${isEven ? 'ml-auto' : 'mr-auto'}`}
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
          className="absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8 px-3 sm:px-4 py-1 rounded-full backdrop-blur-sm"
          style={{
            background: `${colors.primary}33`,
            borderWidth: '1px',
            borderColor: `${colors.primary}4D`
          }}
        >
          <p className="text-sm sm:text-base" style={{ color: colors.text }}>{item.date}</p>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div 
            className="w-16 sm:w-20 h-1 rounded-full mb-4 sm:mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
            }}
          />
          <h3 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white transition-colors duration-300"
            style={{
              ['--tw-text-opacity' as string]: '1',
              color: 'white',
              ['&:hover' as string]: {
                color: colors.text
              }
            }}
          >
            {t(item.titleKey)}
          </h3>
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: colors.text }}
          >
            {t(item.descriptionKey)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 w-full overflow-hidden">
      {/* Timeline central line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
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
    jsIcon,
    nodeIcon,
    reactIcon
  ];

  return (
    <div className="min-h-screen text-white">
      <ContactCard isVisible={showContact} />
      
      {/* Hero Section */}
      <div className="h-screen relative flex flex-col justify-between overflow-hidden">
        <motion.div 
          className="text-center mx-auto max-w-4xl mt-24 sm:mt-28 md:mt-32 relative z-10"
          style={{ y: titleY, opacity: opacityTitle }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-istok mb-2 sm:mb-4"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={spanVariants}>{t('developer_title')}</motion.span>
            <motion.span variants={spanVariants} className="underline">{t('creative_dev')}</motion.span>
            <motion.span variants={spanVariants}>,</motion.span>
          </motion.h1>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {t('at_intersection')} <motion.span variants={spanVariants} className="text-orange-500">{t('design')}</motion.span> {t('and')}
          </motion.h2>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={spanVariants} className="text-blue-500">{t('programming')}</motion.span> . . .
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
          className="relative z-10 mb-8"
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
        >
          <p className="text-center text-lg sm:text-xl mb-8 px-4">
            {t('discover_skills')}
          </p>
          <div className="flex justify-center">
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

      {/* Content Sections */}
      <div className="relative">
        {/* Timeline Section */}
        <div className="w-full">
          <TimelineSection />

          {/* Section des projets - Titre */}
          <section className="projects-section mt-16 sm:mt-24 md:mt-32 max-w-[90%] sm:max-w-none mx-auto">
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2 sm:px-4 md:px-6 lg:px-8 text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed sm:leading-relaxed"
              style={{ 
                y: useTransform(scrollY, [300, 600], [50, 0]),
                opacity: useTransform(scrollY, [300, 600], [0, 1])
              }}
            >
              {t('discover_projects')} <span className="relative inline-block">
                {t('projects_word')}
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
              </span> {t('most_recent')} <span className="relative inline-block">
                {t('skills')}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[1.5px] md:h-[2px] bg-blue-500"
                  initial="initial"
                  animate="animate"
                  variants={underlineVariants}
                />
              </span>
            </motion.h2>
          </section>

          {/* Carousel */}
          <div className="w-full bg-background mt-8 sm:mt-12 md:mt-16">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
