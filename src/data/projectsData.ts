// Import des images
import fansiteLogo from '@/assets/optimized/pictures/FansiteLogo-optimized.webp';
import appFavoritesLogo from '@/assets/optimized/pictures/AppFavoritesLogo-optimized.webp';
import cinetechLogo from '@/assets/optimized/pictures/CinetechLogo-optimized.webp';
import fitmodeLogo from '@/assets/optimized/pictures/FitmodeLogo-optimized.webp';

import { Project } from '@/types/project';

export // Définition des projets
const projectsData: Project[] = [
  {
    id: "1",
    title: "Fitmode",
    typeKey: "ecommerce_site",
    descriptionKey: "fitmode_desc",
    image: fitmodeLogo,
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://derroce.com/shopping-website/",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  {
    id: "2",
    title: "CineTech",
    typeKey: "streaming_site",
    descriptionKey: "cinetech_desc",
    image: cinetechLogo,
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://derroce.com/cinetech/",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  },
  {
    id: "3",
    title: "RapVerse",
    typeKey: "personal_site",
    descriptionKey: "rapverse_desc",
    image: fansiteLogo,
    technologies: ["PHP", "JavaScript", "MySQL"],

    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/fansite/PHP/",
    githubLink: "https://github.com/ArthurDesc/Fansite"
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

  // Ajoutez d'autres projets ici...
];