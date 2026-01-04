import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Guide complet de l\'importation depuis la Chine en 2026',
      excerpt: 'Découvrez les étapes essentielles pour réussir vos importations depuis la Chine. De la sélection des fournisseurs au dédouanement, nous vous guidons pas à pas.',
      date: '15 Décembre 2025',
      category: 'Guide',
      image: '📦',
      slug: 'guide-importation-chine-2026'
    },
    {
      title: 'Transit express vs standard : quel choix pour votre entreprise?',
      excerpt: 'Comprenez les avantages et inconvénients de chaque option pour optimiser vos coûts et délais de livraison selon vos besoins spécifiques.',
      date: '10 Décembre 2025',
      category: 'Logistique',
      image: '🚚',
      slug: 'transit-express-vs-standard'
    },
    {
      title: 'Les nouvelles réglementations douanières au Gabon',
      excerpt: 'Point sur les dernières modifications des réglementations douanières gabonaises et leur impact sur vos importations.',
      date: '5 Décembre 2025',
      category: 'Douane',
      image: '📋',
      slug: 'nouvelles-reglementations-douanieres-gabon'
    },
    {
      title: 'Comment négocier avec les fournisseurs chinois',
      excerpt: 'Techniques et astuces pour obtenir les meilleurs prix et conditions auprès de vos fournisseurs en Chine.',
      date: '28 Novembre 2025',
      category: 'Sourcing',
      image: '🤝',
      slug: 'negocier-fournisseurs-chinois'
    },
    {
      title: 'L\'impact du e-commerce sur la logistique Chine-Afrique',
      excerpt: 'Analyse des tendances du commerce électronique et leur influence sur les flux logistiques entre la Chine et l\'Afrique.',
      date: '20 Novembre 2025',
      category: 'Tendances',
      image: '💻',
      slug: 'impact-ecommerce-logistique'
    },
    {
      title: 'Optimiser vos coûts de transport maritime',
      excerpt: 'Stratégies pour réduire vos frais de transport tout en maintenant la qualité et la fiabilité de vos livraisons.',
      date: '15 Novembre 2025',
      category: 'Logistique',
      image: '🚢',
      slug: 'optimiser-couts-transport-maritime'
    },
  ];

  const categories = ['Tous', 'Guide', 'Logistique', 'Douane', 'Sourcing', 'Tendances'];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Blog & Actualités
            </h1>
            <p className="text-xl text-gray-200">
              Conseils, guides et actualités sur la logistique Chine-Afrique
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center p-12">
                  <div className="text-9xl">📦</div>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Article vedette
                  </div>
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                    <Link href={`/blog/${blogPosts[0].slug}`} className="btn-primary">
                      Lire l'article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-primary-700 h-48 flex items-center justify-center">
                  <div className="text-7xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary hover:text-secondary-600 font-semibold inline-flex items-center"
                  >
                    Lire la suite
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-secondary text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                3
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Suivant →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Restez informé
            </h2>
            <p className="text-xl mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
            Ressources utiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Guides pratiques</h3>
              <p className="text-gray-600 mb-4">
                Téléchargez nos guides complets sur l'importation et la logistique
              </p>
              <Link href="#" className="text-secondary hover:underline font-semibold">
                Voir les guides →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Études de cas</h3>
              <p className="text-gray-600 mb-4">
                Découvrez comment nos clients ont optimisé leur logistique
              </p>
              <Link href="#" className="text-secondary hover:underline font-semibold">
                Lire les études →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Webinaires</h3>
              <p className="text-gray-600 mb-4">
                Participez à nos sessions en ligne avec nos experts
              </p>
              <Link href="#" className="text-secondary hover:underline font-semibold">
                S'inscrire →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
