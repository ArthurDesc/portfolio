import React, { useEffect, useState, useMemo } from 'react';
import { GraduationCap, Code, Monitor, Calendar, Building2, MapPin } from "lucide-react";
import { Download } from "@/components/animate-ui/icons/download";
import { MessageCircleQuestion } from "@/components/animate-ui/icons/message-circle-question";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { FloatingCircles } from '@/components/shared/FloatingCircles';
import { GradientText } from '@/components/animate-ui/text/gradient';

// Ajout des nouvelles descriptions d'expérience
const experienceDescriptions: Record<string, string> = {
  exp_interim_new: `Développement et maintenance de sites web. Intégration et optimisation des performances. Utilisation de PHP ou Node.js pour diverses applications.`,
  exp_graphisme_new: `Conception graphique (suite Adobe) et prépresse. Impression grand format et pose de signalétique. Flocage de vêtements, covering de véhicules, marquage textile, fabrication d'enseignes lumineuses.`
};

// Mémorisation du composant ExperienceCard
const ExperienceCard = React.memo(({ year, company, descriptionKey }: { year: string; company: string; descriptionKey: string }) => {
  const { t } = useTranslation();
  
  const highlightDuration = useMemo(() => (text: string) => {
    const durationRegex = /(\d+(?:\s*(?:mois|ans?))\b)/;
    return text.split(durationRegex).map((part, index) => 
      durationRegex.test(part) ? 
        <span key={index} className="text-yellow-400">{part}</span> : 
        <span key={index}>{part}</span>
    );
  }, []);

  // Utiliser la description personnalisée si elle existe
  const description = experienceDescriptions[descriptionKey] || t(descriptionKey);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative"
    >
      <div className="bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-indigo-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
          <h3 className="font-medium text-base sm:text-lg">{year}</h3>
        </div>
        <div className="flex items-center gap-2 mb-3 text-indigo-400">
          <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="italic text-sm sm:text-base">{company}</span>
        </div>
        <p className="text-zinc-300 text-sm sm:text-base">{highlightDuration(description)}</p>
      </div>
    </motion.div>
  );
});

