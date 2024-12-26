import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          // Navigation
          home: 'Accueil',
          projects: 'Projets',
          education: 'CV',
          contact: 'Contact',
          navigation: 'Navigation',
          technologies: 'Technologies',
          
          // Home page
          welcome: 'Bienvenue sur mon portfolio',
          developer_title: 'Arthur, ',
          creative_dev: 'Développeur web créatif',
          at_intersection: 'à la croisée du',
          design: 'design',
          and: 'et de la',
          programming: 'programmation',
          discover_skills: 'Découvrez comment mes compétences peuvent booster votre projet web',
          discover_projects: 'Découvrez quelques-uns de mes',
          projects_word: 'projets',
          most_recent: 'les plus récents et les plus représentatifs de mes',
          skills: 'compétences',
          
          // Timeline
          graphic_design: 'Formation en Design Graphique',
          graphic_design_desc: 'Baccalauréat en apprentissage spécialisé en graphisme, alliant théorie et pratique professionnelle pendant 2 ans',
          web_init: 'Initiation au Développement Web',
          web_init_desc: 'Formation d\'initiation au code, découverte de la programmation et première passerelle entre le design et le développement',
          web_dev: 'Formation Développeur Web',
          web_dev_desc: 'Formation intensive de 16 mois en alternance, combinant périodes en entreprise et formation approfondie au développement web',
          pro_exp: 'Expérience Professionnelle',
          pro_exp_desc: 'Missions en intérim comme développeur, mise en pratique des compétences acquises dans un contexte professionnel',
          
          // Projects
          view_project: 'Voir le projet',
          project_details: 'Détails du projet',
          technologies_used: 'Technologies utilisées',
          demo: 'Démo',
          code: 'Code',
          desktop_version: 'Version Desktop',
          mobile_version: 'Version Mobile',
          
          // Contact
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          send: 'Envoyer',
          contact_me: 'Me contacter',
          
          // Footer
          follow_me: 'Suivez-moi',
          all_rights: 'Tous droits réservés',
          
          // Project Types
          personal_site: 'Site personnel',
          showcase_site: 'Site vitrine',
          streaming_site: 'Site de streaming',
          ecommerce_site: 'Site e-commerce',
          
          // Project Descriptions
          fitmode_desc: 'Boutique en ligne de vêtements de sport avec système de panier, paiement via Stripe et backoffice administrateur. Site développé en PHP et JavaScript permettant la gestion complète des produits et des commandes.',
          cinetech_desc: 'Application web permettant aux utilisateurs de découvrir des films et séries via l\'API TMDB, avec système d\'authentification, gestion des favoris et possibilité de laisser des avis. Projet réalisé avec Laravel.',
          rapverse_desc: 'Site web dédié à l\'univers du rap, présentant des artistes, des albums et permettant aux utilisateurs de partager leurs goûts musicaux. Projet réalisé dans le cadre d\'un exercice de développement web.',
          app_favorites_desc: 'Présentation de mes trois applications préférées sous forme de site vitrine. Premier projet réalisé en formation, mettant en pratique les bases du développement web avec HTML et CSS.',
        },
      },
      en: {
        translation: {
          // Navigation
          home: 'Home',
          projects: 'Projects',
          education: 'Education',
          contact: 'Contact',
          navigation: 'Navigation',
          technologies: 'Technologies',
          
          // Home page
          welcome: 'Welcome to my portfolio',
          developer_title: 'Arthur, ',
          creative_dev: 'Creative Web Developer',
          at_intersection: 'at the intersection of',
          design: 'design',
          and: 'and',
          programming: 'programming',
          discover_skills: 'Discover how my skills can boost your web project',
          discover_projects: 'Discover some of my',
          projects_word: 'projects',
          most_recent: 'most recent and most representative of my',
          skills: 'skills',
          
          // Timeline
          graphic_design: 'Graphic Design Training',
          graphic_design_desc: 'Bachelor\'s degree in graphic design apprenticeship, combining theory and professional practice over 2 years',
          web_init: 'Web Development Introduction',
          web_init_desc: 'Code introduction training, discovering programming and first bridge between design and development',
          web_dev: 'Web Developer Training',
          web_dev_desc: '16-month intensive work-study training, combining company periods and in-depth web development training',
          pro_exp: 'Professional Experience',
          pro_exp_desc: 'Temporary development missions, putting acquired skills into practice in a professional context',
          
          // Projects
          view_project: 'View project',
          project_details: 'Project details',
          technologies_used: 'Technologies used',
          demo: 'Demo',
          code: 'Code',
          desktop_version: 'Desktop Version',
          mobile_version: 'Mobile Version',
          
          // Contact
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send',
          contact_me: 'Contact me',
          
          // Footer
          follow_me: 'Follow me',
          all_rights: 'All rights reserved',
          
          // Project Types
          personal_site: 'Personal Website',
          showcase_site: 'Showcase Website',
          streaming_site: 'Streaming Platform',
          ecommerce_site: 'E-commerce Website',
          
          // Project Descriptions
          fitmode_desc: 'Sports clothing online store with shopping cart system, Stripe payment integration, and admin backend. Website developed in PHP and JavaScript allowing complete product and order management.',
          cinetech_desc: 'Web application allowing users to discover movies and TV shows via the TMDB API, with authentication system, favorites management, and review capabilities. Project built with Laravel.',
          rapverse_desc: 'Website dedicated to the rap universe, featuring artists, albums, and allowing users to share their musical tastes. Project developed as part of a web development exercise.',
          app_favorites_desc: 'Showcase of my three favorite applications. First project completed during training, implementing web development basics with HTML and CSS.',
        },
      },
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 