import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    title: 'Guide complet de l\'importation depuis la Chine en 2026',
    excerpt: 'Découvrez les étapes essentielles pour réussir vos importations depuis la Chine. De la sélection des fournisseurs au dédouanement, nous vous guidons pas à pas.',
    date: '15 Décembre 2025',
    category: 'Guide',
    image: '📦',
    slug: 'guide-importation-chine-2026',
    content: `
      <h2>Introduction</h2>
      <p>L'importation depuis la Chine en 2026 offre de nombreuses opportunités pour les entreprises africaines. Ce guide complet vous accompagne à travers toutes les étapes essentielles pour réussir vos importations.</p>
      
      <h2>1. Sélection des fournisseurs</h2>
      <p>La première étape cruciale est de trouver des fournisseurs fiables en Chine. Voici les points clés à considérer :</p>
      <ul>
        <li>Vérifier les certifications et licences</li>
        <li>Demander des échantillons avant toute commande importante</li>
        <li>Vérifier les références et avis clients</li>
        <li>Visiter les usines si possible</li>
      </ul>
      
      <h2>2. Négociation et commande</h2>
      <p>Une fois le fournisseur identifié, la négociation est essentielle pour obtenir les meilleurs prix et conditions.</p>
      
      <h2>3. Transport et logistique</h2>
      <p>AMUNIR Trading vous accompagne dans toutes les étapes du transport, du port chinois jusqu'à votre destination en Afrique.</p>
      
      <h2>4. Dédouanement</h2>
      <p>Le dédouanement peut sembler complexe, mais notre équipe d'experts gère toutes les formalités administratives pour vous.</p>
      
      <h2>Conclusion</h2>
      <p>Avec le bon partenaire logistique, l'importation depuis la Chine devient simple et efficace. Contactez-nous pour discuter de votre projet.</p>
    `
  },
  {
    title: 'Transit express vs standard : quel choix pour votre entreprise?',
    excerpt: 'Comprenez les avantages et inconvénients de chaque option pour optimiser vos coûts et délais de livraison selon vos besoins spécifiques.',
    date: '10 Décembre 2025',
    category: 'Logistique',
    image: '🚚',
    slug: 'transit-express-vs-standard',
    content: `
      <h2>Introduction</h2>
      <p>Choisir entre le transit express et standard est une décision importante qui impacte vos coûts et délais. Ce guide vous aide à faire le bon choix.</p>
      
      <h2>Transit Express</h2>
      <h3>Avantages</h3>
      <ul>
        <li>Livraison rapide (15-20 jours)</li>
        <li>Priorité dans le traitement</li>
        <li>Idéal pour les commandes urgentes</li>
      </ul>
      
      <h3>Inconvénients</h3>
      <ul>
        <li>Coût plus élevé</li>
        <li>Capacité limitée</li>
      </ul>
      
      <h2>Transit Standard</h2>
      <h3>Avantages</h3>
      <ul>
        <li>Coût économique</li>
        <li>Grande capacité de chargement</li>
        <li>Parfait pour les commandes planifiées</li>
      </ul>
      
      <h3>Inconvénients</h3>
      <ul>
        <li>Délai plus long (30-45 jours)</li>
        <li>Moins de flexibilité</li>
      </ul>
      
      <h2>Quel choix pour vous?</h2>
      <p>Le choix dépend de vos priorités : rapidité ou économie. Notre équipe peut vous conseiller selon votre situation spécifique.</p>
    `
  },
  {
    title: 'Les nouvelles réglementations douanières au Gabon',
    excerpt: 'Point sur les dernières modifications des réglementations douanières gabonaises et leur impact sur vos importations.',
    date: '5 Décembre 2025',
    category: 'Douane',
    image: '📋',
    slug: 'nouvelles-reglementations-douanieres-gabon',
    content: `
      <h2>Mise à jour réglementaire 2026</h2>
      <p>Les autorités gabonaises ont récemment mis à jour les réglementations douanières. Voici ce que vous devez savoir.</p>
      
      <h2>Principales modifications</h2>
      <ul>
        <li>Nouvelles exigences documentaires</li>
        <li>Mise à jour des tarifs douaniers</li>
        <li>Procédures de dédouanement simplifiées</li>
        <li>Digitalisation accrue des démarches</li>
      </ul>
      
      <h2>Impact sur vos importations</h2>
      <p>Ces changements visent à faciliter le commerce tout en renforçant la conformité. Notre équipe maîtrise parfaitement ces nouvelles réglementations.</p>
      
      <h2>Comment AMUNIR Trading vous aide</h2>
      <p>Nous gérons toutes les formalités douanières pour vous garantir une conformité totale avec les nouvelles réglementations.</p>
    `
  },
  {
    title: 'Comment négocier avec les fournisseurs chinois',
    excerpt: 'Techniques et astuces pour obtenir les meilleurs prix et conditions auprès de vos fournisseurs en Chine.',
    date: '28 Novembre 2025',
    category: 'Sourcing',
    image: '🤝',
    slug: 'negocier-fournisseurs-chinois',
    content: `
      <h2>L'art de la négociation en Chine</h2>
      <p>Négocier avec des fournisseurs chinois nécessite une approche culturelle adaptée et des techniques spécifiques.</p>
      
      <h2>Préparation</h2>
      <ul>
        <li>Recherchez le prix du marché</li>
        <li>Comprenez les coûts de production</li>
        <li>Préparez plusieurs scénarios</li>
        <li>Établissez vos limites</li>
      </ul>
      
      <h2>Techniques de négociation</h2>
      <ol>
        <li>Construire une relation de confiance</li>
        <li>Commencer par des petites commandes</li>
        <li>Négocier le volume et les conditions de paiement</li>
        <li>Demander des échantillons gratuits</li>
        <li>Obtenir des garanties écrites</li>
      </ol>
      
      <h2>Erreurs à éviter</h2>
      <ul>
        <li>Ne jamais accepter la première offre</li>
        <li>Ne pas négliger la qualité au profit du prix</li>
        <li>Éviter les paiements 100% à l'avance</li>
      </ul>
      
      <h2>Le rôle d'AMUNIR Trading</h2>
      <p>Notre expertise du marché chinois et nos relations établies vous garantissent les meilleures conditions.</p>
    `
  },
  {
    title: 'L\'impact du e-commerce sur la logistique Chine-Afrique',
    excerpt: 'Analyse des tendances du commerce électronique et leur influence sur les flux logistiques entre la Chine et l\'Afrique.',
    date: '20 Novembre 2025',
    category: 'Tendances',
    image: '💻',
    slug: 'impact-ecommerce-logistique',
    content: `
      <h2>La révolution du e-commerce</h2>
      <p>Le e-commerce transforme profondément la logistique entre la Chine et l'Afrique, créant de nouvelles opportunités.</p>
      
      <h2>Tendances actuelles</h2>
      <ul>
        <li>Augmentation des petits colis</li>
        <li>Besoin de rapidité accrue</li>
        <li>Tracking en temps réel indispensable</li>
        <li>Diversification des produits</li>
      </ul>
      
      <h2>Défis logistiques</h2>
      <p>Le e-commerce impose de nouveaux standards : livraisons rapides, gestion des retours, et transparence totale sur le suivi.</p>
      
      <h2>Solutions AMUNIR Trading</h2>
      <p>Nous avons adapté nos services pour répondre aux besoins spécifiques du e-commerce : groupage optimisé, tracking avancé, et délais compétitifs.</p>
      
      <h2>Perspectives d'avenir</h2>
      <p>Le marché du e-commerce Chine-Afrique continuera de croître, et nous investissons constamment pour rester à la pointe.</p>
    `
  },
  {
    title: 'Optimiser vos coûts de transport maritime',
    excerpt: 'Stratégies pour réduire vos frais de transport tout en maintenant la qualité et la fiabilité de vos livraisons.',
    date: '15 Novembre 2025',
    category: 'Logistique',
    image: '🚢',
    slug: 'optimiser-couts-transport-maritime',
    content: `
      <h2>Réduire vos coûts sans compromis</h2>
      <p>L'optimisation des coûts de transport maritime est essentielle pour la compétitivité de votre entreprise.</p>
      
      <h2>Stratégies d'optimisation</h2>
      <h3>1. Groupage de marchandises</h3>
      <p>Combinez plusieurs commandes pour remplir un conteneur et réduire les coûts unitaires.</p>
      
      <h3>2. Planification anticipée</h3>
      <p>Réservez vos espaces à l'avance pour bénéficier de meilleurs tarifs.</p>
      
      <h3>3. Choix du type de conteneur</h3>
      <ul>
        <li>Conteneur 20 pieds pour petits volumes</li>
        <li>Conteneur 40 pieds pour grandes quantités</li>
        <li>Groupage pour volumes moyens</li>
      </ul>
      
      <h3>4. Négociation de contrats long terme</h3>
      <p>Des engagements réguliers permettent d'obtenir des tarifs préférentiels.</p>
      
      <h2>Erreurs coûteuses à éviter</h2>
      <ul>
        <li>Sous-estimer les coûts annexes</li>
        <li>Négliger l'assurance transport</li>
        <li>Mal calculer le poids volumétrique</li>
      </ul>
      
      <h2>L'accompagnement AMUNIR Trading</h2>
      <p>Nos experts analysent votre situation pour vous proposer la solution la plus économique et efficace.</p>
    `
  },
];

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-200 hover:text-white mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
            <div className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-200">
              <span className="text-6xl mr-4">{post.image}</span>
              <div>
                <p className="font-medium">Publié le {post.date}</p>
                <p className="text-sm">Par l'équipe AMUNIR Trading</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-primary to-primary-700 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Besoin d'aide pour votre projet logistique?
              </h2>
              <p className="text-lg mb-6">
                Notre équipe d'experts est là pour vous accompagner
              </p>
              <Link href="/contact" className="btn-primary">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="bg-gradient-to-br from-primary to-primary-700 h-32 flex items-center justify-center">
                    <div className="text-5xl">{relatedPost.image}</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold mt-3 mb-2 text-primary">
                      {relatedPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-secondary hover:text-secondary-600 font-semibold inline-flex items-center mt-2"
                    >
                      Lire l'article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
