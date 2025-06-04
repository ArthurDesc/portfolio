export interface Project {
  id: string;
  name?: string;
  title: string;
  descriptionKey: string;
  typeKey: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
  desktopImage?: string;
  mobileImage?: string;
  image: string;
} 