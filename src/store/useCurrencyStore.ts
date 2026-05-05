import { create } from 'zustand';

interface CurrencyItem {
  code?: string;
  currency?: string;
  name?: string;
  price?: number | string;
  buying?: number | string;
  selling?: number | string;
  rate?: number | string;
  time?: string;
  text?: string;
}

interface CurrencyApiResponse {
  success?: boolean;
  result?: CurrencyItem[];
}

interface CurrencyState {
  data: CurrencyItem[];
  isLoading: boolean;
  error: string | null;
  fetchCurrency: () => Promise<void>;
  clearError: () => void;
}

const CURRENCY_API_URL = process.env.NEXT_PUBLIC_CURRENCY_API_URL ?? '/api/currency';

export const useCurrencyStore = create<CurrencyState>((set, get) => ({
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

      const payload: CurrencyApiResponse = await response.json();

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
