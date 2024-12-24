import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';
import { projectsData } from '@/data/projectsData';
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [projects] = useState<Project[]>(projectsData);

  // Get unique technologies from all projects
  const availableTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on search query and selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTech = selectedTechnologies.length === 0 ||
                         selectedTechnologies.some(tech => project.technologies.includes(tech));
      
      return matchesSearch && matchesTech;
    });
  }, [projects, searchQuery, selectedTechnologies]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex items-center justify-center gap-3 mb-8 mt-16 md:mt-16">
        <h1 className="text-4xl font-bold flex items-center">Mes Projets</h1>
        <span className="px-3 py-1 text-sm bg-violet-500/10 text-violet-400 rounded-full flex items-center self-center">
          {filteredProjects.length} projets
        </span>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Input
            type="search"
            placeholder="Rechercher des projets..."
            className="mb-0 w-full sm:max-w-md focus-visible:ring-violet-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            variant="default"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="bg-transparent border border-violet-500/50 hover:bg-violet-500/10 text-white whitespace-nowrap"
          >
            <Filter className="w-4 h-4 mr-2" />
            {isFiltersVisible ? "Masquer les filtres" : "Afficher les filtres"}
            {selectedTechnologies.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded-full text-xs">
                {selectedTechnologies.length}
              </span>
            )}
          </Button>
        </div>

        {isFiltersVisible && (
          <div className="mb-8 animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm text-gray-400">Technologies :</h3>
              {selectedTechnologies.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Effacer les filtres
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {availableTechnologies.map((tech) => {
                const isSelected = selectedTechnologies.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    className={`
                      px-3 py-1.5 rounded-full text-sm font-medium
                      transition-all duration-200 hover:scale-105
                      ${isSelected 
                        ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25' 
                        : 'bg-violet-500/10 text-violet-400 hover:bg-violet-500/20'
                      }
                    `}
                  >
                    {tech}
                  </button>
                )}
              )}
            </div>
          </div>
        )}
      </div>
      <ProjectGrid searchQuery={searchQuery} projects={filteredProjects} />
    </div>
  );
};

export default Projects;
