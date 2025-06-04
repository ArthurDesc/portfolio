import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { GlobeIcon } from './icons/GlobeIcon';
import { useState } from 'react';

const FrenchFlag = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="18" fill="#002395"/>
    <rect x="8" width="8" height="18" fill="#FFFFFF"/>
    <rect x="16" width="8" height="18" fill="#ED2939"/>
  </svg>
);

const EnglishFlag = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="18" fill="#012169"/>
    <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
    <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="6"/>
    <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2"/>
  </svg>
);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <Button 
        variant="navGhost"
        className={cn(
          "text-white rounded-full transition-all duration-300",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "focus:outline-none",
          "!shadow-none !border-none",
          "p-0 w-8 h-8 sm:w-9 sm:h-9",
          "relative"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GlobeIcon 
          className="w-4 h-4 sm:w-5 sm:h-5"
          isHovered={isHovered}
        />
      </Button>

      <div className={cn(
        "absolute right-0 mt-2 w-32",
        "bg-dark-dropdown rounded-xl border border-zinc-800",
        "invisible opacity-0 translate-y-2",
        "transition-all duration-200 ease-in-out",
        "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
      )}>
        {/* Invisible bridge to prevent gap */}
        <div className="absolute -top-2 left-0 w-full h-2" />
        
        <div 
          className={cn(
            "flex items-center px-3 py-1.5 text-sm cursor-pointer",
            "hover:bg-zinc-800/50 transition-colors duration-200",
            i18n.language === 'fr' ? "text-white font-medium" : "text-zinc-500"
          )}
          onClick={() => changeLanguage('fr')}
        >
          <FrenchFlag />
          Français
        </div>
        <div 
          className={cn(
            "flex items-center px-3 py-1.5 text-sm cursor-pointer",
            "hover:bg-zinc-800/50 transition-colors duration-200",
            i18n.language === 'en' ? "text-white font-medium" : "text-zinc-500"
          )}
          onClick={() => changeLanguage('en')}
        >
          <EnglishFlag />
          English
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector; 