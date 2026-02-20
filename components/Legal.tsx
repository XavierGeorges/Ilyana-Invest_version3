import React from 'react';
import { FloatingBack } from './FloatingBack';
import { PageType } from '../types';

export const Legal: React.FC<{onNavigate: (page: PageType) => void}> = ({onNavigate}) => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <FloatingBack onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Mentions Légales</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>Ilyana Invest</strong> est édité par la société Ilyana Invest SARL, société à responsabilité limitée au capital de 100.000 MAD.<br />
              <strong>Siège social :</strong> 450 - 5 AV AL AQABA, 44000 Essaouira.<br />
              <strong>RC :</strong> 6857 | <strong>ICE :</strong> 003326464000003<br />
              <strong>Email :</strong> contact@ilyana-invest.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Hébergement</h2>
            <p>
              Ce site est hébergé sur une infrastructure cloud sécurisée.<br />
              Les données sont stockées sur des serveurs respectant les normes de sécurité en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. 
              Ilyana Invest ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="mt-2">
              Les estimations financières (ROI, rendements) fournies par nos outils d'IA sont indicatives et ne constituent pas un engagement contractuel de résultat. Tout investissement comporte des risques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Droit applicable</h2>
            <p>
              Tout litige en relation avec l’utilisation du site Ilyana Invest est soumis au droit marocain. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Casablanca.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};