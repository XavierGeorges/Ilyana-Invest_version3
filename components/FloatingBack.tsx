import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageType } from '../types';

interface FloatingBackProps {
  onNavigate: (page: PageType) => void;
  targetSection?: string;
}

export const FloatingBack: React.FC<FloatingBackProps> = ({ onNavigate, targetSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après un scroll de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    onNavigate('home');
    
    if (targetSection) {
        // Petit délai pour laisser le temps à la page Home de se monter
        setTimeout(() => {
            const element = document.getElementById(targetSection);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Retour à la section précédente"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};