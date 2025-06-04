import { lazy } from 'react';

// Pages
export const Home = lazy(() => import('@/pages/Home'));
export const Projects = lazy(() => import('@/pages/Projects'));
export const Education = lazy(() => import('@/pages/Education'));

// Composants lourds
export const ProjectCarousel = lazy(() => import('@/components/ProjectCarousel'));
export const ProjectGrid = lazy(() => import('@/components/ProjectGrid'));
export const ContactCard = lazy(() => import('@/components/contact-card'));

// Note: Les composants légers comme Navbar, Footer, et les petits composants UI
// ne nécessitent pas de lazy loading car ils sont utilisés fréquemment
// et le lazy loading pourrait en fait dégrader les performances 