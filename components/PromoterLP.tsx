import React, { useEffect } from 'react';
import { ArrowLeft, Cpu, Search, Workflow, Zap, Quote, MessageCircle, FileCode } from 'lucide-react';
import { PageType } from '../types';
import { FloatingBack } from './FloatingBack';

interface PromoterLPProps {
  onNavigate: (page: PageType) => void;
}

export const PromoterLP: React.FC<PromoterLPProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Charger le script Calendly dynamiquement
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);

    return () => {
        head?.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 animate-fade-in">
      <FloatingBack onNavigate={onNavigate} targetSection="partners" />
      
      {/* Navigation Bar */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-800 sticky top-20 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'écosystème
          </button>
          <span className="text-sm font-bold text-primary uppercase tracking-wider hidden sm:block">
            Georges & Partners — Division R&D
          </span>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-primary text-sm font-bold uppercase tracking-widest mb-8">
                    <Cpu className="w-4 h-4" />
                    Infrastructure IA
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Votre Audit Téléphonique <br/>
                    <span className="text-primary text-2xl">(30 min – Sans engagement)</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10">
                    Prêt à passer à l'échelle supérieure ? Réservez un temps d'écoute pour un diagnostic technique de votre structure.
                </p>

                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-primary" />
                    Le déroulé de l'échange :
                </h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">1</div>
                        <div>
                            <h4 className="text-white font-bold">Immersion</h4>
                            <p className="text-slate-500 text-sm">Compréhension de votre métier et de vos points de friction.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">2</div>
                        <div>
                            <h4 className="text-white font-bold">Diagnostic</h4>
                            <p className="text-slate-500 text-sm">Repérage des workflows automatisables de suite.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">3</div>
                        <div>
                            <h4 className="text-white font-bold">Feuille de route</h4>
                            <p className="text-slate-500 text-sm">Présentation des solutions IA concrètes et du gain de temps estimé.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content - Calendly */}
            <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl overflow-hidden h-[1000px]">
                    <div className="bg-slate-100 text-slate-900 py-3 px-6 text-center font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 border-b border-slate-200">
                        <MessageCircle className="w-4 h-4" />
                        Réserver mon audit technique
                     </div>
                    {/* Calendly inline widget begin */}
                     <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/xavier-audras3/30min?hide_gdpr_banner=1&primary_color=f16537" 
                        style={{ minWidth: '320px', height: '100%' }} 
                    />
                     {/* Calendly inline widget end */}
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};