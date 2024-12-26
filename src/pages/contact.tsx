import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import avatarImage from "@/assets/pictures/avatar.webp"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"
import { useTranslation } from 'react-i18next'

const FloatingCircles = () => {
  const circles = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(167, 139, 250, 0.15)',
      width: `${Math.random() * 400 + 200}px`,
      height: `${Math.random() * 400 + 200}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animateX: [0, Math.random() * 300 - 150, Math.random() * 200 - 100, 0],
      animateY: [0, Math.random() * 200 - 100, Math.random() * 300 - 150, 0],
      rotate: [0, Math.random() * 90 - 45],
      duration: Math.random() * 15 + 20,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            background: circle.background,
            width: circle.width,
            height: circle.height,
            left: circle.left,
            top: circle.top,
          }}
          animate={{
            x: circle.animateX,
            y: circle.animateY,
            scale: [1, 1.2, 0.9, 1],
            rotate: circle.rotate,
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1]
          }}
        />
      ))}
    </div>
  );
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (error) {
      toast({
        title: t('error_title'),
        description: t('error_message'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-zinc-950/30">
      <FloatingCircles />
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
                alt={t('profile_picture')}
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
              {t('contact_intro')}
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  placeholder={t('your_email')}
                  className="text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
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
                  placeholder={t('enter_message')}
                  className="text-sm bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 min-h-[120px] resize-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-transparent transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
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
                  disabled={isLoading}
                >
                  {isLoading ? t('sending') : t('send_message')}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 