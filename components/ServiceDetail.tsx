import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Cpu, Database, LineChart, Terminal, Shield, Zap, ArrowRight, Activity, Layers, Code2 } from 'lucide-react';
import { PageType } from '../types';
import { FloatingBack } from './FloatingBack';

interface ServiceDetailProps {
  type: 'acquisition' | 'build' | 'management';
  onNavigate: (page: PageType) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ type, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data Configuration for the 3 Pillars
  const content = {
    acquisition: {
      theme: "primary",
      badge: "Sourcing & Engineering",
      title: "Acquisition Algorithmique",
      subtitle: "Ne cherchez pas. Laissez la Data trouver.",
      description: "Notre approche remplace l'intuition de l'agent immobilier par la précision de l'analyse de données. Nous scannons, filtrons et sécurisons les actifs à fort potentiel avant qu'ils n'atteignent le marché grand public.",
      heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { label: "Pipeline Off-Market", value: "85%" },
        { label: "Audit Points", value: "40+" },
        { label: "Négociation Avg.", value: "-12%" }
      ],
      techStack: [
        { name: "Scraping Propriétaire", desc: "Bots de surveillance marché temps réel." },
        { name: "Cadastre API", desc: "Vérification automatisée des titres." },
        { name: "Scoring Model", desc: "Algorithme de notation du potentiel locatif." }
      ],
      workflow: [
        { title: "Targeting", desc: "Définition des KPIs (Yield, Capital Gain) et calibration de l'algo." },
        { title: "Filtering", desc: "Élimination automatique des biens à risque juridique ou structurel." },
        { title: "Securing", desc: "Verrouillage juridique et négociation agressive basée sur la data." }
      ]
    },
    build: {
      theme: "blue-600",
      badge: "Georges & Partners",
      title: "Smart Construction (MOD)",
      subtitle: "Le BTP piloté comme du code.",
      description: "La rénovation et la construction au Maroc souffrent d'opacité. Nous appliquons des process industriels et une couche technologique pour garantir délais, coûts et qualité. Votre chantier devient un dashboard.",
      heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
      stats: [
        { label: "Respect Budget", value: "98%" },
        { label: "Retard Livraison", value: "0j" },
        { label: "Rapports IA", value: "Hebdo" }
      ],
      techStack: [
        { name: "Computer Vision", desc: "Analyse photo automatique de l'avancement." },
        { name: "RAG Assistant", desc: "IA conversationnelle sur vos plans d'architecte." },
        { name: "Cloud Costing", desc: "Suivi des flux financiers en temps réel." }
      ],
      workflow: [
        { title: "Design Sprint", desc: "Optimisation des plans pour la rentabilité locative (Flow management)." },
        { title: "Execution", desc: "Pilotage des corps d'état via notre plateforme propriétaire." },
        { title: "Quality Gate", desc: "Audit de fin de chantier avec checklist de 200 points." }
      ]
    },
    management: {
      theme: "emerald-600",
      badge: "Asset Operations",
      title: "Yield Management & Scale",
      subtitle: "Transformez la pierre en flux financier.",
      description: "Une fois l'actif livré, l'objectif est la performance. Nous utilisons les mêmes outils que les grands groupes hôteliers pour maximiser votre taux d'occupation et votre prix moyen par nuitée.",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { label: "Taux Occup.", value: "78%" },
        { label: "Superhost", value: "Garanti" },
        { label: "Cash-flow", value: "Mensuel" }
      ],
      techStack: [
        { name: "Dynamic Pricing", desc: "Ajustement prix/nuit toutes les 4h selon la demande." },
        { name: "Multi-Channel", desc: "Synchro instantanée Airbnb, Booking, Expedia." },
        { name: "Auto-Concierge", desc: "Communication voyageur automatisée par IA." }
      ],
      workflow: [
        { title: "Onboarding", desc: "Shooting photo pro, rédaction SEO des annonces." },
        { title: "Cruising", desc: "Gestion 100% déléguée (Check-in, Ménage, Maintenance)." },
        { title: "Reporting", desc: "Dashboard investisseur : revenus, dépenses, ROI net." }
      ]
    }
  };

  const current = content[type];
  const isPrimary = current.theme === "primary";
  const themeColor = isPrimary ? "text-primary" : `text-${current.theme}`;
  const themeBg = isPrimary ? "bg-primary" : `bg-${current.theme}`;
  const themeBorder = isPrimary ? "border-primary" : `border-${current.theme}`;

  return (
    <div className="min-h-screen bg-background-light pt-20 animate-fade-in">
      <FloatingBack onNavigate={onNavigate} targetSection="services" />
      
      {/* Navigation Bar */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-20 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'écosystème
          </button>
          <div className="h-4 w-px bg-slate-300"></div>
          <span className={`text-sm font-bold ${themeColor} uppercase tracking-wider`}>
            Module : {current.badge}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${current.heroImage}')` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 w-fit backdrop-blur-md`}>
                <Activity className="w-3 h-3" />
                System Active
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight max-w-4xl">
                {current.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl">
                {current.subtitle}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        
        {/* Main Content (Left) */}
        <div className="lg:col-span-8 space-y-16">
            
            {/* Description & Stats */}
            <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                    {current.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {current.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <p className={`text-3xl font-black ${themeColor} mb-1 break-words`}>{stat.value}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workflow Section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className={`p-2 rounded-lg bg-slate-100 ${themeColor}`}>
                        <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Processus d'Exécution</h3>
                </div>
                
                <div className="space-y-6 relative">
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-100"></div>
                    {current.workflow.map((step, idx) => (
                        <div key={idx} className="relative pl-12">
                            <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center font-bold text-sm bg-slate-900 text-white z-10`}>
                                {idx + 1}
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm group">
                                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">{step.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className={`bg-slate-900 rounded-3xl p-10 relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-64 h-64 ${themeBg} rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">Initialiser ce module</h3>
                    <p className="text-slate-400 mb-8 max-w-xl">
                        Intégrez cette brique technologique à votre stratégie d'investissement. Discutez-en avec nos consultants.
                    </p>
                    <a 
                        href="https://wa.me/212721415548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
                    >
                        Démarrer l'audit
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>

        {/* Sidebar (Right) - Tech Specs */}
        <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Box */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                    <Terminal className={`w-5 h-5 ${themeColor}`} />
                    <span className="text-white font-mono text-sm font-bold">TECH_STACK_V4.2</span>
                </div>
                
                <div className="space-y-6">
                    {current.techStack.map((tech, idx) => (
                        <div key={idx} className="group">
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <Cpu className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className={`font-mono text-sm font-bold ${themeColor} mb-1`}>{tech.name}</h4>
                                    <p className="text-xs text-slate-400 font-mono leading-relaxed">
                                        // {tech.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Running on Ilyana Core</span>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    Garanties Module
                </h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Contractualisation Notariée</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Transparence Totale (Open Books)</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Support Dédié 7/7</span>
                    </li>
                </ul>
            </div>

            {/* Quick Fact */}
             <div className={`rounded-2xl p-6 ${themeBg} bg-opacity-10 border ${themeBorder} border-opacity-20`}>
                <div className="flex items-start gap-3">
                    <Zap className={`w-5 h-5 ${themeColor} mt-0.5`} />
                    <div>
                        <h4 className={`font-bold ${themeColor} text-sm mb-1`}>Le saviez-vous ?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            L'utilisation de cette brique technologique augmente en moyenne la performance nette de l'actif de <span className="font-bold">+18%</span> par rapport à une gestion traditionnelle.
                        </p>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};