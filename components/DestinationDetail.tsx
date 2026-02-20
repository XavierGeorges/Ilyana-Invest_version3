import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Building2, Users, MapPin, Search, Cpu } from 'lucide-react';
import { PageType } from '../types';
import { FloatingBack } from './FloatingBack';

interface DestinationDetailProps {
  city: 'casablanca' | 'marrakech' | 'essaouira';
  onNavigate: (page: PageType) => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({ city, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    casablanca: {
      name: "Casablanca",
      tagline: "Le cœur financier de l'Afrique",
      heroImage: "https://images.unsplash.com/photo-1572206687798-2565155f9a96?q=80&w=2070&auto=format&fit=crop",
      description: "Casablanca n'est pas une ville touristique, c'est une ville de business. Avec le hub Casablanca Finance City (CFC), la demande locative corporate est en explosion. C'est le terrain de jeu idéal pour l'investisseur patrimonial cherchant sécurité et plus-value long terme.",
      stats: [
        { label: "Rendement Moyen", value: "6 - 8%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Prix m² (Premium)", value: "22k - 35k MAD", icon: <Building2 className="w-4 h-4" /> },
        { label: "Demande", value: "Corporate / Expat", icon: <Users className="w-4 h-4" /> }
      ],
      aiInsight: "Nos algorithmes détectent une sous-offre critique sur les studios meublés de luxe dans le Triangle d'Or et à proximité de CFC. Le taux de vacance y est inférieur à 3%.",
      zones: ["CFC (Finance City)", "Racine / Gauthier", "Ain Diab (Corniche)"]
    },
    marrakech: {
      name: "Marrakech",
      tagline: "La machine à Cash-Flow",
      heroImage: "https://images.unsplash.com/photo-1597212720177-22d7d59103c3?q=80&w=2070&auto=format&fit=crop",
      description: "Capitale touristique incontestée. Marrakech offre les rendements locatifs saisonniers les plus élevés du Royaume. L'investissement en Villa (route de l'Ourika/Amizmiz) ou en Riad (Médina) permet des stratégies à très haut rendement via Airbnb.",
      stats: [
        { label: "Rendement Saison.", value: "9 - 14%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Prix m² (Villa)", value: "15k - 25k MAD", icon: <Building2 className="w-4 h-4" /> },
        { label: "Occupation", value: "70% (Lissée)", icon: <Users className="w-4 h-4" /> }
      ],
      aiInsight: "L'analyse des data Airbnb montre une surperformance de 25% pour les Villas 'Guest-Ready' avec piscine chauffée par rapport au marché standard. La zone sud (Route de Ouarzazate) est en forte tension foncière.",
      zones: ["Hivernage", "La Palmeraie", "Route de l'Ourika"]
    },
    essaouira: {
      name: "Essaouira",
      tagline: "L'authenticité à fort potentiel",
      heroImage: "https://images.unsplash.com/photo-1557762637-23a3cb8bc329?q=80&w=2070&auto=format&fit=crop",
      description: "Longtemps confidentielle, Essaouira explose grâce aux Digital Nomads et à l'ouverture de nouvelles lignes aériennes. Le ticket d'entrée est plus bas qu'à Marrakech, offrant un potentiel de plus-value à la revente exceptionnel.",
      stats: [
        { label: "Rendement Mixte", value: "7 - 10%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Prix m² (Riad)", value: "12k - 20k MAD", icon: <Building2 className="w-4 h-4" /> },
        { label: "Cible", value: "Digital Nomad / Surf", icon: <Users className="w-4 h-4" /> }
      ],
      aiInsight: "Notre scraping détecte une augmentation de 40% des recherches 'Long Term Rental Essaouira' sur les portails internationaux. Investir dans la rénovation de Riads traditionnels offre le meilleur ratio coût/revenu.",
      zones: ["Médina (Intra-Muros)", "Ghazoua (Villas)", "Sidi Kaouki"]
    }
  };

  const current = data[city];

  return (
    <div className="min-h-screen bg-background-light pt-20 animate-fade-in">
      <FloatingBack onNavigate={onNavigate} targetSection="destinations" />
      
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-20 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour Accueil
          </button>
          <div className="h-4 w-px bg-slate-300"></div>
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Market Focus : {current.name}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${current.heroImage}')` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                <MapPin className="w-3 h-3 text-primary" />
                Destination Stratégique
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                {current.name}.
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light max-w-2xl border-l-4 border-primary pl-6">
                {current.tagline}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
        
        {/* Main Content */}
        <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Pourquoi investir ici ?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {current.description}
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Zones Target par nos Chasseurs
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {current.zones.map((zone, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm hover:border-primary/50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-semibold text-slate-700">{zone}</span>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Valider votre projet à {current.name}</h3>
                    <p className="text-slate-400 mb-8">
                        Notre infrastructure IA a déjà présélectionné 12 opportunités Off-Market sur cette zone cette semaine.
                    </p>
                    <a 
                        href="https://wa.me/212721415548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
                    >
                        Réserver mon Créneau Consulting
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>

        {/* Sidebar Data */}
        <div className="lg:col-span-5 space-y-8">
            
            {/* KPI Cards */}
            <div className="grid gap-4">
                {current.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-colors">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-background-light text-slate-900 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Insight Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="bg-slate-900 text-white p-1.5 rounded">
                        <Cpu className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900">ILYANA_AI_ANALYSIS</span>
                 </div>
                 <p className="text-slate-600 text-sm leading-relaxed font-mono">
                    "{current.aiInsight}"
                 </p>
                 <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Data Feed
                 </div>
            </div>

        </div>

      </div>
    </div>
  );
};