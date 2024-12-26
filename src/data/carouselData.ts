// Import your images
import fitmodeDesktop from '@/assets/pictures/fitmode-desktop.jpeg';
import fitmodeMobile from '@/assets/pictures/fitmode-mobile.jpeg';
import cinetechDesktop from '@/assets/pictures/cinetech-desktop.jpeg';
import cinetechMobile from '@/assets/pictures/cinetech-mobile.jpeg';

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