// Mémorisation du composant SkillCard
const SkillCard = React.memo(({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="relative"
  >
    <div className="bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-indigo-500/20">
      <h3 className="font-medium mb-3 text-base sm:text-lg flex items-center gap-2">
        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
        {title}
      </h3>
      {children}
    </div>
  </motion.div>
));


export default function Education() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950/30 p-4 sm:p-8 relative">
      <FloatingCircles count={4} opacity={0.05} />
      <div className={`max-w-7xl mx-auto relative ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <motion.div 
          className="text-center mb-8 mt-16 sm:mt-20 lg:mt-12"
          initial={false}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText 
              text="ARTHUR DESCOURVIERES"
              gradient="linear-gradient(90deg, #6366f1 0%, #8b5cf6 20%, #ec4899 50%, #8b5cf6 80%, #6366f1 100%)"
              neon={false}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg mb-2">{t('fullstack_dev')}</p>
          <div className="flex flex-col items-center gap-1 mb-6">
            <span className="text-zinc-400 text-sm sm:text-base flex items-center gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 inline-block" />
              {t('location')} - 22 ans (21/02/2003)
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <AnimateIcon animateOnHover animation="default-loop">
              <Button
                onClick={() => window.open('/assets/cv/CV.pdf', '_blank')}
                className="group relative bg-indigo-500 text-white rounded-lg px-4 py-2 sm:px-6 text-sm sm:text-base flex items-center gap-2 transition-all duration-500 overflow-hidden
                          hover:bg-indigo-600 hover:scale-110 hover:z-10
                          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                          before:translate-x-[-100%] before:transition-transform before:duration-700
                          hover:before:translate-x-[100%]
                          after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-all after:duration-500
                          after:bg-gradient-to-r after:from-indigo-400/50 after:via-blue-400/50 after:to-purple-400/50
                          hover:after:opacity-100 hover:after:blur-xl hover:after:scale-150
                          hover:shadow-[0_0_30px_rgba(99,102,241,0.6),0_0_60px_rgba(99,102,241,0.4),0_0_90px_rgba(99,102,241,0.2)]"
              >
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('download_cv')}</span>
              </Button>
            </AnimateIcon>
            <AnimateIcon animateOnHover >
              <Button
                onClick={() => window.location.href = '/contact'}
                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-4 py-2 sm:px-6 text-sm sm:text-base flex items-center gap-2 transition-all duration-500 overflow-hidden
                          hover:from-purple-600 hover:to-pink-600 hover:scale-110 hover:z-10
                          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                          before:translate-x-[-100%] before:transition-transform before:duration-700
                          hover:before:translate-x-[100%]
                          after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-all after:duration-500
                          after:bg-gradient-to-r after:from-purple-400/50 after:via-pink-400/50 after:to-purple-400/50
                          hover:after:opacity-100 hover:after:blur-xl hover:after:scale-150
                          hover:shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(236,72,153,0.4),0_0_90px_rgba(147,51,234,0.2)]"
              >
                <MessageCircleQuestion className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('contact_me') || 'Me contacter'}</span>
              </Button>
            </AnimateIcon>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Compétences */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                {t('skills_education')}
              </h2>
              <div className="grid gap-6">
                {/* Développement */}
                <SkillCard title={t('web_development')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-blue-400 font-medium text-sm sm:text-base">{t('languages_frameworks')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-blue-500/20 flex items-center gap-1 sm:gap-2">
                          <img src="/src/assets/optimized/icons/js-optimized.webp" alt="JavaScript" className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">JavaScript (React, Node.js, Hono)</span>
                          <span className="sm:hidden">JS/React/Node</span>
                          <img src="/src/assets/optimized/icons/react-optimized.webp" alt="React" className="w-3 h-3 sm:w-4 sm:h-4" />
                          <img src="/src/assets/optimized/icons/node-optimized.webp" alt="Node.js" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-blue-500/20 flex items-center gap-1 sm:gap-2">
                          <img src="/src/assets/optimized/icons/php-optimized.webp" alt="PHP" className="w-auto h-3 sm:h-4" />
                          <span className="hidden sm:inline">PHP (Laravel, Symfony)</span>
                          <span className="sm:hidden">PHP</span>
                        </span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-blue-500/20 flex items-center gap-1 sm:gap-2">
                          Tailwind
                          <img src="/src/assets/optimized/icons/Tailwind.webp" alt="Tailwind" className="w-auto h-2 sm:h-3" />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-green-400 font-medium text-sm sm:text-base">{t('tools_others')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-green-500/20 flex items-center gap-1 sm:gap-2">
                          <img src="/src/assets/optimized/icons/docker.webp" alt="Docker" className="w-3 h-3 sm:w-4 sm:h-4" />
                          Docker
                        </span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-green-500/20 flex items-center gap-1 sm:gap-2">
                          <img src="/src/assets/optimized/icons/git.webp" alt="Git" className="w-3 h-3 sm:w-4 sm:h-4" />
                          Git
                        </span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-green-500/20 flex items-center gap-1 sm:gap-2">
                          <img src="/src/assets/optimized/icons/sql-optimized.webp" alt="MySQL" className="w-auto h-3 sm:h-4"/>
                          MySQL
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-yellow-400 font-medium text-sm sm:text-base">{t('languages_license')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-yellow-500/20">{t('english_level')}</span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-yellow-500/20">{t('drivers_license')}</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Design & Multimédia */}
                <SkillCard title={t('design_multimedia')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-red-400 font-medium text-sm sm:text-base">{t('adobe_figma')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-red-500/20">Illustrator</span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-red-500/20">Photoshop</span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-red-500/20">InDesign</span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-red-500/20">Premiere Pro</span>
                        <span className="px-2 py-1 sm:px-3 bg-zinc-800/50 rounded-full text-zinc-300 text-xs sm:text-sm border border-red-500/20">Figma</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Compétences Techniques */}
                <SkillCard title={t('technical_skills')}>
                  <ul className="space-y-2 sm:space-y-3 text-zinc-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_4')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_5')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span className="text-sm sm:text-base">{t('skill_6')}</span>
                    </li>
                  </ul>
                </SkillCard>
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                {t('experiences_title')}
              </h2>
              <div className="space-y-4">
                <ExperienceCard 
                  year="2024-2025"
                  company="LaPlateforme"
                  descriptionKey="exp_interim_new"
                />
                <ExperienceCard 
                  year="2020-2023"
                  company={t('apprentice_title')}
                  descriptionKey="exp_graphisme_new"
                />
              </div>
            </section>

            {/* Formations */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                {t('education_title')}
              </h2>
              <motion.div 
                whileHover={{ y: -2 }}
                className="relative"
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-violet-500/30">
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300 text-sm sm:text-base">{t('education_bac2')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300 text-sm sm:text-base">{t('education_tremplin')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300 text-sm sm:text-base">{t('education_bacpro')}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}