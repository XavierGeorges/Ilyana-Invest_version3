import React, { useState } from 'react';

interface InvestorAccessProps {
  onNavigate: (page: PageType) => void;
}

export const InvestorAccess: React.FC<InvestorAccessProps> = ({ onNavigate }) => {
  const [accessCode, setAccessCode] = useState('');

  const handleAccess = () => {
    if (accessCode === 'Brunaud_0228') {
      onNavigate('brunaud-access');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('Code d\'accès incorrect:', accessCode);
      alert('Code d\'accès incorrect. Veuillez réessayer.');
      // Optionally, navigate home or show an error message
      onNavigate('home'); 
    }
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center pt-32 pb-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full text-center space-y-8">
        {/* Hero Section for Investor Access */}
        <section className="space-y-4">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">Accès Investisseur Sécurisé</h1>
          <p className="text-2xl text-primary font-semibold">Interface de Consultation Personnalisée</p>
        </section>

        {/* Description Section */}
        <section className="text-slate-700 text-lg leading-relaxed">
          <p className="mb-4">
            Cet espace est strictement réservé aux partenaires d'ILYANA INVEST. L'accès aux opportunités d'investissement est segmenté afin de garantir une pertinence maximale et la confidentialité des dossiers.
          </p>
        </section>

        {/* Unique Code Functionality Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Fonctionnement du code unique :</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Votre code d’accès personnel ne donne pas accès à un catalogue général. Il génère instantanément votre tableau de bord sur mesure, regroupant exclusivement les actifs (foncier, projets immobiliers, opportunités Off-Market) sélectionnés en cohérence avec votre stratégie d'investissement et vos critères de recherche.
          </p>
        </section>

        {/* Access Form */}
        <section className="flex flex-col items-center space-y-6">
          <p className="text-slate-800 text-xl font-medium">Saisissez votre code pour accéder à votre sélection :</p>
          <input
            type="text"
            placeholder="Votre code unique"
            className="w-full max-w-md p-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
          <button
            onClick={handleAccess}
            className="bg-primary text-white font-bold py-4 px-10 rounded-xl text-xl hover:bg-opacity-90 transition-colors duration-200 shadow-lg shadow-primary/20"
          >
            Accéder à mes offres
          </button>
        </section>
      </div>
    </div>
  );
};
