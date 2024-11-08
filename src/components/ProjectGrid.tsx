import React from 'react';
import { ProjectCard } from './ProjectCard';

// Définissez le type Project ici pour l'utiliser dans l'interface et ailleurs
export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
}

interface ProjectGridProps {
  searchQuery: string;
  projects: Project[]; // Nous passons les projets en tant que prop
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ searchQuery, projects }) => {
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (projects.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-500">Aucun projet n'a encore été ajouté.</p>
      </div>
    );
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-500">Aucun projet ne correspond à votre recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
