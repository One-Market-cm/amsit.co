'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quels sont les délais de livraison depuis la Chine?',
      answer: 'Les délais varient selon le service choisi. Notre transit express prend 5-7 jours, tandis que le transit standard prend 20-30 jours. Nous vous fournissons un suivi en temps réel pour tous les envois.'
    },
    {
      question: 'Comment fonctionne le service de sourcing?',
      answer: 'Notre équipe en Chine identifie et vérifie des fournisseurs fiables selon vos critères. Nous négocions les prix, contrôlons la qualité et gérons toute la logistique pour vous.'
    },
    {
      question: 'Prenez-vous en charge le dédouanement?',
      answer: 'Oui, absolument! Nous gérons toutes les formalités douanières au Gabon et dans les pays africains que nous desservons. Notre expertise garantit un passage en douane rapide et sans problème.'
    },
    {
      question: 'Quels types de produits pouvez-vous transporter?',
      answer: 'Nous transportons une large gamme de produits: équipements industriels, électronique, textiles, matériaux de construction, et bien plus. Contactez-nous pour des produits spécifiques ou réglementés.'
    },
    {
      question: 'Comment obtenir un devis?',
      answer: 'Vous pouvez utiliser notre calculateur en ligne pour une estimation rapide, ou nous contacter directement pour un devis détaillé et personnalisé. Notre équipe répond sous 24h.'
    },
    {
      question: 'Proposez-vous une assurance pour les marchandises?',
      answer: 'Oui, nous offrons une assurance complète pour vos marchandises pendant le transport. Nous pouvons également vous conseiller sur les meilleures options selon la valeur et la nature de vos produits.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
          Questions fréquentes
        </h2>
        <p className="text-xl text-gray-600">
          Trouvez rapidement les réponses à vos questions
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-heading font-semibold text-lg text-primary pr-8">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Vous n'avez pas trouvé la réponse à votre question?</p>
        <a href="/contact" className="btn-primary inline-block">
          Contactez-nous
        </a>
      </div>
    </div>
  );
}
