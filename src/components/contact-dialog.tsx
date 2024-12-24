import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import avatarImage from "@/assets/pictures/avatar.webp"
import { useState, useEffect, useCallback, memo } from "react"

const ContactFormSkeleton = memo(function ContactFormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-zinc-800 rounded-full" />
        <div className="h-6 bg-zinc-800 rounded w-32" />
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-zinc-800 rounded w-3/4" />
        <div className="space-y-3">
          <div className="h-8 bg-zinc-800 rounded" />
          <div className="h-24 bg-zinc-800 rounded" />
          <div className="h-8 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  )
});

const ContactForm = memo(function ContactForm() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Input
          type="email"
          placeholder="Votre e-mail de contact"
          className="text-sm"
        />
      </div>
      <div>
        <Textarea
          placeholder="Entrez votre message ici"
          className="text-sm min-h-[100px] resize-none"
        />
      </div>
      <Button type="submit" className="w-full">
        Envoyer
      </Button>
    </form>
  );
});

const DialogHeaderContent = memo(function DialogHeaderContent({ 
  imageLoaded, 
  setImageLoaded 
}: { 
  imageLoaded: boolean; 
  setImageLoaded: (loaded: boolean) => void;
}) {
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, [setImageLoaded]);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/fallback-avatar.jpeg';
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-zinc-800 rounded-full animate-pulse" />
        )}
        <img
          src={avatarImage}
          alt="Photo de profil"
          width={48}
          height={48}
          loading="lazy"
          className={`rounded-full w-full h-full object-cover transition-opacity duration-200 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <DialogTitle>Arthur Descourvieres</DialogTitle>
    </div>
  );
});

export function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setImageLoaded(false);
    }
  }, [isOpen]);

  const handleSelect = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem 
          className={cn(
            "cursor-pointer",
            "text-white hover:bg-gray-700",
            "focus:bg-gray-700",
            "transition-colors duration-200",
            "text-sm sm:text-base"
          )}
          onSelect={handleSelect}
        >
          <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Contacter
        </DropdownMenuItem>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-2rem)] sm:w-full max-w-[425px] p-6 sm:p-8 rounded-2xl">
          {isLoading ? (
            <ContactFormSkeleton />
          ) : (
            <>
              <DialogHeader>
                <DialogHeaderContent imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Vous pouvez me contacter dans le cas où d&apos;autres informations vous sont nécessaire.
                </p>
                <ContactForm />
              </div>
            </>
          )}
        </DialogContent>
      )}
    </Dialog>
  )
} 