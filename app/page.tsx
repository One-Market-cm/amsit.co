import Link from 'next/link';
import QuoteCalculator from '@/components/QuoteCalculator';
import PackageTracking from '@/components/PackageTracking';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Solutions logistiques complètes <span className="text-secondary">Chine–Afrique</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Votre partenaire de confiance pour l'importation, le transit et la logistique entre la Chine et l'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Demander un devis gratuit
              </Link>
              <Link href="/services" className="btn-outline text-lg bg-white text-primary hover:bg-gray-100">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary">
            Pourquoi choisir AMUNIR Trading?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Rapidité</h3>
              <p className="text-gray-600">
                Transit express pour vos envois urgents. Délais optimisés grâce à notre réseau étendu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Fiabilité</h3>
              <p className="text-gray-600">
                Plus de 10 ans d'expérience. Suivi en temps réel de vos marchandises.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Prix compétitifs</h3>
              <p className="text-gray-600">
                Tarifs transparents et négociés. Meilleur rapport qualité-prix du marché.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Expertise douanière</h3>
              <p className="text-gray-600">
                Dédouanement simplifié. Gestion complète des formalités administratives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Réseau international</h3>
              <p className="text-gray-600">
                Partenaires en Chine et dans toute l'Afrique. Couverture complète de vos besoins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Support 24/7</h3>
              <p className="text-gray-600">
                Équipe disponible à tout moment. Service client réactif et professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Nos services principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions complètes pour tous vos besoins logistiques entre la Chine et l'Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary to-primary-700 text-white p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-heading font-semibold mb-3">Sourcing Chine</h3>
              <p className="mb-4">Identification et sélection de fournisseurs fiables en Chine</p>
              <Link href="/services#sourcing" className="text-secondary hover:underline font-medium">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-600 text-white p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-heading font-semibold mb-3">Transit Express</h3>
              <p className="mb-4">Livraison rapide pour vos envois urgents</p>
              <Link href="/services#transit" className="text-white hover:underline font-medium">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-700 text-white p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-heading font-semibold mb-3">Dédouanement</h3>
              <p className="mb-4">Gestion complète des formalités douanières</p>
              <Link href="/services#douane" className="text-secondary hover:underline font-medium">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-600 text-white p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-heading font-semibold mb-3">Centrale d'achat</h3>
              <p className="mb-4">Groupage de commandes pour optimiser vos coûts</p>
              <Link href="/services#centrale" className="text-white hover:underline font-medium">
                En savoir plus →
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <QuoteCalculator />
        </div>
      </section>

      {/* Package Tracking */}
      <section className="section-padding">
        <div className="container-custom">
          <PackageTracking />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Demander un devis
            </Link>
            <Link href="/a-propos" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-primary">
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
