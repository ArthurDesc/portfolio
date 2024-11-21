import Marquee from 'react-fast-marquee';
import { Project } from '@/data/carouselData';

interface CarouselProps {
  projects: Project[]
}

export const ProjectCarousel = ({ projects }: CarouselProps) => {
  return (
    <div className="w-full mb-16">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="overflow-hidden transition-all duration-200"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-24 cursor-pointer"
          >
            <div className="flex items-center gap-8">
              <img 
                src={project.desktopImage} 
                alt={`${project.name} Desktop`}
                className="h-[300px] w-auto object-contain rounded-lg"
              />
              <img 
                src={project.mobileImage} 
                alt={`${project.name} Mobile`}
                className="h-[300px] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};