// Import your images
import fitmodeDesktop from '@/assets/optimized/pictures/fitmode-desktop-optimized.webp';
import fitmodeMobile from '@/assets/optimized/pictures/fitmode-mobile-optimized.webp';
import cinetechDesktop from '@/assets/optimized/pictures/cinetech-desktop-optimized.webp';
import cinetechMobile from '@/assets/optimized/pictures/cinetech-mobile-optimized.webp';




export interface Project {
  name: string;
  desktopImage: string;
  mobileImage: string;
  descriptionKey: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    name: "Fitmode",
    desktopImage: fitmodeDesktop,
    mobileImage: fitmodeMobile,
    descriptionKey: "fitmode_desc",
    technologies: ["PHP", "JavaScript", "MySQL", "Stripe"],
    projectLink: "https://derroce.com/shopping-website",
    githubLink: "https://github.com/ArthurDesc/shopping-website"
  },
  {
    name: "CineTech",
    desktopImage: cinetechDesktop,
    mobileImage: cinetechMobile,
    descriptionKey: "cinetech_desc",
    technologies: ["Laravel", "PHP", "MySQL", "API TMDB"],
    projectLink: "https://derroce.com/cinetech",
    githubLink: "https://github.com/ArthurDesc/cinetech"
  }
];

export default projects;
