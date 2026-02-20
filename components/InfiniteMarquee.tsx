import React from 'react';
import { Zap } from 'lucide-react';

export const InfiniteMarquee: React.FC = () => {
  const textItems = [
    "UN SEUL INTERLOCUTEUR, TOUT LE MARCHÉ",
    "Notre IA scanne l'intégralité des annonces en temps réel pour vous",
    "FINI LES DOUBLONS : on trie, vous choisissez",
    "L'agilité d'une startup, la force du réseau local",
    "BIENVENUE AU MAROC : l'investissement immo en mode 2.0",
    "7X PLUS RAPIDE qu'une recherche classique"
  ];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 overflow-hidden relative z-30">
        <div className="flex w-max animate-infinite-scroll py-4 group hover:[animation-play-state:paused]">
            {/* Duplicating content enough times to ensure smooth loop with -50% translation */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 px-6">
                    {textItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-12">
                            <span className="text-white/90 font-mono text-xs md:text-sm font-bold tracking-widest uppercase whitespace-nowrap">
                                {item}
                            </span>
                            <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
};