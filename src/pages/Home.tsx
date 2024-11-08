import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-white p-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-istok mb-4">
          Arthur, <span className="underline">Développeur web créatif</span>,
        </h1>
        
        <h2 className="text-2xl mb-8">
          à la croisée du <span className="text-orange-500">design</span> et de la
          <span className="text-blue-500"> programmation</span> . . .
        </h2>

        {/* Section des icônes technologiques */}
        <div className="flex gap-8 mt-16 mb-12 justify-center">
          <img src="/icons/html.png" alt="HTML5" className="h-12 auto" />
          <img src="/icons/css.png" alt="CSS3" className="h-12 auto" />
          <img src="/icons/php.png" alt="PHP" className="h-12 auto" />
          <img src="/icons/sql.png" alt="SQL" className="h-12 auto" />
          <img src="/icons/js.png" alt="JavaScript" className="h-12 auto" />
          <img src="/icons/node.png" alt="Node.js" className="h-12 auto" />
          <img src="/icons/react.png" alt="React" className="h-12 auto" />
        </div>

        <p className="text-xl mt-16">
          Découvrez comment mes compétences polyvalentes peuvent booster votre projet web
        </p>
      </div>
    </div>
  );
};

export default Home;
