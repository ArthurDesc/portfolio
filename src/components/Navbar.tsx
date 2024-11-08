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
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-4 right-4 bg-black py-1.5 px-2 rounded-full flex items-center space-x-1.5">
      <Link to="/projects">
        <Button 
          variant="ghost" 
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
      <DropdownMenu>
        {/* ... le reste du contenu du DropdownMenu ... */}
      </DropdownMenu>
      <ModeToggle />
    </nav>
  )
}
