// Import des images
import fansiteLogo from '@/assets/pictures/FansiteLogo.png';
import appFavoritesLogo from '@/assets/pictures/AppFavoritesLogo.png';
import cinetechLogo from '@/assets/pictures/CinetechLogo.png';
import fitmodeLogo from '@/assets/pictures/FitmodeLogo.png';

import { Project } from '@/components/ProjectGrid';

export // Définition des projets
const projectsData: Project[] = [
  {
    id: "1",
    title: "RapVerse",
    type: "Site personnel",
    description: "Site web dédié à l'univers du rap, présentant des artistes, des albums et permettant aux utilisateurs de partager leurs goûts musicaux. Projet réalisé dans le cadre d'un exercice de développement web.",
    image: fansiteLogo,
    technologies: ["PHP", "JavaScript", "MySQL"],
    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/fansite/PHP/",
    githubLink: "https://github.com/ArthurDesc/Fansite"
  },
  {
    id: "2",
    title: "App Favorites",
    type: "Site vitrine",
    description: "Présentation de mes trois applications préférées sous forme de site vitrine. Premier projet réalisé en formation, mettant en pratique les bases du développement web avec HTML et CSS.",
    image: appFavoritesLogo,
    technologies: ["HTML", "CSS"],
    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/appFavorites/HTML/",
    githubLink: "https://github.com/ArthurDesc/App-Favorites"
  },
  {
    id: "3",
    title: "CineTech",
    type: "Site de streaming",
    description: "Application web permettant aux utilisateurs de découvrir des films et séries via l'API TMDB, avec système d'authentification, gestion des favoris et possibilité de laisser des avis. Projet réalisé avec Laravel.",
    image: cinetechLogo,
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://github.com/ArthurDesc/cinetech",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  },
  {
    id: "4",
    title: "Fitmode",
    type: "Site e-commerce",
    description: "Boutique en ligne de vêtements de sport avec système de panier, paiement via Stripe et backoffice administrateur. Site développé en PHP et JavaScript permettant la gestion complète des produits et des commandes.",
    image: fitmodeLogo,
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://github.com/ArthurDesc/shopping-website",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  // Ajoutez d'autres projets ici...
];