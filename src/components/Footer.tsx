import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollStep = -window.scrollY / (1000 / 15);
    
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  const navigateToPage = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    
    // D'abord, on défile vers le bas de la page actuelle
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'instant'
    });

    // On attend un très court instant pour que le défilement soit terminé
    requestAnimationFrame(() => {
      // Ensuite, on navigue vers la nouvelle page
      navigate(path);
      
      // On s'assure d'être en bas de la nouvelle page
      requestAnimationFrame(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'instant'
        });
      });
    });
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="w-full bg-black/20 backdrop-blur-xl border-t border-zinc-800 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Navigation - Col 1 */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {isCurrentPage('/') ? (
                <button
                  onClick={scrollToTop}
                  className="text-left text-sm sm:text-base text-violet-400 font-medium transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              ) : (
                <button 
                  onClick={(e) => navigateToPage(e, '/')}
                  className="text-left text-sm sm:text-base text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              )}

              {isCurrentPage('/projects') ? (
                <button
                  onClick={scrollToTop}
                  className="text-left text-sm sm:text-base text-violet-400 font-medium transition-colors cursor-pointer"
                >
                  Projets
                </button>
              ) : (
                <button 
                  onClick={(e) => navigateToPage(e, '/projects')}
                  className="text-left text-sm sm:text-base text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Projets
                </button>
              )}

              {isCurrentPage('/education') ? (
                <button
                  onClick={scrollToTop}
                  className="text-left text-sm sm:text-base text-violet-400 font-medium transition-colors cursor-pointer"
                >
                  CV
                </button>
              ) : (
                <button 
                  onClick={(e) => navigateToPage(e, '/education')}
                  className="text-left text-sm sm:text-base text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  CV
                </button>
              )}

              {isCurrentPage('/contact') ? (
                <button
                  onClick={scrollToTop}
                  className="text-left text-sm sm:text-base text-violet-400 font-medium transition-colors cursor-pointer"
                >
                  Contact
                </button>
              ) : (
                <button 
                  onClick={(e) => navigateToPage(e, '/contact')}
                  className="text-left text-sm sm:text-base text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              )}
            </nav>
          </div>

          {/* Technologies - Col 2 */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-xs sm:text-sm">React</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-xs sm:text-sm">TypeScript</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-xs sm:text-sm">PHP</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-xs sm:text-sm">Tailwind CSS</span>
              <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 text-xs sm:text-sm">Node.js</span>
            </div>
          </div>

          {/* Contact - Full width on mobile, Col 3 on desktop */}
          <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white text-center md:text-left">Contact</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a 
                href="mailto:arthur.descourvieres@gmail.com" 
                className="text-sm sm:text-base text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-2 break-all text-center md:text-left"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
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
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800">
          <p className="text-center text-zinc-400 text-xs sm:text-sm">
            © {currentYear} Arthur Descourvieres. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 