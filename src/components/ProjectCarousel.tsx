import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '@/data/carouselData';
import { useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  const getProjectStyles = () => {
    if (project.name === "Fitmode") {
      return {
        badge: "px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20",
        button: "flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20 transition-all duration-300"
      };
    }
    if (project.name === "CineTech") {
      return {
        badge: "px-3 py-1 bg-orange-500/10 text-orange-300 text-sm rounded-full border border-orange-500/20",
        button: "flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/20 transition-all duration-300"
      };
    }
    return {
      badge: "px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20",
      button: "flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/20 transition-all duration-300"
    };
  };

  const styles = getProjectStyles();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const mobileX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? 100 : -100, 0, isEven ? -50 : 50]
  );

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center py-20"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
          {/* Project Info */}
          <motion.div 
            className="flex-1 lg:max-w-md"
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className={styles.badge}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-zinc-300 mb-6">{project.description}</p>
            <div className="flex gap-4">
              <a 
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </div>
          </motion.div>

          {/* Images Container with Parallax */}
          <div className="relative flex-1 max-w-[90%] sm:max-w-[80%] md:max-w-full mx-auto">
            {/* Desktop Version */}
            <motion.div
              className="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 w-full"
              style={{ 
                y,
                opacity: isMobileHovered ? 0.5 : 1
              }}
              onHoverStart={() => setIsDesktopHovered(true)}
              onHoverEnd={() => setIsDesktopHovered(false)}
            >
              <img 
                src={project.desktopImage} 
                alt={`${project.name} - Version Desktop`}
                className="w-full h-auto object-contain max-w-full"
              />
            </motion.div>

            {/* Mobile Version */}
            <motion.div
              className={`absolute ${isEven ? '-right-4 sm:-right-6 md:-right-8' : '-left-4 sm:-left-6 md:-left-8'} bottom-0 w-1/3 sm:w-1/4 z-20 transition-all duration-300`}
              style={{ 
                x: mobileX,
                opacity: isDesktopHovered ? 0.5 : 1
              }}
              onHoverStart={() => setIsMobileHovered(true)}
              onHoverEnd={() => setIsMobileHovered(false)}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-zinc-900">
                <img 
                  src={project.mobileImage} 
                  alt={`${project.name} - Version Mobile`}
                  className="w-full h-auto object-contain max-w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="relative">
      {projects.map((project, index) => (
        <ProjectItem key={project.name} project={project} index={index} />
      ))}
    </div>
  );
};