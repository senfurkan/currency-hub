import { create } from 'zustand';
import type {
  ExchangeApiResponse,
  SymbolsApiResponse,
} from '@/types/market';
import type { ExchangeStoreState } from '@/types/store';

const SYMBOLS_API_URL = process.env.NEXT_PUBLIC_SYMBOLS_API_URL ?? '/api/symbols';
const EXCHANGE_API_URL = process.env.NEXT_PUBLIC_EXCHANGE_API_URL ?? '/api/exchange';

export const useExchangeStore = create<ExchangeStoreState>((set, get) => ({
  symbols: [],
  result: null,
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchSymbols: async () => {
    if (get().symbols.length > 0) return; // Sadece ilk girişte çek

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(SYMBOLS_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Semboller API istegi basarisiz oldu (${response.status})`);
      }

      const payload: SymbolsApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Semboller API yanit formati gecersiz.');
      }

      set({ symbols: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Semboller alinamadi.';
      set({ error: message, isLoading: false });
    }
  },

  fetchExchange: async (amount, to, base) => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const params = new URLSearchParams({
        int: String(amount),
        to,
        base,
      });

      const response = await fetch(`${EXCHANGE_API_URL}?${params.toString()}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Ceviri API istegi basarisiz oldu (${response.status})`);
      }

      const payload: ExchangeApiResponse = await response.json();
      const firstResult = payload.result?.data?.[0];

      if (!firstResult) {
        throw new Error('Ceviri sonucu bulunamadi.');
      }

      set({ result: firstResult, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Ceviri islemi sirasinda hata olustu.';
      set({ error: message, isLoading: false });
    }
  },

  setResult: (result) => set({ result }),
}));
