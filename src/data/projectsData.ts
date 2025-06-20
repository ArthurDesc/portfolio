// Import des images - using public paths for production compatibility
const appFavoritesLogo = '/assets/AppFavoritesLogo-optimized.webp';
const cinetechLogo = '/assets/CinetechLogo-optimized.webp';
const fitmodeLogo = '/assets/FitmodeLogo-optimized.webp';
const liliLogo = '/assets/LiliLogo.webp';
const bigProjectLogo = '/assets/BigProjectLogo-optimized.webp';

import { Project } from '@/types/project';

export // Définition des projets
const projectsData: Project[] = [
  {
    id: "0",
    title: "BigProject",
    typeKey: "school_project",
    descriptionKey: "bigproject_desc",
    image: bigProjectLogo,
    technologies: ["Symfony", "React", "Docker", "MySQL"],
    projectLink: "https://peru-ape-766379.hostingersite.com/",
    githubLink: "https://github.com/konstantine-garozashvili/Intra-Big-job"
  },
  {
    id: "1",
    title: "Fitmode",
    typeKey: "ecommerce_site",
    descriptionKey: "fitmode_desc",
    image: fitmodeLogo,
    technologies: ["PHP", "MySQL", "Stripe"],
    projectLink: "https://derroce.com/shopping-website/",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  {
    id: "2",
    title: "CineTech",
    typeKey: "streaming_site",
    descriptionKey: "cinetech_desc",
    image: cinetechLogo,
    technologies: ["Laravel", "MySQL"],
    projectLink: "https://derroce.com/cinetech/",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  },
  {
    id: "4",
    title: "App Favorites",
    typeKey: "showcase_site",
    descriptionKey: "app_favorites_desc",
    image: appFavoritesLogo,
    technologies: ["HTML", "CSS"],
    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/appFavorites/HTML/",
    githubLink: "https://github.com/ArthurDesc/App-Favorites"
  },
  {
    id: "5",
    title: "La petite Lili (En développement)",
    typeKey: "association_site",
    descriptionKey: "lili_desc",
    image: liliLogo,
    technologies: ["React", "Node.js", "SQLite"],
    projectLink: "#",
    githubLink: "#"
  }
];