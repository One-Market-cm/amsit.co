'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jean-Pierre M.',
      company: 'Import Gabon SA',
      text: 'AMUNIR Trading a transformé notre chaîne d\'approvisionnement. Leur service de sourcing en Chine nous a permis de réduire nos coûts de 30% tout en améliorant la qualité.',
      rating: 5,
    },
    {
      name: 'Marie K.',
      company: 'TechStore Libreville',
      text: 'Service impeccable! Le transit express nous permet de recevoir nos commandes en moins d\'une semaine. L\'équipe est toujours disponible et professionnelle.',
      rating: 5,
    },
    {
      name: 'Abdoulaye S.',
      company: 'Centrale BTP',
      text: 'Nous travaillons avec AMUNIR depuis 3 ans. Leur expertise en dédouanement nous fait gagner un temps précieux. Je recommande vivement leurs services.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
          Témoignages clients
        </h2>
        <p className="text-xl text-gray-600">
          Ce que nos clients disent de nous
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-700 italic mb-6">
            "{testimonials[currentIndex].text}"
          </p>

          <div>
            <p className="font-heading font-semibold text-primary text-lg">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-600">{testimonials[currentIndex].company}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
