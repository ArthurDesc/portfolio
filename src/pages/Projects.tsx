import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Project[]>([]); // Initialisez avec un tableau vide

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Mes Projets</h1>
      <Input 
        type="search"
        placeholder="Rechercher des projets..." 
        className="mb-8 max-w-md mx-auto"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ProjectGrid searchQuery={searchQuery} projects={projects} />
    </div>
  );
};

export default Projects;
