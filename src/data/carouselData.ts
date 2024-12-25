// Import your images
import fitmodeDesktop from '@/assets/pictures/fitmode-desktop.jpeg';
import fitmodeMobile from '@/assets/pictures/fitmode-mobile.jpeg';
import cinetechDesktop from '@/assets/pictures/cinetech-desktop.jpeg';
import cinetechMobile from '@/assets/pictures/cinetech-mobile.jpeg';

export interface Project {
  name: string;
  desktopImage: string;
  mobileImage: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    name: "Fitmode",
    desktopImage: fitmodeDesktop,
    mobileImage: fitmodeMobile,
    description: "Boutique en ligne de vêtements de sport avec système de panier, paiement via Stripe et backoffice administrateur. Site développé en PHP et JavaScript permettant la gestion complète des produits et des commandes.",
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://github.com/ArthurDesc/shopping-website",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  {
    name: "Cinetech",
    desktopImage: cinetechDesktop,
    mobileImage: cinetechMobile,
    description: "Application web permettant aux utilisateurs de découvrir des films et séries via l'API TMDB, avec système d'authentification, gestion des favoris et possibilité de laisser des avis. Projet réalisé avec Laravel.",
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://github.com/ArthurDesc/cinetech",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  }
];

export default projects;
