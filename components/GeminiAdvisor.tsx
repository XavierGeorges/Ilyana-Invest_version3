import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Home, Layers, Map, Users, Calendar, Milestone } from 'lucide-react';
import { PageType } from '../types';

interface GeminiAdvisorProps {
  onNavigate: (page: PageType) => void;
}

export const GeminiAdvisor: React.FC<GeminiAdvisorProps> = ({ onNavigate }) => {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setIsOpen(false); // Close menu if we scroll back to top
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleNavigate = (page: PageType, sectionId?: string) => {
    setIsOpen(false);
    onNavigate(page);
    if (sectionId) {
        // Small delay to allow page transition
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  };

  return (
    <>
        {/* Menu Overlay */}
        <div 
            className={`fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
        ></div>

        <div 
            className={`fixed bottom-24 right-6 z-50 flex flex-col items-end gap-4 transition-all duration-500 pointer-events-none ${
                showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            {/* Menu Content */}
            <div 
                className={`bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-2 min-w-[240px] origin-bottom-right transition-all duration-300 ease-out transform ${
                    isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
                }`}
            >
                <div className="flex flex-col gap-1">
                    <button 
                        onClick={() => handleNavigate('home')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100/80 transition-colors text-slate-700 font-medium text-sm group"
                    >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                            <Home className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        Accueil
                    </button>

                    <button 
                        onClick={() => handleNavigate('home', 'services')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100/80 transition-colors text-slate-700 font-medium text-sm group"
                    >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                            <Layers className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        Nos Services
                    </button>

                    <button 
                        onClick={() => handleNavigate('home', 'roadmap')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100/80 transition-colors text-slate-700 font-medium text-sm group"
                    >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                            <Milestone className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        Notre Roadmap
                    </button>

                    <button 
                        onClick={() => handleNavigate('home', 'destinations')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100/80 transition-colors text-slate-700 font-medium text-sm group"
                    >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                            <Map className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        Destinations
                    </button>

                    <button 
                        onClick={() => handleNavigate('home', 'partners')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100/80 transition-colors text-slate-700 font-medium text-sm group"
                    >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                            <Users className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        Partenaires
                    </button>

                    <div className="h-px bg-slate-200 my-1"></div>

                    <button 
                        onClick={() => handleNavigate('booking')}
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors text-white font-bold text-sm group shadow-lg shadow-slate-900/20"
                    >
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>Réserver un Audit</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`pointer-events-auto w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isOpen 
                        ? 'bg-slate-900 text-white rotate-90' 
                        : 'bg-white/80 backdrop-blur-md border border-white/40 text-slate-700 hover:bg-white'
                }`}
                aria-label="Menu de navigation rapide"
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
    </>
  );
};