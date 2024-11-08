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
    <nav className="fixed top-4 right-4 bg-black py-1.5 px-2 rounded-full flex items-center space-x-1.5">
      {!isProjectsPage && (
        <Link to="/projects">
          <Button 
            variant="navGhost" 
            className={cn(
              "text-white hover:bg-gray-700 hover:text-white rounded-full transition-colors duration-200",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "focus:outline-none active:bg-gray-800",
              "!shadow-none !border-none",
              "text-sm px-2.5 py-1 h-7"
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
              "text-sm px-2.5 py-1 h-7"
            )}
          >
            <img 
              src={profilePic} 
              alt="Photo de profil"
              className="w-6 h-6 rounded-full object-cover"
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
                "transition-colors duration-200"
              )}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Formation
            </DropdownMenuItem>
          </Link>
          <Link to="/contact">
            <DropdownMenuItem 
              className={cn(
                "cursor-pointer",
                "text-white hover:bg-gray-700",
                "focus:bg-gray-700",
                "transition-colors duration-200"
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <ModeToggle />
    </nav>
  )
}
