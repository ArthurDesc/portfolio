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
}

export const projects: Project[] = [
  {
    name: "Fitmode",
    desktopImage: fitmodeDesktop,
    mobileImage: fitmodeMobile,
    description: "Description of fitmode project"
  },
  {
    name: "Cinetech",
    desktopImage: cinetechDesktop,
    mobileImage: cinetechMobile,
    description: "Description of project 2"
  },
];

// Si tu veux utiliser l'export default
export default projects;
