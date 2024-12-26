import React from 'react';
import { GraduationCap, Mail, Phone, User, ChevronDown, Code, Monitor, Calendar, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const FloatingCircles = () => {
  const circles = useMemo(() => 
    [...Array(4)].map((_, i) => ({
      background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.05)' : 'rgba(167, 139, 250, 0.05)',
      width: `${Math.random() * 300 + 200}px`,
      height: `${Math.random() * 300 + 200}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animateX: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
      animateY: [0, Math.random() * 150 - 75, Math.random() * 200 - 100, 0],
      rotate: [0, Math.random() * 45 - 22.5],
      duration: Math.random() * 20 + 25,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
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
            scale: [1, 1.1, 0.95, 1],
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

const ExperienceCard = ({ year, company, description }: { year: string; company: string; description: string }) => {
  // Fonction pour extraire et mettre en évidence la durée
  const highlightDuration = (text: string) => {
    const durationRegex = /(\d+(?:\s*(?:mois|ans?))\b)/;
    return text.split(durationRegex).map((part, index) => 
      durationRegex.test(part) ? 
        <span key={index} className="text-yellow-400">{part}</span> : 
        <span key={index}>{part}</span>
    );
  };

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
};

const SkillCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
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
);

const CoordinatesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <span className="text-white font-medium">MES INFORMATIONS</span>
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
                <p>21 ans</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default function Education() {
  return (
    <div className="min-h-screen bg-zinc-950/30 p-4 sm:p-8 relative">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-8 mt-16 sm:mt-20 lg:mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            ARTHUR DESCOURVIERES
          </h1>
          <p className="text-zinc-300 text-lg">Développeur & Designer</p>
        </motion.div>

        {/* Informations - Nouvelle version desktop */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CoordinatesCard />
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {/* Colonne principale - maintenant en pleine largeur */}
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
                COMPÉTENCES
              </h2>
              <div className="grid gap-6">
                {/* Développement */}
                <SkillCard title="Développement">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-blue-400 font-medium">Langages & Frameworks</h4>
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
                <SkillCard title="Design & Multimédia">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-red-400 font-medium">Suite Adobe</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Illustrator</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Photoshop</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">InDesign</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-red-500/20">Premiere Pro</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-green-400 font-medium">Audio & Vidéo</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Audacity</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Flowblade</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Openshot</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-green-500/20">Gimp</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-yellow-400 font-medium">Autres logiciels</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">Reaper</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">Excel</span>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 text-sm border border-yellow-500/20">FL-Studio</span>
                      </div>
                    </div>
                  </div>
                </SkillCard>

                {/* Compétences Techniques */}
                <SkillCard title="Compétences Techniques">
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Développement d'applications web responsive avec React et TypeScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Intégration web avec HTML5, CSS3 (Tailwind CSS) et JavaScript moderne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Conception d'interfaces utilisateur (UI) et expérience utilisateur (UX)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Création graphique et retouche photo pour le web (Photoshop, Illustrator)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Gestion de version avec Git et travail en équipe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                      <span>Développement back-end avec Node.js et PHP</span>
                    </li>
                  </ul>
                </SkillCard>
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                EXPÉRIENCES
              </h2>
              <div className="space-y-4">
                <ExperienceCard 
                  year="2024"
                  company="ID'Intérim"
                  description="Intérim dans le développement web pour une durée de 16 mois"
                />
                <ExperienceCard 
                  year="2021"
                  company="Albatros multimédia"
                  description="Contrat d'apprentissage sur une durée de 2 ans (Entreprise spécialisé dans la création graphique, la signalétique et l'impression grand format)."
                />
                <ExperienceCard 
                  year="2020"
                  company="Publand"
                  description="Contrat d'apprentissage sur une durée de 8 mois à Marseille, (Entreprise d'impression sur tout support tel que pose d'adhésif sur véhicules, flocage sur textiles, fabrication d'enseigne lumineuses)."
                />
                <ExperienceCard 
                  year="2018"
                  company="Valentin Audiovisuel"
                  description="Stage d'observation à Montbéliard (Entreprise d'audio visuel), durant la même période plusieurs courts métrages tournés indépendamment."
                />
              </div>
            </section>

            {/* Formations */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                FORMATIONS
              </h2>
              <motion.div 
                whileHover={{ y: -2 }}
                className="relative"
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-violet-500/30">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">Formation Développeur Web & Mobile - La Plateforme_ (<span className="text-yellow-400">16 mois</span>)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">Parcours tremplin numérique (<span className="text-yellow-400">3 mois</span>)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-zinc-300">Apprentissage BAC PRO AMA CV (Artisanat et Métiers d'Art option communication visuelle plurimédia) (<span className="text-yellow-400">2 ans</span>)</span>
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