import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import avatarImage from "@/assets/pictures/avatar.webp"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div 
        className="w-full max-w-[425px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl shadow-xl p-6 sm:p-8 space-y-8">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3,
              delay: 0.1,
              ease: "easeOut"
            }}
          >
            <div className="relative w-12 h-12">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-zinc-800 rounded-full animate-pulse" />
              )}
              <img
                src={avatarImage}
                alt="Photo de profil"
                width={48}
                height={48}
                className={`rounded-full w-full h-full object-cover transition-opacity duration-200 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.src = '/fallback-avatar.jpeg';
                }}
              />
            </div>
            <h1 className="text-xl font-semibold text-white">Arthur Descourvieres</h1>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            <p className="text-sm text-zinc-400">
              Vous pouvez me contacter dans le cas où d&apos;autres informations vous sont nécessaire.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre e-mail de contact"
                  className="text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors"
                />
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.4,
                  ease: "easeOut"
                }}
              >
                <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
                <Textarea
                  id="message"
                  placeholder="Entrez votre message ici"
                  className="text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 min-h-[120px] resize-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                <Button 
                  type="submit" 
                  className="relative w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-violet-500/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Envoyer
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 