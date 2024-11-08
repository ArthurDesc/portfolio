import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';

// Définition des projets
const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio",
    type: "Site personnel",
    description: "Portfolio développeur web présentant mes projets et compétences",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    projectLink: "https://github.com/votre-username/portfolio"
  },
  {
    id: "2",
    title: "E-commerce",
    type: "Site marchand",
    description: "Plateforme de vente en ligne avec système de panier et paiement",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    projectLink: "https://github.com/votre-username/ecommerce"
  },
  // Ajoutez d'autres projets ici...
];

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects] = useState<Project[]>(projectsData); // Initialisé avec les données

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
