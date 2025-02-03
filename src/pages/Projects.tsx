import React, { useState, useMemo, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';
import { projectsData } from '@/data/projectsData';
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [projects] = useState<Project[]>(projectsData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
                          t(project.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTech = selectedTechnologies.length === 0 ||
                         selectedTechnologies.some(tech => project.technologies.includes(tech));
      
      return matchesSearch && matchesTech;
    });
  }, [projects, searchQuery, selectedTechnologies, t]);

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
    <div className={`min-h-screen bg-background p-8 ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      <motion.div
        initial={false}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center gap-3 mb-8 mt-16 md:mt-16"
      >
        <h1 className="text-4xl font-bold flex items-center">{t('my_projects')}</h1>
        <span className="px-3 py-1 text-sm bg-violet-500/10 text-violet-400 rounded-full flex items-center self-center">
          {filteredProjects.length} {t('projects_count')}
        </span>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 max-w-md">
            <Input
              type="search"
              placeholder={t('search_projects')}
              className="w-full focus-visible:ring-violet-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="default"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="bg-transparent border border-violet-500/50 hover:bg-violet-500/10 text-white whitespace-nowrap flex-shrink-0"
          >
            <Filter className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">
              {isFiltersVisible ? t('hide_filters') : t('show_filters')}
            </span>
            {selectedTechnologies.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded-full text-xs">
                {selectedTechnologies.length}
              </span>
            )}
          </Button>
        </div>

        {isFiltersVisible && (
          <motion.div 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm text-gray-400">{t('technologies_label')}</h3>
              {selectedTechnologies.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  {t('clear_filters')}
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
          </motion.div>
        )}
      </div>
      <ProjectGrid searchQuery={searchQuery} projects={filteredProjects} />
    </div>
  );
};

export default Projects;
