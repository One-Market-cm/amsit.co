import Link from 'next/link';

export default function SecteursPage() {
  const sectors = [
    {
      title: 'Commerce & Distribution',
      description: 'Solutions logistiques pour les commerces de détail et grossistes. Approvisionnement régulier en produits variés.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      examples: ['Électronique grand public', 'Textiles et vêtements', 'Articles ménagers', 'Jouets et loisirs']
    },
    {
      title: 'Construction & BTP',
      description: 'Import de matériaux de construction, équipements et fournitures pour vos projets de construction.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      examples: ['Matériaux de construction', 'Équipements de chantier', 'Quincaillerie', 'Outillage professionnel']
    },
    {
      title: 'Industrie & Manufacturing',
      description: 'Approvisionnement en matières premières, composants et équipements industriels.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      examples: ['Machines industrielles', 'Pièces détachées', 'Matières premières', 'Équipements de production']
    },
    {
      title: 'Technologie & IT',
      description: 'Import d\'équipements informatiques, composants électroniques et accessoires technologiques.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      examples: ['Ordinateurs et serveurs', 'Composants électroniques', 'Smartphones et tablettes', 'Accessoires IT']
    },
    {
      title: 'Agriculture & Agro-industrie',
      description: 'Solutions logistiques pour l\'import d\'équipements agricoles et intrants.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      examples: ['Équipements agricoles', 'Systèmes d\'irrigation', 'Outils de jardinage', 'Semences et engrais']
    },
    {
      title: 'Santé & Équipements médicaux',
      description: 'Import sécurisé d\'équipements médicaux et fournitures de santé.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      examples: ['Équipements médicaux', 'Dispositifs de diagnostic', 'Mobilier médical', 'Fournitures hospitalières']
    },
    {
      title: 'Énergie & Énergies renouvelables',
      description: 'Transport d\'équipements pour projets énergétiques et solutions renouvelables.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      examples: ['Panneaux solaires', 'Générateurs', 'Batteries et onduleurs', 'Équipements électriques']
    },
    {
      title: 'Hôtellerie & Restauration',
      description: 'Fournitures et équipements pour hôtels, restaurants et établissements touristiques.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      examples: ['Équipements de cuisine', 'Mobilier hôtelier', 'Linge et textiles', 'Vaisselle et ustensiles']
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Secteurs d'activité
            </h1>
            <p className="text-xl text-gray-200">
              Des solutions logistiques adaptées à chaque industrie
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
              Une expertise multisectorielle
            </h2>
            <p className="text-lg text-gray-600">
              Forte de plus de 10 ans d'expérience, AMUNIR Trading accompagne les entreprises 
              de tous secteurs dans leurs opérations d'import-export entre la Chine et l'Afrique. 
              Notre connaissance approfondie des spécificités de chaque industrie nous permet de 
              vous offrir des solutions sur mesure.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary"
              >
                <div className="text-secondary mb-4">{sector.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Exemples de produits:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {sector.examples.map((example, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary">
              Pourquoi nous choisir pour votre secteur?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                    Connaissance sectorielle
                  </h3>
                  <p className="text-gray-600">
                    Nos experts comprennent les spécificités et réglementations de chaque industrie
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                    Rapidité d'exécution
                  </h3>
                  <p className="text-gray-600">
                    Processus optimisés pour respecter vos délais, même les plus serrés
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                    Conformité garantie
                  </h3>
                  <p className="text-gray-600">
                    Respect strict des normes et réglementations en vigueur
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                    Tarification compétitive
                  </h3>
                  <p className="text-gray-600">
                    Solutions optimisées pour réduire vos coûts logistiques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary">
              Exemples de réussite
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary to-primary-700 text-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold">Commerce électronique</h3>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm font-semibold">-35%</span>
                </div>
                <p className="mb-4">
                  Un importateur de produits électroniques a réduit ses coûts de 35% grâce à notre 
                  centrale d'achat et notre service de sourcing direct en Chine.
                </p>
                <p className="text-sm text-gray-200">
                  Volume: 15 conteneurs/mois • Délai moyen: 22 jours
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary to-secondary-600 text-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold">Construction</h3>
                  <span className="bg-white text-secondary px-3 py-1 rounded-full text-sm font-semibold">12 jours</span>
                </div>
                <p className="mb-4">
                  Livraison express de matériaux urgents pour un chantier avec délai serré, 
                  garantissant le respect du planning de construction.
                </p>
                <p className="text-sm text-white/80">
                  Type: Transit Express • Destination: Libreville
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Votre secteur nécessite une expertise particulière?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques. 
            Nous créons des solutions sur mesure pour chaque client.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Parler à un expert
          </Link>
        </div>
      </section>
    </>
  );
}
