import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GraduationCap, Mail, Layout } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import profilePic from '../assets/optimized/pictures/avatar-optimized.webp'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-2xl mx-auto relative">
      <nav className="fixed top-2 sm:top-4 right-2 sm:right-4 bg-black p-1.5 sm:p-2 rounded-full flex items-center space-x-1.5 sm:space-x-2 z-50">
        {!isProjectsPage && (
          <Link to="/projects">
            <Button 
              variant="navGhost" 
              className={cn(
                "text-white rounded-full transition-all duration-500",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "focus:outline-none",
                "!shadow-none !border-none",
                "text-xs sm:text-sm h-9 sm:h-10",
                "hover:scale-105 hover:-rotate-2 hover:transform-gpu",
                "flex items-center justify-center overflow-hidden",
                isScrolling 
                  ? "px-2 sm:px-2.5" 
                  : "px-3 sm:px-4"
              )}
            >
              <Layout className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className={cn(
                "ml-2 duration-0",
                isScrolling 
                  ? "hidden w-0" 
                  : "inline-block w-auto"
              )}>
                {t('projects')}
              </span>
            </Button>
          </Link>
        )}
        
        <div className="relative group">
          <Button 
            variant="profileGhost" 
            className={cn(
              "text-white rounded-full transition-colors duration-200",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "focus:outline-none active:text-violet-400",
              "!shadow-none !border-none",
              "p-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center"
            )}
          >
            <img 
              src={profilePic} 
              alt="Photo de profil"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
            />
          </Button>

          <div className={cn(
            "absolute right-0 mt-2 w-36",
            "bg-dark-dropdown rounded-xl border border-violet-500/50",
            "invisible opacity-0 translate-y-2",
            "transition-all duration-200 ease-in-out",
            "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
          )}>
            {/* Invisible bridge to prevent gap */}
            <div className="absolute -top-2 left-0 w-full h-2" />
            
            <Link to="/education" className="block">
              <div 
                className={cn(
                  "flex items-center px-3 py-1.5",
                  "text-white group/item",
                  "transition-colors duration-200",
                  "text-sm",
                  "hover:bg-violet-500/10",
                  "cursor-pointer"
                )}
              >
                <GraduationCap className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 group-hover/item:text-violet-500 group-hover/item:-translate-y-0.5" />
                {t('education')}
              </div>
            </Link>
            <Link to="/contact" className="block">
              <div 
                className={cn(
                  "flex items-center px-3 py-1.5",
                  "text-white group/item",
                  "transition-colors duration-200",
                  "text-sm",
                  "hover:bg-violet-500/10",
                  "cursor-pointer"
                )}
              >
                <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 group-hover/item:text-violet-500 group-hover/item:-rotate-12" />
                {t('contact')}
              </div>
            </Link>
          </div>
        </div>
        <LanguageSelector />
      </nav>
    </div>
  )
}
