import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

interface ProjectGridProps {
  searchQuery: string;
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ searchQuery, projects }) => {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
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
              type={project.type}
              description={project.description}
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
