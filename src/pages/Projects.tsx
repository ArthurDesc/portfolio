import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';
import { projectsData } from '@/data/projectsData';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects] = useState<Project[]>(projectsData);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex items-center justify-center gap-3 mb-8">
        <h1 className="text-4xl font-bold flex items-center">Mes Projets</h1>
        <span className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full flex items-center self-center">
          {projects.length} projets
        </span>
      </div>
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
