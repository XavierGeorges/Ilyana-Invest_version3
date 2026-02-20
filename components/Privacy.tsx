import React from 'react';
import { FloatingBack } from './FloatingBack';
import { PageType } from '../types';

export const Privacy: React.FC<{onNavigate: (page: PageType) => void}> = ({onNavigate}) => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <FloatingBack onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <p className="text-lg">
              Chez <strong>Ilyana Invest</strong>, la confidentialité de vos données est une priorité absolue. 
              En tant que partenaire de confiance ("Tiers de Confiance"), nous nous engageons à protéger les informations personnelles que vous nous confiez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Collecte des données</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Remplissez un formulaire de contact ou de diagnostic.</li>
              <li>Interagissez avec notre assistant IA (Ilyana).</li>
              <li>Vous inscrivez à notre newsletter.</li>
            </ul>
            <p className="mt-2">
              Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, budget d'investissement, et préférences géographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Vous fournir les services de conseil et de sourcing immobilier.</li>
              <li>Personnaliser les recommandations de notre algorithme.</li>
              <li>Vous contacter dans le cadre de votre projet.</li>
              <li>Améliorer nos services et notre plateforme numérique.</li>
            </ul>
            <p className="mt-2 font-semibold">
              Nous ne vendons jamais vos données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Protection des données (CNDP)</h2>
            <p>
              Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d’un droit d’accès, de rectification et d’opposition au traitement de vos données personnelles.
            </p>
            <p className="mt-2">
              Ce traitement a fait l’objet d’une déclaration auprès de la CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies</h2>
            <p>
              Notre site utilise des cookies techniques nécessaires au fonctionnement du site et des cookies d'analyse pour mesurer l'audience. 
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à : 
              <br />
              <span className="text-primary font-bold">privacy@ilyana-invest.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};