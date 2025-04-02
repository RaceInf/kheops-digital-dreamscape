
export type Currency = 'EUR' | 'XAF' | 'USD' | 'GBP';

interface CurrencyConfig {
  symbol: string;
  code: string;
  position: 'before' | 'after';
  exchangeRate: number; // Taux par rapport à l'EUR (1 EUR = X devise)
  decimalPlaces: number;
  thousandSeparator: string;
  decimalSeparator: string;
}

export const currencies: Record<Currency, CurrencyConfig> = {
  EUR: {
    symbol: '€',
    code: 'EUR',
    position: 'after',
    exchangeRate: 1,
    decimalPlaces: 2,
    thousandSeparator: ' ',
    decimalSeparator: ','
  },
  XAF: {
    symbol: 'FCFA',
    code: 'XAF',
    position: 'after',
    exchangeRate: 655.957, // Taux fixe pour le Franc CFA
    decimalPlaces: 0,
    thousandSeparator: ' ',
    decimalSeparator: ','
  },
  USD: {
    symbol: '$',
    code: 'USD',
    position: 'before',
    exchangeRate: 1.08, // Approximatif
    decimalPlaces: 2,
    thousandSeparator: ',',
    decimalSeparator: '.'
  },
  GBP: {
    symbol: '£',
    code: 'GBP',
    position: 'before',
    exchangeRate: 0.85, // Approximatif
    decimalPlaces: 2,
    thousandSeparator: ',',
    decimalSeparator: '.'
  }
};

// Devise par défaut pour l'ensemble du site
export const defaultCurrency: Currency = 'EUR';

export function formatPrice(priceInCents: number, currency: Currency = defaultCurrency): string {
  const config = currencies[currency];
  
  // Convertir le prix de centimes d'EUR vers la devise cible
  const convertedPrice = (priceInCents / 100) * config.exchangeRate;
  
  // Formater le nombre avec les séparateurs appropriés
  const formattedNumber = convertedPrice.toFixed(config.decimalPlaces)
    .replace('.', config.decimalSeparator)
    .replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSeparator);
  
  // Positionner le symbole selon la configuration
  return config.position === 'before' 
    ? `${config.symbol}${formattedNumber}`
    : `${formattedNumber} ${config.symbol}`;
}
