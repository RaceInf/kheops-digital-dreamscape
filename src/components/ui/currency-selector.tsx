
import React, { useState, useEffect } from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentCurrency, setCurrentCurrency, currencies } from '@/lib/currencyUtils';

export function CurrencySelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getCurrentCurrency());

  useEffect(() => {
    // Set initial value from stored preference or browser default
    setValue(getCurrentCurrency());
  }, []);

  const currencyOptions = Object.keys(currencies).map(code => ({
    value: code,
    label: `${code} (${currencies[code].symbol})`,
  }));

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setCurrentCurrency(currentValue);
    setOpen(false);
    
    // Force refresh components that depend on currency
    window.dispatchEvent(new Event('currency-changed'));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          <span className="truncate">{value || "EUR"}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandEmpty>Aucune devise trouvée.</CommandEmpty>
          <CommandGroup>
            {currencyOptions.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={handleSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === currency.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {currency.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
