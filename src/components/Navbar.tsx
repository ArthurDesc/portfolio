import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Mail } from "lucide-react"
import { Link, useLocation } from "react-router-dom";
import profilePic from '../assets/pictures/avatar.jpeg'

export function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="w-full max-w-screen-2xl mx-auto relative">
      <nav className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black p-1 sm:p-1.5 rounded-full flex items-center space-x-1 sm:space-x-1.5 z-50">
        {!isProjectsPage && (
          <Link to="/projects">
            <Button 
              variant="navGhost" 
              className={cn(
                "text-white rounded-full transition-all duration-300",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "focus:outline-none",
                "!shadow-none !border-none",
                "text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9",
                "hover:scale-105 hover:-rotate-2 hover:transform-gpu"
              )}
            >
              Mes projets
            </Button>
          </Link>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="bg-dark-dropdown rounded-xl border border-violet-500/50"
          >
            <Link to="/education">
              <DropdownMenuItem 
                className={cn(
                  "cursor-pointer",
                  "text-white group",
                  "transition-colors duration-200",
                  "text-sm sm:text-base"
                )}
              >
                <GraduationCap className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 group-hover:text-violet-500 group-hover:-translate-y-0.5" />
                CV
              </DropdownMenuItem>
            </Link>
            <Link to="/contact">
              <DropdownMenuItem 
                className={cn(
                  "cursor-pointer",
                  "text-white group",
                  "transition-colors duration-200",
                  "text-sm sm:text-base"
                )}
              >
                <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 group-hover:text-violet-500 group-hover:-rotate-12" />
                Contacter
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  )
}
