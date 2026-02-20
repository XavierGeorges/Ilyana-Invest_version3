import React from 'react';
import { ArrowRight, Cpu, Lock, Zap } from 'lucide-react';
import { PageType } from '../types';

interface PartnersProps {
    onNavigate: (page: PageType) => void;
}

export const Partners: React.FC<PartnersProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-32 overflow-hidden -mt-20 z-10" id="partners">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dmjvspbcq/image/upload/v1771523140/Gemini_Generated_Image_ywwd64ywwd64ywwd-ezgif.com-png-to-webp-converter_yidoou.webp')" 
        }}
      ></div>
      
      {/* Overlays for readability and mood */}
      <div className="absolute inset-0 z-0 bg-slate-900/90"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header - Centered for Transition Effect */}
        <div className="text-center mb-12 lg:mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                Infrastructure B2B
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Ingénierie IA
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Partenaires immobiliers et investisseurs. Nous auditons vos besoins pour concevoir votre propre système IA
            </p>
            
            <button 
                onClick={() => onNavigate('promoter-lp')}
                className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-white/5 group"
            >
                Réserver votre Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="flex flex-col items-center gap-12">
          
          {/* The 3 Points: Mobile Horizontal Chip Scroll / Desktop Grid */}
          <div className="w-full">
              <div className="flex flex-row overflow-x-auto gap-4 pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
                  
                  {/* Chip 1 */}
                  <div className="snap-center flex-shrink-0 min-w-[160px] w-[160px] aspect-square md:w-auto md:aspect-auto md:h-auto bg-[#0a0f1e] border border-slate-700/60 rounded-lg relative group overflow-hidden flex flex-col justify-between p-4 shadow-xl hover:border-primary/50 transition-colors">
                      {/* Chip Pins Visuals */}
                      <div className="absolute top-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute right-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                      
                      {/* Chip Corner Notch */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-slate-800 -mr-3 -mt-3 rotate-45 border border-slate-600"></div>

                      <div className="flex justify-between items-start">
                           <Cpu className="w-5 h-5 text-primary opacity-80" />
                           <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">ASIC_V1</span>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-xs md:text-lg font-bold text-white mb-1 md:mb-2 font-mono leading-tight tracking-tight">
                            ARCHITECTURE<br/>SUR-MESURE
                        </h3>
                        <p className="text-[10px] md:text-sm text-slate-400 font-mono leading-tight line-clamp-3 md:line-clamp-none">
                            Solution unique métier.
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                          <span className="text-[8px] text-emerald-500 font-mono uppercase">Active</span>
                      </div>
                  </div>
                  
                  {/* Chip 2 */}
                  <div className="snap-center flex-shrink-0 min-w-[160px] w-[160px] aspect-square md:w-auto md:aspect-auto md:h-auto bg-[#0a0f1e] border border-slate-700/60 rounded-lg relative group overflow-hidden flex flex-col justify-between p-4 shadow-xl hover:border-primary/50 transition-colors">
                       {/* Chip Pins Visuals */}
                      <div className="absolute top-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute right-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

                       {/* Chip Corner Notch */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-slate-800 -mr-3 -mt-3 rotate-45 border border-slate-600"></div>

                      <div className="flex justify-between items-start">
                           <Lock className="w-5 h-5 text-primary opacity-80" />
                           <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">SEC_CORE</span>
                      </div>

                       <div className="mt-2">
                            <h3 className="text-xs md:text-lg font-bold text-white mb-1 md:mb-2 font-mono leading-tight tracking-tight">
                                SOUVERAINETÉ<br/>TOTALE
                            </h3>
                            <p className="text-[10px] md:text-sm text-slate-400 font-mono leading-tight line-clamp-3 md:line-clamp-none">
                                Vos données, votre indépendance.
                            </p>
                      </div>

                      <div className="flex items-center gap-1.5 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                          <span className="text-[8px] text-emerald-500 font-mono uppercase">Secure</span>
                      </div>
                  </div>

                  {/* Chip 3 */}
                  <div className="snap-center flex-shrink-0 min-w-[160px] w-[160px] aspect-square md:w-auto md:aspect-auto md:h-auto bg-[#0a0f1e] border border-slate-700/60 rounded-lg relative group overflow-hidden flex flex-col justify-between p-4 shadow-xl hover:border-primary/50 transition-colors">
                       {/* Chip Pins Visuals */}
                      <div className="absolute top-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                      <div className="absolute right-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

                       {/* Chip Corner Notch */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-slate-800 -mr-3 -mt-3 rotate-45 border border-slate-600"></div>

                      <div className="flex justify-between items-start">
                           <Zap className="w-5 h-5 text-primary opacity-80" />
                           <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">TURBO_X</span>
                      </div>

                       <div className="mt-2">
                            <h3 className="text-xs md:text-lg font-bold text-white mb-1 md:mb-2 font-mono leading-tight tracking-tight">
                                PERFORMANCE<br/>MAXIMALE
                            </h3>
                            <p className="text-[10px] md:text-sm text-slate-400 font-mono leading-tight line-clamp-3 md:line-clamp-none">
                                L'automatisation propriétaire.
                            </p>
                      </div>

                      <div className="flex items-center gap-1.5 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                          <span className="text-[8px] text-emerald-500 font-mono uppercase">Ready</span>
                      </div>
                  </div>
              </div>
          </div>

          <p className="text-lg text-white font-medium italic text-center max-w-2xl mx-auto">
             "Georges & Partners : la cellule R&D de Ilyana Invest qui connecte les acteurs de demain"
          </p>

        </div>
      </div>
    </section>
  );
};