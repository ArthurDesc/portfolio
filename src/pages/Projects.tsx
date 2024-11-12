import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ProjectGrid, Project } from '@/components/ProjectGrid';

// Définition des projets
const projectsData: Project[] = [
  {
    id: "1",
    title: "RapVerse",
    type: "Site personnel",
    description: "Site web dédié à l'univers du rap, présentant des artistes, des albums et permettant aux utilisateurs de partager leurs goûts musicaux. Projet réalisé dans le cadre d'un exercice de développement web.",
    image: "/pictures/FansiteLogo.png",
    technologies: ["PHP", "JavaScript", "MySQL"],
    projectLink: "https://github.com/ArthurDesc/Fansite"
  },
  {
    id: "2",
    title: "App Favorites",
    type: "Site vitrine",
    description: "Présentation de mes trois applications préférées sous forme de site vitrine. Premier projet réalisé en formation, mettant en pratique les bases du développement web avec HTML et CSS.",
    image: "/pictures/AppFavoritesLogo.png",
    technologies: ["HTML", "CSS"],
    projectLink: "https://github.com/ArthurDesc/App-Favorites"
  },
  {
    id: "3",
    title: "CinéTech",
    type: "Site de streaming",
    description: "Application web permettant aux utilisateurs de découvrir des films et séries via l'API TMDB, avec système d'authentification, gestion des favoris et possibilité de laisser des avis. Projet réalisé avec Laravel.",
    image: "/pictures/CinetechLogo.png",
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://github.com/ArthurDesc/cinetech"
  },
  {
    id: "4",
    title: "Fitmode",
    type: "Site e-commerce",
    description: "Boutique en ligne de vêtements de sport avec système de panier, paiement via Stripe et backoffice administrateur. Site développé en PHP et JavaScript permettant la gestion complète des produits et des commandes.",
    image: "/pictures/FitmodeLogo.png",
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://github.com/ArthurDesc/shopping-website"
  },
  // Ajoutez d'autres projets ici...
];

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
