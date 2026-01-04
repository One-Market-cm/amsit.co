import Link from 'next/link';

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              À propos d'AMUNIR Trading
            </h1>
            <p className="text-xl text-gray-200">
              Votre partenaire de confiance pour la logistique Chine-Afrique depuis plus de 10 ans
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary text-center">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Fondée en 2013, <strong className="text-primary">AMUNIR Trading</strong> est une entreprise 
                du groupe <strong className="text-primary">AMS International Group</strong>, spécialisée dans 
                les solutions logistiques entre la Chine et l'Afrique. Basée au Gabon, notre entreprise est née 
                d'une vision simple : faciliter les échanges commerciaux entre ces deux continents en pleine croissance.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Au fil des années, nous sommes devenus un acteur majeur de la logistique internationale, 
                gérant des milliers de conteneurs chaque année pour des clients de tous secteurs. Notre 
                expertise couvre l'ensemble de la chaîne logistique, du sourcing en Chine jusqu'à la 
                livraison finale en Afrique.
              </p>
              <p className="text-lg leading-relaxed">
                Aujourd'hui, AMUNIR Trading c'est une équipe dévouée de professionnels passionnés, 
                des bureaux en Chine et au Gabon, et un réseau de partenaires fiables dans toute l'Afrique. 
                Notre mission reste inchangée : offrir à nos clients des solutions logistiques efficaces, 
                fiables et compétitives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Intégrité</h3>
              <p className="text-gray-600">
                Transparence et honnêteté dans toutes nos relations clients et partenaires
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Excellence</h3>
              <p className="text-gray-600">
                Recherche constante de la perfection dans chaque aspect de notre service
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Collaboration</h3>
              <p className="text-gray-600">
                Partenariats solides avec nos clients et fournisseurs pour une réussite commune
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Innovation</h3>
              <p className="text-gray-600">
                Adoption de nouvelles technologies pour optimiser nos services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
            Notre équipe
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              Notre force réside dans notre équipe de professionnels expérimentés, 
              dévoués à offrir le meilleur service à nos clients. Basés en Chine et au Gabon, 
              nos experts travaillent en synergie pour assurer le succès de vos projets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Équipe Sourcing</h3>
              <p className="text-gray-600">Experts basés en Chine pour identifier les meilleurs fournisseurs</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Équipe Logistique</h3>
              <p className="text-gray-600">Spécialistes du transport et de la gestion des flux</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Équipe Douane</h3>
              <p className="text-gray-600">Experts en réglementation et formalités douanières</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            AMUNIR Trading en chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10+</div>
              <p className="text-lg">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-lg">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">2000+</div>
              <p className="text-lg">Conteneurs/an</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">15</div>
              <p className="text-lg">Pays desservis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Présence */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
            Notre présence internationale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Chine</h3>
              <p className="text-gray-600 mb-4">
                Nos bureaux en Chine vous donnent un accès direct aux meilleurs fournisseurs et fabricants.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Guangzhou, Chine
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Yiwu, Chine
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Gabon</h3>
              <p className="text-gray-600 mb-4">
                Notre siège social au Gabon assure une coordination parfaite et un service client de proximité.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Libreville, Gabon
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
            Prêt à travailler avec nous?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'entreprises qui nous font confiance pour leurs besoins logistiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Contactez-nous
            </Link>
            <Link href="/services" className="btn-outline text-lg">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
