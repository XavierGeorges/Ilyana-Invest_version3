import React, { useState } from 'react';
import { Check, X, TrendingUp, AlertTriangle, ShieldCheck, Banknote, Plane, RotateCw, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface BuyersAdvantageProps {
    onNavigate: (page: PageType) => void;
}

export const BuyersAdvantage: React.FC<BuyersAdvantageProps> = ({ onNavigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-24 bg-[#FBF3E9] relative overflow-hidden z-20 rounded-b-[50px] md:rounded-b-[80px]" id="roi">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <TrendingUp className="w-3 h-3" />
            Impact Financier
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Plus qu’un conseil,<br/>un levier de performance
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Retournez la carte pour comparer l'approche institutionnelle face à l'investissement solo.
          </p>
        </div>

        {/* FLIP CARD CONTAINER */}
        <div className="flex justify-center perspective-1000">
            <div 
                className="relative w-full max-w-xl cursor-pointer group [perspective:1000px]"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`relative w-full transition-all duration-700 [transform-style:preserve-3d] shadow-2xl rounded-3xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    
                    {/* FRONT FACE: ILYANA (Recto) */}
                    {/* Changed to relative so it dictates the height of the container based on content */}
                    <div 
                        className="relative w-full bg-white rounded-3xl p-8 md:p-10 border-2 border-primary/20 flex flex-col [backface-visibility:hidden] [transform:translateZ(1px)]"
                        style={{ WebkitBackfaceVisibility: 'hidden' }}
                    >
                        {/* Badge */}
                        <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2 z-20">
                            <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg shadow-primary/30 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Le Choix Smart
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                            <ShieldCheck className="w-32 h-32 text-primary" />
                        </div>

                        <div className="relative z-10 mt-4 flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">Client Ilyana Invest</h3>
                                    <p className="text-xs text-primary font-bold uppercase tracking-wide">Performance Maximisée</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Point 1 */}
                                <div className="flex gap-4 items-start border-b border-slate-100 pb-4">
                                    <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                            Prix de Marché Réel
                                            <Banknote className="w-4 h-4 text-emerald-500" />
                                        </h4>
                                        <p className="text-sm text-slate-500 mt-1">Négociation agressive par nos experts locaux. Honoraires couverts par l'économie.</p>
                                        <div className="mt-2 inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">Gain estimé : +15% vs Solo</div>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="flex gap-4 items-start border-b border-slate-100 pb-4">
                                    <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                            100% À Distance
                                            <Plane className="w-4 h-4 text-emerald-500" />
                                        </h4>
                                        <p className="text-sm text-slate-500 mt-1">Vidéos drones, visites virtuelles, procurations notariées.</p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="flex gap-4 items-start">
                                    <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                            Sécurité Totale (VNR)
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                        </h4>
                                        <p className="text-sm text-slate-500 mt-1">Garantie de convertibilité des fonds pour votre sortie.</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Toggle Button */}
                            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-center">
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                                    <RotateCw className="w-4 h-4" />
                                    Comparer avec le risque solo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BACK FACE: SOLO (Verso) */}
                    <div 
                        className="absolute inset-0 w-full h-full bg-slate-100 rounded-3xl p-8 md:p-10 border border-slate-300 flex flex-col [transform:rotateY(180deg)_translateZ(1px)] [backface-visibility:hidden]"
                        style={{ WebkitBackfaceVisibility: 'hidden' }}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                            <AlertTriangle className="w-32 h-32 text-slate-900" />
                        </div>

                        <div className="relative z-10 mt-4 flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                                    <span className="text-2xl">😕</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700">L'Investisseur Solo</h3>
                                    <p className="text-xs text-red-500 font-bold uppercase tracking-wide">Approche Risquée</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Point 1 */}
                                <div className="flex gap-4 items-start border-b border-slate-200 pb-4">
                                    <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <X className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-700">Prix "Touriste"</h4>
                                        <p className="text-sm text-slate-500 mt-1">Surtaxe de 10 à 20% appliquée aux étrangers non accompagnés.</p>
                                        <div className="mt-2 inline-block px-2 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded">-15% de Rentabilité immédiate</div>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="flex gap-4 items-start border-b border-slate-200 pb-4">
                                    <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <X className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-700">Logistique Lourde</h4>
                                        <p className="text-sm text-slate-500 mt-1">Multiples A/R avion, hôtels, temps perdu en visites inutiles.</p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="flex gap-4 items-start">
                                    <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                        <X className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-700">Incertitude Juridique</h4>
                                        <p className="text-sm text-slate-500 mt-1">Risque de blocage des fonds ou de titres fonciers non apurés.</p>
                                    </div>
                                </div>
                            </div>

                             {/* Toggle Button */}
                             <div className="mt-6 pt-4 border-t border-slate-200 flex justify-center">
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">
                                    <RotateCw className="w-4 h-4" />
                                    Revoir la solution Ilyana
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="mt-16 text-center">
             <button 
                onClick={() => onNavigate('booking')}
                className="inline-flex bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl items-center gap-2 group"
            >
                Sécuriser mon investissement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
            </button>
        </div>

      </div>
    </section>
  );
};