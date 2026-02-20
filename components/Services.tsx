import React, { useRef } from 'react';
import { Search, Hammer, TrendingUp, CheckCircle2, ArrowRight, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface ServicesProps {
    onNavigate: (page: PageType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      id: "01",
      title: "Acquisition & Ingénierie",
      brand: "(Ilyana Invest)",
      tagline: "L'intelligence avant l'achat.",
      icon: <Search className="w-6 h-6" />,
      color: "text-primary",
      borderColor: "border-primary/20",
      bgHover: "hover:border-primary/50",
      points: [
        { head: "Sourcing Chirurgical" },
        { head: "Due Diligence 360°" },
        { head: "Conformité Financière" },
        { head: "Négociation Exclusive" }
      ]
    },
    {
      id: "02",
      title: "Build & Tech",
      brand: "(Georges & Partners)",
      tagline: "Le pilotage de la transformation.",
      icon: <Hammer className="w-6 h-6" />,
      color: "text-blue-600",
      borderColor: "border-blue-600/20",
      bgHover: "hover:border-blue-600/50",
      points: [
        { head: "Maîtrise d’Ouvrage Déléguée (MOD)" },
        { head: "Infrastructure IA (RAG)" },
        { head: "Standard de Qualité" }
      ]
    },
    {
      id: "03",
      title: "Asset Management",
      brand: "(Opérations)",
      tagline: "La pérennité du rendement.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-emerald-600",
      borderColor: "border-emerald-600/20",
      bgHover: "hover:border-emerald-600/50",
      points: [
        { head: "Réception de l’Actif" },
        { head: "Optimisation Fiscale" },
        { head: "Mise en Exploitation" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FBF3E9] rounded-t-[50px] md:rounded-t-[80px] relative z-20 -mt-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Expertise 360°
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Notre Écosystème de Services
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
                Une chaîne de valeur intégrée pour transformer l'opportunité en patrimoine sécurisé.
            </p>
        </div>

        {/* Mobile Swipe Instruction */}
        <div className="lg:hidden flex items-center justify-between mb-4 text-primary animate-pulse">
            <div className="flex items-center gap-2">
                <MoveRight className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Swapper</span>
            </div>
            
            {/* Navigation Arrows for Mobile */}
            <div className="flex gap-2">
                <button 
                    onClick={() => scroll('left')}
                    className="p-2 rounded-full bg-white border border-slate-200 shadow-sm active:scale-95 transition-transform"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="p-2 rounded-full bg-white border border-slate-200 shadow-sm active:scale-95 transition-transform"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
            </div>
        </div>

        {/* Scrollable Container on Mobile, Grid on Desktop */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {pillars.map((pillar) => (
            <div 
                key={pillar.id} 
                className={`flex-shrink-0 w-[85%] md:w-[60%] lg:w-auto snap-center bg-white rounded-3xl p-8 border ${pillar.borderColor} shadow-sm transition-all duration-300 ${pillar.bgHover} group flex flex-col h-full`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                    <span className={`text-5xl font-black ${pillar.color} opacity-20`}>
                        {pillar.id}.
                    </span>
                    <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors ${pillar.color}`}>
                        {pillar.icon}
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {pillar.title}
                    <span className={`block text-sm font-medium mt-1 ${pillar.color}`}>{pillar.brand}</span>
                </h3>
                
                <div className="mt-4 pb-4 border-b border-slate-100">
                    <p className="text-slate-500 italic font-medium">"{pillar.tagline}"</p>
                </div>
              </div>

              <ul className="space-y-4 flex-1">
                {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pillar.color}`} />
                        <h4 className="text-sm font-bold text-slate-900">{point.head}</h4>
                    </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-50">
                <button 
                    onClick={() => onNavigate('booking')}
                    className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all ${pillar.color} bg-transparent border-none cursor-pointer`}
                >
                    Réserver votre audit
                    <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};