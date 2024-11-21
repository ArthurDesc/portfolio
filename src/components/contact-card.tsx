import { useState, useRef, useEffect } from "react"
import avatarImage from "@/assets/pictures/avatar.jpeg"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactCard() {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <motion.div 
      ref={cardRef}
      className="fixed bottom-0 right-0 left-0 mx-auto w-full max-w-[280px] z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div
        className={`
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-2' : 'translate-y-[calc(100%-48px)]'}
          bg-zinc-900 rounded-t-xl shadow-lg overflow-hidden relative
        `}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white hover:text-zinc-400 transition-colors"
            aria-label="Close form"
          >
            <X size={16} />
          </button>
        )}
        <div 
          className="p-3 flex items-center justify-between gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={avatarImage}
            alt="Profile picture"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white text-sm font-medium flex-1 text-center">Arthur Descourvieres</span>
        </div>
        <div className="bg-zinc-800 p-4 space-y-3">
          <p className="text-xs text-white">
            Vous pouvez me contacter dans le cas où d&apos;autres informations vous sont nécessaire.
          </p>
          <form className="space-y-3">
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 text-xs h-8"
              />
            </div>
            <div>
              <Textarea
                placeholder="Entrez votre message ici"
                className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 text-xs min-h-[80px] resize-none"
              />
            </div>
            <Button className="w-full bg-zinc-900 hover:bg-zinc-700 text-white text-xs h-8">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
      {!isOpen && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-transparent"
          onMouseEnter={() => setIsOpen(true)}
        />
      )}
    </motion.div>
  )
}