import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { PageType } from '../types';

Chart.register(...registerables);

interface BrunaudAccessPageProps {
  onNavigate: (page: PageType) => void;
}

export const BrunaudAccessPage: React.FC<BrunaudAccessPageProps> = ({ onNavigate }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [scenario, setScenario] = useState('groupe');
  const [scenarioTitleSuffix, setScenarioTitleSuffix] = useState('');

  const dataStore = {
    lotA: {
      surface: 768,
      prixEur: 89000,
      prixMad: 950000,
      facade: "13.5",
      facadeDesc: "Façade standard",
      faisabilite: "Faisabilité standard pour une villa isolée, mais avec des limites séparatives partagées avec le voisinage. La construction sera classique mais sans l'avantage des 4 façades libres.",
      alert: false,
      diagramWidth: "50%",
      buildableWidthPX: "calc(100% - 80px)",
      buildableText: "Zone Constructible<br>(~5.5m nets)",
      activeBtnId: 'btn-lotA',
      honoText: "Inclut 5 000 € d'honoraires cabinet"
    },
    lotB: {
      surface: 720,
      prixEur: 89000,
      prixMad: 950000,
      facade: "13-14",
      facadeDesc: "Façade étroite",
      faisabilite: "Avec une largeur de façade de 13 à 14 mètres, l'application des retraits latéraux obligatoires de 4 mètres de chaque côté réduit la bande constructible à 5 ou 6 mètres de large. Cette configuration contraint fortement la conception architecturale.",
      alert: true,
      diagramWidth: "48%",
      buildableWidthPX: "calc(100% - 100px)",
      buildableText: "Zone Constructible<br>(5m nets)<br><span class='text-xs text-red-200'>Très contraint</span>",
      activeBtnId: 'btn-lotB',
      honoText: "Inclut 5 000 € d'honoraires cabinet"
    },
    groupe: {
      surface: 1488,
      prixEur: 178000,
      prixMad: 1900000,
      facade: "27",
      facadeDesc: "Ouverture exceptionnelle",
      faisabilite: "Le scénario recommandé. L'acquisition conjointe des deux lots modifie radicalement le potentiel du foncier. La création d'une assiette foncière rectangulaire avec une façade d'environ 27 mètres linéaires permet la conception d'une villa de maître. La largeur nette constructible passe à environ 19 mètres.",
      alert: false,
      diagramWidth: "100%",
      buildableWidthPX: "calc(100% - 60px)",
      buildableText: "Zone Constructible Optimale<br>(19m de large)<br><span class='text-xs'>Permet un grand déploiement architectural</span>",
      activeBtnId: 'btn-groupe',
      honoText: "Inclut 10 000 € d'honoraires cabinet"
    }
  };

  useEffect(() => {
    initChart();
    setScenarioData(scenario);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [scenario]);

  const animateValue = (id: string, end: number, duration = 500) => {
    const obj = document.getElementById(id);
    if (!obj) return;

    const start = parseInt(obj.innerText.replace(/\s/g, '')) || 0;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      obj.innerHTML = current.toLocaleString('fr-FR');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const setScenarioData = (scenarioKey: keyof typeof dataStore) => {
    const data = dataStore[scenarioKey];

    // 1. Update UI Buttons
    document.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
      btn.classList.add('text-stone-600', 'hover:bg-stone-200');
    });
    const activeBtn = document.getElementById(data.activeBtnId);
    if (activeBtn) {
      activeBtn.classList.remove('text-stone-600', 'hover:bg-stone-200');
      activeBtn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
    }

    // 2. Update KPI Text
    animateValue('val-surface', data.surface);
    animateValue('val-prix-eur', data.prixEur);
    const descPrix = document.getElementById('desc-prix');
    if (descPrix) descPrix.innerText = `Soit env. ${data.prixMad.toLocaleString('fr-FR')} MAD`;
    const valFacade = document.getElementById('val-facade');
    if (valFacade) valFacade.innerText = data.facade;
    const descFacade = document.getElementById('desc-facade');
    if (descFacade) descFacade.innerText = data.facadeDesc;
    const honoKpi = document.getElementById('desc-hono-kpi');
    if (honoKpi) honoKpi.innerText = data.honoText;

    // Simulation Frais de Notaire
    const prixMad = data.prixMad;
    const enreg = Math.round(prixMad * 0.05);
    const cf = Math.round(prixMad * 0.01 + 200); // 1% + 200dhs fixe
    const hono = Math.round(prixMad * 0.015 * 1.2); // 1.5% + TVA 20%
    const totalNotaire = enreg + cf + hono + 1500; // +1500 dhs frais divers/timbres

    animateValue('notaire-base', prixMad);
    animateValue('notaire-enreg', enreg);
    animateValue('notaire-cf', cf);
    animateValue('notaire-hono', hono);
    animateValue('notaire-total', totalNotaire);

    // 3. Update Text Content
    const textFaisabilite = document.getElementById('text-faisabilite');
    if (textFaisabilite) textFaisabilite.innerHTML = data.faisabilite;

    // 4. Update Alert Visibility
    const alertBox = document.getElementById('alert-box');
    if (alertBox) {
      if (data.alert) {
        alertBox.classList.remove('hidden');
      } else {
        alertBox.classList.add('hidden');
      }
    }

    // 5. Update CSS Diagram (Visualizing the constraint)
    const diagramPlot = document.getElementById('diagram-plot');
    const diagramBuildable = document.getElementById('diagram-buildable');
    const diagramText = document.getElementById('diagram-text');

    if (diagramPlot) diagramPlot.style.width = data.diagramWidth;
    if (diagramBuildable) diagramBuildable.style.width = data.buildableWidthPX;

    if (diagramBuildable) {
      if (scenarioKey === 'lotB') {
        diagramBuildable.style.backgroundColor = '#ef4444'; // red-500 to show constraint
        diagramBuildable.style.borderColor = '#991b1b';
      } else {
        diagramBuildable.style.backgroundColor = '#10b981'; // emerald-500
        diagramBuildable.style.borderColor = '#047857';
      }
    }

    if (diagramText) diagramText.innerHTML = data.buildableText;

    // Update scenario title suffix
    let suffix = '';
    if (scenarioKey === 'lotA') {
      suffix = `pour le Lot A (${dataStore.lotA.surface} m²)`;
    } else if (scenarioKey === 'lotB') {
      suffix = `pour le Lot B (${dataStore.lotB.surface} m²)`;
    } else if (scenarioKey === 'groupe') {
      suffix = `pour le regroupement foncier des deux lots (${dataStore.groupe.surface} m²)`;
    }
    setScenarioTitleSuffix(suffix);
  };

  const initChart = () => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      const chartData = {
        labels: ['Lot A (768 m²)', 'Lot B (720 m²)', 'Moyenne (Regroupement)'],
        datasets: [{
          label: 'Prix au mètre carré (MAD)',
          data: [1236, 1319, 1276],
          backgroundColor: [
            '#d6d3d1',
            '#d6d3d1',
            '#059669'
          ],
          borderWidth: 0,
          borderRadius: 6,
          barPercentage: 0.6
        }]
      };

      const config: any = {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  return context.parsed.y + ' MAD / m²';
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 1000,
              title: {
                display: true,
                text: 'Dirhams (MAD) / m²',
                font: { family: 'Inter', size: 12 }
              },
              grid: {
                color: '#f5f5f4'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: { family: 'Inter', size: 13 }
              }
            }
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuart'
          }
        }
      };

      chartInstance.current = new Chart(ctx, config);
    }
  };

  return (
    <div className="antialiased pb-20">
      <header className="bg-stone-900 text-stone-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b-4 border-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-700 text-emerald-50 text-xs font-semibold tracking-wider rounded-full mb-3 uppercase">Réf: IlyanaInvest-Essaouira-001</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Opportunité Foncière Ouassane</h1>
              <p className="text-amber-500 font-medium text-xl mb-2">Dossier exclusif préparé pour Emilie et Michael Brunaud</p>
              <p className="text-stone-400 text-lg max-w-2xl">Rapport de Faisabilité et Commercialisation pour deux parcelles en Zone D2 (Urbaine), Essaouira.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-400">Date d'expertise</p>
              <p className="text-xl font-semibold text-amber-500">Mars 2026</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        <section className="max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-stone-800 border-b pb-2">Introduction de l'Expert</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Bonjour Emilie, bonjour Michael. Ce tableau de bord interactif présente l'analyse technico-commerciale de deux parcelles contiguës situées à Ouassane. L'objectif de cette interface est de vous permettre de comparer la viabilité architecturale et financière d'une acquisition individuelle versus un regroupement foncier. Vous découvrirez comment la fusion de ces deux lots permet de contourner des contraintes urbanistiques majeures pour créer un produit immobilier d'exception.
          </p>
        </section>

        <section id="scenarios" className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="bg-stone-100 px-6 py-5 border-b border-stone-200">
            <h2 className="text-xl font-semibold text-stone-800 mb-1">Simulateur de Scénarios d'Acquisition</h2>
            <p className="text-sm text-stone-500">Sélectionnez une option ci-dessous pour mettre à jour l'ensemble des données et visualisations du rapport.</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-8 bg-stone-100 p-1.5 rounded-lg w-fit">
              <button onClick={() => setScenario('lotA')} id="btn-lotA" className={`scenario-btn px-6 py-2.5 rounded-md text-sm font-medium transition-all ${scenario === 'lotA' ? 'bg-emerald-600 text-white shadow-md' : 'text-stone-600 hover:bg-stone-200'}`}>Lot A (Seul)</button>
              <button onClick={() => setScenario('lotB')} id="btn-lotB" className={`scenario-btn px-6 py-2.5 rounded-md text-sm font-medium transition-all ${scenario === 'lotB' ? 'bg-emerald-600 text-white shadow-md' : 'text-stone-600 hover:bg-stone-200'}`}>Lot B (Seul)</button>
              <button onClick={() => setScenario('groupe')} id="btn-groupe" className={`scenario-btn px-6 py-2.5 rounded-md text-sm font-medium transition-all ${scenario === 'groupe' ? 'bg-emerald-600 text-white shadow-md' : 'text-stone-600 hover:bg-stone-200'}`}>Regroupement Foncier (Recommandé)</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 shadow-sm">
                <p className="text-sm text-stone-500 mb-1">Superficie</p>
                <p className="text-3xl font-bold text-stone-800"><span id="val-surface">1 488</span> <span className="text-xl font-normal text-stone-500">m²</span></p>
                <p id="desc-surface" className="text-xs text-stone-400 mt-2">Surface combinée optimisée</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 shadow-sm relative">
                <p className="text-sm text-stone-500 mb-1">Prix de Vente FAI</p>
                <p className="text-3xl font-bold text-stone-800"><span id="val-prix-eur">178 000</span> <span className="text-xl font-normal text-stone-500">€</span></p>
                <p id="desc-prix" className="text-xs text-stone-400 mt-1">Soit env. 1 900 000 MAD</p>
                <p id="desc-hono-kpi" className="text-[10px] text-amber-700 mt-1.5 font-medium bg-amber-100/50 inline-block px-2 py-0.5 rounded border border-amber-200">Inclut honoraires de commercialisation</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 shadow-sm">
                <p className="text-sm text-stone-500 mb-1">Façade Linéaire</p>
                <p className="text-3xl font-bold text-stone-800"><span id="val-facade">27</span> <span className="text-xl font-normal text-stone-500">m</span></p>
                <p id="desc-facade" className="text-xs text-stone-400 mt-2">Ouverture exceptionnelle</p>
                <p className="text-xs text-stone-400">Profondeur du terrain environ 53 mètres</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-emerald-200 opacity-20 text-7xl">★</div>
                <p className="text-sm text-emerald-800 mb-1 font-medium">Statut Urbanistique</p>
                <p className="text-xl font-bold text-emerald-900 leading-tight">Zone D2 Urbaine</p>
                <p className="text-xs text-emerald-700 mt-2 font-medium">Exempté d'AVNA, Terrain Titré</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 shadow-sm">
                <p className="text-sm text-stone-500 mb-1">COS (Coefficient d'Occupation des Sols)</p>
                <p className="text-3xl font-bold text-stone-800">70%</p>
                <p className="text-xs text-stone-400 mt-2">Emprise au sol maximale: 35%</p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 shadow-sm mt-8 mb-4">
              <h3 className="text-lg font-semibold mb-2 text-stone-800">Simulation des Frais d'Acquisition (Notaire & Taxes)</h3>
              <p className="text-sm text-stone-600 mb-5">Emilie, Michael, voici une estimation des frais d'acte au Maroc (basée sur le régime des terrains nus non bâtis). Ces montants s'ajustent dynamiquement :</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                  <p className="text-xs text-stone-500 mb-1">Prix d'Achat</p>
                  <p className="text-base font-bold text-stone-800"><span id="notaire-base">1 900 000</span> <span className="text-xs">MAD</span></p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                  <p className="text-xs text-stone-500 mb-1">Enregistrement (5%)</p>
                  <p className="text-base font-bold text-stone-800"><span id="notaire-enreg">95 000</span> <span className="text-xs">MAD</span></p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                  <p className="text-xs text-stone-500 mb-1">Conservation (~1%)</p>
                  <p className="text-base font-bold text-stone-800"><span id="notaire-cf">19 000</span> <span className="text-xs">MAD</span></p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                  <p className="text-xs text-stone-500 mb-1">Honoraires (~1.5% HT)</p>
                  <p className="text-base font-bold text-stone-800"><span id="notaire-hono">34 200</span> <span className="text-xs">MAD</span></p>
                </div>
              </div>
              <div className="bg-stone-800 text-white p-4 rounded-lg flex justify-between items-center shadow-md">
                <span className="font-medium text-sm">Total Estimé des Frais d'Acquisition :</span>
                <span className="text-xl font-bold"><span id="notaire-total">148 200</span> MAD</span>
              </div>
              <p className="text-xs text-stone-400 mt-2 text-right">* Estimation non contractuelle (inclut env. 1500 MAD de frais de dossier/timbres).</p>
            </div>

            <hr className="border-stone-200 my-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-stone-800">Faisabilité Architecturale {scenarioTitleSuffix}</h3>
                <p className="text-stone-600 mb-6" id="text-faisabilite">
                  L'acquisition conjointe des deux lots modifie radicalement le potentiel du foncier. La création d'une assiette foncière rectangulaire avec une façade d'environ 27 mètres linéaires permet une emprise au sol très confortable. Une fois les reculs de 4m appliqués, la largeur nette constructible passe à environ 19 mètres.
                </p>
                
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 mb-6">
                  <h4 className="text-sm font-semibold text-stone-800 mb-2">Règlementation (Zone D2)</h4>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• <strong>Retraits :</strong> 4 mètres minimum (limites latérales et fond).</li>
                    <li>• <strong>Hauteur :</strong> Sous-sol + RDC + Étage (Villa).</li>
                    <li>• <strong>Coût de construction estimé :</strong> 6 000 à 8 000 DHS HT / m².</li>
                  </ul>
                </div>
                
                <div id="alert-box" className="hidden bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-800 text-sm">
                  <strong>Point de vigilance :</strong> Avec une largeur initiale de 13m, l'application des retraits de 4m de chaque côté réduit la bande constructible à seulement 5 mètres, limitant drastiquement les options architecturales.
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-inner border border-stone-200 p-6 flex flex-col items-center justify-center min-h-[400px]">
                <h4 className="text-center text-sm font-medium text-stone-500 mb-6 uppercase tracking-widest">Simulation d'Emprise au Sol</h4>
                
                <div className="w-full max-w-[400px] h-[300px] flex items-end justify-center relative">
                  <div className="absolute bottom-[-25px] left-0 w-full text-center text-xs text-stone-500 border-t border-stone-300 pt-1">Largeur Totale Terrain</div>
                  
                  <div id="diagram-plot" className="plot-container h-full w-full">
                    <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-xs text-stone-500 rotate-[-90deg]">Profondeur</div>
                    
                    <span className="setback-label left-1 top-1/2 -translate-y-1/2">← 4m →</span>
                    <span className="setback-label right-1 top-1/2 -translate-y-1/2">← 4m →</span>
                    
                    <div id="diagram-buildable" className="buildable-area w-[calc(100%-80px)] h-[calc(100%-80px)]">
                      <span id="diagram-text">Zone Constructible<br/>(19m de large)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-stone-800">Analyse de Valorisation Commerciale</h2>
            <p className="text-stone-600 text-lg">
              Comparaison du coût d'acquisition au mètre carré. Ce graphique démontre que l'achat groupé, en plus de résoudre les problèmes de constructibilité, maintient une valorisation moyenne extrêmement compétitive pour la zone urbaine d'Essaouira.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md border border-stone-200 p-8">
            <div className="chart-container">
              <canvas id="valuationChart" ref={chartRef}></canvas>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-stone-900 text-stone-50 rounded-2xl shadow-2xl overflow-hidden border border-emerald-800">
          <div className="p-8 md:p-12 relative z-10">
            <div className="absolute top-0 right-0 opacity-10 text-9xl">🛡️</div>
            
            <h2 className="text-3xl font-semibold mb-3 text-white serif-font">Votre Accompagnement par Ilyana Invest</h2>
            <p className="text-stone-300 text-lg mb-8 max-w-3xl">
              Emilie, Michael, notre mission va bien au-delà de la simple identification du foncier. Nous agissons comme votre partenaire de confiance pour sécuriser et mener à bien l'intégralité de votre projet immobilier d'investissement au Maroc.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-medium text-emerald-400 mb-5 border-b border-stone-700 pb-2">Nos prestations incluses :</h3>
                <ul className="space-y-4 text-stone-200">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">✓</span>
                    <div>
                      <strong className="text-white block">Sécurisation et vérification du foncier</strong>
                      <span className="text-sm text-stone-400">Analyse des Titres Fonciers et Notes de Renseignement urbain (déjà réalisée).</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">🗓️</span>
                    <div>
                      <strong className="text-white block">Prochaine étape : Visite sur site</strong>
                      <span className="text-sm text-amber-400 font-medium">Visite en visio programmée le Mercredi 4 Mars à 12h30.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">✓</span>
                    <div>
                      <strong className="text-white block">Accompagnement à l'offre</strong>
                      <span className="text-sm text-stone-400">Stratégie, formulation et sécurisation de votre offre d'achat.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">✓</span>
                    <div>
                      <strong className="text-white block">Dues Diligences Notariales</strong>
                      <span className="text-sm text-stone-400">Coordination totale avec le Notaire, du compromis de vente jusqu'à l'acte définitif.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">✓</span>
                    <div>
                      <strong className="text-white block">Office des Changes & Transferts</strong>
                      <span className="text-sm text-stone-400">Accompagnement administratif pour le transfert de vos fonds au Maroc dans le respect de la réglementation.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 text-lg">✓</span>
                    <div>
                      <strong className="text-white block">Mise en relation réseau expert</strong>
                      <span className="text-sm text-stone-400">Introduction auprès de nos architectes et constructeurs partenaires validés.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 h-fit">
                <h3 className="text-lg font-medium text-white mb-4">Structure de nos honoraires</h3>
                <p className="text-sm text-stone-400 mb-6">Nos honoraires de commercialisation et de conseil s'élèvent à <strong className="text-emerald-400">5 000 € par lot</strong>. Ce montant est <span className="underline underline-offset-2">déjà inclus</span> dans le prix de vente affiché ci-dessus.</p>
                
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-600 before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-500 bg-stone-700 text-stone-300 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 text-sm">1</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-700/50 p-4 rounded border border-stone-600">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">50% des honoraires</h4>
                      </div>
                      <p className="text-xs text-stone-400 leading-snug">
                        Dus à la <strong>sécurisation du deal</strong> (Offre acceptée, diligence notaire, vérification clauses et sécurisation notariale). Règlement à la <strong>signature du compromis</strong>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-900 text-emerald-300 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 text-sm">2</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-700/50 p-4 rounded border border-stone-600">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-emerald-400 text-sm">50% des honoraires</h4>
                      </div>
                      <p className="text-xs text-stone-400 leading-snug">
                        Dus à l'aboutissement final du projet immobilier. Règlement effectué lors de la <strong>signature de l'acte définitif</strong>.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-stone-200 pt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-stone-800">Synthèse</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-4">
                ◈
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">L'Exclusivité "Zéro Voisin"</h3>
              <p className="text-stone-600 text-sm">
                Le remembrement permet d'obtenir un terrain bordé par 4 voies de desserte projetées. Résultat : <strong>Aucune mitoyenneté</strong>, 4 façades dégagées et une intimité absolue. Rarissime sur ce marché.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-4">
                ⚑
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Zéro Tracas Administratif</h3>
              <p className="text-stone-600 text-sm">
                Les terrains sont <strong>déjà titrés</strong> et situés en zone urbaine. Cela signifie qu'il n'y a pas besoin de s'engager dans la procédure AVNA, souvent longue et incertaine au Maroc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-4">
                ⇄
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Flexibilité d'Investissement</h3>
              <p className="text-stone-600 text-sm">
                Possibilité pour l'acquéreur de construire sa villa principale sur un lot et de conserver l'autre comme réserve foncière pour une revente future avec plus-value (Flip immobilier).
              </p>
            </div>

          </div>
        </section>

        <section className="mt-16 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="bg-stone-900 px-8 py-8 border-b-4 border-emerald-600 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 text-8xl">🏗️</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 serif-font relative z-10">Post-Acquisition : Assistance à la Maîtrise d’Ouvrage (AMO)</h2>
            <p className="text-stone-300 text-lg max-w-3xl relative z-10">
              Emilie, Michael, nous intervenons comme <strong>tiers de confiance</strong> absolu entre vous (l’investisseur) et les prestataires locaux (architectes, bureaux d'études, constructeurs).
            </p>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 text-xl font-bold">⚖️</span>
                  <h3 className="text-xl font-semibold text-stone-800">Pilotage Technique & Tiers de Confiance</h3>
                </div>
                
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 shadow-sm relative pl-12">
                  <div className="absolute left-4 top-6 text-emerald-500 text-xl">▪</div>
                  <h4 className="font-bold text-stone-800 mb-2">Interface Métier</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Nous assurons la traduction de vos besoins d'investisseurs en contraintes techniques claires. Nous vérifions scrupuleusement la cohérence et la faisabilité des solutions proposées par les différents corps d'état sur le chantier.
                  </p>
                </div>
                
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 shadow-sm relative pl-12">
                  <div className="absolute left-4 top-6 text-emerald-500 text-xl">▪</div>
                  <h4 className="font-bold text-stone-800 mb-2">Alignement d'Intérêts</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Notre rôle est exclusif : garantir que chaque décision prise sur le chantier respecte <strong>uniquement vos objectifs économiques</strong> et la qualité finale de l'actif, écartant tout risque de conflit d'intérêts avec les exécutants.
                  </p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-amber-700 text-xl font-bold">🤖</span>
                  <h3 className="text-xl font-semibold text-stone-800">Infrastructure IA & Optimisation Budgétaire</h3>
                </div>
                <p className="text-sm text-stone-600 mb-6 font-medium">
                  Nous utilisons une solution logicielle propriétaire, développée en interne, dédiée au contrôle ultra-rigoureux des coûts de construction de nos clients.
                </p>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-emerald-600 text-white text-xs font-bold mr-4 shrink-0 mt-0.5">1</span>
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">Ingestion de Données</h4>
                      <p className="text-xs text-stone-500 mt-1">Le système analyse automatiquement chaque poste des devis et bordereaux de prix transmis par les entreprises de BTP.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-emerald-600 text-white text-xs font-bold mr-4 shrink-0 mt-0.5">2</span>
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">Benchmark & Audit</h4>
                      <p className="text-xs text-stone-500 mt-1">L'outil confronte instantanément ces données aux prix réels du marché marocain et aux coûts d'approvisionnement des matériaux en temps réel.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-amber-500 text-white text-xs font-bold mr-4 shrink-0 mt-0.5">3</span>
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">Économies d'Échelle</h4>
                      <p className="text-xs text-stone-500 mt-1">Cette analyse granulaire permet d'identifier les écarts injustifiés, de négocier sur des bases 100% factuelles et d'optimiser le coût de revient global de votre projet.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-8 mt-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>Conçu pour l'analyse technico-commerciale - IlyanaInvest.</p>
        </div>
      </footer>
    </div>
  );
};
