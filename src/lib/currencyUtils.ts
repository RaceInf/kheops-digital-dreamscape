
type CurrencyConfig = {
  code: string;
  symbol: string;
  rate: number; // Exchange rate relative to base currency (FCFA)
  position: 'before' | 'after';
  decimalSeparator: string;
  thousandSeparator: string;
};

// Default currency configurations
export const currencies: Record<string, CurrencyConfig> = {
  EUR: {
    code: 'EUR',
    symbol: '€',
    rate: 0.0015, // 1 FCFA = 0.0015 EUR
    position: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
  },
  XAF: {
    code: 'XAF',
    symbol: 'FCFA',
    rate: 1, // Base currency
    position: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    rate: 0.0017, // 1 FCFA = 0.0017 USD
    position: 'before',
    decimalSeparator: '.',
    thousandSeparator: ',',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rate: 0.0013, // 1 FCFA = 0.0013 GBP
    position: 'before',
    decimalSeparator: '.',
    thousandSeparator: ',',
  }
};

// Default currency code
let currentCurrency = 'EUR';

export const getCurrentCurrency = (): string => {
  return currentCurrency;
};

export const setCurrentCurrency = (currency: string): void => {
  if (currencies[currency]) {
    currentCurrency = currency;
  } else {
    console.error(`Currency "${currency}" is not supported.`);
  }
};

export const formatPrice = (
  price: number, 
  currencyCode?: string, 
  showDecimal: boolean = false
): string => {
  const currency = currencies[currencyCode || currentCurrency];
  
  if (!currency) {
    console.error(`Currency "${currencyCode}" is not supported.`);
    return `${price}`;
  }
  
  // Convert price from base currency (FCFA) to target currency
  const convertedPrice = price * currency.rate;
  
  // Format the price value
  let formattedValue: string;
  if (showDecimal) {
    formattedValue = convertedPrice.toFixed(2)
      .replace('.', currency.decimalSeparator);
  } else {
    formattedValue = Math.round(convertedPrice)
      .toString();
  }
  
  // Add thousand separators
  formattedValue = formattedValue
    .replace(/\B(?=(\d{3})+(?!\d))/g, currency.thousandSeparator);
  
  // Position the currency symbol
  return currency.position === 'before' 
    ? `${currency.symbol}${formattedValue}` 
    : `${formattedValue} ${currency.symbol}`;
};

// Calculate discount percentage
export const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number): number => {
  if (!originalPrice || originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};
