'use client';

import { useState } from 'react';

export default function PackageTracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        number: trackingNumber,
        status: 'En transit',
        location: 'Guangzhou, Chine',
        estimatedDelivery: '15 Janvier 2026',
        history: [
          { date: '2026-01-04', location: 'Guangzhou, Chine', status: 'Colis expédié' },
          { date: '2026-01-05', location: 'Hong Kong', status: 'En transit' },
          { date: '2026-01-08', location: 'En route vers Libreville', status: 'En transit international' },
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
          Suivi de colis
        </h2>
        <p className="text-xl text-gray-600">
          Suivez votre envoi en temps réel
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleTrack} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Entrez votre numéro de suivi"
              className="flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary whitespace-nowrap"
            >
              {isLoading ? 'Recherche...' : 'Suivre mon colis'}
            </button>
          </div>
        </form>

        {trackingResult && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-primary-700 text-white p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-200">Numéro de suivi</p>
                  <p className="text-xl font-bold">{trackingResult.number}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-200">Statut</p>
                  <p className="text-xl font-bold text-secondary">{trackingResult.status}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-200">Position actuelle</p>
                  <p className="font-semibold">{trackingResult.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-200">Livraison estimée</p>
                  <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Historique du colis</h3>
              <div className="space-y-4">
                {trackingResult.history.map((event: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                      {index < trackingResult.history.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-300 ml-1 mt-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-semibold text-gray-900">{event.status}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!trackingResult && !isLoading && (
          <div className="text-center text-gray-500 py-8">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p>Entrez un numéro de suivi pour voir les détails de votre colis</p>
          </div>
        )}
      </div>
    </div>
  );
}
