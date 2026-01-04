import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-200">
              Solutions logistiques complètes pour faciliter vos échanges commerciaux entre la Chine et l'Afrique
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Chine */}
      <section id="sourcing" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Service Premium
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Sourcing en Chine
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre équipe basée en Chine vous aide à identifier et sélectionner les meilleurs fournisseurs 
                pour vos produits. Nous vérifions leur fiabilité, négocions les prix et contrôlons la qualité.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Recherche et sélection de fournisseurs qualifiés</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Vérification de la qualité des produits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Négociation des meilleurs prix</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Suivi de production et inspection avant expédition</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Demander un devis
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Processus de sourcing</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Analyse de vos besoins</h4>
                    <p className="text-sm text-gray-200">Nous définissons ensemble vos critères et spécifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Recherche de fournisseurs</h4>
                    <p className="text-sm text-gray-200">Identification et présélection des meilleurs candidats</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vérification et négociation</h4>
                    <p className="text-sm text-gray-200">Audit des fournisseurs et obtention des meilleurs tarifs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Gestion de commande</h4>
                    <p className="text-sm text-gray-200">Suivi de production et contrôle qualité avant expédition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Express & Standard */}
      <section id="transit" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Services de Transit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux options adaptées à vos besoins et votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transit Express */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
              <div className="text-center mb-6">
                <div className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  EXPRESS
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Transit Express</h3>
                <p className="text-gray-600">Pour vos envois urgents</p>
              </div>
              <div className="mb-6">
                <div className="text-center py-4 bg-gray-50 rounded-lg">
                  <p className="text-4xl font-bold text-secondary">5-7 jours</p>
                  <p className="text-sm text-gray-600 mt-1">Délai de livraison</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transport aérien prioritaire</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dédouanement accéléré</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suivi en temps réel</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Livraison à domicile</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">
                Obtenir un devis
              </Link>
            </div>

            {/* Transit Standard */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
              <div className="text-center mb-6">
                <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  STANDARD
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Transit Standard</h3>
                <p className="text-gray-600">Solution économique</p>
              </div>
              <div className="mb-6">
                <div className="text-center py-4 bg-gray-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary">20-30 jours</p>
                  <p className="text-sm text-gray-600 mt-1">Délai de livraison</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transport maritime économique</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Idéal pour volumes importants</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suivi régulier</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Meilleur rapport qualité-prix</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full block text-center">
                Obtenir un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dédouanement */}
      <section id="douane" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary to-secondary-600 p-8 rounded-lg text-white order-2 lg:order-1">
              <h3 className="text-2xl font-heading font-bold mb-6">Nos expertises douanières</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Classification tarifaire</h4>
                  <p className="text-sm">Détermination précise des codes douaniers pour vos marchandises</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Documents d'importation</h4>
                  <p className="text-sm">Préparation complète de tous les documents nécessaires</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Calcul des taxes</h4>
                  <p className="text-sm">Estimation précise des droits et taxes applicables</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Représentation en douane</h4>
                  <p className="text-sm">Nous agissons en votre nom auprès des autorités</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Dédouanement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Simplifiez vos formalités douanières avec notre expertise. Nous gérons l'ensemble du processus 
                de dédouanement pour un passage en douane rapide et sans problème.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Équipe formée aux réglementations locales</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Relations privilégiées avec les autorités</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Processus optimisé pour réduire les délais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Conseils pour optimiser vos coûts douaniers</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Centrale d'achat */}
      <section id="centrale" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Centrale d'achat groupé
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Réduisez vos coûts en mutualisant vos commandes avec d'autres importateurs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">Économies</h3>
                <p className="text-gray-600">Jusqu'à 40% de réduction sur les frais de transport</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">Flexibilité</h3>
                <p className="text-gray-600">Commandez même de petites quantités</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">Sécurité</h3>
                <p className="text-gray-600">Gestion professionnelle de bout en bout</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Comment ça marche?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">1</div>
                  <p className="text-sm">Vous nous envoyez votre liste de produits</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">2</div>
                  <p className="text-sm">Nous groupons avec d'autres commandes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">3</div>
                  <p className="text-sm">Expédition et dédouanement groupés</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">4</div>
                  <p className="text-sm">Réception de vos produits à prix réduit</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary text-lg">
                Rejoindre la centrale d'achat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Besoin d'un service personnalisé?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Contactez nos experts
          </Link>
        </div>
      </section>
    </>
  );
}
