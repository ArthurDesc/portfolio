import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Mail } from "lucide-react"
import { ModeToggle } from "./ui/mode-toggle"
import { Link, useLocation } from "react-router-dom";
import profilePic from '../assets/pictures/avatar.jpeg'

export function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="w-full max-w-screen-2xl mx-auto relative">
      <nav className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-full flex items-center space-x-1 sm:space-x-1.5 z-50">
        {!isProjectsPage && (
          <Link to="/projects">
            <Button 
              variant="navGhost" 
              className={cn(
                "text-white hover:bg-gray-700 hover:text-white rounded-full transition-colors duration-200",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "focus:outline-none active:bg-gray-800",
                "!shadow-none !border-none",
                "text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 h-6 sm:h-7"
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
                "text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 h-6 sm:h-7"
              )}
            >
              <img 
                src={profilePic} 
                alt="Photo de profil"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="bg-dark-dropdown rounded-xl border-gray-800"
          >
            <Link to="/education">
              <DropdownMenuItem 
                className={cn(
                  "cursor-pointer",
                  "text-white hover:bg-gray-700",
                  "focus:bg-gray-700",
                  "transition-colors duration-200",
                  "text-sm sm:text-base"
                )}
              >
                <GraduationCap className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Formation
              </DropdownMenuItem>
            </Link>
            <Link to="/contact">
              <DropdownMenuItem 
                className={cn(
                  "cursor-pointer",
                  "text-white hover:bg-gray-700",
                  "focus:bg-gray-700",
                  "transition-colors duration-200",
                  "text-sm sm:text-base"
                )}
              >
                <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Contact
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <ModeToggle />
      </nav>
    </div>
  )
}
