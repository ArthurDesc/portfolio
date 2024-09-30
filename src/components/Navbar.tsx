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

export function Navbar() {
  return (
    <nav className="fixed top-6 right-6 bg-black py-2 px-3 rounded-full flex items-center space-x-2">
      <Button 
        variant="ghost" 
        className={cn(
          "text-white hover:bg-gray-700 hover:text-white rounded-full transition-colors duration-200",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "focus:outline-none active:bg-gray-800",
          "!shadow-none !border-none",
          "text-sm px-3 py-1 h-8"
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
          <DropdownMenuItem className="focus:bg-gray-700 py-2 px-4 cursor-pointer">
            <GraduationCap className="mr-3 h-5 w-5" />
            <span>CV</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-700 py-2 px-4 cursor-pointer">
            <Mail className="mr-3 h-5 w-5" />
            <span>Contact</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </nav>
  )
}
