import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
        <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
        <img src={project.image} alt={project.name} className="w-full h-40 object-cover mb-4 rounded" />
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Voir le projet</Button>
      </CardFooter>
    </Card>
  );
};
