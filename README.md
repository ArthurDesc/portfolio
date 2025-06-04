# Portfolio

Ce projet est un portfolio personnel développé avec React, TypeScript et Tailwind CSS.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- npm (installé automatiquement avec Node.js)

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPOSITORY]
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

## Démarrage du projet

Pour lancer le projet en mode développement :
```bash
npm run dev
```
Le site sera accessible à l'adresse : http://localhost:5173

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (pour les animations)
- React Router DOM
- Radix UI

## Librairies et Dépendances

### Dépendances principales
- `@emotion/react`: ^11.13.3 - Bibliothèque pour le styling avec des composants
- `@radix-ui/react-*`: Composants UI accessibles et personnalisables
  - `dropdown-menu`: ^2.1.1
  - `react-icons`: ^1.3.2
  - `react-slot`: ^1.1.0
  - `react-toggle`: ^1.1.0
- `framer-motion`: ^11.11.13 - Bibliothèque d'animations
- `react`: ^18.3.1 - Framework JavaScript
- `react-dom`: ^18.3.1 - Rendu React pour le web
- `react-fast-marquee`: ^1.6.5 - Composant de défilement
- `react-grid-layout`: ^1.5.0 - Système de grille responsive
- `react-router-dom`: ^6.26.2 - Routage pour React
- `class-variance-authority`: ^0.7.0 - Gestion des variantes de classes
- `tailwind-merge`: ^2.5.2 - Utilitaire pour Tailwind CSS
- `tailwindcss-animate`: ^1.0.7 - Animations pour Tailwind CSS

### Dépendances de développement
- `@vitejs/plugin-react`: ^4.3.1 - Plugin Vite pour React
- `typescript`: ^5.5.3 - Support TypeScript
- `tailwindcss`: ^3.4.13 - Framework CSS utilitaire
- `postcss`: ^8.4.47 - Outil de transformation CSS
- `autoprefixer`: ^10.4.20 - Plugin PostCSS
- `eslint`: ^9.9.0 - Linter JavaScript/TypeScript
- Plugins ESLint:
  - `eslint-plugin-react-hooks`: ^5.1.0-rc.0
  - `eslint-plugin-react-refresh`: ^0.4.9

## Structure du projet

```
portfolio/
├── src/             # Code source
├── public/          # Fichiers statiques
├── components.json  # Configuration des composants
├── tailwind.config.js
├── tsconfig.json   # Configuration TypeScript
└── vite.config.ts  # Configuration Vite
```

## Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request
