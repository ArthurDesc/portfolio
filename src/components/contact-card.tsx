import { useState, useRef, useEffect, useCallback } from "react"
import avatarImage from "@/assets/optimized/pictures/avatar-optimized.webp"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"

// Regex pour la validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 1000;

type ContactCardProps = {
  isVisible: boolean;
}

interface FormErrors {
  email?: string;
  message?: string;
}

interface FormData {
  email: string;
  message: string;
}

export function ContactCard({ isVisible }: ContactCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false);
  const [, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Validation du formulaire
  const validateForm = useCallback((data: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!EMAIL_REGEX.test(data.email)) {
      errors.email = "L'adresse email n'est pas valide";
    }

    if (data.message.length < MESSAGE_MIN_LENGTH) {
      errors.message = `Le message doit contenir au moins ${MESSAGE_MIN_LENGTH} caractères`;
    } else if (data.message.length > MESSAGE_MAX_LENGTH) {
      errors.message = `Le message ne doit pas dépasser ${MESSAGE_MAX_LENGTH} caractères`;
    }

    return errors;
  }, []);

  // Mise à jour des erreurs lors de la modification du formulaire
  const handleFormDataChange = useCallback((newData: FormData) => {
    setFormData(newData);
    setErrors(validateForm(newData));
  }, [validateForm]);

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

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        const threshold = 100
        
        setIsNearFooter(footerTop - windowHeight < threshold)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation avant envoi
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_qaspuya',
        'template_3766s2o',
        {
          from_email: formData.email,
          message: formData.message,
          to_name: 'Arthur',
        },
        'c4qjRThVTK8OsaU-_'
      );

      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      });

      setFormData({ email: '', message: '' });
      setErrors({});
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isNearFooter && (
        <motion.div
          ref={cardRef}
          className="fixed bottom-0 right-0 left-0 mx-auto w-full max-w-[280px] z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
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
              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-zinc-800 rounded-full animate-pulse" />
                )}
                <img
                  src={avatarImage}
                  alt="Profile picture"
                  width={32}
                  height={32}
                  loading="eager"
                  className={`rounded-full ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    setImageError(true);
                    e.currentTarget.src = '/fallback-avatar.jpeg';
                  }}
                />
              </div>
              <span className="text-white text-sm font-medium flex-1 text-center">Arthur Descourvieres</span>
            </div>
            <div className="bg-zinc-800 p-4 space-y-3">
              <p className="text-xs text-white">
                Vous pouvez me contacter dans le cas où d&apos;autres informations vous sont nécessaire.
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre mail de contact"
                    className={`text-xs bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors h-8 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={(e) => handleFormDataChange({ ...formData, email: e.target.value })}
                    required
                    pattern={EMAIL_REGEX.source}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Entrez votre message ici"
                    className={`text-xs bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 min-h-[80px] resize-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    value={formData.message}
                    onChange={(e) => handleFormDataChange({ ...formData, message: e.target.value })}
                    required
                    minLength={MESSAGE_MIN_LENGTH}
                    maxLength={MESSAGE_MAX_LENGTH}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                  <p className="text-xs text-zinc-500 mt-1">
                    {formData.message.length}/{MESSAGE_MAX_LENGTH} caractères
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                  <Button 
                    type="submit" 
                    className="relative w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium shadow-lg hover:shadow-violet-500/50 transition-all duration-200 hover:-translate-y-0.5 h-8"
                    disabled={isLoading || Object.keys(errors).length > 0}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {!isOpen && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-transparent cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}