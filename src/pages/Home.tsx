import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react'; // Add ArrowRight import

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

  return (
    <div className="min-h-screen text-white p-8">
      {/* Header section - Left aligned */}
      <div className="text-left ml-8 mt-16 mb-32">
        <h1 className="text-5xl font-istok mb-4">
          Arthur, <span className="underline">Développeur web créatif</span>,
        </h1>
        <h2 className="text-5xl mb-4">
          à la croisée du <span className="text-orange-500">design</span> et de la
        </h2>
        <h2 className="text-5xl mb-4">
          <span className="text-blue-500">programmation</span> . . .
        </h2>
      </div>

      {/* Rest of content - Centered */}
      <div className="w-full mx-auto text-center relative pb-16">
        {/* Section des icônes technologiques */}
        <div className="flex gap-16 justify-center px-20">
          <img src={htmlIcon} alt="HTML5" className="h-16 w-auto" />
          <img src={cssIcon} alt="CSS3" className="h-16 w-auto" />
          <img src={phpIcon} alt="PHP" className="h-16 w-auto" />
          <img src={sqlIcon} alt="SQL" className="h-16 w-auto" />
          <img src={jsIcon} alt="JavaScript" className="h-16 w-auto" />
          <img src={nodeIcon} alt="Node.js" className="h-16 w-auto" />
          <img src={reactIcon} alt="React" className="h-16 w-auto" />
        </div>

        <p className="text-xl mt-12">
          Découvrez comment mes compétences polyvalentes peuvent booster votre projet web
        </p>

        {/* Animated Arrow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce p-2 hover:text-gray-400 transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* New Projects Section */}
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl mb-4">
                Découvrez quelques-uns de mes projets les
              </h2>
              <h2 className="text-4xl mb-4">
                plus récents et les plus représentatifs de
              </h2>
              <h2 className="text-4xl">
                mes compétences
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 max-w-xl relative"> {/* Added relative for absolute positioning */}
              {/* Top square */}
              <div className="ml-16"> {/* Added margin to position */}
                <a href="#" className="block">
                  <div className="w-48 h-48 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Tall rectangle */}
              <div className="ml-4"> {/* Added margin for spacing */}
                <a href="#" className="block">
                  <div className="w-48 h-80 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Wide rectangle at bottom */}
              <div className="absolute bottom-0 left-0"> {/* Positioned absolutely */}
                <a href="#" className="block">
                  <div className="w-64 h-40 bg-gray-300 rounded-3xl hover:opacity-80 transition-opacity"></div>
                </a>
              </div>
              
              {/* Arrow button */}
              <button className="absolute bottom-0 right-0 bg-orange-500 p-4 rounded-3xl hover:bg-orange-600 transition-colors">
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
