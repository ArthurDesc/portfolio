import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  searchQuery: string;
  projects: Project[];
}

const ProjectGrid = ({ searchQuery, projects }: ProjectGridProps) => {
  const { t } = useTranslation();

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto pb-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
          >
            <ProjectCard
              title={project.title}
              type={t(project.typeKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              technologies={project.technologies}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
