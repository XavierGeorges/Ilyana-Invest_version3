import React, { useState, useEffect } from 'react';
import { ArrowRight, Key } from 'lucide-react';
import { PageType } from '../types';

interface StickyBottomBarProps {
  onNavigate: (page: PageType) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the Hero section (approx 80% of viewport height)
      const threshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-collapse timer
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isExpanded) {
      timeout = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      onNavigate('booking');
    }
  };

  return (
    <div 
        className={`fixed bottom-8 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-500 transform pointer-events-none ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
    >
      <button
        onClick={handleClick}
        className={`pointer-events-auto group relative overflow-hidden bg-slate-900/90 backdrop-blur-xl text-white border border-white/10 shadow-2xl shadow-slate-900/20 rounded-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isExpanded ? 'pl-6 pr-2 py-2 gap-4' : 'p-3 gap-0 hover:scale-110'
        }`}
      >
        {/* Countdown Bar */}
        {isExpanded && (
            <div 
                className="absolute bottom-0 left-0 h-[2px] bg-primary/70 z-10"
                style={{ 
                    width: '100%',
                    animation: 'countdown 5s linear forwards'
                }}
            />
        )}
        <style>{`
            @keyframes countdown {
                from { width: 100%; }
                to { width: 0%; }
            }
        `}</style>

        <div className="flex items-center gap-3">
            <Key className={`w-4 h-4 text-primary ${!isExpanded && 'animate-pulse'}`} />
            
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
            }`}>
                <span className="font-bold text-sm md:text-base tracking-wide whitespace-nowrap">Le Maroc clés en main</span>
            </div>
        </div>
        
        <div className={`bg-primary text-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden flex items-center justify-center ${
            isExpanded ? 'w-8 h-8 opacity-100 ml-0' : 'w-0 h-0 opacity-0 ml-0'
        }`}>
            <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};
