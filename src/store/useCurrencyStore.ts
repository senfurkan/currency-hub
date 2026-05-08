import { create } from 'zustand';
import type { MarketApiResponse } from '@/types/market';
import type { CurrencyStoreState } from '@/types/store';

const CURRENCY_API_URL = process.env.NEXT_PUBLIC_CURRENCY_API_URL ?? '/api/currency';

export const useCurrencyStore = create<CurrencyStoreState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchCurrency: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(CURRENCY_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Doviz API istegi basarisiz oldu (${response.status})`);
      }

      const payload: MarketApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Doviz API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Doviz verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
