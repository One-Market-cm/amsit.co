'use client';

import { useState } from 'react';

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    origin: 'Chine',
    destination: '',
    weight: '',
    type: 'standard',
  });
  const [quote, setQuote] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple calculation logic (this would be more complex in a real application)
    const baseRate = formData.type === 'express' ? 15 : 8;
    const weight = parseFloat(formData.weight) || 0;
    const calculatedQuote = baseRate * weight;
    
    setQuote(calculatedQuote);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
          Calculateur de devis
        </h2>
        <p className="text-xl text-gray-600">
          Obtenez une estimation rapide de vos frais de transport
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Origine
              </label>
              <select
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="Chine">Chine</option>
                <option value="Hong Kong">Hong Kong</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              >
                <option value="">Sélectionner...</option>
                <option value="Gabon">Gabon - Libreville</option>
                <option value="Cameroun">Cameroun - Douala</option>
                <option value="Congo">Congo - Brazzaville</option>
                <option value="RDC">RDC - Kinshasa</option>
                <option value="Autre">Autre destination</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Poids (kg)
              </label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="Ex: 100"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de service
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="standard">Transit Standard</option>
                <option value="express">Transit Express</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary text-lg">
            Calculer le devis
          </button>
        </form>

        {quote !== null && (
          <div className="mt-6 p-6 bg-gradient-to-r from-primary to-primary-700 text-white rounded-lg">
            <h3 className="text-xl font-heading font-semibold mb-2">Estimation de coût</h3>
            <p className="text-3xl font-bold mb-2">{quote.toFixed(2)} € <span className="text-lg font-normal">/ kg</span></p>
            <p className="text-sm text-gray-200">
              Total estimé: {(quote * (parseFloat(formData.weight) || 0)).toFixed(2)} €
            </p>
            <p className="text-xs text-gray-300 mt-3">
              * Tarif indicatif. Contactez-nous pour un devis précis incluant tous les frais.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
