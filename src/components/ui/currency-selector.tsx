
import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrentCurrency, setCurrentCurrency, currencies } from '@/lib/currencyUtils';

export function CurrencySelector() {
  const [value, setValue] = useState(getCurrentCurrency());

  useEffect(() => {
    // Set initial value from stored preference or browser default
    setValue(getCurrentCurrency());
  }, []);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setCurrentCurrency(newValue);
    
    // Force refresh components that depend on currency
    window.dispatchEvent(new Event('currency-changed'));
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[100px] bg-white">
        <SelectValue placeholder="Devise" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(currencies).map((code) => (
          <SelectItem key={code} value={code}>
            {code} ({currencies[code].symbol})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
