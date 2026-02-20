import React from 'react';
import { FileText, CheckCircle, BarChart3, Map } from 'lucide-react';

export const TransmissionNote: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <FileText className="w-3 h-3" />
            Livrable Final
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
            La Note de Transmission<br/>
            <span className="text-slate-400">Votre aide à la décision finale</span>
          </h2>
          
          <ul className="space-y-5 mb-10">
             <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Note de Transmission exhaustive</span>
             </li>
             <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Audit complet : atouts, défauts et conformité doc</span>
             </li>
             <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Scoring interne & matching personnalisé</span>
             </li>
             <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Aide à la décision objective</span>
             </li>
          </ul>
        </div>

        {/* Tablet Mockup */}
        <div className="relative mx-auto lg:mr-0 perspective-1000 w-full max-w-md">
             {/* The Device Frame */}
             <div className="relative bg-slate-800 rounded-[2.5rem] border-[12px] border-slate-700 shadow-2xl w-full mx-auto transform rotate-y-[-6deg] rotate-x-[4deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Camera dot */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-4 bg-black rounded-full z-20"></div>
                
                {/* Screen */}
                <div className="bg-white rounded-[1.7rem] overflow-hidden aspect-[3/4] relative text-slate-900 flex flex-col">
                    
                    {/* Header of Report */}
                    <div className="bg-slate-900 p-6 pt-12 text-white flex justify-between items-center shadow-md z-10">
                        <div className="flex items-center gap-2">
                             <div className="bg-primary h-4 w-4 rounded-sm"></div>
                             <span className="font-bold text-xs tracking-widest">ILYANA INVEST</span>
                        </div>
                        <span className="text-[8px] text-slate-400 border border-slate-600 px-2 py-0.5 rounded uppercase">Confidential Memorandum</span>
                    </div>

                    {/* Report Content Scrollable-ish look */}
                    <div className="p-6 space-y-6 bg-slate-50 flex-1 overflow-hidden relative">
                        {/* Fade at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                        {/* Title */}
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 leading-none mb-1">Villa Jasmina</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1 mt-2">
                                <Map className="w-3 h-3 text-primary" /> Marrakech, Palmeraie • Ref. MKH-2024
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full h-40 bg-slate-200 rounded-xl overflow-hidden relative group shadow-sm">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTKpQu4zjAGkALAWueckGEjoizSW1plQIw50b-vOPon8rW0mU26Gvq3wJSjTm5cY8NXoe3z5gArnB3O12vo_65lfkP8nTRp6jSpDRtw5fWQkVwnPOUiqZTeDQag_YquNDn_jfQCARC2Cbu2Ty4C8CpneiZYT51RLaU78c_HFeTapi6ggl2igsIlQ2lroe3Eosg_piLo2Im_NPpgaLAWEpJkoJfx7b--3-pCfqlMhmks9YJ9q8I8c4boipfaIluzoxBWcONaTY82SI')" }}></div>
                            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                DRONE LIVE FEED
                            </div>
                        </div>

                        {/* Financials Chart Mockup */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex justify-between items-end mb-4">
                                <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                                    <BarChart3 className="w-3 h-3 text-primary" /> Performance Financière
                                </h4>
                                <div className="text-right">
                                    <span className="block text-emerald-600 text-sm font-black">+14.2%</span>
                                    <span className="text-[8px] text-slate-400 uppercase">ROI Annualisé</span>
                                </div>
                            </div>
                            <div className="flex items-end gap-2 h-24 w-full">
                                <div className="bg-slate-100 w-full rounded-t-sm h-[30%]"></div>
                                <div className="bg-slate-200 w-full rounded-t-sm h-[45%]"></div>
                                <div className="bg-primary/40 w-full rounded-t-sm h-[60%]"></div>
                                <div className="bg-primary/70 w-full rounded-t-sm h-[75%]"></div>
                                <div className="bg-primary w-full rounded-t-sm h-[90%] shadow-lg shadow-primary/20"></div>
                            </div>
                        </div>

                        {/* SWOT Grid */}
                        <div>
                            <h4 className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">Analyse SWOT</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                    <h5 className="text-[9px] font-black text-emerald-700 mb-1">STRENGTHS</h5>
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-full bg-emerald-200 rounded-full"></div>
                                        <div className="h-1.5 w-2/3 bg-emerald-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                    <h5 className="text-[9px] font-black text-red-700 mb-1">WEAKNESSES</h5>
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-full bg-red-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 className="text-[9px] font-black text-blue-700 mb-1">OPPORTUNITIES</h5>
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-3/4 bg-blue-200 rounded-full"></div>
                                        <div className="h-1.5 w-full bg-blue-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                    <h5 className="text-[9px] font-black text-amber-700 mb-1">THREATS</h5>
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-1/2 bg-amber-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Page number */}
                        <div className="absolute bottom-2 left-0 w-full text-center">
                            <span className="text-[9px] text-slate-400 font-mono">Page 3 of 18 • CONFIDENTIAL</span>
                        </div>

                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};