import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';
import { projectsData } from '@/data/projectsData';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects] = useState<Project[]>(projectsData);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex items-center justify-center gap-3 mb-8 mt-16 md:mt-16">
        <h1 className="text-4xl font-bold flex items-center">Mes Projets</h1>
        <span className="px-3 py-1 text-sm bg-violet-500/10 text-violet-400 rounded-full flex items-center self-center">
          {projects.length} projets
        </span>
      </div>
      <Input
        type="search"
        placeholder="Rechercher des projets..."
        className="mb-8 max-w-md mx-auto focus-visible:ring-violet-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ProjectGrid searchQuery={searchQuery} projects={projects} />
    </div>
  );
};

export default Projects;
