import React from 'react';
import { ArrowRight, Activity, ShieldCheck, MapPin, HeartHandshake, Building2 } from 'lucide-react';
import { PageType } from '../types';

interface HeroProps {
    onNavigate: (page: PageType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24">
      
      {/* Fixed Background Layer - Stays put while content scrolls */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        {/* Changed gradient from dark to light slate/white for readability of dark text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 lg:w-3/4"></div>
        <div 
            className="w-full h-full bg-cover bg-center absolute right-0 top-0"
            style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTKpQu4zjAGkALAWueckGEjoizSW1plQIw50b-vOPon8rW0mU26Gvq3wJSjTm5cY8NXoe3z5gArnB3O12vo_65lfkP8nTRp6jSpDRtw5fWQkVwnPOUiqZTeDQag_YquNDn_jfQCARC2Cbu2Ty4C8CpneiZYT51RLaU78c_HFeTapi6ggl2igsIlQ2lroe3Eosg_piLo2Im_NPpgaLAWEpJkoJfx7b--3-pCfqlMhmks9YJ9q8I8c4boipfaIluzoxBWcONaTY82SI')",
                backgroundPosition: "center right"
            }}
        ></div>
      </div>

      {/* Reduced top margin (negative) to move content up visually */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 w-fit animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            PropTech Excellence Morocco
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Le <span className="text-primary">Smart Sourcing</span> immobilier
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            L'investissement au Maroc, simplifié
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group transform hover:scale-105"
            >
              Réserver mon Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-900 font-bold text-sm flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                100% de loyauté envers l'investisseur
            </div>
            <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-900 font-bold text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                B2B & Institutional Ready
            </div>
          </div>
        </div>

        {/* Floating UI Data Overlay */}
        <div className="hidden lg:flex items-center justify-center relative perspective-1000">
          <div className="glass-card p-8 rounded-2xl w-full max-w-md relative overflow-hidden transform rotate-y-12 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity className="w-32 h-32" />
            </div>
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-slate-900 font-bold tracking-tight text-lg">Analyse de Rendement IA</h3>
              <Activity className="text-primary w-6 h-6" />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Animated Bars */}
              <div className="h-32 flex items-end gap-3 px-2">
                {[40, 65, 100, 75, 85].map((height, i) => (
                    <div key={i} className="w-full relative group">
                        <div 
                            className="bg-primary rounded-t-sm transition-all duration-1000 ease-out"
                            style={{ 
                                height: `${height}%`,
                                opacity: 0.2 + (i * 0.15)
                            }}
                        ></div>
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}%
                        </div>
                    </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/40 border border-white/50 backdrop-blur-sm">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">ROI Projeté</p>
                  <p className="text-2xl font-black text-slate-900">+14.2%</p>
                </div>
                <div className="p-4 rounded-lg bg-white/40 border border-white/50 backdrop-blur-sm">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Risque</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <p className="text-2xl font-black text-slate-900">Faible</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 bg-white/30 p-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Vérification cadastrale en temps réel...</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -left-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};