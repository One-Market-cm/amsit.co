'use client';

import { useState } from 'react';

type ShippingType = 'standard' | 'express' | 'half-container' | 'full-container';

interface QuoteResult {
  pricePerKg?: number;
  totalPrice: number;
  shippingType: ShippingType;
}

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    origin: 'Chine',
    destination: '',
    weight: '',
    type: 'standard' as ShippingType,
  });
  const [quote, setQuote] = useState<QuoteResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weight = parseFloat(formData.weight) || 0;
    let calculatedQuote: QuoteResult;
    
    // Calculate based on shipping type
    switch (formData.type) {
      case 'express':
        // Express: 15€/kg
        calculatedQuote = {
          pricePerKg: 15,
          totalPrice: 15 * weight,
          shippingType: 'express'
        };
        break;
      
      case 'standard':
        // Standard: 8€/kg
        calculatedQuote = {
          pricePerKg: 8,
          totalPrice: 8 * weight,
          shippingType: 'standard'
        };
        break;
      
      case 'half-container':
        // Half container (20 pieds): Fixed price
        calculatedQuote = {
          totalPrice: 2500,
          shippingType: 'half-container'
        };
        break;
      
      case 'full-container':
        // Full container (40 pieds): Fixed price
        calculatedQuote = {
          totalPrice: 4500,
          shippingType: 'full-container'
        };
        break;
      
      default:
        calculatedQuote = {
          pricePerKg: 8,
          totalPrice: 8 * weight,
          shippingType: 'standard'
        };
    }
    
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
                required={formData.type !== 'half-container' && formData.type !== 'full-container'}
                min="1"
                disabled={formData.type === 'half-container' || formData.type === 'full-container'}
              />
              {(formData.type === 'half-container' || formData.type === 'full-container') && (
                <p className="text-xs text-gray-500 mt-1">Le poids n&apos;est pas requis pour les conteneurs</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de service
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as ShippingType })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="standard">Transit Standard (8€/kg)</option>
                <option value="express">Transit Express (15€/kg)</option>
                <option value="half-container">Demi-conteneur 20 pieds</option>
                <option value="full-container">Conteneur complet 40 pieds</option>
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
            
            {quote.shippingType === 'half-container' || quote.shippingType === 'full-container' ? (
              <>
                <p className="text-3xl font-bold mb-2">{quote.totalPrice.toFixed(2)} €</p>
                <p className="text-sm text-gray-200">
                  {quote.shippingType === 'half-container' 
                    ? 'Demi-conteneur 20 pieds - Prix forfaitaire' 
                    : 'Conteneur complet 40 pieds - Prix forfaitaire'}
                </p>
                <div className="mt-4 text-sm text-gray-200">
                  <p className="font-semibold mb-1">Inclus dans ce tarif :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Transport maritime</li>
                    <li>Manutention au port</li>
                    <li>Documentation de base</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p className="text-3xl font-bold mb-2">
                  {quote.pricePerKg?.toFixed(2)} € <span className="text-lg font-normal">/ kg</span>
                </p>
                <p className="text-sm text-gray-200">
                  Total estimé pour {formData.weight} kg: {quote.totalPrice.toFixed(2)} €
                </p>
                <p className="text-sm text-gray-200 mt-2">
                  {quote.shippingType === 'express' 
                    ? 'Transit Express - Livraison rapide (15-20 jours)' 
                    : 'Transit Standard - Livraison économique (30-45 jours)'}
                </p>
              </>
            )}
            
            <p className="text-xs text-gray-300 mt-3">
              * Tarif indicatif. Contactez-nous pour un devis précis incluant tous les frais (dédouanement, livraison finale, etc.).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
