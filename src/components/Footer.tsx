import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    // Petit délai pour laisser le temps à la page de se charger
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="w-full bg-black/20 backdrop-blur-xl border-t border-zinc-800 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/" onClick={handleNavigation('/')} className="text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer">
                Accueil
              </a>
              <a href="/projects" onClick={handleNavigation('/projects')} className="text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer">
                Projets
              </a>
              <a href="/education" onClick={handleNavigation('/education')} className="text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer">
                CV
              </a>
              <a href="/contact" onClick={handleNavigation('/contact')} className="text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:arthur.descourvieres@gmail.com" 
                className="text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>arthur.descourvieres@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://github.com/ArthurDesc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/arthur-descourvieres-b37290315/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-sm">React</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-sm">TypeScript</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-sm">PHP</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-sm">Tailwind CSS</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-sm">Node.js</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-center text-zinc-400 text-sm">
            © {currentYear} Arthur Descourvieres. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 