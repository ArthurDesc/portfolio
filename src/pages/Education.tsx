import React, { useEffect, useState, useMemo } from 'react';
import { GraduationCap, Mail, Phone, User, ChevronDown, Code, Monitor, Calendar, Building2, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { FloatingCircles } from '@/components/shared/FloatingCircles';

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
        <p className="text-zinc-300">{highlightDuration(t(descriptionKey))}</p>
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

// Mémorisation du composant CoordinatesCard
const CoordinatesCard = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="sticky top-4">
      <motion.div
        className="bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden"
        animate={{ height: isOpen ? "auto" : "48px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 h-12 flex items-center justify-between hover:bg-zinc-800/50 transition-colors duration-200"
        >
          <span className="text-white font-medium">{t('my_info')}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4 text-indigo-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-4 space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-indigo-400" />
                <p>07 50 02 81 40</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                <p>arthur.descourvieres@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <User className="w-5 h-5 text-indigo-400" />
                <p>{t('age')}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});



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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            ARTHUR DESCOURVIERES
          </h1>
          <p className="text-zinc-300 text-lg mb-6">{t('developer_designer')}</p>
          <Button
            onClick={() => window.open('/assets/cv/CV.pdf', '_blank')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-2 flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            {t('download_cv')}
          </Button>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CoordinatesCard />
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
                <SkillCard title={t('development')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-blue-400 font-medium">{t('languages_frameworks')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">PHP</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">JavaScript</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">TypeScript</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">React</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-blue-500/20">Node.js</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Design & Multimédia */}
                <SkillCard title={t('design_multimedia')}>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-red-400 font-medium">{t('adobe_suite')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Illustrator</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Photoshop</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">InDesign</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Premiere Pro</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-green-400 font-medium">{t('audio_video')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Audacity</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Flowblade</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Openshot</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Gimp</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-yellow-400 font-medium">{t('other_software')}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">Reaper</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">Excel</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">FL-Studio</span>
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
                {t('experiences')}
              </h2>
              <div className="space-y-4">
                <ExperienceCard 
                  year="2024"
                  company="ID'Intérim"
                  descriptionKey="exp_interim"
                />
                <ExperienceCard 
                  year="2021"
                  company="Albatros multimédia"
                  descriptionKey="exp_albatros"
                />
                <ExperienceCard 
                  year="2020"
                  company="Publand"
                  descriptionKey="exp_publand"
                />
                <ExperienceCard 
                  year="2018"
                  company="Valentin Audiovisuel"
                  descriptionKey="exp_valentin"
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
                      <span className="text-zinc-300">{t('education_1')} (<span className="text-yellow-400">16 {t('duration')}</span>)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">{t('education_2')} (<span className="text-yellow-400">3 {t('duration')}</span>)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">{t('education_3')} (<span className="text-yellow-400">2 {t('duration_years')}</span>)</span>
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