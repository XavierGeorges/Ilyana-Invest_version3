import React from 'react';
import { Zap, Database, ArrowRight, Network, Server, Wifi, Loader2, Lock, UserCheck, Globe, Cpu } from 'lucide-react';
import { PageType } from '../types';

interface DestinationsProps {
  onNavigate: (page: PageType) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onNavigate }) => {
  const cities = [
    {
      id: 'casablanca',
      name: 'Casablanca',
      code: 'CAS',
      statusMobile: 'En cours',
      statusDesktop: 'En cours de déploiement',
      progress: 75, // Visual value only
      isActive: true,
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      code: 'RAK',
      statusMobile: 'En cours',
      statusDesktop: 'En cours de déploiement',
      progress: 70, // Visual value only
      isActive: true,
    },
    {
      id: 'essaouira',
      name: 'Essaouira',
      code: 'ESU',
      statusMobile: 'En cours',
      statusDesktop: 'En cours de déploiement',
      progress: 45, // Visual value only
      isActive: true,
    },
    {
      id: 'tanger',
      name: 'Tanger',
      code: 'TNG',
      statusMobile: 'Fermé',
      statusDesktop: 'Pas encore ouvert',
      progress: 0,
      isActive: false,
    }
  ];

  return (
    <section className="py-24 bg-white/40 backdrop-blur-sm relative overflow-hidden" id="destinations">
      {/* Tech Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section: The AI Advantage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6">
                    <Zap className="w-3 h-3 text-yellow-400 fill-current" />
                    Infrastructure IA Propriétaire
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Nous allons <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-4">7x plus vite</span> que le marché
                </h2>
                <p className="text-slate-900 text-lg leading-relaxed mb-8 font-medium">
                    L'investissement immobilier haute conciergerie. Notre IA scanne le Maroc en temps réel pour sécuriser vos opportunités avec la précision d'un palace moderne.
                </p>
                
                {/* 3-Column Grid Feature Blocks - Mobile Compact Grid / Desktop Grid */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                    {/* Block 1: Interlocuteur Unique */}
                    <div className="bg-white/60 backdrop-blur-sm p-2 md:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center h-full">
                        <div className="bg-slate-100 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center mb-2">
                            <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-900" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-[10px] md:text-sm leading-tight mb-1">Interlocuteur Unique</h4>
                        <p className="text-[9px] md:text-xs text-slate-600 leading-tight">
                            1 pilote dédié pour tout gérer.
                        </p>
                    </div>

                    {/* Block 2: Puissance IA (CENTER) */}
                    <div className="bg-white/90 backdrop-blur-md p-2 md:p-5 rounded-xl border border-primary/30 shadow-lg md:shadow-2xl md:scale-110 z-10 relative flex flex-col justify-center items-center text-center h-full transform transition-transform">
                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                            Core Tech
                        </div>
                        <div className="bg-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2 mt-1">
                            <Cpu className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <h4 className="font-black text-slate-900 text-[11px] md:text-base leading-tight mb-1">Puissance IA</h4>
                        <p className="text-[9px] md:text-xs text-slate-600 leading-tight font-medium">
                            Rentabilité validée en temps réel.
                        </p>
                    </div>

                    {/* Block 3: Marché Global */}
                    <div className="bg-white/60 backdrop-blur-sm p-2 md:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center h-full">
                        <div className="bg-slate-100 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center mb-2">
                            <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-900" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-[10px] md:text-sm leading-tight mb-1">Marché Global</h4>
                        <p className="text-[9px] md:text-xs text-slate-600 leading-tight">
                            Accès Off-Market & Agences.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900/10">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                        Validation stratégique sans engagement :
                    </p>
                    <button 
                        onClick={() => onNavigate('booking')}
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                        Réserver mon appel consulting
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Right Side: Deployment Barometers */}
            <div className="bg-white/80 backdrop-blur rounded-3xl p-5 md:p-8 border border-white/50 shadow-xl relative overflow-hidden">
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

                 <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                        <Server className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Zones Stratégiques</h3>
                        <p className="text-xs text-slate-400 font-mono">LIVE COVERAGE STATUS</p>
                    </div>
                 </div>

                 {/* Grid Layout: 2 Cols Mobile / 1 Col Desktop */}
                 <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6">
                    {cities.map((city) => (
                        <div 
                            key={city.id} 
                            onClick={() => city.isActive && onNavigate(`destination-${city.id}` as PageType)}
                            className={`group bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 relative ${city.isActive ? 'border-primary/20 cursor-pointer hover:border-primary/50' : 'opacity-70 bg-slate-50 cursor-not-allowed'}`}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2 gap-1 md:gap-0">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0 ${city.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xs md:text-base flex flex-col md:flex-row md:items-center gap-1 leading-tight">
                                            {city.name}
                                            <span className="text-[9px] md:text-[10px] bg-slate-100 text-slate-500 px-1 md:px-1.5 py-0.5 rounded font-mono border border-slate-200 w-fit">{city.code}</span>
                                        </h4>
                                    </div>
                                </div>
                                {city.isActive && (
                                    <div className="absolute top-3 right-3 md:static">
                                        <Loader2 className="w-3 h-3 md:w-4 md:h-4 text-primary animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Progress Bar - Visual Only */}
                            <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2 md:mb-3">
                                <div 
                                    className={`h-full rounded-full relative ${city.isActive ? 'bg-primary' : 'bg-slate-300'}`}
                                    style={{ width: city.isActive ? `${city.progress}%` : '0%' }}
                                >
                                    {city.isActive && (
                                        <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}></div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className={`text-[9px] md:text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 ${city.isActive ? 'text-primary' : 'text-slate-400'}`}>
                                    {city.isActive ? <Wifi className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                                    <span className="md:hidden">{city.statusMobile}</span>
                                    <span className="hidden md:inline">{city.statusDesktop}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                 </div>

                 <div className="mt-8 text-center">
                    <p className="text-[10px] md:text-xs text-slate-400 font-mono">
                        // Total Assets Analyzed Today: <span className="text-slate-900 font-bold">1,248</span>
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};