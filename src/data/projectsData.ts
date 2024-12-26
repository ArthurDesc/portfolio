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
    typeKey: "personal_site",
    descriptionKey: "rapverse_desc",
    image: fansiteLogo,
    technologies: ["PHP", "JavaScript", "MySQL"],
    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/fansite/PHP/",
    githubLink: "https://github.com/ArthurDesc/Fansite"
  },
  {
    id: "2",
    title: "App Favorites",
    typeKey: "showcase_site",
    descriptionKey: "app_favorites_desc",
    image: appFavoritesLogo,
    technologies: ["HTML", "CSS"],
    projectLink: "https://arthur-descourvieres.students-laplateforme.io/project/appFavorites/HTML/",
    githubLink: "https://github.com/ArthurDesc/App-Favorites"
  },
  {
    id: "3",
    title: "CineTech",
    typeKey: "streaming_site",
    descriptionKey: "cinetech_desc",
    image: cinetechLogo,
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://derroce.com/cinetech/",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  },
  {
    id: "4",
    title: "Fitmode",
    typeKey: "ecommerce_site",
    descriptionKey: "fitmode_desc",
    image: fitmodeLogo,
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://derroce.com/shopping-website/",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  // Ajoutez d'autres projets ici...
];