// Import your images - using public paths for production compatibility
const fitmodeDesktop = '/assets/fitmode-desktop-optimized.webp';
const fitmodeMobile = '/assets/fitmode-mobile-optimized.webp';
const cinetechDesktop = '/assets/cinetech-desktop-optimized.webp';
const cinetechMobile = '/assets/cinetech-mobile-optimized.webp';




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