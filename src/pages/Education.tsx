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
      <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-indigo-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-indigo-400" />
          <h3 className="font-medium text-lg">{year}</h3>
        </div>
        <div className="flex items-center gap-2 mb-3 text-indigo-400">
          <Building2 className="w-4 h-4" />
          <span className="italic">{company}</span>
        </div>
        <p className="text-zinc-300">{highlightDuration(description)}</p>
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
    <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-indigo-500/20">
      <h3 className="font-medium mb-3 text-lg flex items-center gap-2">
        <Code className="w-5 h-5 text-indigo-400" />
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <GradientText 
              text="ARTHUR DESCOURVIERES"
              gradient="linear-gradient(90deg, #6366f1 0%, #8b5cf6 20%, #ec4899 50%, #8b5cf6 80%, #6366f1 100%)"
              neon={false}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </h1>
          <p className="text-zinc-300 text-lg mb-2">{t('fullstack_dev')}</p>
          <div className="flex flex-col items-center gap-1 mb-6">
            <span className="text-zinc-400 text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400 inline-block" />
              {t('location')} - 22 ans (21/02/2003)
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <AnimateIcon animateOnHover animation="default-loop">
              <Button
                onClick={() => window.open('/assets/cv/CV.pdf', '_blank')}
                className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <Download className="w-4 h-4" />
                {t('download_cv')}
              </Button>
            </AnimateIcon>
            <AnimateIcon animateOnHover >
              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <MessageCircleQuestion className="w-4 h-4" />
                {t('contact_me') || 'Me contacter'}
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
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Monitor className="w-6 h-6 text-indigo-400" />
                {t('skills_education')}
              </h2>
              <div className="grid gap-6">
                {/* Développement */}
                <SkillCard title={t('web_development')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-blue-400 font-medium">{t('languages_frameworks')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">JavaScript (React, Node.js, Hono)</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">PHP (Laravel, Symfony)</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">HTML, CSS, Tailwind</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-green-400 font-medium">{t('tools_others')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Docker</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Git</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">MySQL</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-yellow-400 font-medium">{t('languages_license')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">{t('english_level')}</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">{t('drivers_license')}</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Design & Multimédia */}
                <SkillCard title={t('design_multimedia')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-red-400 font-medium">{t('adobe_figma')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Illustrator</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Photoshop</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">InDesign</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Premiere Pro</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Figma</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Compétences Techniques */}
                <SkillCard title={t('technical_skills')}>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_4')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_5')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>{t('skill_6')}</span>
                    </li>
                  </ul>
                </SkillCard>
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
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
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                {t('education_title')}
              </h2>
              <motion.div 
                whileHover={{ y: -2 }}
                className="relative"
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-violet-500/30">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">{t('education_bac2')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">{t('education_tremplin')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">{t('education_bacpro')}</span>
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