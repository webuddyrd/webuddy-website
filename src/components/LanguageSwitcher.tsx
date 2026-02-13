import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '../utils/cn';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
        "text-white hover:bg-white/10",
        className
      )}
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span className="text-sm font-medium uppercase">{i18n.language.split('-')[0]}</span>
    </button>
  );
}
