import { GraduationCap, Mail, Phone, User, ChevronDown, Code, Monitor, Calendar, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(167, 139, 250, 0.15)',
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 300 - 150, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, Math.random() * 90 - 45],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1]
          }}
        />
      ))}
    </div>
  )
}

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
      <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-violet-500/30">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-violet-400" />
          <h3 className="font-medium text-lg">{year}</h3>
        </div>
        <div className="flex items-center gap-2 mb-3 text-violet-400">
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
    <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-200 hover:bg-zinc-800/50 hover:border-violet-500/30">
      <h3 className="font-medium mb-3 text-lg flex items-center gap-2">
        <Code className="w-5 h-5 text-violet-400" />
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
        className="bg-zinc-900/90 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden"
        animate={{ height: isOpen ? "auto" : "48px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 h-12 flex items-center justify-between hover:bg-zinc-800/50 transition-colors duration-200"
        >
          <span className="text-white font-medium">MES COORDONNÉES</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4 text-violet-400" />
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
                <Phone className="w-5 h-5 text-violet-400" />
                <p>07 50 02 81 40</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-400" />
                <p>arthur.descourvieres@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <User className="w-5 h-5 text-violet-400" />
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
            ARTHUR DESCOURVIERES
          </h1>
          <p className="text-zinc-400 text-lg">Développeur & Designer</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Colonne principale */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Compétences */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-violet-400 flex items-center gap-2">
                <Monitor className="w-6 h-6" />
                COMPÉTENCES
              </h2>
              <div className="grid gap-4">
                <SkillCard title="Logiciels utilisés">
                  <div className="space-y-2 text-zinc-300">
                    <p className="text-blue-400">Langages de programmation : 
                      <span className="text-white"> PHP, JavaScript, TypeScript, React</span>
                    </p>
                    <p className="text-violet-400">Environnement de développement : 
                      <span className="text-white">VS Code</span>
                    </p>
                    <p className="text-red-400">Suite Adobe : 
                      <span className="text-white">Illustrator, Photoshop, InDesign, Premiere Pro</span>
                    </p>
                    <p className="text-green-400">Audio : 
                      <span className="text-white">Audacity, Flowblade, Openshot et Gimp</span>
                    </p>
                  </div>
                </SkillCard>
                <SkillCard title="Logiciels avec un minimum de notions">
                  <p className="text-zinc-300">Reaper, Excel et FL-Studio.</p>
                </SkillCard>
                <SkillCard title="Autres compétences">
                  <ul className="list-none space-y-2 text-zinc-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      Notions sur les logiciels de PAO (création graphique, prépresse)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      La pose d'adhésif, le flocage de vêtements, l'impression grand format
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      La fabrication et la pose d'enseigne, le covering de voiture
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      Notions sur des logiciels de montage vidéo, photo, audio, et une chaîne YouTube
                    </li>
                  </ul>
                </SkillCard>
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-violet-400 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
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
              <h2 className="text-2xl font-semibold mb-6 text-violet-400 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
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

          {/* Colonne de droite - Coordonnées */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CoordinatesCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 