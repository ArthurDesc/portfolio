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
          creative_dev: 'Développeur web',
          at_intersection: 'à la croisée du',
          design: 'design',
          and: 'et de la',
          programming: 'programmation',
          discover_skills: 'Découvrez comment mes compétences peuvent booster votre projet web',
          discover_projects: 'Découvrez quelques-uns de mes',
          projects_word: 'projets',
          most_recent: 'les plus récents et les plus représentatifs de mes',
          skills_word: 'compétences',
          
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
          association_site: 'Site associatif',
          school_project: 'Projet d\'école',
          
          // Project Descriptions
          bigproject_desc: 'Projet d\'envergure développé en équipe de 30 développeurs dans le cadre d\'un intranet pour une école. Application complète construite avec Symfony, React, Docker et MySQL, démontrant la capacité à travailler en équipe sur un projet complexe.',
          fitmode_desc: 'Boutique en ligne de vêtements de sport avec système de panier, paiement via Stripe et backoffice administrateur. Site développé en PHP et JavaScript permettant la gestion complète des produits et des commandes.',
          lili_desc: 'Plateforme de mise en relation entre associations et restaurants permettant aux bénéficiaires d\'accéder à des repas à 1€. Application développée avec React, Node.js et SQLite, utilisant Hono.js pour l\'API.',
          cinetech_desc: 'Application web permettant aux utilisateurs de découvrir des films et séries via l\'API TMDB, avec système d\'authentification, gestion des favoris et possibilité de laisser des avis. Projet réalisé avec Laravel.',
          rapverse_desc: 'Site web dédié à l\'univers du rap, présentant des artistes, des albums et permettant aux utilisateurs de partager leurs goûts musicaux. Projet réalisé dans le cadre d\'un exercice de développement web.',
          app_favorites_desc: 'Présentation de mes trois applications préférées sous forme de site vitrine. Premier projet réalisé en formation, mettant en pratique les bases du développement web avec HTML et CSS.',
          
          // Education Page
          my_info: 'MES INFORMATIONS',
          my_coordinates: 'Mes coordonnées',
          fullstack_dev: 'Développeur web Fullstack',
          download_cv: 'Télécharger le CV',
          location: 'Marseille centre',
          phone: '07 50 02 81 40',
          age_info: '22 ans (21/02/2003)',
          developer_designer: 'Développeur & Designer',
          
          // Skills Section
          skills_title: 'COMPÉTENCES',
          development: 'Développement',
          languages_frameworks: 'Langages & Frameworks',
          design_multimedia: 'Design & Multimédia',
          adobe_suite: 'Suite Adobe',
          audio_video: 'Audio & Vidéo',
          other_software: 'Autres logiciels',
          technical_skills: 'Compétences Techniques',
          
          // Technical Skills List
          skill_1: 'Développement d\'applications web responsive avec React et TypeScript',
          skill_2: 'Intégration web avec HTML5, CSS3 (Tailwind CSS) et JavaScript moderne',
          skill_3: 'Conception d\'interfaces utilisateur (UI) et expérience utilisateur (UX)',
          skill_4: 'Création graphique et retouche photo pour le web (Photoshop, Illustrator)',
          skill_5: 'Gestion de version avec Git et travail en équipe',
          skill_6: 'Développement back-end avec Node.js et PHP',

          // Experience Section
          experiences: 'EXPÉRIENCES',
          exp_interim: 'Intérim dans le développement web pour une durée de 16 mois',
          exp_albatros: 'Contrat d\'apprentissage sur une durée de 2 ans (Entreprise spécialisé dans la création graphique, la signalétique et l\'impression grand format).',
          exp_publand: 'Contrat d\'apprentissage sur une durée de 8 mois à Marseille, (Entreprise d\'impression sur tout support tel que pose d\'adhésif sur véhicules, flocage sur textiles, fabrication d\'enseigne lumineuses).',
          exp_valentin: 'Stage d\'observation à Montbéliard (Entreprise d\'audio visuel), durant la même période plusieurs courts métrages tournés indépendamment.',

          // Education Section
          education_title: 'FORMATIONS',
          education_1: 'Formation Développeur Web & Mobile - La Plateforme_',
          education_2: 'Parcours tremplin numérique',
          education_3: 'Apprentissage BAC PRO AMA CV (Artisanat et Métiers d\'Art option communication visuelle plurimédia)',
          duration: 'mois',
          duration_years: 'ans',
          skills_education: 'Compétences',

          // Projects Page
          my_projects: 'Mes Projets',
          projects_count: 'projets',
          search_projects: 'Rechercher des projets...',
          show_filters: 'Afficher les filtres',
          hide_filters: 'Masquer les filtres',
          technologies_label: 'Technologies :',
          clear_filters: 'Effacer les filtres',

          // Contact Page
          profile_picture: 'Photo de profil',
          contact_intro: 'Vous pouvez me contacter si d\'autres informations vous sont nécessaire.',
          your_email: 'Votre mail de contact',
          enter_message: 'Entrez votre message ici',
          sending: 'Envoi en cours...',
          send_message: 'Envoyer',
          message_sent: 'Message envoyé !',
          message_sent_desc: 'Merci de m\'avoir contacté. Je vous répondrai dès que possible.',
          error_title: 'Erreur',
          error_message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',

          // Education Page - Skills
          web_development: 'Développement web',
          tools_others: 'Outils & Autres',
          languages_license: 'Langues & Permis',
          english_level: 'Anglais (bon niveau)',
          drivers_license: 'Permis B',
          adobe_figma: 'Suite Adobe, Figma',
          
          // Education Page - Experience & Education
          experiences_title: 'Expériences',
          education_bac2: 'BAC+2 DEV WEB – LaPlateforme_ (2024-2025)',
          education_tremplin: 'Parcours Tremplin Numérique (2024) – Initiation au développement web et programmation',
          education_bacpro: 'Bac Pro AMA CV (2020-2023) – Graphisme et production multimédia',
          apprentice_title: 'Apprenti graphisme & signalétique',
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
          creative_dev: 'Web Developer',
          at_intersection: 'at the intersection of',
          design: 'design',
          and: 'and',
          programming: 'programming',
          discover_skills: 'Discover how my skills can boost your web project',
          discover_projects: 'Discover some of my',
          projects_word: 'projects',
          most_recent: 'most recent and most representative of my',
          skills_word: 'skills',
          
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
          association_site: 'Non-profit Website',
          school_project: 'School Project',
          
          // Project Descriptions
          bigproject_desc: 'Large-scale project developed by a team of 30 developers as part of a school intranet. Complete application built with Symfony, React, Docker and MySQL, demonstrating the ability to work in a team on a complex project.',
          fitmode_desc: 'Sports clothing online store with shopping cart system, Stripe payment integration, and admin backend. Website developed in PHP and JavaScript allowing complete product and order management.',
          lili_desc: 'Platform connecting associations and restaurants to provide beneficiaries with meals at €1. Application developed with React, Node.js and SQLite, using Hono.js for the API.',
          cinetech_desc: 'Web application allowing users to discover movies and TV shows via the TMDB API, with authentication system, favorites management, and review capabilities. Project built with Laravel.',
          rapverse_desc: 'Website dedicated to the rap universe, featuring artists, albums, and allowing users to share their musical tastes. Project developed as part of a web development exercise.',
          app_favorites_desc: 'Showcase of my three favorite applications. First project completed during training, implementing web development basics with HTML and CSS.',
          
          // Education Page
          my_info: 'MY INFORMATION',
          my_coordinates: 'My Contact Info',
          fullstack_dev: 'Fullstack Web Developer',
          download_cv: 'Download CV',
          location: 'Marseille center',
          phone: '07 50 02 81 40',
          age_info: '22 years old (21/02/2003)',
          developer_designer: 'Developer & Designer',
          
          // Skills Section
          skills_title: 'SKILLS',
          development: 'Development',
          languages_frameworks: 'Languages & Frameworks',
          design_multimedia: 'Design & Multimedia',
          adobe_suite: 'Adobe Suite',
          audio_video: 'Audio & Video',
          other_software: 'Other Software',
          technical_skills: 'Technical Skills',
          
          // Technical Skills List
          skill_1: 'Responsive web application development with React and TypeScript',
          skill_2: 'Web integration with HTML5, CSS3 (Tailwind CSS) and modern JavaScript',
          skill_3: 'User Interface (UI) and User Experience (UX) design',
          skill_4: 'Graphic design and photo editing for web (Photoshop, Illustrator)',
          skill_5: 'Version control with Git and team collaboration',
          skill_6: 'Back-end development with Node.js and PHP',

          // Experience Section
          experiences: 'EXPERIENCES',
          exp_interim: 'Web development temporary work for 16 months',
          exp_albatros: '2-year apprenticeship contract (Company specialized in graphic design, signage, and large format printing).',
          exp_publand: '8-month apprenticeship contract in Marseille (Printing company on all media such as vehicle adhesive installation, textile flocking, luminous sign manufacturing).',
          exp_valentin: 'Observation internship in Montbéliard (Audiovisual company), during the same period several short films shot independently.',

          // Education Section
          education_title: 'EDUCATION',
          education_1: 'Web & Mobile Developer Training - La Plateforme_',
          education_2: 'Digital Springboard Program',
          education_3: 'Professional BAC in Arts and Crafts, Visual Communication option',
          duration: 'months',
          duration_years: 'years',

          // Projects Page
          my_projects: 'My Projects',
          projects_count: 'projects',
          search_projects: 'Search projects...',
          show_filters: 'Show filters',
          hide_filters: 'Hide filters',
          technologies_label: 'Technologies:',
          clear_filters: 'Clear filters',

          // Contact Page
          profile_picture: 'Profile picture',
          contact_intro: 'You can contact me if you need any additional information.',
          your_email: 'Your contact email',
          enter_message: 'Enter your message here',
          sending: 'Sending...',
          send_message: 'Send',
          message_sent: 'Message sent!',
          message_sent_desc: 'Thank you for contacting me. I will reply as soon as possible.',
          error_title: 'Error',
          error_message: 'An error occurred while sending the message. Please try again.',
          skills_education: 'Skills',

          // Education Page - Skills
          web_development: 'Web Development',
          tools_others: 'Tools & Others',
          languages_license: 'Languages & License',
          english_level: 'English (good level)',
          drivers_license: 'Driving License',
          adobe_figma: 'Adobe Suite, Figma',
          
          // Education Page - Experience & Education
          experiences_title: 'Experiences',
          education_bac2: 'BAC+2 WEB DEV – LaPlateforme_ (2024-2025)',
          education_tremplin: 'Digital Springboard Program (2024) – Introduction to web development and programming',
          education_bacpro: 'Professional BAC AMA CV (2020-2023) – Graphics and multimedia production',
          apprentice_title: 'Graphics & Signage Apprentice',
        },
      },
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 