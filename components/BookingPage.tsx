import React, { useEffect } from 'react';
import { FloatingBack } from './FloatingBack';
import { PageType } from '../types';
import { Lightbulb, Target, Coffee, Quote, MessageCircle, FileCheck } from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageType) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  
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
    <div className="min-h-screen bg-white pt-24 animate-fade-in pb-12">
      <FloatingBack onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 space-y-12 pt-4">
                
                {/* Header */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Votre Vision, <br/>Notre Expertise : <br/>
                        <span className="text-primary">L’Audit Découverte</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        L’investissement serein commence par une écoute attentive. Réservez un créneau de 30 minutes avec nos consultants pour poser les bases de votre projet au Maroc. Ce temps d'échange est le premier pas vers une stratégie sur-mesure, sans aucun engagement.
                    </p>
                </div>

                {/* The Process */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                        Le déroulé de notre échange :
                    </h3>
                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <div className="bg-slate-50 p-3 rounded-2xl h-fit text-primary border border-slate-100 shadow-sm">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Audit de votre projet</h4>
                                <p className="text-slate-500 mt-1 leading-relaxed">Nous analysons vos objectifs (rendement, résidence, patrimoine).</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-slate-50 p-3 rounded-2xl h-fit text-primary border border-slate-100 shadow-sm">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Conseil Flash</h4>
                                <p className="text-slate-500 mt-1 leading-relaxed">Réponses directes à vos interrogations sur le marché marocain.</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-slate-50 p-3 rounded-2xl h-fit text-primary border border-slate-100 shadow-sm">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Étude de faisabilité</h4>
                                <p className="text-slate-500 mt-1 leading-relaxed">Nous évaluons ensemble si l'accompagnement Ilyana Invest est le levier qu'il vous faut.</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-slate-50 p-3 rounded-2xl h-fit text-primary border border-slate-100 shadow-sm">
                                <Coffee className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Zéro pression</h4>
                                <p className="text-slate-500 mt-1 leading-relaxed">Une conversation fluide pour valider vos certitudes.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Column: Calendly */}
            <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative h-[1000px] sticky top-24">
                     <div className="bg-slate-900 text-white py-4 px-6 text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Réserver mon temps d'écoute
                     </div>
                     {/* Calendly inline widget begin */}
                     <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/xavier-ilyanainvest/30min?back=1&hide_gdpr_banner=1&primary_color=f16537" 
                        style={{ minWidth: '320px', height: '100%' }} 
                    />
                     {/* Calendly inline widget end */}
                </div>
            </div>

        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mt-20 border-t border-slate-200 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2">Ilyana Invest</h4>
                <p className="text-xs text-slate-500 max-w-md">
                    Le premier cabinet de conseil en investissement immobilier piloté par la data et l'IA souveraine au Royaume du Maroc.
                </p>
                <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
                    © 2024 Ilyana Invest. Tous droits réservés.
                </p>
            </div>
            <div className="flex gap-6 text-xs font-medium text-slate-500 uppercase tracking-wider">
                <button onClick={() => onNavigate('legal')} className="hover:text-primary transition-colors">Mentions Légales</button>
                <button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors">Confidentialité</button>
            </div>
        </div>
      </div>
    </div>
  );
};