import { create } from 'zustand';
import type { CryptoApiResponse } from '@/types/market';
import type { CryptoStoreState } from '@/types/store';

const CRYPTO_API_URL = process.env.NEXT_PUBLIC_CRYPTO_API_URL ?? '/api/crypto';

export const useCryptoStore = create<CryptoStoreState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchCrypto: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(CRYPTO_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Kripto API istegi basarisiz oldu (${response.status})`);
      }

      const payload: CryptoApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Kripto API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Kripto verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
