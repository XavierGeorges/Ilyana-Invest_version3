import React, { useState } from 'react';
import { Car, BedDouble, MapPin, Sparkles, Coffee, Luggage, RotateCw } from 'lucide-react';

interface ConciergeItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ConciergeFlipCard: React.FC<{ service: ConciergeItem }> = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-60 md:h-80 w-full cursor-pointer [perspective:1000px] group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] shadow-sm hover:shadow-xl rounded-3xl ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT FACE */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-3xl bg-[#FBF3E9]/50 border border-transparent group-hover:border-primary/20 p-4 md:p-8 flex flex-col items-center justify-center text-center"
            style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(1px)' 
            }}
        >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-3 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-8 md:h-8" })}
            </div>
            <h4 className="text-sm md:text-xl font-bold text-slate-900 mb-2 leading-tight">{service.title}</h4>
            
            <div className="mt-2 md:mt-4 flex items-center gap-1 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
                <RotateCw className="w-3 h-3 md:w-4 md:h-4" />
                <span>Détails</span>
            </div>
        </div>

        {/* BACK FACE */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-3xl bg-slate-900 text-white p-4 md:p-8 flex flex-col items-center justify-center text-center shadow-xl border border-slate-800"
            style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg) translateZ(1px)'
            }}
        >
            <h4 className="text-sm md:text-xl font-bold text-primary mb-3 md:mb-4">{service.title}</h4>
            <p className="text-[10px] md:text-base leading-relaxed text-slate-300">
                {service.desc}
            </p>
        </div>
      </div>
    </div>
  );
};

export const Concierge: React.FC = () => {
  const services = [
    {
      title: "Chauffeur Privé",
      desc: "Votre voiture vous attend. On oublie les galères de taxis, vous vous concentrez sur vos visites en mode \"no stress\".",
      icon: <Car />
    },
    {
      title: "Sleep in Style",
      desc: "On vous déniche le petit Riad caché ou le boutique-hôtel qui claque. Les meilleures adresses, introuvables sur Booking.",
      icon: <BedDouble />
    },
    {
      title: "Marrakech Insider",
      desc: "On vous emmène là où ça se passe. Les spots secrets pour déjeuner, les quartiers qui montent, le vrai Marrakech.",
      icon: <MapPin />
    },
    {
      title: "No Noise",
      desc: "La logistique, c'est nous. Votre seule mission ? Prendre les bonnes décisions d'investissement.",
      icon: <Sparkles />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden z-20 rounded-b-[50px] md:rounded-b-[80px]" id="concierge">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-background-light rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <Luggage className="w-3 h-3" />
                    Lifestyle Service
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                    La Conciergerie Ilyana
                </h2>
                <p className="text-xl text-primary font-medium italic mb-8">
                    "Investir au Maroc devient un voyage. Nous orchestrons tout, vous n'avez qu'à choisir."
                </p>
            </div>

            {/* Grid 2 colonnes mobile, 4 desktop */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                {services.map((service, idx) => (
                    <ConciergeFlipCard key={idx} service={service} />
                ))}
            </div>
        </div>
    </section>
  );
};