import React from 'react';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  showCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, showCta = true }) => {
  const handleLinkClick = (page: PageType) => {
    window.scrollTo(0, 0);
    onNavigate(page);
  };

  return (
    <footer className="py-20 bg-[#8D4024] border-t border-white/10 relative z-20 text-white rounded-t-[50px] md:rounded-t-[80px] -mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* CTA - Conditionally Rendered */}
        {showCta && (
          <>
            <div className="bg-white p-4 rounded-2xl mb-8 shadow-xl shadow-black/10 rotate-3 hover:rotate-0 transition-transform">
              <Calendar className="text-[#8D4024] w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 tracking-tight">Prêt à bâtir votre patrimoine au Maroc ?</h2>
            
            <button 
              onClick={() => onNavigate('booking')}
              className="flex items-center gap-2 text-white font-bold border-b-2 border-white hover:text-white/80 hover:border-white/80 transition-colors pb-1 group"
            >
              Prendre rendez-vous (Audit Offert)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        )}

        {/* Links Grid - Only show when CTA is shown (full footer) */}
        {showCta && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left w-full pt-20 mt-20 border-t border-white/20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-bold text-white tracking-tighter uppercase">Ilyana Invest</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Le premier cabinet de conseil en investissement immobilier piloté par la data et l'IA souveraine au Royaume du Maroc.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Expertise</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Chasse Foncière</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Sécurisation Notariale</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Optimisation ROI</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Compagnie</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Notre Manifeste</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Georges & Partners</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Recrutement</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-white/70 mt-0.5" /> 
                <span>Casablanca • Marrakech • Essaouira</span>
              </li>
            </ul>
          </div>
        </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/60 uppercase tracking-widest">
          <p>© 2024 Ilyana Invest. Tous droits réservés.</p>
          <div className="flex gap-8">
            <button onClick={() => handleLinkClick('legal')} className="hover:text-white transition-colors uppercase">Mentions Légales</button>
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-white transition-colors uppercase">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};