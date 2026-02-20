import React from 'react';

export const ServicesTransitionSection: React.FC = () => {
  return (
    <section 
        className="relative py-40 lg:py-56 bg-fixed bg-center bg-cover" 
        style={{ 
            // Architecture moderne marocaine / Intérieur Riad luxueux pour évoquer le service et la construction
            backgroundImage: "url('https://images.unsplash.com/photo-1590059390492-d5495eb8a8ef?q=80&w=2070&auto=format&fit=crop')" 
        }}
    >
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-slate-900/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
            <div className="h-[1px] w-12 bg-white/50"></div>
            <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-bold">Méthodologie</span>
            <div className="h-[1px] w-12 bg-white/50"></div>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-[1.2] tracking-tight">
          "L'immobilier n'est pas une transaction, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">c'est une ingénierie</span>.<br className="hidden lg:block" />
          Nous maîtrisons chaque levier du processus."
        </h2>
        
        <div className="flex justify-center">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};