import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Pourquoi vous payer si l'agence est gratuite ?",
      answer: "L'agence traditionnelle protège les intérêts du vendeur qui la mandate. Nous inversons le paradigme : nous réduisons votre risque, négocions agressivement le prix et sécurisons les aspects juridiques qu'une agence ignore souvent."
    },
    {
      question: "Quand sont dus les honoraires ?",
      answer: "Notre rémunération est basée sur le succès. Un acompte (Commitment Fee) est dû à la signature du mandat, et le solde de l'honoraire de résultat est versé uniquement lors de la signature de l'acte définitif devant notaire."
    },
    {
      question: "Intervenez-vous sur tout le territoire ?",
      answer: "Nous nous concentrons sur les zones à forte valeur stratégique et liquidité : Casablanca Finance City, Marrakech (Villas & Palmeraie), Tanger Tech et les projets balnéaires premium."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">Questions Fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
                key={idx} 
                className={`group border rounded-xl bg-background-light transition-all overflow-hidden ${openIndex === idx ? 'border-primary/40 shadow-lg' : 'border-slate-100'}`}
            >
              <button 
                className="w-full p-6 text-left flex justify-between items-center text-slate-900 font-bold hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`transform transition-transform duration-300 text-primary ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 text-slate-500 text-sm leading-relaxed transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};