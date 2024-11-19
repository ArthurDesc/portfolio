import useEmblaCarousel from 'embla-carousel-react';
import { projects } from '@/data/carouselData';

export default function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })

  return (
    <div className="max-w-5xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="p-2 sm:p-4">
                <div className="relative group inline-flex justify-center w-full">
                  <div className="relative inline-block">
                    <img 
                      src={project.desktopImage} 
                      alt={project.name}
                      className="h-[250px] sm:h-[300px] md:h-[400px] object-contain rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg flex items-end">
                      <div className="text-center p-3 sm:p-6 w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {project.name}
                        </h3>
                        <p className="text-white/90 mt-1 sm:mt-2 text-xs sm:text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

