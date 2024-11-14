import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react'; // Add ArrowRight import
import IconSnake from '@/components/IconSnake';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// Import des icônes
import htmlIcon from '@/assets/icons/html.png';
import cssIcon from '@/assets/icons/css.png';
import phpIcon from '@/assets/icons/php.png';
import sqlIcon from '@/assets/icons/sql.png';
import jsIcon from '@/assets/icons/js.png';
import nodeIcon from '@/assets/icons/node.png';
import reactIcon from '@/assets/icons/react.png';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home: React.FC = () => {
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

  // Définition des layouts pour chaque breakpoint
  const layouts = {
    lg: [ // Desktop
      { i: 'square', x: 2.3, y: 1.9, w: 0.8, h: 1.6 },     // Carré en haut à gauche
      { i: 'wide', x: 2, y: 2, w: 1.4, h: 1.5 },       // Rectangle large en bas à gauche
      { i: 'tall', x: 4, y: 1, w: 0.7, h: 2 },       // Rectangle vertical à droite
      { i: 'button', x: 4, y: 9, w: 0.5, h: 0.5 }      // Bouton aligné avec le bas du rectangle vertical
    ],
    md: [ // Tablette
      { i: 'square', x: 0, y: 0, w: 1, h: 1 },
      { i: 'tall', x: 1, y: 0, w: 1, h: 2 },
      { i: 'wide', x: 0, y: 1, w: 2, h: 1 },
      { i: 'button', x: 2, y: 1, w: 1, h: 1 }
    ],
    sm: [ // Mobile
      { i: 'square', x: 0, y: 0, w: 1, h: 1 },
      { i: 'tall', x: 0, y: 1, w: 1, h: 2 },
      { i: 'wide', x: 0, y: 3, w: 1, h: 1 },
      { i: 'button', x: 0, y: 4, w: 1, h: 1 }
    ]
  };

  return (
    <div className="min-h-screen text-white p-4 sm:p-8 overflow-x-hidden">
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

      {/* Projects Section - Responsive layout */}
      <div className="min-h-screen projects-section">
        <div className="container mx-auto pt-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
              Découvrez quelques-uns de mes projets les
            </h2>
            <h2 className="text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
              plus récents et les plus représentatifs de
            </h2>
            <h2 className="text-xl sm:text-3xl lg:text-4xl">
              mes compétences
            </h2>
          </div>

          {/* Suppression des classes flex qui peuvent interférer */}
          <div className="grid-container">
            <ResponsiveGridLayout
              className="layout"
              layouts={layouts}
              breakpoints={{ lg: 1200, md: 996, sm: 768 }}
              cols={{ lg: 4, md: 3, sm: 1 }}
              rowHeight={120}
              width={800}
              margin={[10, 10]}
              containerPadding={[10, 10]}
              isDraggable={false}
              isResizable={false}
            >
              {/* Top square - Simplification des classes */}
              <div key="square" className="rounded-3xl bg-gray-300">
                <a href="#" className="block h-full" />
              </div>
              
              {/* Tall rectangle */}
              <div key="tall" className="rounded-3xl bg-gray-300">
                <a href="#" className="block h-full" />
              </div>
              
              {/* Wide rectangle */}
              <div key="wide" className="rounded-3xl bg-gray-300">
                <a href="#" className="block h-full" />
              </div>
              
              {/* Arrow button - Simplification des classes */}
              <div key="button" className="rounded-3xl bg-orange-500">
                <button className="h-full w-full px-4 flex items-center">
                  <span className="text-white font-bold text-lg sm:hidden">Voir tous les projets</span>
                  <span className="hidden sm:block text-white font-bold text-lg">Découvrir</span>
                  <ArrowRight size={24} className="text-white ml-auto" />
                </button>
              </div>
            </ResponsiveGridLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
