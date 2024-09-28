import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Mail } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-8 right-10 bg-black py-2 px-3 rounded-full flex items-center space-x-2">
      <Button 
        variant="ghost" 
        className={cn(
          "text-white hover:bg-gray-700 hover:text-white rounded-full transition-colors duration-200",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "focus:outline-none active:bg-gray-800",
          "!shadow-none !border-none",
          "text-sm px-3 py-0.5 h-7 ml-0.5 mt-0.5"
        )}
      >
        Mes projets
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0 rounded-full">
            <img
              src="/src/assets/pictures/avatar.jpeg"
              alt="Avatar"
              className="w-full h-full rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-28 bg-black text-white rounded-xl" 
          align="center"
          sideOffset={5}
          alignOffset={0}
        >
          <DropdownMenuItem className="focus:bg-gray-700">
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>CV</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-700">
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Moon className="text-white w-4 h-4 mr-0.5 mt-0.5" />
    </nav>
  )
}
