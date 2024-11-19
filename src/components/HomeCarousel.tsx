import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Project } from '@/data/carouselProjects';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsRotated(false);
  };

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsRotated(false);
  };

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  // Helper function to get previous and next indices
  const getPrevIndex = () => (currentProject - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentProject + 1) % projects.length;

  return (
    <div className="mt-12 relative max-w-6xl mx-auto">
      <div className="relative flex items-center justify-center gap-4 h-[500px]">
        {/* Previous Project Preview */}
        <div className="absolute left-0 w-1/4 h-4/5 opacity-40 transition-all duration-300 hover:opacity-60">
          <img 
            src={projects[getPrevIndex()].desktopImage}
            alt="Previous project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Current Project */}
        <div className="relative w-1/2 h-full z-10 transition-all duration-500">
          <img 
            src={isRotated ? projects[currentProject].mobileImage : projects[currentProject].desktopImage}
            alt={projects[currentProject].name}
            className={`w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-500
              ${isRotated ? 'scale-75 rotate-90' : ''}`}
          />
          
          {/* Rotate Button */}
          <button 
            onClick={toggleRotation}
            className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <RotateCw className="w-6 h-6" />
          </button>
        </div>

        {/* Next Project Preview */}
        <div className="absolute right-0 w-1/4 h-4/5 opacity-40 transition-all duration-300 hover:opacity-60">
          <img 
            src={projects[getNextIndex()].desktopImage}
            alt="Next project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={previousProject}
          className="absolute left-4 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextProject}
          className="absolute right-4 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Project Info */}
      <div className="text-center mt-6">
        <h3 className="text-2xl font-semibold">{projects[currentProject].name}</h3>
        <p className="text-gray-300 mt-2">{projects[currentProject].description}</p>
      </div>

      {/* Project Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentProject ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;