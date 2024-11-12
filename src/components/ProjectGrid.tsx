import React from 'react';
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

  return (
    <div className="container mx-auto pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            type={project.type}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};
