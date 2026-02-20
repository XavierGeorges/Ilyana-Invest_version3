import React from 'react';
import { Compass, Cpu, FileSearch, Key, ArrowRight } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const steps = [
    { 
        id: "01",
        time: "J-0", 
        title: "Discovery Call", 
        desc: "Audit du profil investisseur & Cahier des charges.",
        icon: <Compass className="w-6 h-6" />
    },
    { 
        id: "02",
        time: "J-7", 
        title: "Setup & Algo", 
        desc: "Lancement du sourcing sur bases propriétaires.",
        icon: <Cpu className="w-6 h-6" />
    },
    { 
        id: "03",
        time: "J-45", 
        title: "The Shortlist", 
        desc: "Note d'Analyse : ROI, Risque & Cadastre.",
        icon: <FileSearch className="w-6 h-6" />
    },
    { 
        id: "04",
        time: "Closing", 
        title: "Secure & Sign", 
        desc: "Notaire, transfert de fonds & remise des clés.",
        icon: <Key className="w-6 h-6" />,
        isLast: true
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative z-20 rounded-b-[50px] md:rounded-b-[80px]" id="roadmap">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
             <span className="w-2 h-2 rounded-full bg-primary"></span>
             Processus Standardisé
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Cap sur J+60</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Un protocole rigoureux, rythmé par la data, pour transformer une intention en actif sécurisé en moins de 2 mois.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0">
             {/* Gradient Progress Overlay */}
             <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Connector Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-slate-100 z-0">
             <div className="absolute top-0 h-3/4 w-full bg-gradient-to-b from-primary/20 via-primary to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex lg:flex-col items-start lg:items-center group">
                
                {/* Timeline Node */}
                <div className={`
                    flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-0 lg:mb-8 shadow-xl transition-all duration-300 z-10 relative
                    ${step.isLast 
                        ? 'bg-slate-900 text-white border-4 border-white shadow-slate-900/20 scale-110' 
                        : 'bg-white text-primary border-4 border-slate-50 group-hover:border-primary/20 group-hover:scale-110'
                    }
                `}>
                  {step.icon}
                  
                  {/* Pulse effect for last item */}
                  {step.isLast && (
                      <span className="absolute -inset-1 rounded-2xl bg-slate-900 opacity-20 animate-ping"></span>
                  )}
                </div>

                {/* Content Card */}
                <div className="ml-6 lg:ml-0 lg:text-center flex-1 pt-2 lg:pt-0">
                    <div className="inline-block px-3 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        {step.time}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                    </p>
                </div>

                {/* Mobile Connector Arrow (visual only) */}
                {!step.isLast && (
                    <div className="lg:hidden absolute left-[31px] top-20 bottom-[-20px] flex flex-col items-center justify-center">
                        {/* Space filler for the line defined in parent */}
                    </div>
                )}
                
                {/* Desktop Arrow (visual only) */}
                {!step.isLast && (
                    <div className="hidden lg:block absolute top-10 -right-4 z-0 text-slate-200">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                )}

              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <p className="text-sm font-medium text-slate-400 italic">
                *Délais moyens constatés sur nos dossiers 2024.
            </p>
        </div>
      </div>
    </section>
  );
};