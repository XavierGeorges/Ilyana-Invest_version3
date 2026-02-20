import React, { useState } from 'react';
import { Handshake, Cpu, Eye, RotateCw, Globe, Shield, Coins } from 'lucide-react';

interface PropCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FlipCard: React.FC<PropCardProps> = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 w-[350px] flex-shrink-0 cursor-pointer [perspective:1000px] group mx-4"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl border border-slate-100 bg-background-light shadow-sm hover:border-primary/30 hover:shadow-xl transition-all flex flex-col items-center justify-center p-8 text-center"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(1px)' 
          }}
        >
          <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-primary/10 p-4 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
          
          <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
            <RotateCw className="w-4 h-4" />
            <span>Survoler</span>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl bg-slate-900 text-white p-8 flex flex-col items-center justify-center text-center shadow-xl border border-slate-800"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)'
          }}
        >
          <h3 className="text-xl font-bold text-primary mb-6">{title}</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            {description}
          </p>
          <div className="mt-6 w-8 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export const ValueProp: React.FC = () => {
  const props = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "100% Buyer-Side",
      description: "Aucun conflit d'intérêt. Nous représentons exclusivement vos intérêts, jamais ceux du vendeur."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Data-Driven",
      description: "Sourcing ultra-rapide via nos réseaux de chasseurs locaux et nos outils IA pour identifier le 'Off-Market'."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Pilotage Unifié",
      description: "De la recherche foncière à la gestion opérationnelle, un seul partenaire unique."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Réseau Global",
      description: "Accès privilégié aux meilleures opportunités à Casablanca, Marrakech et Tanger."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Totale",
      description: "Audits juridiques et techniques systématiques avant toute transaction."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Prix Optimisés",
      description: "Négociation agressive basée sur la data réelle du marché, pas les prix affichés."
    }
  ];

  // Dupliquer les props pour créer l'effet de boucle infinie sans coupure
  const scrollingProps = [...props, ...props];

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="concept">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 italic tracking-tight">Votre tiers de confiance au Maroc</h2>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>
      
      {/* Container Défilant avec Dégradés sur les côtés */}
      <div className="relative w-full">
        {/* Dégradé Gauche */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Dégradé Droit */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Bande Défilante */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-10">
          {scrollingProps.map((prop, idx) => (
            <FlipCard 
              key={`${idx}-${prop.title}`}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};