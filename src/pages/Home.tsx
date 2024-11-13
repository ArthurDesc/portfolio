import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react'; // Add ArrowRight import
import IconSnake from '@/components/IconSnake';

// Import des icônes
import htmlIcon from '@/assets/icons/html.png';
import cssIcon from '@/assets/icons/css.png';
import phpIcon from '@/assets/icons/php.png';
import sqlIcon from '@/assets/icons/sql.png';
import jsIcon from '@/assets/icons/js.png';
import nodeIcon from '@/assets/icons/node.png';
import reactIcon from '@/assets/icons/react.png';

const Home: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
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
        <div className="absolute inset-0 w-[200vw] left-[-50vw]">
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
      <div className="min-h-screen flex items-center py-8">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
                Découvrez quelques-uns de mes projets les
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
                plus récents et les plus représentatifs de
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                mes compétences
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 max-w-xl relative w-full lg:w-auto">
              {/* Top square */}
              <div className="ml-0 sm:ml-16 w-full sm:w-auto">
                <a href="#" className="block">
                  <div className="w-full sm:w-48 h-48 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Tall rectangle */}
              <div className="ml-0 sm:ml-4 w-full sm:w-auto">
                <a href="#" className="block">
                  <div className="w-full sm:w-48 h-80 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Wide rectangle */}
              <div className="w-full sm:absolute sm:bottom-0 sm:left-0">
                <a href="#" className="block">
                  <div className="w-full sm:w-64 h-40 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Arrow button */}
              <button className="w-full sm:w-auto sm:absolute sm:bottom-0 sm:right-0 bg-orange-500 p-4 rounded-3xl hover:bg-orange-600 transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
