import React from 'react';
import { DollarSign } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { currencies } from '../context/CurrencyContext';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <DollarSign size={20} className="text-gray-600" />
      <select
        value={currency.code}
        onChange={(e) => {
          const selected = currencies.find(c => c.code === e.target.value);
          if (selected) setCurrency(selected);
        }}
        className="border rounded-md py-1 px-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {currencies.map((curr) => (
          <option key={curr.code} value={curr.code}>
            {curr.code} ({curr.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}