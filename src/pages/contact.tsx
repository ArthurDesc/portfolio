import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import avatarImage from "@/assets/optimized/pictures/avatar-optimized.webp"
import { motion } from "framer-motion"
import { useState, useCallback, memo } from "react"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"
import { useTranslation } from 'react-i18next'
import { FloatingCircles } from '@/components/shared/FloatingCircles'

// Regex pour la validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 1000;

// Animation variants pour réduire la duplication
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      delay,
      ease: "easeOut"
    }
  })
};

// Types pour la validation du formulaire
interface FormErrors {
  email?: string;
  message?: string;
}

interface FormData {
  email: string;
  message: string;
}

// Composant memoizé pour le header
const ContactHeader = memo(({ imageLoaded, setImageLoaded, t }: { 
  imageLoaded: boolean; 
  setImageLoaded: (loaded: boolean) => void;
  t: (key: string) => string;
}) => (
  <motion.div 
    className="flex items-center gap-3"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    custom={0.1}
  >
    <div className="relative w-12 h-12">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-zinc-800 rounded-full animate-pulse" />
      )}
      <img
        src={avatarImage}
        alt={t('profile_picture')}
        width={48}
        height={48}
        className={`rounded-full w-full h-full object-cover transition-opacity duration-200 ${
          !imageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.currentTarget.src = '/fallback-avatar.jpeg';
        }}
      />
    </div>
    <h1 className="text-xl font-semibold text-white">Arthur Descourvieres</h1>
  </motion.div>
));

ContactHeader.displayName = 'ContactHeader';

// Composant memoizé pour le formulaire
const ContactForm = memo(({ 
  formData, 
  setFormData, 
  errors,
  isLoading, 
  onSubmit, 
  t 
}: {
  formData: FormData;
  setFormData: (data: FormData) => void;
  errors: FormErrors;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  t: (key: string) => string;
}) => (
  <form className="space-y-4" onSubmit={onSubmit}>
    <motion.div 
      className="space-y-2"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.3}
    >
      <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
      <Input
        id="email"
        type="email"
        placeholder={t('your_email')}
        className={`text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors ${
          errors.email ? 'border-red-500' : ''
        }`}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        pattern={EMAIL_REGEX.source}
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}
    </motion.div>
    <motion.div 
      className="space-y-2"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.4}
    >
      <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
      <Textarea
        id="message"
        placeholder={t('enter_message')}
        className={`text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 min-h-[120px] resize-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors ${
          errors.message ? 'border-red-500' : ''
        }`}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        minLength={MESSAGE_MIN_LENGTH}
        maxLength={MESSAGE_MAX_LENGTH}
      />
      {errors.message && (
        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
      )}
      <p className="text-xs text-zinc-500 mt-1">
        {formData.message.length}/{MESSAGE_MAX_LENGTH} {t('characters')}
      </p>
    </motion.div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.5}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200" />
      <Button 
        type="submit" 
        className="relative w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-violet-500/50 transition-all duration-200 hover:-translate-y-0.5"
        disabled={isLoading || Object.keys(errors).length > 0}
      >
        {isLoading ? t('sending') : t('send_message')}
      </Button>
    </motion.div>
  </form>
));

ContactForm.displayName = 'ContactForm';

export default function ContactPage() {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Validation du formulaire
  const validateForm = useCallback((data: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!EMAIL_REGEX.test(data.email)) {
      errors.email = t('invalid_email');
    }

    if (data.message.length < MESSAGE_MIN_LENGTH) {
      errors.message = t('message_too_short', { min: MESSAGE_MIN_LENGTH });
    } else if (data.message.length > MESSAGE_MAX_LENGTH) {
      errors.message = t('message_too_long', { max: MESSAGE_MAX_LENGTH });
    }

    return errors;
  }, [t]);

  // Mise à jour des erreurs lors de la modification du formulaire
  const handleFormDataChange = useCallback((newData: FormData) => {
    setFormData(newData);
    setErrors(validateForm(newData));
  }, [validateForm]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
        title: t('message_sent'),
        description: t('message_sent_desc'),
      });

      setFormData({ email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: t('error_title'),
        description: t('error_message'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [formData, t, toast, validateForm]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-zinc-950/30">
      <FloatingCircles count={6} opacity={0.15} speed={0.8} />
      <motion.div 
        className="w-full max-w-[425px]"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl shadow-xl p-6 sm:p-8 space-y-8">
          <ContactHeader 
            imageLoaded={imageLoaded} 
            setImageLoaded={setImageLoaded}
            t={t}
          />
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <p className="text-sm text-zinc-400">
              {t('contact_intro')}
            </p>
            <ContactForm 
              formData={formData}
              setFormData={handleFormDataChange}
              errors={errors}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              t={t}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 