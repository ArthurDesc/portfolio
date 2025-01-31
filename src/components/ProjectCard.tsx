import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import des vidéos de manière lazy
const videoImports = {
  RapVerse: () => import('@/assets/videos/Fansite.webm'),
  'App Favorites': () => import('@/assets/videos/Apps.webm'),
  CineTech: () => import('@/assets/videos/cinetech.webm'),
  Fitmode: () => import('@/assets/videos/fitmode.webm')
};

// Définition du style pour l'animation du skeleton
const skeletonStyles = `
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  .skeleton-loading {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
  }
`;

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  description,
  image,
  technologies,
  projectLink,
  githubLink
}) => {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Chargement lazy des vidéos
  useEffect(() => {
    if (isImageHovered && videoImports[title as keyof typeof videoImports]) {
      videoImports[title as keyof typeof videoImports]()
        .then(module => setVideoSrc(module.default))
        .catch(error => console.error('Erreur de chargement de la vidéo:', error));
    }
  }, [isImageHovered, title]);

  useEffect(() => {
    const checkTextOverflow = () => {
      if (descriptionRef.current) {
        const isOverflowing = descriptionRef.current.scrollHeight > 80;
        setShouldShowButton(isOverflowing);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, [description]);

  // Ajout de l'effet pour la lecture de la vidéo
  useEffect(() => {
    if (videoRef.current && isImageHovered && videoSrc) {
      videoRef.current.play().catch(() => console.log("Lecture automatique impossible"));
    }
  }, [isImageHovered, videoSrc]);

  return (
    <Card 
      className="bg-black text-white border-zinc-800 max-w-sm hover:border-violet-500/50 transition-all duration-300 rounded-3xl h-full flex flex-col"
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: skeletonStyles }} />
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-zinc-400">{type}</p>
          </div>
          <button 
            onClick={() => window.open(githubLink, '_blank')}
            className="ml-auto hover:text-violet-500 transition-colors"
            aria-label="Voir le code source sur GitHub"
          >
            <Github className="w-5 h-5" />
          </button>
        </div>

        <a 
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-48 mb-4 bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer"
        >
          {!isImageLoaded && (
            <div className="absolute inset-0 w-full h-full bg-zinc-800/50 backdrop-blur-sm">
              <div className="w-full h-full skeleton-loading" />
            </div>
          )}
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
          {videoSrc && (
            <video
              ref={videoRef}
              src={videoSrc}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isImageHovered ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              loop
              playsInline
            />
          )}
        </a>

        <div className="flex-grow flex flex-col">
          <motion.div 
            className="relative overflow-hidden"
            animate={{ height: isExpanded ? "auto" : "80px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div 
              ref={descriptionRef}
              className="text-sm text-zinc-300"
            >
              {description}
            </div>
            {shouldShowButton && (
              <div 
                className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none ${
                  isExpanded ? 'hidden' : 'block'
                }`}
              />
            )}
          </motion.div>
          
          {shouldShowButton && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full text-center mt-1 text-violet-400 hover:text-violet-300 transition-colors flex items-center justify-center gap-1 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <>
                  Voir moins <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Voir plus <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          )}

          <div className="flex flex-wrap gap-2 my-6">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="bg-zinc-800 text-zinc-300 hover:bg-violet-500/10 hover:text-violet-400 rounded-xl transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button 
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors duration-300 mt-auto"
            onClick={() => window.open(projectLink, '_blank')}
          >
            {t('view_project')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
