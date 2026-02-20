import React from 'react';
import { ShieldCheck, FileSearch, Scale, Building, Search, Cpu, CheckCircle2 } from 'lucide-react';

interface CheckpointProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
  };
}

const MotherboardCard: React.FC<CheckpointProps> = ({ item }) => {
  return (
    <div className="group relative bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden hover:border-emerald-500/50 transition-colors duration-500 h-full flex flex-col">
      
      {/* Circuit Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`, 
            backgroundSize: '20px 20px' 
        }}
      ></div>

      {/* Decorative Circuit Lines (Corners) */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-slate-700 rounded-tl-xl opacity-50 group-hover:border-emerald-500/30 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-700 rounded-br-xl opacity-50 group-hover:border-emerald-500/30 transition-colors"></div>

      {/* Glowing 'Connector' Dot */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
         <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">sys_check</span>
         <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-300"></div>
      </div>

      {/* Icon 'Socket' */}
      <div className="relative mb-6">
        <div className="w-14 h-14 bg-slate-950 rounded-lg border border-slate-700 flex items-center justify-center shadow-inner group-hover:shadow-[inset_0_0_15px_rgba(16,185,129,0.1)] transition-all">
             <div className="text-slate-400 group-hover:text-emerald-400 transition-colors duration-300">
                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
             </div>
        </div>
        {/* Connector Line from Icon */}
        <div className="absolute top-1/2 left-14 w-8 h-[1px] bg-slate-700 group-hover:bg-emerald-500/50 transition-colors"></div>
        <div className="absolute top-1/2 left-[calc(3.5rem+2rem)] w-1 h-1 bg-slate-600 rounded-full group-hover:bg-emerald-400 transition-colors"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-4">
            <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-950/30 border border-emerald-900/50 px-2 py-0.5 rounded mb-2 inline-block">
                {item.subtitle}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-50 transition-colors">
                {item.title}
            </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed font-light border-l-2 border-slate-800 pl-4 group-hover:border-emerald-500/30 transition-colors mb-6 flex-1">
            {item.description}
        </p>

        {/* Footer 'Code' */}
        <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-mono text-slate-500">MODULE_ID: {item.id}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-800 group-hover:text-emerald-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export const DueDiligence: React.FC = () => {
  const checkpoints = [
    {
      id: "LEG_01",
      title: "Vérification Hypothécaire",
      subtitle: "CONSERVATION FONCIÈRE",
      description: "Scan complet du certificat de propriété. Détection des saisies, hypothèques cachées ou litiges dormants avant toute transaction.",
      icon: <FileSearch />
    },
    {
      id: "URB_02",
      title: "Audit Urbanistique",
      subtitle: "NOTE DE RENSEIGNEMENT",
      description: "Analyse croisée des plans d'aménagement. Validation des droits à construire, du zonage et de la conformité cadastrale.",
      icon: <Building />
    },
    {
      id: "FIN_03",
      title: "Conformité VNR",
      subtitle: "OFFICE DES CHANGES",
      description: "Validation de la Valeur Non Révisable pour garantir contractuellement la convertibilité et le rapatriement futur de vos fonds.",
      icon: <Scale />
    },
    {
      id: "DEV_04",
      title: "Audit Promoteur",
      subtitle: "RISK ASSESSMENT",
      description: "Enquête de solvabilité sur le promoteur (si VEFA). Analyse de l'historique de livraison et de la santé financière.",
      icon: <Cpu />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden z-20 rounded-t-[50px] md:rounded-t-[80px] -mt-20" id="compliance">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Security Layer
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Zéro zone d'ombre :<br/>Notre protocole de Due Diligence
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Nous ne faisons pas confiance, nous vérifions. Chaque actif passe par notre grille d'analyse technique avant d'être proposé.
          </p>
        </div>

        {/* Grid des cartes 'Motherboard' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {checkpoints.map((item, idx) => (
            <MotherboardCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};