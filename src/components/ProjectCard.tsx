import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Eye } from 'lucide-react';

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <Card className="bg-black text-white border-zinc-800 max-w-sm hover:border-violet-500/50 transition-all duration-300 rounded-3xl">
      <style dangerouslySetInnerHTML={{ __html: skeletonStyles }} />
      <CardContent className="p-6">
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
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {!isImageLoaded && (
            <div className="absolute inset-0 w-full h-full bg-zinc-800/50 backdrop-blur-sm">
              <div className="w-full h-full skeleton-loading" />
            </div>
          )}
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isImageHovered ? 'scale-105 brightness-75' : 'scale-100 brightness-100'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isImageHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        </a>

        <p className="text-sm text-zinc-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
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
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors duration-300"
          onClick={() => window.open(projectLink, '_blank')}
        >
          Voir le projet
        </Button>
      </CardContent>
    </Card>
  );
};
