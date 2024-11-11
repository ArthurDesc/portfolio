import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  description,
  image,
  technologies,
  projectLink
}) => {
  return (
    <Card className="bg-black text-white border-zinc-800 max-w-sm hover:border-zinc-700 transition-all duration-300 rounded-3xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5" />
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-zinc-400">{type}</p>
          </div>
          <button 
            onClick={() => window.open(projectLink, '_blank')}
            className="ml-auto hover:text-zinc-400 transition-colors"
            aria-label="Voir le code source sur GitHub"
          >
            <Github className="w-5 h-5" />
          </button>
        </div>

        <div className="relative h-48 mb-4 bg-zinc-900 rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm text-zinc-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Button 
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl"
          onClick={() => window.open(projectLink, '_blank')}
        >
          Voir le projet
        </Button>
      </CardContent>
    </Card>
  );
};
